import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useState } from "react"

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

/** Counts ECharts console warnings/errors and shows them on screen, so the
 * lifecycle fixes are visible without opening devtools. */
const useEChartsWarningCounter = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const orig = { warn: console.warn, error: console.error }
    const bump = (args: unknown[]) => {
      const text = args.map(String).join(" ")
      if (/echarts|dom width|disposed/i.test(text)) setCount((c) => c + 1)
    }
    console.warn = (...args) => {
      bump(args)
      orig.warn(...args)
    }
    console.error = (...args) => {
      bump(args)
      orig.error(...args)
    }
    return () => {
      console.warn = orig.warn
      console.error = orig.error
    }
  }, [])
  return count
}

const WarningBadge = ({ count }: { count: number }) => (
  <span
    className={
      "rounded-md px-3 py-1 text-lg font-semibold text-f1-foreground-inverse " +
      (count > 0
        ? "bg-f1-background-critical-bold"
        : "bg-f1-background-positive-bold")
    }
  >
    ECharts console warnings: {count}
  </span>
)

const AutoPanel = () => {
  const warnings = useEChartsWarningCounter()
  // Chart mounts only after the counter is armed, and only while the panel is
  // open — mirroring the app's canvas, which mounts widgets while the panel
  // is still 0-sized and unmounts them on close.
  const [armed, setArmed] = useState(false)
  const [open, setOpen] = useState(false)
  const [opens, setOpens] = useState(0)

  useEffect(() => setArmed(true), [])
  useEffect(() => {
    const timer = setInterval(() => {
      setOpen((o) => {
        if (!o) setOpens((n) => n + 1)
        return !o
      })
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <WarningBadge count={warnings} />
        <span className="text-base text-f1-foreground-secondary">
          {opens} panel opens
        </span>
      </div>
      <div
        className="overflow-hidden rounded-lg border border-solid border-f1-border-secondary transition-all duration-300"
        style={{ width: open ? 560 : 0, height: open ? 320 : 0 }}
      >
        <div className="h-full w-full px-4 py-3">
          {armed && open && <F0DataChart {...SAMPLE} />}
        </div>
      </div>
    </div>
  )
}

/** Self-running showcase: the panel opens and closes on a loop, mounting the
 * chart while the panel is still 0-sized (like the app's canvas) while the
 * badge counts ECharts warnings. Broken lifecycle = the counter climbs. */
export const AutoReplayInsideAnimatedPanel: Story = {
  render: () => <AutoPanel />,
}

const AutoChurn = () => {
  const warnings = useEChartsWarningCounter()
  const [mounted, setMounted] = useState(false)
  const [cycles, setCycles] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setMounted((m) => {
        if (m) setCycles((c) => c + 1)
        return !m
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <WarningBadge count={warnings} />
        <span className="text-base text-f1-foreground-secondary">
          {cycles} unmount cycles
        </span>
      </div>
      <div className="h-[320px] w-[560px] px-4 py-3">
        {mounted && <F0DataChart {...SAMPLE} />}
      </div>
    </div>
  )
}

/** Self-running showcase: the chart mounts and unmounts on a loop while the
 * badge counts ECharts warnings. Broken disposal = the counter climbs. */
export const AutoMountUnmountChurn: Story = {
  render: () => <AutoChurn />,
}
