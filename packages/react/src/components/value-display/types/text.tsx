/**
 * Text cell type for displaying text or number values in data collections.
 * Supports both direct values and objects with placeholder states.
 */
import { cn } from "@/lib/utils"
import { isShowingPlaceholder, resolveValue } from "../utils"
import { WithPlaceholder } from "./types"

export interface TextValue extends WithPlaceholder {
  text: string | number | undefined
}

export type TextCellValue = string | number | undefined | TextValue

export const TextCell = (args: TextCellValue) => {
  const value = resolveValue<string | number>(args, "text")
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "text")

  return (
    <span
      className={cn(
        "text-f1-foreground",
        shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
      )}
    >
      {value}
    </span>
  )
}
