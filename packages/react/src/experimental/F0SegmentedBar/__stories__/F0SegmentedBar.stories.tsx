import type { Meta, StoryObj } from "@storybook/react-vite"

import { SegmentColorToken } from "../types"

import { F0SegmentedBar } from "../index"

const meta = {
  title: "F0SegmentedBar",
  component: F0SegmentedBar,
  tags: ["experimental"],
  args: {
    value: 2,
    max: 3,
    label: "Competency",
  },
} satisfies Meta<typeof F0SegmentedBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  tags: ["!dev"],
}

type RatingRow = {
  label: string
  value: number
  color: SegmentColorToken
}

const competencies: RatingRow[] = [
  { label: "UX Design", value: 1, color: "feedback-negative" },
  { label: "Prototyping", value: 2, color: "feedback-neutral" },
  { label: "User Research", value: 3, color: "feedback-positive" },
]

/**
 * The ATS competency side panel case: the consumer maps each rating to a colour
 * token (red = bad, orange = normal, green = great) and renders the name itself.
 */
export const RatingScale: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      {competencies.map((row) => (
        <div key={row.label} className="flex flex-col gap-1">
          <span className="text-sm font-medium text-f1-foreground">
            {row.label}
          </span>
          <F0SegmentedBar
            value={row.value}
            max={3}
            color={row.color}
            label={row.label}
          />
        </div>
      ))}
    </div>
  ),
}

export const FivePointScale: Story = {
  tags: ["!dev"],
  args: {
    value: 4,
    max: 5,
    color: "categorical-2",
  },
}

export const Empty: Story = {
  tags: ["!dev"],
  args: {
    value: 0,
    max: 3,
  },
}

export const Full: Story = {
  tags: ["!dev"],
  args: {
    value: 3,
    max: 3,
    color: "feedback-positive",
  },
}

/** `value` greater than `max` clamps to `max`. */
export const Clamped: Story = {
  tags: ["!dev"],
  args: {
    value: 7,
    max: 3,
  },
}

export const WithLabel: Story = {
  tags: ["!dev"],
  args: {
    value: 2,
    max: 3,
    label: "Stakeholder Communication",
  },
}
