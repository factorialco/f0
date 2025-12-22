import { Tag, TagVariant } from "@/components/tags/F0Tag/F0Tag"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"

export type TagCounterItem = TagVariant

type Props = {
  count: number
  list?: TagCounterItem[]
}

export const TagCounter = ({ count, list }: Props) => {
  const counter = <F0TagRaw text={`+${count}`} />

  if (!list?.length) return counter

  return (
    <HoverCard>
      <HoverCardTrigger>
        <span className="cursor-pointer">{counter}</span>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background dark flex max-h-[220px] flex-col">
          {list.map((tag, index) => (
            <div
              key={index}
              className="flex w-[172px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
            >
              {tag.description ? (
                <Tooltip label={tag.description}>
                  <div>
                    <Tag tag={tag} />
                  </div>
                </Tooltip>
              ) : (
                <Tag tag={tag} />
              )}
            </div>
          ))}
          <ScrollBar
            orientation="vertical"
            className="[&_div]:bg-f1-background"
          />
        </ScrollArea>
      </HoverCardContent>
    </HoverCard>
  )
}

TagCounter.displayName = "TagCounter"
