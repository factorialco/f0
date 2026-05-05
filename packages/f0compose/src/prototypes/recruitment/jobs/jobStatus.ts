import type { JobStatus } from "@/fixtures"

/** Maps a job status to a `status` value-display variant. */
export function statusVariant(
  status: JobStatus
): "positive" | "warning" | "info" | "critical" | "neutral" {
  switch (status) {
    case "published":
      return "positive"
    case "draft":
      return "warning"
    case "archived":
      return "neutral"
    default:
      return "info"
  }
}

/** Title-case the JobStatus enum value for display. */
export function statusText(status: JobStatus): string {
  return status[0].toUpperCase() + status.slice(1)
}

/** Maps a job status to an F0TagDot colour for compact dot tags. */
export function jobStatusDotColor(
  status: JobStatus
): "viridian" | "yellow" | "smoke" | "barbie" {
  switch (status) {
    case "published":
      return "viridian"
    case "draft":
      return "yellow"
    case "archived":
      return "smoke"
    default:
      return "barbie"
  }
}
