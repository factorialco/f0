import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0GraphNode } from ".."

const meta = {
  component: F0GraphNode,
  tags: ["stable", "!autodocs"],
  title: "Graph/F0GraphNode",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["detail", "compact", "dot"],
    },
    state: {
      control: "radio",
      options: ["default", "selected", "highlighted", "dimmed"],
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

export const Compact: Story = {
  args: { ...baseProps, variant: "compact" },
}

export const Dot: Story = {
  args: { ...baseProps, variant: "dot" },
}

export const Selected: Story = {
  args: { ...baseProps, state: "selected" },
}

export const Expanded: Story = {
  args: {
    ...baseProps,
    hasChildren: true,
    expanded: true,
    childrenCount: 3,
  },
}

export const WithAllSlots: Story = {
  args: {
    avatar: personAvatar,
    title: "Alice Moreno",
    subtitle: "Staff Designer · Product",
    hasChildren: true,
    expanded: false,
    childrenCount: 5,
    tags: [
      { type: "team", name: "Design" },
      { type: "team", name: "Platform" },
      { type: "team", name: "Research" },
      {
        type: "person",
        name: "Bob Smith",
      },
    ],
    actions: (
      <button
        type="button"
        className="rounded px-2 py-1 text-xs text-f1-foreground-secondary hover:bg-f1-background-secondary"
      >
        View profile
      </button>
    ),
  },
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
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
