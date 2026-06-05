"use client";

import { useEffect, useMemo, useState } from "react";
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
import {
  trackEarlyAccessStepCompleted,
  trackEarlyAccessStepViewed,
  trackEarlyAccessSurveySubmitted,
} from "@/lib/analytics";
import { toast } from "sonner";

const REPORT_TYPES = [
  "Annual",
  "Quarterly",
  "ESG",
  "Sustainability",
  "Board",
  "Investor",
];
const CHALLENGES = [
  "Data collection",
  "Validation",
  "Writing",
  "Review cycles",
  "Compliance",
];
const BUDGET = [
  "Under $5k/year",
  "$5k-$25k/year",
  "$25k-$100k/year",
  "$100k+/year",
  "Not sure yet",
];

type Answers = {
  report_types: string[];
  biggest_challenge: string | null;
  budget_range: string | null;
  name: string;
  email: string;
  notes: string;
  skip_reason: string;
};

const initial: Answers = {
  report_types: [],
  biggest_challenge: null,
  budget_range: null,
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

  useEffect(() => {
    trackEarlyAccessStepViewed(step);
  }, [step]);

  const set = <K extends keyof Answers>(k: K, v: Answers[K]) =>
    setA((p) => ({ ...p, [k]: v }));
  const toggleReportType = (v: string) =>
    setA((p) => ({
      ...p,
      report_types: p.report_types.includes(v)
        ? p.report_types.filter((x) => x !== v)
        : [...p.report_types, v],
    }));

  const sections = useMemo(
    () => [
      {
        valid: a.report_types.length > 0,
        render: (
          <SectionShell
            kicker="Step 1 · Your reports"
            title="What reports does your team produce?"
            subtitle="Select all that apply."
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {REPORT_TYPES.map((t) => (
                <Chip
                  key={t}
                  active={a.report_types.includes(t)}
                  onClick={() => toggleReportType(t)}
                >
                  {t}
                </Chip>
              ))}
            </div>
          </SectionShell>
        ),
      },
      {
        valid: !!a.biggest_challenge,
        render: (
          <SectionShell
            kicker="Step 2 · Your biggest blocker"
            title="What's hardest about reporting today?"
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
        valid: !!a.budget_range,
        render: (
          <SectionShell
            kicker="Step 3 · Budget"
            title="What would you budget annually for a tool that cuts reporting time in half?"
          >
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
          </SectionShell>
        ),
      },
      {
        valid: a.email.trim().length > 3 && a.email.includes("@"),
        render: (
          <SectionShell
            kicker="Step 4 · Early access"
            title="Almost done"
            subtitle="We only contact you about Annual Reports AI — founding batch updates and onboarding."
          >
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

  const completeStep = () => {
    const data: Record<string, string | number | boolean> = {};
    if (step === 0) data.selection_count = a.report_types.length;
    if (step === 1 && a.biggest_challenge) {
      data.biggest_challenge = a.biggest_challenge;
    }
    if (step === 2 && a.budget_range) data.budget_range = a.budget_range;
    if (step === 3) {
      data.has_name = a.name.trim().length > 0;
      data.has_notes = a.notes.trim().length > 0;
    }
    trackEarlyAccessStepCompleted(step, data);
  };

  const submit = async (opts?: {
    skipEmail?: boolean;
    skipReason?: string;
  }) => {
    setSubmitting(true);
    const payload = {
      report_types: a.report_types.length ? a.report_types : null,
      biggest_challenge: a.biggest_challenge,
      budget_range: a.budget_range,
      wants_early_access: opts?.skipEmail ? false : true,
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
        trackEarlyAccessSurveySubmitted({ with_email: !opts?.skipEmail });
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
                completeStep();
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
            {isLast ? (
              <button
                type="button"
                disabled={!current.valid || submitting}
                onClick={() => {
                  completeStep();
                  submit();
                }}
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
                onClick={() => {
                  completeStep();
                  setStep((s) => Math.min(total - 1, s + 1));
                }}
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
