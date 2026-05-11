import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { fn } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { F0GraphNodeTagType } from "../../F0GraphNode"

import { F0GraphControls } from "../F0GraphControls"

const meta: Meta<typeof F0GraphControls> = {
  component: F0GraphControls,
  title: "Graph/F0GraphControls",
  tags: ["stable"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neutral",
      values: [{ name: "neutral", value: "hsl(var(--neutral-5))" }],
    },
  },
  args: {
    onZoomIn: fn(),
    onZoomOut: fn(),
    onFitView: fn(),
  },
  decorators: [
    (Story) => (
      <div className="relative p-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0GraphControls>

export default meta
type Story = StoryObj<typeof F0GraphControls>

export const Default: Story = {}

export const WithFindMe: Story = {
  args: {
    onFocusUser: fn(),
  },
}

export const WithMetadataToggle: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows the metadata visibility popover. The popover button appears only when tagTypes is non-empty and onToggleTagType is provided.",
      },
    },
  },
  render: (args) => {
    const [visibleTagTypes, setVisibleTagTypes] = useState<
      Set<F0GraphNodeTagType>
    >(() => new Set(["person", "team", "status"]))

    const handleToggleTagType = (type: F0GraphNodeTagType) => {
      setVisibleTagTypes((prev) => {
        const next = new Set(prev)

        if (next.has(type)) {
          next.delete(type)
        } else {
          next.add(type)
        }

        return next
      })
    }

    return (
      <F0GraphControls
        {...args}
        tagTypes={["person", "team", "status"]}
        visibleTagTypes={visibleTagTypes}
        onToggleTagType={handleToggleTagType}
        tagTypeLabels={{
          person: "People",
          team: "Teams",
          status: "Statuses",
        }}
      />
    )
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex items-center gap-8">
      <F0GraphControls {...args} />
      <F0GraphControls {...args} onFocusUser={fn()} />
    </div>
  ),
}
