/**
 * Status cell type for displaying status indicators with labels.
 * Used for showing the current state or condition of items in data collections.
 */
import { IconType } from "@/components/F0Icon"
import { F0TagStatus, StatusVariant } from "@/components/tags/F0TagStatus"

interface StatusValue {
  status: StatusVariant
  label: string
  icon?: IconType
}
export type StatusCellValue = StatusValue

export const StatusCell = (args: StatusCellValue) => (
  <div data-cell-type="status">
    <F0TagStatus variant={args.status} text={args.label} icon={args.icon} />
  </div>
)
