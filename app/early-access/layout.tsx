import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Lets solve your problems",
  description:
    "Help shape Annual Reports AI — the AI reporting workflow platform for annual, quarterly, and ESG reports. A five-minute market validation assessment.",
  path: "/early-access",
  noIndex: true,
});

export default function EarlyAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
