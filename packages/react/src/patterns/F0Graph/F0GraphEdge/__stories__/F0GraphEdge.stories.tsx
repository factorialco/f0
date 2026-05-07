import type { Meta, StoryObj } from "@storybook/react-vite"

import { ReactFlow, ReactFlowProvider } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { F0GraphEdge } from "../F0GraphEdge"

const edgeTypeMap = { f0Edge: F0GraphEdge }

const nodes = [
  { id: "a", position: { x: 0, y: 0 }, data: { label: "A" } },
  { id: "b", position: { x: 250, y: 0 }, data: { label: "B" } },
]

function EdgeStory({
  variant,
  animated,
}: {
  variant?: "default" | "highlighted" | "dimmed"
  animated?: boolean
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
      <div style={{ width: 400, height: 200 }}>
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

const meta: Meta = {
  title: "Graph/F0GraphEdge",
  tags: ["stable", "!autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta

export default meta
type Story = StoryObj

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
