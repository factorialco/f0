import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import type { F0DataChartPointClick, F0DataChartProps } from "../types"

import { F0DataChart } from "../index"

/**
 * `onPointClick` reports the single mark the user picked. These stories are
 * for trying it by hand — each one renders a chart and prints the payload it
 * last produced, so what the chart says and what a consumer receives can be
 * compared side by side.
 */
const meta = {
  component: F0DataChart,
  title: "F0DataChart/Point click",
  tags: ["experimental", "!autodocs", "no-sidebar"],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

// ---------------------------------------------------------------------------
// Harness
// ---------------------------------------------------------------------------

const Row = ({ label, value }: { label: string; value: string }) => (
  <>
    <dt className="text-f1-foreground-secondary">{label}</dt>
    <dd className="text-f1-foreground">{value}</dd>
  </>
)

const Readout = ({ point }: { point: F0DataChartPointClick | null }) => {
  if (!point) {
    return (
      <p className="rounded-xl bg-f1-background-tertiary p-3 text-sm text-f1-foreground-secondary">
        Nothing picked yet.
      </p>
    )
  }

  return (
    <dl className="grid grid-cols-[110px_1fr] gap-x-4 gap-y-1 rounded-xl bg-f1-background-tertiary p-3 font-mono text-xs">
      <Row label="seriesName" value={point.seriesName || "(empty)"} />
      <Row label="category" value={point.category || "(empty)"} />
      <Row label="value" value={String(point.value)} />
      <Row label="values" value={`[${point.values.join(", ")}]`} />
      <Row
        label="series"
        value={point.series.map((s) => `${s.name}: ${s.value}`).join("  ·  ")}
      />
      <Row label="dataIndex" value={String(point.dataIndex)} />
      <Row label="seriesIndex" value={String(point.seriesIndex)} />
      <Row
        label="client x/y"
        value={`${Math.round(point.clientX)}, ${Math.round(point.clientY)}`}
      />
    </dl>
  )
}

const ClickDemo = ({
  chart,
  hint,
}: {
  chart: F0DataChartProps
  hint: string
}) => {
  const [picked, setPicked] = useState<F0DataChartPointClick | null>(null)

  return (
    <div className="flex w-[600px] flex-col gap-3">
      <p className="text-sm text-f1-foreground-secondary">{hint}</p>
      <div className="h-[320px] w-full rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-3">
        <F0DataChart {...chart} onPointClick={setPicked} />
      </div>
      <Readout point={picked} />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const WORKPLACES = ["Barcelona", "Madrid", "Lisbon", "Tokyo"]

const HEADCOUNT: F0DataChartProps = {
  type: "bar",
  categories: WORKPLACES,
  series: [
    { name: "Male", data: [18, 24, 9, 6] },
    { name: "Female", data: [21, 19, 12, 7] },
  ],
  stacked: true,
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

const REVENUE: F0DataChartProps = {
  type: "line",
  categories: MONTHS,
  series: [
    { name: "Engineering", data: [2.4, 2.8, 3.0, 2.7, 2.5, 2.9] },
    { name: "Design", data: [1.8, 2.0, 2.2, 2.4, 2.6, 2.5] },
    { name: "Sales", data: [3.0, 3.1, 3.0, 2.9, 2.8, 3.4] },
  ],
}

/**
 * A handful of employees, plus the two anomalies a scatter exists to reveal:
 * someone paid well above their tenure, and someone long-serving whose salary
 * never caught up.
 */
const SALARY_VS_TENURE: F0DataChartProps = {
  type: "scatter",
  series: [
    {
      name: "Engineering",
      data: [
        { x: 52000, y: 3.2, label: "Ana Ruiz" },
        { x: 61000, y: 5.4, label: "Marc Vidal" },
        { x: 74000, y: 8.1, label: "Júlia Serra" },
        { x: 128000, y: 0.6, label: "Roser Nogué" },
        { x: 37000, y: 13.8, label: "Bernat Illa" },
      ],
    },
    {
      name: "Design",
      data: [
        { x: 44000, y: 2.1, label: "Pau Bosch" },
        { x: 58000, y: 6.3, label: "Laia Roca" },
        { x: 96000, y: 1.4, label: "Ivet Prat" },
      ],
    },
  ],
  xAxisName: "salary",
  yAxisName: "tenure",
  xValueFormatter: (v: number) => `€${Math.round(v / 1000)}k`,
  valueFormatter: (v: number) => `${v} yrs`,
  xTooltipValueFormatter: (v: number) => `€${v.toLocaleString()}`,
  tooltipValueFormatter: (v: number) => `${v} yrs`,
}

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/**
 * The default hit area. A click has to land on the mark itself — which is
 * fine for a bar, since a bar is a large target. Clicking the gaps, the axis
 * labels or the legend reports nothing.
 */
export const OnAMark: Story = {
  render: () => (
    <ClickDemo
      chart={HEADCOUNT}
      hint="Click a bar segment. Clicking between the bars does nothing — the mark is the target."
    />
  ),
}

/**
 * Lines get a wider hit area: anywhere inside the plot area counts. The click
 * resolves to the nearest category horizontally and answers with **every**
 * series there — the same rows the tooltip shows on hover, in `series`.
 *
 * A line is a few pixels wide, so requiring a hit on it asks the user to miss.
 * The tooltip here already made that concession (it is axis-triggered rather
 * than item-triggered), and clicking now agrees with it on both counts: same
 * target, same answer.
 *
 * `seriesName` and `value` still name one series — the one nearest the cursor
 * vertically — so anything that wants a headline has one.
 *
 * Worth trying: click high and then low in the same column. `series` doesn't
 * change, the headline does. Then hide a series from the legend and click
 * where it used to be — a hidden series is neither, and nor is a gap.
 */
export const AnywhereInAPlotArea: Story = {
  render: () => (
    <ClickDemo
      chart={REVENUE}
      hint="Click anywhere in the plot area — you do not have to hit a line. The whole column answers."
    />
  ),
}

/**
 * A scatter point is the relationship between two measures, so `value` alone
 * cannot describe it — `values` carries both, in `[x, y]` order.
 *
 * Click **Roser Nogué**, the point at the top right: `value` is `0.6` (the
 * tenure), while `values` is `[128000, 0.6]`. Quoting only `value` would drop
 * the salary, which is the number that makes the point interesting.
 */
export const BothMeasuresOfAScatterPoint: Story = {
  render: () => (
    <ClickDemo
      chart={SALARY_VS_TENURE}
      hint="Click the outlier at the top right. `values` keeps the salary that `value` alone would lose."
    />
  ),
}
