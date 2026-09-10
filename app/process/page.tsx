import type { Metadata } from "next";
import Process from "@/app/components/sections/Process";
import Cta from "@/app/components/sections/Cta";

export const metadata: Metadata = {
  title: "Process | ADeeLNariai",
  description: "From first message to launch — the exact way a project moves through the studio.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <Process />
      <Cta />
    </>
  );
}
