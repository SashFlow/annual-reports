import {
  FileSpreadsheet,
  Database,
  BarChart3,
  FileText,
  Presentation,
  Layers,
} from "lucide-react";

const RADIUS = 165;
const CENTER = 220;

const sources = [
  { icon: FileSpreadsheet, label: "Excel", angle: -90 },
  { icon: Database, label: "ERP", angle: -30 },
  { icon: BarChart3, label: "BI tools", angle: 30 },
  { icon: FileText, label: "Word", angle: 90 },
  { icon: Presentation, label: "PowerPoint", angle: 150 },
  { icon: Layers, label: "Templates", angle: 210 },
];

function polarLayout(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = CENTER + Math.cos(rad) * RADIUS;
  const y = CENTER + Math.sin(rad) * RADIUS;
  const xPct = 50 + (Math.cos(rad) * RADIUS * 100) / 440;
  const yPct = 50 + (Math.sin(rad) * RADIUS * 100) / 440;
  const xStr = x.toFixed(2);
  const yStr = y.toFixed(2);
  return {
    x: xStr,
    y: yStr,
    left: `${xPct.toFixed(4)}%`,
    top: `${yPct.toFixed(4)}%`,
    motionPath: `M ${xStr} ${yStr} L ${CENTER} ${CENTER}`,
  };
}

const sourceLayout = sources.map((s) => ({
  ...s,
  ...polarLayout(s.angle),
}));

/** 2.5D SVG hub: data sources funnel into workflow engine → report output */
export function ReportWorkflowHubIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <svg
        viewBox="0 0 440 440"
        className="h-auto w-full"
        aria-label="Reporting data sources connected through Annual Reports AI workflow"
      >
        <defs>
          <radialGradient id="workflowGlow" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor="oklch(0.82 0.10 290)"
              stopOpacity="0.45"
            />
            <stop
              offset="60%"
              stopColor="oklch(0.82 0.10 290)"
              stopOpacity="0.08"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.82 0.10 290)"
              stopOpacity="0"
            />
          </radialGradient>
          <linearGradient id="workflowStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor="oklch(0.82 0.10 290)"
              stopOpacity="0.0"
            />
            <stop
              offset="50%"
              stopColor="oklch(0.82 0.10 290)"
              stopOpacity="0.55"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.82 0.10 290)"
              stopOpacity="0.0"
            />
          </linearGradient>
        </defs>

        <circle cx={CENTER} cy={CENTER} r={130} fill="url(#workflowGlow)" />

        {/* 2.5D output document (bottom-right) */}
        <g transform="translate(300, 300) skewY(-6)">
          <rect
            x="0"
            y="8"
            width="72"
            height="88"
            rx="6"
            fill="oklch(0.45 0.02 70)"
            opacity="0.25"
          />
          <rect
            x="0"
            y="0"
            width="72"
            height="88"
            rx="6"
            fill="white"
            stroke="oklch(0.89 0.012 70)"
            strokeWidth="1.5"
          />
          <rect x="10" y="14" width="52" height="4" rx="2" fill="oklch(0.82 0.10 290)" />
          <rect x="10" y="26" width="44" height="3" rx="1.5" fill="oklch(0.89 0.012 70)" />
          <rect x="10" y="34" width="48" height="3" rx="1.5" fill="oklch(0.89 0.012 70)" />
          <rect x="10" y="42" width="40" height="3" rx="1.5" fill="oklch(0.89 0.012 70)" />
          <rect x="10" y="54" width="52" height="20" rx="4" fill="oklch(0.95 0.02 290)" />
        </g>

        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="oklch(0.89 0.012 70)"
          strokeWidth="1"
          strokeDasharray="3 6"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS - 38}
          fill="none"
          stroke="oklch(0.89 0.012 70)"
          strokeWidth="1"
          strokeDasharray="2 8"
          opacity="0.6"
        />

        {sourceLayout.map((s, i) => (
          <g key={s.label}>
            <line
              x1={CENTER}
              y1={CENTER}
              x2={s.x}
              y2={s.y}
              stroke="url(#workflowStroke)"
              strokeWidth="1.5"
            />
            <circle r="2.5" fill="oklch(0.55 0.18 290)">
              <animateMotion
                dur={`${2.4 + i * 0.35}s`}
                repeatCount="indefinite"
                path={s.motionPath}
              />
            </circle>
          </g>
        ))}
      </svg>

      <div className="absolute inset-0">
        {sourceLayout.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
              style={{ left: s.left, top: s.top }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-border bg-background shadow-sm sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-foreground" strokeWidth={1.75} />
              </div>
              <span className="whitespace-nowrap rounded-full bg-background/85 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground backdrop-blur-sm sm:text-[11px]">
                {s.label}
              </span>
            </div>
          );
        })}

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-1 translate-y-1 rounded-[20px] bg-foreground/20"
              aria-hidden
            />
            <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-[20px] bg-foreground shadow-xl sm:h-24 sm:w-24">
              <Layers
                className="h-9 w-9 text-lavender sm:h-11 sm:w-11"
                strokeWidth={1.8}
              />
              <span className="absolute -bottom-2 right-1 rounded-full bg-lavender px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-foreground">
                AI
              </span>
            </div>
          </div>
          <span className="mt-3 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold text-foreground shadow-sm">
            Reporting workflow
          </span>
        </div>
      </div>
    </div>
  );
}
