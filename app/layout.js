// Deployment triggered: February 15, 2026 - FTP build deployment
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: "Professional House Cleaning Services | Healthy Home Services",
    template: "%s | Healthy Home Services",
  },
  description:
    "Award-winning house cleaning services across USA. Licensed, insured & eco-friendly. Book online or call for free quote.",
  keywords:
    "house cleaning, professional cleaning services, maid service, deep cleaning, move-out cleaning, eco-friendly",
  robots: "index, follow",
  authors: [{ name: "Healthy Home Services" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthyhomeservices.com",
    title: "Professional House Cleaning Services | Healthy Home Services",
    description:
      "Award-winning house cleaning services. Licensed, insured & eco-friendly.",
    images: [
      {
        url: "https://healthyhomeservices.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthy Home Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional House Cleaning Services | Healthy Home Services",
    description: "Award-winning house cleaning services across USA.",
    images: ["https://healthyhomeservices.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://healthyhomeservices.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
