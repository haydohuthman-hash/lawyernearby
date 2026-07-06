import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Residence Relocations | Premium Moving & Rubbish Removal",
    template: "%s | Residence Relocations",
  },
  description:
    "Premium moving and rubbish removal services with fixed prices and no hourly surprises. Get an instant AI-powered quote in 30 seconds.",
  openGraph: {
    type: "website",
    siteName: "Residence Relocations",
    title: "Residence Relocations | Premium Moving & Rubbish Removal",
    description:
      "Premium moving and rubbish removal services with fixed prices and no hourly surprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residence Relocations | Premium Moving & Rubbish Removal",
    description:
      "Premium moving and rubbish removal services with fixed prices and no hourly surprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-ink">
        {children}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "Residence Relocations",
            description:
              "Premium moving and rubbish removal services with fixed prices and no hourly surprises.",
            url: SITE_URL,
            telephone: "+1300022733",
            priceRange: "$$",
            areaServed: [
              { "@type": "City", name: "Brisbane" },
              { "@type": "City", name: "Gold Coast" },
              { "@type": "City", name: "Sunshine Coast" },
              { "@type": "City", name: "Ipswich" },
            ],
            address: {
              "@type": "PostalAddress",
              addressRegion: "QLD",
              addressCountry: "AU",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "250",
            },
          }}
        />
      </body>
    </html>
  );
}
