import { type ReactNode, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon, type IconType } from "@/components/F0Icon"
import {
  ArrowCycle,
  ChevronRight,
  Delete,
  Ellipsis,
  Files,
  AlertCircleLine,
  Pencil,
  Reply,
  Plus,
} from "@/icons/app"
import { Picker } from "@/kits/Social/Reactions/Picker"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Action } from "@/ui/Action"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { useChatEdit, useChatReply } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import { formatClock } from "../utils/natural-time"
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
  const {
    toggleReaction,
    deleteMessage,
    editMessage,
    editWindowMs,
    retryMessage,
  } = useF0Chat()
  const { setReplyTo } = useChatReply()
  const { setEditingMessage } = useChatEdit()
  const [view, setView] = useState<"menu" | "info">("menu")

  // Editing is offered on your own, non-deleted messages while the host allows
  // it (provides `editMessage`) and the message is still within the edit window.
  // `Date.now()` here is fine: the popover content only mounts when open.
  const withinEditWindow =
    editWindowMs == null ||
    Date.now() - new Date(message.createdAt).getTime() <= editWindowMs
  // Voice notes can't be edited (there's no text to change) — only deleted.
  const isVoiceNote = (message.attachments ?? []).some(
    (attachment) => attachment.kind === "voice"
  )
  const canEdit =
    isMine &&
    !message.deleted &&
    !isVoiceNote &&
    !!editMessage &&
    withinEditWindow

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

  // A failed message only exists locally: it can't be reacted to, replied to,
  // edited or inspected — only resent (same id; the transport dedupes) or
  // discarded. Its trigger is the always-visible critical alert itself (the
  // hover ellipsis is not rendered: two buttons opening the same menu is
  // redundant), and the menu is reduced to Retry / Delete. The label carries
  // the send time, mirroring the sending clock's tooltip.
  const isFailed = message.status === "failed"
  const failedLabel = `${i18n.chat.notSent} · ${formatClock(
    new Date(message.createdAt)
  )}`

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        {isFailed ? (
          // The Action primitive directly (not ButtonInternal): its children
          // are ours, so the icon can carry the critical color itself.
          <Action
            variant="ghost"
            size="md"
            mode="only"
            compact
            pressed={open}
            aria-label={failedLabel}
            tooltip={failedLabel}
            data-testid="chat-failed-indicator"
          >
            <F0Icon icon={AlertCircleLine} size="md" color="critical-bold" />
          </Action>
        ) : (
          <ButtonInternal
            variant="outline"
            hideLabel
            label={i18n.chat.moreActions}
            icon={Ellipsis}
            pressed={open}
          />
        )}
      </PopoverTrigger>
      {/* Fixed width so switching to the info view doesn't resize the popover. */}
      <PopoverContent
        align={isMine ? "end" : "start"}
        className="w-64 rounded-lg border border-solid border-f1-border-secondary p-0"
      >
        {isFailed ? (
          <div className="flex flex-col gap-0 p-1">
            <MenuItem
              icon={ArrowCycle}
              label={i18n.chat.retry}
              onClick={runAndClose(() => retryMessage(message.id))}
            />
            <MenuItem
              icon={Delete}
              label={i18n.actions.delete}
              onClick={runAndClose(() => deleteMessage(message.id))}
            />
          </div>
        ) : view === "info" ? (
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
                onClick={runAndClose(() => {
                  setEditingMessage(null)
                  setReplyTo(message)
                })}
              />
              <MenuItem
                icon={Files}
                label={i18n.actions.copy}
                onClick={runAndClose(() => {
                  void navigator.clipboard?.writeText(message.body)
                })}
              />
            </div>
            {(canEdit || isMine) && (
              <>
                <div className="h-px bg-f1-border-secondary" />
                <div className="flex flex-col gap-0 p-1">
                  {canEdit && (
                    <MenuItem
                      icon={Pencil}
                      label={i18n.chat.edit}
                      onClick={runAndClose(() => {
                        setReplyTo(null)
                        setEditingMessage(message)
                      })}
                    />
                  )}
                  {isMine && (
                    <MenuItem
                      icon={Delete}
                      label={i18n.actions.delete}
                      onClick={runAndClose(() => deleteMessage(message.id))}
                    />
                  )}
                </div>
              </>
            )}
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
