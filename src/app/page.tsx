import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
    </main>
  );
}
