import {
  F0Alert,
  F0Form,
  F0Select,
  f0FormField,
  useF0Form,
  useF0FormDefinition,
  type CustomFieldRenderProps,
  type F0FormRef,
  type IconType,
} from "@factorialco/f0-react"
import { Switch } from "@factorialco/f0-react/dist/experimental"
import { ChevronDown, ChevronUp } from "@factorialco/f0-react/icons/app"
import { useCallback, useEffect, useMemo, useRef, useState, createContext, useContext, type MutableRefObject } from "react"
import { z } from "zod"

import {
  budgets,
  projects,
  subcategoriesByCategory,
  type ExpenseCategory,
  type ExpenseSplit,
  type Participant,
  type SplitMode,
} from "@/fixtures"
import { useViewer } from "@/lib/viewer"
import { type SpendingRow } from "../rows"
import { CostCentersField } from "./CostCentersField"
import { FilesField } from "./FilesField"
import { TaxRowsField } from "./TaxRowsField"
import type { RequiredField } from "@/prototypes/_shared/requiredFields"
import {
  isParticipantBearingCategory,
} from "../participants/types"
import { ownerImplicitShare, recomputeShares } from "../participants/computeShares"
import {
  ExternalCountField,
  ParticipantsField,
} from "../participants/ParticipantsField"
import { SplitBreakdown } from "../participants/SplitBreakdown"
import { recordSubmission } from "../participants/submissionStore"
import { useSubmissionSnapshot } from "../participants/submissionStore"

/**
 * Submitter-facing edit form. Used everywhere EXCEPT the Pending
 * Controlling tab — i.e. when an employee opens an expense from
 * Submit > Expenses, Submit > Folders > Folder, Manage > Pending
 * approval / Pay / All, etc. and clicks the pencil to edit.
 *
 * The Controlling tab uses `ControllingForm` (coding fields only).
 * This form mirrors the legacy Gamma "Submit a new expense" / "Edit
 * expense" modal — the field set the employee owns:
 *
 *   Expense information       — Category
 *   Document information      — Type, Document date, Receipt currency,
 *                               Receipt amount, Vendor name
 *   Payment                   — Reimbursable (checkbox), Payment
 *                               method, Reimbursable amount
 *   Budget and project        — Project
 *   Additional information    — Description, Internal reference
 *
 * Files (receipt upload) is intentionally omitted — F0Form has no
 * canonical file-upload field; the right-hand ReceiptPanel already
 * surfaces upload affordance for the prototype.
 *
 * Hooks (`useF0Form` + `useF0FormDefinition`) live INSIDE this
 * component for the same reason as ControllingForm — lifting them
 * to the parent loops the AI chat panel registry.
 *
 * SCHEMA-IN-COMPONENT (regression from the previous version):
 * Previously the schema and sections were at module scope to keep
 * `useF0FormDefinition`'s identity stable across renders. The
 * required-fields gating layer (see `_shared/requiredFields.ts`)
 * forces the schema to be **per-row** — the `project` and
 * `description` fields flip from `optional: true` to required
 * depending on which fields the row is missing. We rebuild the
 * schema inside a `useMemo` keyed on the missing-field list. The
 * AI-chat loop concern from the f0-prototype skill applies to
 * lifting hooks to the *page* level — keeping the hooks here, with
 * a memoized definition, is safe.
 */

const ALL_CATEGORIES: ExpenseCategory[] = [
  "Meals",
  "Taxis",
  "Travel",
  "Shopping",
  "Hotel",
  "Office",
  "Software",
]

const DOCUMENT_TYPES = ["Receipt", "Invoice", "Other"] as const
const CURRENCIES = ["EUR", "USD", "GBP"] as const
const PAYMENT_METHODS = [
  { value: "personal-card", label: "Personal card" },
  { value: "company-card", label: "Company card" },
  { value: "cash", label: "Cash" },
  { value: "bank-transfer", label: "Bank transfer" },
  // Company-paid card. When this method is selected the expense is
  // NOT out-of-pocket: the reimbursable checkbox + amount are hidden
  // and the "Shared expense" toggle is hidden too (split breakdown
  // only makes sense when the submitter personally fronted the
  // money). Participants + externals stay visible because policy
  // still wants attendee tracking for meals regardless of who paid.
  { value: "factorial-card", label: "Factorial card" },
] as const

/**
 * Section order matters: F0Form iterates `Object.entries(sections)`
 * in insertion order, so this object's key order is the on-screen
 * order. Mirrors the real Factorial expense form's 8 sections, with
 * the prototype-only `attendees` block slotted between `document` and
 * `payment` (so the per-attendee split math entered there flows into
 * the Payment block's reimbursable total below it).
 *
 * Section DESCRIPTIONS are intentionally omitted (quick win #1): on an
 * edit form the per-section helper sentences are repeat-user noise and
 * a big chunk of the vertical length. Titles carry the grouping.
 *
 * The collapsible sections (Payment, Tax, Budget and project, Cost
 * centers, Files) get a Show/Hide `action` button attached at render
 * time in `effectiveSections` — see the component body.
 */
/** Per-section config shape we pass to F0Form (title + optional
 *  Show/Hide header action). Structurally assignable to F0Form's
 *  section config. */
type SectionConfig = {
  title: string
  action?: { label: string; icon: IconType; onClick: () => void }
}

const sections = {
  expense: { title: "Expense information" },
  document: { title: "Document information" },
  attendees: { title: "Attendees" },
  payment: { title: "Payment" },
  tax: { title: "Tax" },
  budget: { title: "Budget and project" },
  costcenters: { title: "Cost centers" },
  additional: { title: "Additional information" },
  files: { title: "Files" },
} as const

/**
 * Mock Project field — renders the canonical `F0Select` chrome but
 * never lets its listbox open. Clicking the trigger (which would
 * normally open the listbox) instead auto-picks the FIRST project.
 *
 * Why this exists: opening the canonical F0Select listbox inside
 * this prototype triggers an infinite re-render loop in F0AiChat's
 * form-registry snapshot code. The loop is unrelated to the gating
 * feature and unblocking the demo doesn't require fixing it. By
 * keeping `open` permanently controlled to `false`, F0Select never
 * mounts its listbox/portal content, so the loop never fires — but
 * the user still sees the regular Select trigger (same label,
 * border, chevron-in-pill chrome, required asterisk, error state).
 *
 * Custom fields opt out of FormItem's auto-rendered label and error
 * message (see `FieldRenderer.tsx:169-174` — `showLabel = false` and
 * `showFormMessage = false` when `field.type === "custom"`). F0Select
 * draws its own visible label + required asterisk, so we DON'T add
 * one above it (that would duplicate). The error MESSAGE is rendered
 * below the Select since F0Select only shows the red border, not the
 * text.
 *
 * UX:
 *   - Empty + click: auto-picks `projects[0]` (Sample Initiative).
 *     `errorTriggerMode: "on-change"` then re-runs the resolver and
 *     clears the error.
 *   - Filled + click: still auto-picks (idempotent for the first
 *     pick; subsequent clicks are no-ops because we early-return on
 *     a filled value).
 */
function MockProjectField(props: {
  label: string
  required: boolean
  value: string | undefined
  onChange: (value: string) => void
  onBlur: () => void
  error?: string
  placeholder?: string
  name: string
}) {
  const { label, required, value, onChange, onBlur, error, placeholder, name } =
    props

  const options = useMemo(
    () =>
      projects.map((p) => ({
        value: p.id,
        label: `${p.name} (${p.code})`,
      })),
    []
  )

  // Intercept open-attempts. The listbox stays mounted-never; the
  // act of "trying to open" is what we use as the click signal that
  // populates the field. Idempotent guard ensures repeated clicks
  // after the first don't keep re-firing onChange (which would be
  // a no-op semantically but still costs a render).
  const handleOpenChange = (next: boolean) => {
    if (!next) return // Closing — nothing to do; we never actually opened.
    if (!value) {
      onChange(projects[0].id)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <F0Select
        name={name}
        label={label}
        hideLabel={false}
        required={required}
        placeholder={placeholder}
        size="md"
        options={options}
        value={value}
        // F0Select's `open` is controlled — we force it permanently
        // false. The listbox content never mounts, so the F0AiChat
        // registry-snapshot loop that fires on listbox-open is
        // sidestepped entirely.
        open={false}
        onOpenChange={handleOpenChange}
        // No-op: setting the value happens via `onOpenChange` (the
        // click-to-open intercept) since the listbox never renders
        // and the user can never pick an option through it. Kept
        // wired so RHF's onChange contract is satisfied if F0Select
        // ever fires it itself (e.g. clearable button).
        onChange={(v: string) => onChange(v)}
        onBlur={onBlur}
        // F0Select's `error` is a boolean (just toggles the red
        // border / icon). The error text is rendered separately
        // below — RHF gives us a string message.
        error={!!error}
      />
      {error ? (
        <span
          style={{
            fontSize: 12,
            color: "var(--f1-foreground-critical)",
            paddingLeft: 6,
          }}
        >
          {error}
        </span>
      ) : null}
    </div>
  )
}

/**
 * Participants & split — Context wiring.
 *
 * The participants/split UI lives INSIDE F0Form (so it inherits
 * the "Participants" section header + spacing) but its data
 * lives OUTSIDE RHF, in the outer `SubmitterEditForm` component's
 * React state. F0Form's custom-field render prop has no access to
 * sibling values, so we bridge the two worlds through a Context:
 *
 *   - `SubmitterEditForm` holds state, derives the context value,
 *     and wraps `<F0Form>` in `<ParticipantsContext.Provider>`.
 *   - The schema's `participantsSection` custom field renders
 *     `<ParticipantsSectionConsumer />` — a module-scope
 *     component that reads the context and draws the actual UI.
 *
 * Why a module-scope consumer (not an inline lambda): the schema
 * is memoized by `useF0FormDefinition` and feeds the F0AiChat
 * form registry. An inline lambda whose identity changes per
 * render would re-feed the definition and trigger the
 * registry-snapshot loop the f0-prototype skill warns about. By
 * hoisting the consumer to module scope, its JSX is identity-
 * stable and only the context value re-renders.
 */
type ParticipantsContextValue = {
  ownerEmployeeId: string
  participants: Participant[]
  splitEnabled: boolean
  splitMode: SplitMode
  splitShares: ExpenseSplit["shares"]
  receiptTotal: number
  onParticipantsChange: (next: Participant[]) => void
  onSplitEnabledChange: (next: boolean) => void
  onSplitModeChange: (next: SplitMode) => void
  onSplitSharesChange: (next: ExpenseSplit["shares"]) => void
  /**
   * Counter that increments every time something asks the
   * Participants field to grab attention (e.g. the empty-state
   * CTA in the split breakdown). ParticipantsField watches this
   * via `focusPulse` and reacts by scrolling itself into view
   * + pulsing a blue focus ring.
   */
  participantsPulse: number
  requestFocusParticipants: () => void
  /**
   * True when the expense was paid on a Factorial card (company-
   * paid). Drives the "Paid by company" info alert beneath the
   * externals field — only shown in that branch because policy
   * still wants the allowance hint surfaced even when the
   * employee isn't out of pocket.
   */
  isCompanyPaid: boolean
  /**
   * Current expense id. Needed by Pre-fill scenarios (e.g. the
   * banner that hydrates Alan's empty Attendees from Hellen's
   * sibling submission) so consumers can look themselves up
   * without having to thread `row` through every component.
   */
  expenseId: string
}

const ParticipantsContext = createContext<ParticipantsContextValue | null>(null)

/**
 * The participants/split UI is rendered as THREE separate F0Form
 * custom fields under their own `attendees` section, placed
 * ABOVE the Payment section. This way the reimbursable-per-
 * attendee math entered while splitting flows naturally down
 * into the Payment block's Reimbursable amount total — matching
 * the canonical edit-form sequence: gather attendees first, then
 * declare how the bill was paid.
 *
 *   attendees ─┬─ attendeesBlock        (custom)  ← chips + count
 *              ├─ splitToggle           (custom)  ← toggle + description
 *              └─ splitBreakdown        (custom)  ← appears when on
 *
 *   payment   ─┬─ reimbursable          (checkbox)
 *              ├─ paymentMethod         (select)
 *              ├─ reimbursableAmount    (number)
 *              └─ foreignCurrencyAlert  (custom, optional)
 *
 * The category gate (`isParticipantBearingCategory`) is applied at
 * schema-build time: when the row's initial category isn't a
 * participant-bearing one, the bundled attendees + split fields
 * all render `null` and are effectively invisible (the section
 * header itself still renders empty; acceptable for a prototype).
 */

function ParticipantsPickerConsumer() {
  const ctx = useContext(ParticipantsContext)
  if (!ctx) return null
  const { ownerEmployeeId, participants, onParticipantsChange, participantsPulse } = ctx
  return (
    <ParticipantsField
      ownerEmployeeId={ownerEmployeeId}
      value={participants}
      onChange={onParticipantsChange}
      label="Participants"
      focusPulse={participantsPulse}
    />
  )
}

function ExternalsCountConsumer() {
  const ctx = useContext(ParticipantsContext)
  if (!ctx) return null
  const { participants, onParticipantsChange } = ctx
  return (
    <ExternalCountField
      value={participants}
      onChange={onParticipantsChange}
      label="Number of external participants"
    />
  )
}

/**
 * PrefillBanner — Scenario C glue.
 *
 * When Alan opens his copy of the Greystone Brunch House meal
 * (`exp-fc-meal-002`) and his Attendees section is still empty,
 * we surface a positive F0Alert that lets him hydrate participants
 * + externals + split from Hellen's sibling submission of
 * `exp-fc-meal-001` (the same restaurant, the same lunch, posted
 * a day earlier). The Pre-fill button rewrites Hellen's snapshot
 * from Alan's POV:
 *   - Alan becomes the owner (already true via row.ownerEmployeeId
 *     and the viewer override).
 *   - Hellen (`emp-current` in her snapshot) becomes a regular
 *     internal participant.
 *   - Marie (`emp-002`) stays a participant.
 *   - External heads carry over 1:1.
 *   - Split mode + per-share amounts mirror Hellen's, with the
 *     owner share re-keyed onto Alan's id.
 *
 * Gating: only renders when (a) the current row is the Alan copy,
 * (b) a snapshot exists for the Hellen copy, and (c) Alan hasn't
 * already added participants himself (so we don't trample a
 * mid-edit state on every re-mount).
 */
const PREFILL_SOURCE_EXPENSE_ID = "exp-fc-meal-001"
const PREFILL_TARGET_EXPENSE_ID = "exp-fc-meal-002"

function PrefillBanner() {
  const ctx = useContext(ParticipantsContext)
  const snapshot = useSubmissionSnapshot(PREFILL_SOURCE_EXPENSE_ID)
  if (!ctx) return null
  if (ctx.expenseId !== PREFILL_TARGET_EXPENSE_ID) return null
  if (!snapshot) return null
  // Don't offer pre-fill once Alan has started filling in
  // attendees on his own — the action would clobber his work.
  if (ctx.participants.length > 0) return null

  const onPrefill = (): void => {
    // Map Hellen's snapshot into Alan's POV.
    // - Hellen's `submitterEmployeeId` (emp-current) becomes a
    //   regular internal participant on Alan's row.
    // - Any internal entry in her participants list carries over
    //   as-is (Marie = emp-002), except an entry pointing at Alan
    //   himself, which we'd skip (he's now the owner, not a
    //   participant). Externals carry over 1:1.
    const mappedParticipants: Participant[] = []
    mappedParticipants.push({
      kind: "internal",
      employeeId: snapshot.submitterEmployeeId,
      confirmation: "pending",
    })
    for (const p of snapshot.participants) {
      if (p.kind === "internal") {
        if (p.employeeId === ctx.ownerEmployeeId) continue
        mappedParticipants.push({
          kind: "internal",
          employeeId: p.employeeId,
          confirmation: "pending",
        })
      } else {
        mappedParticipants.push({
          kind: "external",
          id: `ext-prefill-${p.id}`,
        })
      }
    }

    ctx.onParticipantsChange(mappedParticipants)

    if (snapshot.split) {
      // Rebuild shares from Hellen's snapshot in Alan's POV
      // ordering: [Alan owner, ...other internals excluding Alan,
      // Hellen as participant, external aggregate]. Each
      // participant in `mappedParticipants` keeps the amount they
      // had in Hellen's snapshot (so the receipt total stays
      // intact when both rows declare the same €58.40).
      const shareByEmp = new Map<string | null, number>()
      for (const s of snapshot.split.shares) {
        shareByEmp.set(s.employeeId, s.amount)
      }

      const mappedShares: ExpenseSplit["shares"] = []
      // Alan as owner — he already had a pre-allocated share in
      // Hellen's snapshot (Hellen tagged him as a participant);
      // fall back to Hellen's owner share if missing.
      const alanAmount =
        shareByEmp.get(ctx.ownerEmployeeId) ??
        shareByEmp.get(snapshot.submitterEmployeeId) ??
        0
      mappedShares.push({ employeeId: ctx.ownerEmployeeId, amount: alanAmount })
      // Other internal participants (skip Alan, skip Hellen — she
      // goes at the end of the internal block to preserve the
      // "you-first, then others" reading order).
      for (const p of snapshot.participants) {
        if (p.kind !== "internal") continue
        if (p.employeeId === ctx.ownerEmployeeId) continue
        if (p.employeeId === snapshot.submitterEmployeeId) continue
        const amount = shareByEmp.get(p.employeeId) ?? 0
        mappedShares.push({ employeeId: p.employeeId, amount })
      }
      // Hellen as participant.
      const hellenAmount = shareByEmp.get(snapshot.submitterEmployeeId) ?? 0
      mappedShares.push({
        employeeId: snapshot.submitterEmployeeId,
        amount: hellenAmount,
      })
      // External aggregate (single null-keyed row).
      const externalAmount = shareByEmp.get(null) ?? 0
      if (snapshot.participants.some((p) => p.kind === "external")) {
        mappedShares.push({ employeeId: null, amount: externalAmount })
      }

      ctx.onSplitEnabledChange(true)
      ctx.onSplitModeChange(snapshot.split.mode)
      ctx.onSplitSharesChange(mappedShares)
    }
  }

  return (
    <F0Alert
      variant="positive"
      title="Pre-fill from Hellen's submission"
      description="Hellen already submitted this lunch yesterday. We can copy the attendees and split she entered so you don't have to retype them."
      action={{ label: "Pre-fill", onClick: onPrefill }}
    />
  )
}

/**
 * AttendeesBlockConsumer — single custom field that renders the
 * participants chip field, the externals count field, and (when
 * the expense is company-paid) the "Paid by company" alert. The
 * Attendees section header itself is owned by F0Form via the
 * `attendees` section definition above, so we don't emit an
 * inline `<h2>` here — that would duplicate the canonical
 * SectionHeader rendered by F0Form.
 */
function AttendeesBlockConsumer() {
  const ctx = useContext(ParticipantsContext)
  const isCompanyPaid = ctx?.isCompanyPaid ?? false
  return (
    <div className="flex flex-col gap-4">
      <PrefillBanner />
      <ParticipantsPickerConsumer />
      <ExternalsCountConsumer />
      {isCompanyPaid ? (
        // Tight spacing — the parent flex gap is 16px (gap-4); we
        // pull this alert in to ~8px (half-gap) so it visually
        // belongs to the externals field above it rather than
        // floating as a standalone block. `-mt-2` cancels half of
        // the parent gap.
        <div className="-mt-2">
          <F0Alert
            variant="info"
            title="Paid by company"
            description="Counts toward each participant's allowance."
          />
        </div>
      ) : null}
    </div>
  )
}

/**
 * Toggle row + helper description, matching ref image 4
 * ("Este gasto está compartido"). Uses the canonical experimental
 * `Switch` component (https://ds.factorial.dev/?path=/docs/
 * experimental-switch--documentation). Disabled until at least
 * one non-owner participant is present, with an inline hint.
 */
function SplitToggleConsumer() {
  const ctx = useContext(ParticipantsContext)
  if (!ctx) return null
  const { splitEnabled, onSplitEnabledChange } = ctx

  // The negative top margin closes the gap with the
  // Reimbursable amount field above. F0Form's section adds its
  // default field-to-field spacing (~24px); we pull this row
  // back by ~12px so the switch sits closer to the field, per
  // the reference. The Switch's built-in `title` prop already
  // renders the "This expense is shared" label at 14px medium;
  // the helper sentence below is `text-sm` (14px) regular,
  // indented to align with the label text (past the toggle).
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <Switch
          id="split-enabled"
          checked={splitEnabled}
          onCheckedChange={onSplitEnabledChange}
          hideLabel
          title="This expense is shared"
        />
        <label
          htmlFor="split-enabled"
          className="cursor-pointer text-[14px] font-medium leading-normal text-f1-foreground"
        >
          This expense is shared
        </label>
      </div>
      <span className="pl-12 text-[14px] font-normal leading-normal text-f1-foreground-secondary">
        Split the receipt across participants when more than one person paid.
      </span>
    </div>
  )
}

function SplitBreakdownConsumer() {
  const ctx = useContext(ParticipantsContext)
  if (!ctx) return null
  const {
    ownerEmployeeId,
    participants,
    splitEnabled,
    splitMode,
    splitShares,
    receiptTotal,
    onSplitModeChange,
    onSplitSharesChange,
  } = ctx
  const hasNonOwnerParticipants = participants.length > 0

  // Toggle off → render nothing.
  if (!splitEnabled) return null

  // Toggle on but no participants yet → show an empty-state card
  // with a CTA that redirects the user up to the Participants
  // field (smooth scroll + blue focus pulse). The toggle itself
  // is no longer disabled — instead we use this affordance as the
  // educational nudge to add a participant before splitting.
  if (!hasNonOwnerParticipants) {
    return (
      <div className="flex flex-col items-center gap-1 rounded-md bg-f1-background-tertiary px-4 py-8 text-center">
        <p className="text-[14px] font-medium leading-normal text-f1-foreground">
          No one to split with yet
        </p>
        <p className="text-[14px] font-normal leading-normal text-f1-foreground-secondary">
          Add participants in the field above.
        </p>
      </div>
    )
  }

  return (
    <SplitBreakdown
      ownerEmployeeId={ownerEmployeeId}
      participants={participants}
      receiptTotal={receiptTotal}
      mode={splitMode}
      shares={splitShares}
      onModeChange={onSplitModeChange}
      onSharesChange={onSplitSharesChange}
    />
  )
}

/**
 * Build the Zod schema. Two fields are conditionally required based
 * on `requiredFields`:
 *
 *   - `project`: select. `optional: true` (default) → can be left
 *     blank. `optional: false` → must be selected.
 *   - `description`: textarea. `optional: true` → can be blank.
 *     `optional: false` → must contain at least one character
 *     (f0FormField.textarea uses `z.string().min(1)` for required).
 *
 * Other fields keep their original required/optional posture.
 */
/**
 * Deterministic digit string from a seed — used to mock Document
 * number / Vendor TIN so a draft reads as already-filled instead of
 * opening with red required-field errors. Same seed → same output.
 */
function mockDigits(seed: string, len: number): string {
  let h = 7
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  let out = ""
  while (out.length < len) {
    out += (h % 10).toString()
    h = (h * 1103515245 + 12345) >>> 0
  }
  return out.slice(0, len)
}

function buildSchema(
  requiredFields: ReadonlySet<RequiredField>,
  foreignCurrency: SpendingRow["foreignCurrency"],
  initialCategory: ExpenseCategory,
  initialPaymentMethod: SpendingRow["paymentMethod"],
  splitEnabledRef: MutableRefObject<boolean>,
  collapsible: ReadonlySet<string>,
  expandedRef: MutableRefObject<Record<string, boolean>>
) {
  const projectRequired = requiredFields.has("project")
  const descriptionRequired = requiredFields.has("description")

  // Participants & split surface only for participant-bearing
  // categories (Meals in v1, per PSPEC Q-006). The category is
  // resolved once at schema-build time from the row's initial
  // category — changing the Category field after mount won't
  // toggle the participants section live (acceptable demo limit).
  const showParticipants = isParticipantBearingCategory(initialCategory)

  // Company-paid (Factorial card) branch. When true:
  //   - `paymentMethod` is locked to "factorial-card" (select disabled)
  //   - `reimbursable` + `reimbursableAmount` fields are hidden
  //     (the expense is NOT out-of-pocket so reimbursement is moot)
  //   - the "Shared expense" toggle + split breakdown are hidden
  //     (you only split a receipt across people when one person
  //     personally fronted the money — company-paid never needs this)
  //   - participants picker + externals count stay visible because
  //     attendee tracking is still required by policy regardless of
  //     who paid for the meal
  const isCompanyPaid = initialPaymentMethod === "factorial-card"

  // Field-level collapse gate. For a field in a collapsible section,
  // `renderIf` additionally requires that section to be expanded —
  // read live from `expandedRef` so toggling a section doesn't
  // rebuild the schema (only the sections config + definition
  // rebuild, which is discrete per click and safe for the AI form
  // registry). `base` preserves any pre-existing render condition
  // (e.g. the company-paid branch).
  const gate =
    (section: string, base?: () => boolean) =>
    (): boolean => {
      const expanded = collapsible.has(section)
        ? expandedRef.current[section] === true
        : true
      return expanded && (base ? base() : true)
    }

  return z.object({
    // ── Expense information ───────────────────────────────────────
    documentType: f0FormField.select({
      label: "Document type",
      section: "expense",
      placeholder: "Select document type",
      options: DOCUMENT_TYPES.map((t) => ({ value: t, label: t })),
    }),
    category: f0FormField.select({
      label: "Category",
      section: "expense",
      placeholder: "Select category",
      options: ALL_CATEGORIES.map((c) => ({ value: c, label: c })),
    }),
    // Subcategory nested under Category — options scoped to the row's
    // initial category (static at build; the demo doesn't re-derive
    // them live when Category changes mid-edit).
    subcategory: f0FormField.select({
      label: "Subcategory",
      section: "expense",
      optional: true,
      placeholder: "Select subcategory",
      options: (subcategoriesByCategory[initialCategory] ?? []).map((s) => ({
        value: s,
        label: s,
      })),
    }),
    // ── Document information ──────────────────────────────────────
    documentDate: f0FormField.date({
      label: "Document date",
      section: "document",
    }),
    receiptAmount: f0FormField.number({
      label: "Receipt amount",
      section: "document",
      row: "amount-currency",
      placeholder: "0",
    }),
    documentCurrency: f0FormField.select({
      label: "Document currency",
      section: "document",
      row: "amount-currency",
      placeholder: "Currency",
      options: CURRENCIES.map((c) => ({ value: c, label: c })),
    }),
    documentNumber: f0FormField.text({
      label: "Document number",
      section: "document",
      placeholder: "As it is on the document",
    }),
    vendorName: f0FormField.text({
      label: "Vendor name",
      section: "document",
      row: "vendor",
      placeholder: "As it is on the document",
    }),
    vendorTIN: f0FormField.text({
      label: "Vendor TIN",
      section: "document",
      row: "vendor",
      placeholder: "Tax ID number",
    }),
    // ── Payment (collapsible) ─────────────────────────────────────
    // The real form models "Payment" as a select (Reimbursable /
    // Not reimbursable) rather than a checkbox.
    reimbursable: f0FormField.select({
      label: "Payment",
      section: "payment",
      placeholder: "Select option",
      options: [
        { value: "reimbursable", label: "Reimbursable" },
        { value: "non-reimbursable", label: "Not reimbursable" },
      ],
      // Hidden when the expense was paid on a Factorial card —
      // reimbursement is moot for company-paid expenses. Gated by
      // the Payment section's expand state.
      renderIf: gate("payment", () => !isCompanyPaid),
    }),
    paymentMethod: f0FormField.select({
      label: "Payment method",
      section: "payment",
      placeholder: "Select option",
      // Locked to "factorial-card" when the row was paid on a
      // company card. The user can still see the value but cannot
      // change it — Factorial owns the card, not the employee.
      disabled: () => isCompanyPaid,
      renderIf: gate("payment"),
      options: PAYMENT_METHODS.map((m) => ({
        value: m.value,
        label: m.label,
      })),
    }),
    reimbursableAmount: f0FormField.number({
      label: "Reimbursable amount",
      section: "payment",
      placeholder: "0",
      // Hidden alongside the Payment field when company-paid; gated
      // by the Payment section's expand state.
      renderIf: gate("payment", () => !isCompanyPaid),
      // Locked when Split is on — the owner's per-attendee share
      // is the source of truth in that mode and this field
      // mirrors it via `setValue("reimbursableAmount", …)`. We
      // read from a ref so the callback identity stays stable
      // and the schema/definition don't rebuild (which would
      // trigger the F0AiChat registry loop the f0-prototype
      // skill warns about). The field re-evaluates `disabled`
      // every time RHF re-renders it — and we call `setValue`
      // on it the moment split toggles, so the lock flips in
      // the same frame as the value update.
      disabled: () => splitEnabledRef.current,
    }),
    reimbursableCurrency: f0FormField.select({
      label: "Reimbursable currency",
      section: "payment",
      optional: true,
      placeholder: "Currency",
      renderIf: gate("payment", () => !isCompanyPaid),
      options: CURRENCIES.map((c) => ({ value: c, label: c })),
    }),
    // Foreign-currency info alert. Only rendered when the row
    // carries a `foreignCurrency` overlay (e.g. a USD airline
    // charge converted to EUR via the ECB daily rate). Mirrors
    // the per-diem rate alert pattern: bold "Total in <base>"
    // headline + a description that surfaces the original
    // amount, the rate, the rate date, and the source.
    //
    // Implemented as a `fieldType: "custom"` field whose schema
    // is `z.undefined().optional()` — there's no editable value,
    // it's display-only. Sitting in the schema (rather than
    // outside `F0Form`) keeps it inline with the form layout,
    // pinned directly below the reimbursable amount, and lets
    // it inherit the same `section: "payment"` grouping. When
    // `foreignCurrency` is absent the renderer returns `null`
    // and the field is invisible.
    foreignCurrencyAlert: f0FormField(z.undefined().optional(), {
      label: "",
      section: "payment",
      fieldType: "custom",
      renderIf: gate("payment"),
      render: () => {
        if (!foreignCurrency) return null
        const {
          originalAmount,
          originalCurrency,
          exchangeRate,
          exchangeRateDate,
          exchangeRateSource,
          exchangeRateSourceUrl,
        } = foreignCurrency
        const eurAmount = (originalAmount * exchangeRate).toFixed(2)
        const original = originalAmount.toFixed(2)
        // Short date: "14 May 2026" (en-GB, abbreviated month).
        const rateDate = new Date(
          exchangeRateDate + "T00:00:00Z"
        ).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        // Symbol for the original currency. Falls back to nothing
        // when unknown — the ISO code is always emitted so the
        // value stays unambiguous.
        const currencySymbol: Record<string, string> = {
          USD: "$",
          GBP: "£",
          CHF: "CHF ",
          JPY: "¥",
        }
        const symbol = currencySymbol[originalCurrency] ?? ""
        // Two source-attribution treatments:
        //
        //   1. URL present → render as F0Alert's native `link`
        //      ("Source" label). Audit-friendly — the user can
        //      verify the rate independently. Description drops
        //      the source name to stay short; the link itself
        //      carries the attribution.
        //
        //   2. No URL → fold the source name into the
        //      description as plain text. Use when no canonical
        //      page exists or the provenance is informal.
        //
        // Middle dots (· U+00B7) carry "and" between the math
        // and the date without spending a word. Everything is
        // visible at once — no hover, no tap — so the alert
        // works on mobile and for screen readers.
        const mathAndDate = `${symbol}${original} ${originalCurrency} × €${exchangeRate.toFixed(2)} · ${rateDate}`
        if (exchangeRateSourceUrl) {
          return (
            <F0Alert
              variant="info"
              title={`Total in EUR: €${eurAmount}`}
              description={mathAndDate}
              link={{ label: "Source", href: exchangeRateSourceUrl }}
            />
          )
        }
        return (
          <F0Alert
            variant="info"
            title={`Total in EUR: €${eurAmount}`}
            description={`${mathAndDate} · ${exchangeRateSource}`}
          />
        )
      },
    }),
    // Attendees block — Participants chip field + externals-count
    // field, rendered as one custom field anchored at the top of
    // the `attendees` section (above the Payment block). Bundling
    // the two fields in a single custom field keeps declaration
    // order in sync with render order without juggling schema-
    // order assumptions across the consumers.
    attendeesBlock: f0FormField(z.undefined().optional(), {
      label: "",
      section: "attendees",
      fieldType: "custom",
      render: () => (showParticipants ? <AttendeesBlockConsumer /> : null),
    }),
    // Split toggle + breakdown sit directly below the attendees
    // chips inside the `attendees` section. The breakdown is what
    // produces the per-attendee reimbursable subtotals; placing it
    // ABOVE the Payment block lets the Reimbursable amount field
    // there read as the natural roll-up of what was split here.
    splitToggle: f0FormField(z.undefined().optional(), {
      label: "",
      section: "attendees",
      fieldType: "custom",
      // Hidden when company-paid: you only split a receipt across
      // people when one person personally fronted the money.
      render: () =>
        showParticipants && !isCompanyPaid ? <SplitToggleConsumer /> : null,
    }),
    splitBreakdown: f0FormField(z.undefined().optional(), {
      label: "",
      section: "attendees",
      fieldType: "custom",
      render: () =>
        showParticipants && !isCompanyPaid ? <SplitBreakdownConsumer /> : null,
    }),
    // ── Tax (collapsible) ─────────────────────────────────────────
    // Repeatable tax rows live in a self-contained widget with local
    // state; the schema value stays undefined.
    taxRows: f0FormField(z.undefined().optional(), {
      label: "",
      section: "tax",
      fieldType: "custom",
      renderIf: gate("tax"),
      render: () => <TaxRowsField />,
    }),
    // ── Budget and project (collapsible unless Project is gated) ──
    budgets: f0FormField.select({
      label: "Budgets",
      section: "budget",
      optional: true,
      placeholder: "Select option",
      renderIf: gate("budget"),
      options: budgets.map((b) => ({
        value: b.id,
        label: `${b.name} (${b.code})`,
      })),
    }),
    project: projectRequired
      ? f0FormField(
          z.enum(projects.map((p) => p.id) as [string, ...string[]]),
          {
            label: "Project",
            section: "budget",
            fieldType: "custom",
            placeholder: "Select option",
            renderIf: gate("budget"),
            render: (p: CustomFieldRenderProps<string, undefined>) => (
              <MockProjectField
                name={p.id}
                label={p.label ?? "Project"}
                required={p.required ?? true}
                value={p.value}
                onChange={(v) => p.onChange(v)}
                onBlur={p.onBlur}
                error={p.error}
                placeholder={p.placeholder}
              />
            ),
          }
        )
      : f0FormField(
          z
            .enum(projects.map((p) => p.id) as [string, ...string[]])
            .optional(),
          {
            label: "Project",
            section: "budget",
            fieldType: "custom",
            placeholder: "Select option",
            renderIf: gate("budget"),
            render: (p: CustomFieldRenderProps<string | undefined, undefined>) => (
              <MockProjectField
                name={p.id}
                label={p.label ?? "Project"}
                required={p.required ?? false}
                value={p.value}
                onChange={(v) => p.onChange(v)}
                onBlur={p.onBlur}
                error={p.error}
                placeholder={p.placeholder}
              />
            ),
          }
        ),
    // ── Cost centers (collapsible) ────────────────────────────────
    costCentersField: f0FormField(z.undefined().optional(), {
      label: "",
      section: "costcenters",
      fieldType: "custom",
      renderIf: gate("costcenters"),
      render: () => <CostCentersField />,
    }),
    // ── Additional information (always open — Description) ─────────
    description: descriptionRequired
      ? f0FormField.textarea({
          label: "Description",
          section: "additional",
          placeholder: "Add any extra information",
        })
      : f0FormField.textarea({
          label: "Description",
          section: "additional",
          optional: true,
          placeholder: "Add any extra information",
        }),
    internalReference: f0FormField.text({
      label: "Internal reference",
      section: "additional",
      optional: true,
      placeholder: "Add an internal reference",
    }),
    // ── Files (collapsible) ───────────────────────────────────────
    filesField: f0FormField(z.undefined().optional(), {
      label: "",
      section: "files",
      fieldType: "custom",
      renderIf: gate("files"),
      render: () => <FilesField />,
    }),
  })
}

export type SubmitterFormData = {
  documentType?: (typeof DOCUMENT_TYPES)[number]
  category?: ExpenseCategory
  subcategory?: string
  documentDate?: Date
  receiptAmount?: number
  documentCurrency?: (typeof CURRENCIES)[number]
  documentNumber?: string
  vendorName?: string
  vendorTIN?: string
  reimbursable?: string
  paymentMethod?: string
  reimbursableAmount?: number
  reimbursableCurrency?: (typeof CURRENCIES)[number]
  foreignCurrencyAlert?: undefined
  taxRows?: undefined
  attendeesBlock?: undefined
  splitToggle?: undefined
  splitBreakdown?: undefined
  budgets?: string
  project?: string
  costCentersField?: undefined
  description?: string
  internalReference?: string
  filesField?: undefined
  /**
   * Participants & split — managed outside RHF and merged into
   * `SubmitterFormData` on submit by the form component. `null`
   * means "no split declared" (any non-meal expense, or a meal
   * where the user left the toggle off).
   */
  participants?: Participant[]
  split?: ExpenseSplit | null
}

export function SubmitterEditForm(props: {
  /** The row being edited — used for default values. */
  row: SpendingRow
  /** Persist callback. */
  onSave: (data: SubmitterFormData) => void
  /** Submit button label. Currently unused — the form's internal
   *  submit button is hidden (the page header Save is the only
   *  Save). Kept for callers that pass it. */
  submitLabel: string
  /**
   * Fields the row is missing — flips them from optional to
   *  required and triggers validation on mount so the user sees
   *  the error state immediately. Empty/undefined → schema matches
   *  the original (project + description optional).
   */
  requiredFields?: ReadonlyArray<RequiredField>
  /**
   * External handle to the form. The page uses this to call
   * `submit()` from the header's Save button (which now goes
   * through F0Form's validation pipeline rather than just exiting
   * edit mode unconditionally). Optional — when absent, an
   * internal `useF0Form` ref is used and the form behaves as
   * before.
   */
  externalFormRef?: MutableRefObject<F0FormRef | null>
  /**
   * Fires whenever the form's validity flips. Used by the page
   * header to enable/disable the Save action — Save stays
   * disabled until every required field validates (including
   * the gate fields the user was sent here to fill in).
   *
   * Reads `hasErrors` from the form's own state callback (via
   * `useF0Form`); we don't have to invent a subscription path.
   */
  onValidityChange?: (hasErrors: boolean) => void
}) {
  // Internal ref as a fallback when no external ref is provided.
  // Using `useF0Form` keeps the existing AI-chat state-callback
  // wiring intact; F0Form's `formRef` prop happily accepts either
  // shape.
  const { formRef: internalFormRef, hasErrors } = useF0Form()
  const formRef = props.externalFormRef ?? internalFormRef

  // Forward validity changes to the page. Effect (not a render-
  // phase callback) so we never call setState during render in
  // the parent. The dependency on `props.onValidityChange` is
  // intentionally shallow — callers should memoize the callback
  // if they care about identity stability; we ref-deref just to
  // satisfy the linter without forcing useCallback on the parent.
  const onValidityChangeRef = useRef(props.onValidityChange)
  useEffect(() => {
    onValidityChangeRef.current = props.onValidityChange
  }, [props.onValidityChange])
  useEffect(() => {
    onValidityChangeRef.current?.(hasErrors)
  }, [hasErrors])

  // Trigger validation on mount so required-but-empty fields
  // (e.g. an unfilled `description` on a draft) report errors
  // immediately. Without this, RHF's default "untouched fields are
  // valid" semantic means `hasErrors` stays `false` until the user
  // first interacts with a field — and the page header's Save
  // button would be enabled out of the gate. The Promise resolves
  // to a validity boolean; we don't need it directly, the state
  // callback will already have updated `hasErrors`.
  useEffect(() => {
    // Wait one tick so the form ref has attached and its internal
    // state callback is wired up.
    const id = requestAnimationFrame(() => {
      formRef.current?.trigger().catch(() => {
        // Ignore — trigger rejects on programmer error (no form
        // mounted), which can't happen here in practice.
      })
    })
    return () => cancelAnimationFrame(id)
    // Intentionally empty deps — mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Refs hold the latest callback / label without re-feeding
  // `useF0FormDefinition`. See ControllingForm for the F0AiChat
  // registration loop this avoids.
  const onSaveRef = useRef(props.onSave)
  useEffect(() => {
    onSaveRef.current = props.onSave
  }, [props.onSave])

  // -- Participants & split state --------------------------------
  // Held in React state (outside RHF) because the breakdown needs
  // sibling form values + rich nested mutation. Initialized from
  // the row's persisted state when available. The form's onSave
  // merges this state into the SubmitterFormData payload.
  //
  // Owner is the CURRENT VIEWER — whoever the sidebar shows as
  // logged in. Default is Hellen (CURRENT_USER_ID). Prototypes
  // can push a viewer override (e.g. Alan when his Greystone
  // Brunch House expense is opened) and this form re-reads the
  // active viewer so the "· you" chip + avatar match.
  const { employeeId: viewerEmployeeId } = useViewer()
  const ownerEmployeeId = useMemo(
    () => props.row.ownerEmployeeId ?? viewerEmployeeId,
    [props.row.ownerEmployeeId, viewerEmployeeId]
  )

  const [participants, setParticipants] = useState<Participant[]>(
    () => props.row.participants ?? []
  )
  const [splitEnabled, setSplitEnabled] = useState<boolean>(
    () => Boolean(props.row.split)
  )
  // Declared early so the schema memo (which closes over this
  // ref via `disabled: () => splitEnabledRef.current`) can read
  // a defined value. A later `useEffect` mirrors the React
  // state into the ref so it always reflects the latest toggle.
  const splitEnabledRef = useRef(splitEnabled)
  const [splitMode, setSplitMode] = useState<SplitMode>(
    () => props.row.split?.mode ?? "equal"
  )
  const [splitShares, setSplitShares] = useState<ExpenseSplit["shares"]>(
    () => props.row.split?.shares ?? []
  )

  // When participants change while split is on, recompute the
  // shares so the breakdown stays in sync (R5).
  //
  // Source of truth for the total being split is ALWAYS the
  // receipt total (`props.row.amount`, which seeds the
  // `receiptAmount` form field) — NOT the reimbursable amount.
  // The two happen to be equal in most fixtures but they are
  // semantically different: receipt total = what the merchant
  // charged; reimbursable amount = what the company owes back.
  // Splitting against reimbursable would understate everyone's
  // share whenever the company is only paying back a portion of
  // the receipt (per-diem caps, policy adjustments, etc.).
  const receiptTotalForRecompute = props.row.amount
  useEffect(() => {
    if (!splitEnabled) return
    setSplitShares((prev) =>
      recomputeShares({
        mode: splitMode,
        receiptTotal: receiptTotalForRecompute,
        participants,
        previousShares: prev,
      })
    )
  }, [participants, splitMode, splitEnabled, receiptTotalForRecompute])

  // Mirror the owner's split share into the form's
  // `reimbursableAmount` field. The split section is the
  // canonical place to declare per-attendee math; the
  // reimbursable amount below has to follow, otherwise the user
  // would see "Split: my share €14.60" alongside a stale
  // "Reimbursable amount €58.40" and silently submit the larger
  // figure. Toggling Split off restores the full receipt total
  // so the field doesn't strand at the (now meaningless) owner
  // share.
  //
  // Owner share is **always derived** (`receiptTotal - sum(others)`)
  // and never stored in `splitShares`. Looking it up in the array
  // returns undefined and the mirror would bail — using the same
  // helper SplitBreakdown uses keeps the two views in lockstep.
  useEffect(() => {
    if (!formRef.current) return
    if (splitEnabled) {
      if (splitShares.length === 0) return
      const ownerAmount = ownerImplicitShare(
        receiptTotalForRecompute,
        splitShares
      )
      formRef.current.setValue("reimbursableAmount", ownerAmount, {
        shouldDirty: true,
        shouldValidate: true,
      })
    } else {
      // Only restore when the field is currently showing a
      // partial share — if the user manually edited reimbursable
      // before toggling split on, we'd prefer not to clobber.
      // Heuristic: only restore when the field equals the last
      // ownerShare-amount we wrote. Cheap proxy: always restore
      // to the receipt total on toggle-off; if the user wants a
      // custom amount they can re-edit. (The reimbursable field
      // is editable.)
      formRef.current.setValue("reimbursableAmount", receiptTotalForRecompute, {
        shouldDirty: true,
        shouldValidate: true,
      })
    }
  }, [splitEnabled, splitShares, receiptTotalForRecompute, formRef])

  // Bumped by the empty-state CTA in the split breakdown to ask
  // the Participants field to scroll into view + pulse a blue
  // focus ring. We increment a counter so repeated taps re-fire
  // the effect even when the field is already on screen.
  const [participantsPulse, setParticipantsPulse] = useState(0)
  const requestFocusParticipants = useCallback(
    () => setParticipantsPulse((n) => n + 1),
    []
  )

  // Context value — memoized so the consumer doesn't re-render
  // unnecessarily when an unrelated parent state flip lands.
  const isCompanyPaidForCtx = props.row.paymentMethod === "factorial-card"
  const participantsContextValue = useMemo<ParticipantsContextValue>(
    () => ({
      ownerEmployeeId,
      participants,
      splitEnabled,
      splitMode,
      splitShares,
      receiptTotal: receiptTotalForRecompute,
      onParticipantsChange: setParticipants,
      onSplitEnabledChange: setSplitEnabled,
      onSplitModeChange: setSplitMode,
      onSplitSharesChange: setSplitShares,
      participantsPulse,
      requestFocusParticipants,
      isCompanyPaid: isCompanyPaidForCtx,
      expenseId: props.row.id,
    }),
    [
      ownerEmployeeId,
      participants,
      splitEnabled,
      splitMode,
      splitShares,
      receiptTotalForRecompute,
      participantsPulse,
      requestFocusParticipants,
      props.row.id,
    ]
  )

  // Memo on the missing-fields set so the schema (and definition)
  // is stable when the prop reference changes but the contents
  // don't. Uses a sorted-joined key — small list, fast comparison.
  const requiredKey = useMemo(
    () => (props.requiredFields ?? []).slice().sort().join("|"),
    [props.requiredFields]
  )
  const requiredSet = useMemo(
    () => new Set<RequiredField>(props.requiredFields ?? []),
    [requiredKey] // eslint-disable-line react-hooks/exhaustive-deps
  )

  // ── Section collapse ────────────────────────────────────────────
  // Per the rule confirmed with the designer: a section is
  // collapsible (and starts collapsed) only when ALL of its fields
  // are optional. If even one field is mandatory the section is
  // always open and gets no toggle. Payment / Tax / Cost centers /
  // Files are all-optional; "Budget and project" is collapsible only
  // when Project isn't gated-required for this row.
  const collapsibleSections = useMemo(() => {
    const set = new Set<string>(["payment", "tax", "costcenters", "files"])
    if (!requiredSet.has("project")) set.add("budget")
    return set
  }, [requiredSet])

  // Expand state lives in a ref (read live by every field's collapse
  // `gate` in the schema, so toggling never rebuilds the schema —
  // only the sections config + definition, which is discrete per
  // click and safe for the AI form registry). An empty map means all
  // collapsible sections start collapsed. `expandTick` forces the
  // re-render + sections rebuild that flips the Show/Hide button and
  // re-evaluates the field gates.
  const expandedRef = useRef<Record<string, boolean>>({})
  const [expandTick, setExpandTick] = useState(0)
  const toggleSection = useCallback((id: string) => {
    expandedRef.current = {
      ...expandedRef.current,
      [id]: !expandedRef.current[id],
    }
    setExpandTick((n) => n + 1)
  }, [])

  const submitterSchema = useMemo(
    () =>
      buildSchema(
        requiredSet,
        props.row.foreignCurrency,
        props.row.description as ExpenseCategory,
        props.row.paymentMethod,
        splitEnabledRef,
        collapsibleSections,
        expandedRef
      ),
    [
      requiredSet,
      props.row.foreignCurrency,
      props.row.description,
      props.row.paymentMethod,
      collapsibleSections,
    ]
  )

  const defaultValues = useMemo(
    () => {
      const isCompanyPaid = props.row.paymentMethod === "factorial-card"
      return {
        // Map the row's known fields onto the form's expected shape.
        // The submitter form has more fields than the row carries, so
        // most start blank.
        documentType: "Receipt" as const,
        category: props.row.description as ExpenseCategory,
        subcategory: undefined,
        documentDate: new Date(props.row.date + "T00:00:00Z"),
        receiptAmount: props.row.amount,
        documentCurrency: "EUR" as const,
        // Document number + Vendor TIN are required in the real form.
        // Seed deterministic mock values from the row id so the draft
        // reads as already-filled (matching the "ready to send"
        // summary) instead of opening with red required errors.
        documentNumber: mockDigits(props.row.id, 11),
        vendorName: props.row.name,
        vendorTIN: `B${mockDigits(`${props.row.id}-tin`, 8)}`,
        reimbursable: (props.row.reimbursable ?? !isCompanyPaid)
          ? "reimbursable"
          : "non-reimbursable",
        paymentMethod: props.row.paymentMethod ?? "personal-card",
        reimbursableAmount: isCompanyPaid ? 0 : props.row.amount,
        reimbursableCurrency: "EUR" as const,
        foreignCurrencyAlert: undefined,
        taxRows: undefined,
        attendeesBlock: undefined,
        splitToggle: undefined,
        splitBreakdown: undefined,
        budgets: undefined,
        // For required-fields gating to be visible to the user, the
        // missing fields MUST start empty — otherwise the validator
        // sees the seeded default ("first project id" /
        // "controlling.description fallback") and reports "no
        // errors", defeating the demo. Override defaults to undefined
        // for any field flagged as required-but-missing.
        project: requiredSet.has("project")
          ? undefined
          : props.row.controlling?.project,
        costCentersField: undefined,
        description: requiredSet.has("description")
          ? ""
          : props.row.controlling?.description ?? "",
        internalReference: "",
        filesField: undefined,
      }
    },
    [props.row, requiredSet]
  )

  // Refs to current participants/split state — used inside the
  // stable onSubmit closure so we can merge the latest values
  // into the SubmitterFormData payload without re-creating
  // onSubmit (which would invalidate the form definition and
  // trigger the F0AiChat registry loop).
  const participantsRef = useRef(participants)
  // `splitEnabledRef` is declared up top (next to its useState)
  // so the form schema can read it without forward-reference issues.
  const splitModeRef = useRef(splitMode)
  const splitSharesRef = useRef(splitShares)
  const categoryRef = useRef(props.row.description as ExpenseCategory)
  useEffect(() => {
    participantsRef.current = participants
  }, [participants])
  useEffect(() => {
    splitEnabledRef.current = splitEnabled
  }, [splitEnabled])
  useEffect(() => {
    splitModeRef.current = splitMode
  }, [splitMode])
  useEffect(() => {
    splitSharesRef.current = splitShares
  }, [splitShares])

  const onSubmit = useMemo(
    () =>
      async ({ data }: { data: unknown }) => {
        const base = data as SubmitterFormData
        const merged: SubmitterFormData = {
          ...base,
          // Only persist participants on participant-bearing
          // categories — if the user changed category to non-Meals
          // mid-edit, drop any orphaned participants.
          participants: isParticipantBearingCategory(categoryRef.current)
            ? participantsRef.current
            : undefined,
          split:
            splitEnabledRef.current && splitSharesRef.current.length > 0
              ? {
                  mode: splitModeRef.current,
                  shares: splitSharesRef.current,
                }
              : null,
        }
        onSaveRef.current(merged)
        // Snapshot what was submitted so downstream consumers (e.g.
        // the Pre-fill banner on a sibling expense) can hydrate
        // their own form from this submission. Only meaningful for
        // participant-bearing categories — for non-Meals there's
        // nothing structural to pre-fill.
        if (isParticipantBearingCategory(categoryRef.current)) {
          recordSubmission({
            expenseId: props.row.id,
            submitterEmployeeId: ownerEmployeeId,
            participants: participantsRef.current,
            split: merged.split ?? null,
            savedAt: new Date().toISOString(),
          })
        }
        return { success: true as const, message: "Expense updated." }
      },
    // ownerEmployeeId/props.row.id are stable for the lifetime of
    // a given detail page (rows don't morph in place); safe to
    // omit from deps without invalidating the F0Form definition.
    []
  )

  // Hide the form's built-in submit button. The page header's Save
  // is the only Save; it calls `formRef.current.submit()` which
  // runs validation through this form's resolver. Without
  // `hideSubmitButton: true`, F0Form renders its own action bar at
  // the bottom of the form, which would conflict with the header
  // Save and double-submit on click.
  const submitConfig = useMemo(
    () => ({ label: "Save", hideSubmitButton: true as const }),
    []
  )

  // Build the per-section config:
  //  1. Drop the `attendees` section for non-participant categories
  //     (e.g. Travel) — its fields render null, so without this the
  //     section header would show empty.
  //  2. Attach a Show/Hide `action` button (the canonical f0 outline
  //     button + chevron, right-aligned in the header by
  //     SectionRenderer) to every collapsible section. The label +
  //     chevron reflect the live expand state; clicking toggles it.
  //
  // Rebuilt on `expandTick` so the button label/icon flip and the
  // field gates re-evaluate. The schema itself is untouched by
  // toggling (see the collapse note above), keeping the AI form
  // registry stable.
  const effectiveSections = useMemo(() => {
    const showParticipants = isParticipantBearingCategory(
      props.row.description as ExpenseCategory
    )
    const base: Record<string, SectionConfig> = { ...sections }
    if (!showParticipants) delete base.attendees

    const withActions: Record<string, SectionConfig> = {}
    for (const [id, cfg] of Object.entries(base)) {
      if (collapsibleSections.has(id)) {
        const expanded = expandedRef.current[id] === true
        withActions[id] = {
          ...cfg,
          action: {
            label: expanded ? "Hide" : "Show",
            icon: expanded ? ChevronUp : ChevronDown,
            onClick: () => toggleSection(id),
          },
        }
      } else {
        withActions[id] = cfg
      }
    }
    return withActions
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.row.description, collapsibleSections, toggleSection, expandTick])

  const formDefinition = useF0FormDefinition({
    name: "expense-submitter",
    schema: submitterSchema,
    sections: effectiveSections,
    defaultValues,
    submitConfig,
    onSubmit,
    // Validate per keystroke (instead of the default "on-blur").
    // Two consequences both wanted for the gating UX:
    //   1. Errors render IMMEDIATELY when we call
    //      `formRef.current.trigger(field)` on mount — the error
    //      state isn't blocked behind an initial blur.
    //   2. Once a field has an error, typing one character
    //      re-runs the resolver; the error vanishes the moment
    //      the value satisfies the schema. This is what fixes
    //      "the red border / message should disappear when I
    //      start writing the description".
    errorTriggerMode: "on-change",
  })

  // Validation kick on mount when the row has missing required
  // fields. Triggering a specific field name produces a real RHF
  // error, which `useErrorNavigation` picks up and auto-scrolls to
  // (smooth scroll + focus + brief highlight animation).
  //
  // Two-frame delay: F0Form mounts on the first frame; on the
  // second the field anchors are in the DOM. `requestAnimationFrame`
  // twice is more reliable than a fixed `setTimeout(0)` across
  // browsers under load.
  const requiredList = props.requiredFields
  useEffect(() => {
    if (!requiredList || requiredList.length === 0) return
    const ref = formRef
    let cancelled = false
    let outerId = 0
    let innerId = 0
    outerId = requestAnimationFrame(() => {
      innerId = requestAnimationFrame(() => {
        if (cancelled) return
        // Trigger validation on each missing field. RHF will mark
        // them as errored; useErrorNavigation will pick the first
        // one and scroll/focus it.
        for (const f of requiredList) {
          ref.current?.trigger(f)
        }
      })
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(outerId)
      cancelAnimationFrame(innerId)
    }
  }, [requiredList, formRef])

  return (
    <ParticipantsContext.Provider value={participantsContextValue}>
      <F0Form formRef={formRef} formDefinition={formDefinition} />
    </ParticipantsContext.Provider>
  )
}
