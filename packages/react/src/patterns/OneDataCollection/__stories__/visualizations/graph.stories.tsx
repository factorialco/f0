import { Meta, StoryObj } from "@storybook/react-vite"
import "@xyflow/react/dist/style.css"
import { useRef, useState } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import type { TagVariant } from "@/components/tags/F0Tag/F0Tag"
import { F0Dialog } from "@/patterns/F0Dialog"

import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../index"
import { Office } from "@/icons/app"

type Employee = {
  id: string
  name: string
  title: string
  department: string
  managerId: string | null
}

const ROOT_TOKEN = "__ROOT__"

// A believable group with TWO divisions, each led by its own CEO. The whole
// structure is known up-front (so `childrenCount` is always exact), but only
// the two CEOs are shown initially — every level below loads on click.
const EMPLOYEES: Employee[] = [
  // ── Division A — Aurora Cloud ──
  {
    id: "ceo-a",
    name: "Elena Castro",
    title: "CEO · Aurora Cloud",
    department: "Executive",
    managerId: null,
  },
  {
    id: "cto-a",
    name: "Mateo Ruiz",
    title: "Chief Technology Officer",
    department: "Engineering",
    managerId: "ceo-a",
  },
  {
    id: "cfo-a",
    name: "Carla Mendoza",
    title: "Chief Financial Officer",
    department: "Finance",
    managerId: "ceo-a",
  },
  {
    id: "cro-a",
    name: "Sophie Laurent",
    title: "Chief Revenue Officer",
    department: "Sales",
    managerId: "ceo-a",
  },
  {
    id: "cpo-a",
    name: "David Okafor",
    title: "Chief Product Officer",
    department: "Product",
    managerId: "ceo-a",
  },

  {
    id: "vp-eng-a",
    name: "Marcus Chen",
    title: "VP Engineering",
    department: "Engineering",
    managerId: "cto-a",
  },
  {
    id: "vp-infra-a",
    name: "Priya Nair",
    title: "VP Infrastructure",
    department: "Engineering",
    managerId: "cto-a",
  },
  {
    id: "em-be-a",
    name: "Nina Volkov",
    title: "Engineering Manager, Backend",
    department: "Engineering",
    managerId: "vp-eng-a",
  },
  {
    id: "em-fe-a",
    name: "Leo Park",
    title: "Engineering Manager, Frontend",
    department: "Engineering",
    managerId: "vp-eng-a",
  },
  {
    id: "be-a1",
    name: "Iris Lopez",
    title: "Senior Backend Engineer",
    department: "Engineering",
    managerId: "em-be-a",
  },
  {
    id: "be-a2",
    name: "Omar Diaz",
    title: "Backend Engineer",
    department: "Engineering",
    managerId: "em-be-a",
  },
  {
    id: "fe-a1",
    name: "Grace Hall",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    managerId: "em-fe-a",
  },
  {
    id: "fe-a2",
    name: "Pablo Serra",
    title: "Frontend Engineer",
    department: "Engineering",
    managerId: "em-fe-a",
  },
  {
    id: "sre-a1",
    name: "Diego Flores",
    title: "Site Reliability Engineer",
    department: "Engineering",
    managerId: "vp-infra-a",
  },

  {
    id: "controller-a",
    name: "Ethan Brooks",
    title: "Controller",
    department: "Finance",
    managerId: "cfo-a",
  },
  {
    id: "vp-sales-a",
    name: "Liam O'Connor",
    title: "VP Sales",
    department: "Sales",
    managerId: "cro-a",
  },
  {
    id: "ae-a1",
    name: "June Wu",
    title: "Account Executive",
    department: "Sales",
    managerId: "vp-sales-a",
  },
  {
    id: "ae-a2",
    name: "Theo Almeida",
    title: "Account Executive",
    department: "Sales",
    managerId: "vp-sales-a",
  },
  {
    id: "gpm-a",
    name: "Olivia Bennett",
    title: "Group Product Manager",
    department: "Product",
    managerId: "cpo-a",
  },
  {
    id: "pm-a1",
    name: "Lucas Romano",
    title: "Product Manager",
    department: "Product",
    managerId: "gpm-a",
  },

  // ── Division B — Nimbus Mobile ──
  {
    id: "ceo-b",
    name: "Hiroshi Tanaka",
    title: "CEO · Nimbus Mobile",
    department: "Executive",
    managerId: null,
  },
  {
    id: "cto-b",
    name: "Amara Singh",
    title: "Chief Technology Officer",
    department: "Engineering",
    managerId: "ceo-b",
  },
  {
    id: "coo-b",
    name: "Daniel Cohen",
    title: "Chief Operating Officer",
    department: "Operations",
    managerId: "ceo-b",
  },
  {
    id: "cmo-b",
    name: "Hannah Weiss",
    title: "Chief Marketing Officer",
    department: "Marketing",
    managerId: "ceo-b",
  },

  {
    id: "vp-eng-b",
    name: "Ada Stone",
    title: "VP Engineering",
    department: "Engineering",
    managerId: "cto-b",
  },
  {
    id: "em-mobile-b",
    name: "Sara Kovač",
    title: "Engineering Manager, Mobile",
    department: "Engineering",
    managerId: "vp-eng-b",
  },
  {
    id: "mo-b1",
    name: "Ben Carter",
    title: "Mobile Engineer",
    department: "Engineering",
    managerId: "em-mobile-b",
  },
  {
    id: "mo-b2",
    name: "Yuki Tanaka",
    title: "Mobile Engineer",
    department: "Engineering",
    managerId: "em-mobile-b",
  },
  {
    id: "ops-lead-b",
    name: "Jonas Berg",
    title: "Operations Lead",
    department: "Operations",
    managerId: "coo-b",
  },
  {
    id: "ops-b1",
    name: "Marta Gil",
    title: "Operations Analyst",
    department: "Operations",
    managerId: "ops-lead-b",
  },
  {
    id: "growth-lead-b",
    name: "Emma Lindqvist",
    title: "Head of Growth",
    department: "Marketing",
    managerId: "cmo-b",
  },
  {
    id: "growth-b1",
    name: "Ravi Kapoor",
    title: "Growth Marketer",
    department: "Marketing",
    managerId: "growth-lead-b",
  },
  // A deliberately large team: a lead with 87 direct reports. Expanding (and
  // collapsing) this node must keep the viewport anchored on it — never jump —
  // even though the children load lazily.
  {
    id: "vp-support-a",
    name: "Nadia Haddad",
    title: "VP Customer Support",
    department: "Support",
    managerId: "ceo-a",
  },
  ...Array.from(
    { length: 87 },
    (_unused, index): Employee => ({
      id: `support-${index + 1}`,
      name: `Support Agent ${index + 1}`,
      title: "Customer Support Agent",
      department: "Support",
      managerId: "vp-support-a",
    })
  ),
]

const childrenOf = (parentId: string | null): Employee[] =>
  EMPLOYEES.filter((employee) => employee.managerId === parentId)

const DEPARTMENTS = [
  ...new Set(EMPLOYEES.map((employee) => employee.department)),
]

const avatarFor = (employee: Employee) => {
  const [firstName = "", lastName = ""] = employee.name.split(" ")
  return {
    type: "person" as const,
    firstName,
    lastName,
    // Free, key-less avatar service with real photos, deterministic per id.
    // Falls back to initials if the image fails to load.
    src: `https://i.pravatar.cc/150?u=${employee.id}`,
  }
}

const LOCATIONS = [
  "Madrid",
  "Barcelona",
  "Berlin",
  "London",
  "New York",
  "Tokyo",
  "Remote",
]

const LEGAL_ENTITIES = [
  "Aurora Cloud Inc.",
  "Aurora EMEA Ltd.",
  "Nimbus Mobile KK",
  "Nimbus US LLC",
]

const hashOf = (id: string): number =>
  [...id].reduce((acc, char) => acc + char.charCodeAt(0), 0)

/** Stable pseudo-location derived from the id, so the demo needs no extra data. */
const locationFor = (id: string): string =>
  LOCATIONS[hashOf(id) % LOCATIONS.length]

const legalEntityFor = (id: string): string =>
  LEGAL_ENTITIES[hashOf(id) % LEGAL_ENTITIES.length]

/** Stable pseudo hire date derived from the id. */
const hireDateFor = (id: string): string => {
  const hash = hashOf(id)
  const year = 2016 + (hash % 9)
  const month = String((hash % 12) + 1).padStart(2, "0")
  return `${month}/${year}`
}

/** Everyone below a node, recursively (not just direct reports). */
const totalReports = (id: string): number =>
  childrenOf(id).reduce((sum, child) => sum + 1 + totalReports(child.id), 0)

// Each metadata uses a distinct tag *type* so it can be toggled independently
// from the graph controls (like configuring which table columns are visible).
const tagsFor = (employee: EmployeeNode): TagVariant[] => {
  const tags: TagVariant[] = [
    { type: "raw", text: locationFor(employee.id), icon: Office },
    { type: "company", name: legalEntityFor(employee.id) },
    { type: "dot", text: hireDateFor(employee.id), customColor: "#6366f1" },
  ]
  if (employee.totalReportsCount > 0) {
    tags.push({
      type: "raw",
      text: `${employee.totalReportsCount} reports`,
    })
  }
  return tags
}

const NODE_TAG_TYPES = ["raw", "company", "dot", "status"] as const

const NODE_TAG_TYPE_LABELS = {
  raw: "Location",
  company: "Legal entity",
  dot: "Hire date",
  status: "Reports",
}

/** Root → … → matched node, in root-first order (for search reveal). */
const pathTo = (id: string): Employee[] => {
  const byId = new Map(EMPLOYEES.map((employee) => [employee.id, employee]))
  const path: Employee[] = []
  let current = byId.get(id)
  while (current) {
    path.unshift(current)
    current = current.managerId ? byId.get(current.managerId) : undefined
  }
  return path
}

// ─────────────────────────────────────────────────────────────────────────
// Simulated GraphQL backend
// Mirrors how this example will run against a real API: every read is an async
// query with (variable) network latency, returns Relay-style connections with
// `totalCount`/`pageInfo`, and each node carries its own counts. Swapping these
// for real `client.query(...)` calls is a drop-in.
// ─────────────────────────────────────────────────────────────────────────

type EmployeeNode = Employee & {
  directReportsCount: number
  totalReportsCount: number
}

type Connection<T> = {
  edges: { node: T; cursor: string }[]
  pageInfo: { hasNextPage: boolean; endCursor: string | null }
  totalCount: number
}

const PER_PAGE = 8
const NETWORK_DELAY_MIN_MS = 350
const NETWORK_DELAY_MAX_MS = 800

const toEmployeeNode = (employee: Employee): EmployeeNode => ({
  ...employee,
  directReportsCount: childrenOf(employee.id).length,
  totalReportsCount: totalReports(employee.id),
})

/** Resolves a query after a randomized round-trip, like a real network call. */
const gqlRequest = <T,>(resolver: () => T): Promise<T> => {
  const delay =
    NETWORK_DELAY_MIN_MS +
    Math.random() * (NETWORK_DELAY_MAX_MS - NETWORK_DELAY_MIN_MS)
  return new Promise((resolve) => setTimeout(() => resolve(resolver()), delay))
}

const connectionOf = (
  employees: Employee[],
  totalCount: number
): Connection<EmployeeNode> => {
  const nodes = employees.map(toEmployeeNode)
  return {
    edges: nodes.map((node) => ({ node, cursor: node.id })),
    pageInfo: {
      hasNextPage: nodes.length < totalCount,
      endCursor: nodes.at(-1)?.id ?? null,
    },
    totalCount,
  }
}

/** `directReports(managerId)` — children of a node (roots when null). */
const queryDirectReports = (
  managerId: string | null
): Promise<Connection<EmployeeNode>> =>
  gqlRequest(() => {
    const children = childrenOf(managerId)
    return connectionOf(children, children.length)
  })

/** `employees(page, perPage, search)` — paginated roster for the table view. */
type SortableField = "name" | "title" | "department"

const queryEmployees = (input: {
  page: number
  perPage: number
  search?: string
  departments?: string[]
  sort?: { field: SortableField; order: "asc" | "desc" }
}): Promise<Connection<EmployeeNode>> =>
  gqlRequest(() => {
    const query = input.search?.trim().toLowerCase() ?? ""
    let result = query
      ? EMPLOYEES.filter(
          (employee) =>
            employee.name.toLowerCase().includes(query) ||
            employee.title.toLowerCase().includes(query)
        )
      : EMPLOYEES
    if (input.departments?.length) {
      result = result.filter((employee) =>
        input.departments!.includes(employee.department)
      )
    }
    if (input.sort) {
      const direction = input.sort.order === "desc" ? -1 : 1
      result = [...result].sort(
        (a, b) =>
          a[input.sort!.field].localeCompare(b[input.sort!.field]) * direction
      )
    }
    const start = (input.page - 1) * input.perPage
    return connectionOf(
      result.slice(start, start + input.perPage),
      result.length
    )
  })

/** `searchEmployees(query)` — typeahead across the whole org. */
const queryEmployeeSearch = (query: string): Promise<EmployeeNode[]> =>
  gqlRequest(() => {
    const normalized = query.toLowerCase()
    return EMPLOYEES.filter(
      (employee) =>
        employee.name.toLowerCase().includes(normalized) ||
        employee.title.toLowerCase().includes(normalized)
    ).map(toEmployeeNode)
  })

/** `ancestorPath(nodeId)` — root → … → node, for revealing on search. */
const queryAncestorPath = (nodeId: string): Promise<EmployeeNode[]> =>
  gqlRequest(() => pathTo(nodeId).map(toEmployeeNode))

const useOrgSource = (
  onSelect: (employee: EmployeeNode) => void,
  onReveal: (employeeId: string) => void
) =>
  useDataCollectionSource<EmployeeNode>({
    search: { enabled: true },
    // Filters + sortings live on the source, but the graph view overrides
    // `filters: {}` so they only appear in the table (the graph has no rows to
    // filter/sort — it's a tree).
    filters: {
      department: {
        type: "in",
        label: "Department",
        options: {
          options: DEPARTMENTS.map((value) => ({ value, label: value })),
        },
      },
    },
    sortings: {
      name: { label: "Name" },
      title: { label: "Title" },
      department: { label: "Department" },
    },
    // Shared header search preview (avatar + name + position), same in every
    // view. Selecting a result reveals that person in the graph.
    searchPreview: {
      search: queryEmployeeSearch,
      getId: (employee) => employee.id,
      render: (employee) => ({
        avatar: avatarFor(employee),
        title: employee.name,
        subtitle: employee.title,
      }),
      onSelect: (employee) => onReveal(employee.id),
    },
    dataAdapter: {
      paginationType: "pages",
      perPage: PER_PAGE,
      fetchData: async (options) => {
        // eslint-disable-next-line no-type-assertion/no-type-assertion -- demo filter shape from the graph view
        const requestedParent = (options.filters as { parentId?: string[] })
          .parentId?.[0]

        // Graph view: a node's direct reports — one query per expand.
        if (requestedParent !== undefined) {
          const managerId =
            requestedParent === ROOT_TOKEN ? null : requestedParent
          const connection = await queryDirectReports(managerId)
          const records = connection.edges.map((edge) => edge.node)
          return {
            type: "pages" as const,
            records,
            total: connection.totalCount,
            perPage: Math.max(records.length, 1),
            currentPage: 1,
            pagesCount: 1,
          }
        }

        // Table view: paginated roster filtered/sorted by the header + columns.
        // eslint-disable-next-line no-type-assertion/no-type-assertion -- pages pagination shape
        const pagination = options.pagination as {
          currentPage?: number
          perPage?: number
        }
        const page = pagination.currentPage ?? 1
        const perPage = pagination.perPage ?? PER_PAGE
        // eslint-disable-next-line no-type-assertion/no-type-assertion -- demo filter shape
        const departments = (options.filters as { department?: string[] })
          .department
        const sort = options.sortings[0]
        const connection = await queryEmployees({
          page,
          perPage,
          search: options.search,
          departments,
          sort: sort
            ? // eslint-disable-next-line no-type-assertion/no-type-assertion -- demo sort field
              { field: sort.field as SortableField, order: sort.order }
            : undefined,
        })
        return {
          type: "pages" as const,
          records: connection.edges.map((edge) => edge.node),
          total: connection.totalCount,
          perPage,
          currentPage: page,
          pagesCount: Math.max(1, Math.ceil(connection.totalCount / perPage)),
        }
      },
    },
    itemOnClick: (employee) => () => onSelect(employee),
  })

const meta = {
  title: "Data Collection/Visualizations/Graph",
  parameters: {
    layout: "fullscreen",
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        component:
          "Graph (org-chart) visualization for Data Collection. It consumes the same `useDataCollectionSource` as every other view, lazily loading each node's children from the `dataAdapter` on expand. Switch between Graph, Table and Card with the visualization selector — they all share one source.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const graphVisualization = {
  type: "graph" as const,
  // No filters/sort in the graph — it's a tree, not a row list. The table view
  // (no override) keeps the source filters + column sort.
  filters: {},
  sortings: {},
  options: {
    title: (employee: Employee) => employee.name,
    subtitle: (employee: Employee) => employee.title,
    avatar: avatarFor,
    tags: tagsFor,
    nodeTagTypes: NODE_TAG_TYPES,
    nodeTagTypeLabels: NODE_TAG_TYPE_LABELS,
    // Reports is pinned (always visible); location is on by default. Legal
    // entity + hire date are toggled on (and reordered) from the Data
    // Collection settings, exactly like table columns.
    pinnedTagTypes: ["status"] as const,
    defaultVisibleTagTypes: ["raw"] as const,
    currentUserNodeId: "cto-a",
    // The backend returns the count, so the expander shows before loading.
    getChildrenCount: (employee: EmployeeNode) => employee.directReportsCount,
    childrenFilters: (parentId: string | null) =>
      // eslint-disable-next-line no-type-assertion/no-type-assertion -- demo filter shape understood by the mock adapter
      ({ parentId: [parentId ?? ROOT_TOKEN] }) as Record<string, string[]>,
    loadNodePath: queryAncestorPath,
    getParentId: (employee: Employee) => employee.managerId,
  },
}

const tableVisualization = {
  type: "table" as const,
  options: {
    // Let the table configure its columns (show/hide + reorder) from the
    // shared Data Collection settings — same mechanism as the graph metadata.
    allowColumnHiding: true,
    allowColumnReordering: true,
    columns: [
      {
        id: "name",
        label: "Name",
        sorting: "name",
        render: (employee: Employee) => {
          const [firstName = "", lastName = ""] = employee.name.split(" ")
          return { type: "person" as const, value: { firstName, lastName } }
        },
      },
      {
        id: "title",
        label: "Title",
        sorting: "title",
        render: (employee: Employee) => employee.title,
      },
      {
        id: "department",
        label: "Department",
        sorting: "department",
        render: (employee: Employee) => employee.department,
      },
    ],
  },
}

const DetailField = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between gap-4">
    <dt className="text-f1-foreground-secondary">{label}</dt>
    <dd className="font-medium text-f1-foreground">{value}</dd>
  </div>
)

/**
 * The detail view is the consumer's responsibility, NOT F0Graph's: the graph
 * forwards the node click through `source.itemOnClick`, and here we open an
 * F0Dialog (right side panel) with the employee's avatar, name and position.
 */
const OrgChartExample = ({
  defaultExpandDepth,
}: {
  defaultExpandDepth: number
}) => {
  const [selected, setSelected] = useState<EmployeeNode | null>(null)
  const [revealId, setRevealId] = useState<string | undefined>(undefined)
  const source = useOrgSource(setSelected, setRevealId)

  return (
    <div className="h-screen w-full bg-f1-background pt-4">
      <OneDataCollection
        source={source}
        fullHeight
        visualizations={[
          {
            ...graphVisualization,
            options: {
              ...graphVisualization.options,
              defaultExpandDepth,
              revealNodeId: revealId,
            },
          },
          tableVisualization,
        ]}
      />
      <F0Dialog
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        position="right"
        title={selected?.name}
        width="sm"
      >
        {selected ? (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <F0AvatarPerson
                firstName={selected.name.split(" ")[0] ?? ""}
                lastName={selected.name.split(" ")[1] ?? ""}
                src={`https://i.pravatar.cc/150?u=${selected.id}`}
                size="2xl"
              />
              <div>
                <div className="text-lg font-medium text-f1-foreground">
                  {selected.name}
                </div>
                <div className="text-f1-foreground-secondary">
                  {selected.title}
                </div>
              </div>
            </div>
            <dl className="flex flex-col gap-3">
              <DetailField label="Department" value={selected.department} />
              <DetailField label="Location" value={locationFor(selected.id)} />
              <DetailField
                label="Total reports"
                value={String(selected.totalReportsCount)}
              />
            </dl>
          </div>
        ) : null}
      </F0Dialog>
    </div>
  )
}

/**
 * Default org chart: the two CEOs and their direct reports are shown
 * (`defaultExpandDepth: 1`). Every visible node declares how many reports it
 * has and shows an expander; clicking it reveals the next level — fetched
 * lazily from the same source with a simulated delay. Filter, or switch to
 * Table/Card: it's the same `useDataCollectionSource`.
 */
export const OrgChart: Story = {
  render: () => <OrgChartExample defaultExpandDepth={1} />,
}

/**
 * Same data, but the first two levels are pre-loaded and expanded on mount
 * (`defaultExpandDepth: 2`) for a fuller initial picture.
 */
export const PreExpanded: Story = {
  render: () => <OrgChartExample defaultExpandDepth={2} />,
}

// ─────────────────────────────────────────────────────────────────────────
// LiveUpdate story: a small, self-contained mock org (independent of
// EMPLOYEES above) that the demo controls mutate directly, so a later fetch
// (e.g. re-expanding a node) stays consistent with whatever `liveUpdate`
// already applied in place.
// ─────────────────────────────────────────────────────────────────────────

type LiveUpdateEmployee = {
  id: string
  name: string
  title: string
  managerId: string | null
}

type LiveUpdateNode = LiveUpdateEmployee & { childrenCount: number }

const LIVE_UPDATE_MOVE_SOURCE_ID = "only-report"
const LIVE_UPDATE_MOVE_TARGET_ID = "vp-sales"
const LIVE_UPDATE_REMOVE_ID = "vp-support"

const LIVE_UPDATE_INITIAL: LiveUpdateEmployee[] = [
  { id: "ceo", name: "Alice Monroe", title: "CEO", managerId: null },
  {
    id: "vp-eng",
    name: "Ben Ortiz",
    title: "VP Engineering",
    managerId: "ceo",
  },
  {
    id: "em",
    name: "Chloe Nguyen",
    title: "Engineering Manager",
    managerId: "vp-eng",
  },
  {
    // The only direct report of "em" — moving it away leaves "em" childless.
    id: LIVE_UPDATE_MOVE_SOURCE_ID,
    name: "Owen Marsh",
    title: "Junior Engineer",
    managerId: "em",
  },
  {
    id: "senior-eng",
    name: "Diego Ruiz",
    title: "Senior Engineer",
    managerId: "vp-eng",
  },
  {
    // A leaf today — the move target gains its first child without a fetch.
    id: LIVE_UPDATE_MOVE_TARGET_ID,
    name: "Farah Idris",
    title: "VP Sales",
    managerId: "ceo",
  },
  {
    id: LIVE_UPDATE_REMOVE_ID,
    name: "Grace Kim",
    title: "VP Customer Support",
    managerId: "ceo",
  },
  {
    id: "support-lead",
    name: "Hugo Costa",
    title: "Support Team Lead",
    managerId: LIVE_UPDATE_REMOVE_ID,
  },
  {
    id: "support-agent",
    name: "Ivy Chen",
    title: "Support Agent",
    managerId: "support-lead",
  },
]

const liveUpdateChildrenOf = (
  store: LiveUpdateEmployee[],
  parentId: string | null
): LiveUpdateEmployee[] =>
  store.filter((employee) => employee.managerId === parentId)

const toLiveUpdateNode = (
  store: LiveUpdateEmployee[],
  employee: LiveUpdateEmployee
): LiveUpdateNode => ({
  ...employee,
  childrenCount: liveUpdateChildrenOf(store, employee.id).length,
})

/** Drops `id` and every descendant (by `managerId` chain) from the mock store. */
const removeWithDescendants = (
  store: LiveUpdateEmployee[],
  id: string
): LiveUpdateEmployee[] => {
  const toRemove = new Set([id])
  let changed = true
  while (changed) {
    changed = false
    for (const employee of store) {
      if (
        employee.managerId &&
        toRemove.has(employee.managerId) &&
        !toRemove.has(employee.id)
      ) {
        toRemove.add(employee.id)
        changed = true
      }
    }
  }
  return store.filter((employee) => !toRemove.has(employee.id))
}

const liveUpdateGraphVisualization = {
  type: "graph" as const,
  filters: {},
  sortings: {},
  options: {
    title: (employee: LiveUpdateEmployee) => employee.name,
    subtitle: (employee: LiveUpdateEmployee) => employee.title,
    getChildrenCount: (employee: LiveUpdateNode) => employee.childrenCount,
    childrenFilters: (parentId: string | null) =>
      // eslint-disable-next-line no-type-assertion/no-type-assertion -- demo filter shape understood by the mock adapter
      ({ parentId: [parentId ?? ROOT_TOKEN] }) as Record<string, string[]>,
    getParentId: (employee: LiveUpdateEmployee) => employee.managerId,
    // Pre-expand the whole (tiny) demo tree so every affected node is already
    // visible — the point is to watch it change in place, not to hunt for it.
    defaultExpandDepth: 3,
  },
}

/**
 * Buttons above the graph apply real `liveUpdate` batches: each click mutates
 * the mock store, then bumps `version` with the matching `upsert`/`remove` —
 * exactly like a caller reacting to a websocket/subscription event.
 */
const LiveUpdateGraphExample = () => {
  const storeRef = useRef<LiveUpdateEmployee[]>(LIVE_UPDATE_INITIAL)
  const [liveUpdate, setLiveUpdate] = useState<{
    version: number
    upsert?: LiveUpdateNode[]
    remove?: string[]
  }>({ version: 0 })
  const [renamed, setRenamed] = useState(false)
  const [moved, setMoved] = useState(false)
  const [removed, setRemoved] = useState(false)

  const source = useDataCollectionSource<LiveUpdateNode>({
    dataAdapter: {
      paginationType: "pages",
      perPage: 20,
      fetchData: async (options) => {
        // eslint-disable-next-line no-type-assertion/no-type-assertion -- demo filter shape from the graph view
        const requestedParent = (options.filters as { parentId?: string[] })
          .parentId?.[0]
        const managerId =
          requestedParent === undefined || requestedParent === ROOT_TOKEN
            ? null
            : requestedParent
        const records = liveUpdateChildrenOf(storeRef.current, managerId).map(
          (employee) => toLiveUpdateNode(storeRef.current, employee)
        )
        return {
          type: "pages" as const,
          records,
          total: records.length,
          perPage: Math.max(records.length, 1),
          currentPage: 1,
          pagesCount: 1,
        }
      },
    },
  })

  const handleRename = () => {
    const current = storeRef.current.find(
      (employee) => employee.id === LIVE_UPDATE_MOVE_SOURCE_ID
    )
    if (!current) return
    const renamedEmployee: LiveUpdateEmployee = {
      ...current,
      title: "Senior Software Engineer",
    }
    storeRef.current = storeRef.current.map((employee) =>
      employee.id === renamedEmployee.id ? renamedEmployee : employee
    )
    setLiveUpdate((prev) => ({
      version: prev.version + 1,
      upsert: [toLiveUpdateNode(storeRef.current, renamedEmployee)],
    }))
    setRenamed(true)
  }

  const handleMove = () => {
    const current = storeRef.current.find(
      (employee) => employee.id === LIVE_UPDATE_MOVE_SOURCE_ID
    )
    if (!current) return
    const movedEmployee: LiveUpdateEmployee = {
      ...current,
      managerId: LIVE_UPDATE_MOVE_TARGET_ID,
    }
    storeRef.current = storeRef.current.map((employee) =>
      employee.id === movedEmployee.id ? movedEmployee : employee
    )
    setLiveUpdate((prev) => ({
      version: prev.version + 1,
      upsert: [toLiveUpdateNode(storeRef.current, movedEmployee)],
    }))
    setMoved(true)
  }

  const handleRemove = () => {
    storeRef.current = removeWithDescendants(
      storeRef.current,
      LIVE_UPDATE_REMOVE_ID
    )
    setLiveUpdate((prev) => ({
      version: prev.version + 1,
      remove: [LIVE_UPDATE_REMOVE_ID],
    }))
    setRemoved(true)
  }

  return (
    <div className="flex h-screen w-full flex-col gap-3 bg-f1-background pt-4">
      <div className="flex flex-wrap items-center gap-2 px-4">
        <F0Button
          label="Rename node"
          variant="outline"
          onClick={handleRename}
          disabled={renamed}
        />
        <F0Button
          label="Move node to another parent"
          variant="outline"
          onClick={handleMove}
          disabled={moved}
        />
        <F0Button
          label="Remove node (cascade)"
          variant="critical"
          onClick={handleRemove}
          disabled={removed}
        />
      </div>
      <div className="min-h-0 flex-1">
        <OneDataCollection
          source={source}
          fullHeight
          visualizations={[
            {
              ...liveUpdateGraphVisualization,
              options: {
                ...liveUpdateGraphVisualization.options,
                liveUpdate,
              },
            },
          ]}
        />
      </div>
    </div>
  )
}

/**
 * Demonstrates the `liveUpdate` option: three controls above the org chart
 * apply real-time batches to the already-loaded tree, in place, with no
 * re-fetch and no collapse back to `defaultExpandDepth`.
 * - "Rename node" upserts `only-report` with a new title only.
 * - "Move node to another parent" upserts `only-report` with a new
 *   `managerId`. It's the *only* report of "Chloe Nguyen" (Engineering
 *   Manager) and moves under "Farah Idris" (VP Sales), who had no reports —
 *   covering both sides of the reconciliation: the old parent drops to zero
 *   children, the new (believed-leaf) parent gains its first child and
 *   becomes "loaded" without a fetch.
 * - "Remove node (cascade)" removes "Grace Kim" (VP Customer Support) along
 *   with her two descendants in a single batch, pruning them from the
 *   expanded set too.
 *
 * Each click only ever sends the record(s) that actually changed — the
 * touched parents' `childrenCount`/expander state are reconciled locally by
 * the hook from the in-memory tree.
 */
export const LiveUpdate: Story = {
  render: () => <LiveUpdateGraphExample />,
}
