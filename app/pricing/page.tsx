import type { Metadata } from "next";
import Pricing from "@/app/components/sections/Pricing";
import Faq from "@/app/components/sections/Faq";
import Cta from "@/app/components/sections/Cta";

export const metadata: Metadata = {
  title: "Pricing | ADeeLNariai",
  description: "Simple monthly plans for design and development. No calls needed to see a number.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
