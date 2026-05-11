import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import "@xyflow/react/dist/style.css"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { EdgeVariant } from "../F0GraphEdge"
import type { Searchable } from "../F0GraphSearch"
import type { DeferredNodesPayload, GraphEdge, GraphNode } from "../types"

import {
  F0Graph,
  type F0GraphNodeRenderContext,
  type F0GraphProps,
} from "../F0Graph"
import { F0GraphNode } from "../F0GraphNode"

const meta = {
  title: "Graph/F0Graph",
  component: F0Graph,
  tags: ["stable"],
  decorators: [
    (Story) => (
      <div className="h-[600px] w-full bg-f1-background">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    // ---- Visible controls ----
    direction: {
      control: "inline-radio",
      options: ["TB", "LR"],
    },
    selectionMode: {
      control: "inline-radio",
      options: ["single", "multi", "none"],
    },
    showControls: { control: "boolean" },
    fullScreen: { control: "boolean" },
    defaultExpandDepth: { control: { type: "number", min: 0, max: 5 } },
    zoomPreset: {
      control: "select",
      options: ["default", "dense", "sparse"],
    },
    minZoom: {
      control: { type: "number", min: 0.01, max: 1, step: 0.01 },
    },
    maxZoom: {
      control: { type: "number", min: 1, max: 4, step: 0.1 },
    },
    detailPanelWidth: {
      control: { type: "range", min: 200, max: 600, step: 8 },
    },

    // ---- Hidden from controls ----
    nodes: { table: { disable: true } },
    edges: { table: { disable: true } },
    rootNodes: { table: { disable: true } },
    loadChildren: { table: { disable: true } },
    renderNode: { table: { disable: true } },
    renderEdge: { table: { disable: true } },
    defaultDirection: { table: { disable: true } },
    zoomThresholds: { table: { disable: true } },
    defaultZoom: { table: { disable: true } },
    expandedNodes: { table: { disable: true } },
    defaultExpandedNodes: { table: { disable: true } },
    onExpandToggle: { table: { disable: true } },
    selectedNodes: { table: { disable: true } },
    onNodeSelect: { table: { disable: true } },
    focusedNode: { table: { disable: true } },
    highlightedNodes: { table: { disable: true } },
    layoutEngine: { table: { disable: true } },
    searchValue: { table: { disable: true } },
    onSearchChange: { table: { disable: true } },
    searchLoading: { table: { disable: true } },
    searchable: { table: { disable: true } },
    onSearchResultSelect: { table: { disable: true } },
    detailPanel: { table: { disable: true } },
    detailPanelAriaLabel: { table: { disable: true } },
    controlLabels: { table: { disable: true } },
    onZoomLevelChange: { table: { disable: true } },
    onViewportChange: { table: { disable: true } },
    onVisibleNodesChange: { table: { disable: true } },
  },
} satisfies Meta<F0GraphProps<Employee>>

export default meta
type Story = StoryObj<F0GraphProps<Employee>>

// ─── Sample data ───────────────────────────────────────────────
interface Employee {
  name: string
  title: string
  avatar?: string
}

const BASIC_NODES: GraphNode<Employee>[] = [
  {
    id: "1",
    parentId: null,
    data: { name: "Sofia Reyes", title: "Chief Executive Officer" },
    childrenCount: 2,
  },
  {
    id: "2",
    parentId: "1",
    data: { name: "Marcus Chen", title: "Chief Technology Officer" },
    childrenCount: 2,
  },
  {
    id: "3",
    parentId: "1",
    data: { name: "Elena Dupont", title: "Chief Financial Officer" },
    childrenCount: 0,
  },
  {
    id: "4",
    parentId: "2",
    data: { name: "Tomás Herrera", title: "Engineering Manager" },
    childrenCount: 0,
  },
  {
    id: "5",
    parentId: "2",
    data: { name: "Aisha Patel", title: "QA Lead" },
    childrenCount: 0,
  },
]

function renderEmployee(
  node: GraphNode<Employee>,
  ctx: F0GraphNodeRenderContext
) {
  const { name, title } = node.data as Employee
  const [firstName = "", lastName = ""] = name.split(" ")
  return (
    <F0GraphNode
      {...ctx}
      avatar={{ type: "person", firstName, lastName }}
      title={name}
      subtitle={title}
    />
  )
}

// ─── Stories ───────────────────────────────────────────────────

export const BasicTree: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    defaultExpandDepth: 2,
  },
}

export const CompactView: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    defaultZoom: 0.5,
    defaultExpandDepth: 2,
  },
}

export const DotView: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    defaultZoom: 0.2,
    defaultExpandDepth: 2,
  },
}

export const WithControls: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
  },
}

/** Demonstrates async loading via `rootNodes` + `loadChildren` for large or server-driven trees. */
export const Lazy: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use `rootNodes` + `loadChildren` to fetch a node's children on demand instead of providing the full tree upfront.",
      },
    },
  },
  args: {
    rootNodes: [
      {
        id: "root",
        parentId: null,
        data: { name: "Sofia Reyes", title: "Chief Executive Officer" },
        childrenCount: 3,
        childrenLoaded: false,
      },
    ],
    loadChildren: async (nodeId: string) => {
      const teamsByNode: Record<
        string,
        Array<{ name: string; title: string }>
      > = {
        root: [
          { name: "Marcus Chen", title: "VP Engineering" },
          { name: "Laura Kim", title: "VP Product" },
          { name: "James Okafor", title: "VP People" },
        ],
        "root-child-0": [
          { name: "Nina Volkov", title: "Staff Engineer" },
          { name: "Diego Martín", title: "Senior Engineer" },
        ],
        "root-child-1": [
          { name: "Yuki Tanaka", title: "Product Manager" },
          { name: "Priya Sharma", title: "Product Designer" },
        ],
      }
      // Simulate async delay
      await new Promise((r) => setTimeout(r, 800))
      const team = teamsByNode[nodeId]
      if (team) {
        return team.map((member, i) => ({
          id: `${nodeId}-child-${i}`,
          parentId: nodeId,
          data: member,
          childrenCount: nodeId === "root" ? 2 : 0,
          childrenLoaded: false,
        }))
      }
      return Array.from({ length: 2 }, (_, i) => ({
        id: `${nodeId}-child-${i}`,
        parentId: nodeId,
        data: {
          name: `Team Member ${i + 1}`,
          title: "Individual Contributor",
        },
        childrenCount: 0,
        childrenLoaded: false,
      }))
    },
    renderNode: renderEmployee,
    showControls: true,
  },
}

// Generate a large tree for performance testing
const DEPARTMENTS = [
  {
    head: { name: "Marcus Chen", title: "VP Engineering" },
    roles: [
      "Staff Engineer",
      "Senior Engineer",
      "Software Engineer",
      "Engineering Manager",
      "QA Engineer",
      "DevOps Engineer",
      "Frontend Engineer",
      "Backend Engineer",
      "Mobile Engineer",
      "Site Reliability Engineer",
    ],
  },
  {
    head: { name: "Laura Kim", title: "VP Product" },
    roles: [
      "Senior Product Manager",
      "Product Manager",
      "Product Analyst",
      "Product Designer",
      "UX Researcher",
      "Technical Writer",
    ],
  },
  {
    head: { name: "James Okafor", title: "VP People" },
    roles: [
      "People Partner",
      "Talent Acquisition Lead",
      "Recruiter",
      "People Operations",
      "Compensation Analyst",
      "L&D Specialist",
    ],
  },
  {
    head: { name: "Elena Dupont", title: "VP Finance" },
    roles: [
      "Financial Controller",
      "Senior Accountant",
      "Accountant",
      "Payroll Specialist",
      "FP&A Analyst",
    ],
  },
  {
    head: { name: "Amir Hassan", title: "VP Sales" },
    roles: [
      "Sales Director",
      "Account Executive",
      "Sales Development Rep",
      "Account Manager",
      "Solutions Engineer",
      "Sales Operations",
      "Customer Success Manager",
    ],
  },
]

const FIRST_NAMES = [
  "Nina",
  "Diego",
  "Yuki",
  "Priya",
  "Liam",
  "Fatima",
  "Noah",
  "Marta",
  "Oliver",
  "Sara",
  "Hugo",
  "Chloe",
  "André",
  "Mei",
  "Oscar",
  "Ines",
  "Leo",
  "Dana",
  "Erik",
  "Zara",
  "Mateo",
  "Nadia",
  "Ravi",
  "Clara",
  "Joel",
  "Amara",
  "Kai",
  "Elsa",
  "Marco",
  "Lena",
  "Adam",
  "Vera",
  "Ivan",
  "Rosa",
  "Sam",
  "Leila",
  "Jan",
  "Petra",
  "Alex",
  "Nora",
  "Tomás",
  "Aisha",
  "Finn",
  "Julia",
  "Bruno",
  "Hana",
  "Lukas",
  "Dina",
  "Felix",
  "Sana",
]

const LAST_NAMES = [
  "Volkov",
  "Martín",
  "Tanaka",
  "Sharma",
  "Andersen",
  "Benali",
  "Williams",
  "Ferreira",
  "Park",
  "Novak",
  "Laurent",
  "Zhang",
  "Santos",
  "Lindqvist",
  "Moreau",
  "Kowalski",
  "Nakamura",
  "Al-Rashid",
  "Weber",
  "Johansson",
  "Rossi",
  "Müller",
  "Petrov",
  "García",
  "Silva",
  "Dubois",
  "Hayashi",
  "Berg",
  "Costa",
  "Larsson",
  "Ali",
  "Richter",
  "Popov",
  "Ortega",
  "Flores",
  "Yamazaki",
  "Khoury",
  "Bauer",
  "Eriksen",
  "Torres",
  "Herrera",
  "Patel",
  "Reyes",
  "Kim",
  "Oliveira",
  "Schmid",
  "Ito",
  "Bakker",
  "Hansen",
  "Meyer",
]

function makeLargeTree(count: number): GraphNode<Employee>[] {
  const nodes: GraphNode<Employee>[] = [
    {
      id: "root",
      parentId: null,
      data: { name: "Sofia Reyes", title: "Chief Executive Officer" },
      childrenCount: DEPARTMENTS.length,
    },
  ]

  let nameIndex = 0
  const getName = () => {
    const first = FIRST_NAMES[nameIndex % FIRST_NAMES.length] ?? "Alex"
    const last = LAST_NAMES[nameIndex % LAST_NAMES.length] ?? "Smith"
    nameIndex++
    return `${first} ${last}`
  }

  const perDept = Math.floor(
    (count - 1 - DEPARTMENTS.length) / DEPARTMENTS.length
  )

  for (let d = 0; d < DEPARTMENTS.length; d++) {
    const dept = DEPARTMENTS[d]!
    const deptId = `dept-${d}`
    nodes.push({
      id: deptId,
      parentId: "root",
      data: dept.head,
      childrenCount: perDept,
    })

    for (let i = 0; i < perDept; i++) {
      nodes.push({
        id: `${deptId}-member-${i}`,
        parentId: deptId,
        data: {
          name: getName(),
          title: dept.roles[i % dept.roles.length] ?? "Team Member",
        },
        childrenCount: 0,
      })
    }
  }

  return nodes
}

export const LargeTree: Story = {
  args: {
    nodes: makeLargeTree(60),
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
  },
}

// ─── Intent-searchable stories ─────────────────────────────────

/** Demonstrates custom `renderNode` with rich content — avatar, badge overlay, and metadata. */
export const CustomNode: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Provide a custom `renderNode` callback to fully control node content and layout per zoom level.",
      },
    },
  },
  args: {
    nodes: BASIC_NODES,
    renderNode: (node: GraphNode<Employee>, ctx: F0GraphNodeRenderContext) => {
      const { name, title } = node.data as Employee
      const [firstName = "", lastName = ""] = name.split(" ")
      const isLeader = (node.childrenCount ?? 0) > 0
      return (
        <F0GraphNode
          {...ctx}
          avatar={{ type: "person", firstName, lastName }}
          title={name}
          subtitle={title}
          tags={isLeader ? [{ type: "raw", text: "Manager" }] : undefined}
        />
      )
    },
    defaultExpandDepth: 2,
    showControls: true,
  },
}

/** Demonstrates `renderEdge` returning a custom styled edge element per edge variant. */
export const CustomEdge: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Provide a custom `renderEdge` to style edges per variant or use a custom edge component.",
      },
    },
  },
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    renderEdge: (edge: GraphEdge, variant: EdgeVariant) => {
      const color =
        variant === "highlighted"
          ? "var(--f1-color-accent)"
          : variant === "dimmed"
            ? "var(--f1-color-border-secondary)"
            : "var(--f1-color-border)"
      return (
        <line
          key={edge.id}
          stroke={color}
          strokeWidth={variant === "highlighted" ? 2.5 : 1.5}
          strokeDasharray={variant === "dimmed" ? "4 2" : undefined}
        />
      )
    },
    defaultExpandDepth: 2,
    showControls: true,
  },
}

/** Demonstrates controlled `expandedNodes` and `selectedNodes` via external state. */
export const Controlled: Story = {
  render: () => {
    const [expandedNodes, setExpandedNodes] = useState(
      () => new Set(["1", "2"])
    )
    const [selectedNodes, setSelectedNodes] = useState(() => new Set<string>())

    return (
      <F0Graph<Employee>
        nodes={BASIC_NODES}
        renderNode={renderEmployee}
        expandedNodes={expandedNodes}
        onExpandToggle={(nodeId, expanded) => {
          setExpandedNodes((prev) => {
            const next = new Set(prev)
            if (expanded) next.add(nodeId)
            else next.delete(nodeId)
            return next
          })
        }}
        selectionMode="multi"
        selectedNodes={selectedNodes}
        onNodeSelect={(nodeId, selected) => {
          setSelectedNodes((prev) => {
            const next = new Set(prev)
            if (selected) next.add(nodeId)
            else next.delete(nodeId)
            return next
          })
        }}
        showControls
      />
    )
  },
}

/** Demonstrates raw controlled search input (`searchValue`/`onSearchChange`) with user-managed behavior. */
export const RawSearch: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Raw search mode — own the input, drive everything yourself. Compare with WithSearch which uses the declarative `searchable` config.",
      },
    },
  },
  render: () => {
    const [searchValue, setSearchValue] = useState<string | undefined>("")
    const normalizedQuery = searchValue?.trim().toLowerCase() ?? ""
    const highlightedNodes =
      normalizedQuery.length === 0
        ? new Set<string>()
        : new Set(
            BASIC_NODES.filter((node) => {
              const label = `${node.data.name} ${node.data.title}`.toLowerCase()
              return label.includes(normalizedQuery)
            }).map((node) => node.id)
          )

    return (
      <F0Graph<Employee>
        nodes={BASIC_NODES}
        renderNode={renderEmployee}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchLoading={false}
        highlightedNodes={highlightedNodes}
        defaultExpandDepth={2}
        showControls
      />
    )
  },
}

/** Demonstrates declarative `searchable` config for indexed search with auto-expand and fly-to. */
export const WithSearch: Story = {
  args: {
    nodes: makeLargeTree(60),
    renderNode: renderEmployee,
    searchable: {
      getLabel: (node: GraphNode<Employee>) => (node.data as Employee).name,
      getSecondaryLabel: (node: GraphNode<Employee>) =>
        (node.data as Employee).title,
      placeholder: "Search people…",
      noResultsLabel: "No matches found",
    } satisfies Searchable<Employee>,
    showControls: true,
    defaultExpandDepth: 1,
  },
}

/** Demonstrates `detailPanel` for a right-side detail view on node selection. */
export const WithDetailPanel: Story = {
  parameters: {
    docs: {
      description: {
        story: "Wire `detailPanel` for a side detail view on node selection.",
      },
    },
  },
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    detailPanel: (node: GraphNode<Employee>) => {
      const { name, title } = node.data as Employee
      return {
        variant: "default" as const,
        title: name,
        description: title,
        children: (
          <div className="flex flex-col gap-3 p-4">
            <p className="text-sm text-f1-foreground">
              Direct reports: {node.childrenCount ?? 0}
            </p>
            <p className="text-xs text-f1-foreground-secondary">
              Node ID: {node.id}
            </p>
          </div>
        ),
      }
    },
    defaultExpandDepth: 2,
    showControls: true,
  },
}

// ─── Multi-Root ────────────────────────────────────────────────

const MULTI_ROOT_NODES: GraphNode<Employee>[] = [
  // Tree 1 — Engineering
  {
    id: "eng-root",
    parentId: null,
    data: { name: "Marcus Chen", title: "VP Engineering" },
    childrenCount: 2,
  },
  {
    id: "eng-fe",
    parentId: "eng-root",
    data: { name: "Nina Volkov", title: "Frontend Lead" },
    childrenCount: 0,
  },
  {
    id: "eng-be",
    parentId: "eng-root",
    data: { name: "Diego Martín", title: "Backend Lead" },
    childrenCount: 0,
  },
  // Tree 2 — Product
  {
    id: "prod-root",
    parentId: null,
    data: { name: "Laura Kim", title: "VP Product" },
    childrenCount: 2,
  },
  {
    id: "prod-pm",
    parentId: "prod-root",
    data: { name: "Yuki Tanaka", title: "Product Manager" },
    childrenCount: 0,
  },
  {
    id: "prod-design",
    parentId: "prod-root",
    data: { name: "Priya Sharma", title: "Product Designer" },
    childrenCount: 0,
  },
  // Tree 3 — People
  {
    id: "people-root",
    parentId: null,
    data: { name: "James Okafor", title: "VP People" },
    childrenCount: 1,
  },
  {
    id: "people-ops",
    parentId: "people-root",
    data: { name: "Fatima Benali", title: "People Operations" },
    childrenCount: 0,
  },
]

/** Demonstrates multiple disjoint trees rendered side-by-side (TB) via the built-in multi-root layout. */
export const MultiRoot: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Three independent org trees with no shared parent. The built-in layout engine stacks them along the cross axis with a `rootSep` gap.",
      },
    },
  },
  args: {
    nodes: MULTI_ROOT_NODES,
    renderNode: renderEmployee,
    defaultExpandDepth: 2,
    showControls: true,
  },
}

// ─── Progressive / staged loading stories ─────────────────────

const INITIAL_STAGED_NODES = makeLargeTree(50)

function makeDeferredPayload(count: number): DeferredNodesPayload<Employee> {
  const nodes: GraphNode<Employee>[] = []
  let nameIndex = 100
  const getName = () => {
    const first = FIRST_NAMES[nameIndex % FIRST_NAMES.length] ?? "Alex"
    const last = LAST_NAMES[nameIndex % LAST_NAMES.length] ?? "Smith"
    nameIndex++
    return `${first} ${last}`
  }

  // Add more members to existing departments
  for (let d = 0; d < DEPARTMENTS.length; d++) {
    const dept = DEPARTMENTS[d]!
    const perDept = Math.floor(count / DEPARTMENTS.length)
    for (let i = 0; i < perDept; i++) {
      nodes.push({
        id: `dept-${d}-deferred-${i}`,
        parentId: `dept-${d}`,
        data: {
          name: getName(),
          title: dept.roles[i % dept.roles.length] ?? "Team Member",
        },
        childrenCount: 0,
      })
    }
  }

  return { nodes }
}

/** Demonstrates progressive payload loading: 50 nodes render immediately, 500 more merge after 1.5s. */
export const StagedLoading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass `deferredNodes` as a Promise to load additional nodes after the initial render. Here 50 nodes appear instantly while 500 more arrive after a simulated 1.5 s delay.",
      },
    },
  },
  args: {
    nodes: INITIAL_STAGED_NODES,
    deferredNodes: new Promise<DeferredNodesPayload<Employee>>((resolve) => {
      setTimeout(() => resolve(makeDeferredPayload(500)), 1500)
    }),
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
    onDeferredLoadComplete: () => {
      // eslint-disable-next-line no-console
      console.log("[StagedLoading] Deferred nodes merged")
    },
  },
}

/** Demonstrates error handling when the deferred payload rejects. */
export const StagedLoadingError: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When `deferredNodes` rejects, `onDeferredLoadError` fires and the initial tree remains intact.",
      },
    },
  },
  args: {
    nodes: INITIAL_STAGED_NODES,
    deferredNodes: new Promise<DeferredNodesPayload<Employee>>((_, reject) => {
      setTimeout(() => reject(new Error("Simulated network failure")), 1000)
    }),
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
    onDeferredLoadError: (error: Error) => {
      // eslint-disable-next-line no-console
      console.error("[StagedLoadingError] Deferred load failed:", error.message)
    },
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex h-full w-full flex-col gap-2 p-2">
      <div className="min-h-0 flex-1 overflow-hidden rounded-md border border-f1-border-secondary bg-f1-background">
        <F0Graph<Employee>
          nodes={BASIC_NODES}
          renderNode={renderEmployee}
          defaultExpandDepth={2}
        />
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-md border border-f1-border-secondary bg-f1-background">
        <F0Graph<Employee>
          nodes={BASIC_NODES}
          renderNode={renderEmployee}
          showControls
          defaultExpandDepth={2}
        />
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-md border border-f1-border-secondary bg-f1-background">
        <F0Graph<Employee>
          nodes={makeLargeTree(60)}
          renderNode={renderEmployee}
          searchable={{
            getLabel: (node: GraphNode<Employee>) =>
              (node.data as Employee).name,
            getSecondaryLabel: (node: GraphNode<Employee>) =>
              (node.data as Employee).title,
            placeholder: "Search people…",
            noResultsLabel: "No matches found",
          }}
          showControls
          defaultExpandDepth={1}
        />
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-md border border-f1-border-secondary bg-f1-background">
        <F0Graph<Employee>
          nodes={BASIC_NODES}
          renderNode={renderEmployee}
          detailPanel={(node: GraphNode<Employee>) => {
            const { name, title } = node.data as Employee
            return {
              variant: "default" as const,
              title: name,
              description: title,
              children: (
                <div className="flex flex-col gap-3 p-4">
                  <p className="text-sm text-f1-foreground">
                    Direct reports: {node.childrenCount ?? 0}
                  </p>
                  <p className="text-xs text-f1-foreground-secondary">
                    Node ID: {node.id}
                  </p>
                </div>
              ),
            }
          }}
          defaultExpandDepth={2}
          showControls
        />
      </div>
    </div>
  ),
}
