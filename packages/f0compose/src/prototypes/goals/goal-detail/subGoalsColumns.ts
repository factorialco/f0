import { renderAssigneeCell } from "../shared/assigneeCell"
import type { GoalRecord, GoalStatus } from "../shared/types"

function statusLabel(status: GoalStatus): string {
  switch (status) {
    case "on-track":
      return "On track"
    case "off-track":
      return "Off track"
    case "at-risk":
      return "At Risk"
    case "partial":
      return "Partial"
    case "achieved":
      return "Achieved"
    case "missed":
      return "Missed"
    case "cancelled":
      return "Canceled"
  }
}

function statusVariant(
  status: GoalStatus
): "neutral" | "info" | "positive" | "critical" {
  switch (status) {
    case "on-track":
      return "info"
    case "off-track":
      return "critical"
    case "at-risk":
      return "critical"
    case "partial":
      return "neutral"
    case "achieved":
      return "positive"
    case "missed":
      return "critical"
    case "cancelled":
      return "neutral"
  }
}

/**
 * Parse a measure string like "10.000€ → 15.000€" or "0 → 12 endpoints"
 * into numeric current/target values for the columns. The fixture format
 * is consistent so a regex is enough; falls back to "—" if it can't be
 * parsed (e.g. "Achieved / Not achieved").
 */
function parseMeasure(measure: string, progress: number) {
  const match = measure.match(/^(.+?)\s*→\s*(.+)$/)
  if (!match) return { current: "—", target: "—" }
  const target = match[2].trim()
  // Approximate "current" from progress + the start/target endpoints so
  // the table mirrors the design (where current is shown as a real value,
  // not just the start). We don't try to be clever about units — we
  // surface the target verbatim and reconstruct current by interpolation
  // on the leading number.
  const startNum = extractNumber(match[1])
  const targetNum = extractNumber(target)
  if (startNum === null || targetNum === null) {
    return { current: match[1].trim(), target }
  }
  const currentNum = Math.round(
    startNum + ((targetNum - startNum) * progress) / 100
  )
  const unit = target.replace(/[\d.,\s]/g, "")
  return {
    current: `${formatNumber(currentNum)}${unit}`,
    target,
  }
}

function extractNumber(s: string): number | null {
  const m = s.match(/-?\d[\d.,]*/)
  if (!m) return null
  const n = Number(m[0].replace(/\./g, "").replace(",", "."))
  return Number.isNaN(n) ? null : n
}

function formatNumber(n: number): string {
  return n.toLocaleString("de-DE")
}

export const subGoalsColumns = [
  {
    id: "title",
    label: "Name",
    render: (item: GoalRecord) => item.title,
  },
  {
    id: "assignee",
    label: "Assignee",
    render: (item: GoalRecord) => renderAssigneeCell(item.assignee),
  },
  {
    id: "current",
    label: "Current",
    render: (item: GoalRecord) =>
      parseMeasure(item.measure, item.progress).current,
  },
  {
    id: "target",
    label: "Target",
    render: (item: GoalRecord) =>
      parseMeasure(item.measure, item.progress).target,
  },
  {
    id: "progress",
    label: "Progress",
    sorting: "progress",
    render: (item: GoalRecord) => ({
      type: "progressBar" as const,
      value: {
        value: item.progress,
        max: Math.max(100, item.progress),
        label: `${item.progress}%`,
        color: item.progress > 100 ? "categorical-4" : "categorical-1",
      },
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (item: GoalRecord) => ({
      type: "status" as const,
      value: {
        label: statusLabel(item.status),
        status: statusVariant(item.status),
      },
    }),
  },
]
