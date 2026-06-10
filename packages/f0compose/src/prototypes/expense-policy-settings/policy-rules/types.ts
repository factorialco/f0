/**
 * Policy-rules data shapes.
 *
 * This file defines the typed schema for every section under
 * "Policy rules" in the left nav (Meals, Travel, Reimbursements,
 * Receipts, Exceptions). Slice 1 ships only `MealsRules`; the
 * others are stubbed as commented placeholders that we'll fill
 * out section-by-section.
 *
 * Design principles for these shapes:
 *
 *  1. **Machine-readable**: the policy agent reads these values to
 *     auto-approve / flag expense submissions. Every field is
 *     structured (numbers, enums, booleans, arrays of strings).
 *     There are NO free-text fields used for enforcement \u2014
 *     free-text exists only in chip-list inputs where the user
 *     names a custom item (e.g., a non-reimbursable category).
 *
 *  2. **Flat per section**: each section's rules live in a single
 *     top-level object on the policy data. No deep nesting. Keeps
 *     the setters in `usePolicyRulesData` simple and the type
 *     surface understandable.
 *
 *  3. **Money in major units**: caps are stored as plain numbers
 *     in EUR (the company's default currency in the prototype).
 *     The UI renders the \u20ac symbol; we don't store currency
 *     per-field. If a future iteration adds multi-currency we'd
 *     introduce a wrapper type \u2014 for now this keeps the data
 *     model honest.
 *
 *  4. **Discriminated unions over booleans where intent matters**:
 *     for fields like "when is attendee logging required?" we use
 *     a string union ("always" | "over-threshold" | "never")
 *     rather than a boolean. This lets the agent reason about the
 *     rule's intent without inferring it from a numeric value.
 */

/* ============================================================
 * Section 4 \u2014 Meals & hospitality
 * ============================================================ */

/**
 * Per-person, per-meal cap by meal type. Stored in EUR.
 *
 * Solo meals carry two flavours \u2014 in-office vs. travelling.
 * Keeping them as a nested object (rather than two siblings)
 * lets the UI present them as ONE "Solo" cap-card with two
 * editable lines (matching the Figma direction), and lets the
 * agent reason about "the solo cap" as a single concept with
 * a travel modifier.
 */
export type MealCaps = {
  solo: {
    /** In-office / WFH solo work meal. */
    inOffice: number
    /** Solo meal while travelling on business. */
    travelling: number
  }
  /** Team meal \u2014 internal team, 2+ people. */
  team: number
  /** Client / business meal \u2014 external attendees present. */
  client: number
  /** Hospitality / entertainment \u2014 events, gifts, broader hospitality. */
  hospitality: number
}

/**
 * Where alcohol is reimbursable.
 *
 *  - "client-only": with client/business meals only (the most
 *    common policy; default).
 *  - "any-meal": allowed with any meal, capped.
 *  - "never": not reimbursable in any context.
 */
export type AlcoholAllowance = "client-only" | "any-meal" | "never"

export type AlcoholRules = {
  allowance: AlcoholAllowance
  /** Cap as % of the total meal cost. 0\u2013100. */
  capPercent: number
}

/**
 * When attendee logging is required for the various meal types.
 *
 *  - "always": every instance of the meal type requires attendees
 *    to be logged (name, optionally company).
 *  - "over-threshold": only when the meal total exceeds
 *    `teamMealThreshold` (or the client-meal cap, depending on
 *    context). The threshold lives on the rules object so the
 *    agent can read it.
 *  - "never": no logging required.
 *
 * Client meals default to "always" (industry standard). Team
 * meals default to "over-threshold" (\u20ac100). Solo meals
 * default to "never".
 */
export type AttendeeRequirement = "always" | "over-threshold" | "never"

export type AttendeeRules = {
  client: AttendeeRequirement
  team: AttendeeRequirement
  /** Threshold in EUR above which team meals require attendee logging. */
  teamMealThreshold: number
}

/**
 * Documentation requirements. Receipts-and-evidence is its own
 * section (7) but Meals has its own overrides because client
 * meals and high-value meals carry stricter rules regardless of
 * the global receipt threshold.
 */
export type MealsDocumentation = {
  /** Itemized receipt required for any client meal? */
  itemizedForClientMeals: boolean
  /** Itemized receipt required when the meal total \u2265 this amount (EUR). */
  itemizedThreshold: number
}

/**
 * Top-level Meals & hospitality rules object. Everything the
 * agent needs to make a meal-expense decision lives here.
 */
export type MealsRules = {
  caps: MealCaps
  alcohol: AlcoholRules
  attendees: AttendeeRules
  /** What the company explicitly will NOT reimburse for meals/hospitality. */
  notReimbursable: string[]
  documentation: MealsDocumentation
}

/* ------------------------------------------------------------------
 * OPEN meals model (co-creation Direction A)
 *
 * The Meals page can also be represented as an OPEN list of grouped
 * policy statements rather than the fixed `MealsRules` fields above.
 * This is what `generateMealsPolicy` produces and the rule-list view
 * renders — it accepts ANY sensible rule (per-entity caps, per-meal
 * caps, one-offs), not just the predefined fields. `value` is empty
 * for a prose-only statement.
 * ------------------------------------------------------------------ */

export type MealsPolicyStatement = { subject: string; value: string; note: string }
export type MealsPolicyGroup = { title: string; statements: MealsPolicyStatement[] }
export type MealsPolicyDoc = { groups: MealsPolicyGroup[] }

/* Generic aliases — the SAME open shape is now used for every co-created
 * policy-rules section (Meals, Travel, Reimbursements, Receipts). */
export type PolicyStatement = MealsPolicyStatement
export type PolicyGroup = MealsPolicyGroup
export type PolicyDoc = MealsPolicyDoc

/* ============================================================
 * Section 5 \u2014 Travel
 * ============================================================ */

/**
 * Per-diem cap set. Domestic vs international are stored as
 * sibling objects so the agent can reason about region without
 * inferring it from a numeric value. Each region has three
 * line items (meals / lodging / incidentals) which is the
 * canonical split used by every per-diem table the prototype
 * was modeled on.
 */
export type PerDiemSet = {
  meals: number
  lodging: number
  incidentals: number
}

export type PerDiems = {
  domestic: PerDiemSet
  international: PerDiemSet
}

export type FlightClass = "economy" | "premium-economy" | "business"

/**
 * Booking rules \u2014 the timing + class constraints employees
 * have to satisfy when booking travel.
 *
 *  - `flightAdvanceDays`: must be booked \u2265 N days before
 *    departure to get the lower fare. Below the threshold the
 *    expense reads as a late-booking flag (informational; the
 *    agent doesn't block, it just notes it on the submission).
 *  - `flightClass`: highest reimbursable cabin. Anything above
 *    is on the employee.
 *  - `hotelMaxStars`: highest reimbursable star rating.
 */
export type BookingRules = {
  flightAdvanceDays: number
  flightClass: FlightClass
  hotelMaxStars: number
}

/**
 * Mileage rules \u2014 per-km reimbursement for use of personal
 * vehicles. Stored in EUR per kilometre.
 */
export type MileageRules = {
  rate: number
}

export type TravelRules = {
  perDiems: PerDiems
  booking: BookingRules
  mileage: MileageRules
}

/* ============================================================
 * Section 6 \u2014 Reimbursements
 * ============================================================ */

/**
 * Submission timing \u2014 windows in days.
 *
 *  - `submissionWindowDays`: how long after the expense date an
 *    employee can submit it for reimbursement.
 *  - `approvalSlaDays`: SLA for the approver to action it.
 */
export type ReimbursementTiming = {
  submissionWindowDays: number
  approvalSlaDays: number
}

/**
 * Foreign-currency handling.
 *
 *  - `defaultCurrency`: ISO-style code (we keep "EUR" as the
 *    seed; expand to a typed enum if multi-currency lands).
 *  - `fxSource`: where the conversion rate comes from on the
 *    expense submission date.
 */
export type FxSource = "submission-date" | "expense-date" | "monthly-average"

export type ReimbursementCurrency = {
  defaultCurrency: string
  fxSource: FxSource
}

/**
 * Which payment methods auto-import vs require manual entry.
 */
export type PaymentMethodPolicy = {
  corporateCardAutoImport: boolean
  personalCardManual: boolean
}

export type ReimbursementsRules = {
  timing: ReimbursementTiming
  currency: ReimbursementCurrency
  paymentMethods: PaymentMethodPolicy
}

/* ============================================================
 * Section 7 \u2014 Receipts & evidence
 * ============================================================ */

/** Accepted receipt formats. Toggleable independently. */
export type ReceiptFormats = {
  photo: boolean
  pdf: boolean
  emailForward: boolean
}

/**
 * Documentation thresholds for the global Receipts surface.
 *
 *  - `requiredAbove`: receipt required for any expense \u2265 this
 *    amount (EUR).
 *  - `itemizedAbove`: itemized receipt (line-item breakdown)
 *    required for any expense \u2265 this amount.
 *  - `retentionYears`: retention policy for stored receipts.
 *  - `affidavitAllowed`: allow a "missing receipt" affidavit as
 *    fallback documentation when a real receipt isn't available.
 */
export type ReceiptsRules = {
  requiredAbove: number
  itemizedAbove: number
  retentionYears: number
  formats: ReceiptFormats
  affidavitAllowed: boolean
}

/* ============================================================
 * Section 8 \u2014 Exceptions
 * ============================================================ */

/** Who can override caps + policy limits. */
export type OverrideRole = "manager" | "finance" | "admin"

export type OverrideRules = {
  /** Role required to approve an override. */
  approverRole: OverrideRole
  /** Whether justification text is mandatory on every override. */
  justificationRequired: boolean
}

/**
 * Audit & lifecycle for granted exceptions.
 *
 *  - `logRetentionDays`: how long the audit entry is kept.
 *  - `visibleTo`: which role can read the audit log.
 *  - `autoExpiryDays`: a granted override is only valid for this
 *    many days before it has to be re-approved.
 */
export type ExceptionsAudit = {
  logRetentionDays: number
  visibleTo: OverrideRole
  autoExpiryDays: number
}

export type ExceptionsRules = {
  overrides: OverrideRules
  audit: ExceptionsAudit
}

/* ============================================================
 * Aggregate
 * ============================================================ */

export type PolicyRulesData = {
  meals: MealsRules
  travel: TravelRules
  reimbursements: ReimbursementsRules
  receipts: ReceiptsRules
  exceptions: ExceptionsRules
}
