// Mock data for the "Walkthrough" co-creation story — the collection
// records, filters, sortings, data adapters, and visualizations shared by
// every flow (Engagement Surveys, Training Surveys, ...). Pure data;
// consumed by FlowContent's OneDataCollection source and by `flow-configs.ts`,
// which assigns the flow-specific records (`ENGAGEMENT_*` / `TRAINING_*`) to
// each `FlowConfig`.

import { File, Marketplace } from "@/icons/app"

export type ResourceStatus = "Draft" | "Complete" | "Needs details"

export type Resource = {
  id: string
  name: string
  owner: string
  status: ResourceStatus
}

export const resourceFilters = {
  status: {
    type: "in" as const,
    label: "Status",
    options: {
      options: [
        { value: "Draft", label: "Draft" },
        { value: "Needs details", label: "Needs details" },
        { value: "Complete", label: "Complete" },
      ],
    },
  },
  owner: {
    type: "in" as const,
    label: "Owner",
    options: {
      options: [
        { value: "Alicia Keys", label: "Alicia Keys" },
        { value: "Dani Moreno", label: "Dani Moreno" },
        { value: "Marta Soler", label: "Marta Soler" },
        { value: "Nora Park", label: "Nora Park" },
      ],
    },
  },
}

export const resourceSortings = {
  name: { label: "Name" },
  owner: { label: "Owner" },
  status: { label: "Status" },
} as const

// Collection rows for the Engagement Surveys flow.
export const ENGAGEMENT_RESOURCES: Resource[] = [
  {
    id: "1",
    name: "Engineering onboarding plan",
    owner: "Alicia Keys",
    status: "Draft",
  },
  {
    id: "2",
    name: "Q3 performance review cycle",
    owner: "Dani Moreno",
    status: "Complete",
  },
  {
    id: "3",
    name: "Product roadmap 2026",
    owner: "Marta Soler",
    status: "Needs details",
  },
  {
    id: "4",
    name: "Offboarding checklist",
    owner: "Nora Park",
    status: "Draft",
  },
]

// Collection rows for the Training Surveys flow.
export const TRAINING_RESOURCES: Resource[] = [
  {
    id: "1",
    name: "New hire compliance training",
    owner: "Alicia Keys",
    status: "Complete",
  },
  {
    id: "2",
    name: "Manager coaching certification",
    owner: "Marta Soler",
    status: "Draft",
  },
  {
    id: "3",
    name: "Security awareness refresher",
    owner: "Dani Moreno",
    status: "Needs details",
  },
  {
    id: "4",
    name: "Product training Q1 rollout",
    owner: "Nora Park",
    status: "Draft",
  },
]

/** Data adapter factory for the Collection phase table — one per flow's rows. */
export const makeResourcesDataAdapter = (resources: Resource[]) => ({
  fetchData: () => Promise.resolve({ records: resources }),
})

export const tableVisualization = {
  type: "table" as const,
  options: {
    columns: [
      { label: "Name", render: (item: Resource) => item.name },
      { label: "Owner", render: (item: Resource) => item.owner },
      { label: "Status", render: (item: Resource) => item.status },
    ],
  },
}

// ---------------------------------------------------------------------------
// Templates tab — a browse view backed by a card visualization. Pure mock
// data: survey templates a user can start from, surfaced as metadata cards.
// Each flow supplies its own template set + category filters so "Templates"
// only ever shows resources relevant to that flow's domain.
// ---------------------------------------------------------------------------

export type Template = {
  id: string
  name: string
  category: string
  description: string
  questions: number
}

// Sentinel id for the synthetic "Empty Survey" entry prepended to a templates
// gallery. Not a real template — selecting it starts a blank survey/form
// instead of previewing. Shared by the guided-type gallery and the
// "cards"/"guidedEntry" gallery so both render the same first row.
export const EMPTY_SURVEY_TEMPLATE_ID = "empty-form"

export const EMPTY_SURVEY_TEMPLATE: Template = {
  id: EMPTY_SURVEY_TEMPLATE_ID,
  name: "Empty Survey",
  category: "",
  description: "Start from scratch",
  questions: 0,
}

export const ENGAGEMENT_TEMPLATES: Template[] = [
  {
    id: "t1",
    name: "Employee engagement survey",
    category: "Engagement",
    description:
      "A 10-question pulse check covering motivation, clarity, and team dynamics.",
    questions: 10,
  },
  {
    id: "t2",
    name: "Employee Net Promoter Score (eNPS)",
    category: "Engagement",
    description:
      "Measure loyalty and advocacy with a single-question score plus follow-ups.",
    questions: 3,
  },
  {
    id: "t3",
    name: "Post-onboarding feedback",
    category: "Lifecycle",
    description: "Capture new hire impressions after their first 30 days.",
    questions: 8,
  },
  {
    id: "t4",
    name: "Exit interview",
    category: "Lifecycle",
    description:
      "Understand why people leave and surface trends across departures.",
    questions: 12,
  },
  {
    id: "t5",
    name: "Manager effectiveness",
    category: "Management",
    description:
      "Gather upward feedback on coaching, communication, and support.",
    questions: 9,
  },
  {
    id: "t6",
    name: "Wellbeing pulse",
    category: "Wellbeing",
    description:
      "Short check-in on workload, balance, and overall wellbeing at work.",
    questions: 6,
  },
]

export const ENGAGEMENT_TEMPLATE_CATEGORIES = [
  { value: "Engagement", label: "Engagement" },
  { value: "Lifecycle", label: "Lifecycle" },
  { value: "Management", label: "Management" },
  { value: "Wellbeing", label: "Wellbeing" },
]

// Training's templates are organized by the same 3 types the guided creation
// flow asks about up front (Satisfaction / Effectiveness / Knowledge Test), so
// the plain browse tab and the AI canvas's type-scoped template list share one
// taxonomy and one dataset.
export const TRAINING_TEMPLATES: Template[] = [
  {
    id: "tt1",
    name: "Course satisfaction survey",
    category: "Satisfaction",
    description:
      "A short pulse check on how participants felt about the course overall.",
    questions: 4,
  },
  {
    id: "tt2",
    name: "Instructor & materials satisfaction",
    category: "Satisfaction",
    description:
      "Focused on satisfaction with the instructor, pacing, and materials.",
    questions: 4,
  },
  {
    id: "tt3",
    name: "Training effectiveness review",
    category: "Effectiveness",
    description:
      "Checks whether the course met its goals and improved performance.",
    questions: 5,
  },
  {
    id: "tt4",
    name: "Manager-observed effectiveness",
    category: "Effectiveness",
    description:
      "Gathers a manager's read on how training changed on-the-job performance.",
    questions: 5,
  },
  {
    id: "tt5",
    name: "Course knowledge test",
    category: "Knowledge Test",
    description:
      "A short graded quiz checking comprehension of the course material.",
    questions: 5,
  },
  {
    id: "tt6",
    name: "Certification knowledge test",
    category: "Knowledge Test",
    description:
      "A longer graded assessment used to certify course completion.",
    questions: 8,
  },
]

export const TRAINING_TEMPLATE_CATEGORIES = [
  { value: "Satisfaction", label: "Satisfaction" },
  { value: "Effectiveness", label: "Effectiveness" },
  { value: "Knowledge Test", label: "Knowledge Test" },
]

/** Data adapter factory for the Templates browse view — one per flow's list. */
export const makeTemplatesDataAdapter = (templates: Template[]) => ({
  fetchData: () => Promise.resolve({ records: templates }),
})

/** Category filter factory for the Templates browse view — one per flow. */
export const makeTemplateFilters = (
  categories: { value: string; label: string }[]
) => ({
  category: {
    type: "in" as const,
    label: "Category",
    options: { options: categories },
  },
})

export const templateSortings = {
  name: { label: "Name" },
  questions: { label: "Questions" },
} as const

export const cardVisualization = {
  type: "card" as const,
  options: {
    title: (item: Template) => item.name,
    description: (item: Template) => item.description,
    cardProperties: [
      {
        label: "Category",
        icon: Marketplace,
        render: (item: Template) => item.category,
      },
      {
        label: "Questions",
        icon: File,
        render: (item: Template) => `${item.questions} questions`,
      },
    ],
  },
}

export const listVisualization = {
  type: "list" as const,
  options: {
    itemDefinition: (item: Template) => ({
      title: item.name,
      description: [item.description],
    }),
    fields: [
      {
        label: "Category",
        // The synthetic "Empty Survey" row has no category/questions — hide both
        // so it reads as a plain "start from scratch" entry (it only ever
        // appears in the AI Canvas gallery, never the inert browse tab).
        hide: (item: Template) => item.id === EMPTY_SURVEY_TEMPLATE_ID,
        render: (item: Template) => item.category,
      },
      {
        label: "Questions",
        hide: (item: Template) => item.id === EMPTY_SURVEY_TEMPLATE_ID,
        render: (item: Template) => `${item.questions} questions`,
        sorting: "questions" as const,
      },
    ],
  },
}
