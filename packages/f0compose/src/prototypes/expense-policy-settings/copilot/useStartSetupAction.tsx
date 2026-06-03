import { F0Button } from "@factorialco/f0-react"
import { Check } from "@factorialco/f0-react/icons/app"

import { useAiChat, useCopilotAction } from "@/copilot"

import type { PolicyView } from "../views/viewRouter"

/**
 * `startSetup` — custom frontend action that renders the welcome CTA
 * as a real red F0Button (Factorial primary `variant="default"`),
 * rather than a 1-option `ClarifyingQuestion` panel.
 *
 * Triggered by the opener (`useCoCreationOpenerAction`) which appends
 * an assistant message with `toolCalls[0].function.name === "startSetup"`.
 * F0AiChat routes that toolCall to this action's `render`, which
 * paints the button inline in the chat turn.
 *
 * Click behavior (slice 1, co-creation):
 *  1. `setView` drills the canvas into the Regular form editor.
 *  2. `sendMessage("Start setup")` posts a user message so the agent
 *     has something to respond to. The bubble text mirrors the
 *     button label — "what the user clicked" = "what the bubble
 *     says" — instead of a longer paraphrase. WITHOUT this the
 *     Mastra `expensePolicySetup` skill never runs — agents don't
 *     spontaneously emit, they only respond to user turns. The
 *     skill's system prompt is primed to call `askClarifyingQuestion`
 *     with Q1 on receipt of this message.
 *
 * The action takes no parameters: there is exactly one way forward
 * from the welcome turn, so the CTA's behavior is hard-coded.
 */
export function useStartSetupAction(args: {
  setView: (next: PolicyView) => void
}): void {
  const { setView } = args
  const { sendMessage } = useAiChat()

  useCopilotAction({
    name: "startSetup",
    description:
      "Renders the welcome CTA (red F0Button) that starts the Expense Policy setup wizard by drilling into the Regular expense form and asking the agent to begin the co-creation script. Call this in Turn 0 (the welcome turn) — emit a brief greeting text alongside this tool call.",
    available: "enabled",
    parameters: [],
    render: () => (
      <F0Button
        variant="default"
        size="md"
        label="Start setup"
        icon={Check}
        onClick={() => {
          setView({ kind: "forms-detail", formType: "regular" })
          sendMessage("Start setup")
        }}
      />
    ),
  })
}
