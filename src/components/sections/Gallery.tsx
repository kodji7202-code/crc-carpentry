import Link from "next/link";
import { Container } from "@/components/ui/Container";

const galleryItems = [
  {
    id: 1,
    title: "Modern Kitchen",
    location: "Milton Keynes",
    category: "Kitchen Fitting",
    href: "/projects",
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-02-17%2FMiniMax-M2.5%2F2022335301715759817%2Faf6701660e393bdb76c6ca8703257c22cc0c38e68ef32a9aeb30a7ab123d81a1..webp?Expires=1771351940&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=7HrUsrx9hdMP6UtZlMxBJ3Hu5bc%3D",
  },
  {
    id: 2,
    title: "Bespoke Wardrobes",
    location: "Leighton Buzzard",
    category: "Carpentry",
    href: "/projects",
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-02-17%2FMiniMax-M2.5%2F2022335301715759817%2Fac34eba7e9a8f0bb7cb78ec8f4a9190d7e5c72007e21576fb681066299ca6b35..webp?Expires=1771352078&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=wTK6D%2FWdQYURydLXgHV7Fo3vZQA%3D",
  },
  {
    id: 3,
    title: "General Carpentry",
    location: "Buckinghamshire",
    category: "Carpentry",
    href: "/projects",
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-02-17%2FMiniMax-M2.5%2F2022335301715759817%2F3c2d096cc1a8716a5401a126c95e852cbd90362963a80a26dc637ebb0b02039a..webp?Expires=1771352196&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=W%2B80p1%2Fl9zywiPnIYk5o6IPPg6U%3D",
  },
  {
    id: 4,
    title: "Laminate Flooring",
    location: "Milton Keynes",
    category: "Flooring",
    href: "/projects",
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-02-17%2FMiniMax-M2.5%2F2022335301715759817%2F240f62c5f4a663672632e32318c89397d5cad5df2d84fc425d117e36f81902d0..webp?Expires=1771352270&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=b143p6KsJBXZQIA5%2FmpmjT%2FBjyM%3D",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-white" id="projects">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-medium text-sm mb-3">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Latest Projects
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
            View All Projects
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer animate-fade-in-up block"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              
              {/* Overlay - Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-xs font-medium mb-1 uppercase tracking-wider">{item.category}</p>
                  <h3 className="text-white text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Hover overlay for extra content */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
