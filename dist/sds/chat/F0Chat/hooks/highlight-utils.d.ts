import { MentionEntry } from './useMentions';
/** Same tone classification the bubble uses, so the in-composer highlight
 * matches: a mention of you / `@here` is amber, anyone else is info. */
export type MentionTone = "self" | "everyone" | "other";
export type HighlightSegment = {
    type: "text" | "mention" | "ghost";
    text: string;
    /** Only set on `mention` segments — drives the chip colour. */
    tone?: MentionTone;
};
/**
 * Split composer text into plain-text, mention, and ghost (inline-completion)
 * segments so the highlight overlay can render each with distinct styling.
 * Cloned from the AI chat composer so the two behave identically.
 *
 * When `inlineCompletion` is provided together with `cursorPosition`, a "ghost"
 * segment is inserted at the cursor — the remaining portion of the
 * autocompleted name, rendered as semi-transparent placeholder text.
 */
export declare function buildHighlightSegments(text: string, mentions: MentionEntry[], options?: {
    cursorPosition?: number;
    inlineCompletion?: string | null;
    /** Viewer id — a mention of it is toned `self` (amber), like the bubble. */
    currentUserId?: string;
}): HighlightSegment[];
