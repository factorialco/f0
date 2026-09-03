import type { Meta, StoryObj } from "@storybook/react-vite"

import { useCallback, useMemo, useState } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"
import "@xyflow/react/dist/style.css"
import { F0Button } from "@/components/F0Button"
import { Laptop, Money, People, Star } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { DeferredNodesPayload, GraphNode } from "../types"

import {
  F0Graph,
  type F0GraphNodeRenderContext,
  type F0GraphProps,
} from "../F0Graph"
import { F0GraphNode, type F0GraphNodeTag } from "../components/F0GraphNode"

/**
 * Waits for a story to stop moving before axe scans it.
 *
 * F0Graph fades cards in and cross-fades between zoom variants, and the
 * test-runner scans after two animation frames, around 33ms. axe then composites
 * part-faded text against whatever is behind it and reports contrast failures
 * that do not exist in the settled story: a `StackedNodesWithTags` tag label
 * measures 2.3:1 mid-fade and about 16:1 when it lands, and four `InitialFocus`
 * node titles fail the same way.
 *
 * This has to be a convergence check rather than a single sample. Traced on
 * `InitialFocus`, the story moves in two waves: nodes mount at ~320ms and go
 * quiet, then the mount-time camera fly lands at ~900ms and cross-fades a second
 * time, ending at ~1115ms. A gate that exits on the first quiet frame passes
 * during the lull and axe scans the second wave. So quiet has to hold.
 *
 * The three signals are what actually moves. The rendered node count changes as
 * windowing follows the camera; `getAnimations` covers CSS transitions; and a
 * fractional opacity catches a cross-fade driven from React state rather than by
 * a transition, which is what the zoom layers do. No element in any of these
 * stories sits at a fractional opacity once settled, so the check converges
 * rather than waiting out the cap.
 */
async function settleGraph(canvasElement: HTMLElement): Promise<void> {
  const QUIET_MS = 400
  const CAP_MS = 8000
  const STEP_MS = 50

  const reading = () => {
    const nodes = canvasElement.querySelectorAll(".react-flow__node")
    const fading = Array.from(canvasElement.querySelectorAll("*")).some(
      (el) => {
        const opacity = Number(getComputedStyle(el).opacity)
        return opacity > 0 && opacity < 1
      }
    )
    return {
      count: nodes.length,
      moving: nodes.length === 0 || fading,
      animations: canvasElement.getAnimations({ subtree: true }).length,
    }
  }

  const deadline = Date.now() + CAP_MS
  let quietSince: number | null = null
  let previousCount = -1

  while (Date.now() < deadline) {
    const now = reading()
    const quiet =
      !now.moving && now.animations === 0 && now.count === previousCount
    previousCount = now.count

    if (!quiet) {
      quietSince = null
    } else {
      quietSince ??= Date.now()
      if (Date.now() - quietSince >= QUIET_MS) return
    }

    await new Promise((resolve) => setTimeout(resolve, STEP_MS))
  }

  throw new Error(
    `settleGraph: story still moving after ${CAP_MS}ms (${JSON.stringify(reading())})`
  )
}

const meta = {
  title: "Graph/F0Graph",
  component: F0Graph<Employee>,
  tags: ["stable", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
  },
  // Every story fades its nodes in, and axe has to scan the settled result.
  play: async ({ canvasElement }) => {
    await settleGraph(canvasElement)
  },
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
    centerOnNodeClick: { control: "boolean" },
    nodeClickZoom: {
      control: { type: "number", min: 0.1, max: 2, step: 0.1 },
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
    viewportInset: { table: { disable: true } },
    layoutEngine: { table: { disable: true } },
    controlLabels: { table: { disable: true } },
    onZoomLevelChange: { table: { disable: true } },
    onViewportChange: { table: { disable: true } },
    onVisibleNodesChange: { table: { disable: true } },
    onRenderedNodesChange: { table: { disable: true } },
    loadVisibleNodeData: { table: { disable: true } },
    visibleDataDebounceMs: { table: { disable: true } },
    enableNodeWindowing: { control: "boolean" },
    nodeWindowPadding: {
      control: { type: "number", min: 0, max: 2000, step: 100 },
    },
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
  // The primary flow: read the hierarchy, close a branch and reopen it from the
  // keyboard, then select a person. The first block doubles as the regression
  // guard for the accessible tree, which is the part of this component most
  // easily broken without anyone noticing.
  play: async ({ canvasElement }) => {
    await settleGraph(canvasElement)

    const canvas = within(canvasElement)
    const tree = canvas.getByRole("tree", { name: "Graph view" })
    const ownedIds = (el: Element): string[] =>
      (el.getAttribute("aria-owns") ?? "").split(" ").filter(Boolean)

    // React Flow mounts its nodes after the first commit, so the ownership map
    // settles a frame or two later than the tree container itself.
    await waitFor(() =>
      expect(canvas.getAllByRole("treeitem")).toHaveLength(BASIC_NODES.length)
    )

    // Every painted treeitem is owned by the tree, exactly once, and carries its
    // depth. React Flow lays every node out as a flat, absolutely positioned
    // sibling behind its hardcoded `role="application"` wrapper, so DOM nesting
    // carries no tree relationship and `aria-owns` is the only thing holding the
    // structure together. A treeitem the tree does not own has no tree parent at
    // all, which axe reports as `aria-required-parent`.
    const items = canvas.getAllByRole("treeitem")
    const owned = ownedIds(tree)
    for (const item of items) {
      await expect(owned.filter((id) => id === item.id)).toHaveLength(1)
      await expect(item).toHaveAttribute("aria-level")
    }
    // And nothing is owned that is not in the DOM — a dangling reference is
    // `aria-valid-attr-value`.
    for (const id of owned) {
      await expect(
        canvasElement.ownerDocument.getElementById(id)
      ).not.toBeNull()
    }

    // Collapse the focused branch and reopen it. Asserts `aria-expanded` on the
    // node rather than whether a given child is on screen: the camera culls
    // off-screen nodes, and which ones survive is not stable enough to assert.
    const focused = canvasElement.querySelector<HTMLElement>(
      '[role="treeitem"][tabindex="0"]'
    )
    if (!focused) throw new Error("no treeitem holds the roving tabindex")
    focused.focus()
    await expect(focused).toHaveAttribute("aria-expanded", "true")

    await userEvent.keyboard("{ArrowLeft}")
    await waitFor(() =>
      expect(focused).toHaveAttribute("aria-expanded", "false")
    )
    await userEvent.keyboard("{ArrowRight}")
    await waitFor(() =>
      expect(focused).toHaveAttribute("aria-expanded", "true")
    )

    // The graph is one Tab stop, not one per node. React Flow marks its own node
    // wrappers and edges focusable, which doubles every node and adds a stop per
    // edge announced as "Edge from 1 to 2"; `nodesFocusable` / `edgesFocusable`
    // turn that off so the roving tabindex is the only thing in the tab order.
    // axe has no rule for this, so only an assertion catches a regression.
    const tabbable = canvasElement.querySelectorAll(
      '[tabindex="0"], button:not([tabindex]), a[href]'
    )
    await expect(tabbable).toHaveLength(2)
    await expect(canvas.getByLabelText("Graph canvas")).toHaveAttribute(
      "tabindex",
      "0"
    )

    // Selecting a person, last, because the click flies the camera.
    await userEvent.click(canvas.getByRole("treeitem", { name: /Sofia Reyes/ }))
    await waitFor(() =>
      expect(
        canvas.getByRole("treeitem", { name: /Sofia Reyes/ })
      ).toHaveAttribute("aria-selected", "true")
    )
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

/**
 * `initialFocusNodeId`: open already centered on a specific node instead of
 * fitting the whole tree. The graph mounts framed on a deep, off-center member
 * (no fit-to-all, no pan) — the "open looking at me" behaviour used by the
 * org chart. Compare with `LargeTree` (same data) which opens fit-to-all.
 */
export const InitialFocus: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Opens framed on `initialFocusNodeId` (a deep, off-center node) on the first paint — no fit-to-all then pan. The node must be present in the initial `nodes` (here `defaultExpandDepth: 2` makes members visible); if it's absent, F0Graph falls back to fit-to-all.",
      },
    },
  },
  args: {
    nodes: makeLargeTree(600),
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
    initialFocusNodeId: "dept-4-member-100",
  },
}

// ─── Click-to-focus + side-panel inset ─────────────────────────────

/**
 * Clicking a node flies to it (F0Graph's default `centerOnNodeClick`), zooming
 * in close and centering it. This demo opens a fixed-width (480px) side panel on
 * selection and passes `viewportInset={{ right: 480 }}` while it's open, so the
 * clicked node lands centered in the free area beside the panel instead of behind
 * it. Click nodes with the panel open vs. closed to see the offset; click the
 * empty canvas to dismiss the panel.
 */
function ClickToFocusWithSidePanelDemo() {
  const nodes = makeLargeTree(600)
  const [selected, setSelected] = useState<GraphNode<Employee> | null>(null)
  const PANEL_WIDTH = 480
  const byId = useCallback(
    (id: string) => nodes.find((n) => n.id === id) ?? null,
    [nodes]
  )

  return (
    <div className="relative h-full w-full overflow-hidden">
      <F0Graph<Employee>
        nodes={nodes}
        renderNode={renderEmployee}
        showControls
        defaultExpandDepth={2}
        selectionMode="single"
        // The side panel is a fixed-width drawer; feed its width as the inset
        // while it's open so every fly-to clears it. `0` while closed behaves
        // exactly as if there were no inset.
        viewportInset={{ right: selected ? PANEL_WIDTH : 0 }}
        onSelectedNodesChange={(next) => {
          const id = [...next][0]
          setSelected(id ? byId(id) : null)
        }}
        onPaneClick={() => setSelected(null)}
      />
      {selected && (
        <div
          className="absolute right-0 top-0 z-20 flex h-full flex-col gap-2 border-l border-f1-border bg-f1-background p-6 shadow-lg"
          style={{ width: PANEL_WIDTH }}
        >
          <div className="text-lg font-semibold text-f1-foreground">
            {selected.data.name}
          </div>
          <div className="text-f1-foreground-secondary">
            {selected.data.title}
          </div>
          <F0Button
            variant="neutral"
            label="Close"
            onClick={() => setSelected(null)}
          />
        </div>
      )}
    </div>
  )
}

export const ClickToFocusWithSidePanel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Click a node to fly to it (default `centerOnNodeClick`). A fixed-width side panel opens on selection and `viewportInset={{ right: 480 }}` keeps the centered node in the visible area beside it. Click the canvas to dismiss.",
      },
    },
  },
  render: () => <ClickToFocusWithSidePanelDemo />,
}

// ─── Viewport virtualization (A0 harness + A1 windowing) ───────────

/**
 * The "broken orgchart" shape from FCT-57915: thousands of root employees with
 * no manager. Every root is expand-visible at once, so this is the worst case
 * for the React Flow node array.
 */
function makeBrokenOrgchart(rootCount: number): GraphNode<Employee>[] {
  const nodes: GraphNode<Employee>[] = []
  let nameIndex = 0
  for (let i = 0; i < rootCount; i++) {
    const first = FIRST_NAMES[nameIndex % FIRST_NAMES.length] ?? "Alex"
    const last = LAST_NAMES[nameIndex % LAST_NAMES.length] ?? "Smith"
    nameIndex++
    nodes.push({
      id: `root-${i}`,
      parentId: null,
      data: { name: `${first} ${last}`, title: "Employee" },
      childrenCount: 0,
    })
  }
  return nodes
}

const BROKEN_ORGCHART_3K = makeBrokenOrgchart(3000)

/**
 * Interactive perf harness: renders 3,000 root nodes and lets you toggle
 * `enableNodeWindowing` live while watching how many nodes are actually handed
 * to React Flow. With windowing on, the rendered count collapses to roughly
 * what's on screen (pan/zoom to see it track the camera); with it off, all
 * 3,000 nodes stay in the array. This is both the A0 baseline and the A1 demo.
 */
function ViewportWindowingDemo() {
  const [windowing, setWindowing] = useState(true)
  const [padding, setPadding] = useState(600)
  const [visible, setVisible] = useState(0)
  const [rendered, setRendered] = useState(0)

  return (
    <div className="relative h-full w-full">
      <div className="absolute right-4 top-4 z-20 flex flex-col gap-2 rounded-md bg-f1-background p-3 text-sm shadow-md">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={windowing}
            onChange={(e) => setWindowing(e.target.checked)}
          />
          Node windowing
        </label>
        <label className="flex items-center gap-2">
          Padding
          <input
            type="range"
            min={0}
            max={2000}
            step={100}
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
          <span className="tabular-nums">{padding}px</span>
        </label>
        <div className="tabular-nums">
          Visible nodes: <strong>{visible}</strong>
        </div>
        <div className="tabular-nums">
          Rendered nodes: <strong>{rendered}</strong>
        </div>
      </div>
      <F0Graph<Employee>
        nodes={BROKEN_ORGCHART_3K}
        renderNode={renderEmployee}
        showControls
        enableNodeWindowing={windowing}
        nodeWindowPadding={padding}
        onVisibleNodesChange={setVisible}
        onRenderedNodesChange={setRendered}
      />
    </div>
  )
}

export const ViewportWindowing: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Perf harness for FCT-57915: 3,000 root nodes (the 'broken orgchart' case). Toggle `enableNodeWindowing` and pan/zoom to watch the rendered-node count track the viewport instead of the full 3,000.",
      },
    },
  },
  render: () => <ViewportWindowingDemo />,
}

/**
 * A tall, deep tree (a spine of `depth` managers, each with a few reports) — the
 * "muy grande y profundo" org chart shape. The whole tree is expanded on mount
 * so every node has a layout position far down the canvas. Repro harness for the
 * windowing panning bug: with windowing on, pan far from the initial frame and
 * check that nodes AND their connecting edges keep rendering under the camera.
 */
function makeDeepTree(
  depth: number,
  reportsPerLevel: number
): GraphNode<Employee>[] {
  const nodes: GraphNode<Employee>[] = []
  let nameIndex = 0
  const nextName = () => {
    const first = FIRST_NAMES[nameIndex % FIRST_NAMES.length] ?? "Alex"
    const last = LAST_NAMES[nameIndex % LAST_NAMES.length] ?? "Smith"
    nameIndex++
    return `${first} ${last}`
  }

  let prevSpineId: string | null = null
  for (let level = 0; level < depth; level++) {
    const spineId = `spine-${level}`
    nodes.push({
      id: spineId,
      parentId: prevSpineId,
      data: { name: nextName(), title: `Level ${level} Manager` },
      // spine child + the leaf reports at this level
      childrenCount: reportsPerLevel + (level < depth - 1 ? 1 : 0),
    })
    for (let r = 0; r < reportsPerLevel; r++) {
      nodes.push({
        id: `${spineId}-report-${r}`,
        parentId: spineId,
        data: { name: nextName(), title: "Individual Contributor" },
        childrenCount: 0,
      })
    }
    prevSpineId = spineId
  }
  return nodes
}

const DEEP_TREE = makeDeepTree(40, 3)

function DeepTreeWindowingDemo() {
  const [windowing, setWindowing] = useState(true)
  const [padding, setPadding] = useState(600)
  const [visible, setVisible] = useState(0)
  const [rendered, setRendered] = useState(0)

  return (
    <div className="relative h-full w-full">
      <div className="absolute right-4 top-4 z-20 flex flex-col gap-2 rounded-md bg-f1-background p-3 text-sm shadow-md">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={windowing}
            onChange={(e) => setWindowing(e.target.checked)}
          />
          Node windowing
        </label>
        <label className="flex items-center gap-2">
          Padding
          <input
            type="range"
            min={0}
            max={2000}
            step={100}
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
          <span className="tabular-nums">{padding}px</span>
        </label>
        <div className="tabular-nums">
          Visible nodes: <strong>{visible}</strong>
        </div>
        <div className="tabular-nums">
          Rendered nodes: <strong>{rendered}</strong>
        </div>
      </div>
      <F0Graph<Employee>
        nodes={DEEP_TREE}
        renderNode={renderEmployee}
        showControls
        // Open framed on a deep, off-center node (like the org chart's
        // focus-on-entry), so most of the tree starts OUTSIDE the first frame.
        initialFocusNodeId="spine-20"
        defaultExpandDepth={40}
        enableNodeWindowing={windowing}
        nodeWindowPadding={padding}
        onVisibleNodesChange={setVisible}
        onRenderedNodesChange={setRendered}
      />
    </div>
  )
}

export const DeepTreeWindowing: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Repro for the deep-tree windowing panning bug: a 40-level spine opened focused on a deep node. With windowing on, pan away from the initial frame and confirm nodes and their connecting edges keep rendering under the camera (they must not vanish once you leave the initially-framed region).",
      },
    },
  },
  render: () => <DeepTreeWindowingDemo />,
}

// ─── Viewport-driven data loading (A2) ─────────────────────────

// Structure-only skeleton: ids + parent links, no rich data yet.
function makeSkeletonForest(rootCount: number): GraphNode<Employee>[] {
  const nodes: GraphNode<Employee>[] = []
  for (let r = 0; r < rootCount; r++) {
    const rootId = `r-${r}`
    nodes.push({
      id: rootId,
      parentId: null,
      data: { name: "", title: "" },
      dataLoaded: false,
      childrenCount: 3,
    })
    for (let c = 0; c < 3; c++) {
      nodes.push({
        id: `${rootId}-${c}`,
        parentId: rootId,
        data: { name: "", title: "" },
        dataLoaded: false,
      })
    }
  }
  return nodes
}

/**
 * Viewport-driven data loading: the tree is built from a lightweight skeleton
 * (ids + structure only). `loadVisibleNodeData` fires for the nodes on screen,
 * and the story simulates an async fetch that hydrates just those. Nodes render
 * a shimmer while `ctx.dataLoading` is true.
 */
function ViewportDataLoadingDemo() {
  const [nodes, setNodes] = useState(() => makeSkeletonForest(400))
  const [fetches, setFetches] = useState(0)

  const loadVisibleNodeData = useCallback((ids: string[]) => {
    setFetches((n) => n + 1)
    // Simulate a batched network round-trip for the on-screen nodes.
    setTimeout(() => {
      const wanted = new Set(ids)
      setNodes((prev) =>
        prev.map((node, i) =>
          wanted.has(node.id)
            ? {
                ...node,
                dataLoaded: true,
                data: {
                  name: `${FIRST_NAMES[i % FIRST_NAMES.length]} ${LAST_NAMES[i % LAST_NAMES.length]}`,
                  title: node.parentId ? "Team member" : "Manager",
                },
              }
            : node
        )
      )
    }, 600)
  }, [])

  const renderNode = useCallback(
    (node: GraphNode<Employee>, ctx: F0GraphNodeRenderContext) => {
      if (ctx.dataLoading) {
        return (
          <div className="h-14 w-64 animate-pulse rounded-md bg-f1-background-secondary" />
        )
      }
      const [firstName = "", lastName = ""] = node.data.name.split(" ")
      return (
        <F0GraphNode
          {...ctx}
          avatar={{ type: "person", firstName, lastName }}
          title={node.data.name}
          subtitle={node.data.title}
        />
      )
    },
    []
  )

  return (
    <div className="relative h-full w-full">
      <div className="absolute right-4 top-4 z-20 rounded-md bg-f1-background p-3 text-sm shadow-md tabular-nums">
        Batched fetches: <strong>{fetches}</strong>
      </div>
      <F0Graph<Employee>
        nodes={nodes}
        renderNode={renderNode}
        showControls
        defaultExpandDepth={2}
        enableNodeWindowing
        loadVisibleNodeData={loadVisibleNodeData}
      />
    </div>
  )
}

export const ViewportDataLoading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A2 for FCT-57915: the tree is built from a lightweight skeleton and `loadVisibleNodeData` hydrates only the nodes on screen (debounced + batched). Pan/zoom around and watch the batched-fetch count grow only as new nodes enter the viewport; nodes shimmer until their data arrives.",
      },
    },
  },
  render: () => <ViewportDataLoadingDemo />,
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
/**
 * Builds the deferred payload on mount instead of at module load.
 *
 * `deferredNodes: new Promise(...)` inside `args` runs when this CSF module is
 * imported, so its timer fires while some other story is on screen. Two things
 * went wrong because of that: the `StagedLoadingError` rejection arrived as an
 * unhandled rejection attributed to whichever story happened to be running (it
 * failed `LargeTree` in the Storybook test run), and by the time a reader opened
 * either story the promise had usually already settled, so there was nothing to
 * watch.
 */
function StagedLoadingDemo({
  fail = false,
  ...props
}: { fail?: boolean } & Omit<F0GraphProps<Employee>, "deferredNodes">) {
  const deferredNodes = useMemo(
    () =>
      new Promise<DeferredNodesPayload<Employee>>((resolve, reject) => {
        if (fail) {
          setTimeout(() => reject(new Error("Simulated network failure")), 1000)
          return
        }
        setTimeout(() => resolve(makeDeferredPayload(500)), 2500)
      }),
    [fail]
  )

  return <F0Graph<Employee> {...props} deferredNodes={deferredNodes} />
}

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
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
    onDeferredLoadComplete: () => {
      // eslint-disable-next-line no-console
      console.log("[StagedLoading] Deferred nodes merged")
    },
  },
  render: (args) => <StagedLoadingDemo {...args} />,
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
    renderNode: renderEmployee,
    showControls: true,
    defaultExpandDepth: 2,
    onDeferredLoadError: (error: Error) => {
      // eslint-disable-next-line no-console
      console.error("[StagedLoadingError] Deferred load failed:", error.message)
    },
  },
  render: (args) => <StagedLoadingDemo fail {...args} />,
}

// ─── Stacked nodes ──────────────────────────────────────────

/**
 * Roles whose children are job levels. Each role sets `stackNodes`, so its
 * levels render as a tight column of compact rows under it instead of fanning
 * out — and the column costs no horizontal space, so the roles sit as close
 * together as they would with no children at all.
 */
interface CatalogNode {
  name: string
  kind: "root" | "role" | "level"
  headcount?: number
  /** Bottom of the level's salary band, in thousands. */
  salaryFrom?: number
  /** How many competencies the level expects. */
  competencies?: number
  /** How many devices the level's standard kit includes. */
  devices?: number
}

const CATALOG_NODES: GraphNode<CatalogNode>[] = [
  {
    id: "catalog",
    parentId: null,
    data: { name: "Job catalog", kind: "root" },
    childrenCount: 3,
  },
  ...["Engineering", "Design", "Sales"].flatMap((role, roleIndex) => {
    const roleId = `role-${roleIndex}`
    const levels = ["Junior", "Mid", "Senior", "Staff"].slice(0, 2 + roleIndex)
    return [
      {
        id: roleId,
        parentId: "catalog",
        data: { name: role, kind: "role" as const },
        childrenCount: levels.length,
        // The opt-in: this role's children render as a stacked column.
        stackNodes: true,
      },
      ...levels.map((level, levelIndex) => ({
        id: `${roleId}-level-${levelIndex}`,
        parentId: roleId,
        data: {
          name: `${level} ${role}`,
          kind: "level" as const,
          headcount: 2 + levelIndex * 3,
          salaryFrom: 30 + levelIndex * 12,
          competencies: 4 + levelIndex * 2,
          devices: levelIndex < 2 ? 1 : 2,
        },
        childrenCount: 0,
      })),
    ]
  }),
]

/**
 * What a catalog owner reads off a job level: its salary band, how many people
 * sit in it, how many competencies it expects, and how many devices its kit
 * includes. All four are `raw` pills, so each declares its own `column` to get
 * an independent toggle, label and reservation slot.
 */
const LEVEL_TAG_COLUMNS = [
  "salary",
  "headcount",
  "competencies",
  "devices",
] as const

const LEVEL_TAG_LABELS = {
  salary: "Salary band",
  headcount: "People",
  competencies: "Competencies",
  devices: "Devices",
}

/**
 * The copy is deliberately terse. A row's tag area is the row width minus its
 * indent (~227px) and the layout reserves `ceil(columns / 2)` rows of height,
 * so the four pills have to pack into two lines: any wider and they wrap past
 * the room reserved for them, and the next row lands on top. The icon carries
 * what the shortened text drops, and `tagLabels` spells it out again in the
 * hover card.
 */
function catalogLevelTags(node: CatalogNode): F0GraphNodeTag[] {
  const { headcount, salaryFrom, competencies, devices } = node
  if (salaryFrom === undefined) return []
  return [
    {
      type: "raw",
      icon: Money,
      text: `€${salaryFrom}k - ${salaryFrom + 10}k`,
      column: "salary",
    },
    {
      type: "raw",
      icon: People,
      text: `${headcount} people`,
      column: "headcount",
    },
    {
      type: "raw",
      icon: Star,
      text: `${competencies} competencies`,
      column: "competencies",
    },
    {
      type: "raw",
      icon: Laptop,
      text: `${devices}`,
      additionalAccessibleText: `${devices} devices`,
      column: "devices",
    },
  ]
}

const StackedNodesDemo = () => {
  return (
    <F0Graph<CatalogNode>
      nodes={CATALOG_NODES}
      defaultExpandDepth={2}
      showControls
      // No branch on `ctx.stacked`: the graph has already decided this node is
      // a row, and F0GraphNode reads that off the spread context.
      renderNode={(node, ctx) => (
        <F0GraphNode
          {...ctx}
          avatar={{ type: "team", name: node.data.name }}
          title={node.data.name}
          subtitle={node.data.kind === "role" ? "Role" : undefined}
        />
      )}
    />
  )
}

/**
 * A role card carries the same four columns as the levels under it, rolled up:
 * the band runs from the bottom of its lowest level to the top of its highest,
 * the people add up, and competencies and devices take the top level's figure
 * (a senior level's framework and kit contain the ones below it).
 */
function catalogRoleTags(
  role: string,
  levels: CatalogNode[]
): F0GraphNodeTag[] {
  if (levels.length === 0) return []
  const from = Math.min(...levels.map((l) => l.salaryFrom ?? 0))
  const to = Math.max(...levels.map((l) => (l.salaryFrom ?? 0) + 10))
  return [
    {
      type: "raw",
      icon: Money,
      text: `€${from}k - ${to}k`,
      column: "salary",
    },
    {
      type: "raw",
      icon: People,
      text: `${levels.reduce((sum, l) => sum + (l.headcount ?? 0), 0)} people`,
      column: "headcount",
    },
    {
      type: "raw",
      icon: Star,
      text: `${Math.max(...levels.map((l) => l.competencies ?? 0))} competencies`,
      column: "competencies",
    },
    {
      type: "raw",
      icon: Laptop,
      text: `${Math.max(...levels.map((l) => l.devices ?? 0))}`,
      additionalAccessibleText: `devices for the ${role} role`,
      column: "devices",
    },
  ]
}

/** The levels under each role, so a role card can roll their metadata up. */
const LEVELS_BY_ROLE = CATALOG_NODES.reduce<Record<string, CatalogNode[]>>(
  (acc, node) => {
    if (node.data.kind !== "level") return acc
    const role = node.data.name.split(" ").slice(1).join(" ")
    acc[role] = [...(acc[role] ?? []), node.data]
    return acc
  },
  {}
)

const StackedNodesWithTagsDemo = () => {
  return (
    <F0Graph<CatalogNode>
      nodes={CATALOG_NODES}
      defaultExpandDepth={2}
      showControls
      // Declaring the columns is what makes the reservation scale: the layout
      // sizes the tag area from how many tag types are visible. Passing only
      // `reserveTagRow` would reserve a single row no matter how many tags
      // render, and the wrapped rows would collide with the row below.
      nodeTagTypes={LEVEL_TAG_COLUMNS}
      renderNode={(node, ctx) => (
        <F0GraphNode
          {...ctx}
          avatar={{ type: "team", name: node.data.name }}
          title={node.data.name}
          subtitle={node.data.kind === "role" ? "Role" : undefined}
          tags={
            node.data.kind === "role"
              ? catalogRoleTags(
                  node.data.name,
                  LEVELS_BY_ROLE[node.data.name] ?? []
                )
              : catalogLevelTags(node.data)
          }
          tagLabels={LEVEL_TAG_LABELS}
        />
      )}
    />
  )
}

export const StackedNodes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A parent that sets `stackNodes` renders its (leaf) children as a vertical column of compact `F0GraphNode` rows sharing its x, connected by a single trunk edge. Groups with an expandable child fall back to the normal fan-out.",
      },
    },
  },
  render: () => <StackedNodesDemo />,
}

export const StackedNodesWithTags: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tags on stacked rows. The strip keeps its fixed height and the tags sit under it, in room the layout reserves per row (`reserveTagRow`) exactly as it does for a card. Detail zoom only — the tags leave with the title in compact and dot.",
      },
    },
  },
  render: () => <StackedNodesWithTagsDemo />,
}

// ─── Cards with tags ───────────────────────────────────────────

const CARD_TAG_COLUMNS = ["team", "level", "devices"] as const

const CARD_TAG_LABELS = {
  team: "Team",
  level: "Level",
  devices: "Devices",
}

/** Deliberately uneven — the reservation is the same for all five, the pills are not. */
const CARD_TAGS: Record<string, F0GraphNodeTag[]> = {
  "1": [{ type: "raw", icon: People, text: "Board", column: "team" }],
  "2": [
    { type: "raw", icon: People, text: "Platform", column: "team" },
    { type: "raw", icon: Laptop, text: "3", column: "devices" },
  ],
  "3": [],
  "4": [
    { type: "raw", icon: People, text: "Core Engineering", column: "team" },
    { type: "raw", icon: Star, text: "Senior", column: "level" },
    { type: "raw", icon: Laptop, text: "2", column: "devices" },
  ],
  "5": [{ type: "raw", icon: People, text: "Quality", column: "team" }],
}

export const CardsWithTags: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tags under a node card, with a different number of pills per node. A connector runs the whole way from the pill it leaves to the node it points at; the tag block crops the part that would otherwise cross it, so the metadata reads as sitting on the line rather than being pierced by it. Use the controls popover to toggle a column and watch the connectors stay put.",
      },
    },
  },
  args: {
    nodes: BASIC_NODES,
    defaultExpandDepth: 2,
    showControls: true,
    nodeTagTypes: CARD_TAG_COLUMNS,
    renderNode: (node, ctx) => {
      const [firstName = "", lastName = ""] = node.data.name.split(" ")
      return (
        <F0GraphNode
          {...ctx}
          avatar={{ type: "person", firstName, lastName }}
          title={node.data.name}
          subtitle={node.data.title}
          tags={CARD_TAGS[node.id]}
          tagLabels={CARD_TAG_LABELS}
        />
      )
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
    </div>
  ),
}
