import SiteHeader from "@/components/SiteHeader";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { posts } from "@/lib/posts";

export const metadata = getMetadata(
  "House Cleaning Tips & Advice | Healthy Home Services Blog",
  "Expert tips on house cleaning, deep cleaning guides, move-out checklists, and eco-friendly solutions.",
  "/blog",
);

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Blog" }];

export default function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "Blog", url: "https://healthyhomeservices.com/blog" },
  ]);

  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <SiteHeader
        title="Cleaning Tips & Advice"
        subtitle="Expert guides on house cleaning, deep cleaning, and home maintenance from our professional cleaners."
      />

      {/* Blog Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  {/* Image */}
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block bg-secondary text-white px-3 py-1 rounded text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-primary hover:text-secondary transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <span className="text-secondary font-bold inline-flex items-center">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
