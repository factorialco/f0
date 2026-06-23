import { type AvatarVariant } from "@/components/avatars/F0Avatar"
import { type TranscribeFn } from "@/sds/ai/F0AiChat/types"

/** A participant in a conversation. */
export type F0ChatUser = {
  id: string
  name: string
  avatar?: AvatarVariant
  /** Secondary line for the hover card (e.g. job title). */
  subtitle?: string
  /** Link to the person's profile, shown as "View profile" in the hover card. */
  profileHref?: string
}

export type F0ChatChannelType = "dm" | "group"

/** The conversation currently shown in the panel (header + behaviour differs by type). */
export type F0ChatChannel = {
  id: string
  type: F0ChatChannelType
  title: string
  avatar: AvatarVariant
  /** DM only — the other person's presence. */
  presence?: "online" | "offline"
  muted?: boolean
  /** Group only. */
  memberCount?: number
  /** DM only — the counterpart, used for the header identity hover card. */
  user?: F0ChatUser
}

export type F0ChatImageAttachment = {
  kind: "image"
  url: string
  thumbnailUrl?: string
  name: string
  mimeType?: string
  width?: number
  height?: number
}

export type F0ChatFileAttachment = {
  kind: "file"
  url: string
  name: string
  size?: number
  mimeType?: string
  /** 0–100 while uploading; undefined once done. */
  progress?: number
}

export type F0ChatAttachment = F0ChatImageAttachment | F0ChatFileAttachment

export type F0ChatReaction = {
  emoji: string
  count: number
  reactedByMe: boolean
  users?: F0ChatUser[]
}

/** A person who has read a message, for the message-info reader list. */
export type F0ChatReader = {
  user: F0ChatUser
  /** When they read it (ISO). */
  readAt?: string
}

/** A page of readers — cursor-based so a message read by hundreds paginates. */
export type F0ChatReadersPage = {
  readers: F0ChatReader[]
  /** Opaque cursor for the next page, or null when exhausted. */
  nextCursor: string | null
  /** Total number of readers (drives the "Read by N" count). */
  total: number
}

/** iMessage-style delivery state — only meaningful for messages I sent. */
export type F0ChatMessageStatus = "sending" | "sent" | "read" | "failed"

export type F0ChatMessageReply = {
  id: string
  author: F0ChatUser
  body: string
  /** Attachments of the quoted message (preview thumbnail / file name). */
  attachments?: F0ChatAttachment[]
}

export type F0ChatMessage = {
  id: string
  author: F0ChatUser
  body: string
  /** ISO timestamp. */
  createdAt: string
  isMine: boolean
  status?: F0ChatMessageStatus
  /** When the message was read (DM read receipt), ISO. */
  readAt?: string
  reactions?: F0ChatReaction[]
  attachments?: F0ChatAttachment[]
  replyTo?: F0ChatMessageReply
  /** Group read receipts. */
  readByCount?: number
  /**
   * Soft-deleted tombstone — render an italic "[Message deleted]" placeholder
   * instead of the body (Stream keeps these when a message is deleted after the
   * unsend window). Hard-deleted messages are removed from `messages` entirely.
   */
  deleted?: boolean
}

export type F0ChatSendInput = {
  body: string
  attachments?: F0ChatAttachment[]
  replyToId?: string
}

export type F0ChatStatus = "connecting" | "ready" | "error"

/**
 * The data + actions a host provides to drive the chat UI. F0 is headless: it
 * never touches the transport (GetStream, websockets, …). A mock runtime powers
 * Storybook; factorial implements this against GetStream after the bump.
 */
export type F0ChatRuntime = {
  currentUserId: string
  channel: F0ChatChannel
  status: F0ChatStatus
  /** Oldest → newest. */
  messages: F0ChatMessage[]
  /** Users currently typing (excluding me). */
  typingUsers: F0ChatUser[]
  hasMoreOlder: boolean
  loadingOlder: boolean
  /** Count of incoming messages below the user's last-read position. */
  unreadCount: number
  /** Id of the first unread message — where the "new messages" divider goes. */
  firstUnreadId: string | null
  sendMessage: (input: F0ChatSendInput) => void
  retryMessage: (id: string) => void
  loadOlder: () => void
  toggleReaction: (messageId: string, emoji: string) => void
  deleteMessage: (id: string) => void
  /** Called as the user types so the runtime can emit typing.start/stop. */
  onInputActivity: () => void
  uploadFiles?: (files: File[]) => Promise<F0ChatAttachment[]>
  /** Voice dictation — same signature as the AI chat (streams partials). */
  transcribe?: TranscribeFn
  markRead?: () => void
  /**
   * Fetch the next page of people who have read a message, for the info panel.
   * Cursor-based + infinite scroll. The page size is owned by the runtime/host
   * (not the UI), so it isn't passed in.
   */
  getMessageReaders?: (
    messageId: string,
    opts: { cursor?: string | null }
  ) => Promise<F0ChatReadersPage>
}
