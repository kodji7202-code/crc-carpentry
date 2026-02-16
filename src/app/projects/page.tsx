import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Our Projects | Kitchen Fitting & Carpentry Portfolio | CRC Carpentry",
  description: "Browse our portfolio of completed kitchen fitting, carpentry, and flooring projects in Milton Keynes and Buckinghamshire.",
};

const projects = [
  {
    id: 1,
    title: "Modern Grey Kitchen",
    category: "Kitchen Fitting",
    location: "Milton Keynes",
    description: "Complete kitchen renovation featuring grey handleless cabinets, quartz worktops, and integrated appliances.",
  },
  {
    id: 2,
    title: "Bespoke Walk-in Wardrobe",
    category: "Carpentry",
    location: "Bletchley",
    description: "Custom-designed walk-in wardrobe with oak shelving, hanging rails, and LED lighting.",
  },
  {
    id: 3,
    title: "Oak Hardwood Flooring",
    category: "Flooring",
    location: "Wolverton",
    description: "Engineered oak flooring throughout ground floor with professional finishing.",
  },
  {
    id: 4,
    title: "White Gloss Kitchen",
    category: "Kitchen Fitting",
    location: "Stoke Goldington",
    description: "Contemporary white gloss kitchen with island unit and waterfall edge worktops.",
  },
  {
    id: 5,
    title: "Custom Bookshelf Unit",
    category: "Carpentry",
    location: "Milton Keynes",
    description: "Bespoke floor-to-ceiling bookshelf in walnut with integrated reading nook.",
  },
  {
    id: 6,
    title: "Luxury Vinyl Flooring",
    category: "Flooring",
    location: "Newport Pagnell",
    description: "LVT herringbone flooring in kitchen and bathroom areas.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium text-sm mb-3">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Browse our portfolio of completed projects across Milton Keynes and Buckinghamshire. 
              From stunning kitchen installations to bespoke carpentry work.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary text-sm font-medium">{project.category}</span>
                    <span className="text-secondary-500 text-sm">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Project Today
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Ready to transform your home? Contact us to discuss your requirements and get a free quote.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
