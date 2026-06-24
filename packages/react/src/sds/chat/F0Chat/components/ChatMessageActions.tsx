import { type ReactNode, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon, type IconType } from "@/components/F0Icon"
import {
  ChevronRight,
  Delete,
  Ellipsis,
  Files,
  AlertCircleLine,
  Reply,
  Plus,
} from "@/icons/app"
import { Picker } from "@/kits/Social/Reactions/Picker"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { useChatUI } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import { ChatMessageInfoView } from "./ChatMessageInfo"

const QUICK_EMOJIS = ["👍", "❤️", "😂", "🎉", "😮", "🙏"]

// Shared row styling so the inline Info trigger matches the MenuItem buttons.
const MENU_ROW_CLASS =
  "flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-2 text-left font-medium transition-colors hover:bg-f1-background-secondary text-f1-foreground"

/**
 * Left-aligned, full-width menu row — same base styling as the sidebar chat
 * actions (New chat / New group). `critical` paints it for destructive actions;
 * `trailing` renders on the right (e.g. a submenu chevron).
 */
const MenuItem = ({
  icon,
  label,
  onClick,
  trailing,
}: {
  icon: IconType
  label: string
  onClick?: () => void
  trailing?: ReactNode
}): ReactNode => (
  <button
    type="button"
    onClick={onClick}
    className={cn(MENU_ROW_CLASS, focusRing("focus-visible:ring-inset"))}
  >
    <F0Icon icon={icon} size="md" />
    <span className="line-clamp-1 flex-1">{label}</span>
    {trailing}
  </button>
)

/**
 * Per-message actions, collapsed behind an ellipsis so the bubble keeps its
 * width. The dropdown holds a quick-reaction row (+ the full emoji picker) and
 * the reply / copy / info / delete menu. "Info" swaps the popover content in
 * place for an info panel (with a back arrow), keeping the same width. Open
 * state is owned by the parent so the trigger stays pressed/visible while open.
 */
export const ChatMessageActions = ({
  message,
  isMine,
  open,
  onOpenChange,
}: {
  message: F0ChatMessage
  isMine: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
}): ReactNode => {
  const i18n = useI18n()
  const { toggleReaction, deleteMessage } = useF0Chat()
  const { setReplyTo } = useChatUI()
  const [view, setView] = useState<"menu" | "info">("menu")

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next)
    if (!next) setView("menu")
  }

  const react = (emoji: string) => {
    toggleReaction(message.id, emoji)
    handleOpenChange(false)
  }

  const runAndClose = (action: () => void) => () => {
    action()
    handleOpenChange(false)
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <ButtonInternal
          variant="outline"
          hideLabel
          label={i18n.chat.moreActions}
          icon={Ellipsis}
          pressed={open}
        />
      </PopoverTrigger>
      {/* Fixed width so switching to the info view doesn't resize the popover. */}
      <PopoverContent
        align={isMine ? "end" : "start"}
        className="w-64 rounded-lg border border-solid border-f1-border-secondary p-0"
      >
        {view === "info" ? (
          <ChatMessageInfoView
            message={message}
            onBack={() => setView("menu")}
          />
        ) : (
          <>
            <div className="flex items-center justify-between p-2">
              {QUICK_EMOJIS.map((emoji) => (
                <ButtonInternal
                  key={emoji}
                  label={emoji}
                  emoji={emoji}
                  variant="ghost"
                  aria-label={emoji}
                  onClick={() => react(emoji)}
                  className="h-8 w-8 rounded text-base hover:bg-f1-background-secondary-hover"
                />
              ))}
              <Picker
                size="md"
                variant="ghost"
                label={i18n.chat.react}
                onSelect={react}
                icon={Plus}
              />
            </div>
            <div className="h-px bg-f1-border-secondary" />
            <div className="flex flex-col gap-0 p-1">
              <MenuItem
                icon={AlertCircleLine}
                label={i18n.chat.info}
                onClick={() => setView("info")}
                trailing={
                  <F0Icon
                    icon={ChevronRight}
                    size="md"
                    className="text-f1-icon"
                  />
                }
              />
              <MenuItem
                icon={Reply}
                label={i18n.chat.reply}
                onClick={runAndClose(() => setReplyTo(message))}
              />
              <MenuItem
                icon={Files}
                label={i18n.actions.copy}
                onClick={runAndClose(() => {
                  void navigator.clipboard?.writeText(message.body)
                })}
              />
            </div>
            {isMine && (
              <>
                <div className="h-px bg-f1-border-secondary" />
                <div className="flex flex-col gap-0 p-1">
                  <MenuItem
                    icon={Delete}
                    label={i18n.actions.delete}
                    onClick={runAndClose(() => deleteMessage(message.id))}
                  />
                </div>
              </>
            )}
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
