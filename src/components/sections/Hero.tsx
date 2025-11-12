"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";


export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroSlides = [
    {
      image: "images/header1.jpg",
      title: "Capture Paradise",
      subtitle: "Professional Photography in Andaman & Nicobar Islands",
      description: "Transform your memories into masterpieces with our expert photography services"
    },
    {
      image: "images/header2.webp",
      title: "Dive Into Beauty",
      subtitle: "Underwater Photography Specialists",
      description: "Explore the magical underwater world with our advanced diving photography equipment"
    },
    {
      image: "images/header3.jpg",
      title: "Wedding in Paradise",
      subtitle: "Destination Wedding Photography",
      description: "Create timeless memories of your special day in the world's most beautiful islands"
    },
    {
  image: "images/header4.jpg",
  title: "Sunset Serenity havelock",
  subtitle: "Golden Hour Photography",
  description: "Capture the breathtaking beauty of the sun melting into the horizon, painting the sky with shades of gold and crimson."
}

  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              currentSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            {/* <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            /> */}
            <div className="relative w-full h-full">
  <Image
    src={slide.image.startsWith("/") ? slide.image : `/${slide.image}`}
    alt={slide.title}
    fill
    priority={index === 0}
    className="object-cover"
    sizes="100vw"
  />
</div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Animated Ocean Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-500/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-8">
            <div className="wave-animation h-full bg-gradient-to-r from-cyan-400/40 to-blue-500/40"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-playfair">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                {heroSlides[currentSlide].title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-cyan-100 mb-4 font-medium">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              >
                <Link href="#services">View Packages</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('gallery-preview')}
              >
                See Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center space-x-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>Professional Equipment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>Same Day Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span>All Weather Photography</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={() => scrollToSection('services')}
          className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Scroll down"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 border-b-2 border-r-2 border-white transform rotate-45"></div>
          </div>
        </button>
      </div>

      <style jsx>{`
        .wave-animation {
          background: linear-gradient(90deg, #06b6d4, #0891b2, #0e7490, #0891b2, #06b6d4);
          background-size: 200% 100%;
          animation: wave 3s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;