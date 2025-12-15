import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Tag, TagVariant } from "@/components/tags/Tag"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { cn, focusRing } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { useState } from "react"

export type TagCounterItem = TagVariant

type Props = {
  count: number
  list?: TagCounterItem[]
}

export const TagCounter = ({ count, list }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const counter = <F0TagRaw text={`+${count}`} />

  if (!list?.length) return counter

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className={cn("inline-flex flex-shrink-0 items-center", focusRing())}>
          {counter}
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="rounded-md border border-solid border-f1-border-secondary p-1 shadow-md"
        align="end"
      >
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col">
          {list.map((tag, index) => (
            <div
              key={index}
              className="flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
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
          <ScrollBar orientation="vertical" className="[&_div]:bg-f1-background" />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

TagCounter.displayName = "TagCounter"
