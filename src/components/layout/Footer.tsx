"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery-preview" },
    { name: "Packages", href: "#services" },
    { name: "Destinations", href: "#destinations" },

  ];

  const services = [
    { name: "Beach Photography", href: "#services" },
    { name: "Underwater Photography", href: "#services" },
    { name: "Wedding Photography", href: "#services" },
    { name: "Sunset Photography", href: "#services" },
    { name: "Adventure Photography", href: "#services" },
    { name: "Tour Photography", href: "#services" },
  ];

  const destinations = [
    { name: "Havelock Island", href: "/destinations#havelock" },
    { name: "Neil Island", href: "/destinations#neil" },
    { name: "Port Blair", href: "/destinations#port-blair" },
    { name: "Ross Island", href: "/destinations#ross" },
    { name: "Baratang Island", href: "/destinations#baratang" },
    { name: "Diglipur", href: "/destinations#diglipur" },
  ];

  const contactInfo = [
    {
      type: "Address",
      value: "Havelock, Andaman & Nicobar Islands",
      icon: "📍"
    },
    {
      type: "Phone",
      value: "+91 9474229712",
      link: "tel:+919474229712",
      icon: "📞"
    },
    {
      type: "Email",
      value: "andamanclick.com@gmail.com",
      link: "mailto:andamanclick.com@gmail.com",
      icon: "✉️"
    },
    {
      type: "WhatsApp",
      value: "+91 919474229712",
      link: "https://wa.me/919474229712",
      icon: "💬"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="lg" />
            <p className="text-gray-300 mt-6 mb-6 leading-relaxed">
              Professional photography services in the breathtaking Andaman & Nicobar Islands. 
              We specialize in capturing the natural beauty and unforgettable moments of your 
              tropical paradise experience.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">ig</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
                aria-label="YouTube"
              >
                <span className="text-xs font-bold">yt</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <span className="text-xs font-bold">tw</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.type} className="flex items-start space-x-3">
                  <span className="text-lg">{info.icon}</span>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.type}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                        target={info.type === "WhatsApp" ? "_blank" : "_self"}
                        rel={info.type === "WhatsApp" ? "noopener noreferrer" : ""}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-300 whitespace-pre-line">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Button */}
            <div className="mt-6">
              <Button 
                
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-medium transition-all duration-300"
              >
                <Link href="#contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Destinations Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-6 text-white text-center">Popular Destinations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {destinations.map((destination) => (
              <Link
                key={destination.name}
                href={"#destinations"}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                {destination.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Subscribe to receive latest photography tips, destination guides, and special offers.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div> */}
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Andamanclick.com - All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional Photography Services in Andaman & Nicobar Islands
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Business Info */}
          <div className="mt-4 pt-4 border-t border-gray-900 text-center">
            <p className="text-gray-500 text-xs">
              Licensed Photography Services | Tourism Department Approved |  
              Design & Hosted : <a href="https://sauravwebtechsolution.in/">sauravwebtechsolution.in</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;