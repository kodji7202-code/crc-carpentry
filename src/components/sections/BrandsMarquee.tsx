"use client";

import { Container } from "@/components/ui/Container";

const brands = [
  { name: "Bosch", logo: "B" },
  { name: "Siemens", logo: "S" },
  { name: "Blanco", logo: "B" },
  { name: "Quooker", logo: "Q" },
  { name: "Franke", logo: "F" },
  { name: "Howdens", logo: "H" },
  { name: "Wren", logo: "W" },
  { name: "Neff", logo: "N" },
  { name: "AEG", logo: "A" },
  { name: "Miele", logo: "M" },
];

export default function BrandsMarquee() {
  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <Container>
        <div className="text-center mb-8">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase">
            Trusted Brands
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mt-2">
            We Work With Premium Brands
          </h3>
        </div>
      </Container>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex items-center">
          {/* First set of brands */}
          <div className="flex items-center gap-8 md:gap-16 animate-marquee">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-28 h-16 md:w-36 md:h-20 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
                  {brand.logo}
                </span>
                <span className="ml-2 text-xs md:text-sm font-medium text-gray-400 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 0 ? "bg-primary w-8" : "bg-gray-300"
            } transition-all duration-300`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
