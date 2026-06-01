import {
  AudiencePage,
  createAudienceMetadata,
} from "@/components/marketing/AudiencePage";
import { investorRelationsAudience } from "@/lib/content/audiences/investor-relations";

export const metadata = createAudienceMetadata({
  title: investorRelationsAudience.title,
  description: investorRelationsAudience.description,
  path: investorRelationsAudience.path,
});

export default function InvestorRelationsPage() {
  return (
    <AudiencePage
      title={investorRelationsAudience.title}
      description={investorRelationsAudience.description}
      path={investorRelationsAudience.path}
      h1={investorRelationsAudience.h1}
      intro={investorRelationsAudience.intro}
      sections={[...investorRelationsAudience.sections]}
      faqs={[...investorRelationsAudience.faqs]}
    />
  );
}
