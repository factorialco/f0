import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0GraphNode } from ".."
import { F0GraphNodeActions } from "../components/F0GraphNodeActions"
import { F0GraphNodeAvatar } from "../components/F0GraphNodeAvatar"
import { F0GraphNodeMetadata } from "../components/F0GraphNodeMetadata"
import { F0GraphNodeSubtitle } from "../components/F0GraphNodeSubtitle"
import { F0GraphNodeTitle } from "../components/F0GraphNodeTitle"

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

const AvatarPlaceholder = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-f1-background-secondary text-xs font-medium text-f1-foreground-secondary">
    AM
  </div>
)

export const Default: Story = {
  render: () => (
    <F0GraphNode>
      <F0GraphNodeAvatar>
        <AvatarPlaceholder />
      </F0GraphNodeAvatar>
      <F0GraphNodeTitle>Alice Moreno</F0GraphNodeTitle>
      <F0GraphNodeSubtitle>Staff Designer</F0GraphNodeSubtitle>
    </F0GraphNode>
  ),
}

export const Compact: Story = {
  render: () => (
    <F0GraphNode variant="compact">
      <F0GraphNodeAvatar>
        <AvatarPlaceholder />
      </F0GraphNodeAvatar>
      <F0GraphNodeTitle>Alice Moreno</F0GraphNodeTitle>
      <F0GraphNodeSubtitle>Staff Designer</F0GraphNodeSubtitle>
    </F0GraphNode>
  ),
}

export const Dot: Story = {
  render: () => (
    <F0GraphNode variant="dot">
      <F0GraphNodeAvatar>
        <AvatarPlaceholder />
      </F0GraphNodeAvatar>
    </F0GraphNode>
  ),
}

export const Selected: Story = {
  render: () => (
    <F0GraphNode state="selected">
      <F0GraphNodeAvatar>
        <AvatarPlaceholder />
      </F0GraphNodeAvatar>
      <F0GraphNodeTitle>Alice Moreno</F0GraphNodeTitle>
      <F0GraphNodeSubtitle>Staff Designer</F0GraphNodeSubtitle>
    </F0GraphNode>
  ),
}

export const Expanded: Story = {
  render: () => (
    <F0GraphNode hasChildren expanded childrenCount={3}>
      <F0GraphNodeAvatar>
        <AvatarPlaceholder />
      </F0GraphNodeAvatar>
      <F0GraphNodeTitle>Alice Moreno</F0GraphNodeTitle>
      <F0GraphNodeSubtitle>Staff Designer</F0GraphNodeSubtitle>
    </F0GraphNode>
  ),
}

export const WithAllSlots: Story = {
  render: () => (
    <F0GraphNode hasChildren expanded={false} childrenCount={5}>
      <F0GraphNodeAvatar>
        <AvatarPlaceholder />
      </F0GraphNodeAvatar>
      <F0GraphNodeTitle>Alice Moreno</F0GraphNodeTitle>
      <F0GraphNodeSubtitle>Staff Designer · Product</F0GraphNodeSubtitle>
      <F0GraphNodeMetadata>
        <span className="rounded bg-f1-background-secondary px-1.5 py-0.5">
          Madrid
        </span>
        <span className="rounded bg-f1-background-secondary px-1.5 py-0.5">
          Full-time
        </span>
      </F0GraphNodeMetadata>
      <F0GraphNodeActions>
        <button
          type="button"
          className="rounded px-2 py-1 text-xs text-f1-foreground-secondary hover:bg-f1-background-secondary"
        >
          View profile
        </button>
      </F0GraphNodeActions>
    </F0GraphNode>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["default", "selected", "highlighted", "dimmed"] as const).map(
        (state) => (
          <F0GraphNode key={state} state={state}>
            <F0GraphNodeAvatar>
              <AvatarPlaceholder />
            </F0GraphNodeAvatar>
            <F0GraphNodeTitle>{state}</F0GraphNodeTitle>
            <F0GraphNodeSubtitle>State variant</F0GraphNodeSubtitle>
          </F0GraphNode>
        )
      )}
    </div>
  ),
}
