"use client";

import { Container } from "@/components/ui/Container";
import { useEffect, useRef, useState } from "react";

const areas = [
  "Milton Keynes",
  "Leighton Buzzard",
  "Luton",
  "Bedford",
  "Newport Pagnell",
  "Wolverton",
  "Bletchley",
  "Fenny Stratford",
  "Stoke Mandeville",
  "Wobaston",
  "Houghton Regis",
  "Dunstable",
  "Kempston",
  "Ampthill",
  "Flitwick",
];

export default function AreasWeServe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 relative overflow-hidden" id="areas-we-serve">
      {/* Aerial City View Background with Blur and Dark Overlay */}
      <div className="absolute inset-0">
        {/* City/aerial background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&q=80')",
          }}
        />
        {/* Heavy blur for premium effect */}
        <div className="absolute inset-0 backdrop-blur-2xl" />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90" />
      </div>
      
      {/* Subtle gold pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0z' stroke='%23D4AF37' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-medium text-sm mb-3 tracking-wider uppercase">Service Area</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Proudly Serving Milton Keynes & Surrounding Areas
          </h2>
          <p className="text-gray-300 text-lg">
            We provide expert carpentry and kitchen fitting services across Bedfordshire & Buckinghamshire, 
            bringing exceptional craftsmanship to homes throughout the region.
          </p>
        </div>

        {/* Areas Grid - Gold Pill/Tag Badges with Hover Effects */}
        <div className={`flex flex-wrap justify-center gap-3 md:gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {areas.map((area, index) => (
            <span 
              key={area}
              className="group inline-flex items-center px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 text-white font-medium rounded-full hover:bg-[#D4AF37] hover:text-secondary-900 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2 group-hover:bg-secondary-900 transition-colors duration-300" />
              {area}
            </span>
          ))}
        </div>

        {/* Additional SEO Text */}
        <div className={`mt-8 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Based in Milton Keynes, we travel throughout Bedfordshire and Buckinghamshire to bring 
            our expert carpentry services to customers in areas including <strong className="text-[#D4AF37]">Leighton Buzzard</strong>,{" "}
            <strong className="text-[#D4AF37]">Luton</strong>, <strong className="text-[#D4AF37]">Bedford</strong>, <strong className="text-[#D4AF37]">Newport Pagnell</strong>, and surrounding villages.
            No job is too small - contact us today for a free quote on your carpentry project.
          </p>
        </div>
      </Container>
    </section>
  );
}
