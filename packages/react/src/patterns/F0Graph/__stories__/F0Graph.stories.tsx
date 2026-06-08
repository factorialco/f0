import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import "@xyflow/react/dist/style.css"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { F0Card } from "@/components/F0Card"
import { F0TagPerson } from "@/components/tags/F0TagPerson"
import { DataList } from "@/experimental/Lists/DataList"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
import { WhatsappChat } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { Searchable } from "../F0GraphSearch"
import type { DeferredNodesPayload, GraphNode } from "../types"

import {
  F0Graph,
  type F0GraphNodeRenderContext,
  type F0GraphProps,
} from "../F0Graph"
import { F0GraphNode } from "../F0GraphNode"

const meta = {
  title: "Graph/F0Graph",
  component: F0Graph<Employee>,
  tags: ["stable", "!autodocs"],
  decorators: [
    (Story) => (
      <div className="h-[600px] w-full bg-f1-background">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    // ---- Visible controls ----
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
interface Team {
  name: string
  members: number
}

interface Employee {
  name: string
  title: string
  pronouns?: string
  email?: string
  phone?: string
  workEmail?: string
  workplace?: string
  workableDays?: ReadonlyArray<"M" | "T" | "W" | "R" | "F" | "S" | "U">
  teams?: ReadonlyArray<Team>
}

const ALL_DAYS = ["M", "T", "W", "R", "F", "S", "U"] as const

const DAY_CODE_TO_INDEX: Record<(typeof ALL_DAYS)[number], number> = {
  M: 0,
  T: 1,
  W: 2,
  R: 3,
  F: 4,
  S: 5,
  U: 6,
}

function profileDefaults(
  id: string,
  name: string
): Pick<
  Employee,
  | "pronouns"
  | "email"
  | "phone"
  | "workEmail"
  | "workplace"
  | "workableDays"
  | "teams"
> {
  const slug = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]+/g, ".")
    .replace(/^\.|\.$/g, "")
  const hash = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const cities = [
    "Barcelona",
    "Madrid",
    "Lisbon",
    "Berlin",
    "Paris",
    "Amsterdam",
  ]
  const teamPool: Team[] = [
    { name: "Engineering", members: 23 },
    { name: "Time Tracking", members: 16 },
    { name: "Operations", members: 11 },
    { name: "Design", members: 8 },
  ]
  const phoneSuffix = (n: number) =>
    (100 + (hash % 800) + n).toString().padStart(3, "0")
  return {
    pronouns: hash % 2 === 0 ? "He/Him" : "She/Her",
    email: `${slug}@example.com`,
    phone: `+34 6${(700 + (hash % 99)).toString().padStart(2, "0")} ${phoneSuffix(0)} ${phoneSuffix(7)}`,
    workEmail: `${slug}@company.com`,
    workplace: cities[hash % cities.length],
    workableDays: ["M", "T", "R", "F", "U"],
    teams: [
      teamPool[hash % teamPool.length]!,
      teamPool[(hash + 1) % teamPool.length]!,
    ],
  }
}

const BASIC_NODES: GraphNode<Employee>[] = [
  {
    id: "1",
    parentId: null,
    data: {
      name: "Sofia Reyes",
      title: "Chief Executive Officer",
      ...profileDefaults("1", "Sofia Reyes"),
    },
    childrenCount: 2,
  },
  {
    id: "2",
    parentId: "1",
    data: {
      name: "Marcus Chen",
      title: "Chief Technology Officer",
      ...profileDefaults("2", "Marcus Chen"),
    },
    childrenCount: 2,
  },
  {
    id: "3",
    parentId: "1",
    data: {
      name: "Elena Dupont",
      title: "Chief Financial Officer",
      ...profileDefaults("3", "Elena Dupont"),
    },
    childrenCount: 0,
  },
  {
    id: "4",
    parentId: "2",
    data: {
      name: "Tomás Herrera",
      title: "Engineering Manager",
      ...profileDefaults("4", "Tomas Herrera"),
    },
    childrenCount: 0,
  },
  {
    id: "5",
    parentId: "2",
    data: {
      name: "Aisha Patel",
      title: "QA Lead",
      ...profileDefaults("5", "Aisha Patel"),
    },
    childrenCount: 0,
  },
]

function renderEmployee(
  node: GraphNode<Employee>,
  ctx: F0GraphNodeRenderContext
) {
  const { name, title } = node.data
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

export const Tree: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    defaultExpandDepth: 2,
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

export const WithControls: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
  },
}

/** F0Graph rendered without the fullscreen toggle — useful when embedding inside a constrained container, modal, or panel. */
export const WithoutFullscreen: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "F0Graph rendered with `fullScreen={false}`. The canvas is inset from its container with a rounded border instead of bleeding edge-to-edge — use this when embedding the graph inside a card, modal, or constrained panel rather than as a standalone page.",
      },
    },
  },
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
    fullScreen: false,
  },
}

/** Demonstrates per-expansion async loading via `rootNodes` + `loadChildren`. */
export const Lazy: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "**On-demand loading per expansion.** The CEO and her three direct reports are visible immediately — each VP shows an expand affordance because they declare `childrenCount > 0` with `childrenLoaded: false`. Expanding any node calls `loadChildren(nodeId)` (here with a simulated 800 ms delay) and merges the freshly fetched subtree. Several managers themselves have unloaded reports, so you can drill multiple levels deep — paying only for the branches you open.\n\nUse this pattern when the full tree is too large to ship upfront and the server can paginate by parent. Contrast with `StagedLoading`, which loads one full deferred batch after the initial paint.",
      },
    },
  },
  args: {
    rootNodes: [
      {
        id: "ceo",
        parentId: null,
        data: { name: "Sofia Reyes", title: "Chief Executive Officer" },
        childrenCount: 3,
        childrenLoaded: true,
      },
      {
        id: "vp-eng",
        parentId: "ceo",
        data: { name: "Marcus Chen", title: "VP Engineering" },
        childrenCount: 4,
        childrenLoaded: false,
      },
      {
        id: "vp-product",
        parentId: "ceo",
        data: { name: "Laura Kim", title: "VP Product" },
        childrenCount: 3,
        childrenLoaded: false,
      },
      {
        id: "vp-people",
        parentId: "ceo",
        data: { name: "James Okafor", title: "VP People" },
        childrenCount: 2,
        childrenLoaded: false,
      },
    ],
    defaultExpandedNodes: new Set(["ceo"]),
    loadChildren: async (nodeId: string) => {
      const lazyChildren: Record<
        string,
        Array<{
          id: string
          data: { name: string; title: string }
          childrenCount: number
        }>
      > = {
        "vp-eng": [
          {
            id: "eng-mgr-1",
            data: { name: "Nina Volkov", title: "Engineering Manager" },
            childrenCount: 3,
          },
          {
            id: "eng-mgr-2",
            data: { name: "Diego Martín", title: "Engineering Manager" },
            childrenCount: 2,
          },
          {
            id: "eng-staff-1",
            data: { name: "Yuki Tanaka", title: "Staff Engineer" },
            childrenCount: 0,
          },
          {
            id: "eng-staff-2",
            data: { name: "Priya Sharma", title: "Staff Engineer" },
            childrenCount: 0,
          },
        ],
        "vp-product": [
          {
            id: "pm-lead",
            data: { name: "Aiko Saito", title: "Product Lead" },
            childrenCount: 2,
          },
          {
            id: "design-lead",
            data: { name: "Tomás Vega", title: "Design Lead" },
            childrenCount: 2,
          },
          {
            id: "research-lead",
            data: { name: "Sara Ahmed", title: "Research Lead" },
            childrenCount: 0,
          },
        ],
        "vp-people": [
          {
            id: "talent-lead",
            data: { name: "Ethan O'Brien", title: "Talent Lead" },
            childrenCount: 2,
          },
          {
            id: "people-ops",
            data: { name: "Mia Lefebvre", title: "People Ops" },
            childrenCount: 0,
          },
        ],
        "eng-mgr-1": [
          {
            id: "eng-mgr-1-ic-1",
            data: { name: "Hiro Watanabe", title: "Senior Engineer" },
            childrenCount: 0,
          },
          {
            id: "eng-mgr-1-ic-2",
            data: { name: "Carla Rivas", title: "Software Engineer" },
            childrenCount: 0,
          },
          {
            id: "eng-mgr-1-ic-3",
            data: { name: "Ben Thompson", title: "Software Engineer" },
            childrenCount: 0,
          },
        ],
        "eng-mgr-2": [
          {
            id: "eng-mgr-2-ic-1",
            data: { name: "Lina Petrov", title: "Senior Engineer" },
            childrenCount: 0,
          },
          {
            id: "eng-mgr-2-ic-2",
            data: { name: "Omar Haddad", title: "Software Engineer" },
            childrenCount: 0,
          },
        ],
        "pm-lead": [
          {
            id: "pm-1",
            data: { name: "Riya Kapoor", title: "Product Manager" },
            childrenCount: 0,
          },
          {
            id: "pm-2",
            data: { name: "Léa Dubois", title: "Product Manager" },
            childrenCount: 0,
          },
        ],
        "design-lead": [
          {
            id: "des-1",
            data: { name: "Kenji Mori", title: "Senior Designer" },
            childrenCount: 0,
          },
          {
            id: "des-2",
            data: { name: "Eva Lindgren", title: "Product Designer" },
            childrenCount: 0,
          },
        ],
        "talent-lead": [
          {
            id: "rec-1",
            data: { name: "Pablo Núñez", title: "Senior Recruiter" },
            childrenCount: 0,
          },
          {
            id: "rec-2",
            data: { name: "Anya Sokolova", title: "Recruiter" },
            childrenCount: 0,
          },
        ],
      }
      // Simulate async delay
      await new Promise((r) => setTimeout(r, 800))
      const children = lazyChildren[nodeId] ?? []
      return children.map((child) => ({
        id: child.id,
        parentId: nodeId,
        data: child.data,
        childrenCount: child.childrenCount,
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
    nodes: makeLargeTree(600),
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
  },
}

// ─── Intent-searchable stories ─────────────────────────────────

/**
 * Demonstrates fully controlled `expandedNodes` and `selectedNodes`.
 *
 * The toolbar above the graph shows the current controlled values and lets
 * you mutate them from outside the component, proving that the graph
 * reflects external state rather than owning it.
 */
export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Both `expandedNodes` and `selectedNodes` are passed as `Set<string>` props and updated only via the external buttons in the toolbar. The graph never mutates this state on its own — every change you see comes from the parent component.",
      },
    },
  },
  render: () => {
    const allIds = BASIC_NODES.map((n) => n.id)
    const [expandedNodes, setExpandedNodes] = useState(
      () => new Set<string>(["1", "2"])
    )
    const [selectedNodes, setSelectedNodes] = useState(() => new Set<string>())

    const expandedLabel =
      expandedNodes.size === 0 ? "(none)" : [...expandedNodes].sort().join(", ")
    const selectedLabel =
      selectedNodes.size === 0 ? "(none)" : [...selectedNodes].sort().join(", ")

    return (
      <div className="flex h-full flex-col gap-2">
        <div className="flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background-secondary p-3">
          <div className="flex flex-col gap-1 text-sm text-f1-foreground">
            <span>
              <span className="font-semibold">expandedNodes:</span>{" "}
              <code className="rounded bg-f1-background px-1 py-0.5 text-xs">
                {expandedLabel}
              </code>
            </span>
            <span>
              <span className="font-semibold">selectedNodes:</span>{" "}
              <code className="rounded bg-f1-background px-1 py-0.5 text-xs">
                {selectedLabel}
              </code>
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <F0Button
              size="sm"
              variant="outline"
              label="Expand all"
              onClick={() => setExpandedNodes(new Set(allIds))}
            />
            <F0Button
              size="sm"
              variant="outline"
              label="Collapse all"
              onClick={() => setExpandedNodes(new Set())}
            />
            <F0Button
              size="sm"
              variant="outline"
              label="Select CTO"
              onClick={() =>
                setSelectedNodes((prev) => {
                  const next = new Set(prev)
                  next.add("2")
                  return next
                })
              }
            />
            <F0Button
              size="sm"
              variant="outline"
              label="Clear selection"
              onClick={() => setSelectedNodes(new Set())}
            />
          </div>
        </div>
        <div className="min-h-0 flex-1">
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
        </div>
      </div>
    )
  },
}

/** Demonstrates declarative `searchable` config for indexed search with auto-expand and fly-to. */
export const WithSearch: Story = {
  args: {
    nodes: makeLargeTree(60),
    renderNode: renderEmployee,
    searchable: {
      getLabel: (node: GraphNode<Employee>) => node.data.name,
      getSecondaryLabel: (node: GraphNode<Employee>) => node.data.title,
      placeholder: "Search people…",
      noResultsLabel: "No matches found",
    } satisfies Searchable<Employee>,
    showControls: true,
    defaultExpandDepth: 1,
  },
}

// ─── Detail Panel ──────────────────────────────────────────────

function DetailPanelSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col border-0 border-t border-dashed border-f1-border-secondary">
      <header className="flex items-center px-4 pb-2 pt-3">
        <span className="text-base font-semibold leading-5 text-f1-foreground">
          {title}
        </span>
      </header>
      <div className="flex flex-col gap-2 pb-2">{children}</div>
    </section>
  )
}

const DETAIL_NODES_BY_ID = new Map(BASIC_NODES.map((n) => [n.id, n]))

/**
 * Demonstrates the `resource` detail-panel variant with a rich header,
 * primary + secondary actions, an overflow menu, and grouped content
 * sections — the same pattern used in the F0Graph dev playground.
 */
export const WithDetailPanel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The detail panel uses the `resource` variant: a custom avatar header, action row (primary + secondary + overflow), and grouped sections built with `DataList`, `Weekdays`, `F0TagPerson`, and `F0Card`. Click any node to open it.",
      },
    },
  },
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    detailPanel: (node: GraphNode<Employee>) => {
      const e = node.data
      const [firstName = "", lastName = ""] = e.name.split(" ")
      const manager = node.parentId
        ? DETAIL_NODES_BY_ID.get(node.parentId)
        : undefined
      const days = e.workableDays ?? []
      return {
        variant: "resource" as const,
        header: (
          <div className="flex flex-col gap-[10px] px-5 pb-3 pt-6">
            <F0AvatarPerson
              firstName={firstName}
              lastName={lastName}
              size="xl"
            />
            <div className="flex flex-col">
              <div className="flex items-end gap-1.5">
                <span className="text-xl font-semibold leading-7 text-f1-foreground">
                  {e.name}
                </span>
                {e.pronouns && (
                  <span className="text-sm font-medium leading-5 text-f1-foreground-secondary">
                    {`(${e.pronouns})`}
                  </span>
                )}
              </div>
              {e.title && (
                <span className="text-lg text-f1-foreground-secondary">
                  {e.title}
                </span>
              )}
            </div>
          </div>
        ),
        actions: [
          {
            label: "View profile",
            // eslint-disable-next-line no-console
            onClick: () => console.log("view profile", node.id),
          },
          {
            label: "Send message",
            icon: WhatsappChat,
            // eslint-disable-next-line no-console
            onClick: () => console.log("message", node.id),
          },
          {
            label: "Copy link",
            // eslint-disable-next-line no-console
            onClick: () => console.log("copy link", node.id),
          },
          {
            label: "Remove",
            // eslint-disable-next-line no-console
            onClick: () => console.log("remove", node.id),
          },
        ],
        children: (
          <>
            <DetailPanelSection title="Contact details">
              <div className="flex flex-col px-3 pb-1">
                <DataList label="Email">
                  <DataList.Item text={e.email ?? "—"} />
                </DataList>
                <DataList label="Phone number">
                  <DataList.Item text={e.phone ?? "—"} />
                </DataList>
              </div>
            </DetailPanelSection>
            <DetailPanelSection title="Work details">
              <div className="flex flex-col px-3 pb-1">
                <DataList label="Email">
                  <DataList.Item text={e.workEmail ?? "—"} />
                </DataList>
                <DataList label="Workplace">
                  <DataList.Item text={e.workplace ?? "—"} />
                </DataList>
              </div>
              <div className="flex flex-col gap-0.5 px-4 pb-2">
                <span className="text-base leading-5 text-f1-foreground-secondary">
                  Workable days
                </span>
                <Weekdays
                  activatedDays={days
                    .map((d) => DAY_CODE_TO_INDEX[d])
                    .filter((i): i is number => typeof i === "number")}
                />
              </div>
              {manager && (
                <div className="flex flex-col gap-0.5 px-4 pb-2">
                  <span className="text-base leading-5 text-f1-foreground-secondary">
                    Managed by
                  </span>
                  <F0TagPerson name={manager.data.name} />
                </div>
              )}
            </DetailPanelSection>
            {e.teams && e.teams.length > 0 && (
              <DetailPanelSection title="Teams">
                <div className="flex items-stretch gap-2 px-3 pb-5">
                  {e.teams.map((t) => (
                    <div key={t.name} className="flex-1">
                      <F0Card
                        compact
                        fullHeight
                        avatar={{ type: "team", name: t.name }}
                        title={t.name}
                        description={`${t.members} members`}
                      />
                    </div>
                  ))}
                </div>
              </DetailPanelSection>
            )}
          </>
        ),
      }
    },
    defaultExpandDepth: 2,
    showControls: true,
  },
}

// ─── Progressive / staged loading stories ─────────────────────

const INITIAL_STAGED_NODES = makeLargeTree(30)

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

/** Demonstrates progressive payload loading with deferred batch merge. */
export const StagedLoading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "**Single deferred batch merged after initial paint.** 30 nodes appear immediately and the graph auto-expands to depth 2 so initial members are visible. After 2.5 s, 500 additional nodes resolve and merge in as new siblings under the existing departments — watch the columns grow.\n\nUse `deferredNodes` when you can ship a small navigable tree fast and stream the rest in one batch. For per-expansion fetching instead, see `Lazy`.",
      },
    },
  },
  args: {
    nodes: INITIAL_STAGED_NODES,
    deferredNodes: new Promise<DeferredNodesPayload<Employee>>((resolve) => {
      setTimeout(() => resolve(makeDeferredPayload(500)), 2500)
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
            getLabel: (node: GraphNode<Employee>) => node.data.name,
            getSecondaryLabel: (node: GraphNode<Employee>) => node.data.title,
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
            const { name, title } = node.data
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
