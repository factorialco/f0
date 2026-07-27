import { useChatAction } from "@/chat"

import { addChatDrafts, type ChatDraftExpense } from "./chatDraftsStore"

/**
 * Per diem expense (no receipt) — the "daily travel allowance" beat.
 *
 * Per diem is a fixed daily allowance, so there's no receipt to read.
 * We use the company daily rate (stated explicitly in the reply) and
 * count the days from the message when we can ("Mon–Wed" → 3 days),
 * defaulting to 3 otherwise.
 *
 * Matcher is narrow ("per diem / per-diem / dieta") and registered
 * before the generic receipt matcher.
 */
const PER_DIEM_DAILY_RATE = 60
let perDiemSeq = 0

const DAY_NAMES = [
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
  "sun",
] as const

/** Count inclusive days for a "Mon–Wed" style range, else null. */
function parseDayRange(text: string): number | null {
  const lc = text.toLowerCase()
  const found = DAY_NAMES.map((d, i) => ({ d, i })).filter((x) =>
    lc.includes(x.d)
  )
  if (found.length >= 2) {
    const first = found[0]!.i
    const last = found[found.length - 1]!.i
    const span = last - first + 1
    if (span >= 1 && span <= 7) return span
  }
  const explicit = lc.match(/(\d+)\s*days?/)
  if (explicit) {
    const n = Number(explicit[1])
    if (Number.isFinite(n) && n > 0 && n <= 30) return n
  }
  return null
}

export function useCreatePerDiemAction(): void {
  useChatAction({
    name: "createPerDiem",
    describe: "Create a Per diem expense (fixed daily travel allowance).",
    match: (text) => /per[- ]?diem|dieta/i.test(text),
    run: (text, ctx) => {
      ctx.think("Counting the travel days…", "Applying the daily allowance…")
      const days = parseDayRange(text) ?? 3
      const amount = Math.round(days * PER_DIEM_DAILY_RATE * 100) / 100
      const today = new Date().toISOString().slice(0, 10)
      const draft: ChatDraftExpense = {
        id: `chat-draft-perdiem-${perDiemSeq++}`,
        provider: "Per diem allowance",
        vendor: "Per diem allowance",
        status: "draft",
        date: today,
        amount,
        category: "Per diem",
        alerts: [],
        description: `Per diem · ${days} day${days === 1 ? "" : "s"}`,
      }
      addChatDrafts([draft])
      ctx.reply(
        `Done ✨ I created a **Per diem** expense for **${days} day${days === 1 ? "" : "s"}**.\n\n` +
          `At the company allowance of **€${PER_DIEM_DAILY_RATE}/day**, that's ` +
          `**€${amount.toFixed(2)}** — no receipt needed. It's in **Submit ▸ To-Do**.\n\n` +
          `Say **“send them all for approval”** when you're ready.`
      )
    },
  })
}
