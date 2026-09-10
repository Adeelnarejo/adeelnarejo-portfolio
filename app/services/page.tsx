import type { Metadata } from "next";
import Services from "@/app/components/sections/Services";
import Cta from "@/app/components/sections/Cta";

export const metadata: Metadata = {
  title: "Services | ADeeLNariai",
  description: "Brand, web design, development and everything in between.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <Cta />
    </>
  );
}
