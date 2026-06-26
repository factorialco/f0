import { useMemo } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import {
  Dropdown,
  type DropdownItem as DropdownItemType,
} from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import Delete from "@/icons/app/Delete"
import PushPin from "@/icons/app/PushPin"
import PushPinSolid from "@/icons/app/PushPinSolid"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { ThreadActionHandlers } from "../types"
import type { ChatThread } from "../useChatHistory"

import { formatThreadDate } from "../utils"

interface ThreadItemProps extends ThreadActionHandlers {
  thread: ChatThread
  isPinned: boolean
  /** Keeps the row highlighted while its thread is the one open in the panel. */
  isActive?: boolean
  /** Override the row classes (e.g. to match the sidebar's chat-row paddings). */
  className?: string
}

export function ThreadItem({
  thread,
  isPinned,
  isActive = false,
  onSelect,
  onPin,
  onUnpin,
  onDelete,
  className,
}: ThreadItemProps) {
  const translations = useI18n()
  const dropdownItems: DropdownItemType[] = useMemo(
    () => [
      {
        label: isPinned ? translations.ai.unpinChat : translations.ai.pinChat,
        icon: isPinned ? PushPinSolid : PushPin,
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
        "group flex gap-1 cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        focusRing("rounded"),
        className,
        // Persistent highlight while this thread is the one open in the panel.
        isActive && "bg-f1-background-secondary"
      )}
      role="button"
      tabIndex={0}
      aria-current={isActive ? "true" : undefined}
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
        <OneEllipsis lines={1} className="py-0.5 text-left font-medium">
          {thread.title}
        </OneEllipsis>
        {/* The date only shows on row hover/focus, like the actions menu. */}
        <span className="hidden shrink-0 text-sm font-medium text-f1-foreground-tertiary group-focus-within:inline group-hover:inline">
          {formattedDate}
        </span>
      </div>
      <div
        className={cn(
          // Hidden (not just transparent) off-hover so it takes no space and
          // the title can use the full row width. Shown on hover / focus /
          // while its dropdown is open.
          "hidden items-center",
          "group-hover:flex group-focus-within:flex",
          "has-[[aria-expanded=true]]:flex"
        )}
      >
        <Dropdown items={dropdownItems}>
          <ButtonInternal
            icon={Ellipsis}
            variant="ghost"
            size="sm"
            label={translations.ai.threadOptions}
            hideLabel
          />
        </Dropdown>
      </div>
    </div>
  )
}
