// components/SiteHeader.js
import Link from "next/link";

export default function SiteHeader({
  title,
  subtitle,
  cta = "Get Free Quote",
  image = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
}) {
  return (
    <section className="relative bg-gradient-to-r from-primary to-gray-800 text-white py-20 md:py-28 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18885550199"
            className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition"
          >
            ☎ Call Now: (888) 555-0199
          </a>
          <Link
            href="/contact"
            className="bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
          >
            {cta}
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          <div>
            <div className="text-2xl mb-2">✓</div>
            <p className="text-gray-200">Licensed & Insured</p>
          </div>
          <div>
            <div className="text-2xl mb-2">⭐</div>
            <p className="text-gray-200">4.9/5 Stars</p>
          </div>
          <div>
            <div className="text-2xl mb-2">👥</div>
            <p className="text-gray-200">Background Checked</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🚀</div>
            <p className="text-gray-200">Same-Day Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
