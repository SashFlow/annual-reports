import { track } from "@vercel/analytics";

export const EARLY_ACCESS_STEPS = [
  { id: "reports", name: "Your reports" },
  { id: "challenge", name: "Your biggest blocker" },
  { id: "budget", name: "Budget" },
  { id: "contact", name: "Early access" },
] as const;

export type EarlyAccessStepId = (typeof EARLY_ACCESS_STEPS)[number]["id"];

function stepProps(stepIndex: number) {
  const meta = EARLY_ACCESS_STEPS[stepIndex];
  return {
    step: stepIndex + 1,
    step_id: meta.id,
    step_name: meta.name,
    total_steps: EARLY_ACCESS_STEPS.length,
  };
}

export function trackEarlyAccessStepViewed(stepIndex: number) {
  track("early_access_step_viewed", stepProps(stepIndex));
}

export function trackEarlyAccessStepCompleted(
  stepIndex: number,
  data?: Record<string, string | number | boolean | null>,
) {
  track("early_access_step_completed", {
    ...stepProps(stepIndex),
    ...data,
  });
}

export function trackEarlyAccessSurveySubmitted(data: {
  with_email: boolean;
}) {
  track("early_access_survey_submitted", data);
}
