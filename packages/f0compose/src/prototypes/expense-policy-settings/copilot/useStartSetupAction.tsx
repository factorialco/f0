import { F0Button } from "@factorialco/f0-react"
import { Check } from "@factorialco/f0-react/icons/app"

import { useCopilotAction } from "@/copilot"

import type { PolicyView } from "../views/viewRouter"

/**
 * `startSetup` — custom frontend action that renders the welcome CTA
 * as a real red F0Button (Factorial primary `variant="default"`),
 * rather than a 1-option `ClarifyingQuestion` panel.
 *
 * Triggered by the opener (`useCoCreationOpenerAction`) which appends
 * an assistant message with `toolCalls[0].function.name === "startSetup"`.
 * F0AiChat routes that toolCall to this action's `render`, which
 * paints the button inline in the chat turn (same Option B pattern
 * used by `certifiedDocsConvo`).
 *
 * Clicking the button drills the user into the Regular expense form
 * detail view (`?view=forms-detail&type=regular`) — the first
 * sub-step of the sequential wizard. The agent owns subsequent
 * `completeSubStep` calls; this action only kicks off the flow.
 *
 * The action takes no parameters: there is exactly one way forward
 * from the welcome turn, so the CTA's behavior is hard-coded.
 */
export function useStartSetupAction(args: {
  setView: (next: PolicyView) => void
}): void {
  const { setView } = args

  useCopilotAction({
    name: "startSetup",
    description:
      "Renders the welcome CTA (red F0Button) that starts the Expense Policy setup wizard by drilling into the Regular expense form.",
    available: "frontend",
    parameters: [],
    render: () => (
      <F0Button
        variant="default"
        size="md"
        label="Start setup"
        icon={Check}
        onClick={() => setView({ kind: "forms-detail", formType: "regular" })}
      />
    ),
  })
}
