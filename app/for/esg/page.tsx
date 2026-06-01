import {
  AudiencePage,
  createAudienceMetadata,
} from "@/components/marketing/AudiencePage";
import { esgAudience } from "@/lib/content/audiences/esg";

export const metadata = createAudienceMetadata({
  title: esgAudience.title,
  description: esgAudience.description,
  path: esgAudience.path,
});

export default function EsgPage() {
  return (
    <AudiencePage
      title={esgAudience.title}
      description={esgAudience.description}
      path={esgAudience.path}
      h1={esgAudience.h1}
      intro={esgAudience.intro}
      sections={[...esgAudience.sections]}
      faqs={[...esgAudience.faqs]}
    />
  );
}
