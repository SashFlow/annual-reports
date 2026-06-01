import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/content/posts";
import { BlogLayout } from "@/components/blog/BlogLayout";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — Corporate Reporting & AI Workflow Guides",
  description:
    "Practical guides on annual reports, ESG disclosures, quarterly reporting workflows, and AI-powered corporate reporting from the Annual Reports AI team.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <BlogLayout breadcrumbs={[{ label: "Blog", href: "/blog" }]}>
      <h1 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
        Corporate reporting guides
      </h1>
      <p className="mt-4 text-base leading-[1.6] text-muted-foreground">
        Practical advice for finance, ESG, and IR teams — from cycle management
        to workflow-first AI.
      </p>

      <div className="mt-12 space-y-8">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">Articles coming soon.</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[16px] border border-border p-6 transition-all hover:border-lavender/40"
            >
              <time
                dateTime={post.date}
                className="text-xs font-semibold uppercase tracking-wider text-lavender"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-xl font-bold tracking-[-0.02em] text-foreground">
                <Link href={`/blog/${post.slug}`} className="hover:text-lavender">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-foreground underline underline-offset-2"
              >
                Read article
              </Link>
            </article>
          ))
        )}
      </div>
    </BlogLayout>
  );
}
