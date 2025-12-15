/**
 * Text cell type for displaying text or number values in data collections.
 * Supports both direct values and objects with placeholder states.
 */
import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"
import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { isShowingPlaceholder, resolveValue } from "../../utils"
import { WithPlaceholder } from "../types"

export interface TextValue extends WithPlaceholder {
  text: string | number | undefined
}

export type TextCellValue = string | number | undefined | TextValue

export const TextCell = (args: TextCellValue, meta: ValueDisplayRendererContext) => {
  const value = resolveValue<string | number>(args, "text")
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "text")

  const text = value?.toString() ?? ""

  return (
    <OneEllipsis
      lines={1}
      tag="span"
      className={cn(
        "text-f1-foreground",
        shouldShowPlaceholderStyling && "text-f1-foreground-secondary",
        meta.visualization === "table" && tableDisplayClassNames.text
      )}
    >
      {text}
    </OneEllipsis>
  )
}
