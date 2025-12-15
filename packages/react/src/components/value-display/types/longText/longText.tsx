/**
 * Long text cell type for displaying multiple lines of text in data collections.
 * Uses the OneEllipsis component to truncate the text and show a tooltip with the full text.
 */
import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"
import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { isShowingPlaceholder, resolveValue } from "../../utils"
import { WithPlaceholder } from "../types"

const linesValue = (args: LongTextCellValue) => {
  return typeof args === "object" && args !== null && "lines" in args ? args.lines : undefined
}

const fullTextValue = (args: LongTextCellValue) => {
  return (typeof args === "object" && args !== null && "full" in args && args.full) ?? false
}

export type LongTextValue = WithPlaceholder & {
  text: string | number | undefined
} & (
    | {
        lines?: number
        full?: never
      }
    | {
        lines?: never
        full: true
      }
  )

export type LongTextCellValue = string | number | undefined | LongTextValue

export const LongTextCell = (args: LongTextCellValue, meta: ValueDisplayRendererContext) => {
  const value = resolveValue<string | number>(args, "text")?.toString() || ""
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "text")

  const fullText = fullTextValue(args)

  const lines = linesValue(args) || 3

  return (
    <OneEllipsis
      className={cn(
        "whitespace-pre-wrap break-words text-f1-foreground",
        shouldShowPlaceholderStyling && "text-f1-foreground-secondary",
        meta.visualization === "table" && tableDisplayClassNames.text
      )}
      lines={lines}
      disabled={fullText}
    >
      {value}
    </OneEllipsis>
  )
}
