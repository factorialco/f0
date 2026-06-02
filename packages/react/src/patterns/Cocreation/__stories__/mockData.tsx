// Mock data for the "Creation with AI" co-creation story — the collection
// records, filters, sortings, data adapters, and visualizations backing the
// four tabs. Pure data; consumed by FlowContent's OneDataCollection sources.

export type ResourceStatus = "Draft" | "Complete" | "Needs details"

export type Resource = {
  id: string
  name: string
  owner: string
  status: ResourceStatus
}

export type Employee = {
  id: string
  name: string
  role: string
  department: string
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

// Returning an empty `records` array is what triggers OneDataCollection's
// built-in default "no-data" empty state.
export const emptyDataAdapter = {
  fetchData: () => Promise.resolve({ records: [] as Resource[] }),
}

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

export const cardVisualization = {
  type: "card" as const,
  options: {
    title: (item: Resource) => item.name,
    description: (item: Resource) => item.owner,
    cardProperties: [
      { label: "Status", render: (item: Resource) => item.status },
    ],
  },
}

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: "1",
    name: "Alicia Keys",
    role: "Staff Engineer",
    department: "Engineering",
  },
  {
    id: "2",
    name: "Dani Moreno",
    role: "Product Manager",
    department: "Product",
  },
  { id: "3", name: "Marta Soler", role: "People Partner", department: "HR" },
  {
    id: "4",
    name: "Nora Park",
    role: "Engineering Manager",
    department: "Engineering",
  },
]

export const employeeTableVisualization = {
  type: "table" as const,
  options: {
    columns: [
      {
        label: "Name",
        render: (item: Employee) => ({
          type: "person" as const,
          value: {
            firstName: item.name.split(" ")[0],
            lastName: item.name.split(" ")[1] ?? "",
          },
        }),
      },
      { label: "Role", render: (item: Employee) => item.role },
      { label: "Department", render: (item: Employee) => item.department },
    ],
  },
}
