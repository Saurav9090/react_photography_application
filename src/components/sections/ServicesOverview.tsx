"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ServicesOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Beach Photography",
      description:
        "Capture the pristine beauty of Andaman's world-famous beaches with golden hour lighting and crystal-clear waters.",
      image: "images/service section/beach photography.jpg",
      features: [
        "Golden Hour Sessions",
        "Drone Photography",
        "High-Resolution Images",
        "Same Day Editing",
      ],
      price: "₹8,000",
      duration: "2-3 hours",
      icon: "🏖️",
    },
    {
      title: "Underwater Photography",
      description:
        "Explore the vibrant marine life and coral reefs with our professional underwater photography equipment.",
      image: "images/service section/underwater photography.avif",
      features: [
        "Professional Diving Gear",
        "Waterproof Equipment",
        "Marine Life Focus",
        "Editing Included",
      ],
      price: "₹15,000",
      duration: "Half Day",
      icon: "🤿",
    },
    {
      title: "Sunset Photography",
      description:
        "Witness and capture the breathtaking sunsets that paint the sky in magnificent colors over the Andaman Sea.",
      image: "images/service section/sunset photography.jpg",
      features: [
        "Best Sunset Locations",
        "Couple Sessions",
        "Family Portraits",
        "Romantic Ambiance",
      ],
      price: "₹6,000",
      duration: "1-2 hours",
      icon: "🌅",
    },
    {
      title: "Adventure Photography",
      description:
        "Document your thrilling water sports and adventure activities with action-packed photography.",
      image: "images/service section/adventure photography.jpg",
      features: [
        "Water Sports Coverage",
        "Action Shots",
        "GoPro Footage",
        "Adventure Albums",
      ],
      price: "₹12,000",
      duration: "Full Day",
      icon: "🚤",
    },
    {
      title: "Full Wedding Photography",
      description:
        "Create magical memories of your destination wedding in the tropical paradise of Andaman Islands.",
      image: "images/service section/wedding photography.jpg",
      features: [
        "Pre-Wedding Shoot",
        "Ceremony Coverage",
        "Reception Photos",
        "Highlight Reel",
      ],
      price: "₹50,000",
      duration: "2-3 Days",
      icon: "💍",
    },
    {
      title: "Tour Photography",
      description:
        "Professional photography services for your complete Andaman tour with all major attractions covered.",
      image: "images/service section/tour photography.jpg",
      features: [
        "Multi-Location Shoots",
        "Group Photography",
        "Itinerary Planning",
        "Travel Coverage",
      ],
      price: "₹20,000",
      duration: "Multi-Day",
      icon: "📸",
    },
  ];

  // helper to ensure leading slash and encode spaces/special chars
  const safePath = (p: string) => encodeURI(p.startsWith("/") ? p : `/${p}`);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-playfair">
            Our Photography
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From pristine beaches to vibrant coral reefs, we capture the essence of Andaman &amp; Nicobar Islands 
            with professional equipment and artistic vision. Every moment becomes a masterpiece.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const src = safePath(service.image);

            return (
              <Card
                key={service.title}
                className={cn(
                  "group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-3xl",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: isVisible ? "fadeInUp 0.8s ease-out forwards" : "none",
                }}
              >
                {/* image wrapper - using Image with `fill` */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
                  <Image
                    src={src}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-2xl">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-2xl font-bold">{service.price}</span>
                      <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div className="font-semibold text-2xl text-blue-600">{service.price}</div>
                      <div>{service.duration}</div>
                    </div>
                    <a href="#contact" className="scroll-smooth">
                      <Button className="border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                        Contact Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={cn(
            "text-center mt-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Ready to Capture Your Perfect Moments?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Choose from our professional photography packages or create a custom experience tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                <Link href="#contact">Get Custom Quote Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `,
        }}
      />
    </section>
  );
}

export default ServicesOverview;
