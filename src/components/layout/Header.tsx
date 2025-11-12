"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/", current: pathname === "/" },
    { name: "About", href: "#about", current: pathname === "" },
    { name: "Gallery", href: "#gallery-preview", current: pathname === "" },
    { name: "Packages", href: "#services", current: pathname === "" },
    { name: "Destinations", href: "#destinations", current: pathname === "" },
    // { name: "Contact", href: "/contact", current: pathname === "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Contact Info Bar */}
      <div className={cn(
        "bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 text-white transition-all duration-300",
        isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-2 space-y-2 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <a href="mailto:andamanclick.com@gmail.com" className="hover:text-orange-300 transition-colors">
                  andamanclick.com@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Havelock, Andaman & Nicobar Islands</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <a href="tel:+919474229712" className="hover:text-orange-300 transition-colors">
                  +91 9474229712
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
  href="https://wa.me/919474229712?text=Hi%20Andamanclick!%20I'm%20interested%20in%20your%20photography%20services.%20Can%20we%20chat%20about%20a%20booking?" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full text-xs font-medium transition-colors"
>
  WhatsApp
</a>
              <div className="flex space-x-3">
                <a href="#" className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-xs font-bold">f</span>
                </a>
                <a href="#" className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <span className="text-xs font-bold">ig</span>
                </a>
                <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <span className="text-xs font-bold">yt</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "transition-all duration-500 ease-in-out backdrop-blur-md",
        isScrolled 
          ? "bg-white/95 shadow-lg border-b border-gray-200" 
          : "bg-white/90"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo size="lg" variant={isScrolled ? "default" : "default"} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 font-medium text-sm transition-all duration-300 group",
                    item.current
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300",
                    item.current 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  )}></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button 
                
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href="#contact">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}></span>
              <span className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : ""
              )}></span>
              <span className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={cn(
            "lg:hidden transition-all duration-500 ease-in-out overflow-hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          )}>
            <div className="space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg",
                    item.current
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideInDown 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-medium transition-all duration-300"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Photography Session
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Header;