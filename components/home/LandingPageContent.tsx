import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Database,
  ShieldCheck,
  GitBranch,
  Users,
  FileCheck,
  ScrollText,
  PieChart,
  Leaf,
  LineChart,
} from "lucide-react";
import { AnnualReportsAILogo } from "@/components/logo";
import { HeroReportShowcase } from "@/components/home/HeroReportShowcase";
import { HowItWorksPaths } from "@/components/home/HowItWorksIllustrations";
import { LandingNav } from "@/components/home/LandingNav";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { SampleReportsSection } from "@/components/home/SampleReportsSection";
import { faqs } from "@/lib/content/faqs";
import {
  hero,
  hook,
  stats,
  howItWorks,
  features,
  audiences,
  testimonials,
  cta,
} from "@/lib/content/home";
import { comparisonRows } from "@/lib/content/compare";
import { SiteFooter } from "@/components/site/SiteFooter";

const featureIcons = [
  Database,
  ShieldCheck,
  Users,
  GitBranch,
  FileCheck,
  ScrollText,
];
const audienceIcons = [PieChart, Leaf, LineChart];

export function LandingPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />

      <main>
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
              <div className="absolute -top-32 right-[-8%] h-[480px] w-[480px] rounded-full bg-lavender/[0.14] blur-[100px]" />
              <div className="absolute bottom-[-10%] left-[-12%] h-[400px] w-[400px] rounded-full bg-lavender/[0.10] blur-[90px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-12 sm:px-10 sm:pt-24 sm:pb-16 md:pt-32">
              <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
                <div className="w-full max-w-xl flex-1 text-center md:text-left">
                  <div className="mb-8 flex justify-center md:justify-start">
                    <AnnualReportsAILogo size="lg" variant="light" />
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-lavender/40 bg-lavender/10 px-3 py-1 text-xs font-semibold text-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-lavender" />
                    {hero.badge}
                  </div>

                  <h1 className="mt-5 text-3xl font-bold leading-[1.06] tracking-[-0.025em] text-foreground sm:text-4xl md:text-5xl lg:text-[58px]">
                    Annual, quarterly, and ESG reports — without the{" "}
                    <span className="text-lavender">reporting marathon.</span>
                  </h1>

                  <p className="mx-auto mt-6 max-w-md text-base leading-[1.6] text-muted-foreground sm:mt-7 sm:text-lg md:mx-0">
                    {hero.subhead}
                  </p>

                  <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start sm:gap-4">
                    <Link
                      href="/early-access"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-foreground px-7 py-3 text-base font-semibold text-background transition-all hover:opacity-90 sm:w-auto"
                    >
                      Join the founding batch{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <a
                      href="#how-it-works"
                      className="inline-flex w-full items-center justify-center rounded-[10px] border border-border bg-background px-7 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
                    >
                      See how it works
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground md:justify-start">
                    {hero.trustChips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-lavender" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full max-w-[280px] shrink-0 sm:max-w-xs md:max-w-sm lg:max-w-md">
                  <HeroReportShowcase />
                </div>
              </div>
            </div>
          </section>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-[55%] right-[5%] h-[500px] w-[500px] rounded-full bg-lavender/[0.12] blur-[100px]" />
            <div className="absolute top-[70%] -left-[180px] h-[420px] w-[420px] rounded-full bg-[oklch(0.65_0.20_350)]/[0.06] blur-[80px]" />
          </div>

          <section className="relative">
            <div className="mx-auto max-w-6xl px-6 sm:px-10">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[16px] border border-border bg-border md:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-background px-5 py-6 sm:px-7 sm:py-8"
                  >
                    <p className="text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-[13px]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
                {hook.kicker}
              </p>
              <blockquote className="mb-6 text-lg font-medium italic leading-relaxed text-foreground sm:text-xl">
                &ldquo;{hook.quote}&rdquo;
              </blockquote>
              <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[44px]">
                {hook.headline}
                <br />
                <span className="text-lavender">{hook.headlineAccent}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
                {hook.body}{" "}
                <Link
                  href={hook.compareLink}
                  className="text-foreground underline underline-offset-2 hover:text-lavender"
                >
                  {hook.compareLinkLabel}
                </Link>
                .
              </p>
            </div>
          </section>

          <section id="compare" className="relative py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-10">
              <div className="mb-10 max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
                  Why workflow-first
                </p>
                <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-4xl">
                  Built for cycles, not one-off drafts
                </h2>
              </div>
              <div className="overflow-x-auto rounded-[16px] border border-border">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="px-5 py-4 font-semibold text-foreground">
                        Dimension
                      </th>
                      <th className="px-5 py-4 font-semibold text-muted-foreground">
                        Traditional
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
            </div>
          </section>

          <section id="how-it-works" className="relative">
            <div className="mx-6 rounded-[24px] bg-foreground text-background sm:mx-10">
              <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
                <div className="mb-14 max-w-2xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
                    How it works
                  </p>
                  <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.01em] sm:text-4xl">
                    {howItWorks.headline}
                  </h2>
                  <p className="mt-4 text-base leading-[1.6] text-white/70">
                    {howItWorks.subhead}
                  </p>
                </div>

                <HowItWorksPaths />
              </div>
            </div>
          </section>

          <section id="features" className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6 sm:px-10">
              <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
                <div className="lg:w-80 lg:flex-shrink-0">
                  <div className="lg:sticky lg:top-24">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
                      What you get
                    </p>
                    <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-4xl">
                      One workflow. Every section.
                    </h2>
                    <p className="mt-4 text-base leading-[1.6] text-muted-foreground">
                      From reconciliation to audit trail — designed so your team
                      ships annual, quarterly, and ESG reports with fewer
                      surprises.
                    </p>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {features.map((feature, i) => {
                    const Icon = featureIcons[i];
                    return (
                      <div
                        key={feature.title}
                        className="group rounded-[16px] border border-border p-7 transition-all hover:border-lavender/40 hover:shadow-lg hover:shadow-lavender/5 sm:p-8"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-lavender/15 transition-colors group-hover:bg-lavender/25">
                          <Icon className="h-5 w-5 text-foreground" />
                        </div>
                        <h3 className="text-base font-semibold tracking-[-0.02em] text-foreground">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-10">
              <div className="mb-12 max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
                  Built for
                </p>
                <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-4xl">
                  Every team that owns a reporting cycle
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {audiences.map((a, i) => {
                  const Icon = audienceIcons[i];
                  return (
                    <Link
                      key={a.slug}
                      href={a.href}
                      className="rounded-[16px] border border-border bg-secondary/40 p-7 transition-all hover:bg-secondary/60 hover:border-lavender/40"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-foreground text-background">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold tracking-[-0.02em] text-foreground">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">
                        {a.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <SampleReportsSection />

          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-10">
              <div className="mb-12 max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
                  Early teams
                </p>
                <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-4xl">
                  What founding teams are saying
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="flex flex-col rounded-[16px] border border-border bg-secondary/30 p-7 sm:p-8"
                  >
                    <blockquote className="flex-1 text-sm leading-[1.65] text-foreground sm:text-[15px]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border pt-5">
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {t.role}, {t.company}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="py-20 sm:py-24">
            <div className="mx-auto max-w-3xl px-6 sm:px-10">
              <div className="mb-12 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-4xl">
                  Questions, answered
                </h2>
              </div>
              <FaqAccordion faqs={faqs} />
            </div>
          </section>

          <section id="cta-section" className="relative">
            <div className="mx-6 mb-4 rounded-[24px] bg-foreground px-6 py-16 sm:mx-10 sm:px-12 sm:py-24 md:py-28">
              <div className="relative mx-auto max-w-2xl text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-[12px] bg-lavender">
                  <Sparkles className="h-6 w-6 text-foreground" />
                </div>
                <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.01em] text-white sm:text-4xl">
                  {cta.headline}
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-[1.6] text-white/60">
                  {cta.body}
                </p>
                <Link
                  href="/early-access"
                  className="group mt-10 inline-flex items-center justify-center gap-2 rounded-[10px] bg-lavender px-8 py-3 text-base font-semibold text-foreground transition-all hover:shadow-lg hover:shadow-lavender/25"
                >
                  {cta.button}{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
