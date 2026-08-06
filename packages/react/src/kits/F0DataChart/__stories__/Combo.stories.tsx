import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

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
type Story = StoryObj<typeof meta>

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
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Turnover rate",
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
    primaryAxisLabel: "Absence days",
    secondaryAxisLabel: "Absence rate",
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
    primaryAxisLabel: "Worked hours",
    secondaryAxisLabel: "Expected hours",
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
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Turnover rate",
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
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Rate",
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
    primaryAxisLabel: "Net change",
    secondaryAxisLabel: "Turnover rate",
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
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Turnover rate",
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
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Turnover rate",
    categories: [...MONTHS],
    barSeries: HEADCOUNT,
    lineSeries: TURNOVER,
    showLabels: true,
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/** Primary-axis targets remain visible and are included in scale and tooltip. */
export const BarsWithTargets: Story = {
  args: {
    type: "combo",
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Turnover rate",
    categories: [...MONTHS],
    barSeries: [
      {
        name: "Headcount",
        data: HEADCOUNT[0].data.map((value) => ({ value, target: value + 12 })),
      },
    ],
    lineSeries: TURNOVER,
    valueFormatter: people,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/** Neither axis has a data point — the shared empty state takes over. */
export const Empty: Story = {
  args: {
    type: "combo",
    primaryAxisLabel: "Primary measure",
    secondaryAxisLabel: "Secondary measure",
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
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Turnover rate",
    categories: [...MONTHS],
    barSeries: HEADCOUNT,
    lineSeries: [],
    valueFormatter: people,
  } satisfies F0DataChartProps,
}

/** The secondary measure arrived first; it temporarily uses the sole axis. */
export const OnlyLines: Story = {
  args: {
    type: "combo",
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Turnover rate",
    categories: [...MONTHS],
    barSeries: [],
    lineSeries: TURNOVER,
    secondaryValueFormatter: percent,
  } satisfies F0DataChartProps,
}

/** Line-first partial state with long edge labels kept inside the tile. */
export const OnlyLinesWithValueLabels: Story = {
  args: {
    type: "combo",
    primaryAxisLabel: "People",
    secondaryAxisLabel: "Turnover rate",
    categories: [...MONTHS],
    barSeries: [],
    lineSeries: TURNOVER,
    showLabels: true,
    secondaryValueFormatter: (value) =>
      `${value.toFixed(1)}% annualized turnover`,
  } satisfies F0DataChartProps,
}

// ---------------------------------------------------------------------------
// Responsive breakpoints
// ---------------------------------------------------------------------------

const responsiveArgs = {
  type: "combo",
  primaryAxisLabel: "People",
  secondaryAxisLabel: "Turnover rate",
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

/** Long localized axis titles truncate safely in a medium dashboard tile. */
export const LongLocalizedAxisLabels: Story = {
  args: {
    ...responsiveArgs,
    primaryAxisLabel: "Plantilla equivalente a tiempo completo",
    secondaryAxisLabel: "Tasa de rotación anualizada",
  },
  decorators: [ChartDecoratorMedium],
}

const SNAPSHOT_VARIANTS: {
  label: string
  props: F0DataChartProps
  width?: "medium"
}[] = [
  { label: "Two scales", props: responsiveArgs },
  {
    label: "Long localized axis labels at medium width",
    width: "medium",
    props: {
      ...LongLocalizedAxisLabels.args,
    },
  },
  {
    label: "Stacked totals",
    props: {
      ...responsiveArgs,
      barSeries: [
        { name: "Engineering", data: [48, 52, 55, 56, 59, 62] },
        { name: "Sales", data: [40, 42, 44, 45, 47, 50] },
        { name: "Support", data: [30, 30, 30, 30, 30, 30] },
      ],
      stacked: true,
    },
  },
  {
    label: "Negative values",
    props: {
      ...responsiveArgs,
      barSeries: [{ name: "Net change", data: [12, -8, 5, -14, 9, 3] }],
    },
  },
  {
    label: "Targets and value labels",
    props: {
      ...responsiveArgs,
      barSeries: [
        {
          name: "Headcount",
          data: HEADCOUNT[0].data.map((value) => ({
            value,
            target: value + 12,
          })),
        },
      ],
      showLabels: true,
    },
  },
  {
    label: "Bars available first",
    props: {
      ...responsiveArgs,
      lineSeries: [],
    },
  },
  {
    label: "Lines available first with value labels",
    props: {
      ...OnlyLinesWithValueLabels.args,
    },
  },
]

/** Consolidated Chromatic coverage for combo scales and partial-data states. */
export const Snapshot: Story = {
  args: responsiveArgs,
  parameters: withSnapshot({}),
  decorators: [(Story) => <Story />],
  render: () => (
    <div className="grid w-fit grid-cols-1 gap-6 p-6">
      {SNAPSHOT_VARIANTS.map(({ label, props, width }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
            {label}
          </span>
          <div
            className={`h-[300px] rounded-md border border-solid border-f1-border-secondary bg-f1-background ${width === "medium" ? "w-[320px]" : "w-[600px]"}`}
          >
            <F0DataChart {...props} />
          </div>
        </div>
      ))}
    </div>
  ),
}
