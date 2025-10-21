/**
 * Tag list cell type for displaying multiple tags in a collection.
 * Supports different tag types and can limit the maximum number of visible tags.
 */
import { F0TagList, TagType } from "@/components/tags/F0TagList"
import { TagVariant } from "@/components/tags/Tag"

interface TagListValue {
  tags: Array<Omit<TagVariant, "type">>
  max?: number
  type: TagType
}
export type TagListCellValue = TagListValue

export const TagListCell = (args: TagListCellValue) => (
  <F0TagList
    layout="fill"
    type={args.type}
    tags={args.tags as TagVariant[]}
    max={args.max}
  />
)
