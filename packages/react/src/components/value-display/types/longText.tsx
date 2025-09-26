/**
 * Long text cell type for displaying multiple lines of text in data collections.
 * Uses the OneEllipsis component to truncate the text and show a tooltip with the full text.
 */
import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"
import { isShowingPlaceholder, resolveValue } from "../utils"
import { WithPlaceholder } from "./types"

const linesValue = (args: LongTextCellValue) => {
  return typeof args === "object" && args !== null && "lines" in args
    ? args.lines
    : undefined
}

const tooltipValue = (args: LongTextCellValue) => {
  return typeof args === "object" && args !== null && "tooltip" in args
    ? args.tooltip
    : false
}

export interface LongTextValue extends WithPlaceholder {
  text: string | number | undefined
  lines?: number
  tooltip?: boolean
}

export type LongTextCellValue = string | number | undefined | LongTextValue

export const LongTextCell = (args: LongTextCellValue) => {
  const value = resolveValue<string | number>(args, "text")?.toString() || ""
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "text")
  const lines = linesValue(args)
  const noTooltip = !tooltipValue(args)

  return (
    <OneEllipsis
      className={cn(
        "whitespace-pre-wrap break-words text-f1-foreground",
        shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
      )}
      lines={lines}
      noTooltip={noTooltip}
    >
      {value}
    </OneEllipsis>
  )
}
