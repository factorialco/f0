import { type F0ChatCapabilities, type F0ChatChannelType } from "../types"

/**
 * The boolean permissions — the ones with a single answer per channel. The two
 * per-message predicates (`canEditMessage` / `canDeleteMessage`) resolve where
 * they're used, since they need the message itself.
 */
export type F0ChatPermission = Extract<
  keyof F0ChatCapabilities,
  "canSend" | "canReply" | "canReact" | "canUpload" | "canCopy" | "canViewInfo"
>

/**
 * Whether the current user may do `permission` in this channel.
 *
 * The single place that resolves a permission, so the defaults live in one
 * readable ladder instead of four `capabilities?.x !== false` scattered through
 * the components — which is how `canReply` came to have no gate at all and
 * Reply ended up focusing a composer that isn't mounted.
 *
 * Takes the channel TYPE rather than the channel: per-message components read
 * the stable context, which deliberately carries only the slow-moving slice.
 */
export const chatPermission = (
  permission: F0ChatPermission,
  channelType: F0ChatChannelType,
  capabilities: F0ChatCapabilities | undefined
): boolean => {
  const explicit = capabilities?.[permission]
  // The host always wins: an admin of the noticeboard does post there.
  if (explicit !== undefined) return explicit
  // An announcement channel is one-way by construction, so it inverts every
  // default at once — a read-only noticeboard needs no configuration.
  if (channelType === "announcement") return false
  // A community is a feed you READ; writing in it is a privilege the host
  // grants (`{ canSend: true }`), like the noticeboard's poster. But unlike a
  // noticeboard, reacting is what everyone came for — so only the WRITING verb
  // inverts, not all of them. `canReply` follows on its own a few lines below.
  //
  // Deliberately not a `canPost` verb of its own: `canSend` already means "you
  // may write here", and in a community what you write is a post. A new verb
  // whose default is another verb is exactly the drift this ladder exists to
  // prevent.
  if (channelType === "community" && permission === "canSend") return false
  // Replying needs a composer to reply into.
  if (permission === "canReply") {
    return chatPermission("canSend", channelType, capabilities)
  }
  return true
}
