import Link from "next/link";
import { AnnualReportsAILogo } from "@/components/logo";

const audienceLinks = [
  { href: "/for/finance", label: "Finance & FP&A" },
  { href: "/for/esg", label: "ESG" },
  { href: "/for/investor-relations", label: "IR & Board" },
];

export function SiteFooter() {
  return (
    <footer className="px-6 py-8 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <AnnualReportsAILogo size="sm" variant="light" />
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            {audienceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/compare/traditional-reporting"
              className="hover:text-foreground transition-colors"
            >
              Compare
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link
              href="/early-access"
              className="hover:text-foreground transition-colors"
            >
              Early access
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} Annual Reports AI. Built for reporting
          teams globally. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
