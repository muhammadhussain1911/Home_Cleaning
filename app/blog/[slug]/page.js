import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import {
  getMetadata,
  getOrganizationSchema,
  getBreadcrumbSchema,
  getArticleSchema,
} from "@/lib/seo";
import { posts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return getMetadata(post.title, post.excerpt, `/blog/${params.slug}`);
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <Link href="/blog" className="text-secondary hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { label: "Home", url: "https://healthyhomeservices.com" },
    { label: "Blog", url: "https://healthyhomeservices.com/blog" },
    {
      label: post.title,
      url: `https://healthyhomeservices.com/blog/${post.slug}`,
    },
  ]);

  const articleSchema = getArticleSchema(post);

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={articleSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-12 bg-gradient-to-r from-primary to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-200">
            <span className="bg-secondary px-3 py-1 rounded font-semibold">
              {post.category}
            </span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
        title={post.title}
      />

      {/* Article Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-sm md:prose max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("#")) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s/, "");
                const HeadingTag = `h${level + 1}`;
                return (
                  <HeadingTag
                    key={i}
                    className={`font-bold mb-4 mt-6 ${
                      level === 1
                        ? "text-3xl"
                        : level === 2
                          ? "text-2xl"
                          : "text-xl"
                    }`}
                  >
                    {text}
                  </HeadingTag>
                );
              }

              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc list-inside mb-6 space-y-2">
                    {paragraph.split("\n").map((item, j) => (
                      <li key={j} className="text-gray-700">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={i} className="text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
                HH
              </div>
              <div>
                <p className="font-bold text-lg">Healthy Home Services</p>
                <p className="text-gray-600">
                  Professional house cleaning experts with 20+ years of
                  experience. Committed to helping you maintain a clean, healthy
                  home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition"
                >
                  <div
                    className="h-32 bg-cover bg-center"
                    style={{ backgroundImage: `url(${relPost.image})` }}
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-2 hover:text-secondary transition">
                      {relPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection title="Ready to Get Your Home Cleaned?" />
    </>
  );
}
