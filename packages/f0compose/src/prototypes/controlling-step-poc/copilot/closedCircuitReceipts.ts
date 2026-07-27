import type { ChatDraftExpense } from "./chatDraftsStore"
import { buildReceiptDataUrl } from "../shared/detail/receiptSvg"
import type { SpendingRow } from "../shared/rows"
import { markFieldsMissing } from "@/prototypes/_shared/requiredFields"

/**
 * The closed-circuit "drop ~10 receipts" set for the roast demo.
 *
 * Each seed is a believable extracted-receipt result One produces
 * from a dropped pile. The set is hand-curated so the hero beats land
 * deterministically:
 *
 *   - €80 team dinner over the per-person limit (`meal-over-limit`,
 *     no participants yet) → the fix/out-of-policy beat.
 *   - one draft with NO description (required-fields gate) → the
 *     "what was this for?" beat.
 *   - three drafts tagged `Lisbon trip` → the grouping beat.
 *
 * Receipt thumbnails reuse the detail page's `buildReceiptDataUrl`
 * (the same thermal-printer SVG the fixture rows use) so every
 * One-created row opens with a real-looking receipt. We stamp the
 * data URL onto each draft at creation time via a minimal row shape.
 */

type Seed = Omit<ChatDraftExpense, "id" | "status" | "receiptDataUrl">

const SEEDS: Seed[] = [
  // 1. Lisbon trip — hotel (grouping member).
  {
    provider: "Fernlight Suites",
    vendor: "Fernlight Suites",
    date: "2026-06-23",
    amount: 214.0,
    category: "Hotel",
    alerts: [],
    description: "Two nights, Lisbon client visit",
    tripTag: "Lisbon trip",
    receiptFilename: "fernlight-suites.pdf",
  },
  // 2. Lisbon trip — flight (grouping member).
  {
    provider: "Skyfern Airways",
    vendor: "Skyfern Airways",
    date: "2026-06-22",
    amount: 168.5,
    category: "Travel",
    alerts: [],
    description: "Return flight BCN–LIS",
    tripTag: "Lisbon trip",
    receiptFilename: "skyfern-boarding.pdf",
  },
  // 3. Lisbon trip — airport taxi (grouping member).
  {
    provider: "Citystream Transit",
    vendor: "Citystream Transit",
    date: "2026-06-22",
    amount: 24.9,
    category: "Taxis",
    alerts: [],
    description: "Airport transfer to hotel",
    tripTag: "Lisbon trip",
    receiptFilename: "citystream-taxi.jpg",
  },
  // 4. HERO — €80 team dinner over the per-person limit, NO
  //    participants yet → the fix/out-of-policy beat.
  {
    provider: "Copperleaf Kitchen",
    vendor: "Copperleaf Kitchen",
    date: "2026-06-25",
    amount: 80.0,
    category: "Meals",
    alerts: ["meal-over-limit"],
    description: "Team dinner",
    receiptFilename: "copperleaf-dinner.jpg",
  },
  // 5. Missing-description draft → the required-fields gate beat.
  {
    provider: "Northway Stores",
    vendor: "Northway Stores",
    date: "2026-06-24",
    amount: 36.2,
    category: "Shopping",
    alerts: [],
    // description intentionally omitted → required-fields gate.
    receiptFilename: "northway-store.jpg",
  },
  // 6–10. Clean everyday receipts so the pile feels real.
  {
    provider: "Birch & Beam Café",
    vendor: "Birch & Beam Café",
    date: "2026-06-26",
    amount: 12.4,
    category: "Meals",
    alerts: [],
    description: "Coffee with a candidate",
    receiptFilename: "birch-beam-cafe.jpg",
  },
  {
    provider: "Quickline Cabs Ltd.",
    vendor: "Quickline Cabs Ltd.",
    date: "2026-06-26",
    amount: 18.75,
    category: "Taxis",
    alerts: [],
    description: "Office to client across town",
    receiptFilename: "quickline-taxi.jpg",
  },
  {
    provider: "Pellon Office Supplies",
    vendor: "Pellon Office Supplies",
    date: "2026-06-24",
    amount: 47.9,
    category: "Office",
    alerts: [],
    description: "Whiteboard markers and notebooks",
    receiptFilename: "pellon-office.pdf",
  },
  {
    provider: "Axiom Labs Inc.",
    vendor: "Axiom Labs Inc.",
    date: "2026-06-21",
    amount: 29.0,
    category: "Software",
    alerts: [],
    description: "Design tool monthly seat",
    receiptFilename: "axiom-invoice.pdf",
  },
  {
    provider: "Lakeside Bistro",
    vendor: "Lakeside Bistro",
    date: "2026-06-20",
    amount: 21.6,
    category: "Meals",
    alerts: [],
    description: "Working lunch, solo",
    receiptFilename: "lakeside-bistro.jpg",
  },
]

/**
 * Build the closed-circuit drafts with stable ids + receipt thumbnails.
 * Ids are seed-indexed (not time-based) so re-running the demo flow is
 * deterministic and `buildReceiptDataUrl` (which hashes the id)
 * produces the same artwork on every drop.
 */
export function buildClosedCircuitDrafts(): ChatDraftExpense[] {
  return SEEDS.map((seed, i) => {
    const id = `chat-draft-cc-${i}`
    // Minimal row shape that satisfies the fields buildReceiptDataUrl
    // reads (id, name, description=category, amount, date, alerts).
    const rowLike: SpendingRow = {
      id,
      kind: "expense",
      name: seed.vendor ?? seed.provider,
      description: seed.category,
      status: "draft",
      amount: seed.amount,
      date: seed.date,
      alerts: seed.alerts,
    }
    // The seed with no description trips the required-fields gate —
    // register it so the detail page's "Can't send this expense"
    // alert + the table's "Missing fields" tag fire (the static
    // predicate can't know this dynamic id).
    if (!seed.description) markFieldsMissing(id, ["description"])
    return {
      ...seed,
      id,
      status: "draft" as const,
      receiptDataUrl: buildReceiptDataUrl(rowLike),
    }
  })
}

/** Ids of the three drafts tagged as the Lisbon trip (for grouping). */
export function lisbonTripDraftIds(drafts: ChatDraftExpense[]): string[] {
  return drafts.filter((d) => d.tripTag === "Lisbon trip").map((d) => d.id)
}
