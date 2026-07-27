import { useChatAction } from "@/chat"
import {
  costCenters,
  projects,
  type ExpenseCategory,
} from "@/fixtures"

import { getChatDrafts, updateChatDraft } from "./chatDraftsStore"
import { getOpenForEditId } from "./chatFocusStore"

/**
 * Edit-via-One — mutate the OPEN draft from the detail page.
 *
 * The detail page's Edit pencil posts an "Editing <provider> — what
 * would you like to change?" kickoff and records the open draft id
 * (`setOpenForEditId`). This action then interprets natural-language
 * edits ("change the category to Travel and the amount to 42", "set
 * the vendor to Copperleaf") and patches that draft via
 * `updateChatDraft`, so the detail summary updates live.
 *
 * Only claims a message when a draft is open-for-edit — so generic
 * "change / update" chatter elsewhere doesn't get hijacked. Coded
 * fields (category, cost center, project) are One-only by design; the
 * detail page does NOT offer inline dropdowns for them.
 */

const CATEGORIES: ExpenseCategory[] = [
  "Meals",
  "Taxis",
  "Travel",
  "Shopping",
  "Hotel",
  "Office",
  "Software",
  "Mileage",
  "Per diem",
]

type Patch = {
  amount?: number
  category?: ExpenseCategory
  vendor?: string
  provider?: string
  description?: string
  date?: string
  costCenter?: string
  project?: string
}

/** Pull "to <value>" for a labelled field, e.g. "amount to 42". */
function valueAfter(text: string, label: RegExp): string | null {
  const re = new RegExp(
    `${label.source}\\s+(?:to|=|:|is)\\s+([^,.;]+?)(?:\\s+and\\b|[,.;]|$)`,
    "i"
  )
  const m = text.match(re)
  return m && m[1] ? m[1].trim() : null
}

function parseEdits(text: string): { patch: Patch; labels: string[] } {
  const patch: Patch = {}
  const labels: string[] = []

  const amountRaw = valueAfter(text, /amount|total|price/)
  if (amountRaw) {
    const n = Number(amountRaw.replace(/[€$,]/g, "").trim())
    if (Number.isFinite(n) && n > 0) {
      patch.amount = Math.round(n * 100) / 100
      labels.push(`amount to €${patch.amount.toFixed(2)}`)
    }
  }

  const catRaw = valueAfter(text, /category/)
  if (catRaw) {
    const match = CATEGORIES.find((c) =>
      catRaw.toLowerCase().includes(c.toLowerCase())
    )
    if (match) {
      patch.category = match
      labels.push(`category to ${match}`)
    }
  }

  const vendorRaw =
    valueAfter(text, /vendor|merchant|provider|supplier/) ?? null
  if (vendorRaw) {
    patch.vendor = vendorRaw
    patch.provider = vendorRaw
    labels.push(`vendor to ${vendorRaw}`)
  }

  const descRaw = valueAfter(text, /description|note|memo/)
  if (descRaw) {
    patch.description = descRaw
    labels.push(`description to “${descRaw}”`)
  }

  const ccRaw = valueAfter(text, /cost ?cent(?:er|re)/)
  if (ccRaw) {
    const cc = costCenters.find((c) =>
      ccRaw.toLowerCase().includes(c.name.toLowerCase())
    )
    if (cc) {
      patch.costCenter = cc.id
      labels.push(`cost center to ${cc.name}`)
    }
  }

  const projRaw = valueAfter(text, /project/)
  if (projRaw) {
    const proj = projects.find((p) =>
      projRaw.toLowerCase().includes(p.name.toLowerCase())
    )
    if (proj) {
      patch.project = proj.id
      labels.push(`project to ${proj.name}`)
    }
  }

  return { patch, labels }
}

export function useEditExpenseAction(): void {
  useChatAction({
    name: "editExpense",
    describe: "Edit the open draft via natural language (edit-via-One).",
    // Only when a draft is open for edit on the detail page.
    match: (text) =>
      getOpenForEditId() !== null &&
      /\b(change|edit|update|set|make|rename)\b/i.test(text),
    run: (text, ctx) => {
      const id = getOpenForEditId()
      const draft = id ? getChatDrafts().find((d) => d.id === id) : undefined
      if (!draft) {
        ctx.reply(
          "I'm not sure which expense to edit — open one and click the Edit pencil first."
        )
        return
      }
      const { patch, labels } = parseEdits(text)
      if (labels.length === 0) {
        ctx.reply(
          "Tell me what to change, e.g. “change the category to Travel and the amount to 42”."
        )
        return
      }
      ctx.think("Applying your changes…")
      updateChatDraft(draft.id, patch)
      ctx.reply(
        `Done ✨ I updated **${patch.vendor ?? draft.provider}** — ` +
          `set the ${labels.join(", and the ")}. The summary's refreshed.`
      )
    },
  })
}
