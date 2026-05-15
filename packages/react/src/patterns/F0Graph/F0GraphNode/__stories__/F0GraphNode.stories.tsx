import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  ReactFlow,
  ReactFlowProvider,
  type Node,
  type NodeTypes,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { F0Button } from "@/components/F0Button"
import { Building, Delete, Files, Pencil } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0GraphNode } from ".."
import { graphNodeStates, graphNodeVariants } from "../types"

const meta = {
  component: F0GraphNode,
  tags: ["stable"],
  title: "Graph/F0GraphNode",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <Story />
      </ReactFlowProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: "radio",
      options: graphNodeVariants,
    },
    state: {
      control: "radio",
      options: graphNodeStates,
    },
    expanded: { control: "boolean" },
    hasChildren: { control: "boolean" },
    childrenCount: { control: "number" },
  },
} satisfies Meta<typeof F0GraphNode>

export default meta
type Story = StoryObj<typeof F0GraphNode>

const personAvatar = {
  type: "person",
  firstName: "Alice",
  lastName: "Moreno",
} as const

const baseProps = {
  avatar: personAvatar,
  title: "Alice Moreno",
  subtitle: "Staff Designer",
} as const

export const Default: Story = {
  args: { ...baseProps },
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-4">
      {(["default", "selected", "highlighted", "dimmed"] as const).map(
        (state) => (
          <F0GraphNode
            key={state}
            avatar={personAvatar}
            title={state}
            subtitle="State variant"
            state={state}
          />
        )
      )}
    </div>
  ),
}

export const ZoomLevels: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-16">
      {(["detail", "compact", "dot"] as const).map((variant) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <F0GraphNode
            avatar={personAvatar}
            title="Alice Moreno"
            subtitle="Staff Designer"
            variant={variant}
          />
          <span
            className={`text-xs text-f1-foreground-secondary ${
              variant === "dot" ? "mt-[49px]" : ""
            }`}
          >
            {variant}
          </span>
        </div>
      ))}
    </div>
  ),
}

export const Avatars: Story = {
  render: () => {
    const nodes = [
      {
        key: "person",
        label: "person",
        avatar: { type: "person", firstName: "Alice", lastName: "Moreno" },
        title: "Alice Moreno",
        subtitle: "Staff Designer",
      },
      {
        key: "team",
        label: "team",
        avatar: { type: "team", name: "Design Systems" },
        title: "Design Systems",
        subtitle: "12 members",
      },
      {
        key: "company",
        label: "company",
        avatar: { type: "company", name: "Factorial HR" },
        title: "Factorial HR",
        subtitle: "Barcelona, Spain",
      },
      {
        key: "file",
        label: "file",
        avatar: {
          type: "file",
          file: { name: "Q4-roadmap.pdf", type: "application/pdf" },
        },
        title: "Q4 Roadmap",
        subtitle: "Shared with Leadership",
      },
      {
        key: "flag",
        label: "flag",
        avatar: { type: "flag", flag: "es" },
        title: "Spain",
        subtitle: "EMEA region",
      },
      {
        key: "emoji",
        label: "emoji",
        avatar: { type: "emoji", emoji: "🚀" },
        title: "Launch squad",
        subtitle: "Cross-functional",
      },
      {
        key: "icon",
        label: "icon",
        avatar: { type: "icon", icon: Building },
        title: "HQ Office",
        subtitle: "Workspace",
      },
    ] as const

    return (
      <div className="grid grid-cols-4 items-start gap-x-12 gap-y-16">
        {nodes.map((n) => (
          <div
            key={n.key}
            className="flex flex-col items-center gap-2 justify-self-center"
          >
            <F0GraphNode
              avatar={n.avatar}
              title={n.title}
              subtitle={n.subtitle}
            />
            <span className="text-xs text-f1-foreground-secondary">
              {n.label}
            </span>
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Every avatar variant the node supports. Avatar is always rendered at size `lg` regardless of zoom level.",
      },
    },
  },
}

export const WithTags: Story = {
  args: {
    ...baseProps,
    tags: [
      { type: "team", name: "Design" },
      { type: "team", name: "Platform" },
      { type: "team", name: "Research" },
      { type: "status", text: "Manager", variant: "info" },
      { type: "person", name: "Bob Smith" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tags are grouped by type automatically. A single tag type renders directly, while 2+ tags of the same type collapse into a summary tag with member names in the tooltip.",
      },
    },
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-4">
      {(["detail", "compact", "dot"] as const).map((variant) => (
        <div key={variant} className="flex flex-wrap items-center gap-3">
          {(["default", "selected", "highlighted", "dimmed"] as const).map(
            (state) => (
              <F0GraphNode
                key={`${variant}-${state}`}
                avatar={personAvatar}
                title={`${variant} · ${state}`}
                subtitle="Variant/state"
                variant={variant}
                state={state}
              />
            )
          )}
        </div>
      ))}
      <div className="flex flex-wrap items-center gap-3">
        <F0GraphNode
          avatar={personAvatar}
          title="Expanded"
          subtitle="Expanded with children"
          hasChildren
          expanded
          childrenCount={3}
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <F0GraphNode
          avatar={personAvatar}
          title="With slots"
          subtitle="Tags and selected toolbar"
          state="selected"
          hasChildren
          childrenCount={5}
          tags={[
            { type: "team", name: "Design" },
            { type: "team", name: "Platform" },
            { type: "team", name: "Research" },
          ]}
          actions={<F0Button variant="ghost" size="sm" label="View profile" />}
        />
      </div>
    </div>
  ),
}

function ToolbarDemoNode() {
  return (
    <F0GraphNode
      {...baseProps}
      nodeId="toolbar-demo"
      state="selected"
      actions={
        <>
          <span className="backdrop-blur-[180px]">
            <F0Button
              variant="neutral"
              size="md"
              icon={Files}
              label="Copy"
              hideLabel
            />
          </span>
          <span className="backdrop-blur-[180px]">
            <F0Button
              variant="neutral"
              size="md"
              icon={Pencil}
              label="Edit"
              hideLabel
            />
          </span>
          <span className="backdrop-blur-[180px]">
            <F0Button
              variant="neutral"
              size="md"
              icon={Delete}
              label="Delete"
              hideLabel
            />
          </span>
        </>
      }
    />
  )
}

const toolbarNodeTypes: NodeTypes = {
  toolbarDemo: ToolbarDemoNode,
}

const toolbarDemoNodes: Node[] = [
  {
    id: "toolbar-demo",
    type: "toolbarDemo",
    position: { x: 0, y: 0 },
    data: {},
    draggable: false,
    selectable: false,
  },
]

function ToolbarDemo() {
  return (
    <div style={{ width: 480, height: 240 }}>
      <ReactFlow
        nodes={toolbarDemoNodes}
        nodeTypes={toolbarNodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        fitView
        proOptions={{ hideAttribution: true }}
      />
    </div>
  )
}

export const WithToolbar: Story = {
  render: () => (
    <ReactFlowProvider>
      <ToolbarDemo />
    </ReactFlowProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "When the node is in the `selected` state, a toolbar appears above it with three icon-only actions: Copy, Edit, and Delete.",
      },
    },
  },
}
