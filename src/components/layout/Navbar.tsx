"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Kitchen Fitting", href: "/kitchen-fitting" },
  { name: "Carpentry & Joinery", href: "/carpentry-and-joinery" },
  { name: "Flooring", href: "/flooring-installation" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">CRC</span>
            <span className={cn("text-lg font-medium", isScrolled ? "text-secondary-900" : "text-secondary-900")}>
              Carpentry & Joinery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary",
                  isScrolled ? "text-secondary-700" : "text-secondary-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button size="sm">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
