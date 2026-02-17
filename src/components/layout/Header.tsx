"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Navigation links - left side
const leftNavLinks = [
  { name: "Home", href: "#hero", sectionId: "hero" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Services", href: "#services", sectionId: "services" },
];

// Navigation links - right side
const rightNavLinks = [
  { name: "Projects", href: "#projects", sectionId: "projects" },
  { name: "Testimonials", href: "#testimonials", sectionId: "testimonials" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

// Logo URL from user
const logoUrl = "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-02-18%2FMiniMax-M2.5%2F2022335301715759817%2Fc46b876302e9988c3e9220e0576fc8d183150dafe29b1d1ed5a1547ecf56d463..png?Expires=1771435225&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=p4APd5q0U7y8nH9CzWoqUcZI5ig%3D";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "projects",
        "testimonials",
        "contact",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollObserver);
    return () => window.removeEventListener("scroll", handleScrollObserver);
  }, []);

  // Handle smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle mobile menu close after link click
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Determine if header should show light text (over hero)
  const showLightText = !isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          // Transparent state (when at top)
          !isScrolled && "bg-transparent",
          // Scrolled state
          isScrolled && "bg-white/95 backdrop-blur-md shadow-sm border-b border-primary/20"
        )}
        style={{ height: "90px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-6">
              {leftNavLinks.map((link) => (
                <a
                  key={link.sectionId}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                    showLightText 
                      ? "text-white hover:text-primary-light drop-shadow-md" 
                      : "text-secondary-700 hover:text-primary"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Logo - Centered */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <div className={cn(
                  "transition-all duration-300",
                  showLightText && "drop-shadow-lg"
                )}>
                  <Image
                    src={logoUrl}
                    alt="CRC Carpentry & Joinery"
                    width={267}
                    height={80}
                    className="h-auto"
                    style={{ height: "80px", width: "auto" }}
                    unoptimized
                  />
                </div>
              </Link>
            </div>

            {/* Right Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-6">
              {rightNavLinks.map((link) => (
                <a
                  key={link.sectionId}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                    showLightText 
                      ? "text-white hover:text-primary-light drop-shadow-md" 
                      : "text-secondary-700 hover:text-primary"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors duration-200",
                showLightText 
                  ? "text-white hover:text-primary-light" 
                  : "text-secondary-700 hover:text-primary"
              )}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 w-72 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="pt-20 px-6 pb-6">
            {/* Mobile Logo */}
            <div className="mb-6 pb-4 border-b border-gray-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src={logoUrl}
                  alt="CRC Carpentry & Joinery"
                  width={240}
                  height={60}
                  className="h-auto"
                  style={{ height: "60px", width: "auto" }}
                  unoptimized
                />
              </Link>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-1">
              {[...leftNavLinks, ...rightNavLinks].map((link) => (
                <a
                  key={link.sectionId}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    handleMobileLinkClick();
                  }}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg",
                    activeSection === link.sectionId
                      ? "text-primary bg-primary/5"
                      : "text-secondary-700 hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="#contact"
                onClick={(e) => {
                  handleSmoothScroll(e, "#contact");
                  handleMobileLinkClick();
                }}
                className="block w-full text-center px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
