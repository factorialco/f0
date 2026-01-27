import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

import { F0Icon } from "@/components/F0Icon"
import { cn } from "@/lib/utils"

import { CommandGroup, CommandItem } from "./AvailableCommands"

interface CommandListHandle {
  onKeyDown: ({ event }: { event: KeyboardEvent }) => boolean
}

interface CommandListProps {
  items: CommandItem[]
  groups?: CommandGroup[]
  command: (item: CommandItem) => void
}

const CommandList = forwardRef<CommandListHandle, CommandListProps>(
  ({ items, groups, command }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const selectedItemRef = useRef<HTMLDivElement>(null)

    // Use groups if provided, otherwise fall back to flat items
    const commandsToRender = groups || [{ title: "", commands: items }]
    const allCommands = commandsToRender.flatMap((group) => group.commands)

    const selectItem = useCallback(
      (index: number) => {
        const item = allCommands[index]
        if (item) {
          command(item)
        }
      },
      [allCommands, command]
    )

    const scrollIntoView = useCallback((element: HTMLElement) => {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()

      if (elementRect.top < containerRect.top) {
        container.scrollTop += elementRect.top - containerRect.top
      } else if (elementRect.bottom > containerRect.bottom) {
        container.scrollTop += elementRect.bottom - containerRect.bottom
      }
    }, [])

    const upHandler = useCallback(() => {
      setSelectedIndex((prev) => {
        const newIndex = prev <= 0 ? allCommands.length - 1 : prev - 1
        return newIndex
      })
    }, [allCommands.length])

    const downHandler = useCallback(() => {
      setSelectedIndex((prev) => {
        const newIndex = prev >= allCommands.length - 1 ? 0 : prev + 1
        return newIndex
      })
    }, [allCommands.length])

    const enterHandler = useCallback(() => {
      selectItem(selectedIndex)
    }, [selectedIndex, selectItem])

    // Scroll into view when selectedIndex changes
    useEffect(() => {
      if (selectedItemRef.current) {
        scrollIntoView(selectedItemRef.current)
      }
    }, [selectedIndex, scrollIntoView])

    // Reset selection when items change
    useEffect(() => {
      setSelectedIndex(0)
    }, [items.length])

    useImperativeHandle(
      ref,
      () => ({
        onKeyDown: ({ event }: { event: KeyboardEvent }) => {
          if (event.key === "ArrowUp") {
            event.preventDefault()
            upHandler()
            return true
          }
          if (event.key === "ArrowDown") {
            event.preventDefault()
            downHandler()
            return true
          }
          if (event.key === "Enter") {
            event.preventDefault()
            enterHandler()
            return true
          }
          return false
        },
      }),
      [upHandler, downHandler, enterHandler]
    )

    // Function to get the global index of a command within all commands
    const getGlobalIndex = (groupIndex: number, commandIndex: number) => {
      let globalIndex = 0
      for (let i = 0; i < groupIndex; i++) {
        globalIndex += commandsToRender[i].commands.length
      }
      return globalIndex + commandIndex
    }

    return (
      <div
        ref={containerRef}
        className="scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md"
      >
        {commandsToRender.map((group, groupIndex) => (
          <div key={groupIndex}>
            <div className="p-1">
              {/* Group title (only show if we have multiple groups and the group has a title) */}
              {groups && group.title && (
                <div className="p-2">
                  <p className="text-sm font-medium tracking-wide text-f1-foreground-secondary">
                    {group.title}
                  </p>
                </div>
              )}

              {/* Group commands */}
              {group.commands.map((item, commandIndex) => {
                const globalIndex = getGlobalIndex(groupIndex, commandIndex)
                const isSelected = globalIndex === selectedIndex

                return (
                  <div
                    key={`${groupIndex}-${commandIndex}`}
                    ref={isSelected ? selectedItemRef : null}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover",
                      isSelected && "bg-f1-background-secondary"
                    )}
                    onClick={() => {
                      setSelectedIndex(globalIndex)
                      selectItem(globalIndex)
                    }}
                    onMouseEnter={() => setSelectedIndex(globalIndex)}
                  >
                    {item.emoji ? (
                      <span className="text-base">{item.emoji}</span>
                    ) : item.icon ? (
                      <F0Icon
                        icon={item.icon}
                        className="text-f1-foreground-secondary"
                      />
                    ) : null}
                    <p className="flex-grow text-sm font-medium text-f1-foreground">
                      {item.title}
                    </p>
                  </div>
                )
              })}
            </div>
            {/* Divider between groups (only show if not the last group and we have multiple groups) */}
            {groups && groupIndex < commandsToRender.length - 1 && (
              <div className="py-1">
                <div className="h-[1px] w-full bg-f1-border-secondary" />
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
)

CommandList.displayName = "CommandList"

export { CommandList }
