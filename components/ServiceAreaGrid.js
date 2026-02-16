// components/ServiceAreaGrid.js
import Link from "next/link";

export default function ServiceAreaGrid({
  title = "Service Areas",
  cities = [],
}) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 text-lg">
            Serving major cities across the USA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group bg-gradient-to-br from-secondary to-green-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2">{city.name}</h3>
              <p className="text-green-100 text-sm mb-4">{city.state}</p>
              <span className="text-sm font-semibold group-hover:translate-x-2 transition inline-block">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
          <p className="text-gray-700 mb-4">
            Don't see your city? We're expanding! Contact us to add your area to
            our service territory.
          </p>
          <a
            href="tel:+18885550199"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
          >
            Call to Inquire: (888) 555-0199
          </a>
        </div>
      </div>
    </section>
  );
}
