import { type AvatarVariant } from "@/components/avatars/F0Avatar"
import { type IconType } from "@/components/F0Icon"
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

/**
 * A person mentioned in a message. `id` matches an {@link F0ChatUser.id}; `name`
 * is the display name as it appears in the body (e.g. "Ana García"), used to
 * locate and highlight the `@name` token. "Everyone" (`@here`) is tracked
 * separately via `mentionedEveryone`, not as an entry here.
 */
export type F0ChatMention = {
  id: string
  name: string
  /** Optional display data so the `@name` chip can show the same profile hover
   * card as the avatar (avatar, role line, "View profile" link). Omit for a
   * name-only card. */
  avatar?: AvatarVariant
  subtitle?: string
  profileHref?: string
}

/** A status badge shown in the header next to the title (e.g. on vacation, away).
 * The host decides the icon + label; the UI just renders it like the mute icon. */
export type F0ChatChannelStatus = {
  icon: IconType
  label: string
}

/** The conversation currently shown in the panel (header + behaviour differs by type). */
export type F0ChatChannel = {
  id: string
  type: F0ChatChannelType
  title: string
  avatar: AvatarVariant
  /** DM only — the other person's presence. */
  presence?: "online" | "offline"
  muted?: boolean
  /**
   * Whether the conversation is pinned (favourited) by the current user. Drives
   * the header pin toggle and lets the host surface a "Pinned" group in the
   * sidebar. factorial → Stream's per-member pin (`member.pinned_at`).
   */
  pinned?: boolean
  /**
   * Extra status badges shown in the header (e.g. on vacation). Host-provided
   * metadata — not necessarily transport-backed: Stream has no such concept, so
   * factorial sources these from its own data (e.g. HR vacation status).
   */
  statuses?: F0ChatChannelStatus[]
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
  /**
   * When the message was read (DM read receipt), ISO. Approximated from the
   * counterpart's per-channel last-read pointer — Stream has no per-message
   * read time — so it's "read at or before this", not an exact per-message stamp.
   */
  readAt?: string
  reactions?: F0ChatReaction[]
  attachments?: F0ChatAttachment[]
  replyTo?: F0ChatMessageReply
  /**
   * People mentioned in this message (groups only). Drives the `@name` chip
   * highlighting in the bubble; a chip whose id is the current user gets the
   * self-mention emphasis.
   */
  mentions?: F0ChatMention[]
  /**
   * Whether this message mentions the whole group (`@here`). Renders the
   * `@here` token with the self-mention emphasis for every member.
   */
  mentionedEveryone?: boolean
  /**
   * Group read receipts — how many other members have read this message.
   * Approximated by counting members whose last-read pointer is at/after this
   * message (Stream exposes no per-message reader list).
   */
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
  /** People mentioned in the body (groups only). The host maps these to the
   * transport's mention field (factorial → Stream `mentioned_users`). */
  mentions?: F0ChatMention[]
  /** Whether the message mentions the whole group (`@here`). The host fans this
   * out to every member so they all get notified. */
  mentionedEveryone?: boolean
}

export type F0ChatStatus = "connecting" | "ready" | "error"

/** A message that matched an in-conversation search (room to grow: preview, author…). */
export type F0ChatSearchResult = {
  id: string
}

/** Sentinel for {@link F0ChatRuntime.loadMessageContext} meaning "the live tail". */
export const LATEST = "latest" as const

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
  /**
   * Whether there are newer messages than the loaded window — true after jumping
   * to an old message (e.g. a search hit), so the transcript isn't anchored to
   * the live tail. Omit (→ false) when the newest messages are always loaded.
   * factorial → `channel.state.messagePagination.hasNext`.
   */
  hasMoreNewer?: boolean
  loadingNewer?: boolean
  /** Load the next page of newer messages (mirror of `loadOlder`). */
  loadNewer?: () => void
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
  /**
   * Max files attachable at once. When a selection/drop would exceed it, the
   * composer rejects the whole batch and flashes a transient error in the
   * textarea (mirrors the AI chat). Omit for no limit.
   */
  maxFiles?: number
  /**
   * Optional voice dictation — same signature as the AI chat (streams partials).
   * Not part of the Stream transport; a host wires it to its own speech service
   * (the Stream adapter omits it, so the mic button stays hidden there).
   */
  transcribe?: TranscribeFn
  markRead?: () => void
  /**
   * Search the conversation's members for the `@`-mention popover, returning
   * matches for `query` (empty string → the full member list). Provide it only
   * for **group** conversations — in a DM the composer suppresses mentions
   * entirely, so omitting it (or returning the lone counterpart) is fine.
   * factorial → `channel.state.members`.
   */
  searchMembers?: (query: string) => Promise<F0ChatUser[]>
  /**
   * Toggle the conversation's pinned (favourite) state for the current user.
   * Drives the header "Pin / Unpin" action; omit to hide it. factorial →
   * `channel.pin()` / `channel.unpin()`.
   */
  togglePin?: () => void
  /**
   * Full-text search within this conversation, returning matches oldest→newest.
   * Omit to fall back to a client-side substring search over the loaded
   * `messages`. factorial → `channel.search`.
   */
  searchMessages?: (query: string) => Promise<F0ChatSearchResult[]>
  /**
   * Ensure a message is in `messages` so the UI can jump to it: pass a message
   * id (e.g. a search hit outside the loaded window) to load it + its context,
   * or {@link LATEST} to return to the live tail. After it resolves, `messages`
   * (and `hasMoreNewer`) reflect the new window. factorial →
   * `channel.state.loadMessageIntoState(id | "latest")`.
   */
  loadMessageContext?: (idOrLatest: string) => Promise<void>
}
