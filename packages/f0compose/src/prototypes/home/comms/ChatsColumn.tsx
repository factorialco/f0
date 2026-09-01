import { F0AvatarPerson, F0Button } from "@factorialco/f0-react"
import { Ellipsis, Headset } from "@factorialco/f0-react/icons/app"

import { avatarFor } from "@/fixtures/helpers"

import type { StackState } from "../windows/stack"
import type { PanelSpec } from "../windows/WindowStack"
import type { ChatId } from "./chats"

import { taskTitle } from "../inbox/inboxTasks"
import { TicketWindow } from "../inbox/TicketWindow"
import { SidePanelIcon } from "../windows/PanelIcons"
import { useWindowStack } from "../windows/stack"
import { animateWindowClose as animateClose } from "../windows/windowMotion"
import {
  MaximizedWindow as GenericMaximizedWindow,
  WindowStack,
} from "../windows/WindowStack"
import { CHATS_BY_ID } from "./chats"
import { ChatWindow } from "./ChatWindow"

/**
 * The LEFT-hand Comms stack (Figma 2707:406513). Clicking a conversation
 * in the nav opens it as a window exactly like a widget, only on the
 * other side of the canvas — same card, same stacking (two per column),
 * same width/height drags, same maximize (per Oskar, 2026-08-31).
 *
 * All of that lives in the shared `WindowStack`; this file is only the
 * chat-specific chrome: which glyph leads the header, and the two extra
 * header buttons the chat design carries.
 */

/**
 * The left pane holds ONE thing at a time: a Comms conversation, or the
 * detail behind an Inbox row. They occupy the same slot in the design and
 * you cannot be in both nav sections at once, so they share a stack
 * rather than fighting over the space.
 */
export type TicketPaneId = `ticket:${string}`
export type LeftPaneId = ChatId | TicketPaneId

export function isTicket(id: LeftPaneId): id is TicketPaneId {
  return id.startsWith("ticket:")
}

/** The inbox task behind a ticket pane id. */
export function taskIdOf(id: TicketPaneId): string {
  return id.slice("ticket:".length)
}

export type ChatsState = StackState<LeftPaneId>

/** Namespaces this stack's `data-window-key`s away from the widgets'.
 *  "pane", not "chat": it holds tickets too, and `chat:ticket:x` read
 *  like a bug. */
export const CHAT_KEY_PREFIX = "pane"

/** 428 = the Figma frame's chat column (420 card + the 8px gutter). */
const CHAT_COLUMN_WIDTH = 428

export function useChats() {
  return useWindowStack<LeftPaneId>({ columnWidth: CHAT_COLUMN_WIDTH })
}

export function leftPaneSpec(id: LeftPaneId): PanelSpec {
  if (isTicket(id)) {
    const taskId = taskIdOf(id)
    return {
      title: "Ticket",
      // Maximized, the toggle offers the DOCKED panel (Figma 2725:444787);
      // docked it offers the expand (2725:447260). Same maximize state
      // machine as the widgets, different glyph on the way back.
      restoreIcon: SidePanelIcon,
      actions: (
        <F0Button
          variant="ghost"
          size="md"
          icon={Ellipsis}
          hideLabel
          label="Ticket options"
        />
      ),
      content: <TicketWindow taskId={taskId} title={taskTitle(taskId)} />,
      fills: true,
    }
  }
  const chat = CHATS_BY_ID[id]
  return {
    title: chat.title,
    // The frame leads with the channel's own glyph — a bare emoji at
    // ~15px in a 20px box, NOT an F0AvatarEmoji (whose smallest is a
    // 24px tinted square the design does not show).
    leading:
      chat.kind === "channel" ? (
        <span
          aria-hidden
          className="flex size-5 shrink-0 items-center justify-center text-base leading-none"
        >
          {chat.emoji}
        </span>
      ) : (
        <div className="shrink-0">
          <F0AvatarPerson
            firstName={chat.title.split(" ")[0]}
            lastName={chat.title.split(" ").slice(1).join(" ")}
            src={chat.seed ? avatarFor(chat.seed) : undefined}
            size="xs"
          />
        </div>
      ),
    actions: (
      <>
        <F0Button
          variant="ghost"
          size="md"
          icon={Ellipsis}
          hideLabel
          label={`Options for ${chat.title}`}
        />
        <F0Button
          variant="ghost"
          size="md"
          icon={Headset}
          hideLabel
          label={`Start a call in ${chat.title}`}
        />
      </>
    ),
    content: <ChatWindow chat={chat} />,
    // The message list scrolls and the composer stays pinned, so the
    // chat lays itself out instead of going in the stack's scroll box.
    fills: true,
  }
}

export function animateChatClose(id: LeftPaneId, close: () => void) {
  animateClose(`${CHAT_KEY_PREFIX}:${id}`, close)
}

export function MaximizedChat({
  id,
  onRestore,
  onClose,
}: {
  id: LeftPaneId
  onRestore: () => void
  onClose: () => void
}) {
  return (
    <GenericMaximizedWindow
      windowKey={`${CHAT_KEY_PREFIX}:${id}`}
      spec={leftPaneSpec(id)}
      onRestore={onRestore}
      onClose={onClose}
    />
  )
}

export function ChatsColumn(props: {
  state: ChatsState
  overlay: boolean
  maxWidth?: number
  onClose: (id: LeftPaneId) => void
  onToggleMaximized: (id: LeftPaneId) => void
  onSetColumnWidth: (width: number) => void
  onResizeBetween: (
    idx: number,
    deltaWeight: number,
    pair: LeftPaneId[]
  ) => void
  onResizeColumnsBetween: (
    idx: number,
    deltaWeight: number,
    columnCount: number,
    minWeight: number
  ) => void
}) {
  return (
    <WindowStack
      side="left"
      keyPrefix={CHAT_KEY_PREFIX}
      noun="chat"
      // One slot per KIND, not per id: swapping which conversation you
      // are reading changes the card's contents rather than remounting it
      // (Slack-style), while a ticket and a conversation are two separate
      // cards that stack.
      panelKey={(id) => (isTicket(id) ? "ticket" : "conversation")}
      specFor={leftPaneSpec}
      {...props}
    />
  )
}
