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
  getLocalBusinessSchema,
} from "@/lib/seo";
import { cities, neighborhoods, getCityBySlug } from "@/lib/cities";

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export function generateMetadata({ params }) {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  const title = `House Cleaning in ${city.name}, ${city.state} | Professional Home Cleaning`;
  const description = `Professional house cleaning services in ${city.name}, ${city.state}. Licensed, insured, eco-friendly. Free quote. Call (888) 555-0199.`;

  return getMetadata(title, description, `/locations/${params.city}`);
}

export default function CityPage({ params }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
        <Link href="/locations" className="text-secondary hover:underline">
          Back to Locations
        </Link>
      </div>
    );
  }

  const cityNeighborhoods = neighborhoods[city.name] || [];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: `${city.name}, ${city.state}` },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "Locations", url: "https://healthyhomeservices.com/locations" },
    {
      label: `${city.name}, ${city.state}`,
      url: `https://healthyhomeservices.com/locations/${city.slug}`,
    },
  ]);

  const localBusinessSchema = getLocalBusinessSchema(city.name, city.state);

  const faqItems = [
    {
      q: `How much do house cleaning services cost in ${city.name}?`,
      a: `Pricing depends on your home size and cleaning needs. We offer free phone quotes and in-home estimates. Call (888) 555-0199 for a quote tailored to ${city.name} homes.`,
    },
    {
      q: `Do you serve all of ${city.name}?`,
      a: `We serve most of ${city.name} and surrounding areas. Call to confirm your specific neighborhood is covered.`,
    },
    {
      q: `How quickly can you schedule cleaning in ${city.name}?`,
      a: `We offer same-day and next-day availability in most ${city.name} locations. Call for current availability.`,
    },
  ];

  const relatedServices = [
    { name: "House Cleaning", slug: "house-cleaning" },
    { name: "Deep Cleaning", slug: "deep-cleaning" },
    { name: "Move-In/Out Cleaning", slug: "move-in-move-out-cleaning" },
    { name: "Office Cleaning", slug: "office-cleaning" },
  ];

  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={localBusinessSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <SiteHeader
        title={`Professional House Cleaning in ${city.name}, ${city.state}`}
        subtitle={`Licensed, insured, and eco-friendly cleaning services. Same-day available. Book in 60 seconds.`}
      />

      {/* About Service in This City */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Your Local Cleaning Service
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              Looking for reliable house cleaning services in {city.name}?
              Healthy Home Services is your trusted local choice. Our
              experienced cleaners know {city.name} homes and neighborhoods,
              delivering consistent 5-star results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-green-50 border-l-4 border-secondary p-6 rounded">
                <h3 className="font-bold text-lg mb-3">Local Expertise</h3>
                <p className="text-gray-700">
                  Our {city.name}-based team understands your community and
                  provides personalized service.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-secondary p-6 rounded">
                <h3 className="font-bold text-lg mb-3">Quick Response</h3>
                <p className="text-gray-700">
                  Same-day and next-day cleaning availability in {city.name}.
                  Call for instant scheduling.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-secondary p-6 rounded">
                <h3 className="font-bold text-lg mb-3">Fully Insured</h3>
                <p className="text-gray-700">
                  Licensed, bonded, and insured in {city.state}. Peace of mind
                  with every cleaning.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-secondary p-6 rounded">
                <h3 className="font-bold text-lg mb-3">Eco-Friendly</h3>
                <p className="text-gray-700">
                  Safe, eco-friendly products for {city.name} families and pets.
                  Healthier homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      {cityNeighborhoods.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Top Neighborhoods Served
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {cityNeighborhoods.map((neighborhood, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition"
                  >
                    <p className="font-semibold text-gray-800">
                      {neighborhood}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <p className="text-gray-700">
                  We serve most neighborhoods in {city.name}. Contact us to
                  confirm your specific area is covered.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cleaning Services in {city.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-gradient-to-br from-secondary to-green-600 text-white rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-green-100 mb-4">
                  Professional {service.name.toLowerCase()} in {city.name}
                </p>
                <span className="font-semibold inline-flex items-center">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="text-secondary hover:underline font-bold"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ title={`House Cleaning FAQ for ${city.name}`} items={faqItems} />

      {/* Contact & Quote */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Get Your Free Quote
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Book professional house cleaning services in {city.name},{" "}
              {city.state} in 60 seconds. No credit card required.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why {city.name} Trusts Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-3">⭐ 4.9/5 Stars</h3>
              <p className="text-gray-700">
                347+ verified reviews from {city.name} customers who love our
                service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">✓ Licensed & Insured</h3>
              <p className="text-gray-700">
                Fully licensed and bonded to serve {city.state}. Complete peace
                of mind.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">👥 Background Checked</h3>
              <p className="text-gray-700">
                All cleaners professionally vetted for your home and family
                safety.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">🚀 Same-Day Available</h3>
              <p className="text-gray-700">
                Schedule cleaning same-day in most {city.name} locations. Call
                now.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                🌿 Eco-Friendly Products
              </h3>
              <p className="text-gray-700">
                Safe, non-toxic cleaning solutions for {city.name} families and
                pets.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">💬 Customer Support</h3>
              <p className="text-gray-700">
                24/7 booking and support for {city.name} customers. Call
                anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`Schedule Your ${city.name} Cleaning Today`} />
    </>
  );
}
