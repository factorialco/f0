import { useChatAction } from "@/chat"

import { getChatDrafts, groupChatDrafts } from "./chatDraftsStore"

/**
 * Group related drafts into a folder — the "3 receipts are one trip"
 * beat. When the user accepts the grouping offer ("yes, group them" /
 * "group the Lisbon ones" / "put them in a folder"), we collect the
 * drafts sharing the same `tripTag` and fold them into a new chat
 * folder (`groupChatDrafts`). The folder row then replaces the three
 * loose rows in the Submit table.
 *
 * Matcher: group / folder / trip / together. Registered after the
 * mileage + per-diem actions (whose matchers are narrower) but before
 * the generic receipt matcher.
 */
export function useGroupExpensesAction(): void {
  useChatAction({
    name: "groupExpenses",
    describe: "Group related chat drafts (e.g. a trip) into a folder.",
    match: (text) => /\b(group|folder|trip|together)\b/i.test(text),
    run: (text, ctx) => {
      ctx.think("Finding the related receipts…", "Creating the folder…")

      const drafts = getChatDrafts()
      // Prefer the explicitly-tagged trip set; if none, fall back to
      // every loose (ungrouped) draft so "group these together" still
      // does something sensible.
      const tagged = drafts.filter(
        (d) => d.tripTag && !d.groupId
      )
      const targetTag =
        tagged[0]?.tripTag ??
        (text.toLowerCase().includes("lisbon") ? "Lisbon trip" : undefined)
      const members = targetTag
        ? drafts.filter((d) => d.tripTag === targetTag && !d.groupId)
        : drafts.filter((d) => !d.groupId)

      if (members.length < 2) {
        ctx.reply(
          "I don't see enough related receipts to group yet. Drop a few more and I'll spot the trip."
        )
        return
      }

      const folderName = targetTag ?? "Grouped expenses"
      const folder = groupChatDrafts(
        members.map((m) => m.id),
        folderName
      )
      if (!folder) {
        ctx.reply("Something went wrong grouping those — try again?")
        return
      }
      const total = members.reduce((s, m) => s + m.amount, 0)
      ctx.reply(
        `Done ✨ I grouped **${members.length} expenses** into a **${folderName}** folder ` +
          `(€${total.toFixed(2)} total). You'll see it as a single row in **Submit ▸ To-Do** — ` +
          `open it any time to see the receipts inside.\n\n` +
          `Say **“send them all for approval”** to submit the whole folder.`
      )
    },
  })
}
