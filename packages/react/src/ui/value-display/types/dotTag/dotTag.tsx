/**
 * Dot tag cell type for displaying colored dot indicators with labels.
 * Used for status indicators or category markers with color coding.
 */
import { F0TagDot, NewColor } from "@/components/tags/F0TagDot"

interface DotTagValue {
  label: string
  color: NewColor
}
export type DotTagCellValue = DotTagValue

export const DotTagCell = (args: DotTagCellValue) => (
  <div data-cell-type="dot-tag">
    <F0TagDot text={args.label} color={args.color} />
  </div>
)
