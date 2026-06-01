import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: `${siteConfig.name} — AI Reporting Workflow Platform`,
  description: siteConfig.description,
  path: "/",
});

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
