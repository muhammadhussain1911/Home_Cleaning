import SiteHeader from "@/components/SiteHeader";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { cities } from "@/lib/cities";

export const metadata = getMetadata(
  "Professional Cleaning Services | Healthy Home Services",
  "Discover our full range of professional cleaning services. House cleaning, deep cleaning, move-out cleaning & more.",
  "/services",
);

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Services" }];

export default function ServicesPage() {
  const services = [
    {
      slug: "house-cleaning",
      name: "House Cleaning",
      description:
        "Regular maintenance cleaning to keep your home fresh and tidy.",
      icon: "🏠",
    },
    {
      slug: "deep-cleaning",
      name: "Deep Cleaning",
      description:
        "Thorough cleaning of hard-to-reach areas and stubborn dirt.",
      icon: "✨",
    },
    {
      slug: "move-in-move-out-cleaning",
      name: "Move-In/Move-Out Cleaning",
      description:
        "Professional turnover cleaning for rental or owned properties.",
      icon: "📦",
    },
    {
      slug: "office-cleaning",
      name: "Office Cleaning",
      description: "Commercial cleaning services for offices and workspaces.",
      icon: "🏢",
    },
    {
      slug: "airbnb-cleaning",
      name: "Airbnb Cleaning",
      description: "5-star turnover cleaning between guest stays.",
      icon: "🏨",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "Services", url: "https://healthyhomeservices.com/services" },
  ]);

  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <SiteHeader
        title="Professional Cleaning Services"
        subtitle="Choose from our comprehensive range of cleaning solutions for every need."
      />

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            All Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From regular maintenance to specialized cleaning projects, we have
            the expertise and equipment to handle any cleaning challenge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-secondary hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-secondary font-bold inline-flex items-center">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-700 mb-4">
              We offer custom cleaning solutions tailored to your specific
              needs. Contact us to discuss your unique cleaning requirements.
            </p>
            <a
              href="tel:+18885550199"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
            >
              Call (888) 555-0199 for Custom Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "✓",
                title: "Licensed & Insured",
                desc: "Fully protected and professional service",
              },
              {
                icon: "🔍",
                title: "Background Checked",
                desc: "All cleaners thoroughly vetted",
              },
              {
                icon: "🌿",
                title: "Eco-Friendly",
                desc: "Safe products for your family",
              },
              {
                icon: "⏰",
                title: "Same-Day Available",
                desc: "Schedule cleaning quickly",
              },
              {
                icon: "💬",
                title: "Customer Support",
                desc: "24/7 booking and support",
              },
              {
                icon: "⭐",
                title: "4.9/5 Rating",
                desc: "347+ verified reviews",
              },
            ].map((reason, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{reason.icon}</div>
                <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
