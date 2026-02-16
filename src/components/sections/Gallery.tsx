import Link from "next/link";
import { Container } from "@/components/ui/Container";

const galleryItems = [
  {
    id: 1,
    title: "Modern Kitchen",
    category: "Kitchen Fitting",
    href: "/projects",
  },
  {
    id: 2,
    title: "Bespoke Wardrobes",
    category: "Carpentry",
    href: "/projects",
  },
  {
    id: 3,
    title: "Hardwood Flooring",
    category: "Flooring",
    href: "/projects",
  },
  {
    id: 4,
    title: "Kitchen Island",
    category: "Kitchen Fitting",
    href: "/projects",
  },
  {
    id: 5,
    title: "Custom Cabinets",
    category: "Joinery",
    href: "/projects",
  },
  {
    id: 6,
    title: "Laminate Flooring",
    category: "Flooring",
    href: "/projects",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-medium text-sm mb-3">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-secondary-600 text-lg">
              Browse our portfolio of completed kitchen fitting, carpentry, and flooring projects 
              across Milton Keynes and Buckinghamshire.
            </p>
          </div>
          <Link 
            href="/projects"
            className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
          >
            View all projects
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
            >
              {/* Placeholder for gallery image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 font-medium">{item.title}</p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-sm font-medium mb-1">{item.category}</p>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
