import { F0ChatPermission } from '../utils/capabilities';
/**
 * Resolve one permission for the current channel — see `chatPermission`.
 *
 * Reads the STABLE context, so calling it from a transcript row costs nothing:
 * the value only changes when the conversation or its capabilities do, not on
 * every transport event.
 */
export declare const useChatPermission: (permission: F0ChatPermission) => boolean;
