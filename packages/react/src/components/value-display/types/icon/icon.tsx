/**
 * Icon cell type for displaying icons with associated labels in data collections.
 * Used for visual representation of status or type indicators.
 */
import { F0Icon, IconType } from "@/components/F0Icon"
import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"
import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"

interface IconValue {
  icon: IconType
  label: string
  tooltip?: string
  hideLabel?: boolean
}
export type IconCellValue = IconValue

const TooltipWrapper: React.FC<{
  tooltip?: string
  children: React.ReactNode
}> = ({ tooltip, children }) => {
  if (tooltip) {
    return (
      <TooltipInternal label={tooltip} instant>
        {children}
      </TooltipInternal>
    )
  }
  return children
}

export const IconCell = (args: IconCellValue, meta: ValueDisplayRendererContext) => (
  <div
    className={cn(
      "flex items-center gap-2",
      meta.visualization === "table" && tableDisplayClassNames.avatar
    )}
  >
    <TooltipWrapper tooltip={args.tooltip}>
      <div className="inline-flex items-center gap-2">
        <F0Icon icon={args.icon} aria-label={args.hideLabel ? args.label : undefined} />
        {args.hideLabel ? (
          <span className="sr-only">{args.label}</span>
        ) : (
          <span className="text-f1-foreground">{args.label}</span>
        )}
      </div>
    </TooltipWrapper>
  </div>
)
