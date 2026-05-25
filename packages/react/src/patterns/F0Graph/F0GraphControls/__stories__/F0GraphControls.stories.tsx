import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { GraphNode } from "../../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../../F0Graph"
import { F0GraphNode } from "../../F0GraphNode"
import { F0GraphControls } from "../F0GraphControls"

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

const meta = {
  component: F0GraphControls,
  title: "Graph/F0GraphControls",
  tags: ["stable", "!autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof F0GraphControls>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows the toolbar with every available control enabled — Find me, fit-to-view, and the metadata-visibility popover — rendered inside a real `<F0Graph>`.",
      },
    },
  },
  render: () => (
    <div style={{ width: 480, height: 320 }} className="bg-f1-background">
      <F0Graph
        nodes={NODES}
        edges={[]}
        renderNode={renderPerson}
        defaultExpandDepth={1}
        showControls
        currentUserNodeId="a"
        nodeTagTypes={["person", "team", "status"]}
        defaultVisibleTagTypes={["person", "team", "status"]}
      />
    </div>
  ),
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: () => (
    <div style={{ width: 480, height: 320 }} className="bg-f1-background">
      <F0Graph
        nodes={NODES}
        edges={[]}
        renderNode={renderPerson}
        defaultExpandDepth={1}
        showControls
        currentUserNodeId="a"
        nodeTagTypes={["person", "team", "status"]}
        defaultVisibleTagTypes={["person", "team", "status"]}
      />
    </div>
  ),
}
