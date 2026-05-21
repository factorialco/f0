import {
  F0Form,
  f0FormField,
  useF0Form,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import { z } from "zod"

/**
 * "New potato variety" form, registered in the AI form registry so the
 * copilot can fill it via the `forms.fillForm` tool.
 *
 * The schema and section configs live at module scope (truly static,
 * no React state involved). The hooks `useF0Form` + `useF0FormDefinition`
 * run **inside** `<AddVarietyForm>` so they're paired with the rendered
 * `<F0Form>`. Calling them in a parent that does NOT also render the
 * form has been observed to feedback-loop the AI chat panel
 * ("Maximum update depth exceeded" inside `Dle`/`Array.map`), because
 * the registry produces a preview UI for forms that are registered but
 * not mounted.
 *
 * The trade-off: the agent only "sees" the form once the user has
 * navigated to the create view. The recruitment / potatoes entry
 * exposes a copilot action that navigates the user there first.
 */

// Schema & sections — completely static, never re-allocated.
const varietySchema = z.object({
  name: f0FormField.text({
    label: "Variety name",
    placeholder: "e.g. Monalisa",
    section: "identity",
    helpText: "Common or commercial name of the potato variety.",
  }),
  origin: f0FormField.text({
    label: "Origin",
    placeholder: "e.g. Spain, Galicia, Netherlands",
    section: "identity",
    helpText: "Country or region where the variety originated.",
  }),
  variety: f0FormField.select({
    label: "Variety type",
    section: "classification",
    placeholder: "Select variety type",
    options: [
      { value: "floury", label: "Floury" },
      { value: "firm", label: "Firm" },
      { value: "all-purpose", label: "All-purpose" },
    ],
  }),
  bestUses: f0FormField.multiSelect({
    label: "Best culinary uses",
    section: "classification",
    helpText: "Pick all techniques the variety performs well at.",
    options: [
      { value: "boil", label: "Boil" },
      { value: "fry", label: "Fry" },
      { value: "roast", label: "Roast" },
      { value: "mash", label: "Mash" },
      { value: "salad", label: "Salad" },
      { value: "steam", label: "Steam" },
      { value: "bake", label: "Bake" },
      { value: "stew", label: "Stew" },
      { value: "tortilla", label: "Tortilla" },
    ],
  }),
  averageWeight: f0FormField.number({
    label: "Average weight (g)",
    placeholder: "e.g. 180",
    section: "specs",
    min: 0,
    helpText: "Average weight per tuber, in grams.",
  }),
  stock: f0FormField.number({
    label: "Initial stock (kg)",
    placeholder: "e.g. 420",
    section: "specs",
    min: 0,
    helpText: "Inventory at time of registration, in kilograms.",
  }),
})

const sections = {
  identity: {
    title: "Identity",
    description: "Name and provenance of the variety.",
  },
  classification: {
    title: "Classification",
    description: "Variety type and culinary uses.",
  },
  specs: {
    title: "Inventory specs",
    description: "Weight per tuber and starting stock.",
  },
}

const defaultValues = {
  name: "",
  origin: "",
  variety: undefined,
  bestUses: [],
  averageWeight: undefined,
  stock: undefined,
}

const submitConfig = { label: "Create variety" }

export type NewPotatoVariety = {
  name: string
  origin: string
  variety: "floury" | "firm" | "all-purpose"
  bestUses: string[]
  averageWeight: number
  stock: number
}

type Props = {
  onCreate: (variety: NewPotatoVariety) => void
}

export function AddVarietyForm({ onCreate }: Props) {
  const { formRef } = useF0Form()
  const formDefinition = useF0FormDefinition({
    name: "new-potato-variety",
    schema: varietySchema,
    sections,
    defaultValues,
    submitConfig,
    onSubmit: async ({ data }) => {
      onCreate(data as NewPotatoVariety)
      return { success: true, message: "Variety added!" }
    },
  })

  return <F0Form formRef={formRef} formDefinition={formDefinition} />
}
