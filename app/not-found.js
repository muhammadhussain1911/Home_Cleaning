import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Healthy Home Services",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-gray-800 text-white">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>

        <p className="text-xl text-gray-300 mb-12 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. Let us help you find
          what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition inline-block"
          >
            Back to Home
          </Link>

          <Link
            href="/services"
            className="border-2 border-whitetext-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition inline-block"
          >
            View Services
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300 mb-4">Need help? Contact us directly:</p>
          <a
            href="tel:+18885550199"
            className="text-secondary hover:underline font-bold text-lg"
          >
            (888) 555-0199
          </a>
        </div>
      </div>
    </div>
  );
}
