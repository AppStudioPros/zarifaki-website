import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Partners from "@/components/sections/Partners";
import FuelDelivery from "@/components/sections/FuelDelivery";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import FindUs from "@/components/sections/FindUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Partners />
      <FuelDelivery />
      <Services />
      <About />
      <FAQ />
      <FindUs />
    </main>
  );
}
