import SiteHeader from "@/components/SiteHeader";
import ServiceAreaGrid from "@/components/ServiceAreaGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
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
  "Professional House Cleaning Services | Healthy Home Services",
  "Award-winning house cleaning services across USA. Licensed & insured. Free quote. Call (888) 555-0199.",
  "/",
);

const breadcrumbItems = [{ label: "Home" }];
const breadcrumbSchema = getBreadcrumbSchema([
  { label: "Home", url: "https://healthyhomeservices.com" },
]);

export default function Home() {
  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <SiteHeader
        title="Professional House Cleaning Services"
        subtitle="Licensed, insured, and dedicated to making your home spotless. Book your cleaning in 60 seconds."
      />

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Book in 60 Seconds</h3>
              <p className="text-gray-600">
                Call us or fill out our quick quote form with your cleaning
                needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Quote</h3>
              <p className="text-gray-600">
                Get transparent pricing with no hidden fees or surprise charges.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Cleaning</h3>
              <p className="text-gray-600">
                Background-checked cleaners deliver exceptional results every
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { name: "House Cleaning", slug: "house-cleaning", icon: "🏠" },
              { name: "Deep Cleaning", slug: "deep-cleaning", icon: "✨" },
              {
                name: "Move-In/Out",
                slug: "move-in-move-out-cleaning",
                icon: "📦",
              },
              { name: "Office Cleaning", slug: "office-cleaning", icon: "🏢" },
              { name: "Airbnb Cleaning", slug: "airbnb-cleaning", icon: "🏨" },
            ].map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-primary">{service.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <ServiceAreaGrid
        title="Serving Major US Cities"
        cities={cities.slice(0, 8)}
      />

      <FAQ />

      <CTASection title="Transform Your Home Today" />
    </>
  );
}
