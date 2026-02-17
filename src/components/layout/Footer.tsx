import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  { name: "Kitchen Fitting", href: "/kitchen-fitting" },
  { name: "Bespoke Carpentry", href: "/carpentry-and-joinery" },
  { name: "Refurbishments", href: "/carpentry-and-joinery" },
  { name: "Flooring", href: "/flooring-installation" },
  { name: "Bespoke Storage Solutions", href: "/carpentry-and-joinery" },
];

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const contact = {
  phone: "07588 019692",
  email: "info@crc-carpentry.co.uk",
  address: "Milton Keynes, Buckinghamshire",
  hours: "Mon-Fri: 8:00 - 18:00, Sat: 9:00 - 14:00",
};

// Social links
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/CRCCarpentry",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/crc-carpentry",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Google Business",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.002 2.004c-5.518 0-9.998 4.48-9.998 9.998 0 4.418 2.902 8.18 6.92 9.49.19.03.44-.08.54-.26.08-.16.04-.34-.02-.48-.06-.16-.18-.28-.36-.38-.48-.26-1.04-.44-1.7-.56.4-.16.74-.38 1.02-.66.64-.66.98-1.5.98-2.38 0-.18-.02-.36-.04-.54h-.02c-.18.02-.36.04-.54.04H12V8.004h-.024c.02.18.04.36.04.54 0 1.36-.48 2.64-1.34 3.62-.86.98-2.04 1.58-3.38 1.72-.22.02-.44.04-.66.04-.86 0-1.68-.14-2.44-.42-.76-.28-1.4-.7-1.9-1.24-.5-.54-.88-1.18-1.12-1.88-.24-.7-.36-1.44-.36-2.2 0-3.62 2.96-6.56 6.6-6.56h.04c1.76-.02 3.38.66 4.58 1.84.7-.22 1.42-.32 2.16-.28.28-.44.6-.84.96-1.2-.58-.56-1.34-.92-2.16-1-.82-.08-1.64.14-2.34.6-.56.38-1 .88-1.26 1.48-.26.6-.36 1.24-.28 1.88-.82.18-1.58.56-2.2 1.08-.62.52-1.08 1.18-1.34 1.92-.26.74-.32 1.52-.18 2.28.14.76.48 1.46.98 2.04.5.58 1.14 1.04 1.88 1.32.74.28 1.52.4 2.3.34.78-.06 1.52-.3 2.16-.68-.14.3-.22.62-.22.96 0 .84.48 1.6 1.22 2.02.74.42 1.62.44 2.4.06.54-.26 1-.66 1.32-1.14.32-.48.5-1.04.52-1.62 1.22-.14 2.28-.68 3.04-1.5.76-.82 1.16-1.86 1.12-2.96-.04-1.1-.5-2.14-1.3-2.94-.8-.8-1.84-1.26-2.94-1.3-.3-.02-.6.02-.88.1.12-.4.18-.82.18-1.24 0-2.76-2.24-5-5-5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Column 1: About/Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-primary">CRC</span>
              <span className="text-lg font-medium ml-2 text-white">Carpentry & Joinery</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Master kitchen fitters and bespoke carpentry specialists serving Milton Keynes & Bedfordshire
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} CRC Carpentry & Joinery. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-700">|</span>
              <span>Website by CRC</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
