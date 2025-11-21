/**
 * Icon cell type for displaying icons with associated labels in data collections.
 * Used for visual representation of status or type indicators.
 */
import { F0Icon, IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"
import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"

interface IconValue {
  icon: IconType
  label: string
}
export type IconCellValue = IconValue

export const IconCell = (
  args: IconCellValue,
  meta: ValueDisplayRendererContext
) => (
  <div
    className={cn(
      "flex items-center gap-2",
      meta.visualization === "table" && tableDisplayClassNames.avatar
    )}
  >
    <F0Icon icon={args.icon} />
    <span className="text-f1-foreground">{args.label}</span>
  </div>
)
