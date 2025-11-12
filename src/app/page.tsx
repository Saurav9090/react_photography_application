"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <section id="gallery-preview" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
                Captured
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Memories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Browse through our stunning collection of photographs that showcase the natural beauty 
                and magical moments we&apos;ve captured across the Andaman &amp; Nicobar Islands.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {Array.from({ length: 12 }, (_, index) => {
                const images = [
                  "images/RIT_8557.jpg",
                  "images/IMG_2458.jpg",
                  "images/IMG_0581.jpg",
                  "images/IMG_4836.jpg",
                  "images/IMG_2617.jpg",
                  "images/IMG_5712.jpg",
                  "images/RIT_7534.jpg",
                  "images/IMG_2484.jpg",
                  "images/IMG_5693.jpg",
                  "images/RIT_8469.jpg",
                  "images/IMG_5760.jpg",
                  "images/RIT_8328.jpg"
                ];

                const randomImage = images[index % images.length];
                // ensure leading slash for files in /public
                const src = randomImage.startsWith("/") ? randomImage : `/${randomImage}`;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{
                      aspectRatio: index % 3 === 1 ? "3/4" : "4/3"
                    }}
                  >
                    {/* Image must be inside a positioned parent when using `fill` */}
                    <div className="relative w-full h-full">
                      <Image
                        src={src}
                        alt={`Andaman & Nicobar Photography ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white">
                        <h4 className="font-semibold text-sm mb-1">Professional Photography</h4>
                        <p className="text-xs opacity-90">Andaman &amp; Nicobar Islands</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ServicesOverview />

        {/* {destination section} */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="destinations">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
                Explore
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Destinations
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the breathtaking beauty of the Andaman &amp; Nicobar Islands, from pristine beaches and vibrant coral reefs to lush forests and historical sites. Each destination offers unique experiences tailored for unforgettable memories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Port Blair",
                  description: "The capital city, gateway to the islands, featuring Cellular Jail, beautiful beaches, and a mix of history and nature.",
                  image: "/images/island pics/portblair.jpg",
                  stats: "Historical Hub"
                },
                {
                  title: "Havelock Island",
                  description: "Famous for Radhanagar Beach, snorkeling, and scuba diving amidst coral reefs. A paradise for water sports enthusiasts.",
                  image: "/images/island pics/havelock.jpg",
                  stats: "Beach Paradise"
                },
                {
                  title: "Neil Island",
                  description: "A tranquil escape with natural bridges, lagoons, and untouched beaches. Perfect for relaxation and wildlife spotting.",
                  image: "/images/island pics/neil.webp",
                  stats: "Tranquil Retreat"
                },
                {
                  title: "Baratang Island",
                  description: "Home to mud volcanoes, mangrove creeks, and limestone caves. Experience unique geological wonders and tribal culture.",
                  image: "/images/island pics/baratang.jpg",
                  stats: "Geological Wonder"
                },
                {
                  title: "Diglipur",
                  description: "The northernmost town with waterfalls, hot springs, and dense forests. Ideal for adventure seekers and nature lovers.",
                  image: "/images/island pics/diglipur.jpg",
                  stats: "Adventure Spot"
                },
                {
                  title: "Little Andaman",
                  description: "Remote and pristine, offering untouched beaches, tribal reserves, and opportunities for kayaking and birdwatching.",
                  image: "/images/island pics/littleandaman.png",
                  stats: "Remote Paradise"
                }
              ].map((destination) => (
                <div
                  key={destination.title}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Wrap Image in a relative div so `fill` can work */}
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={
                        destination.image.startsWith("/")
                          ? destination.image.replace(/ /g, "%20")
                          : `/${destination.image.replace(/ /g, "%20")}`
                      }
                      alt={destination.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={false}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                    {destination.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="about">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
                Why Choose
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Andamanclick
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We bring years of experience, professional equipment, and artistic vision to capture 
                your perfect moments in one of the world&apos;s most beautiful destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Equipment",
                  description: "Latest camera gear, underwater housing, drone photography, and professional lighting equipment for perfect shots in any condition.",
                  icon: "📷",
                  stats: "Professional Grade"
                },
                {
                  title: "Local Expertise",
                  description: "Deep knowledge of the best locations, optimal timing, and hidden gems across all Andaman &amp; Nicobar Islands.",
                  icon: "🗺️",
                  stats: "5+ Years Experience"
                },
                {
                  title: "Same Day Delivery",
                  description: "Quick editing and delivery of high-resolution photos so you can share your memories immediately.",
                  icon: "⚡",
                  stats: "24 Hour Turnaround"
                },
                {
                  title: "All Weather Service",
                  description: "We adapt to weather conditions and find creative solutions to ensure great photos regardless of conditions.",
                  icon: "🌤️",
                  stats: "Rain or Shine"
                },
                {
                  title: "Affordable Packages",
                  description: "Competitive pricing with customizable packages to fit every budget and requirement.",
                  icon: "💰",
                  stats: "Starting ₹6,000"
                },
                {
                  title: "Happy Customers",
                  description: "500+ satisfied customers from around the world with 5-star reviews and repeat bookings.",
                  icon: "⭐",
                  stats: "500+ Reviews"
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                Behind The
                <span className="block text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                  Lens
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Watch our photography sessions in action and see how we capture the magic of 
                Andaman &amp; Nicobar Islands through professional cinematography.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden group">
                <video
                  src="/images/video/video1.mp4"
                  className="w-full h-80 object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold mb-2">Photography Session</h3>
                  <p className="text-gray-200 text-sm">Watch our best destinations at Radhanagar Beach</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden group">
                <video
                  src="/images/video/video2.mp4"
                  className="w-full h-80 object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold mb-2">Natural Adventures</h3>
                  <p className="text-gray-200 text-sm">Explore the Adventures through our professional equipment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
                What Our
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Clients Say
                </span>
              </h2>
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Saurav & Disha",
                  location: "West Bengal",
                  rating: 5,
                  text: "Absolutely amazing experience! The photographer was professional, knew all the best spots, and delivered stunning photos within hours. Our Andaman vacation memories are now picture perfect!",
                  service: "Wedding Photography",
                  avatar: "https://placehold.co/80x80?text=SM"
                },
                {
                  name: "Priya Sharma",
                  location: "Mumbai, India",
                  rating: 5,
                  text: "Best decision we made for our family vacation! The team was patient with our kids and captured beautiful moments at every location. The underwater shots were incredible!",
                  service: "Family Photography",
                  avatar: "https://placehold.co/80x80?text=PS"
                },
                {
                  name: "David Chen",
                  location: "Singapore",
                  rating: 5,
                  text: "Professional service from start to finish. Great equipment, perfect timing for golden hour shots, and the final photos exceeded our expectations. Highly recommend for solo travelers!",
                  service: "Solo Travel Photography",
                  avatar: "https://placehold.co/80x80?text=DC"
                }
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={
                          testimonial.avatar
                            ? (testimonial.avatar.startsWith("/") ? testimonial.avatar : `/${testimonial.avatar}`).replace(/ /g, "%20")
                            : "/images/default-avatar.jpg"
                        }
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                        priority={false}
                      />
                    </div>

                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {`"${testimonial.text}"`}
                  </p>

                  <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.service}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* {contact form section} */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden" id="contact">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300 rounded-full blur-xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
                Get In
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Touch
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to capture your Andaman memories? Reach out to us for bookings, inquiries, or custom packages. We&apos;ll get back to you within 24 hours!
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-6 relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 9a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="custom-package">Custom Package</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6 relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Ready to Create Magical Memories?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your professional photography session today and let us capture the beauty 
              of your Andaman &amp; Nicobar Islands experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Your Session
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Call Now: +91 9474229712
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
