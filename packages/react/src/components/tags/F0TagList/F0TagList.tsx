import { OverflowList } from "@/ui/OverflowList"

import type { F0TagListProps, TagType } from "./types"

import { Tag, TagVariant } from "../F0Tag/F0Tag"
import { TagCounter } from "./components/TagCounter"

export const F0TagList = <T extends TagType>({
  type,
  tags,
  max = 4,
  remainingCount: initialRemainingCount,
}: F0TagListProps<T>) => {
  // Convert tags to TagVariant
  const tagVariants = tags.map(
    (tagData) => ({ type, ...tagData }) as TagVariant
  )

  return (
    <OverflowList
      items={tagVariants}
      max={max}
      min={1}
      // Tags render their label through OneEllipsis (BaseTag), so a visible tag
      // that does not fit should truncate — surfacing OneEllipsis' hover tooltip
      // with the full text — instead of overflowing and painting over the "+N"
      // counter. `min={1}` can force such a tag, so opt into fluid shrinking.
      fluidItems
      renderListItem={(tag) => <Tag tag={tag} />}
      renderDropdownItem={() => null}
      forceShowingOverflowIndicator={initialRemainingCount !== undefined}
      renderOverflowIndicator={(count) => (
        <TagCounter
          count={(initialRemainingCount ?? 0) + count}
          list={
            initialRemainingCount
              ? undefined
              : tagVariants.slice(tagVariants.length - count)
          }
        />
      )}
      overflowIndicatorWithPopover={false}
      // `min-w-0` lets this flex-1 row shrink below its content's intrinsic width
      // (the `flex-1` utility alone leaves `min-width: auto`, which pins it to the
      // widest tag and, in an auto-layout table cell, expands the column instead of
      // ellipsizing). Together with `fluidItems` the over-wide tag then truncates.
      className="min-w-0 flex-1"
    />
  )
}

F0TagList.displayName = "F0TagList"
