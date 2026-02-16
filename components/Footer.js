// components/Footer.js
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Healthy Home Services</h3>
            <p className="text-gray-300 text-sm mb-4">
              Professional house cleaning services across the USA. Licensed,
              insured, and background-checked cleaners.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/services/house-cleaning"
                  className="hover:text-secondary transition"
                >
                  House Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/deep-cleaning"
                  className="hover:text-secondary transition"
                >
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/move-in-move-out-cleaning"
                  className="hover:text-secondary transition"
                >
                  Move-In/Out Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/office-cleaning"
                  className="hover:text-secondary transition"
                >
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/airbnb-cleaning"
                  className="hover:text-secondary transition"
                >
                  Airbnb Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/locations"
                  className="hover:text-secondary transition"
                >
                  All Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/new-york"
                  className="hover:text-secondary transition"
                >
                  New York
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/los-angeles"
                  className="hover:text-secondary transition"
                >
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/chicago"
                  className="hover:text-secondary transition"
                >
                  Chicago
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-secondary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-secondary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-secondary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Healthy Home Services. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              <a href="tel:+18885550199" className="hover:text-secondary">
                📞 (888) 555-0199
              </a>
            </div>
            <p className="text-gray-400 text-sm">Licensed • Insured • Bonded</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
