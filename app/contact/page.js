import SiteHeader from "@/components/SiteHeader";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";

export const metadata = getMetadata(
  "Contact Us | Healthy Home Services",
  "Get in touch with Healthy Home Services. Call (888) 555-0199 for a free quote or fill out our online form.",
  "/contact",
);

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Contact" }];

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "Contact", url: "https://healthyhomeservices.com/contact" },
  ]);

  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <SiteHeader
        title="Contact Us"
        subtitle="Ready to book your professional cleaning? Get in touch with us today."
      />

      {/* Contact Info & Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center">
              <div className="text-5xl mb-4">☎</div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">
                Fastest way to book or ask questions
              </p>
              <a
                href="tel:+18885550199"
                className="text-2xl font-bold text-secondary hover:underline"
              >
                (888) 555-0199
              </a>
              <p className="text-gray-500 text-sm mt-2">Available 24/7</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="text-5xl mb-4">✉</div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">For non-urgent inquiries</p>
              <a
                href="mailto:info@healthyhomeservices.com"
                className="text-lg font-bold text-secondary hover:underline"
              >
                info@healthyhomeservices.com
              </a>
              <p className="text-gray-500 text-sm mt-2">Reply within 2 hours</p>
            </div>

            {/* Online Quote */}
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-2">Online Quote</h3>
              <p className="text-gray-600 mb-3">Book instantly below</p>
              <p className="text-lg font-bold text-secondary">
                Scroll down to get started
              </p>
              <p className="text-gray-500 text-sm mt-2">Takes 60 seconds</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              Get Your Free Quote
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Fill out the form below and we'll contact you within 1 hour with a
              personalized quote.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quick Contact Info
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">Response Times</h3>
              <ul className="text-gray-700 space-y-1">
                <li>
                  📞 <strong>Phone calls:</strong> Immediate (24/7)
                </li>
                <li>
                  📧 <strong>Email:</strong> Within 2 hours
                </li>
                <li>
                  📋 <strong>Online form:</strong> Within 1 hour
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">Service Areas</h3>
              <p className="text-gray-700 mb-4">
                We serve major cities across the USA. Click below to see if your
                location is covered.
              </p>
              <Link
                href="/locations"
                className="text-secondary font-bold hover:underline"
              >
                View all service areas →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">Booking Hours</h3>
              <ul className="text-gray-700 space-y-1">
                <li>
                  🗓️ <strong>Phone bookings:</strong> 24/7
                </li>
                <li>
                  💻 <strong>Online quotes:</strong> Anytime
                </li>
                <li>
                  📅 <strong>Service scheduling:</strong> Same-day and next-day
                  available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Get Started?" />
    </>
  );
}
