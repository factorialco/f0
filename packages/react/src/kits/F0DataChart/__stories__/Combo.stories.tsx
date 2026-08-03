import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import {
  ChartDecorator,
  ChartDecoratorLarge,
  ChartDecoratorMedium,
  ChartDecoratorSmall,
} from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Combo",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

// ---------------------------------------------------------------------------
// Sample data — the three real analytics shapes a combo exists to serve.
// ---------------------------------------------------------------------------

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] as const

/** Headcount (people) against turnover rate (%) — two units, two scales. */
const HEADCOUNT = [{ name: "Headcount", data: [118, 124, 129, 131, 136, 142] }]
const TURNOVER = [
  { name: "Turnover rate", data: [4.1, 3.8, 5.2, 4.6, 3.9, 3.4] },
]

/** Absence days (count) against absence rate (%). */
const ABSENCE_DAYS = [
  { name: "Absence days", data: [212, 188, 240, 205, 176, 154] },
]
const ABSENCE_RATE = [
  { name: "Absence rate", data: [6.2, 5.4, 7.1, 6.0, 5.1, 4.4] },
]

/** Worked vs expected hours — same unit, so one formatter covers both axes. */
const WORKED_HOURS = [
  { name: "Worked hours", data: [1420, 1388, 1502, 1445, 1476, 1390] },
]
const EXPECTED_HOURS = [
  { name: "Expected hours", data: [1480, 1480, 1560, 1480, 1520, 1440] },
]

const people = (value: number) => `${value}`
const percent = (value: number) => `${value.toFixed(1)}%`
const hours = (value: number) => `${(value / 1000).toFixed(1)}k h`

// ---------------------------------------------------------------------------
// Basics
// ---------------------------------------------------------------------------

/**
 * The canonical combo: a count on the left axis, a rate on the right. Neither
 * measure would be readable on the other's scale — a 0–5% line next to 0–142
 * bars is a flat line at the bottom of a bar chart.
 */
export const HeadcountAndTurnoverRate: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: HEADCOUNT,
    lineSeries: TURNOVER,
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/** Absence volume against the rate it represents. */
export const AbsenceDaysAndRate: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: ABSENCE_DAYS,
    lineSeries: ABSENCE_RATE,
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/**
 * Both measures share a unit, so `secondaryValueFormatter` is omitted and the
 * secondary axis inherits `valueFormatter`. The two scales still differ enough
 * that a single axis would compress the comparison.
 */
export const WorkedAgainstExpectedHours: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: WORKED_HOURS,
    lineSeries: EXPECTED_HOURS,
    valueFormatter: hours,
  } satisfies F0DataChartProps,
}

/** Several bar series stack on the primary axis; the line keeps its own. */
export const StackedBarsWithRateLine: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: [
      { name: "Engineering", data: [48, 52, 55, 56, 59, 62] },
      { name: "Sales", data: [40, 42, 44, 45, 47, 50] },
      { name: "Support", data: [30, 30, 30, 30, 30, 30] },
    ],
    lineSeries: TURNOVER,
    stacked: true,
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/** Two lines on the secondary axis, e.g. a rate against its target. */
export const TwoRateLines: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: HEADCOUNT,
    lineSeries: [
      ...TURNOVER,
      { name: "Target", data: [4, 4, 4, 4, 4, 4], dashed: true },
    ],
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/**
 * Net change goes negative — the shape the employee-movements data produces.
 * Both axes divide into the same number of intervals, so every right-hand label
 * still lands on a grid line. The rate axis stays anchored at 0%: sharing the
 * bar axis' negative split would print impossible negative percentages, so the
 * two zero lines are allowed to sit at different heights instead.
 */
export const NegativeValues: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: [{ name: "Net change", data: [12, -8, 5, -14, 9, 3] }],
    lineSeries: TURNOVER,
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/** Smoothed line, with dots marking each data point. */
export const SmoothLineWithDots: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: HEADCOUNT,
    lineSeries: TURNOVER,
    lineType: "smooth",
    showDots: true,
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/** Value labels on both the bars and the line. Off by default. */
export const WithValueLabels: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: HEADCOUNT,
    lineSeries: TURNOVER,
    showLabels: true,
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/** Neither axis has a data point — the shared empty state takes over. */
export const Empty: Story = {
  args: {
    type: "combo",
    categories: [],
    barSeries: [],
    lineSeries: [],
  } satisfies F0DataChartProps,
}

/**
 * One axis still loading while the other has data. The chart renders rather
 * than showing an empty state, so a half-fetched combo doesn't flash.
 */
export const OnlyBars: Story = {
  args: {
    type: "combo",
    categories: [...MONTHS],
    barSeries: HEADCOUNT,
    lineSeries: [],
    valueFormatter: people,
  } satisfies F0DataChartProps,
}

// ---------------------------------------------------------------------------
// Responsive breakpoints
// ---------------------------------------------------------------------------

const responsiveArgs = {
  type: "combo",
  categories: [...MONTHS],
  barSeries: HEADCOUNT,
  lineSeries: TURNOVER,
  valueFormatter: people,
  secondaryValueFormatter: percent,
} satisfies F0DataChartProps

/** Narrow card: bars and line only — both value axes and the legend drop. */
export const BreakpointSmall: Story = {
  args: responsiveArgs,
  decorators: [ChartDecoratorSmall],
}

/** Wide card: both value axes and the legend, no category axis. */
export const BreakpointMedium: Story = {
  args: responsiveArgs,
  decorators: [ChartDecoratorMedium],
}

/** Dashboard cell: every axis rendered. */
export const BreakpointLarge: Story = {
  args: responsiveArgs,
  decorators: [ChartDecoratorLarge],
}
