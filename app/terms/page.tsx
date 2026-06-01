import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms governing use of Annual Reports AI's website and early access program for corporate reporting teams.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        <strong>Last updated:</strong> June 1, 2026
      </p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use
        of Annual Reports AI&apos;s website and early access program. By using
        our services, you agree to these Terms.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Eligibility
      </h2>
      <p>
        Our services are intended for finance, sustainability, investor
        relations, and other professionals involved in corporate reporting. You
        must comply with applicable securities, disclosure, and data-protection
        laws in your jurisdiction.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        The service
      </h2>
      <p>
        Annual Reports AI is developing an AI-assisted reporting workflow
        platform. Materials on this site describe planned capabilities — the
        platform may change during early access. You remain responsible for the
        accuracy and compliance of published reports.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Early access
      </h2>
      <p>
        Founding-team participation is subject to selection. We may modify or
        discontinue early access features at any time. Assessment responses help
        us prioritize onboarding but do not guarantee access.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Acceptable use
      </h2>
      <p>
        You may not use our website for unlawful purposes, to submit false
        information, or to attempt unauthorized access to our systems. We may
        suspend access for violations of these Terms.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Limitation of liability
      </h2>
      <p>
        To the maximum extent permitted by law, Annual Reports AI is not liable
        for indirect, incidental, or consequential damages arising from use of
        the website or early access program while the product is in development.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">Contact</h2>
      <p>Questions about these Terms? Email sai@sashflow.com.</p>
    </LegalPage>
  );
}
