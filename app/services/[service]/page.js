import SiteHeader from "@/components/SiteHeader";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/lib/seo";
import { cities } from "@/lib/cities";

const serviceData = {
  "house-cleaning": {
    title: "House Cleaning Services | Professional Home Cleaning",
    description:
      "Regular house cleaning services keeping your home spotless. Affordable rates, licensed & insured.",
    slug: "house-cleaning",
    name: "House Cleaning",
    shortDesc: "Regular maintenance cleaning",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    fullDescription: `Our professional house cleaning service keeps your home fresh and clean year-round. Our experienced team handles all aspects of regular home cleaning, from dusting and vacuuming to kitchen and bathroom cleaning.`,
    features: [
      "Dusting and vacuuming",
      "Kitchen and appliance cleaning",
      "Bathroom sanitization",
      "Floor cleaning and mopping",
      "Bed making with fresh linens",
      "Trash removal",
      "Customizable service packages",
    ],
    faq: [
      {
        q: "How often should I get house cleaning?",
        a: "Most people benefit from bi-weekly or monthly cleaning, but we offer weekly, monthly, or custom schedules.",
      },
      {
        q: "Are your products safe for children and pets?",
        a: "We only use eco-friendly, pet and child-safe cleaning products. We can also use your preferred products.",
      },
      {
        q: "How long does a typical house clean take?",
        a: "A standard house cleaning typically takes 2-4 hours depending on home size and current condition.",
      },
    ],
  },
  "deep-cleaning": {
    title: "Deep Cleaning Services | Professional Deep Clean",
    description:
      "Professional deep cleaning removing hidden dirt and allergens. Complete home transformation.",
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortDesc: "Thorough cleaning of hard-to-reach areas",
    image:
      "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=1200&q=80",
    fullDescription: `Our deep cleaning service goes beyond regular maintenance, targeting areas that don't get touched during standard cleanings. We tackle baseboards, behind appliances, ceiling fans, vents, and other hard-to-reach spots.`,
    features: [
      "Behind and inside appliances",
      "Baseboards and corners",
      "Ceiling fans and vents",
      "Light fixtures",
      "Closet organization",
      "Deep bathroom scrubbing",
      "Carpet and upholstery cleaning available",
    ],
    faq: [
      {
        q: "How often should I get deep cleaning done?",
        a: "We recommend deep cleaning every 3-6 months for most homes, or 1-2 times per year.",
      },
      {
        q: "What areas does deep cleaning cover?",
        a: "Deep cleaning targets areas normally missed in regular cleaning: vents, ceiling fans, baseboards, inside appliances, and more.",
      },
      {
        q: "How long does deep cleaning take?",
        a: "Deep cleaning typically takes 4-8 hours depending on home size and condition.",
      },
    ],
  },
  "move-in-move-out-cleaning": {
    title: "Move-Out Cleaning | Move-In Cleaning Services",
    description:
      "Professional move-in/move-out cleaning. Get your security deposit back or prepare to lease.",
    slug: "move-in-move-out-cleaning",
    name: "Move-In/Move-Out Cleaning",
    shortDesc: "Complete turnover cleaning for moving",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    fullDescription: `Whether you're moving out to protect your security deposit or moving in to a new home, our move-in/move-out cleaning ensures your rental or new property is spotless and move-in ready.`,
    features: [
      "Complete interior deep clean",
      "Oven and microwave cleaning",
      "Window and blind cleaning",
      "Carpet shampooing included",
      "Wall and baseboard wiping",
      "Appliance detail cleaning",
      "100% security deposit guarantee",
    ],
    faq: [
      {
        q: "How long does move-out cleaning take?",
        a: "Move-out cleaning typically takes 4-8 hours for average homes, depending on size and condition.",
      },
      {
        q: "Will I get my full security deposit back?",
        a: "Our deep cleaning dramatically improves your chances. We target common areas landlords inspect.",
      },
      {
        q: "Can you clean the day before I move?",
        a: "Yes, we offer flexible scheduling including evenings and next-day availability in most areas.",
      },
    ],
  },
  "office-cleaning": {
    title: "Office Cleaning Services | Professional Commercial Cleaning",
    description:
      "Professional office and commercial cleaning. Create a clean, healthy workplace.",
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortDesc: "Commercial office cleaning solutions",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    fullDescription: `Our professional office cleaning services keep your workplace clean, organized, and healthy. From small offices to large corporate spaces, we maintain pristine facilities that boost employee productivity and client confidence.`,
    features: [
      "Daily office cleaning",
      "Sanitization of common areas",
      "Bathroom restocking and cleaning",
      "Trash and recycling management",
      "Carpet and floor care",
      "Window cleaning",
      "Customized commercial contracts",
    ],
    faq: [
      {
        q: "Can you clean after business hours?",
        a: "Absolutely. We can schedule cleaning in evenings and weekends.",
      },
      {
        q: "Do you provide eco-friendly products for offices?",
        a: "Yes, we use commercial-grade eco-friendly products that are safe for employees.",
      },
      {
        q: "Do you offer recurring office cleaning?",
        a: "Yes, we provide daily, weekly, or custom cleaning schedules with competitive pricing.",
      },
    ],
  },
  "airbnb-cleaning": {
    title: "Airbnb Cleaning Services | Property Turnover Cleaning",
    description:
      "Professional Airbnb and rental property cleaning. Get 5-star reviews with perfect cleanliness.",
    slug: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    shortDesc: "Turnover cleaning for short-term rentals",
    image:
      "https://images.unsplash.com/photo-1631049307038-da0ec89d4d0a?w=1200&q=80",
    fullDescription: `Our Airbnb cleaning service ensures your property is guest-ready for every booking. We provide thorough turnover cleaning between guests, maintaining 5-star cleanliness standards that lead to excellent reviews and higher bookings.`,
    features: [
      "Fast turnaround cleaning (2-3 hours)",
      "Fresh linens on all beds",
      "Sanitized high-touch surfaces",
      "Guest amenity restocking",
      "Quality photo documentation",
      "Flexible same-day availability",
      "Recurring booking discounts",
    ],
    faq: [
      {
        q: "What time should cleaning happen?",
        a: "We work around checkout/check-in times. Standard turnover cleaning takes 2-3 hours.",
      },
      {
        q: "Do you supply fresh linens?",
        a: "We launder and deliver fresh linens. You can also provide your own linens for washing.",
      },
      {
        q: "Can you handle emergency cleanings?",
        a: "Yes, we offer same-day emergency cleanings in most areas. Call immediately for availability.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    service: slug,
  }));
}

export function generateMetadata({ params }) {
  const service = serviceData[params.service];
  if (!service) return {};
  return getMetadata(
    service.title,
    service.description,
    `/services/${params.service}`,
  );
}

export default function ServicePage({ params }) {
  const service = serviceData[params.service];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="text-secondary hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "Services", url: "https://healthyhomeservices.com/services" },
    {
      label: service.name,
      url: `https://healthyhomeservices.com/services/${service.slug}`,
    },
  ]);

  const serviceSchema = getServiceSchema(service.name, service.fullDescription);
  const topCities = cities.slice(0, 6);

  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={serviceSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <SiteHeader title={service.name} subtitle={service.fullDescription} />

      {/* Service Details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-secondary text-xl font-bold flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Service Areas</h2>
            <p className="text-gray-600 mb-6">
              We provide {service.name.toLowerCase()} services in major cities
              including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="text-secondary hover:underline font-semibold"
                >
                  {city.name}, {city.state}
                </Link>
              ))}
            </div>

            <Link
              href="/locations"
              className="inline-block text-secondary hover:underline font-bold"
            >
              See all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Related Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(serviceData)
              .filter(([slug]) => slug !== service.slug)
              .slice(0, 4)
              .map(([slug, svc]) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-secondary"
                >
                  <h3 className="text-xl font-bold mb-2">{svc.name}</h3>
                  <p className="text-gray-600 mb-4">{svc.shortDesc}</p>
                  <span className="text-secondary font-bold">Learn More →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FAQ title={`${service.name} FAQ`} items={service.faq} />

      {/* Contact & CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}
