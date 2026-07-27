import { useChatAction } from "@/chat"

import { addChatDrafts, type ChatDraftExpense } from "./chatDraftsStore"

/**
 * Mileage expense (no receipt) — the "I drove from A to B" beat.
 *
 * The simulated chat can't geocode, so we use a believable fixed
 * round-trip distance and apply the COMPANY mileage rate, stating
 * the rate explicitly in the reply (never invent it silently). If the
 * user's message contains a "<n> km" figure we honour it; otherwise we
 * use a plausible default for the Barcelona→Girona round trip.
 *
 * Matcher is narrow ("mileage / drove / drive / km / kilomet") and
 * registered BEFORE the generic receipt matcher so "I drove to a
 * client" never falls through to the bulk-create action.
 */
const COMPANY_RATE_PER_KM = 0.26
let mileageSeq = 0

function parseKm(text: string): number | null {
  const m = text.match(/(\d+(?:\.\d+)?)\s*(?:km|kilomet)/i)
  if (!m) return null
  const n = Number(m[1])
  return Number.isFinite(n) && n > 0 ? n : null
}

export function useCreateMileageAction(): void {
  useChatAction({
    name: "createMileage",
    describe: "Create a Mileage expense from a described drive (no receipt).",
    match: (text) => /\b(mileage|drove|driving|kilomet)\b|\bkm\b|\bdrive\b/i.test(text),
    run: (text, ctx) => {
      ctx.think(
        "Working out the distance…",
        "Applying the company mileage rate…"
      )
      // Barcelona ⇄ Girona is ~100 km each way → ~200 km round trip.
      const km = parseKm(text) ?? 200
      const amount = Math.round(km * COMPANY_RATE_PER_KM * 100) / 100
      const today = new Date().toISOString().slice(0, 10)
      const draft: ChatDraftExpense = {
        id: `chat-draft-mileage-${mileageSeq++}`,
        provider: "Mileage claim",
        vendor: "Mileage claim",
        status: "draft",
        date: today,
        amount,
        category: "Mileage",
        alerts: [],
        description: `Drive (${km} km) · personal vehicle`,
      }
      addChatDrafts([draft])
      ctx.reply(
        `Done ✨ I logged a **Mileage** expense for **${km} km**.\n\n` +
          `At the company rate of **€${COMPANY_RATE_PER_KM.toFixed(2)}/km**, that's ` +
          `**€${amount.toFixed(2)}** — no receipt needed. It's in **Submit ▸ To-Do**.\n\n` +
          `Say **“send them all for approval”** when you're ready.`
      )
    },
  })
}
