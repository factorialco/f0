import type { MappingStatus } from "./types"

type StatusVariant = "neutral" | "info" | "positive" | "warning" | "critical"

export function statusLabel(s: MappingStatus): string {
  switch (s) {
    case "unmapped":
      return "Unmapped"
    case "suggested":
      return "Suggested"
    case "confirmed":
      return "Confirmed"
  }
}

export function statusVariant(s: MappingStatus): StatusVariant {
  switch (s) {
    case "unmapped":
      return "neutral"
    case "suggested":
      return "info"
    case "confirmed":
      return "positive"
  }
}
