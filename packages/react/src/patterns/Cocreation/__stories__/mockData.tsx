// Mock data for the "Walkthrough" co-creation story — the collection
// records, filters, sortings, data adapter, and visualization backing the
// Surveys tab. Pure data; consumed by FlowContent's OneDataCollection source.

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

export const MOCK_RESOURCES: Resource[] = [
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

export const filledDataAdapter = {
  fetchData: () => Promise.resolve({ records: MOCK_RESOURCES }),
}

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
// ---------------------------------------------------------------------------

export type Template = {
  id: string
  name: string
  category: string
  description: string
  questions: number
}

export const MOCK_TEMPLATES: Template[] = [
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

export const templatesDataAdapter = {
  fetchData: () => Promise.resolve({ records: MOCK_TEMPLATES }),
}

export const templateFilters = {
  category: {
    type: "in" as const,
    label: "Category",
    options: {
      options: [
        { value: "Engagement", label: "Engagement" },
        { value: "Lifecycle", label: "Lifecycle" },
        { value: "Management", label: "Management" },
        { value: "Wellbeing", label: "Wellbeing" },
      ],
    },
  },
}

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
