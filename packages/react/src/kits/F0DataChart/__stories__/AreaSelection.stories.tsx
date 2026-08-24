import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"

import type {
  F0DataChartAccessibleAreaSelectionAction,
  F0DataChartAreaSelection,
} from "../index"

import {
  F0DataChart,
  F0DataChartAccessibleAreaSelectionActions,
} from "../index"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Area selection",
  tags: ["experimental", "!autodocs", "no-sidebar"],
  args: {
    type: "bar",
    categories: [],
    series: [],
  },
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof meta>

const categories = ["Barcelona", "Madrid", "Lisbon", "Tokyo"]
const series = [
  { name: "Women", data: [21, 19, 12, 7] },
  { name: "Men", data: [18, 24, 9, 6] },
]
const accessibleActions: F0DataChartAccessibleAreaSelectionAction[] =
  series.flatMap((entry, seriesIndex) =>
    entry.data.map((value, dataIndex) => ({
      key: `${seriesIndex}-${dataIndex}`,
      label: `${categories[dataIndex]} — ${entry.name}: ${value}`,
      point: {
        seriesName: entry.name,
        category: categories[dataIndex],
        value,
        values: [value],
        series: [{ name: entry.name, seriesIndex, value }],
        dataIndex,
        seriesIndex,
      },
    }))
  )

const AreaSelectionDemo = () => {
  const [active, setActive] = useState(false)
  const [selection, setSelection] = useState<F0DataChartAreaSelection | null>(
    null
  )

  return (
    <div className="flex w-[680px] flex-col gap-3">
      <div>
        <F0Button
          label="Select chart area"
          variant="outline"
          aria-pressed={active}
          onClick={() => {
            setSelection(null)
            setActive((current) => !current)
          }}
        />
      </div>
      <p className="text-sm text-f1-foreground-secondary">
        {active
          ? "Draw around bars, or choose data points. Press Esc to cancel."
          : "Start selection to draw a polygon around chart data."}
      </p>
      <div className="relative h-[360px] rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-3">
        <F0DataChart
          type="bar"
          categories={categories}
          series={series}
          areaSelection={{
            active,
            onSelect: (nextSelection) => {
              setSelection(nextSelection)
              if (nextSelection.totalPointCount > 0) setActive(false)
            },
            onCancel: () => setActive(false),
          }}
        />
        {active && (
          <F0DataChartAccessibleAreaSelectionActions
            actions={accessibleActions}
            label="Choose data points"
            submitLabel="Use selected data points ({{count}})"
            previousLabel="Previous data points"
            nextLabel="Next data points"
            resetOn={active}
            onSubmit={(points) => {
              setSelection({
                source: "control",
                points: points.slice(0, 100),
                totalPointCount: points.length,
              })
              setActive(false)
            }}
          />
        )}
      </div>
      <p
        role="status"
        className="rounded-xl bg-f1-background-tertiary p-3 text-sm text-f1-foreground-secondary"
      >
        {selection
          ? `${selection.totalPointCount} data point${selection.totalPointCount === 1 ? "" : "s"} selected: ${selection.points
              .map(
                (point) =>
                  `${point.category} — ${point.seriesName}: ${point.value}`
              )
              .join(", ")}`
          : "No completed selection yet."}
      </p>
    </div>
  )
}

/**
 * Start selection, draw around one or more bars, and compare the highlighted
 * area with the bounded data payload below the chart.
 */
export const PolygonSelection: Story = {
  tags: ["chart-area-selection"],
  args: {
    type: "bar",
    categories: [],
    series: [],
  },
  render: () => <AreaSelectionDemo />,
}
