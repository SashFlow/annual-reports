export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "What types of reports does Annual Reports AI support?",
    a: "We're building for annual reports, quarterly updates, monthly packs, ESG and sustainability disclosures, board materials, and investor communications. Founding teams help us prioritize which templates ship first.",
  },
  {
    q: "How is this different from using ChatGPT to write a report?",
    a: "ChatGPT drafts text. Annual Reports AI is designed to orchestrate the full cycle — data ingestion, validation, section ownership, review gates, and compliance checks. Your team owns the narrative; the platform owns the workflow.",
  },
  {
    q: "Is the product available today?",
    a: "We're in founding-team early access. Join the assessment to help validate the market and get priority when onboarding opens.",
  },
  {
    q: "How fast can reporting cycles run?",
    a: "Founding teams in our early program report 50%+ cycle reductions and first structured drafts in a fraction of the usual time. Exact turnaround depends on report type, data readiness, and review complexity.",
  },
  {
    q: "Is our data secure?",
    a: "We're designing for encrypted-in-transit and encrypted-at-rest storage, role-based access, and audit logging. Security details for production will be shared with founding teams before onboarding.",
  },
  {
    q: "Who is this built for?",
    a: "Finance and FP&A teams, ESG and sustainability leads, and IR professionals at companies of any size that produce recurring corporate reports — globally, not locked to one market.",
  },
  {
    q: "How does pricing work?",
    a: "Founding-team pricing is being shaped with early participants. There are no setup fees for teams joining the assessment program.",
  },
  {
    q: "Can we bring our own templates and board-approved copy?",
    a: "Yes — the workflow is designed to accept uploaded narratives and map them to your structure, while figures sync from connected sources.",
  },
];
