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
      <div
        className="overflow-hidden rounded-lg border border-solid border-f1-border-secondary transition-all duration-300"
        style={{ width: open ? 560 : 0, height: open ? 320 : 0 }}
      >
        <div className="h-full w-full px-4 py-3">
          <F0DataChart {...SAMPLE} />
        </div>
      </div>
    </div>
  )
}

/** A chart mounted inside a 0-sized panel that expands via a CSS transition: no console warnings while collapsed, one fully-formed paint on open. */
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
      <div className="h-[320px] w-[560px] px-4 py-3">
        {mounted && <F0DataChart {...SAMPLE} />}
      </div>
    </div>
  )
}

/** Mount/unmount churn must not log "[ECharts] Instance has been disposed". */
export const MountUnmountChurn: Story = {
  render: () => <MountChurn />,
}
