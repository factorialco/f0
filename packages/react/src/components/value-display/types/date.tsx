/**
 * Date cell type for displaying formatted dates in data collections.
 * Supports both direct date values and objects with placeholder states.
 */
import { formatDateValue } from "../utils"

import { cn } from "@/lib/utils"

import { isShowingPlaceholder } from "../utils"
import { WithPlaceholder } from "./types"

interface DateValue extends WithPlaceholder {
  date: Date | undefined
}
export type DateCellValue = Date | undefined | DateValue

export const DateCell = (args: DateCellValue) => {
  const formattedDate = formatDateValue(args)

  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "date")

  return (
    <div
      className={cn(
        "text-f1-foreground",
        shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
      )}
    >
      {formattedDate}
    </div>
  )
}
