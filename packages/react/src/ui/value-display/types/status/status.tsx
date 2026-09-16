/**
 * Status cell type for displaying status indicators with labels.
 * Used for showing the current state or condition of items in data collections.
 */
import { IconType } from "@/components/F0Icon"
import { F0TagStatus, StatusVariant } from "@/components/tags/F0TagStatus"
import {
  TooltipWrapper,
  tooltipAccessibleText,
  type TooltipValue,
} from "@/lib/tooltip-wrapper"

interface StatusValue {
  status: StatusVariant
  label: string
  icon?: IconType
  /**
   * A string is shown as a single title line. Pass an object for a title, a
   * body and a bulleted list.
   */
  tooltip?: TooltipValue
}
export type StatusCellValue = StatusValue

export const StatusCell = (args: StatusCellValue) => (
  <div data-cell-type="status">
    <TooltipWrapper tooltip={args.tooltip}>
      <div className="w-fit max-w-full">
        <F0TagStatus
          variant={args.status}
          text={args.label}
          icon={args.icon}
          additionalAccessibleText={tooltipAccessibleText(args.tooltip)}
        />
      </div>
    </TooltipWrapper>
  </div>
)
