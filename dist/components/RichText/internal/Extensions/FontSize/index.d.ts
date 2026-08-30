import { Extension } from '@tiptap/core';
/**
 * Font sizes (px) the editor renders. 16 is the body size, so text at 16 needs
 * no mark; it is included for completeness when a size is set explicitly.
 *
 * The top two steps match the notes editor's h1 and h2, so a size lifted from a
 * document lands on the same rhythm as its headings.
 */
export declare const FONT_SIZE_SCALE: readonly [12, 14, 16, 18, 20, 24, 29];
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        fontSize: {
            setFontSize: (fontSize: string) => ReturnType;
            unsetFontSize: () => ReturnType;
        };
    }
}
export interface FontSizeOptions {
    types: string[];
}
/**
 * Carries a `fontSize` attribute on the `textStyle` mark.
 *
 * A size on the scale renders as a class, not an inline style, because the
 * sanitizer read-only content passes through allows `class` but not `style`.
 * Sizes off the scale keep the inline style, so an unrecognised value degrades
 * instead of vanishing.
 */
export declare const FontSizeExtension: Extension<FontSizeOptions, any>;
