import { useChatAction } from "@/chat"

/**
 * "Submit with One" invitation — fired by the New-expense dropdown item
 * and the awareness banner CTA (both send `SUBMIT_WITH_ONE_PROMPT`).
 *
 * It does NOT fabricate a draft from the click. It just invites the
 * user to drop their receipts and waits — the honest behaviour (a real
 * draft only appears once the user actually drops/asks, via
 * `createExpenseFromReceipt`). The matcher is narrow ("…with one") so
 * it never intercepts the real "create an expense from this receipt"
 * phrasing that should fabricate.
 */
export function useSubmitWithOneAction(): void {
  useChatAction({
    name: "submitWithOne",
    describe:
      "Invite the user to drop receipts so One can draft expenses from them.",
    match: (text) => /submit\b.*\bwith one\b/i.test(text),
    run: (_text, ctx) => {
      ctx.reply(
        "Sure — drop your receipts here and I'll draft an expense from each. " +
          "Got a pile from the same trip? I'll group them together for you too."
      )
    },
  })
}
