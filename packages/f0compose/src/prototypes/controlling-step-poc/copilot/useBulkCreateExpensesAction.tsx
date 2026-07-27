import { useChatAction } from "@/chat"

import { addChatDrafts, getChatDrafts } from "./chatDraftsStore"
import {
  buildClosedCircuitDrafts,
  lisbonTripDraftIds,
} from "./closedCircuitReceipts"
import { setAwaitingFix } from "./chatFocusStore"

/**
 * Composer (simulated-chat) port of the f0compose `bulkCreateExpenses`
 * CopilotKit action — extended for the closed-circuit roast demo.
 *
 * In f0compose this was a real frontend tool the Mastra agent invoked
 * after reading a dropped receipt (real OCR/vision). Composer's
 * "Factorial One" is simulated (keyword-matched, no LLM), so instead
 * of parsing a real receipt we drop the curated closed-circuit set
 * (see `closedCircuitReceipts.ts`) into the shared `chatDraftsStore`
 * so it appears in the Submit table immediately, then summarize and
 * tee up the two hero beats:
 *   - the €80 over-limit dinner ("I flagged one over the limit…")
 *   - the missing-description draft ("one's missing a description…")
 *   - the grouping offer ("3 look like one trip — group them?")
 *
 * Idempotent: if the closed-circuit drafts are already present (the
 * user clicked Drop receipts twice) we don't duplicate them.
 */
const EUR = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
})

export function useBulkCreateExpensesAction(): void {
  useChatAction({
    name: "createExpensesFromReceipts",
    describe:
      "Create the closed-circuit set of draft expenses from a dropped pile of receipts.",
    match: (text) =>
      /(receipt|create .*expense|expenses from|new expense|scan|drop)/i.test(
        text
      ),
    run: (_text, ctx) => {
      ctx.think(
        "Reading the receipts…",
        "Extracting merchant, amount and date…",
        "Categorising each expense…",
        "Checking each against policy…"
      )

      // Idempotent: only create the closed-circuit set once.
      const already = getChatDrafts().some((d) =>
        d.id.startsWith("chat-draft-cc-")
      )
      const drafts = already
        ? getChatDrafts().filter((d) => d.id.startsWith("chat-draft-cc-"))
        : buildClosedCircuitDrafts()
      if (!already) addChatDrafts(drafts)

      const total = drafts.reduce((s, d) => s + d.amount, 0)
      const overLimit = drafts.find((d) => d.alerts.includes("meal-over-limit"))
      const missingDesc = drafts.find((d) => !d.description)
      const tripIds = lisbonTripDraftIds(drafts)

      // Arm the first follow-up so the user's next free-text answer
      // routes to the fix flow deterministically: the over-limit meal
      // question comes first; if there's no over-limit draft, the
      // missing-description question is the live one.
      if (overLimit) {
        setAwaitingFix({ draftId: overLimit.id, field: "participants" })
      } else if (missingDesc) {
        setAwaitingFix({ draftId: missingDesc.id, field: "description" })
      }

      // Keep the reply SHORT. The runtime streams it character-by-character,
      // so a long itemised list reads slowly and holds the composer in its
      // "generating" state for many seconds (blocking the next command).
      // Lead with the single live follow-up; the rest surfaces as the user
      // works through the drafts (the alert tags are already on the rows).
      const followUp = overLimit
        ? `\n\n⚠️ **${overLimit.provider}** looks over the meal limit — was it a shared meal? Tell me who was there.`
        : missingDesc
          ? `\n\n⚠️ **${missingDesc.provider}** is missing a description — what was it for?`
          : ""
      const trip =
        tripIds.length >= 2
          ? `\n\n${tripIds.length} look like one trip — say *“group the Lisbon ones”* anytime.`
          : ""
      ctx.reply(
        `Done ✨ Drafted **${drafts.length} expenses** from your receipts ` +
          `(${EUR.format(total)}) — they're in **Submit ▸ To-Do**.` +
          followUp +
          trip
      )
    },
  })
}
