import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";

export const metadata = getMetadata(
  "Terms of Service | Healthy Home Services",
  "Terms of Service for Healthy Home Services. Please read before using our services.",
  "/terms",
);

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Terms of Service" },
];

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "Terms of Service", url: "https://healthyhomeservices.com/terms" },
  ]);

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <p className="text-gray-600 mb-8">Last updated: February 15, 2026</p>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website and our services, you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Healthy Home Services'
                website for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Modifying or copying the materials</li>
                <li>
                  Using the materials for any commercial purpose or for any
                  public display
                </li>
                <li>
                  Attempting to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Removing any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transferring the materials to another person or "mirroring"
                  the materials on any other server
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on Healthy Home Services' website are provided on
                an 'as is' basis. Healthy Home Services makes no warranties,
                expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation
                of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Healthy Home Services or its suppliers be
                liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on the
                website, even if Healthy Home Services or an authorized
                representative has been notified orally or in writing of the
                possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on Healthy Home Services' website could
                include technical, typographical, or photographic errors.
                Healthy Home Services does not warrant that any of the materials
                on the website are accurate, complete, or current. Healthy Home
                Services may make changes to the materials contained on the
                website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Service Terms</h2>
              <h3 className="text-lg font-bold mb-3">
                Booking & Cancellation:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Services must be scheduled at least 24 hours in advance</li>
                <li>
                  Cancellations made 48+ hours in advance receive full refunds
                </li>
                <li>
                  Cancellations made 24-48 hours in advance are subject to 50%
                  fee
                </li>
                <li>
                  Cancellations made within 24 hours are subject to full payment
                </li>
              </ul>

              <h3 className="text-lg font-bold mb-3 mt-6">
                Access to Property:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Customer must provide access to property on scheduled
                  date/time
                </li>
                <li>
                  If access is not provided, service will be rescheduled with
                  applicable fees
                </li>
                <li>
                  Customer responsible for securing pets and removing valuables
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Healthy Home Services' liability is limited to the amount paid
                for the specific service. We are not responsible for damages to
                property beyond normal wear and tear created during service,
                unless caused by gross negligence or willful misconduct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Healthy Home Services may revise these terms of service for the
                website at any time without notice. By using this website, you
                are agreeing to be bound by the then current version of these
                terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with the laws of the United States, and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                10. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong> legal@healthyhomeservices.com
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
