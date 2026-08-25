import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"

import type {
  F0DataChartAreaSelection,
  F0DataChartAreaSelectionArea,
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
const accessibleActions = categories.flatMap((category, dataIndex) =>
  series.map((item, seriesIndex) => {
    const value = item.data[dataIndex]
    return {
      key: `${seriesIndex}-${dataIndex}`,
      label: `${category} — ${item.name}: ${value}`,
      point: {
        seriesName: item.name,
        category,
        value,
        values: [value],
        series: [{ name: item.name, seriesIndex, value }],
        dataIndex,
        seriesIndex,
      },
    }
  })
)
const AreaSelectionDemo = () => {
  const [active, setActive] = useState(false)
  const [selection, setSelection] = useState<F0DataChartAreaSelection | null>(
    null
  )
  const [selectedArea, setSelectedArea] =
    useState<F0DataChartAreaSelectionArea | null>(null)

  return (
    <div className="flex w-[680px] flex-col gap-3">
      <div>
        <F0Button
          label="Draw around chart data"
          variant="outline"
          aria-pressed={active}
          onClick={() => {
            setSelection(null)
            setSelectedArea(null)
            setActive((current) => !current)
          }}
        />
      </div>
      <p className="text-sm text-f1-foreground-secondary">
        {active
          ? "Draw around bars. Press Esc to cancel."
          : "Start selection to draw a polygon around chart data."}
      </p>
      <div className="relative h-[360px] rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-3">
        <F0DataChart
          type="bar"
          categories={categories}
          series={series}
          areaSelection={{
            active,
            selected: selection !== null,
            selectedArea: selectedArea ?? undefined,
            onSelect: (nextSelection, area) => {
              setSelection(nextSelection)
              setSelectedArea(area)
              if (nextSelection.totalPointCount > 0) setActive(false)
            },
            onCancel: () => setActive(false),
          }}
        />
        {active && (
          <F0DataChartAccessibleAreaSelectionActions
            actions={accessibleActions}
            label="Select chart values without drawing"
            submitLabel="Use selected chart values ({{count}})"
            previousLabel="Previous data points"
            nextLabel="Next data points"
            resetOn={series}
            onSubmit={(points) => {
              if (points.length === 0) return
              setSelection({
                source: "control",
                points: points.slice(0, 100),
                totalPointCount: points.length,
              })
              setSelectedArea(null)
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
