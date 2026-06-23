import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { ChevronRight, Delete, Ellipsis, Files, Info, Reply } from "@/icons/app"
import { Picker } from "@/kits/Social/Reactions/Picker"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { useChatUI } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import { ChatMessageInfoView } from "./ChatMessageInfo"

const QUICK_EMOJIS = ["👍", "❤️", "😂", "🎉", "😮", "🙏"]

// Shared row styling so the inline Info trigger matches the MenuItem buttons.
const MENU_ROW_CLASS =
  "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium transition-colors hover:bg-f1-background-secondary"

/**
 * Left-aligned, full-width menu row — same base styling as the sidebar chat
 * actions (New chat / New group). `critical` paints it for destructive actions;
 * `trailing` renders on the right (e.g. a submenu chevron).
 */
const MenuItem = ({
  icon,
  label,
  onClick,
  critical,
  trailing,
}: {
  icon: IconType
  label: string
  onClick?: () => void
  critical?: boolean
  trailing?: ReactNode
}): ReactNode => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      MENU_ROW_CLASS,
      critical ? "text-f1-foreground-critical" : "text-f1-foreground",
      focusRing("focus-visible:ring-inset")
    )}
  >
    <F0Icon
      icon={icon}
      size="md"
      className={critical ? "text-f1-icon-critical" : "text-f1-icon"}
    />
    <span className="line-clamp-1 flex-1">{label}</span>
    {trailing}
  </button>
)

/**
 * Per-message actions, collapsed behind an ellipsis so the bubble keeps its
 * width. The dropdown holds a quick-reaction row (+ the full emoji picker) and
 * the reply / copy / info / delete menu. "Info" opens a submenu to the side on
 * hover (the main menu stays open). Open state is owned by the parent so the
 * trigger can stay pressed/visible while the menu is open.
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

  const react = (emoji: string) => {
    toggleReaction(message.id, emoji)
    onOpenChange(false)
  }

  const runAndClose = (action: () => void) => () => {
    action()
    onOpenChange(false)
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <ButtonInternal
          variant="outline"
          hideLabel
          label={i18n.chat.moreActions}
          icon={Ellipsis}
          pressed={open}
        />
      </PopoverTrigger>
      <PopoverContent
        align={isMine ? "end" : "start"}
        className="w-fit rounded-lg border border-solid border-f1-border-secondary p-0"
      >
        <div className="flex items-center p-1">
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
          />
        </div>
        <div className="h-px bg-f1-border-secondary" />
        <div className="flex flex-col gap-0.5 p-1">
          <MenuItem
            icon={Reply}
            label={i18n.chat.reply}
            onClick={runAndClose(() => setReplyTo(message))}
          />
          <MenuItem
            icon={Files}
            label={i18n.chat.copy}
            onClick={runAndClose(() => {
              void navigator.clipboard?.writeText(message.body)
            })}
          />
          {/* Info: a submenu that opens to the side on hover; main menu stays.
              The trigger must be a real element so HoverCard's `asChild` can
              wire its hover handlers (a wrapper component would drop them). */}
          <HoverCard openDelay={80} closeDelay={120}>
            <HoverCardTrigger asChild>
              <button
                type="button"
                className={cn(MENU_ROW_CLASS, "text-f1-foreground")}
              >
                <F0Icon icon={Info} size="md" className="text-f1-icon" />
                <span className="line-clamp-1 flex-1">{i18n.chat.info}</span>
                <F0Icon
                  icon={ChevronRight}
                  size="sm"
                  className="text-f1-icon-secondary"
                />
              </button>
            </HoverCardTrigger>
            <HoverCardContent
              side="right"
              align="start"
              sideOffset={8}
              className="w-fit rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-0 text-f1-foreground shadow-md"
            >
              <ChatMessageInfoView message={message} />
            </HoverCardContent>
          </HoverCard>
          {isMine && (
            <MenuItem
              icon={Delete}
              label={i18n.chat.delete}
              onClick={runAndClose(() => deleteMessage(message.id))}
              critical
            />
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
