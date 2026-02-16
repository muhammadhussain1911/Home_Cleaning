import SiteHeader from "@/components/SiteHeader";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";

export const metadata = getMetadata(
  "About Healthy Home Services | Professional Cleaning",
  "Learn about our mission to provide professional, reliable, and eco-friendly house cleaning services across the USA.",
  "/about",
);

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About" }];

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "About Us", url: "https://healthyhomeservices.com/about" },
  ]);

  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <SiteHeader
        title="About Healthy Home Services"
        subtitle="Your trusted partner in professional home cleaning since 2005."
      />

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Healthy Home Services was founded on a simple belief: everyone
              deserves a clean, healthy home. What started as a small local
              cleaning company has grown into a nationwide network of dedicated
              cleaning professionals.
            </p>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              For nearly two decades, we've been committed to delivering
              exceptional cleaning services with integrity, professionalism, and
              attention to detail. Our growth is a testament to the trust our
              customers have placed in us.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Today, we serve major cities across the USA, maintaining the same
              high standards and personal touch that have always defined our
              company.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Mission & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">🎯 Our Mission</h3>
              <p className="text-gray-700">
                To transform homes with professional, reliable cleaning services
                that exceed expectations and improve daily life for families
                across America.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">🌟 Quality</h3>
              <p className="text-gray-700">
                We maintain the highest standards of cleaning quality. Every job
                is completed with attention to detail and customer satisfaction
                as our top priority.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">🤝 Integrity</h3>
              <p className="text-gray-700">
                We operate with complete transparency, honest pricing, and
                zero-surprise billing. Your trust is our most valuable asset.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">🌿 Sustainability</h3>
              <p className="text-gray-700">
                We prioritize eco-friendly cleaning products and sustainable
                practices that are safe for your family and the environment.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">👥 People First</h3>
              <p className="text-gray-700">
                We invest in our team through fair wages, comprehensive
                training, and creating a workplace culture of respect and
                growth.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">💡 Innovation</h3>
              <p className="text-gray-700">
                We continuously improve our services, invest in equipment, and
                adopt new techniques to better serve our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Healthy Home Services?
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Licensed, Insured & Bonded
                </h3>
                <p className="text-gray-700">
                  Full coverage in all service areas. Your home and belongings
                  are protected.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Background-Checked Cleaners
                </h3>
                <p className="text-gray-700">
                  All team members undergo thorough background checks and
                  professional training.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Eco-Friendly Products
                </h3>
                <p className="text-gray-700">
                  Safe, non-toxic cleaning solutions that are healthy for your
                  family and pets.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">
                  No hidden fees. Free quotes. Exactly what you pay is what you
                  get.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Satisfaction Guarantee
                </h3>
                <p className="text-gray-700">
                  If you're not satisfied, we'll make it right or your money
                  back. No questions asked.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                <p className="text-gray-700">
                  Each location has experienced teams who know their
                  neighborhoods and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-secondary to-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by Thousands
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">18+</div>
              <p className="text-green-100">Years in Business</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">15k+</div>
              <p className="text-green-100">Satisfied Customers</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">347+</div>
              <p className="text-green-100">5-Star Reviews</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">12</div>
              <p className="text-green-100">Major Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection />
    </>
  );
}
