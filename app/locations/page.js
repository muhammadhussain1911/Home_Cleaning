import SiteHeader from "@/components/SiteHeader";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceAreaGrid from "@/components/ServiceAreaGrid";
import Link from "next/link";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { cities } from "@/lib/cities";

export const metadata = getMetadata(
  "Service Areas | Professional Cleaning in Major US Cities",
  "Find professional house cleaning services in your city. We serve 12+ major US locations.",
  "/locations",
);

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Locations" }];

export default function LocationsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "Locations", url: "https://healthyhomeservices.com/locations" },
  ]);

  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <SiteHeader
        title="Service Areas Across the USA"
        subtitle="Professional house cleaning services in major cities. Find your location and book your cleaning today."
      />

      <ServiceAreaGrid title="Local Cleaning Services" cities={cities} />

      {/* Why Healthy Home Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Service in Every Location
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Each location has experienced cleaners who know neighborhoods
                and customer preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3">Consistent Quality</h3>
              <p className="text-gray-600">
                Same high standards and customer service across all service
                areas nationwide.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Quick Scheduling</h3>
              <p className="text-gray-600">
                Same-day and next-day availability in most service areas. Easy
                online or phone booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Service Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Nationwide House Cleaning Network
            </h2>

            <p className="text-gray-700 mb-6">
              Healthy Home Services is the trusted choice for professional house
              cleaning across the USA. With operations in major metropolitan
              areas, we bring the same level of excellence and professionalism
              to every location.
            </p>

            <h3 className="text-2xl font-bold mb-4">What Makes Us Different</h3>

            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>
                  <strong>Licensed & Insured:</strong> All locations fully
                  licensed and bonded
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>
                  <strong>Background Checked:</strong> Every cleaner thoroughly
                  vetted for your safety
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>
                  <strong>Eco-Friendly:</strong> Safe cleaning products for
                  families and pets
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>
                  <strong>Satisfaction Guaranteed:</strong> 100% money-back
                  guarantee
                </span>
              </li>
            </ul>

            <div className="border-l-4 border-secondary bg-blue-50 p-6">
              <p className="text-gray-700 mb-4">
                Don't see your city? We're constantly expanding our service
                areas. Contact us to see if we serve your location or area.
              </p>
              <a
                href="tel:+18885550199"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Call (888) 555-0199 to Inquire
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
