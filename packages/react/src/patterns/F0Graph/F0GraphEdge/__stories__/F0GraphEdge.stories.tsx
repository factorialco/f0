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
  animated = false,
  width = 400,
  height = 220,
}: {
  variant?: "default" | "highlighted" | "dimmed"
  animated?: boolean
  width?: number
  height?: number
}) {
  const edges: GraphEdge[] = [
    {
      id: "a-b",
      source: "a",
      target: "b",
      data: { variant, animated },
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

export const Highlighted: Story = {
  render: () => <EdgeStory variant="highlighted" />,
}

export const Dimmed: Story = {
  render: () => <EdgeStory variant="dimmed" />,
}

export const Animated: Story = {
  render: () => <EdgeStory animated />,
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-wrap gap-4">
      <EdgeStory width={260} height={180} />
      <EdgeStory variant="highlighted" width={260} height={180} />
      <EdgeStory variant="dimmed" width={260} height={180} />
      <EdgeStory animated width={260} height={180} />
    </div>
  ),
}
