import { F0ChatMessage } from '../types';
/** What the footer under the conversation's last message has to say. */
export type ChatDeliveryState = "sent" | "read" | "failed";
/**
 * The delivery state worth reporting, or `null` when there is nothing to say.
 *
 * Only my own settled messages qualify. An incoming message has no delivery
 * state, and a message still in flight is covered by the sending clock beside
 * its bubble — in both cases the footer would be an empty row the virtualizer
 * still has to measure, so callers use `null` to skip it entirely.
 *
 * In a group, `read` is only reached once every other member appears in the
 * receipt count; short of that it stays at `sent` rather than exposing a
 * partial tally. Reader identities remain available in the Info panel.
 */
export declare const deliveryState: (message: F0ChatMessage, { isGroup, memberCount }?: {
    isGroup?: boolean;
    memberCount?: number;
}) => ChatDeliveryState | null;
