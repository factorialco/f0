import { useChatAction } from "@/chat"

import {
  getChatDrafts,
  getChatFolders,
  setChatDraftStatus,
  setChatFolderStatus,
} from "./chatDraftsStore"

/**
 * Composer (simulated-chat) port of the f0compose `sendExpenseToReview`
 * CopilotKit action.
 *
 * In f0compose the agent passed the specific `expenseId` to promote.
 * The simulated chat has no structured args, so when the user confirms
 * "send it for approval" we promote every chat-created draft that's
 * still in `draft` status to `pending` (they then surface in the
 * approver's Pending Approval / Approve tab). Deterministic and local.
 */
export function useSendExpenseToReviewAction(): void {
  useChatAction({
    name: "sendExpenseForApproval",
    describe:
      "Submit the chat-created draft expense(s) for approval once the user confirms.",
    match: (text) =>
      /(send.*(approval|review)|submit.*(approval|review)|send it|approve it|for approval)/i.test(
        text
      ),
    run: (_text, ctx) => {
      const pending = getChatDrafts().filter((d) => d.status === "draft")
      if (pending.length === 0) {
        ctx.reply(
          "There's no draft to send yet. Drop a receipt and ask me to **create an expense** first."
        )
        return
      }
      ctx.think("Checking required fields…", "Submitting for approval…")
      for (const d of pending) setChatDraftStatus(d.id, "pending")
      // Promote any chat folders too so the grouped folder row moves
      // from To-Do to Submitted alongside its members.
      const pendingFolders = getChatFolders().filter(
        (f) => f.status === "draft"
      )
      for (const f of pendingFolders) setChatFolderStatus(f.id, "pending")
      ctx.reply(
        `Sent ${pending.length} expense${pending.length === 1 ? "" : "s"} for approval ✅ ` +
          `${pending.length === 1 ? "It's" : "They're"} now in **Submitted** ` +
          `and in the approver's **Pending approval** queue.`
      )
    },
  })
}
