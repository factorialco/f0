import { F0Alert } from "@factorialco/f0-react"
import { useEffect, useRef } from "react"

import { useCopilotAction } from "@/copilot"

import { setChatDraftStatus } from "./chatDraftsStore"

/**
 * Frontend shadow of David's `sendExpenseToReview` backend tool
 * (single-expense variant). Matches the pattern in
 * `useBulkCreateExpensesAction`: `available: "frontend"` keeps the
 * action out of the runtime list but CopilotKit still dispatches our
 * render whenever the agent invokes a tool by this name.
 *
 * The agent invokes this when the user (in chat) confirms that a
 * specific previously-created draft should now be submitted for
 * approval. We flip the draft's status from `draft` to `pending` in
 * the chat-drafts store so it shows up in the manager's Pending
 * Approval tab on the next render.
 *
 * If the agent invents an id we don't know about, `setChatDraftStatus`
 * is a no-op — we render an info alert in that case so the demo
 * doesn't show a misleading "sent" toast for a row that doesn't
 * exist locally.
 */

const seenToolCallIds = new Set<string>()

type SendArgs = {
  expenseId?: string
}

type RenderBodyProps = {
  args: SendArgs
  status: "inProgress" | "executing" | "complete"
}

function RenderBody({ args, status }: RenderBodyProps) {
  const hasMounted = useRef(false)
  useEffect(() => {
    if (status !== "complete") return
    if (hasMounted.current) return
    const id = args.expenseId
    if (!id) return
    if (seenToolCallIds.has(id)) {
      hasMounted.current = true
      return
    }
    seenToolCallIds.add(id)
    hasMounted.current = true
    setChatDraftStatus(id, "pending")
  }, [status, args.expenseId])

  if (status !== "complete") {
    return (
      <F0Alert
        variant="info"
        title="Sending for approval…"
        description="Promoting the draft to Pending Approval."
      />
    )
  }
  return (
    <F0Alert
      variant="positive"
      title="Sent for approval"
      description="The expense is now visible to the approver in Pending Approval."
    />
  )
}

export function useSendExpenseToReviewAction(): void {
  useCopilotAction({
    name: "sendExpenseToReview",
    description:
      "Submit a previously-created draft expense for approval. Only call this once the user has confirmed.",
    available: "frontend",
    parameters: [
      {
        name: "expenseId",
        type: "string",
        description: "Id of the draft expense to submit for approval.",
        required: true,
      },
    ],
    render: ({ args, status }) => (
      <RenderBody args={args as SendArgs} status={status} />
    ),
  })
}
