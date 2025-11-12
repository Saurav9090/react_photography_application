import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: "Andamanclick.com - Professional Photography Services in Andaman & Nicobar Islands",
    template: "%s | Andamanclick.com"
  },
  description: "Professional photography services in Andaman & Nicobar Islands. Specializing in beach photography, underwater shoots, sunset sessions, and tourist photography with latest equipment. Book your perfect memories today.",
  keywords: [
    "Andaman photography",
    "Nicobar Islands photographer", 
    "beach photography",
    "underwater photography",
    "sunset photography",
    "tourist photography",
    "diving photography",
    "Andaman tourism",
    "professional photographer",
    "photography packages"
  ],
  authors: [{ name: "Andamanclick Photography Team" }],
  creator: "Andamanclick.com",
  publisher: "Andamanclick Photography Services",
  openGraph: {
    title: "Andamanclick.com - Professional Photography in Paradise",
    description: "Capture your perfect moments in Andaman & Nicobar Islands with our professional photography services",
    url: "https://andamanclick.com",
    siteName: "Andamanclick.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630?text=Andamanclick+Professional+Photography+Services+Andaman+Islands",
        width: 1200,
        height: 630,
        alt: "Andamanclick Professional Photography Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Andamanclick.com - Professional Photography Services",
    description: "Capture your perfect moments in Andaman & Nicobar Islands",
    images: ["https://placehold.co/1200x630?text=Andamanclick+Twitter+Card+Professional+Photography"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Photography Services",
  classification: "Business",
  other: {
    "geo.region": "IN-AN",
    "geo.placename": "Andaman and Nicobar Islands, India",
    "geo.position": "11.7401;92.6586",
    "ICBM": "11.7401, 92.6586"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://andamanclick.com" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0077BE" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Andamanclick Photography Services",
              "description": "Professional photography services in Andaman & Nicobar Islands specializing in beach, underwater, and tourist photography",
              "url": "https://andamanclick.com",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Andaman and Nicobar Islands",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.7401,
                "longitude": 92.6586
              },
              "areaServed": "Andaman and Nicobar Islands",
              "serviceType": ["Beach Photography", "Underwater Photography", "Sunset Photography", "Tourist Photography", "Event Photography"],
              "priceRange": "₹₹₹"
            })
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-sans antialiased",
        inter.variable,
        playfair.variable
      )}>
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}