import { MentionEntry } from './useMentions';
/**
 * Escape a string for safe embedding inside XML/HTML attributes and text
 * content. Prevents tag injection when building `<entity-ref>` markup.
 */
export declare function escapeXml(str: string): string;
export type HighlightSegment = {
    type: "text" | "mention" | "ghost";
    text: string;
};
/**
 * Split text into plain-text, mention, and ghost (inline-completion) segments
 * so the highlight overlay can render each with distinct styling.
 *
 * When `inlineCompletion` is provided together with `cursorPosition`, a
 * "ghost" segment is inserted at the cursor. This renders the remaining
 * portion of the autocompleted name as semi-transparent placeholder text.
 */
export declare function buildHighlightSegments(text: string, mentions: MentionEntry[], options?: {
    cursorPosition?: number;
    inlineCompletion?: string | null;
}): HighlightSegment[];
