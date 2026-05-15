import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { GraphEdge, GraphNode } from "../../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../../F0Graph"
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
}: {
  variant?: "default" | "hover" | "highlighted" | "dimmed"
  width?: number
  height?: number
  interactive?: boolean
}) {
  const edges: GraphEdge[] = [
    {
      id: "a-b",
      source: "a",
      target: "b",
      data: { variant },
      ...(interactive
        ? {
            onEdgeClick: () => {},
            onEdgeHover: () => {},
          }
        : null),
    },
  ]

  return (
    <div style={{ width, height }} className="bg-f1-background">
      <F0Graph
        nodes={NODES}
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
  tags: ["stable"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof F0GraphEdge>

export default meta
type Story = StoryObj<typeof F0GraphEdge>

export const Default: Story = {
  render: () => <EdgeStory />,
}

export const Hover: Story = {
  render: () => <EdgeStory variant="hover" />,
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
}

export const Highlighted: Story = {
  render: () => <EdgeStory variant="highlighted" />,
}

export const Dimmed: Story = {
  render: () => <EdgeStory variant="dimmed" />,
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
