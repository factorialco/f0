import { CLOCK_IN_COLORS } from "../ClockInGraph"
import { ClockInControlsProps } from "./index"

// to prevent having an overtime greater that the total time that we're showing
export const getNormalizedRemainingMinutes = (
  trackedMinutes: ClockInControlsProps["trackedMinutes"],
  remainingMinutes: ClockInControlsProps["remainingMinutes"]
) => {
  const res =
    (remainingMinutes ?? 0) < -1 * (trackedMinutes ?? 0)
      ? -1 * trackedMinutes
      : remainingMinutes

  return res ?? 0
}

export const getInfo = ({
  data = [],
  labels,
  trackedMinutes,
  remainingMinutes,
  canSeeRemainingTime = true,
}: Pick<
  ClockInControlsProps,
  | "data"
  | "labels"
  | "trackedMinutes"
  | "remainingMinutes"
  | "canSeeRemainingTime"
>) => {
  const lastEntry = data[data.length - 1]
  const status = lastEntry?.variant || "clocked-out"

  const statusText = {
    "clocked-out": labels.clockedOut,
    "clocked-in": labels.clockedIn,
    break: labels.onBreak,
  }[status]

  const subtitle = (() => {
    if (!canSeeRemainingTime) return

    if (remainingMinutes === undefined) return

    const normalizedRemainingMinutes = getNormalizedRemainingMinutes(
      trackedMinutes,
      remainingMinutes
    )

    const absRemainingMinutes = Math.abs(normalizedRemainingMinutes)

    const hours = Math.floor(absRemainingMinutes / 60)
    const minutes = Math.floor(absRemainingMinutes % 60)

    const normalizedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`

    if (remainingMinutes >= 0) {
      return `${labels.remainingTime} ${normalizedTime}`
    }

    return `${labels.overtime} ${normalizedTime}`
  })()

  const statusColor = CLOCK_IN_COLORS[status]

  return {
    status,
    statusText,
    subtitle,
    statusColor,
  }
}
