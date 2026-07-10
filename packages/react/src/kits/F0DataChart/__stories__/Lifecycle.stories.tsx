import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"

import { F0DataChart } from "../index"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Lifecycle",
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

const SAMPLE = {
  type: "bar" as const,
  categories: ["Engineering", "Product", "Design", "Marketing"],
  series: [
    { name: "Headcount", data: [92, 57, 43, 27] },
    { name: "Open positions", data: [4, 3, 6, 3] },
  ],
}

const CollapsiblePanel = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-start gap-4">
      <F0Button
        label={open ? "Collapse panel" : "Expand panel"}
        onClick={() => setOpen(!open)}
      />
      {/* Mimics the app's canvas panel: the chart is MOUNTED while its
          container is 0-sized, and only later gets real dimensions via a
          CSS transition. */}
      <div
        className="overflow-hidden rounded-lg border border-solid border-f1-border-secondary transition-all duration-300"
        style={{ width: open ? 560 : 0, height: open ? 320 : 0 }}
      >
        <F0DataChart {...SAMPLE} />
      </div>
    </div>
  )
}

/**
 * Regression story for chart initialization inside animated panels (the
 * app renders dashboards in canvas panels that mount widgets while the
 * panel is still 0-sized / transitioning open).
 *
 * The chart is mounted from the start inside a container that begins at
 * `0×0` and only gets real dimensions when you press **Expand panel**.
 * `useEChartsInstance` defers `echarts.init` until the container has
 * dimensions, so:
 *
 * - the console stays free of "[ECharts] Can't get DOM width or height"
 *   warnings while the panel is collapsed, and
 * - the chart paints correctly (with the options rendered so far, and with
 *   axis-label tooltips and legend interaction attached) as soon as the
 *   panel opens.
 *
 * Before the fix, init ran at 0-size, warned, and interaction hooks could
 * attach to a blank chart.
 */
export const InitInsideAnimatedPanel: Story = {
  render: () => <CollapsiblePanel />,
}

const MountChurn = () => {
  const [mounted, setMounted] = useState(true)
  const [cycles, setCycles] = useState(0)

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <F0Button
          label={mounted ? "Unmount chart" : "Mount chart"}
          onClick={() => {
            setMounted(!mounted)
            if (mounted) setCycles((c) => c + 1)
          }}
        />
        <span className="text-base text-f1-foreground-secondary">
          {cycles} unmount cycles — console must stay clean
        </span>
      </div>
      <div className="h-[320px] w-[560px]">
        {mounted && <F0DataChart {...SAMPLE} />}
      </div>
    </div>
  )
}

/**
 * Regression story for chart disposal (dashboards are opened and closed
 * quickly, mounting/unmounting every chart each time).
 *
 * Toggle the chart repeatedly and watch the console: every unmount used to
 * log "[ECharts] Instance ec_XXXX has been disposed" once per interaction
 * hook — the instance-owning hook disposes the chart before the axis-label
 * tooltip and legend hooks run their `off()` cleanups. Those cleanups are
 * now guarded with `isDisposed()`, so mount/unmount churn is silent.
 */
export const MountUnmountChurn: Story = {
  render: () => <MountChurn />,
}
