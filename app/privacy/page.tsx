import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Annual Reports AI collects, uses, and protects data submitted through our website and early access program.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 1, 2026
      </p>
      <p>
        Annual Reports AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
        is building an AI reporting workflow platform for corporate reporting
        teams. This Privacy Policy explains how we collect, use, disclose, and
        safeguard information when you use our website and early access program.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Information we collect
      </h2>
      <p>
        We collect information you provide directly (contact details, founding
        batch assessment responses, and optional notes) and standard usage data
        such as IP address, browser type, and pages visited. When the platform
        launches, we may also process reporting data you connect — with your
        authorization.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        How we use information
      </h2>
      <p>
        We use collected information to operate our website, validate market
        fit, communicate about early access and product updates, improve our
        workflow design, prevent fraud, and comply with legal obligations.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Data sharing
      </h2>
      <p>
        We do not sell your data. We may share information with service
        providers who assist in hosting, analytics, and communications, subject
        to contractual confidentiality obligations. We may disclose information
        when required by law or to protect rights and safety.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">Security</h2>
      <p>
        We are designing for encrypted-in-transit and encrypted-at-rest storage,
        role-based access, and audit logging. Production security details will
        be shared with founding teams before onboarding.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Your rights
      </h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct,
        or delete personal information we hold about you. Contact us at
        growth@sashflow.com to submit a request.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">Contact</h2>
      <p>Questions about this policy? Email growth@sashflow.com.</p>
    </LegalPage>
  );
}
