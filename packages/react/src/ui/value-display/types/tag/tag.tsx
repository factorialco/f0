/**
 * Tag cell type for displaying single tags with optional icons.
 * Used for labeling or categorizing items in data collections.
 */
import { IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"

const tagCellVariants = {
  default: undefined,
  neutral:
    "border-none bg-f1-background-secondary text-f1-foreground-secondary",
} as const

type TagCellVariant = keyof typeof tagCellVariants

interface TagValue {
  label: string
  icon?: IconType
  /**
   * Visual variant of the tag. `neutral` renders a grey filled tag with
   * secondary foreground text instead of the default outlined style.
   * @default "default"
   */
  variant?: TagCellVariant
}
export type TagCellValue = TagValue

export const TagCell = (args: TagCellValue) => (
  <div data-cell-type="tag">
    <F0TagRaw
      text={args.label}
      icon={args.icon}
      className={tagCellVariants[args.variant ?? "default"]}
    />
  </div>
)
