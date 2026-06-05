import { F0Button } from "@factorialco/f0-react"
import { Paperclip } from "@factorialco/f0-react/icons/app"

import { useCopilotAction } from "@/copilot"

/**
 * `interviewWelcome` — renders the "Upload supporting docs" affordance
 * directly under One's opening greeting in the guided interview.
 *
 * Flow (see the `expensePolicySetup` skill, Section 1): clicking
 * "Describe your way" on the empty state posts the kickoff message
 * ("Help me create an expense policy for my company"); the skill greets
 * the user, calls THIS action (rendering the button below its greeting),
 * and immediately fires the 5-step `askClarifyingQuestion` panel. So the
 * interview starts right away — no welcome/skip gate — while the user
 * still has the option to hand over an existing policy doc.
 *
 * The button is VISUAL ONLY (uploading isn't wired — it's an affordance
 * that says "you can also give me your doc instead of answering"). If a
 * viewer asks what happens on upload: One would read the document,
 * extract the rules, confirm them, and skip straight to co-creation.
 */
export function useInterviewWelcomeAction(): void {
  useCopilotAction({
    name: "interviewWelcome",
    description:
      "Renders the 'Upload supporting docs' affordance shown directly under One's greeting at the start of the guided Expenses interview. Call this once, in the kickoff turn, right after the greeting line and before askClarifyingQuestion.",
    available: "enabled",
    parameters: [],
    render: () => (
      <div style={{ display: "flex", marginTop: 4 }}>
        <F0Button
          variant="outline"
          size="md"
          label="Attach your expenses policy"
          icon={Paperclip}
          // Visual-only — uploading a policy doc isn't wired in the
          // prototype. It signals the alternative route into setup.
          onClick={() => {}}
        />
      </div>
    ),
  })
}
