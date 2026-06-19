import type { GoalLevel, GoalStatus } from "./types"

export function statusToVariant(
  status: GoalStatus
): "positive" | "warning" | "info" | "neutral" {
  switch (status) {
    case "on-track":
      return "positive"
    case "in-progress":
      return "info"
    case "at-risk":
      return "warning"
    case "not-started":
      return "neutral"
    case "overachieved":
      return "positive"
  }
}

export function statusToLabel(status: GoalStatus): string {
  switch (status) {
    case "on-track":
      return "On track"
    case "in-progress":
      return "In progress"
    case "at-risk":
      return "At risk"
    case "not-started":
      return "Not started"
    case "overachieved":
      return "Overachieved"
  }
}

export function levelToLabel(level: GoalLevel): string {
  switch (level) {
    case "company":
      return "Company"
    case "team":
      return "Team"
    case "individual":
      return "Individual"
  }
}

export function levelToColor(
  level: GoalLevel
): "info" | "positive" | "neutral" {
  switch (level) {
    case "company":
      return "info"
    case "team":
      return "positive"
    case "individual":
      return "neutral"
  }
}
