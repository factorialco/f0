import { useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import {
  Dropdown,
  type DropdownItem as DropdownItemType,
} from "@/experimental/Navigation/Dropdown"
import { EllipsisHorizontal } from "@/icons/app"
import Delete from "@/icons/app/Delete"
import PushPin from "@/icons/app/PushPin"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { ChatThread } from "../useChatHistory"
import type { ThreadActionHandlers } from "../types"

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
        className="flex w-full items-center gap-2"
        onClick={() => onSelect(thread.id, thread.title)}
      >
        <OneEllipsis lines={1} className="text-left font-medium">
          {thread.title}
        </OneEllipsis>
      </div>
      <div className="flex items-center">
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
