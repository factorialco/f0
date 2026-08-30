import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/**
 * The per-message time, WhatsApp-style. Three placements, one label:
 *
 * - `bubble` sits at the very END of the message: tucked onto the last line
 *   when there's room, dropped onto a line of its own when there isn't.
 * - `overlay` floats it over media that has nothing below, on a bottom scrim.
 * - `below` is the fallback for surfaces with no room (a voice card is a fixed
 *   58px strip whose right slot already holds duration ↔ speed) and for file
 *   chips, whose markup we don't own.
 *
 * `edited` joins the same cluster instead of trailing the body on its own —
 * again what WhatsApp does, and it keeps a single meta group per message.
 *
 * One type scale across all three (`text-xs`): the clock reads as the same
 * piece of information wherever it lands, and a message with a photo above its
 * caption showed two different sizes of the same time.
 *
 * Nothing renders on an announcement channel: those posts carry a SYNTHETIC
 * timestamp (they're seeded client-side, not sent), so a per-message minute
 * would be an invented precision. The day separator still carries the time.
 *
 * Always `aria-hidden`: the transcript has exactly one live region (the
 * delivery-status footer), and N announced clocks would make it unusable with a
 * screen reader. Callers that own the reading order pair this with a `sr-only`
 * copy AFTER the body — see `ChatMessageMetaLabel`.
 */
export declare const ChatMessageMeta: ({ message, placement, }: {
    message: F0ChatMessage;
    placement: "bubble" | "overlay" | "below";
}) => ReactNode;
/** The same text, for assistive technology, placed in reading order. */
export declare const ChatMessageMetaLabel: ({ message, }: {
    message: F0ChatMessage;
}) => ReactNode;
