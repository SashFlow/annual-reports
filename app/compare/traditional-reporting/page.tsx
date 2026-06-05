import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { AnnualReportsAILogo } from "@/components/logo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/seo/schemas";
import { comparisonRows, comparePage } from "@/lib/content/compare";
import { faqs } from "@/lib/content/faqs";
import { FaqAccordion } from "@/components/home/FaqAccordion";

export const metadata: Metadata = createPageMetadata({
  title: comparePage.title,
  description: comparePage.description,
  path: "/compare/traditional-reporting",
});

const compareFaqs = faqs.slice(0, 4);

export default function TraditionalReportingComparePage() {
  return (
    <>
      <JsonLd data={[faqPageSchema(compareFaqs)]} />
      <div className="min-h-screen bg-background">
        <header className="border-b border-border/60 px-6 py-4 sm:px-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <AnnualReportsAILogo size="sm" variant="light" />
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
            Compare
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl">
            {comparePage.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            {comparePage.intro}
          </p>

          <div className="mt-14 overflow-x-auto rounded-[16px] border border-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-5 py-4 font-semibold text-foreground">
                    Dimension
                  </th>
                  <th className="px-5 py-4 font-semibold text-muted-foreground">
                    Traditional methods
                  </th>
                  <th className="px-5 py-4 font-semibold text-foreground">
                    Annual Reports AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.dimension}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-5 py-4 font-medium text-foreground">
                      {row.dimension}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {row.traditional}
                    </td>
                    <td className="px-5 py-4 text-foreground">
                      {row.platform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 max-w-2xl">
            <Link
              href="/early-access"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-foreground px-7 py-3 text-base font-semibold text-background"
            >
              Lets solve your problems{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-20 max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold tracking-[-0.02em] text-foreground">
              Common questions
            </h2>
            <FaqAccordion faqs={compareFaqs} />
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
