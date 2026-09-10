import type { Metadata } from "next";
import About from "@/app/components/sections/About";
import Cta from "@/app/components/sections/Cta";

export const metadata: Metadata = {
  title: "About | ADeeLNariai",
  description: "The studio behind the work: how we think, what we ship, and who we do it for.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Cta />
    </>
  );
}
