import { useChatAction } from "@/chat"

/**
 * In-context "Add with One" action for the expense-detail nudge.
 *
 * Distinct from the generic `createExpenseFromReceipt` (start-fresh,
 * which fabricates a sample draft): from INSIDE an expense the intent
 * is to upload the OTHER receipts that belong WITH the one you're
 * viewing, and maybe group them. So this does NOT fabricate an
 * unrelated draft or claim a group already exists — it invites the
 * drop and offers to create the group.
 *
 * Must be registered BEFORE `useBulkCreateExpensesAction` (see
 * ControllingStepPoc): the chat runtime matches the FIRST registered
 * action whose matcher passes, and the generic receipt matcher would
 * otherwise greedily catch the word "receipts". This matcher is narrow
 * (the "go with this / group together" intent) so it never steals the
 * dropdown's start-fresh prompt.
 */
export function useAddRelatedReceiptsAction(): void {
  useChatAction({
    name: "addRelatedReceipts",
    describe:
      "Add more receipts that belong with the expense the user is viewing, and optionally group them together.",
    match: (text) =>
      /go with this|with this expense|related receipt|group (them|these|it)|to this (group|trip)/i.test(
        text
      ),
    run: (_text, ctx) => {
      ctx.reply(
        "Sure — drop the other receipts that go with this expense and I'll draft each one. " +
          "Want me to group them together with this one so they stay linked? Just say the word and I'll create the group."
      )
    },
  })
}
