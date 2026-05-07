import { F0Text } from "@factorialco/f0-react"

import type { SignalAreaStatus } from "../shared/types"

const STATUS_STYLES: Record<
  SignalAreaStatus,
  { bg: string; fg: string; label: string }
> = {
  healthy: {
    bg: "bg-f1-background-positive-secondary",
    fg: "text-f1-foreground-positive",
    label: "Healthy",
  },
  warning: {
    bg: "bg-f1-background-warning-secondary",
    fg: "text-f1-foreground-warning",
    label: "Warning",
  },
  critical: {
    bg: "bg-f1-background-critical-secondary",
    fg: "text-f1-foreground-critical",
    label: "Critical",
  },
  no_data: {
    bg: "bg-f1-background-secondary",
    fg: "text-f1-foreground-secondary",
    label: "No data",
  },
  product_not_activated: {
    bg: "bg-f1-background-secondary",
    fg: "text-f1-foreground-secondary",
    label: "Not activated",
  },
}

type Props = {
  status: SignalAreaStatus
  label?: string
}

/**
 * Inline status pill rendered with Tailwind tokens. Used instead of `Chip`
 * because Chip only supports `default`/`selected`, not semantic colors.
 */
export function StatusPill({ status, label }: Props) {
  const s = STATUS_STYLES[status]
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${s.bg} ${s.fg}`}
    >
      <F0Text content={label ?? s.label} variant="small" />
    </span>
  )
}
