import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0DataChartProps, F0DataChartScatterSeries } from "../types"

import { F0DataChart } from "../index"
import { ChartDecorator, ResponsiveSnapshot } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Scatter",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

// ---------------------------------------------------------------------------
// Sample data — salary against tenure, one point per employee. Generated from
// a seeded PRNG (same approach as Heatmap.stories) so visual snapshots stay
// stable across runs.
// ---------------------------------------------------------------------------

const PSEUDO_RANDOM = (seed: number) => {
  let state = seed
  return () => {
    state = (state * 9301 + 49297) % 233280
    return state / 233280
  }
}

const FIRST_NAMES = [
  "Ana",
  "Marc",
  "Júlia",
  "Pau",
  "Laia",
  "Oriol",
  "Nuria",
  "Sergi",
]
const LAST_NAMES = ["Ruiz", "Vidal", "Serra", "Bosch", "Roca", "Ferrer"]

/**
 * Build a correlated cloud: salary rises with tenure, plus noise. Correlated
 * rather than uniform so the stories actually look like the relationship a
 * scatter is meant to reveal.
 */
function buildPoints(count: number, seed: number, salaryBase: number) {
  const rand = PSEUDO_RANDOM(seed)
  return Array.from({ length: count }, (_, i) => {
    const tenure = Math.round(rand() * 120) / 10
    const salary =
      Math.round((salaryBase + tenure * 3200 + (rand() - 0.5) * 14000) / 500) *
      500
    return {
      x: salary,
      y: tenure,
      label: `${FIRST_NAMES[i % FIRST_NAMES.length]} ${LAST_NAMES[i % LAST_NAMES.length]}`,
    }
  })
}

const ENGINEERING: F0DataChartScatterSeries = {
  name: "Engineering",
  data: buildPoints(28, 11, 52000),
}

const DESIGN: F0DataChartScatterSeries = {
  name: "Design",
  data: buildPoints(18, 23, 46000),
}

const SALES: F0DataChartScatterSeries = {
  name: "Sales",
  data: buildPoints(22, 47, 41000),
}

const eurFormatter = (value: number) => `€${Math.round(value / 1000)}k`
const yearsFormatter = (value: number) => `${value} yrs`

/**
 * The default shape: one measure on each axis, one point per entity. The
 * `label` on each point becomes the tooltip header.
 */
export const Default: Story = {
  args: {
    type: "scatter",
    series: [ENGINEERING],
    xValueFormatter: eurFormatter,
    valueFormatter: yearsFormatter,
  },
}

/**
 * Pass more than one series to colour-split the points by a group dimension.
 * The legend only appears once there is a split to explain.
 */
export const ColorSplit: Story = {
  args: {
    type: "scatter",
    series: [ENGINEERING, DESIGN, SALES],
    xValueFormatter: eurFormatter,
    valueFormatter: yearsFormatter,
  },
}

/**
 * Both axes fit their data range by default (`scaleAxes`). Turn it off to
 * anchor them at the origin — useful when distance from zero is the point,
 * but it wastes space when the values sit far from it, as here.
 */
export const AnchoredAtOrigin: Story = {
  args: {
    type: "scatter",
    series: [ENGINEERING],
    scaleAxes: false,
    xValueFormatter: eurFormatter,
    valueFormatter: yearsFormatter,
  },
}

/** Larger points suit sparse data; the default of 8px suits a typical cloud. */
export const CustomPointSize: Story = {
  args: {
    type: "scatter",
    series: [{ name: "Engineering", data: ENGINEERING.data.slice(0, 8) }],
    pointSize: 16,
    xValueFormatter: eurFormatter,
    valueFormatter: yearsFormatter,
  },
}

/**
 * ~450 points across three groups. Points render at 85% opacity so dense
 * regions read as density rather than a solid block.
 */
export const Dense: Story = {
  args: {
    type: "scatter",
    series: [
      { name: "Engineering", data: buildPoints(180, 7, 52000) },
      { name: "Design", data: buildPoints(120, 13, 46000) },
      { name: "Sales", data: buildPoints(150, 29, 41000) },
    ],
    xValueFormatter: eurFormatter,
    valueFormatter: yearsFormatter,
  },
}

/** Points can also be bare `[x, y]` tuples when they need no identity. */
export const TuplePoints: Story = {
  args: {
    type: "scatter",
    series: [
      {
        name: "Headcount vs cost",
        data: [
          [12, 48],
          [18, 61],
          [24, 78],
          [31, 84],
          [37, 103],
          [44, 118],
          [52, 126],
        ],
      },
    ],
  },
}

/** Stripped back to the plot itself — no grid, no legend, no axis labels. */
export const Minimal: Story = {
  args: {
    type: "scatter",
    series: [ENGINEERING],
    showGrid: false,
    showLegend: false,
  },
}

// ---------------------------------------------------------------------------
// Responsive snapshot — the same 3×3 matrix the bar and line charts document.
// ---------------------------------------------------------------------------

const responsiveScatterProps = (
  column: "low" | "normal" | "large"
): F0DataChartProps => {
  const series =
    column === "low"
      ? [ENGINEERING]
      : column === "normal"
        ? [ENGINEERING, DESIGN]
        : [ENGINEERING, DESIGN, SALES]

  return {
    type: "scatter",
    series,
    xValueFormatter: eurFormatter,
    valueFormatter: yearsFormatter,
  }
}

export const ResponsiveSnapshotMatrix: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsiveScatterProps} />,
}

/** No data — empty state takes over. See `F0DataChart/Empty states`. */
export const Empty: Story = {
  args: {
    type: "scatter",
    series: [],
  },
}
