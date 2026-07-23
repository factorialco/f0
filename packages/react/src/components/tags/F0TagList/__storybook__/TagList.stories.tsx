import { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TagList, TagType } from "../"
import { mockTags } from "./mockData"

const longLabelDotTags = [
  { text: "Strategic Workforce Planning", color: "viridian" as const },
  {
    text: "Cross-functional Stakeholder Management",
    color: "malibu" as const,
  },
  { text: "Advanced Data Analysis & Reporting", color: "yellow" as const },
  {
    text: "Ruggedized Industrial Handheld Barcode Scanner (Model XR-9000)",
    color: "purple" as const,
  },
  { text: "Change Management", color: "lilac" as const },
]

/**
 * The TagList component displays a collection of tags of a single type.
 *
 * **Note:** The TagList only accepts one tag type at a time. The `type` prop
 * specifies which tag variant to use, and the `tags` array must contain only data
 * relevant to that specific tag type.
 */
const meta = {
  title: "Tags/TagList",
  component: F0TagList,
  parameters: {
    docs: {
      description: {
        component:
          "TagList displays a collection of tags of a single type with overflow handling.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof F0TagList>

export default meta

type Story = StoryObj<typeof meta>

export const WithCustomMax: Story = {
  args: {
    type: "dot",
    tags: mockTags.dot,
    max: 2,
  },
}

export const WithRemainingCount: Story = {
  args: {
    type: "dot",
    tags: mockTags.dot.slice(0, 2),
    remainingCount: 10,
  },
}

/**
 * Hover the `+N` counter to open the overflow popover. Each hidden tag's label is
 * shown in full and the popover adapts its width to the longest label, without a
 * horizontal scrollbar. Very long labels are capped (`max-w-72`) and ellipsized.
 *
 * This is the scenario used by the Job Catalog nested table (Competencies / Devices
 * columns), where long names must stay fully readable in the popover.
 */
export const OverflowPopoverLongLabels: Story = {
  args: {
    type: "dot",
    max: 1,
    tags: longLabelDotTags,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    type: "dot",
    tags: mockTags.dot,
  },
  render: () => (
    <>
      <div className="flex w-full flex-col gap-4 overflow-hidden border-[1px] border-dotted border-[#333] p-3">
        {Object.entries(mockTags).map(([type, tags]) => (
          <div key={type}>
            <h3 className="mb-4 font-semibold">{type}</h3>
            <F0TagList type={type as TagType} tags={tags} />
          </div>
        ))}
      </div>

      <div className="flex w-[300px] flex-col gap-4 overflow-hidden border-[1px] border-dotted border-[#333] p-3">
        {Object.entries(mockTags).map(([type, tags]) => (
          <div key={type}>
            <h3 className="mb-4 font-semibold">{type}</h3>
            <F0TagList type={type as TagType} tags={tags} />
          </div>
        ))}
      </div>
    </>
  ),
}
