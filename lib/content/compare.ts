export const comparisonRows = [
  {
    dimension: "Collaboration",
    traditional: "Email threads, version confusion, slow sign-offs",
    platform:
      "Section owners, comments, and approvals in one workflow",
  },
  {
    dimension: "Cost efficiency",
    traditional: "Writers, designers, translators, and agencies add up",
    platform: "Workflow automation designed to reduce manual handoffs",
  },
  {
    dimension: "Time efficiency",
    traditional: "Weeks of drafting, formatting, and rework",
    platform: "Validation-first cycles targeting days, not weeks",
  },
  {
    dimension: "Data collection",
    traditional: "Manual exports from ERP, Excel, and BI tools",
    platform: "Connected sources with reconciliation built in",
  },
  {
    dimension: "Validation",
    traditional: "Errors found late — often in final review",
    platform: "Rules run before narrative work begins",
  },
  {
    dimension: "Compliance & consistency",
    traditional: "Prone to human error across sections and cycles",
    platform: "Templates and audit trails designed for repeatability",
  },
  {
    dimension: "Deadline management",
    traditional: "Spreadsheet trackers and calendar reminders",
    platform: "Section deadlines with owner accountability",
  },
] as const;

export const comparePage = {
  title: "Traditional reporting vs. workflow-first AI",
  description:
    "See how an AI reporting workflow compares to manual annual report production — collaboration, speed, validation, and compliance.",
  headline: "Spreadsheets don't run a reporting cycle. Workflows do.",
  intro:
    "Traditional reporting stacks writers, designers, and agencies on top of disconnected tools. Annual Reports AI is designed to orchestrate the cycle — from data through review — so teams ship faster with fewer surprises.",
} as const;
