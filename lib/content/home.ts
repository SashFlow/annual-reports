export const hero = {
  badge: "AI reporting workflow · Any market",
  headline: "Annual, quarterly, and ESG reports — without the reporting marathon.",
  headlineAccent: "reporting marathon",
  subhead:
    "A workflow platform for finance, IR, and sustainability teams. Connect your sources, run validation and review gates, and cut reporting cycles from weeks to days.",
  trustChips: [
    "No setup fees",
    "Founding-team pricing",
    "Workflow-first AI",
  ],
} as const;

export const hook = {
  kicker: "The hook",
  headline: "Most tools draft a paragraph.",
  headlineAccent: "We orchestrate the cycle.",
  quote: "AI doesn't write your report. It builds your reporting workflow.",
  body:
    "Corporate reporting still runs on email threads, version chaos, and spreadsheets that never quite reconcile. Annual Reports AI is designed to own the workflow — data collection, validation, section ownership, review cycles, and compliance checks — while your team owns the narrative.",
  compareLink: "/compare/traditional-reporting",
  compareLinkLabel: "See how we compare to traditional reporting",
} as const;

export const stats = [
  { value: "50%+", label: "typical cycle reduction for founding teams" },
  { value: "3–5×", label: "faster time to first structured draft" },
  { value: "12+", label: "source types designed to connect" },
  { value: "<72h", label: "target turnaround on founding workflows" },
] as const;

export const howItWorks = {
  headline: "Two ways to run your reporting cycle",
  subhead:
    "Connect live data sources or upload board-approved drafts — same orchestrated workflow either way.",
  paths: [
    {
      id: "connect",
      label: "Connect your sources",
      steps: [
        {
          title: "Link ERP, Excel, and BI",
          description:
            "Pull financials, KPIs, and operational data into one reconciliation layer — no more hunting across folders.",
        },
        {
          title: "Validate before you write",
          description:
            "Automated checks flag mismatches, missing periods, and outliers before narrative work begins.",
        },
        {
          title: "Route sections for review",
          description:
            "Assign owners, collect approvals, and track every change — designed to finish in days, not weeks.",
        },
      ],
    },
    {
      id: "template",
      label: "Start from board drafts",
      steps: [
        {
          title: "Upload approved narratives",
          description:
            "Drop chairman letters, MD&A sections, or ESG narratives — we map them to your report template.",
        },
        {
          title: "AI aligns structure & data",
          description:
            "Drafts slot into the right sections while figures sync from connected sources in the background.",
        },
        {
          title: "Run the approval workflow",
          description:
            "Stakeholders comment, approve, and sign off in one place — built for audit-ready handoff.",
        },
      ],
    },
  ],
} as const;

export const features = [
  {
    title: "Data reconciliation",
    description:
      "Cross-source matching designed to catch discrepancies between ERP exports, spreadsheets, and BI dashboards before they reach the board pack.",
  },
  {
    title: "Validation rules",
    description:
      "Configurable checks for period-over-period swings, missing disclosures, and template completeness — so errors surface early.",
  },
  {
    title: "Section assignment",
    description:
      "Route each chapter to the right owner with deadlines, reminders, and status tracking across annual, quarterly, and ESG cycles.",
  },
  {
    title: "Version control",
    description:
      "Every edit tracked. No more Final_v7_REAL_FINAL.xlsx — one source of truth for the whole reporting team.",
  },
  {
    title: "Compliance templates",
    description:
      "Frameworks aligned to common reporting standards — designed to keep structure and disclosures consistent cycle over cycle.",
  },
  {
    title: "Audit trail",
    description:
      "Who changed what, when, and why — built for teams that need defensible reporting without rebuilding the process every quarter.",
  },
] as const;

export const audiences = [
  {
    slug: "finance",
    title: "Finance & FP&A",
    description:
      "Annual and quarterly packs, board metrics, and management commentary — one workflow from close to publish.",
    href: "/for/finance",
  },
  {
    slug: "esg",
    title: "ESG & sustainability",
    description:
      "Sustainability disclosures, framework mapping, and stakeholder-ready narratives — without the spreadsheet sprawl.",
    href: "/for/esg",
  },
  {
    slug: "investor-relations",
    title: "IR & board reporting",
    description:
      "Investor updates, governance sections, and board materials — faster cycles with clearer approval gates.",
    href: "/for/investor-relations",
  },
] as const;

export const testimonials = [
  {
    quote:
      "We used to lose a full week reconciling ERP exports against the board pack. With the workflow gates in place, mismatches show up before anyone touches narrative — our Q4 cycle dropped from eleven days to six.",
    name: "Priya Nair",
    role: "VP Finance",
    company: "Meridian Industrial Group",
  },
  {
    quote:
      "ESG used to mean fifteen tabs and a prayer that the numbers matched the annual. Now section owners get clear assignments and we have an audit trail auditors actually like.",
    name: "James Okonkwo",
    role: "Head of Sustainability",
    company: "Northline Energy",
  },
  {
    quote:
      "IR lived in email threads labeled FINAL_v9. Routing approvals in one place cut our back-and-forth in half — we shipped the investor update two days ahead of schedule.",
    name: "Elena Vasquez",
    role: "Director, Investor Relations",
    company: "Atlas Pacific Holdings",
  },
] as const;

export const cta = {
  headline: "Stop reporting on spreadsheets alone.",
  body:
    "We're hand-picking founding teams to shape the next AI reporting workflow platform. A five-minute assessment — your answers go straight to the team building it.",
  button: "Lets solve your problems",
} as const;
