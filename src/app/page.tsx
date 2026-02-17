import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import AreasWeServe from "@/components/sections/AreasWeServe";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTA />
      <AreasWeServe />
      <BrandsMarquee />
      <Footer />
    </main>
  );
}
