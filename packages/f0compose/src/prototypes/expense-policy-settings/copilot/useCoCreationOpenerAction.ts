import { useEffect, useRef } from "react"

import { useAiChat } from "@/copilot"

/**
 * Fire-once co-creation opener for the Expense Policy settings page.
 *
 * Sequential model (handoff §2.1 / §2.4): the user lands on Expense
 * forms — they don't pick a branch. The opener is a welcome message
 * followed by a single red F0Button CTA ("Start setup") that, when
 * clicked, drills the admin into the Regular expense form and starts
 * the wizard.
 *
 * Implementation (handoff §2.4 Option B): the CTA is painted by a
 * custom frontend action `startSetup` (see `useStartSetupAction`).
 * We trigger it by appending an assistant message whose
 * `toolCalls[0].function.name === "startSetup"` — F0AiChat then
 * routes the toolCall to the action's `render`, which paints the
 * real F0Button inline in the chat turn. This avoids the
 * 1-option-ClarifyingQuestion compromise (which rendered as a single
 * radio row) and matches Factorial's primary CTA style (red
 * `variant="default"`, same as "Publish changes").
 *
 * Ordering trap (legacyExpansion @
 * `packages/react/src/sds/ai/F0AiChat/utils/expand-message-parts.ts:53`):
 * when an assistant message carries BOTH `content` and `toolCalls`,
 * F0AiChat's `legacyExpansion` splits it into sub-messages and
 * renders **tool calls first, then content** — which puts the button
 * above the welcome text. To force the canonical "text → button"
 * order we send TWO separate assistant messages: first content-only,
 * then toolCall-only. Each becomes its own bubble in append order.
 *
 * Mount-order trap (handoff §4.1): `useAiChat().appendMessages` is a
 * wrapper around an internal ref that is only populated AFTER
 * `F0AiChat`'s `CopilotFunctionBridge` runs its own `useEffect`. We
 * delay the call by 300ms so the ref has time to be set; otherwise
 * the message is silently dropped (`AiChatStateProvider.tsx:298-303`).
 * If the dev server feels slow, bump the delay.
 *
 * `firedRef` guards React StrictMode's double-invocation and any
 * re-renders that retrigger the effect.
 */
export function useCoCreationOpenerAction(): void {
  const { appendMessages, setOpen } = useAiChat()
  const firedRef = useRef(false)

  useEffect(() => {
    if (firedRef.current) return

    const fire = () => {
      if (firedRef.current) return
      firedRef.current = true

      setOpen(true)
      appendMessages(
        [
          {
            role: "assistant",
            content:
              "Welcome! I'll help you set up your expense policy step by step. We start with **Expense forms** — the fields employees fill in when they submit an expense. There are three form types to configure: Regular, Per diem, and Mileage. Ready to start with Regular?",
          },
          {
            role: "assistant",
            content: "",
            toolCalls: [
              {
                id: `start-setup-${Date.now()}`,
                function: {
                  name: "startSetup",
                  arguments: "{}",
                },
              },
            ],
          },
        ],
        { persist: false }
      )
    }

    const t = window.setTimeout(fire, 300)
    return () => window.clearTimeout(t)
  }, [appendMessages, setOpen])
}
