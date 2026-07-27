import { useCallback, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { ChevronUp } from "@/icons/app"
import ChevronDown from "@/icons/app/ChevronDown"
import { cn, focusRing } from "@/lib/utils"

import type { ChatThread } from "../useChatHistory"
import type { ThreadActionHandlers } from "../types"
import { ThreadItem } from "./ThreadItem"

interface CollapsibleGroupProps extends ThreadActionHandlers {
  label: string
  threads: ChatThread[]
  pinnedIds: Set<string>
}

export function CollapsibleGroup({
  label,
  threads,
  pinnedIds,
  onSelect,
  onPin,
  onUnpin,
  onDelete,
}: CollapsibleGroupProps) {
  const [expanded, setExpanded] = useState(true)

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggleExpanded()
      }
    },
    [toggleExpanded]
  )

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={toggleExpanded}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          focusRing("rounded")
        )}
      >
        <span className="text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary">
          {label}
        </span>
        <F0Icon
          icon={expanded ? ChevronDown : ChevronUp}
          color="secondary"
          size="xs"
        />
      </div>
      {expanded && (
        <div className="flex flex-col">
          {threads.map((thread) => (
            <ThreadItem
              key={thread.id}
              thread={thread}
              isPinned={pinnedIds.has(thread.id)}
              onSelect={onSelect}
              onPin={onPin}
              onUnpin={onUnpin}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}
