// components/CTASection.js
import Link from "next/link";

export default function CTASection({
  title = "Ready to Transform Your Home?",
}) {
  return (
    <section className="bg-secondary text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Book your professional cleaning service in 60 seconds. Get instant
          availability and pricing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <a
            href="tel:+18885550199"
            className="bg-white text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            ☎ Call (888) 555-0199
          </a>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-secondary transition"
          >
            Get Free Quote Online
          </Link>
        </div>

        <p className="text-sm text-green-100 mt-6">
          ✓ Free consultation • No obligation • Licensed & Insured
        </p>
      </div>
    </section>
  );
}
