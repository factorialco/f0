import { F0Button } from "@factorialco/f0-react"
import type { AppendMessage } from "@factorialco/f0-react/dist/ai"
import { ArrowRight } from "@factorialco/f0-react/icons/app"
import { useRef } from "react"

import { useAiChat, useCopilotAction } from "@/copilot"

import type { NavEntryId } from "../nav/navConfig"

/**
 * Confirmation turn posted after the admin clicks the CTA. Lands
 * in the chat right after the navigation flips, so the
 * conversation continues instead of going silent. Kept short —
 * the Approval flows view itself will introduce the next step.
 */
const APPROVAL_FLOWS_CONFIRM_MESSAGE = [
  "Great — let's set up **Approval flows** next.",
  "",
  "Approval flows decide who reviews each expense and in what order. I'll guide you through it on the right.",
].join("\n")

/**
 * `goToApprovalFlows` — renders the "Set up Approval flows" CTA in
 * the chat after the admin finishes editing all three expense
 * forms.
 *
 * Triggered by an assistant message emitted from
 * `FormsSummaryView` when the third Edit Fields modal closes (see
 * `formsChatOpeners.ts` → `FORMS_HANDOFF_MESSAGE` +
 * `GO_TO_APPROVAL_FLOWS_ACTION`). The assistant message includes
 * `toolCalls[0].function.name === "goToApprovalFlows"`, which
 * F0AiChat routes to this action's `render`.
 *
 * Click behavior:
 *   1. Flips `activeNavId` to `"approval-flows"`. The page-level
 *      effect handles scrolling / breadcrumb / view reset.
 *   2. Posts a confirmation assistant message into the chat so
 *      the conversation continues instead of going silent. We
 *      simulate a thinking pause first (300ms `inProgress` true
 *      → append) so the user perceives a real agent reply, not a
 *      teleport.
 */
export function useGoToApprovalFlowsAction(args: {
  setActiveNavId: (next: NavEntryId) => void
}): void {
  const { setActiveNavId } = args

  // Ref-pinned chat handles so the action `render` (which the
  // CopilotKit dispatcher caches by registration identity) always
  // sees the latest functions without re-registering on every
  // render.
  const { appendMessages, setInProgress } = useAiChat()
  const appendMessagesRef = useRef(appendMessages)
  appendMessagesRef.current = appendMessages
  const setInProgressRef = useRef(setInProgress)
  setInProgressRef.current = setInProgress

  // Guard against accidental double-click landing two confirmation
  // turns in the chat. Once the CTA has fired we ignore subsequent
  // clicks for the rest of the session — the button stays mounted
  // because CopilotKit owns its lifecycle, so a stateful disable
  // would require remounting through the action registry.
  const firedRef = useRef(false)

  useCopilotAction({
    name: "goToApprovalFlows",
    description:
      "Renders the 'Set up Approval flows' CTA inline in the chat. Call this in the handoff turn after the admin has marked all three expense forms ready. The button switches the wizard to the Approval flows section.",
    available: "enabled",
    parameters: [],
    render: () => (
      <F0Button
        variant="default"
        size="md"
        label="Set up Approval flows"
        icon={ArrowRight}
        onClick={() => {
          if (firedRef.current) return
          firedRef.current = true

          // Navigate first — the user's eyes are on the canvas, so
          // the section swap should feel immediate. The chat
          // continuation lands a beat later, mimicking a real
          // agent gathering its next thought.
          setActiveNavId("approval-flows")

          // Thinking pause → confirmation turn. 800ms is long
          // enough to feel like "the agent is thinking" without
          // making the user wait. Mirrors `postWithThinking` in
          // FormsSummaryView but kept local so this action stays
          // self-contained.
          setInProgressRef.current(true)
          window.setTimeout(() => {
            const message: AppendMessage = {
              role: "assistant",
              content: APPROVAL_FLOWS_CONFIRM_MESSAGE,
            }
            appendMessagesRef.current([message], { persist: false })
            setInProgressRef.current(false)
          }, 800)
        }}
      />
    ),
  })
}

