import { useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import {
  Dropdown,
  type DropdownItem as DropdownItemType,
} from "@/experimental/Navigation/Dropdown"
import { EllipsisHorizontal } from "@/icons/app"
import Delete from "@/icons/app/Delete"
import PushPin from "@/icons/app/PushPin"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { ThreadActionHandlers } from "../types"
import type { ChatThread } from "../useChatHistory"

import { formatThreadDate } from "../utils"

interface ThreadItemProps extends ThreadActionHandlers {
  thread: ChatThread
  isPinned: boolean
}

export function ThreadItem({
  thread,
  isPinned,
  onSelect,
  onPin,
  onUnpin,
  onDelete,
}: ThreadItemProps) {
  const translations = useI18n()
  const dropdownItems: DropdownItemType[] = useMemo(
    () => [
      {
        label: isPinned ? translations.ai.unpinChat : translations.ai.pinChat,
        icon: PushPin,
        onClick: () => (isPinned ? onUnpin(thread.id) : onPin(thread.id)),
      },
      {
        label: translations.ai.deleteChat,
        icon: Delete,
        critical: true,
        onClick: () => onDelete(thread.id),
      },
    ],
    [isPinned, thread.id, onPin, onUnpin, onDelete]
  )

  const formattedDate = useMemo(
    () =>
      formatThreadDate(thread.updatedAt, {
        today: translations.ai.today,
        yesterday: translations.ai.yesterday,
      }),
    [thread.updatedAt, translations.ai.today, translations.ai.yesterday]
  )

  return (
    <div
      className={cn(
        "group flex cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        focusRing("rounded")
      )}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onSelect(thread.id, thread.title)
        }
      }}
    >
      <div
        className="flex w-full min-w-0 items-center gap-1"
        onClick={() => onSelect(thread.id, thread.title)}
      >
        <OneEllipsis lines={1} className="text-left font-medium">
          {thread.title}
        </OneEllipsis>
        <span className="shrink-0 font-medium text-f1-foreground-tertiary">
          {`- ${formattedDate}`}
        </span>
      </div>
      <div
        className={cn(
          "flex items-center opacity-0 transition-opacity duration-150",
          "group-hover:opacity-100 focus-within:opacity-100",
          "has-[[aria-expanded=true]]:opacity-100"
        )}
      >
        <Dropdown items={dropdownItems}>
          <F0Button
            icon={EllipsisHorizontal}
            variant="ghost"
            size="md"
            label={translations.ai.threadOptions}
            hideLabel
          />
        </Dropdown>
      </div>
    </div>
  )
}
