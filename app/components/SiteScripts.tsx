"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LEGACY_SCRIPTS } from "./legacy-scripts";

/**
 * The site's behaviour lives in plain DOM scripts that were written for a
 * single static document: they query the page once, attach observers and rAF
 * loops, and never expect the markup to be swapped underneath them.
 *
 * With client-side routing the markup *is* swapped, so those scripts have to be
 * run again for every route — and the previous run has to be torn down first,
 * or every navigation would leave behind another scroll listener, another
 * 1s clock interval and another physics loop.
 *
 * Rather than rewriting ~50KB of that code, each script is executed with the
 * globals it uses shadowed by tracked equivalents. Because the shadowing is
 * lexical, callbacks the script schedules *later* (a setTimeout chain that
 * re-arms itself, a rAF loop) also land on the tracked versions, so a single
 * cleanup pass can stop all of it.
 */

type Cleanup = () => void;

/* ---- matter.js (physics for the capybara drop) ------------------------- */
/* Matter drives its own internal rAF, so shadowing globals cannot stop it.
   Instead we record the runners it starts and stop them by hand. */
type MatterInstance = { gen: number; kind: "runner" | "render"; obj: unknown };
const matterInstances: MatterInstance[] = [];
let generation = 0;

/* eslint-disable @typescript-eslint/no-explicit-any */
function patchMatter() {
  const M = (window as any).Matter;
  if (!M || M.__omPatched) return;
  M.__omPatched = true;

  const runnerRun = M.Runner.run;
  M.Runner.run = function (this: unknown, ...args: any[]) {
    matterInstances.push({ gen: generation, kind: "runner", obj: args[0] });
    return runnerRun.apply(this, args);
  };
  const renderRun = M.Render.run;
  M.Render.run = function (this: unknown, ...args: any[]) {
    matterInstances.push({ gen: generation, kind: "render", obj: args[0] });
    return renderRun.apply(this, args);
  };
}

function stopMatter(gen: number) {
  const M = (window as any).Matter;
  if (!M) return;
  for (let i = matterInstances.length - 1; i >= 0; i--) {
    const it = matterInstances[i];
    if (it.gen !== gen) continue;
    try {
      if (it.kind === "runner") M.Runner.stop(it.obj);
      else M.Render.stop(it.obj);
    } catch {
      /* already stopped */
    }
    matterInstances.splice(i, 1);
  }
}

/* ---- one run of every legacy script, with a teardown ------------------- */
function runLegacyScripts(): Cleanup {
  const gen = ++generation;
  patchMatter();

  const undo: Cleanup[] = [];
  const timers = new Set<number>();
  const intervals = new Set<number>();
  const frames = new Set<number>();
  const observers = new Set<{ disconnect(): void }>();

  const trackedTimeout = (fn: TimerHandler, ms?: number, ...rest: any[]) => {
    const id = window.setTimeout(fn, ms, ...rest);
    timers.add(id);
    return id;
  };
  const trackedInterval = (fn: TimerHandler, ms?: number, ...rest: any[]) => {
    const id = window.setInterval(fn, ms, ...rest);
    intervals.add(id);
    return id;
  };
  const trackedFrame = (fn: FrameRequestCallback) => {
    const id = window.requestAnimationFrame(fn);
    frames.add(id);
    return id;
  };

  class TrackedIntersectionObserver extends IntersectionObserver {
    constructor(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
      super(cb, opts);
      observers.add(this);
    }
  }
  class TrackedResizeObserver extends ResizeObserver {
    constructor(cb: ResizeObserverCallback) {
      super(cb);
      observers.add(this);
    }
  }

  const listen =
    (target: EventTarget) =>
    (type: string, fn: EventListenerOrEventListenerObject, opts?: any) => {
      target.addEventListener(type, fn, opts);
      undo.push(() => target.removeEventListener(type, fn, opts));
    };

  const shadow: Record<string | symbol, unknown> = {
    setTimeout: trackedTimeout,
    setInterval: trackedInterval,
    requestAnimationFrame: trackedFrame,
    IntersectionObserver: TrackedIntersectionObserver,
    ResizeObserver: TrackedResizeObserver,
  };

  const proxyFor = (real: Window | Document) =>
    new Proxy(real, {
      get(target, key) {
        if (key === "addEventListener") return listen(target);
        if (target === window && key in shadow) return shadow[key];
        const value = Reflect.get(target, key);
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target, key, value) => Reflect.set(target, key, value),
      has: (target, key) => Reflect.has(target, key),
    });

  const win = proxyFor(window);
  const doc = proxyFor(document);

  /* Matter is referenced as a bare global inside the drop script, and it may
     still be downloading — resolve it lazily on each property read. */
  const matter = new Proxy(
    {},
    {
      get: (_t, key) => (window as any).Matter?.[key],
      has: (_t, key) => !!(window as any).Matter && key in (window as any).Matter,
    }
  );

  /* Element listeners (`el.addEventListener`) are added synchronously by these
     scripts. Most elements are replaced on navigation and take their listeners
     with them, but the chrome — footer, nav, floating widgets — survives, so
     those have to be unbound explicitly. */
  const nativeAdd = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (
    this: EventTarget,
    type: string,
    fn: EventListenerOrEventListenerObject,
    opts?: any
  ) {
    undo.push(() => this.removeEventListener(type, fn, opts));
    return nativeAdd.call(this, type, fn, opts);
  };

  try {
    for (const { id, code } of LEGACY_SCRIPTS) {
      try {
        const run = new Function(
          "window",
          "document",
          "addEventListener",
          "setTimeout",
          "setInterval",
          "requestAnimationFrame",
          "IntersectionObserver",
          "ResizeObserver",
          "Matter",
          code
        );
        run.call(
          win,
          win,
          doc,
          listen(window),
          trackedTimeout,
          trackedInterval,
          trackedFrame,
          TrackedIntersectionObserver,
          TrackedResizeObserver,
          matter
        );
      } catch (err) {
        console.error(`[site-scripts] ${id} failed`, err);
      }
    }
  } finally {
    EventTarget.prototype.addEventListener = nativeAdd;
  }

  return () => {
    undo.forEach((fn) => {
      try {
        fn();
      } catch {
        /* target already gone */
      }
    });
    timers.forEach((id) => clearTimeout(id));
    intervals.forEach((id) => clearInterval(id));
    frames.forEach((id) => cancelAnimationFrame(id));
    observers.forEach((o) => o.disconnect());
    stopMatter(gen);
  };
}

export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => runLegacyScripts(), [pathname]);

  return (
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"
      strategy="afterInteractive"
      onReady={patchMatter}
    />
  );
}
