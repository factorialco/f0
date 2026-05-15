import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Button } from "@/components/F0Button"
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
    <div className="flex flex-wrap items-center gap-16">
      {(["detail", "compact", "dot"] as const).map((variant) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <F0GraphNode
            avatar={personAvatar}
            title="Alice Moreno"
            subtitle="Staff Designer"
            variant={variant}
          />
          <span className="text-xs text-f1-foreground-secondary">
            {variant}
          </span>
        </div>
      ))}
    </div>
  ),
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
          subtitle="Tags and actions"
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
