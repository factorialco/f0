import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"

import { MentionItem } from "../MentionItem"
import {
  MentionedUser,
  MentionItemComponentProps,
  MentionListRef,
} from "../types"

export interface MentionListProps {
  items: MentionedUser[]
  command: (item: MentionedUser) => void
  component?: React.FC<MentionItemComponentProps>
}

const MentionList = forwardRef<MentionListRef, MentionListProps>(
  ({ items, command, component: Component = MentionItem }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectItem = useCallback(
      (index: number) => {
        const item = items[index]
        if (item) {
          command(item)
        }
      },
      [items, command]
    )

    const upHandler = useCallback(() => {
      setSelectedIndex((prev) => (prev + items.length - 1) % items.length)
    }, [items.length])

    const downHandler = useCallback(() => {
      setSelectedIndex((prev) => (prev + 1) % items.length)
    }, [items.length])

    const enterHandler = useCallback(() => {
      selectItem(selectedIndex)
    }, [selectedIndex, selectItem])

    useEffect(() => {
      setSelectedIndex(0)
    }, [items])

    useImperativeHandle(
      ref,
      () => ({
        onKeyDown: ({ event }: { event: KeyboardEvent }) => {
          if (event.key === "ArrowUp") {
            upHandler()
            return true
          }
          if (event.key === "ArrowDown") {
            downHandler()
            return true
          }
          if (event.key === "Enter") {
            enterHandler()
            return true
          }
          return false
        },
      }),
      [upHandler, downHandler, enterHandler]
    )

    return (
      <div className="flex max-h-72 w-60 flex-col gap-2 overflow-y-auto rounded-md border border-solid border-f1-border bg-f1-background p-0.5 drop-shadow-sm">
        {items.length === 0 ? (
          <div className="p-2">
            <p className="text-neutral-40 text-sm font-medium">
              No results found
            </p>
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              onClick={() => selectItem(index)}
              onMouseEnter={() => setSelectedIndex(index)}
              className="cursor-pointer bg-f1-background"
            >
              <Component
                item={item}
                index={index}
                selected={index === selectedIndex}
              />
            </div>
          ))
        )}
      </div>
    )
  }
)

MentionList.displayName = "MentionList"

export { MentionList }
