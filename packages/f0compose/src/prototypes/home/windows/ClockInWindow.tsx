import { ClockInControls } from "@factorialco/f0-react/dist/experimental"
import { Office } from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"

import { toggleClockIn, useClockIn } from "./clockInStore"

/**
 * Clock in, rendered by f0's OWN `ClockInControls` (Angel, 2026-09-15:
 * the widgets were hand-copied from production and their paddings had
 * drifted). Production's HomeClockIn spec asks for the `clock-in`
 * visualization, which IS this component, so the counter, the day graph,
 * the location picker and the button row come from the design system
 * rather than from a redrawn copy.
 */

const WORKDAY_MINUTES = 8 * 60

const LABELS = {
  clockedOut: "Clocked out",
  clockedIn: "Clocked in",
  onBreak: "On a break",
  clockIn: "Clock in",
  clockOut: "Clock out",
  break: "Break",
  resume: "Resume",
  remainingTime: "left today",
  overtime: "overtime",
  selectLocation: "Select a location",
  selectProject: "Select a project",
  paid: "Paid",
  unpaid: "Unpaid",
}

const LOCATIONS = [{ id: "bcn", name: "Barcelona HQ", icon: Office }]

export function ClockInWindow({ compact = false }: { compact?: boolean }) {
  const { clockedInAt } = useClockIn()
  const [now, setNow] = useState(() => Date.now())
  const [locationId, setLocationId] = useState("bcn")

  useEffect(() => {
    if (!clockedInAt) return
    // Re-sync immediately: `now` was captured when the widget MOUNTED,
    // which predates the clock-in click (elapsed would go negative).
    setNow(Date.now())
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [clockedInAt])

  const trackedMinutes = clockedInAt
    ? Math.max(0, Math.floor((now - clockedInAt) / 60000))
    : 0
  const entries = clockedInAt
    ? [
        {
          from: new Date(clockedInAt),
          to: new Date(now),
          variant: "clocked-in" as const,
        },
      ]
    : []

  return (
    <div className="px-3 pb-3 pt-1">
      <ClockInControls
        data={entries}
        trackedMinutes={trackedMinutes}
        remainingMinutes={Math.max(0, WORKDAY_MINUTES - trackedMinutes)}
        labels={LABELS}
        locations={LOCATIONS}
        locationId={locationId}
        onChangeLocationId={setLocationId}
        // The 188px floating card has no room for the location row or the
        // day graph (Figma 2694:55372).
        canShowLocation={!compact}
        canShowProject={false}
        canShowBreakButton={!compact}
        canSeeGraph={!compact}
        onClockIn={toggleClockIn}
        onClockOut={toggleClockIn}
      />
    </div>
  )
}

/** The 188px floating card's body (Figma 2694:55372): the docked one with
 *  the location row and the graph dropped. Its own component so the
 *  registry keeps its "content takes no props" rule. */
export function ClockInWindowCompact() {
  return <ClockInWindow compact />
}
