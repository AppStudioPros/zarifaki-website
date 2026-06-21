import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
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
      <FuelDelivery />
      <Services />
      <About />
      <FAQ />
      <FindUs />
    </main>
  );
}
