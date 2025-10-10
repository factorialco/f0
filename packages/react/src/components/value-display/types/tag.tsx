/**
 * Tag cell type for displaying single tags with optional icons.
 * Used for labeling or categorizing items in data collections.
 */
import { IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"

interface TagValue {
  label: string
  icon?: IconType
}
export type TagCellValue = TagValue

export const TagCell = (args: TagCellValue) => (
  <div data-cell-type="tag">
    <F0TagRaw text={args.label} icon={args.icon} />
  </div>
)
