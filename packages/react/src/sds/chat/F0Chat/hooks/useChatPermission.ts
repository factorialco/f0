import { useF0ChatStable } from "../providers/F0ChatProvider"
import { chatPermission, type F0ChatPermission } from "../utils/capabilities"

/**
 * Resolve one permission for the current channel — see `chatPermission`.
 *
 * Reads the STABLE context, so calling it from a transcript row costs nothing:
 * the value only changes when the conversation or its capabilities do, not on
 * every transport event.
 */
export const useChatPermission = (permission: F0ChatPermission): boolean => {
  const { channelType, capabilities } = useF0ChatStable()
  return chatPermission(permission, channelType, capabilities)
}
