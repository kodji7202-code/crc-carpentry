import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Kitchens",
    description: "Complete kitchen transformations with master precision and premium finishes",
    count: 7,
    services: [
      "Kitchen Fitters - Installation",
      "Kitchen Fitters - Supply & Installation",
      "Kitchen Refurbishments",
      "Worktops",
      "Worktops - Laminate",
      "Worktops - Solid Wood",
      "Worktops - Acrylic",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    href: "/kitchen-fitting",
    color: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Carpets / Flooring",
    description: "Specialist installation of engineered wood, laminate and LVT flooring",
    count: 8,
    services: [
      "Hardwood Flooring Specialist",
      "Interlocking Floor Tiles",
      "Laminate Flooring",
      "Parquet Flooring",
      "Ply Boarding",
      "Vinyl Floor Tiles",
      "Wood Flooring Installers",
      "Wooden floor specialist",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    href: "/flooring-installation",
    color: "bg-slate-50",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Professional Kitchen & Flooring Services
          </h2>
          <p className="text-secondary-600 text-base md:text-lg max-w-2xl mx-auto">
            Expert installation and refurbishment services for kitchens and flooring across Milton Keynes and Buckinghamshire.
          </p>
        </div>

        {/* Services Grid - 1 col mobile, 2 cols tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.15}>
              <Link href={service.href} className="block group">
                <div className={`relative overflow-hidden rounded-2xl ${service.color || 'bg-gray-50'} border border-gray-100 p-5 md:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.iconBg || 'bg-primary/10'} rounded-2xl flex items-center justify-center ${service.iconColor || 'text-primary'} mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    {/* Title & Count */}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-secondary-900">{service.title}</h3>
                      {service.count && (
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          ({service.count})
                        </span>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-secondary-600 text-sm md:text-base mb-4">
                      {service.description}
                    </p>
                    
                    {/* Services List */}
                    {service.services && service.services.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {service.services.map((item, idx) => (
                          <div key={idx} className="flex items-center text-xs md:text-sm text-secondary-700 bg-white/60 rounded-lg px-3 py-2 border border-gray-100">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Learn More Link */}
                    <div className="inline-flex items-center text-primary font-semibold text-sm md:text-base group-hover:text-primary-dark transition-colors">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
