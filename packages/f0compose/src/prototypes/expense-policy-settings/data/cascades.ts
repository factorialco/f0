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
import type {
  ApprovalFlow,
  ApprovalScope,
  Category,
  PaymentMethod,
  Subcategory,
} from "./types"

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

// ── Q4 — How should expenses get approved by default? ─────────────────
//
// The interview lays down a clean STARTER approval workflow (an ordered
// list of WHEN→THEN rules, first match wins). Each posture maps to one
// or two rules built from PRESET roles only (manager / self=auto-approve
// / admins=finance review) so every starter rule is feasibility
// "supported" — no relation/needs-setup noise on a fresh setup. The user
// refines names, thresholds, and approvers afterwards via co-creation.

export type Q4OptionId =
  | "manager-all"
  | "manager-finance"
  | "auto-small"
  | "finance-all"

const EVERYONE: ApprovalScope = { kind: "everyone" }

/** Default threshold (EUR) above which "larger" expenses escalate. */
export const Q4_DEFAULT_THRESHOLD = 1000
/** Default ceiling (EUR) under which "small" expenses auto-approve. */
export const Q4_DEFAULT_AUTO_CEILING = 200

const managerStep = (flowId: string) => ({
  id: `${flowId}-mgr`,
  approver: { kind: "role" as const, role: "manager" as const },
  label: "Manager approval",
})
const financeStep = (flowId: string) => ({
  id: `${flowId}-fin`,
  approver: { kind: "role" as const, role: "admins" as const },
  label: "Finance review",
})
const selfStep = (flowId: string) => ({
  id: `${flowId}-self`,
  approver: { kind: "role" as const, role: "self" as const },
})

export function buildApprovalIntent(option: Q4OptionId): ApprovalFlow[] {
  switch (option) {
    case "manager-finance":
      // "Everything goes through the manager, then finance" — ONE flat rule
      // for all expenses (no amount tiering). Keep it a single Manager →
      // Finance chain so it matches what the user described.
      return [
        {
          id: "flow-default",
          name: "Default approval",
          when: "Any expense",
          then: "Manager → Finance review",
          feasibility: "supported",
          trigger: { amount: {}, categoryIds: [], scope: EVERYONE },
          steps: [managerStep("flow-default"), financeStep("flow-default")],
          priority: 900,
        },
      ]
    case "auto-small":
      return [
        {
          id: "flow-small",
          name: "Small expenses",
          when: `Under €${Q4_DEFAULT_AUTO_CEILING}`,
          then: "Auto-approve",
          feasibility: "supported",
          trigger: {
            amount: { max: Q4_DEFAULT_AUTO_CEILING },
            categoryIds: [],
            scope: EVERYONE,
          },
          steps: [selfStep("flow-small")],
          priority: 100,
        },
        {
          id: "flow-default",
          name: "Default approval",
          when: `€${Q4_DEFAULT_AUTO_CEILING} and above`,
          then: "Manager approves",
          feasibility: "supported",
          trigger: {
            amount: { min: Q4_DEFAULT_AUTO_CEILING },
            categoryIds: [],
            scope: EVERYONE,
          },
          steps: [managerStep("flow-default")],
          priority: 900,
        },
      ]
    case "finance-all":
      return [
        {
          id: "flow-default",
          name: "Finance approval",
          when: "Any expense",
          then: "Finance reviews",
          feasibility: "supported",
          trigger: { amount: {}, categoryIds: [], scope: EVERYONE },
          steps: [financeStep("flow-default")],
          priority: 900,
        },
      ]
    case "manager-all":
    default:
      return [
        {
          id: "flow-default",
          name: "Default approval",
          when: "Any expense",
          then: "Manager approves",
          feasibility: "supported",
          trigger: { amount: {}, categoryIds: [], scope: EVERYONE },
          steps: [managerStep("flow-default")],
          priority: 900,
        },
      ]
  }
}

// ── Q5 — What can people spend on meals & travel? ─────────────────────
//
// Drives the per-diem rate seed. Meal/travel caps live on a separate
// surface (policy rules) that the data model doesn't yet expose as a
// simple field, so for the starter we focus on the per-diem allowance:
// when the user picks daily allowances, we seed a sensible per-diem rate
// they can tune. The other options leave rates untouched (co-creation
// fills caps later).

export type Q5OptionId =
  | "limits"
  | "per-diems"
  | "per-diem-travel-cap-meals"
  | "case-by-case"

/** Default daily per-diem amount (EUR) seeded for the starter. */
export const Q5_DEFAULT_PER_DIEM = 40

export type Q5Intent = {
  /** Seed a standard per-diem rate row at this amount (EUR). */
  addPerDiem: boolean
  perDiemAmount: number
}

export function buildLimitsIntent(option: Q5OptionId): Q5Intent {
  const addPerDiem =
    option === "per-diems" || option === "per-diem-travel-cap-meals"
  return { addPerDiem, perDiemAmount: Q5_DEFAULT_PER_DIEM }
}
