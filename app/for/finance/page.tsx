import {
  AudiencePage,
  createAudienceMetadata,
} from "@/components/marketing/AudiencePage";
import { financeAudience } from "@/lib/content/audiences/finance";

export const metadata = createAudienceMetadata({
  title: financeAudience.title,
  description: financeAudience.description,
  path: financeAudience.path,
});

export default function FinancePage() {
  return (
    <AudiencePage
      title={financeAudience.title}
      description={financeAudience.description}
      path={financeAudience.path}
      h1={financeAudience.h1}
      intro={financeAudience.intro}
      sections={[...financeAudience.sections]}
      faqs={[...financeAudience.faqs]}
    />
  );
}
