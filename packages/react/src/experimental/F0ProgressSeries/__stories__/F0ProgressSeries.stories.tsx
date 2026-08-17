import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0ProgressSeries } from "../index"
import { F0ProgressSeriesBar, f0ProgressSeriesSizes } from "../types"

const quarters: F0ProgressSeriesBar[] = [
  { value: 100, max: 100, label: "Q1" },
  { value: 50, max: 100, label: "Q2" },
  { value: undefined, label: "Q3" },
  { value: undefined, label: "Q4" },
]

const statusQuarters: F0ProgressSeriesBar[] = [
  { value: 6800, max: 3400, label: "Q1", color: "feedback-positive" },
  { value: 1700, max: 3400, label: "Q2", color: "feedback-neutral" },
  { value: 500, max: 3400, label: "Q3", color: "feedback-negative" },
  { value: undefined, label: "Q4" },
]

const canceledQuarters: F0ProgressSeriesBar[] = [
  { value: 100, max: 100, label: "Q1", color: "feedback-positive" },
  { value: 40, max: 100, canceled: true, label: "Q2" },
  { value: undefined, label: "Q3" },
  { value: undefined, label: "Q4" },
]

const monthlyBars: F0ProgressSeriesBar[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
].map((label, i) => ({ value: i < 7 ? 60 : undefined, max: 100, label }))

const euros = (value: number) => `${value.toLocaleString("de-DE")} €`

const meta = {
  title: "F0ProgressSeries",
  component: F0ProgressSeries,
  tags: ["experimental"],
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "inline-radio", options: f0ProgressSeriesSizes },
  },
  args: { bars: quarters },
} satisfies Meta<typeof F0ProgressSeries>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  tags: ["!dev"],
}

/**
 * The consumer maps its own domain to a colour token and passes `formatValue`
 * so the tooltip reads `Q2 · 1.700 / 3.400 € (50%)` — no manual tooltip strings.
 */
export const WithStatusColors: Story = {
  tags: ["!dev"],
  args: { bars: statusQuarters, formatValue: euros },
}

/**
 * Past the target the bar fills completely and splits at `100 / pct`: the base
 * colour up to the target, then a lighter shade for the excess.
 */
export const Overachievement: Story = {
  tags: ["!dev"],
  args: {
    bars: [
      { value: 158, max: 100, label: "Q1", color: "feedback-positive" },
      { value: 92, max: 100, label: "Q2", color: "feedback-neutral" },
    ],
  },
}

/** A `canceled` bar is hatched, so it reads as void rather than merely empty. */
export const Canceled: Story = {
  tags: ["!dev"],
  args: { bars: canceledQuarters },
}

/** 12 monthly bars: only 4 labels are shown, evenly spaced (Jan, Apr, Jul, Oct). */
export const Monthly: Story = {
  tags: ["!dev"],
  args: { bars: monthlyBars },
}

/** A single bar behaves like the `Progress` primitive — one bar, one label. */
export const Single: Story = {
  tags: ["!dev"],
  args: { bars: [{ value: 50, max: 100, label: "2026" }] },
}

/** `size` scales the bar height; the label row caps at `text-sm`. */
export const Sizes: Story = {
  tags: ["!dev"],
  render: (args) => (
    <div className="flex flex-col gap-6">
      {f0ProgressSeriesSizes.map((size) => (
        <F0ProgressSeries key={size} {...args} size={size} />
      ))}
    </div>
  ),
}

/**
 * The component is always `w-full` — the width belongs to whatever contains it.
 * Constrain the parent, not the series.
 */
export const Constrained: Story = {
  tags: ["!dev"],
  render: (args) => (
    <div className="w-64 rounded-md border border-f1-border-secondary p-3">
      <F0ProgressSeries {...args} />
    </div>
  ),
}

export const HiddenTooltip: Story = {
  tags: ["!dev"],
  args: { hideTooltip: true, bars: quarters },
}

export const Loading: Story = {
  tags: ["!dev"],
  args: { bars: [], loading: true },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-full flex-col gap-6">
      <F0ProgressSeries bars={quarters} />
      <F0ProgressSeries bars={statusQuarters} formatValue={euros} />
      <F0ProgressSeries bars={canceledQuarters} />
      <F0ProgressSeries bars={monthlyBars} />
      {f0ProgressSeriesSizes.map((size) => (
        <F0ProgressSeries key={size} bars={quarters} size={size} />
      ))}
      <F0ProgressSeries bars={[{ value: 50, max: 100, label: "2026" }]} />
      <F0ProgressSeries bars={[]} loading />
    </div>
  ),
}
