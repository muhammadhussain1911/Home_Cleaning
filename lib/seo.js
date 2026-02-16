// lib/seo.js - SEO helper functions for metadata and schema generation

export const getMetadata = (title, description, slug = "") => ({
  title,
  description,
  canonical: `https://healthyhomeservices.com${slug}`,
  openGraph: {
    title,
    description,
    url: `https://healthyhomeservices.com${slug}`,
    type: "website",
    siteName: "Healthy Home Services",
    images: [
      {
        url: "https://healthyhomeservices.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional House Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://healthyhomeservices.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Healthy Home Services",
  url: "https://healthyhomeservices.com",
  logo: "https://healthyhomeservices.com/logo.png",
  description: "Professional house cleaning services across the USA",
  sameAs: [
    "https://facebook.com/healthyhomeservices",
    "https://instagram.com/healthyhomeservices",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+1-888-555-0199",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
});

export const getLocalBusinessSchema = (city, state) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `Healthy Home Services in ${city}, ${state}`,
  description: `Professional house cleaning services in ${city}, ${state}`,
  url: `https://healthyhomeservices.com/locations/${city.toLowerCase().replace(/\s+/g, "-")}`,
  areaServed: {
    "@type": "City",
    name: city,
  },
  serviceType: "House Cleaning",
  telephone: "+1-888-555-0199",
  image: "https://healthyhomeservices.com/cleaning-service.jpg",
  priceRange: "$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "347",
  },
});

export const getServiceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description,
  provider: {
    "@type": "Organization",
    name: "Healthy Home Services",
  },
  areaServed: "US",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "347",
  },
});

export const getFAQSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.url,
  })),
});

export const getArticleSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: post.image,
  datePublished: post.date,
  author: {
    "@type": "Organization",
    name: "Healthy Home Services",
  },
  publisher: {
    "@type": "Organization",
    name: "Healthy Home Services",
  },
});
