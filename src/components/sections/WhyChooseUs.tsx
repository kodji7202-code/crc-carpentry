"use client";

import { Container } from "@/components/ui/Container";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Craftsmanship",
    description: "Every project receives our undivided attention and meticulous craftsmanship. We take pride in delivering work that exceeds expectations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Local Trust",
    description: "Built on word-of-mouth recommendations and repeat business. We're proud to be a trusted name in the Milton Keynes and Bedfordshire community.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Bespoke Design",
    description: "No off-the-shelf solutions. Every piece is custom-designed to fit your space, style, and specific requirements perfectly.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Reliable Work",
    description: "On time, on budget, every time. We communicate clearly throughout the project and deliver what we promise.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  {
    value: "10+",
    label: "Years Experience",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "5-Star",
    label: "Customer Rated",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    value: "Free",
    label: "Quotations",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-20 md:py-24 relative overflow-hidden" id="about">
      {/* Premium Background - Woodworking image with heavy blur and overlay */}
      <div className="absolute inset-0">
        {/* Woodworking background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80')",
          }}
        />
        {/* Heavy blur for depth */}
        <div className="absolute inset-0 backdrop-blur-xl" />
        {/* Dark overlay gradient - 85% opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/80" />
      </div>
      
      {/* Subtle gold pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' stroke='%23D4AF37' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The CRC Difference
          </h2>
          <p className="text-gray-300 text-lg">
            With over 10 years of experience, we bring expertise, dedication, and 
            passion to every project we undertake.
          </p>
        </div>

        {/* Stats Bar - Premium Dark with Gold Accents */}
        <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-4">
              {/* Gold icon with shimmer/glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full transform scale-150" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B6914] flex items-center justify-center text-white shadow-2xl">
                  {stat.icon}
                </div>
              </div>
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
              {/* Gold vertical separator - hidden on last item and mobile */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent ml-4" />
              )}
            </div>
          ))}
        </div>

        {/* Features Grid - 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isVisible ? `${index * 0.1 + 0.4}s` : '0s' }}
            >
              {/* Semi-transparent card with backdrop blur and gold border */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2 h-full group-hover:shadow-2xl group-hover:shadow-[#D4AF37]/10">
                {/* Gold icon with glow on hover */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/10 rounded-2xl text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
