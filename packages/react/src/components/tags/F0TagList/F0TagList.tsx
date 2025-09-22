import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { OverflowList } from "@/ui/OverflowList"
import { cva } from "cva"
import { Tag, TagVariant } from "../Tag"
import { TagCounter } from "./components/TagCounter"
import type { Props, TagType } from "./types"

const tagListVariants = cva({
  base: "flex items-center gap-2",
})

export const F0TagList = <T extends TagType>({
  type,
  tags,
  max = 4,
  remainingCount: initialRemainingCount,
  layout = "compact",
}: Props<T>) => {
  // Convert tags to TagVariant
  const tagVariants = tags.map(
    (tagData) => ({ type, ...tagData }) as TagVariant
  )

  if (layout === "fill") {
    return (
      <OverflowList
        items={tagVariants}
        renderListItem={(tag) => {
          const description = getTagDescription(tag)

          return description ? (
            <Tooltip label={description}>
              <div>
                <Tag tag={tag} />
              </div>
            </Tooltip>
          ) : (
            <Tag tag={tag} />
          )
        }}
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
        className="flex-1"
      />
    )
  }

  const visibleTags = tagVariants.slice(0, max)
  const remainingTags = tagVariants.slice(max)
  const remainingCount = initialRemainingCount ?? tagVariants.length - max
  const showCounter = remainingCount > 0

  return (
    <div className={tagListVariants()}>
      {visibleTags.map((tag, index) => {
        const description = getTagDescription(tag)

        return description ? (
          <Tooltip key={index} label={description}>
            <div>
              <Tag key={index} tag={tag} />
            </div>
          </Tooltip>
        ) : (
          <Tag key={index} tag={tag} />
        )
      })}
      {showCounter && (
        <TagCounter
          count={remainingCount}
          list={initialRemainingCount ? undefined : remainingTags}
        />
      )}
    </div>
  )
}

const getTagDescription = (tag: TagVariant): string | undefined => {
  if ("description" in tag && typeof tag.description === "string") {
    return tag.description
  }
  return undefined
}

F0TagList.displayName = "F0TagList"
