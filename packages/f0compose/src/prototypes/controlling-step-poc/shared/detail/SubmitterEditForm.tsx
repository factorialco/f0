import {
  F0Form,
  f0FormField,
  useF0Form,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import { useEffect, useMemo, useRef } from "react"
import { z } from "zod"

import { projects, type ExpenseCategory } from "@/fixtures"
import { type SpendingRow } from "../rows"

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
 * to the parent loops the AI chat panel registry. Schema and
 * sections are at module scope (truly static).
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
] as const

const submitterSchema = z.object({
  category: f0FormField.select({
    label: "Category",
    section: "expense",
    placeholder: "Select category",
    options: ALL_CATEGORIES.map((c) => ({ value: c, label: c })),
  }),
  documentType: f0FormField.select({
    label: "Type",
    section: "document",
    placeholder: "Select document type",
    options: DOCUMENT_TYPES.map((t) => ({ value: t, label: t })),
  }),
  documentDate: f0FormField.date({
    label: "Document date",
    section: "document",
  }),
  receiptCurrency: f0FormField.select({
    label: "Receipt currency",
    section: "document",
    row: "currency-amount",
    placeholder: "Currency",
    options: CURRENCIES.map((c) => ({ value: c, label: c })),
  }),
  receiptAmount: f0FormField.number({
    label: "Receipt amount",
    section: "document",
    row: "currency-amount",
    placeholder: "0",
  }),
  vendorName: f0FormField.text({
    label: "Vendor name",
    section: "document",
    optional: true,
    placeholder: "As it is on the document",
  }),
  reimbursable: f0FormField.checkbox({
    label: "This expense is reimbursable",
    section: "payment",
  }),
  paymentMethod: f0FormField.select({
    label: "Payment method",
    section: "payment",
    placeholder: "Select option",
    options: PAYMENT_METHODS.map((m) => ({
      value: m.value,
      label: m.label,
    })),
  }),
  reimbursableAmount: f0FormField.number({
    label: "Reimbursable amount",
    section: "payment",
    placeholder: "0",
  }),
  project: f0FormField.select({
    label: "Project",
    section: "budget",
    optional: true,
    placeholder: "Select option",
    options: projects.map((p) => ({
      value: p.id,
      label: `${p.name} (${p.code})`,
    })),
  }),
  description: f0FormField.textarea({
    label: "Description",
    section: "additional",
    placeholder: "Add any extra information",
  }),
  internalReference: f0FormField.text({
    label: "Internal reference",
    section: "additional",
    optional: true,
    placeholder: "Add an internal reference",
  }),
})

const sections = {
  expense: {
    title: "Expense information",
    description: "Add the basic info of your expense for accurate processing.",
  },
  document: {
    title: "Document information",
    description: "Obtain this information from your attached document.",
  },
  payment: {
    title: "Payment",
    description: "Provide information on how and how much you paid.",
  },
  budget: {
    title: "Budget and project",
    description: "Add internal company details to ensure correct processing.",
  },
  additional: {
    title: "Additional information",
    description: "Add any additional details to help with processing.",
  },
} as const

export type SubmitterFormData = {
  category?: ExpenseCategory
  documentType?: (typeof DOCUMENT_TYPES)[number]
  documentDate?: Date
  receiptCurrency?: (typeof CURRENCIES)[number]
  receiptAmount?: number
  vendorName?: string
  reimbursable?: boolean
  paymentMethod?: string
  reimbursableAmount?: number
  project?: string
  description?: string
  internalReference?: string
}

export function SubmitterEditForm(props: {
  /** The row being edited — used for default values. */
  row: SpendingRow
  /** Persist callback. */
  onSave: (data: SubmitterFormData) => void
  /** Submit button label. */
  submitLabel: string
}) {
  const { formRef } = useF0Form()

  // Refs hold the latest callback / label without re-feeding
  // `useF0FormDefinition`. See ControllingForm for the F0AiChat
  // registration loop this avoids.
  const onSaveRef = useRef(props.onSave)
  const submitLabelRef = useRef(props.submitLabel)
  useEffect(() => {
    onSaveRef.current = props.onSave
  }, [props.onSave])
  useEffect(() => {
    submitLabelRef.current = props.submitLabel
  }, [props.submitLabel])

  const defaultValues = useMemo(
    () => ({
      // Map the row's known fields onto the form's expected shape.
      // The submitter form has more fields than the row carries, so
      // most start blank.
      category: props.row.description as ExpenseCategory,
      documentType: "Receipt" as const,
      documentDate: new Date(props.row.date + "T00:00:00Z"),
      receiptCurrency: "EUR" as const,
      receiptAmount: props.row.amount,
      vendorName: props.row.name,
      reimbursable: true,
      paymentMethod: "personal-card",
      reimbursableAmount: props.row.amount,
      project: props.row.controlling?.project,
      description: props.row.controlling?.description ?? "",
      internalReference: "",
    }),
    [props.row]
  )

  const onSubmit = useMemo(
    () =>
      async ({ data }: { data: unknown }) => {
        onSaveRef.current(data as SubmitterFormData)
        return { success: true as const, message: "Expense updated." }
      },
    []
  )

  // Stable submit-config object (label captured once at mount; see
  // ControllingForm for the rationale).
  const submitConfig = useMemo(
    () => ({ label: submitLabelRef.current }),
    []
  )

  const formDefinition = useF0FormDefinition({
    name: "expense-submitter",
    schema: submitterSchema,
    sections,
    defaultValues,
    submitConfig,
    onSubmit,
  })

  return <F0Form formRef={formRef} formDefinition={formDefinition} />
}
