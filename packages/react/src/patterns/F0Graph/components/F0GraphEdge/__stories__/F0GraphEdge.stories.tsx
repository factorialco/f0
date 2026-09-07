import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, waitFor } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { GraphEdge, GraphNode } from "../../../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../../../F0Graph"
import { F0GraphNode } from "../../F0GraphNode"
import { F0GraphEdge } from "../F0GraphEdge"

interface Person {
  name: string
  title: string
}

const NODES: GraphNode<Person>[] = [
  {
    id: "a",
    parentId: null,
    data: { name: "Alice Moreno", title: "Manager" },
    childrenCount: 1,
  },
  {
    id: "b",
    parentId: "a",
    data: { name: "Bob Smith", title: "Engineer" },
  },
]

// A single centred child puts source and target within `crossAxisDelta < 2`,
// where F0GraphEdge snaps every path type straight. Two children offset the
// edges so the path algorithms actually differ on screen.
const FORKED_NODES: GraphNode<Person>[] = [
  {
    id: "a",
    parentId: null,
    data: { name: "Alice Moreno", title: "Manager" },
    childrenCount: 2,
  },
  {
    id: "b",
    parentId: "a",
    data: { name: "Bob Smith", title: "Engineer" },
  },
  {
    id: "c",
    parentId: "a",
    data: { name: "Carol Diaz", title: "Designer" },
  },
]

function renderPerson(node: GraphNode<Person>, ctx: F0GraphNodeRenderContext) {
  const [firstName = "", lastName = ""] = node.data.name.split(" ")
  return (
    <F0GraphNode
      {...ctx}
      avatar={{ type: "person", firstName, lastName }}
      title={node.data.name}
      subtitle={node.data.title}
    />
  )
}

function EdgeStory({
  variant = "default",
  width = 400,
  height = 220,
  interactive = false,
  pathType,
  nodes = NODES,
}: {
  variant?: "default" | "hover" | "highlighted" | "dimmed"
  width?: number
  height?: number
  interactive?: boolean
  pathType?: "smoothstep" | "straight" | "bezier"
  nodes?: GraphNode<Person>[]
}) {
  const edges: GraphEdge[] = nodes
    .filter((n) => n.parentId !== null)
    .map((n) => ({
      id: `${n.parentId}-${n.id}`,
      source: n.parentId!,
      target: n.id,
      data: { variant, ...(pathType ? { pathType } : {}) },
      ...(interactive
        ? {
            onEdgeClick: () => {},
            onEdgeHover: () => {},
          }
        : {}),
    }))

  return (
    <div style={{ width, height }} className="bg-f1-background">
      <F0Graph
        nodes={nodes}
        edges={edges}
        renderNode={renderPerson}
        defaultExpandDepth={1}
        showControls={false}
      />
    </div>
  )
}

const meta = {
  component: F0GraphEdge,
  title: "Graph/F0GraphEdge",
  tags: ["stable", "!autodocs"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
  },
} satisfies Meta<typeof F0GraphEdge>

export default meta
type Story = StoryObj<typeof F0GraphEdge>

/**
 * All four edge variants rendered side by side in a single canvas so they
 * can be visually compared. Each panel mounts its own `F0Graph` and applies
 * the variant via the edge `data.variant` field — exactly how `F0Graph`
 * passes it to `F0GraphEdge` in production.
 */
export const Status: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["default", "hover", "highlighted", "dimmed"] as const).map((v) => (
        <div key={v} className="flex flex-col gap-2">
          <span className="text-sm capitalize text-f1-foreground-secondary">
            {v}
          </span>
          <EdgeStory variant={v} width={260} height={180} />
        </div>
      ))}
    </div>
  ),
}

/**
 * Edges only become interactive when the underlying `GraphEdge` defines
 * `onEdgeClick` and/or `onEdgeHover`. Without those handlers the edge stays
 * in its `default` variant on pointer-enter — no `hover` color swap, no
 * pointer cursor — proving interactivity is opt-in per edge.
 *
 * Hover both panels: only the right one (interactive) shifts to the hover
 * stroke color. The left one (non-interactive) stays default.
 */
export const NonInteractive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-f1-foreground-secondary">
          Non-interactive (no handlers)
        </span>
        <EdgeStory width={320} height={200} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-f1-foreground-secondary">
          Interactive (with handlers)
        </span>
        <EdgeStory width={320} height={200} interactive />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    // Edges reach the DOM only after React Flow measures both nodes and the
    // initial fitView settles, so the query has to be retried.
    const paths = await waitFor(() => {
      const found = canvasElement.querySelectorAll<SVGPathElement>(
        ".react-flow__edge-path"
      )
      expect(found).toHaveLength(2)
      return found
    })
    // Panel order is left (no handlers) then right (handlers), matching the JSX.
    const plain = paths[0]!
    const interactive = paths[1]!

    await userEvent.hover(interactive.closest(".react-flow__edge")!)

    await waitFor(() =>
      expect(interactive.style.stroke).toBe("var(--f0-graph-edge-hover)")
    )
    await expect(plain.style.stroke).toBe("var(--f0-graph-edge-default)")
  },
}

/**
 * `data.pathType` picks the path algorithm. It survives F0Graph's render model
 * untouched, so it is the supported route for a consumer edge; the `pathType`
 * prop only applies to a standalone `renderEdge` mount.
 *
 * Two children per parent here on purpose: with a single centred child the
 * source and target fall inside `crossAxisDelta < 2` and every path type snaps
 * straight, so the three would look identical.
 */
export const PathTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["smoothstep", "straight", "bezier"] as const).map((p) => (
        <div key={p} className="flex flex-col gap-2">
          <span className="text-sm text-f1-foreground-secondary">{p}</span>
          <EdgeStory
            pathType={p}
            nodes={FORKED_NODES}
            width={260}
            height={180}
          />
        </div>
      ))}
    </div>
  ),
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-wrap gap-4">
      <EdgeStory width={260} height={180} />
      <EdgeStory variant="hover" width={260} height={180} />
      <EdgeStory variant="highlighted" width={260} height={180} />
      <EdgeStory variant="dimmed" width={260} height={180} />
    </div>
  ),
}
