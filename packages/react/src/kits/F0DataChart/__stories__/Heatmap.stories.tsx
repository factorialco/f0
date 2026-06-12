import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import { ChartDecorator, ResponsiveSnapshot } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Heatmap",
  tags: ["autodocs"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

// ---------------------------------------------------------------------------
// Sample data — three densities matching the Figma at file
// `1smmEIugmR0CNeu7NvK33y` node `10218-20575` (Low / Medium / Large).
// ---------------------------------------------------------------------------

const PSEUDO_RANDOM = (seed: number) => {
  let state = seed
  return () => {
    state = (state * 9301 + 49297) % 233280
    return state / 233280
  }
}

function buildGrid(
  cols: number,
  rows: number,
  seed: number
): {
  xCategories: string[]
  yCategories: string[]
  data: [number, number, number][]
} {
  const rand = PSEUDO_RANDOM(seed)
  const xCategories = Array.from({ length: cols }, (_, i) =>
    String(i + 1).padStart(2, "0")
  )
  const yCategories = Array.from({ length: rows }, (_, i) =>
    String(i + 1).padStart(2, "0")
  )
  const data: [number, number, number][] = []
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      data.push([x, y, Math.round(rand() * 100)])
    }
  }
  return { xCategories, yCategories, data }
}

const LOW = buildGrid(6, 9, 11)
const MEDIUM = buildGrid(12, 9, 23)
const LARGE = buildGrid(40, 24, 47)

export const Low: Story = {
  args: {
    type: "heatmap",
    ...LOW,
  },
}

export const Medium: Story = {
  args: {
    type: "heatmap",
    ...MEDIUM,
  },
}

export const Large: Story = {
  args: {
    type: "heatmap",
    ...LARGE,
  },
}

export const WithFormatter: Story = {
  args: {
    type: "heatmap",
    ...MEDIUM,
    valueFormatter: (v) => `${v}%`,
  },
}

// ---------------------------------------------------------------------------
// Responsive snapshot — mirrors the Figma matrix exactly. Narrow column shows
// the "Not supported" placeholder; medium and large render the heatmap.
// ---------------------------------------------------------------------------

const responsiveHeatmapProps = (
  column: "low" | "normal" | "large"
): F0DataChartProps => {
  const grid = column === "low" ? LOW : column === "normal" ? MEDIUM : LARGE
  return {
    type: "heatmap",
    ...grid,
  }
}

export const ResponsiveSnapshotMatrix: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsiveHeatmapProps} />,
}

/** No data — empty state takes over. See `F0DataChart/Empty states`. */
export const Empty: Story = {
  args: {
    type: "heatmap",
    xCategories: [],
    yCategories: [],
    data: [],
  },
}
