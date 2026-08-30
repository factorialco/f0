/**
 * Parses markdown content and returns sanitized HTML
 */
export declare function parseMarkdown(content: string): string;
/**
 * Parses a whole markdown DOCUMENT (GFM: tables, strikethrough, task lists)
 * into sanitized block-level HTML — used by the chat's `.md` file preview.
 */
export declare function parseMarkdownDocument(content: string): string;
/**
 * Strips markdown syntax from text to display plain text
 */
export declare function stripMarkdown(text: string): string;
