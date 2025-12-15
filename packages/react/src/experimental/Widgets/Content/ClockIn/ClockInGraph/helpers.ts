import { formatTime24Hours } from "../../../../../lib/date"
import { getNormalizedRemainingMinutes } from "../ClockInControls/helpers"
import { CLOCK_IN_COLORS, ClockInGraphProps } from "./index"

const EMPTY_LABEL = "--:--"

const getLeftEntry = (remainingMinutes: number, totalSeconds: number) => {
  if (remainingMinutes && remainingMinutes > 0) {
    return {
      value: (remainingMinutes * 60) / totalSeconds,
      color: CLOCK_IN_COLORS.empty,
    }
  }

  if (!totalSeconds) {
    return {
      value: 1,
      color: CLOCK_IN_COLORS.empty,
    }
  }
}

export const normalizeData = ({
  data = [],
  trackedMinutes,
  remainingMinutes = 0,
}: {
  data: ClockInGraphProps["data"]
  trackedMinutes: number
  remainingMinutes?: number
}) => {
  const overtimeOnly = remainingMinutes < 0 && remainingMinutes < -1 * trackedMinutes

  const normalizedRemainingMinutes = getNormalizedRemainingMinutes(trackedMinutes, remainingMinutes)

  const totalSecondsWithRemainingTime =
    data.reduce((acc, entry) => acc + (entry.to.getTime() - entry.from.getTime()) / 1000, 0) +
    (normalizedRemainingMinutes ?? 0) * 60

  const leftEntry =
    overtimeOnly || (normalizedRemainingMinutes ?? 0) < 0
      ? undefined
      : getLeftEntry(normalizedRemainingMinutes ?? 0, totalSecondsWithRemainingTime)

  let accumulatedOvertimeSeconds =
    (normalizedRemainingMinutes ?? 0) < 0 ? Math.abs(normalizedRemainingMinutes ?? 0) * 60 : 0

  const dataCopy = [...data]

  let res = [
    ...dataCopy
      .reverse()
      .reduce(
        (acc, entry) => {
          const totalEntrySeconds = (entry.to.getTime() - entry.from.getTime()) / 1000

          const totalEntryOvertimeSeconds =
            entry.variant === "clocked-in"
              ? Math.min(totalEntrySeconds, accumulatedOvertimeSeconds)
              : 0

          const finalEntrySeconds = totalEntrySeconds - totalEntryOvertimeSeconds

          const value = finalEntrySeconds / totalSecondsWithRemainingTime

          accumulatedOvertimeSeconds -= totalEntryOvertimeSeconds

          if (entry.variant === "clocked-in" && overtimeOnly) {
            return [
              ...acc,
              {
                value: totalEntryOvertimeSeconds / totalSecondsWithRemainingTime + value,
                color: CLOCK_IN_COLORS.overtime,
              },
            ]
          }

          return [
            ...acc,
            {
              value: totalEntryOvertimeSeconds / totalSecondsWithRemainingTime,
              color: CLOCK_IN_COLORS.overtime,
            },
            {
              value,
              color: CLOCK_IN_COLORS[entry.variant],
            },
          ]
        },
        [] as { value: number; color: string }[]
      )
      .reverse(),
    ...(leftEntry ? [leftEntry] : []),
  ]

  res = res.filter((entry) => entry.value > 0)

  if (!res.length) {
    res.push({
      value: 1,
      color: CLOCK_IN_COLORS.empty,
    })
  }

  return res
}

export const getLabels = ({
  data = [],
  remainingMinutes,
  trackedMinutes = 0,
}: ClockInGraphProps) => {
  const clockedInAt = data.find((entry) => entry.variant === "clocked-in")?.from

  const lastEntry = data.at(-1)

  const primaryLabel = clockedInAt ? formatTime24Hours(clockedInAt) : EMPTY_LABEL

  const secondaryLabel = (() => {
    if (remainingMinutes === undefined || remainingMinutes > 0) return EMPTY_LABEL

    return lastEntry ? formatTime24Hours(lastEntry.to) : EMPTY_LABEL
  })()

  const isLastEntryBreak = lastEntry?.variant === "break"

  const totalTime = !isLastEntryBreak
    ? trackedMinutes * 60 * 1000
    : lastEntry?.to.getTime() - lastEntry?.from.getTime() || 0

  const hours = Math.floor(totalTime / (1000 * 60 * 60))
  const minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60))

  const normalizedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`

  return {
    primaryLabel,
    secondaryLabel,
    time: normalizedTime,
  }
}
