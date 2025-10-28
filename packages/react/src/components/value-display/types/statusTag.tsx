/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { ComponentProps } from "react"

interface StatusTagValue {
  variant: ComponentProps<typeof F0TagStatus>["variant"]
  label: string
}
export type StatusTagCellValue = StatusTagValue

export const StatusTagCell = (args: StatusTagCellValue) => (
  <div data-cell-type="status-tag">
    <F0TagStatus variant={args.variant} text={args.label} />
  </div>
)
