export const siteConfig = {
  name: "Report Deck",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Annual Reports AI is an AI reporting workflow platform for annual, quarterly, monthly, and ESG reports. Connect sources, validate data, and cut reporting cycles — built for finance and sustainability teams globally.",
  tagline: "AI doesn't write your report. It builds your reporting workflow.",
  locale: "en_US",
  author: "Report Deck",
  keywords: [
    "AI reporting workflow",
    "ESG report automation",
    "quarterly report workflow",
    "monthly reporting software",
    "AI reporting workflow",
    "corporate reporting software",
    "sustainability report automation",
    "board report workflow",
    "investor report automation",
    "financial reporting AI",
  ],
} as const;

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
