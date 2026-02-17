import Link from "next/link";
import { Container } from "@/components/ui/Container";

const galleryItems = [
  {
    id: 1,
    title: "Modern Kitchen",
    location: "Milton Keynes",
    category: "Kitchen Fitting",
    href: "/projects",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: 2,
    title: "Bespoke Wardrobes",
    location: "Leighton Buzzard",
    category: "Carpentry",
    href: "/projects",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
  },
  {
    id: 3,
    title: "General Carpentry",
    location: "Buckinghamshire",
    category: "Carpentry",
    href: "/projects",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    id: 4,
    title: "Laminate Flooring",
    location: "Milton Keynes",
    category: "Flooring",
    href: "/projects",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="projects">
      {/* Dramatic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2C1810] to-[#3A3A3A]" />
      
      {/* Subtle Gold Geometric Pattern (3% opacity) */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0zM20 10L30 20L20 30L10 20L20 10z' stroke='%23D4AF37' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Additional subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Latest Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Browse our portfolio of completed kitchen fitting, carpentry, and flooring projects
              across Milton Keynes and Buckinghamshire.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center text-primary font-semibold text-lg hover:text-white transition-all duration-300"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Grid - Horizontal scroll on mobile */}
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {galleryItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900/50 cursor-pointer block flex-shrink-0 w-[85vw] md:w-auto shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              {/* Image with zoom effect */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Gold badge */}
                  <p className="inline-block text-xs font-medium mb-3 px-4 py-1.5 bg-[#D4AF37]/90 backdrop-blur-sm text-secondary-900 rounded-full uppercase tracking-wider font-semibold">{item.category}</p>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Hover overlay with shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-300" />
              
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-2xl transition-all duration-300" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
