import { useState } from "react"

import { focusRing } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"

import { Chip, type ChipProps } from "../../experimental/OneChip"

type Props = {
  count: number
  list?: ChipProps[]
}

export const ChipCounter = ({ count, list }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const counter = <Chip label={`+${count}`} />

  if (!list?.length) return counter

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className={focusRing("inline-flex flex-shrink-0 items-center")}>
          {counter}
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="rounded-md border border-solid border-f1-border-secondary p-1 shadow-md"
        align="end"
      >
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col">
          {list.map((chip, index) => (
            <div
              key={index}
              className="flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
            >
              <Chip {...chip} />
            </div>
          ))}
          <ScrollBar
            orientation="vertical"
            className="[&_div]:bg-f1-background"
          />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

ChipCounter.displayName = "ChipCounter"
