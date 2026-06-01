"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  Layers,
  Loader2,
  Mail,
} from "lucide-react";
import { AnnualReportsAILogo } from "@/components/logo";
import { toast } from "sonner";

const REPORT_TYPES = [
  "Annual",
  "Quarterly",
  "ESG",
  "Sustainability",
  "Board",
  "Investor",
];
const REPORTS_PER_YEAR = ["1-2", "3-5", "6-10", "11-20", "20+"];
const PEOPLE_INVOLVED = ["1-3", "4-10", "11-25", "26-50", "50+"];
const CYCLE_LENGTH = [
  "Under 2 weeks",
  "2-4 weeks",
  "1-2 months",
  "2-3 months",
  "3+ months",
];
const TOOLS = ["Excel", "Word", "PowerPoint", "ERP", "BI Tools"];
const CHALLENGES = [
  "Data collection",
  "Validation",
  "Writing",
  "Review cycles",
  "Compliance",
];
const COMPANY_SIZE = ["1-50", "51-200", "201-1,000", "1,001-5,000", "5,000+"];
const PAY_50 = ["Yes", "No", "Depends"];
const BUDGET = [
  "Under $5k/year",
  "$5k-$25k/year",
  "$25k-$100k/year",
  "$100k+/year",
  "Not sure yet",
];

type Answers = {
  report_types: string[];
  reports_per_year: string | null;
  people_involved: string | null;
  cycle_length: string | null;
  tools: string[];
  biggest_challenge: string | null;
  company_size: string | null;
  pay_for_50_reduction: string | null;
  budget_range: string | null;
  wants_early_access: boolean | null;
  name: string;
  email: string;
  notes: string;
  skip_reason: string;
};

const initial: Answers = {
  report_types: [],
  reports_per_year: null,
  people_involved: null,
  cycle_length: null,
  tools: [],
  biggest_challenge: null,
  company_size: null,
  pay_for_50_reduction: null,
  budget_range: null,
  wants_early_access: null,
  name: "",
  email: "",
  notes: "",
  skip_reason: "",
};

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[10px] border px-4 py-2.5 text-left text-sm font-medium transition-all ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-foreground hover:border-foreground/40"
      }`}
    >
      <span className="flex items-center gap-2">
        {active && <Check className="h-3.5 w-3.5 flex-shrink-0" />}
        <span>{children}</span>
      </span>
    </button>
  );
}

function SectionShell({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-7">
      <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-lavender">
          {kicker}
        </p>
        <h2 className="text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm leading-[1.6] text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function QuestionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold text-foreground">{children}</p>;
}

export function EarlyAccessSurvey() {
  const [a, setA] = useState<Answers>(initial);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [showEmailNudge, setShowEmailNudge] = useState(false);
  const [done, setDone] = useState(false);

  const set = <K extends keyof Answers>(k: K, v: Answers[K]) =>
    setA((p) => ({ ...p, [k]: v }));
  const toggleArr = (k: "report_types" | "tools", v: string) =>
    setA((p) => ({
      ...p,
      [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v],
    }));

  const sections = useMemo(
    () => [
      {
        canSkip: false,
        valid: a.report_types.length > 0,
        render: (
          <SectionShell
            kicker="Section 1 · Your reports"
            title="What type of reports do you create?"
            subtitle="Select all that apply."
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {REPORT_TYPES.map((t) => (
                <Chip
                  key={t}
                  active={a.report_types.includes(t)}
                  onClick={() => toggleArr("report_types", t)}
                >
                  {t}
                </Chip>
              ))}
            </div>
          </SectionShell>
        ),
      },
      {
        canSkip: true,
        valid: !!a.reports_per_year && !!a.people_involved && !!a.cycle_length,
        render: (
          <SectionShell
            kicker="Section 2 · Volume & team"
            title="How does your reporting cycle run today?"
          >
            <div className="space-y-3">
              <QuestionLabel>
                How many reports do you produce annually?
              </QuestionLabel>
              <div className="flex flex-wrap gap-2">
                {REPORTS_PER_YEAR.map((s) => (
                  <Chip
                    key={s}
                    active={a.reports_per_year === s}
                    onClick={() => set("reports_per_year", s)}
                  >
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <QuestionLabel>
                How many people are involved in report creation?
              </QuestionLabel>
              <div className="flex flex-wrap gap-2">
                {PEOPLE_INVOLVED.map((s) => (
                  <Chip
                    key={s}
                    active={a.people_involved === s}
                    onClick={() => set("people_involved", s)}
                  >
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <QuestionLabel>
                How long does a typical reporting cycle take?
              </QuestionLabel>
              <div className="flex flex-wrap gap-2">
                {CYCLE_LENGTH.map((s) => (
                  <Chip
                    key={s}
                    active={a.cycle_length === s}
                    onClick={() => set("cycle_length", s)}
                  >
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
          </SectionShell>
        ),
      },
      {
        canSkip: true,
        valid: a.tools.length > 0,
        render: (
          <SectionShell
            kicker="Section 3 · Your stack"
            title="What tools do you currently use?"
            subtitle="Select all that apply."
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {TOOLS.map((t) => (
                <Chip
                  key={t}
                  active={a.tools.includes(t)}
                  onClick={() => toggleArr("tools", t)}
                >
                  {t}
                </Chip>
              ))}
            </div>
          </SectionShell>
        ),
      },
      {
        canSkip: true,
        valid: !!a.biggest_challenge,
        render: (
          <SectionShell
            kicker="Section 4 · Pain"
            title="What's your biggest reporting challenge?"
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {CHALLENGES.map((c) => (
                <Chip
                  key={c}
                  active={a.biggest_challenge === c}
                  onClick={() => set("biggest_challenge", c)}
                >
                  {c}
                </Chip>
              ))}
            </div>
          </SectionShell>
        ),
      },
      {
        canSkip: true,
        valid: !!a.company_size && !!a.pay_for_50_reduction && !!a.budget_range,
        render: (
          <SectionShell
            kicker="Section 5 · Fit & budget"
            title="Help us understand fit and willingness to invest"
          >
            <div className="space-y-3">
              <QuestionLabel>Company size?</QuestionLabel>
              <div className="flex flex-wrap gap-2">
                {COMPANY_SIZE.map((s) => (
                  <Chip
                    key={s}
                    active={a.company_size === s}
                    onClick={() => set("company_size", s)}
                  >
                    {s} employees
                  </Chip>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <QuestionLabel>
                Would you pay for a solution that reduces reporting time by
                50%+?
              </QuestionLabel>
              <div className="flex flex-wrap gap-2">
                {PAY_50.map((s) => (
                  <Chip
                    key={s}
                    active={a.pay_for_50_reduction === s}
                    onClick={() => set("pay_for_50_reduction", s)}
                  >
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <QuestionLabel>Budget range?</QuestionLabel>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {BUDGET.map((s) => (
                  <Chip
                    key={s}
                    active={a.budget_range === s}
                    onClick={() => set("budget_range", s)}
                  >
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
          </SectionShell>
        ),
      },
      {
        canSkip: false,
        valid:
          a.wants_early_access !== null &&
          a.email.trim().length > 3 &&
          a.email.includes("@"),
        render: (
          <SectionShell
            kicker="Section 6 · Early access"
            title="Want early access?"
            subtitle="We only contact you about Annual Reports AI — founding batch updates and onboarding."
          >
            <div className="space-y-3">
              <QuestionLabel>Join the founding batch?</QuestionLabel>
              <div className="flex gap-2">
                <Chip
                  active={a.wants_early_access === true}
                  onClick={() => set("wants_early_access", true)}
                >
                  Yes
                </Chip>
                <Chip
                  active={a.wants_early_access === false}
                  onClick={() => set("wants_early_access", false)}
                >
                  No, just sharing feedback
                </Chip>
              </div>
            </div>
            <div className="space-y-3">
              <QuestionLabel>Name</QuestionLabel>
              <input
                value={a.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Your name"
                className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
            </div>
            <div className="space-y-3">
              <QuestionLabel>Email *</QuestionLabel>
              <input
                type="email"
                value={a.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
            </div>
            <div className="space-y-3">
              <QuestionLabel>Anything else we should know?</QuestionLabel>
              <textarea
                value={a.notes}
                onChange={(e) => set("notes", e.target.value)}
                rows={3}
                placeholder="Optional"
                className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowEmailNudge(true)}
              className="text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
            >
              I&apos;d rather not share my email
            </button>
          </SectionShell>
        ),
      },
    ],
    [a],
  );

  const total = sections.length;
  const current = sections[step];
  const isLast = step === total - 1;
  const progress = ((step + 1) / total) * 100;

  const submit = async (opts?: {
    skipEmail?: boolean;
    skipReason?: string;
  }) => {
    setSubmitting(true);
    const payload = {
      report_types: a.report_types.length ? a.report_types : null,
      reports_per_year: a.reports_per_year,
      people_involved: a.people_involved,
      cycle_length: a.cycle_length,
      tools: a.tools.length ? a.tools : null,
      biggest_challenge: a.biggest_challenge,
      company_size: a.company_size,
      pay_for_50_reduction: a.pay_for_50_reduction,
      budget_range: a.budget_range,
      wants_early_access: a.wants_early_access,
      name: a.name || null,
      email: opts?.skipEmail ? null : a.email || null,
      notes: a.notes || null,
      skip_reason: opts?.skipReason ?? null,
    };
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setDone(true);
        return;
      }

      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;
      toast.error(data?.error ?? "Failed to submit assessment");
    } catch {
      toast.error("Failed to submit assessment");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[16px] bg-lavender">
            <Layers className="h-7 w-7 text-foreground" />
          </div>
          <h1 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
            You&apos;re on the founding list
          </h1>
          <p className="mt-4 max-w-md text-base leading-[1.6] text-muted-foreground">
            Thank you — every answer goes directly to the team building Annual
            Reports AI. We&apos;ll be in touch when founding-team spots open.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-[10px] bg-foreground px-6 py-3 text-sm font-semibold text-background"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const NudgeModal = () =>
    showEmailNudge ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-[20px] bg-background p-6 shadow-2xl sm:p-8">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-lavender/20">
            <Mail className="h-5 w-5 text-foreground" />
          </div>
          <h3 className="text-lg font-bold tracking-[-0.02em] text-foreground sm:text-xl">
            Without an email, we can&apos;t invite you in.
          </h3>
          <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">
            The founding batch is small on purpose — we deliver early access and
            pricing by email. Your answers still help us if you skip, but we
            lose the only way to reach you.
          </p>
          <textarea
            value={a.skip_reason}
            onChange={(e) => set("skip_reason", e.target.value)}
            placeholder="Optional: tell us why you'd rather not share it"
            rows={2}
            className="mt-5 w-full rounded-[10px] border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setShowEmailNudge(false)}
              className="flex-1 rounded-[10px] bg-foreground px-4 py-2.5 text-sm font-semibold text-background"
            >
              OK, I&apos;ll add my email
            </button>
            <button
              type="button"
              disabled={submitting}
              onClick={() => {
                setShowEmailNudge(false);
                submit({
                  skipEmail: true,
                  skipReason: a.skip_reason || "declined",
                });
              }}
              className="flex-1 rounded-[10px] border border-border bg-background px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Submit without email
            </button>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/80 px-6 py-4 backdrop-blur-xl sm:px-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />{" "}
            <span className="text-sm font-medium">Home</span>
          </Link>
          <AnnualReportsAILogo size="sm" variant="light" />
          <div className="hidden text-xs font-semibold text-muted-foreground sm:flex sm:items-center sm:gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-lavender" />
            Founding batch
          </div>
        </div>
      </header>

      <div className="sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-3xl px-6 py-3 sm:px-10">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span>
              Step {step + 1} of {total}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-foreground transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-10 pb-32 sm:px-10 sm:py-14">
        {current.render}
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl sm:px-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-all disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          <div className="flex items-center gap-2">
            {current.canSkip && !isLast && (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
                className="rounded-[10px] px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Skip
              </button>
            )}
            {isLast ? (
              <button
                type="button"
                disabled={!current.valid || submitting}
                onClick={() => submit()}
                className="inline-flex items-center gap-1.5 rounded-[10px] bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-all disabled:opacity-50"
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Check className="h-4 w-4" />
                )}
                Join
              </button>
            ) : (
              <button
                type="button"
                disabled={!current.valid}
                onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
                className="inline-flex items-center gap-1.5 rounded-[10px] bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-all disabled:opacity-40"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <NudgeModal />
    </div>
  );
}

export default EarlyAccessSurvey;
