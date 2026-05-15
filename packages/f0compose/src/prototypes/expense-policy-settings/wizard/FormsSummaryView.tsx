import {
  F0Box,
  F0Card,
  F0Icon,
  F0Text,
} from "@factorialco/f0-react"
import {
  CheckDouble,
  LockLocked,
  Question,
} from "@factorialco/f0-react/icons/app"

import type { FieldRow } from "../forms/fields"
import type { FormSubStepId, StepStatus } from "./useWizardState"

/**
 * Landing view for the Expense forms step (handoff §2.3).
 *
 * Three stacked `F0Card`s (Regular, Per diem, Mileage), each with
 * three rows describing the form's field configuration:
 *
 *  - Fields always shown  (lock icon)
 *  - Required             (double-check icon)
 *  - Optional             (question-mark icon)
 *
 * Each row is laid out as `[icon] [**Label:** values] [+N chip]`.
 * The label is rendered via F0Text's markdown bolding (`**...**`)
 * inline with the comma-separated value list, matching the
 * designer's reference (Desktop/Card.png).
 *
 * Why NOT `F0Card.metadata[]`: the typed metadata slot renders
 * `[icon] [value]` only — the metadata `label` is a tooltip on the
 * icon, not inline copy. The reference layout requires the label
 * to appear inline with the values in medium-weight type, which
 * the metadata slot can't produce. We render the rows as the card's
 * `children` instead, keeping the canonical card frame for free
 * (hover, click overlay, title typography) while owning the body.
 *
 * Inline cap: each row shows up to INLINE_CAP labels comma-joined.
 * Overflow is rendered as a small grey "+N" `F0Box` pill at the end
 * of the row (Chip's variants don't include a neutral grey badge,
 * and a styled F0Box keeps us inside the F0 primitive surface).
 *
 * Locked cards omit `onClick`: the F0Card's overlay link won't
 * render, so the card stays passive. The wizard's chat narrative
 * carries the explanation of why the user can't proceed yet.
 *
 * Slice 1 caveat: Per diem and Mileage don't yet have their own
 * field sources (parameterized `useExpenseFormSource(formType)` is
 * on the slice-2 list). Both render hard-coded preview summaries.
 */

export type FormSummary = {
  subStepId: FormSubStepId
  title: string
  alwaysShown: string[]
  required: string[]
  optional: string[]
}

export function FormsSummaryView(props: {
  regularRows: FieldRow[]
  status: (id: FormSubStepId) => StepStatus
  onDrill: (subStepId: FormSubStepId) => void
}) {
  const summaries: FormSummary[] = [
    buildRegularSummary(props.regularRows),
    PER_DIEM_SUMMARY,
    MILEAGE_SUMMARY,
  ]

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      {/* Section subtitle. The H1 ("Expense forms") is already
          rendered by the breadcrumb's current-page item above —
          keeping a second `<F0Heading content="Expense forms">`
          here would be a literal duplicate. We render only the
          description, kept short. The `2xl` parent gap puts a
          generous breathing space between this intro block and
          the card list below. */}
      <F0Text
        content="Configure the three expense form types employees fill in."
        variant="description"
      />

      <F0Box display="flex" flexDirection="column" gap="md">
        {summaries.map((summary) => {
          const status = props.status(summary.subStepId)
          const isLocked = status === "pending"
          return (
            <F0Card
              key={summary.subStepId}
              title={summary.title}
              onClick={
                isLocked
                  ? undefined
                  : () => props.onDrill(summary.subStepId)
              }
            >
              <SummaryRows summary={summary} />
            </F0Card>
          )
        })}
      </F0Box>
    </F0Box>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Row renderer — three [icon] [**label:** values] [+N chip] rows
 * inside the card's children slot.
 * ──────────────────────────────────────────────────────────────────── */

function SummaryRows({ summary }: { summary: FormSummary }) {
  return (
    // gap="md" — designer asked for breathing room between rows;
    // tighter values (xs/sm) read as a dense table rather than a
    // scannable summary.
    <F0Box display="flex" flexDirection="column" gap="md">
      <SummaryRow
        icon={LockLocked}
        label="Fields always shown"
        items={summary.alwaysShown}
      />
      <SummaryRow
        icon={CheckDouble}
        label="Required"
        items={summary.required}
      />
      <SummaryRow
        icon={Question}
        label="Optional"
        items={summary.optional}
      />
    </F0Box>
  )
}

const INLINE_CAP = 3

function SummaryRow({
  icon,
  label,
  items,
}: {
  // F0Icon's `icon` prop is the same IconType used everywhere else;
  // we don't import the type explicitly to avoid the unresolved-type
  // export issue we hit earlier with CardMetadata. The component
  // accepts the icon directly.
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  label: string
  items: string[]
}) {
  const visible = items.slice(0, INLINE_CAP)
  const overflow = items.length - visible.length
  const valueText = items.length === 0 ? "—" : visible.join(", ")

  // Single-line row: [icon] [**Label:**] [values] [+N].
  //
  // Designer feedback: rows should NOT span the full card width, and
  // the `+N` chip MUST sit immediately after the value text (not
  // right-aligned). To achieve that, the values F0Box does NOT use
  // `grow` — it sizes to its content. With `INLINE_CAP = 3` the
  // visible portion is short enough to fit on one line for any
  // realistic field label (≈25-30 chars max), so we don't actually
  // need ellipsis truncation; the cap is the truncation. The chip
  // then naturally butts right against the last value.
  //
  // We keep `flexWrap="nowrap"` and `minWidth="0"` as defensive
  // measures — if a future field has a very long label the row will
  // still refuse to wrap (it would just overflow horizontally, which
  // is preferable to a 2-line row).
  //
  // We split label + values into two F0Texts because F0Text disables
  // markdown when `ellipsis` is set (see
  // `packages/react/src/ui/Text/Text.tsx`). Even though we removed
  // `ellipsis` here, keeping them split lets us add ellipsis back
  // cheaply if a future row needs it without re-restructuring.
  return (
    <F0Box display="flex" alignItems="center" gap="sm" flexWrap="nowrap">
      <F0Icon icon={icon} color="default" size="md" />
      <F0Text content={`**${label}:**`} variant="body" />
      <F0Text content={valueText} variant="body" />
      {overflow > 0 && <OverflowPill count={overflow} />}
    </F0Box>
  )
}

/* Tiny grey "+N" pill rendered next to the value list when the
 * inline cap is exceeded. Uses an F0Box with neutral tokens to stay
 * inside the F0 primitive surface (Chip's variants are
 * default/selected only — no neutral badge variant). */
function OverflowPill({ count }: { count: number }) {
  return (
    <F0Box
      display="inline-flex"
      alignItems="center"
      paddingX="xs"
      paddingY="xs"
      borderRadius="md"
      background="secondary"
    >
      <F0Text content={`+${count}`} variant="small" />
    </F0Box>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Summary builders — derive the 3 lines from real field data
 * (Regular) or hardcoded fixtures (Per diem / Mileage, slice 1).
 * ──────────────────────────────────────────────────────────────────── */

function buildRegularSummary(rows: FieldRow[]): FormSummary {
  const alwaysShown: string[] = []
  const required: string[] = []
  const optional: string[] = []

  for (const row of rows) {
    if (row.kind === "locked") {
      // Locked + required → always shown (system requirement).
      // Locked + optional → still always shown, but logically optional
      // (e.g. Budgets, Documents). We bucket them under "Optional"
      // because the admin can't change requirement, but a downstream
      // form would still treat them as optional inputs.
      if (row.requirement === "required") {
        alwaysShown.push(row.label)
      } else {
        optional.push(row.label)
      }
      continue
    }
    // editable
    if (!row.visible) continue
    if (row.requirement === "required") required.push(row.label)
    else optional.push(row.label)
  }

  return {
    subStepId: "regular",
    title: "Regular expenses",
    alwaysShown,
    required,
    optional,
  }
}

/** Slice-1 fixture. Replace with `buildSummary(useExpenseFormsSource("per-diem"))` in slice 2. */
const PER_DIEM_SUMMARY: FormSummary = {
  subStepId: "per-diem",
  title: "Per diem",
  alwaysShown: ["Document date", "Trip destination", "Number of days"],
  required: ["Project"],
  optional: ["Description", "Internal reference"],
}

/** Slice-1 fixture. Replace with `buildSummary(useExpenseFormsSource("mileage"))` in slice 2. */
const MILEAGE_SUMMARY: FormSummary = {
  subStepId: "mileage",
  title: "Mileage",
  alwaysShown: ["Document date", "Distance", "From / To"],
  required: ["Vehicle type", "Project"],
  optional: ["Description", "Toll receipts"],
}
