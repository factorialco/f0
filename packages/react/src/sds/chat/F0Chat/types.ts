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

/**
 * A shared (static) location. Rendered as a map preview card that opens the
 * point in Google Maps; the host maps it to its transport's shape (factorial →
 * a Stream custom attachment `{ type: "location", latitude, longitude }`).
 */
export type F0ChatLocationAttachment = {
  kind: "location"
  latitude: number
  longitude: number
  /** Optional place label shown under the map. */
  name?: string
}

/**
 * A voice note: recorded in the composer (mic button) and rendered as an audio
 * player with playback-speed control. factorial → a Stream attachment
 * `{ type: "voice_recording", asset_url, duration }`.
 */
export type F0ChatVoiceAttachment = {
  kind: "voice"
  url: string
  /** Recording length in seconds (shown before playback starts). */
  durationSeconds?: number
  mimeType?: string
  name?: string
}

export type F0ChatAttachment =
  | F0ChatImageAttachment
  | F0ChatFileAttachment
  | F0ChatLocationAttachment
  | F0ChatVoiceAttachment

/**
 * Open Graph preview of a URL in the body (WhatsApp-style card above the text).
 * The host provides scraped metadata — F0 never fetches the URL itself
 * (factorial → Stream's URL enrichment attachments, `og_scrape_url`).
 */
export type F0ChatLinkPreview = {
  /** The link the card opens (the scraped page). */
  url: string
  title?: string
  description?: string
  /** Preview image (Open Graph `og:image`). */
  imageUrl?: string
}

export type F0ChatReaction = {
  emoji: string
  count: number
  reactedByMe: boolean
  users?: F0ChatUser[]
}

/**
 * iMessage-style delivery state — only meaningful for messages I sent.
 * `sending` renders a delayed clock beside the bubble (only if the send takes
 * >500ms, so healthy networks never flash it); `failed` dims the bubble and
 * shows a tappable critical alert whose menu is reduced to Retry / Delete.
 * `delivered` (reached the counterpart's device, not read yet) is for backends
 * that distinguish it — Stream doesn't, so the factorial adapter never emits it
 * and those messages go straight from `sent` to `read`.
 */
export type F0ChatMessageStatus =
  | "sending"
  | "sent"
  | "delivered"
  | "read"
  | "failed"

export type F0ChatMessageReply = {
  id: string
  author: F0ChatUser
  body: string
  /** Attachments of the quoted message (preview thumbnail / file name). */
  attachments?: F0ChatAttachment[]
}

export type F0ChatMessage = {
  /**
   * Discriminant against {@link F0ChatSystemMessage}. Optional — an absent
   * `type` means "message", so existing literals keep compiling.
   */
  type?: "message"
  id: string
  author: F0ChatUser
  body: string
  /** ISO timestamp. */
  createdAt: string
  isMine: boolean
  status?: F0ChatMessageStatus
  /**
   * Why the send failed (host-provided, human-readable — e.g. "Message too
   * long"). Shown alongside the failed indicator's tooltip so the user knows
   * whether a retry can help. Only meaningful with `status: "failed"`.
   */
  failureReason?: string
  /**
   * When the message was read (DM read receipt), ISO. Approximated from the
   * counterpart's per-channel last-read pointer — Stream has no per-message
   * read time — so it's "read at or before this", not an exact per-message stamp.
   */
  readAt?: string
  reactions?: F0ChatReaction[]
  attachments?: F0ChatAttachment[]
  /**
   * Preview cards for the URLs in the body (host-scraped metadata only; when
   * omitted, links render as plain auto-linked text). A single preview shows a
   * full card with its image; several stack as compact title/host rows
   * (Slack-style unfurls).
   */
  linkPreviews?: F0ChatLinkPreview[]
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
  /**
   * When the message text was last edited (ISO). Presence drives the muted
   * "edited" label after the body (WhatsApp-style). factorial → Stream's
   * `message_text_updated_at`, which is set only on a text edit (not on
   * reactions/read updates), so it never false-positives the label.
   */
  editedAt?: string
}

/**
 * Membership / lifecycle events rendered as a centered system row. Closed
 * union — the host maps unknown transport event kinds to a body-only system
 * message (the plain-text fallback). Room to grow: "channel.renamed", ….
 */
export type F0ChatSystemEvent =
  | "member.added"
  | "member.removed"
  | "member.left"

/** Structured system payload → rendered as a sentence with inline person tags. */
export type F0ChatSystemPayload = {
  event: F0ChatSystemEvent
  /**
   * The people the event is about. One message can carry several — the host /
   * adapter coalesces bursts into one item (Slack-style "Ana, Luis and 2
   * more") by REPLACING the previous item with an updated `members` array
   * (same id); coalescing never happens in the view layer.
   */
  members: F0ChatUser[]
  /** How many more people beyond `members` (host truncation) — added to the
   * "+N" overflow tag on top of the visual max. */
  remainingCount?: number
  /** Who performed the action (the admin who added/removed), when known.
   * Not rendered today; reserved for "added by X" templates. */
  actor?: F0ChatUser
}

/**
 * A transcript item that is ABOUT the conversation, not from a person: no
 * author, no isMine, no reactions/replies/status — by construction. Rendered
 * as a centered row (like the date separator). factorial → a Stream message
 * with `type: "system"`; `system` comes from its custom fields, `body` from
 * its free-form `text`.
 */
export type F0ChatSystemMessage = {
  type: "system"
  id: string
  /** ISO timestamp — participates in day separators and ordering. */
  createdAt: string
  /** Structured payload → avatar-tag sentence. Omit to render `body` as-is. */
  system?: F0ChatSystemPayload
  /** Plain-text fallback (e.g. GetStream's free-form system `text`), shown
   * centered when `system` is absent or the event kind is unknown. */
  body?: string
}

/** Anything that can appear in the transcript, oldest → newest. */
export type F0ChatItem = F0ChatMessage | F0ChatSystemMessage

export const isSystemMessage = (
  item: F0ChatItem
): item is F0ChatSystemMessage => item.type === "system"

export const isUserMessage = (item: F0ChatItem): item is F0ChatMessage =>
  item.type !== "system"

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

/**
 * Edits applied to an existing message. Text, mentions and attachments are all
 * editable; the host maps this to the transport's partial-update (factorial →
 * Stream `partialUpdateMessage`).
 */
export type F0ChatEditInput = {
  body: string
  attachments?: F0ChatAttachment[]
  /** People mentioned in the edited body (groups only). */
  mentions?: F0ChatMention[]
  /** Whether the edited message mentions the whole group (`@here`). */
  mentionedEveryone?: boolean
}

/**
 * Conversation lifecycle as the host reports it. `connecting` (first load)
 * shows the skeleton and `error` the error state (with a Retry button when
 * {@link F0ChatRuntime.reconnect} is provided). `reconnecting` / `offline` are
 * for hosts with a live/cached transport: F0 renders the transcript exactly
 * like `ready` — deliberately NO banner (per-message sending/failed states
 * already communicate connectivity, WhatsApp-style) — falling back to the
 * skeleton only when there are no messages to show yet. Hosts with a simple
 * request/response lifecycle can keep using the original three states.
 */
export type F0ChatStatus =
  | "connecting"
  | "ready"
  | "reconnecting"
  | "offline"
  | "error"

/**
 * Per-channel permissions. Everything is optional and defaults to today's
 * behavior, so hosts only express what their transport restricts (frozen /
 * read-only channels, moderation roles…):
 * - `canSend` (default true): false hides the composer entirely.
 * - `canReact` (default true): false hides the quick-reaction row, the emoji
 *   pickers and disables toggling existing reaction pills.
 * - `canUpload` (default: whether `uploadFiles` exists): false disables the
 *   attach button, drag & drop and voice notes even when `uploadFiles` exists.
 * - `canEditMessage` (default: own message within {@link F0ChatRuntime.editWindowMs}):
 *   overrides the edit policy per message. Structural gates still apply (the
 *   host must provide `editMessage`; deleted messages and voice notes are
 *   never editable).
 * - `canDeleteMessage` (default: own message): overrides the delete policy per
 *   message (e.g. moderators deleting others' messages). Failed local echoes
 *   are always discardable — they don't exist server-side.
 */
export type F0ChatCapabilities = {
  canSend?: boolean
  canReact?: boolean
  canUpload?: boolean
  canEditMessage?: (message: F0ChatMessage) => boolean
  canDeleteMessage?: (message: F0ChatMessage) => boolean
}

/** A message that matched an in-conversation search (room to grow: preview, author…). */
export type F0ChatSearchResult = {
  id: string
}

/**
 * A host-provided header action (the only built-in one is Search). Pin/mute,
 * edit-group, leave… are all expressed through this, so each channel can offer
 * exactly the actions the current user's PERMISSIONS allow — pass different
 * arrays per channel (or the function form of `headerActions`), and `[]` for a
 * channel where the user can do nothing but search.
 */
export type F0ChatHeaderAction = {
  id: string
  /** Already-localized label. For toggles (mute/unmute) the host rebuilds the
   * array per render with the current label — labels are plain strings. */
  label: string
  icon?: IconType
  /** The host decides what happens: call a runtime method (togglePin,
   * toggleMute), open its own modal, navigate… */
  onClick: (channel: F0ChatChannel) => void
  /** Where the action renders: inside the ellipsis overflow menu (default) or
   * as its own icon button next to it. Inline requires `icon` — an inline
   * action without one falls back to the menu. */
  placement?: "menu" | "inline"
  /** Restrict the action to a channel type. Omit for both. */
  channelTypes?: F0ChatChannelType[]
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
  /** Oldest → newest. May interleave system items (membership events). */
  messages: F0ChatItem[]
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
  /**
   * Send a message. F0 fires-and-forgets; the OPTIMISTIC LIFECYCLE is the
   * host's contract (this is what makes any backend feel instant):
   *
   * 1. Generate the message id CLIENT-SIDE and synchronously insert a local
   *    echo into `messages` with `status: "sending"` — the bubble must appear
   *    in the same render, not after the server acks.
   * 2. Reconcile by id: when the server echo arrives, replace the local one
   *    (same id → same bubble, no flicker) and advance `status`.
   * 3. On failure, flip the echo to `status: "failed"` (optionally with
   *    `failureReason`) and keep it in `messages` — F0 renders the retry /
   *    discard affordances.
   * 4. `retryMessage` re-sends with the SAME id so the server can dedupe when
   *    the original send actually landed (timeouts lie on bad networks).
   *
   * factorial → Stream: `channel.state.addMessageSorted` + client-generated
   * UUID + id-idempotent `sendMessage`.
   */
  sendMessage: (input: F0ChatSendInput) => void | Promise<void>
  /**
   * Re-send a message whose `status` is `"failed"`, reusing the SAME message
   * id so the transport can dedupe if the original send actually reached the
   * server (factorial → Stream is idempotent on client-generated message ids).
   * Flips the message back to `"sending"`.
   */
  retryMessage: (id: string) => void | Promise<void>
  loadOlder: () => void
  toggleReaction: (messageId: string, emoji: string) => void | Promise<void>
  /**
   * Delete a message that exists server-side (soft delete → tombstone, or hard
   * delete → removed from `messages`).
   *
   * When `deleteFailedMessage` is not provided this is ALSO called for failed
   * local echoes, and the host must special-case them: discard the local echo
   * only — no server call, the message doesn't exist server-side (factorial →
   * `channel.state.removeMessage`). Prefer providing `deleteFailedMessage` so
   * the two semantics stay explicit.
   */
  deleteMessage: (id: string) => void | Promise<void>
  /**
   * Discard a `"failed"` local echo (never delivered — a purely local
   * operation, no server call). When omitted, F0 falls back to
   * `deleteMessage`, which then must handle the failed case itself.
   */
  deleteFailedMessage?: (id: string) => void | Promise<void>
  /**
   * Edit an existing message (text, mentions, attachments). Omit to disable
   * editing — the "Edit" action then never shows. factorial →
   * `client.partialUpdateMessage`.
   */
  editMessage?: (id: string, input: F0ChatEditInput) => void | Promise<void>
  /**
   * How long after sending a message stays editable (ms). The "Edit" action is
   * hidden once a message is older than this. Omit for no limit (editable
   * anytime). factorial sets a fixed window (e.g. 15 min).
   */
  editWindowMs?: number
  /** Called as the user types so the runtime can emit typing.start/stop. */
  onInputActivity: () => void
  /**
   * Emit typing.stop immediately — the composer calls it on send, when the
   * text is cleared and on unmount, so the counterpart's dots drop the very
   * moment typing actually stopped. Hosts whose transport auto-expires typing
   * (Stream's `keystroke()` does after a few seconds) can omit it and rely on
   * the timeout; transports without auto-expiry need it (factorial →
   * `channel.stopTyping()`).
   */
  stopTyping?: () => void | Promise<void>
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
  /**
   * Mark the conversation read. `untilMessageId` supports partial reads
   * ("read up to this message") for backends that track them; F0 currently
   * always calls it without arguments (read everything), so simple hosts can
   * ignore the parameter.
   */
  markRead?: (untilMessageId?: string) => void | Promise<void>
  /**
   * Per-channel permissions (frozen / read-only channels, moderation…). Omit
   * for the default policy — see {@link F0ChatCapabilities}.
   */
  capabilities?: F0ChatCapabilities
  /**
   * Retry after a load failure — wired to the Retry button in the error state.
   * Omit to render the error message without an action (previous behavior).
   * factorial → re-run `channel.watch()`.
   */
  reconnect?: () => void | Promise<void>
  /**
   * Search the conversation's members for the `@`-mention popover, returning
   * matches for `query` (empty string → the full member list). Provide it
   * wherever mentions should work — DMs (both people) and groups alike; omit it
   * to disable mentions for the conversation. The `@here` everyone option is a
   * group-only concept and is gated separately by the composer.
   * factorial → `channel.state.members`.
   */
  searchMembers?: (query: string) => Promise<F0ChatUser[]>
  /**
   * Toggle the conversation's pinned (favourite) state for the current user.
   * Transport capability only — the header no longer auto-renders a Pin
   * action; the host surfaces one via {@link F0ChatHeaderAction} (`onClick:
   * () => runtime.togglePin()`) where its permissions allow. factorial →
   * `channel.pin()` / `channel.unpin()`.
   */
  togglePin?: () => void | Promise<void>
  /**
   * Toggle the conversation's muted state for the current user. Transport
   * capability only — the header no longer auto-renders a Mute action; the
   * host surfaces one via {@link F0ChatHeaderAction} (the header still shows
   * the `channel.muted` status icon either way). factorial →
   * `channel.mute()` / `channel.unmute()`.
   */
  toggleMute?: () => void | Promise<void>
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
