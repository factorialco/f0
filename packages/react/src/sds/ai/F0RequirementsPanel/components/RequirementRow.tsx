import { Chip } from "@/components/OneChip"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"

import type { RequirementItem } from "../types"

import { RequirementIndicator } from "./RequirementIndicator"

interface RequirementRowProps {
  item: RequirementItem
  /** Empty-state tag shown for the item being asked when it has no value yet. */
  askingLabel: string
  /** Short suffix appended to optional, still-pending labels, e.g. "optional". */
  optionalLabel: string
}

/**
 * One requirement: status icon + label on the left, captured value on the right.
 * Until a value is captured the right column shows an empty-state Chip (the same
 * treatment as the Smart Intake checklist), never a bare dash.
 */
export const RequirementRow = ({
  item,
  askingLabel,
  optionalLabel,
}: RequirementRowProps) => {
  const { label, value, status, optional, placeholder } = item
  const isCurrent = status === "current"
  const isDone = status === "done"
  const emptyLabel = placeholder ?? (optional ? optionalLabel : askingLabel)

  return (
    // The current step is signalled by the breathing indicator (no row fill);
    // px-4 lines content up with the panel header.
    <div className="px-4 py-1.5">
      <div className="flex items-center gap-3">
        <RequirementIndicator status={status} />

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span
            className={cn(
              "shrink-0 text-sm transition-colors",
              isCurrent
                ? "font-semibold text-f1-foreground"
                : isDone
                  ? "text-f1-foreground"
                  : "text-f1-foreground-secondary"
            )}
          >
            {label}
            {optional && !isDone && (
              <span className="ml-1 font-normal text-f1-foreground-tertiary">
                ({optionalLabel})
              </span>
            )}
          </span>

          <span className="flex min-w-0 flex-1 justify-end">
            {isDone && value ? (
              <OneEllipsis
                className="text-sm font-medium text-f1-foreground"
                lines={1}
              >
                {value}
              </OneEllipsis>
            ) : (
              <Chip variant="default" label={emptyLabel} />
            )}
          </span>
        </div>
      </div>
    </div>
  )
}
