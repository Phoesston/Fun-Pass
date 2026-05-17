import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fredoka = Fredoka({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://funpasseg.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fun Pass Entertainment Group | Party & Foam Rentals – Palmetto, FL",
    template: "%s | Fun Pass Entertainment Group",
  },
  description:
    "Veteran-owned party rental company serving Palmetto, Bradenton, Parrish & the Suncoast. Foam parties, giant yard games, concession machines, chairs & tables.",
  keywords: [
    "party rentals Palmetto FL",
    "foam party rental Bradenton",
    "yard game rentals Suncoast",
    "concession machine rental",
    "chair table rental Parrish",
    "Fun Pass Entertainment Group",
    "veteran owned party rental",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fun Pass Entertainment Group",
    title: "Fun Pass Entertainment Group | Party & Foam Rentals – Palmetto, FL",
    description:
      "Veteran-owned party rental company serving Palmetto, Bradenton, Parrish & the Suncoast. Foam parties, giant yard games, concession machines, chairs & tables.",
    images: [
      {
        url: "/logos/Fun-PassLogo1.png",
        width: 420,
        height: 420,
        alt: "Fun Pass Entertainment Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fun Pass Entertainment Group | Party & Foam Rentals – Palmetto, FL",
    description:
      "Veteran-owned party rental company serving Palmetto, Bradenton, Parrish & the Suncoast.",
    images: ["/logos/Fun-PassLogo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${nunito.variable} ${fredoka.variable}`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fun Pass Entertainment Group",
              description:
                "Veteran-owned party rental company offering foam parties, giant yard games, concession machines, and chair & table rentals across the Suncoast.",
              url: siteUrl,
              telephone: "+19413963366",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Palmetto",
                addressRegion: "FL",
                addressCountry: "US",
              },
              areaServed: [
                "Palmetto", "Bradenton", "Parrish", "Ellenton",
                "Lakewood Ranch", "Sarasota", "Ruskin",
                "Sun City Center", "Apollo Beach", "Terra Ceia",
              ],
              image: `${siteUrl}/logos/Fun-PassLogo1.png`,
              priceRange: "$$",
              sameAs: [],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
