import Hero from "@/app/components/sections/Hero";
import Why from "@/app/components/sections/Why";
import Reviews from "@/app/components/sections/Reviews";
import Cta from "@/app/components/sections/Cta";
import Dropfun from "@/app/components/sections/Dropfun";

/* Landing page: hero + the highlights. Everything else lives on its own route
   (/about, /process, /services, /work, /pricing, /contact). */
export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Reviews />
      <Cta />
      <Dropfun />
    </>
  );
}
