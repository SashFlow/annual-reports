import {
  Database,
  FileSpreadsheet,
  BarChart3,
  ShieldCheck,
  Upload,
  FileText,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { howItWorks } from "@/lib/content/home";

type Step = { title: string; description: string };
type PathId = "connect" | "template";

const pathConfig = {
  connect: {
    badge: "Connect workflow",
    badgeClass: "border-lavender/30 bg-lavender/15 text-lavender",
    stepIcons: [Database, ShieldCheck, Users] as LucideIcon[],
    iconClass: "bg-lavender text-foreground",
    lineClass: "from-lavender/50",
  },
  template: {
    badge: "Draft workflow",
    badgeClass:
      "border-[oklch(0.85_0.12_155/0.35)] bg-[oklch(0.85_0.12_155/0.15)] text-[oklch(0.88_0.10_155)]",
    stepIcons: [Upload, Sparkles, Users] as LucideIcon[],
    iconClass: "bg-[oklch(0.85_0.12_155)] text-foreground",
    lineClass: "from-[oklch(0.85_0.12_155/0.5)]",
  },
} as const;

const STEP_VISUAL_MIN_H = "min-h-[11.5rem]";

function StepVisual({ pathId, index }: { pathId: PathId; index: number }) {
  if (pathId === "connect") {
    if (index === 0) {
      return (
        <div className="flex h-full flex-col justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-3">
          {[
            { icon: Database, label: "ERP" },
            { icon: FileSpreadsheet, label: "Excel" },
            { icon: BarChart3, label: "BI" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-2"
            >
              <Icon className="h-4 w-4 shrink-0 text-lavender" strokeWidth={2} />
              <span className="text-xs font-medium text-white/80">{label}</span>
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-lavender" />
            </div>
          ))}
        </div>
      );
    }
    if (index === 1) {
      return (
        <div className="flex h-full flex-col justify-center rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-lavender/20 px-2.5 py-1">
            <ShieldCheck className="h-3 w-3 text-lavender" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-lavender">
              Validation
            </span>
          </div>
          <div className="space-y-2">
            {["Period match", "Outlier check", "Completeness"].map((label, i) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-md bg-white/[0.06] px-3 py-2"
              >
                <span className="text-xs text-white/70">{label}</span>
                <span className="text-[10px] font-semibold text-lavender">✓</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (index === 2) {
      return (
        <div className="flex h-full flex-col justify-center gap-3">
          <div className="flex -space-x-2">
            {["FP&A", "IR", "ESG"].map((role) => (
              <div
                key={role}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground bg-lavender/30 text-[9px] font-bold text-white"
              >
                {role[0]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-lavender/25 bg-lavender/10 px-4 py-3">
            <Users className="h-5 w-5 shrink-0 text-lavender" />
            <span className="text-sm font-medium text-white">
              All sections approved
            </span>
          </div>
        </div>
      );
    }
    return null;
  }

  if (index === 0) {
    return (
      <div className="relative flex h-full min-h-[11.5rem] flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.04] px-6 py-8">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <Upload className="h-8 w-8" strokeWidth={1.5} />
          <span className="text-sm font-medium">Board-approved drafts</span>
        </div>
        <FileText className="how-it-works-float absolute left-6 top-8 h-8 w-8 text-white/25" />
        <FileText
          className="how-it-works-float absolute right-8 top-6 h-7 w-7 text-white/20"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="flex h-full flex-col justify-center rounded-xl border border-white/10 bg-white/[0.06] p-4">
        <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[oklch(0.85_0.12_155/0.25)] px-2.5 py-1">
          <Sparkles className="h-3 w-3 text-[oklch(0.88_0.10_155)]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[oklch(0.88_0.10_155)]">
            Mapping
          </span>
        </div>
        <div className="space-y-2">
          {[100, 88, 72].map((width, i) => (
            <div
              key={i}
              className="how-it-works-pulse h-2 rounded-md bg-white/12"
              style={{ width: `${width}%`, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-white/50">
          Aligning structure & data…
        </p>
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="flex h-full flex-col justify-center gap-3">
        <div className="rounded-xl border border-[oklch(0.85_0.12_155/0.35)] bg-[oklch(0.85_0.12_155/0.12)] px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[oklch(0.88_0.10_155)]">
            Audit-ready export
          </p>
          <p className="mt-1 text-sm font-medium text-white">Ready to publish</p>
        </div>
      </div>
    );
  }
  return null;
}

function PathHeader({ pathId, label }: { pathId: PathId; label: string }) {
  const config = pathConfig[pathId];
  return (
    <div className="flex flex-wrap items-center gap-3">
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
        {label}
      </h3>
      <span
        className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${config.badgeClass}`}
      >
        {config.badge}
      </span>
    </div>
  );
}

function TimelineStep({
  pathId,
  stepIndex,
  step,
  isLast,
  showConnector = true,
}: {
  pathId: PathId;
  stepIndex: number;
  step: Step;
  isLast: boolean;
  showConnector?: boolean;
}) {
  const config = pathConfig[pathId];
  const Icon = config.stepIcons[stepIndex] ?? config.stepIcons[0];

  return (
    <div className="flex h-full gap-4 sm:gap-5">
      <div className="flex flex-col items-center self-stretch">
        <div
          className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] sm:h-12 sm:w-12 ${config.iconClass}`}
        >
          <Icon
            className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
            strokeWidth={1.75}
          />
        </div>
        {showConnector && !isLast && (
          <div
            className={`mt-2 w-px flex-1 min-h-[24px] bg-gradient-to-b ${config.lineClass} to-transparent`}
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-[11px] font-bold tracking-widest text-white/40">
          {String(stepIndex + 1).padStart(2, "0")}
        </p>
        <h4 className="mt-1 text-base font-semibold tracking-[-0.02em] text-white sm:text-[17px]">
          {step.title}
        </h4>
        <p className="mt-1.5 text-sm leading-relaxed text-white/60">
          {step.description}
        </p>
        <div className={`mt-4 flex flex-1 flex-col ${STEP_VISUAL_MIN_H}`}>
          <StepVisual pathId={pathId} index={stepIndex} />
        </div>
      </div>
    </div>
  );
}

function OrDivider({
  className = "",
  variant = "horizontal",
}: {
  className?: string;
  variant?: "horizontal" | "vertical";
}) {
  if (variant === "vertical") {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 ${className}`}
        aria-hidden
      >
        <div className="h-10 w-px bg-white/15" />
        <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 text-sm font-bold tracking-wide text-white/70">
          OR
        </span>
        <div className="h-10 w-px bg-white/15" />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      aria-hidden
    >
      <div className="flex w-full max-w-xs items-center gap-4">
        <div className="h-px flex-1 bg-white/15" />
        <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 text-sm font-bold tracking-wide text-white/70">
          OR
        </span>
        <div className="h-px flex-1 bg-white/15" />
      </div>
    </div>
  );
}

function PathCard({
  pathId,
  label,
  steps,
}: {
  pathId: PathId;
  label: string;
  steps: readonly Step[];
}) {
  return (
    <article className="rounded-[20px] border border-white/10 bg-white/[0.06] p-6 sm:p-8 lg:p-9">
      <div className="mb-6">
        <PathHeader pathId={pathId} label={label} />
      </div>
      <div className="space-y-8 sm:space-y-10">
        {steps.map((step, i) => (
          <TimelineStep
            key={step.title}
            pathId={pathId}
            stepIndex={i}
            step={step}
            isLast={i === steps.length - 1}
            showConnector={false}
          />
        ))}
      </div>
    </article>
  );
}

export function HowItWorksPaths() {
  const [connectPath, templatePath] = howItWorks.paths;
  const stepCount = connectPath.steps.length;

  return (
    <>
      <div className="flex flex-col gap-6 lg:hidden">
        <PathCard
          pathId="connect"
          label={connectPath.label}
          steps={connectPath.steps}
        />
        <OrDivider className="py-2" />
        <PathCard
          pathId="template"
          label={templatePath.label}
          steps={templatePath.steps}
        />
      </div>

      <div className="hidden overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.06] lg:block">
        <div
          className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
          style={{
            gridTemplateRows: `auto repeat(${stepCount}, minmax(0, auto))`,
          }}
        >
          <div
            className="self-start border-b border-white/10 px-9 pt-8 pb-4"
            style={{ gridColumn: 1, gridRow: 1 }}
          >
            <PathHeader pathId="connect" label={connectPath.label} />
          </div>
          <div
            className="border-x border-b border-white/10"
            style={{ gridColumn: 2, gridRow: 1 }}
            aria-hidden
          />
          <div
            className="self-start border-b border-white/10 px-9 pt-8 pb-4"
            style={{ gridColumn: 3, gridRow: 1 }}
          >
            <PathHeader pathId="template" label={templatePath.label} />
          </div>
          <div
            className="flex items-center justify-center border-x border-white/10 px-3"
            style={{ gridColumn: 2, gridRow: `2 / span ${stepCount}` }}
          >
            <OrDivider variant="vertical" />
          </div>

          {Array.from({ length: stepCount }, (_, i) => {
            const isLast = i === stepCount - 1;
            const borderClass = isLast ? "" : "border-b border-white/10";
            const row = i + 2;
            return (
              <div
                key={`connect-step-${i}`}
                className={`flex h-full min-h-0 p-9 pt-8 ${borderClass}`}
                style={{ gridColumn: 1, gridRow: row }}
              >
                <TimelineStep
                  pathId="connect"
                  stepIndex={i}
                  step={connectPath.steps[i]}
                  isLast={isLast}
                  showConnector={false}
                />
              </div>
            );
          })}
          {Array.from({ length: stepCount }, (_, i) => {
            const isLast = i === stepCount - 1;
            const borderClass = isLast ? "" : "border-b border-white/10";
            const row = i + 2;
            return (
              <div
                key={`template-step-${i}`}
                className={`flex h-full min-h-0 p-9 pt-8 ${borderClass}`}
                style={{ gridColumn: 3, gridRow: row }}
              >
                <TimelineStep
                  pathId="template"
                  stepIndex={i}
                  step={templatePath.steps[i]}
                  isLast={isLast}
                  showConnector={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
