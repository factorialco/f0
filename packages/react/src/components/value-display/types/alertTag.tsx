/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { F0TagAlert } from "@/components/tags/F0TagAlert"
import { ComponentProps } from "react"

interface AlertTagValue {
  level: ComponentProps<typeof F0TagAlert>["level"]
  label: string
}
export type AlertTagCellValue = AlertTagValue

export const AlertTagCell = (args: AlertTagCellValue) => (
  <F0TagAlert level={args.level} text={args.label} />
)
