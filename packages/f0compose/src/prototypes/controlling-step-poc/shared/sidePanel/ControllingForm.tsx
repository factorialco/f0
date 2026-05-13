import {
  F0Form,
  f0FormField,
  useF0Form,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import { useEffect, useMemo, useRef } from "react"
import { z } from "zod"

import {
  costCenters,
  projects,
  subcategoriesByCategory,
  vatRates,
  type ControllingFields,
  type ExpenseCategory,
} from "@/fixtures"

/**
 * The controlling (coding) form rendered inside the expense side panel
 * when an expense is opened from `Manage > Pending Controlling`
 * (PSPEC-spending-pending-controlling, BR-001 / BR-002 / BR-009).
 *
 * Schema, sections and default-builder are at module scope (truly
 * static). Hooks live INSIDE the component so they're paired with the
 * `<F0Form>` they produce — registering the form in a parent that
 * doesn't also render it loops the AI chat panel
 * (see f0-prototype skill, "form co-creation").
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

// Build a single flat subcategory list — every subcategory across every
// category. The runtime form doesn't enforce category→subcategory
// dependency (EDGE-001 acknowledged); finance picks freely.
const ALL_SUBCATEGORIES = Array.from(
  new Set(
    Object.values(subcategoriesByCategory).flatMap((list) => list)
  )
)

const controllingSchema = z.object({
  category: f0FormField.select({
    label: "Category",
    section: "classification",
    row: "cat-sub",
    optional: true,
    placeholder: "Select a category",
    options: ALL_CATEGORIES.map((c) => ({ value: c, label: c })),
  }),
  subcategory: f0FormField.select({
    label: "Subcategory",
    section: "classification",
    row: "cat-sub",
    optional: true,
    placeholder: "Select a subcategory",
    options: ALL_SUBCATEGORIES.map((s) => ({ value: s, label: s })),
  }),
  costCenter: f0FormField.select({
    label: "Cost center",
    section: "allocation",
    row: "cost-proj",
    optional: true,
    placeholder: "Select a cost center",
    options: costCenters.map((c) => ({
      value: c.id,
      label: `${c.name} (${c.code})`,
    })),
  }),
  project: f0FormField.select({
    label: "Project",
    section: "allocation",
    row: "cost-proj",
    optional: true,
    placeholder: "Select a project",
    options: projects.map((p) => ({
      value: p.id,
      label: `${p.name} (${p.code})`,
    })),
  }),
  vatRate: f0FormField.select({
    label: "VAT rate",
    section: "tax",
    optional: true,
    placeholder: "Select a VAT rate",
    options: vatRates.map((v) => ({ value: v.id, label: v.label })),
  }),
  description: f0FormField.textarea({
    label: "Description",
    section: "notes",
    optional: true,
    placeholder: "Accounting note (optional)",
  }),
  // BISECT: tags multiSelect temporarily removed to test whether the
  // multiSelect field is what destabilizes the form registration and
  // loops the AI chat panel. Re-add once diagnosed.
  //
  // Outcome (2026-05-11): keeping `tags` removed because adding it back
  // reproduces "Maximum update depth exceeded" inside F0AiChat
  // (`Dle` / Array.map cascade in F0AiChat-CqAcgo3K.js) the moment the
  // user opens the multiSelect dropdown — even with module-scope
  // schema/sections, stable refs, memoized submit/defaults, and the
  // panel mounted only when open with a key on variant+id. Bisecting
  // by replacing the entire form with bare HTML inputs shows the loop
  // disappears, confirming F0Form ↔ AI form registry as the trigger.
  // The full BR-002 / BR-003 field list specifies tags but the
  // prototype intentionally omits it pending an upstream fix in
  // packages/react.
})

const sections = {
  classification: { title: "Classification" },
  allocation: { title: "Allocation" },
  tax: { title: "Tax" },
  notes: { title: "Notes" },
} as const

/** Submitted shape — mirrors `ControllingFields`. */
export type ControllingFormData = {
  category?: ExpenseCategory
  subcategory?: string
  costCenter?: string
  project?: string
  vatRate?: string
  description?: string
  tags?: string[]
}

export function ControllingForm(props: {
  /**
   * Pre-fill values. For single-row editing this is the row's existing
   * `controlling` block. For bulk-edit, pass `undefined` so finance
   * starts from a clean slate (BR-005: bulk-edit overwrites).
   */
  defaultValues: ControllingFields | undefined
  /**
   * Triggered when finance clicks the form's submit button. Caller
   * decides whether to also flip the row to `controlled` (per-row
   * "Mark as controlled") or just persist (Save / bulk-edit Apply).
   */
  onSave: (data: ControllingFormData) => void
  /** Submit button label — the only piece that varies between
   *  Save / Mark as controlled / Apply to selected. */
  submitLabel: string
}) {
  const { formRef } = useF0Form()

  // Refs keep the latest callback / label without re-feeding them into
  // `useF0FormDefinition`'s dependency array. The chat panel registers
  // form tools off the definition's identity (see F0AiChat:12292) — if
  // the definition changes every render the registration loops and we
  // hit "Maximum update depth exceeded".
  const onSaveRef = useRef(props.onSave)
  const submitLabelRef = useRef(props.submitLabel)
  useEffect(() => {
    onSaveRef.current = props.onSave
  }, [props.onSave])
  useEffect(() => {
    submitLabelRef.current = props.submitLabel
  }, [props.submitLabel])

  // Defaults change only when the row identity changes. The shallow
  // primitive comparison below is enough: every `ControllingFields`
  // value is a string / string[] which we compare by reference.
  const defaultValues = useMemo(
    () => ({
      category: props.defaultValues?.category,
      subcategory: props.defaultValues?.subcategory,
      costCenter: props.defaultValues?.costCenter,
      project: props.defaultValues?.project,
      vatRate: props.defaultValues?.vatRate,
      description: props.defaultValues?.description ?? "",
    }),
    [props.defaultValues]
  )

  // Stable `onSubmit` closure — reads the latest handler from the ref.
  const onSubmit = useMemo(
    () =>
      async ({ data }: { data: unknown }) => {
        onSaveRef.current(data as ControllingFormData)
        return { success: true as const, message: "Controlling fields saved." }
      },
    []
  )

  // Stable submit-config object. `getLabel` lets us still pick up the
  // ref-tracked label without changing object identity.
  const submitConfig = useMemo(
    () => ({ label: submitLabelRef.current }),
    // Intentionally excluding submitLabelRef.current — see comment above.
    // Re-rendering with a different label is a UX nicety we trade for
    // stability. In practice the variant (and therefore the label) is
    // fixed for the lifetime of any given form mount.
    []
  )

  const formDefinition = useF0FormDefinition({
    name: "expense-controlling",
    schema: controllingSchema,
    sections,
    defaultValues,
    submitConfig,
    onSubmit,
  })

  return <F0Form formRef={formRef} formDefinition={formDefinition} />
}
