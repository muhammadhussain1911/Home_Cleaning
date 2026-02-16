import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";

export const metadata = getMetadata(
  "Privacy Policy | Healthy Home Services",
  "Privacy policy for Healthy Home Services. We protect your data and personal information.",
  "/privacy-policy",
);

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy" },
];

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    {
      label: "Privacy Policy",
      url: "https://healthyhomeservices.com/privacy-policy",
    },
  ]);

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <p className="text-gray-600 mb-8">Last updated: February 15, 2026</p>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Healthy Home Services ("we," "our," or "us") operates the
                healthyhomeservices.com website. This page informs you of our
                policies regarding the collection, use, and disclosure of
                personal data when you use our website and the choices you have
                associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Information Collection & Use
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We collect several different types of information for various
                purposes to provide and improve our service to you.
              </p>

              <h3 className="text-xl font-bold mb-3">
                Types of Data Collected:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Personal Data: Name, email address, phone number, postal
                  address, city/state
                </li>
                <li>
                  Usage Data: Device information, IP address, browser type,
                  pages visited
                </li>
                <li>
                  Service Data: Type of cleaning service requested, preferred
                  dates, home size
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Use of Data</h2>
              <p className="text-gray-700 mb-4">
                Healthy Home Services uses the collected data for various
                purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information to improve our
                  service
                </li>
                <li>To monitor the usage of our service</li>
                <li>
                  To detect, prevent and address technical and security issues
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Security of Data</h2>
              <p className="text-gray-700 leading-relaxed">
                The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your personal data, we
                cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top of
                this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong> privacy@healthyhomeservices.com
                </li>
                <li>
                  <strong>Phone:</strong> (888) 555-0199
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
