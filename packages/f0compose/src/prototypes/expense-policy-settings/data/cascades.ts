/**
 * Co-creation cascade tables — Expense forms setup.
 *
 * Each cascade is a pure function over the answer the user picked in
 * the chat ClarifyingQuestion panel. They return a structured
 * description ("intent") of what should change in `policyData` and
 * the per-form activation flags. The actual mutation is applied by
 * the caller (the `apply*Action` hooks), which keeps these tables
 * trivially testable.
 *
 * IMPORTANT — option-id contract with the Mastra agent:
 *
 * Each `Q*OptionId` union below is the EXACT set of string ids the
 * Mastra `expensePolicySetup` skill emits via `askClarifyingQuestion`.
 * If you rename an id here, you MUST also rename it in the skill's
 * system prompt. See `factorial-agent-skill.md` in this folder for
 * the canonical skill source.
 *
 * Cascade source of truth: see HANDOFF.md "Cascade tables" section,
 * which mirrors PSPEC §3.
 */

import {
  seedCategories,
  seedPaymentMethods,
  seedSubcategories,
} from "./seeds"
import type { Category, PaymentMethod, Subcategory } from "./types"

// ── Q1 — Which kinds of expenses do your employees submit? ────────────

export type Q1OptionId =
  | "meals"
  | "travel"
  | "per-diems"
  | "office-supplies"
  | "fuel"
  | "software"
  | "training"

/**
 * Map each Q1 option to the canonical category id in the seeds.
 * Categories not listed in `selected` are toggled `visible: false`;
 * categories listed are toggled `visible: true` AND their subcategory
 * seeds (if any) are added back if they were stripped earlier.
 */
const Q1_CATEGORY_ID: Record<Q1OptionId, string> = {
  meals: "cat-meals",
  travel: "cat-travel",
  "per-diems": "cat-per-diems",
  "office-supplies": "cat-office-supplies",
  fuel: "cat-fuel",
  software: "cat-software",
  training: "cat-training",
}

/**
 * Subcategory seeds the cascade injects per Q1 option. Spec §3
 * (Meals): Client meal, Team meal, Solo work meal. Travel: Flights,
 * Hotels, Ground transport. Per diems: Half-day, Full-day, Overnight.
 * Office supplies / Fuel / Software / Training: none.
 */
const Q1_SUBCATEGORY_SEEDS: Record<Q1OptionId, Subcategory[]> = {
  meals: [
    { id: "sub-meals-client", categoryId: "cat-meals", name: "Client meal" },
    { id: "sub-meals-team", categoryId: "cat-meals", name: "Team meal" },
    { id: "sub-meals-solo", categoryId: "cat-meals", name: "Solo work meal" },
  ],
  travel: [
    { id: "sub-travel-flights", categoryId: "cat-travel", name: "Flights" },
    { id: "sub-travel-hotels", categoryId: "cat-travel", name: "Hotels" },
    {
      id: "sub-travel-ground",
      categoryId: "cat-travel",
      name: "Ground transport",
    },
  ],
  "per-diems": [
    { id: "sub-perdiem-half", categoryId: "cat-per-diems", name: "Half-day" },
    { id: "sub-perdiem-full", categoryId: "cat-per-diems", name: "Full-day" },
    {
      id: "sub-perdiem-overnight",
      categoryId: "cat-per-diems",
      name: "Overnight",
    },
  ],
  "office-supplies": [],
  fuel: [],
  software: [],
  training: [],
}

/**
 * Q1 also activates Per diem / Mileage forms in the wizard.
 *  - Per diems selected → Per diem form activated.
 *  - Fuel selected → Mileage form activated.
 */
export type FormActivation = {
  perDiemEnabled: boolean
  mileageEnabled: boolean
}

export type Q1Intent = {
  /** Replacement Category list (preserves seed order, flips `visible`). */
  categories: Category[]
  /** Replacement Subcategory list (seed bundles for selected only). */
  subcategories: Subcategory[]
  activation: FormActivation
}

export function buildQ1Intent(selected: Q1OptionId[]): Q1Intent {
  const selectedSet = new Set<Q1OptionId>(selected)
  const categories: Category[] = seedCategories.map((cat) => {
    const optionId = (Object.entries(Q1_CATEGORY_ID).find(
      ([, id]) => id === cat.id
    )?.[0] ?? null) as Q1OptionId | null
    // "Hospitality" has no Q1 option — it stays at its seed visibility.
    if (optionId === null) return cat
    return { ...cat, visible: selectedSet.has(optionId) }
  })

  const subcategories: Subcategory[] = selected.flatMap(
    (opt) => Q1_SUBCATEGORY_SEEDS[opt]
  )

  return {
    categories,
    subcategories,
    activation: {
      perDiemEnabled: selectedSet.has("per-diems"),
      mileageEnabled: selectedSet.has("fuel"),
    },
  }
}

// ── Q2 — What other info should employees include? ────────────────────

export type Q2OptionId =
  | "project"
  | "cost-center"
  | "description"
  | "internal-reference"
  | "nothing-extra"

/**
 * Field ids on the `FieldRow` list (see `forms/fields.ts`). All Q2
 * fields land at `visible: <selected>` and `requirement: "optional"`
 * (spec §3 — all Q2 fields default to Optional).
 */
const Q2_FIELD_ID: Record<Exclude<Q2OptionId, "nothing-extra">, string> = {
  project: "projects",
  "cost-center": "cost-centers",
  description: "description",
  "internal-reference": "internal-reference",
}

export type Q2Intent = {
  /** Map of field-id → visibility flag to apply via setVisible. */
  fieldVisibility: Record<string, boolean>
}

export function buildQ2Intent(selected: Q2OptionId[]): Q2Intent {
  const nothing = selected.includes("nothing-extra")
  const concrete = (
    Object.keys(Q2_FIELD_ID) as Array<keyof typeof Q2_FIELD_ID>
  ).reduce<Record<string, boolean>>((acc, opt) => {
    const fieldId = Q2_FIELD_ID[opt]
    acc[fieldId] = nothing ? false : selected.includes(opt)
    return acc
  }, {})
  return { fieldVisibility: concrete }
}

// ── Q3 — How do your employees pay for these expenses? ────────────────

export type Q3OptionId =
  | "personal-cards"
  | "company-cards"
  | "mix"
  | "cash-advance"

const Q3_PAYMENT_METHODS: Record<Q3OptionId, PaymentMethod[]> = {
  "personal-cards": [
    { id: "pm-personal-debit", name: "Personal debit card" },
    { id: "pm-personal-credit", name: "Personal credit card" },
    { id: "pm-cash", name: "Cash" },
  ],
  "company-cards": [
    { id: "pm-company-card", name: "Company card" },
    { id: "pm-cash", name: "Cash" },
  ],
  mix: [
    { id: "pm-personal-debit", name: "Personal debit card" },
    { id: "pm-personal-credit", name: "Personal credit card" },
    { id: "pm-company-card", name: "Company card" },
    { id: "pm-cash", name: "Cash" },
  ],
  "cash-advance": [
    { id: "pm-cash-advance", name: "Cash advance" },
    { id: "pm-cash", name: "Cash" },
  ],
}

export type Q3Intent = {
  paymentMethods: PaymentMethod[]
}

export function buildQ3Intent(option: Q3OptionId): Q3Intent {
  return { paymentMethods: Q3_PAYMENT_METHODS[option] }
}

// ── Defaults (for "Make changes" §8 hard-reset path) ──────────────────

/**
 * The Q1 defaults applied when the user has never answered Q1 (i.e.
 * the policy is at its seed state). This is also the snapshot the
 * "Make changes" loop resets to before re-asking — spec §8 explicitly
 * mandates that re-asking overwrites manual edits.
 */
export const Q1_DEFAULT_SELECTION: Q1OptionId[] = [
  "meals",
  "travel",
  "office-supplies",
]

export const Q2_DEFAULT_SELECTION: Q2OptionId[] = ["description"]

export const Q3_DEFAULT_SELECTION: Q3OptionId = "personal-cards"

export const DEFAULT_CATEGORIES: Category[] = seedCategories
export const DEFAULT_SUBCATEGORIES: Subcategory[] = seedSubcategories
export const DEFAULT_PAYMENT_METHODS: PaymentMethod[] = seedPaymentMethods
