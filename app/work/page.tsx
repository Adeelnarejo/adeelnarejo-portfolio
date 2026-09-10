import type { Metadata } from "next";
import Work from "@/app/components/sections/Work";
import Cta from "@/app/components/sections/Cta";

export const metadata: Metadata = {
  title: "Work | ADeeLNariai",
  description: "Selected projects: brands, websites and products built to be impossible to ignore.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Work />
      <Cta />
    </>
  );
}
