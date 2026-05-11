import type { Meta, StoryObj } from "@storybook/react-vite"

import { ReactFlow, ReactFlowProvider } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0GraphEdge } from "../F0GraphEdge"

const edgeTypeMap = { f0Edge: F0GraphEdge }

const nodes = [
  { id: "a", position: { x: 0, y: 0 }, data: { label: "A" } },
  { id: "b", position: { x: 250, y: 0 }, data: { label: "B" } },
]

function EdgeStory({
  variant,
  animated,
  width = 400,
  height = 200,
}: {
  variant?: "default" | "highlighted" | "dimmed"
  animated?: boolean
  width?: number
  height?: number
}) {
  const edges = [
    {
      id: "a-b",
      source: "a",
      target: "b",
      type: "f0Edge",
      data: { variant, animated },
    },
  ]

  return (
    <ReactFlowProvider>
      <div style={{ width, height }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypeMap}
          fitView
          proOptions={{ hideAttribution: true }}
        />
      </div>
    </ReactFlowProvider>
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
      <EdgeStory width={240} height={140} />
      <EdgeStory variant="highlighted" width={240} height={140} />
      <EdgeStory variant="dimmed" width={240} height={140} />
      <EdgeStory animated width={240} height={140} />
    </div>
  ),
}
