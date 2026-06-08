import { ForwardedRef, forwardRef, Ref } from "react"

import { F0TagList, TagListProps, TagType } from "@/components/tags/F0TagList"
import { experimentalComponent } from "@/lib/experimental"

function _TagListItemInner<T extends TagType>(
  props: TagListProps<T>,
  ref: ForwardedRef<HTMLLIElement>
) {
  return (
    <li ref={ref} className="flex items-start pt-1">
      <F0TagList {...props} />
    </li>
  )
}

const _TagListItem = forwardRef(_TagListItemInner) as <T extends TagType>(
  props: TagListProps<T> & { ref?: Ref<HTMLLIElement> }
) => ReturnType<typeof _TagListItemInner>

;(_TagListItem as { displayName?: string }).displayName = "TagListItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const TagListItem = experimentalComponent("TagListItem", _TagListItem)
