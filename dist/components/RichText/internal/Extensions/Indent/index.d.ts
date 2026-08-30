import { Extension } from '@tiptap/core';
/**
 * Deepest level the CSS styles. A document may carry more (stored untouched);
 * only the class caps here.
 */
export declare const INDENT_MAX_LEVEL = 8;
export declare const INDENT_STEP_PX = 24;
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        indent: {
            setIndent: (level: number) => ReturnType;
            unsetIndent: () => ReturnType;
            outdent: () => ReturnType;
        };
    }
}
export interface IndentOptions {
    types: string[];
}
/**
 * Carries an `indent` attribute (1..n) on paragraphs and headings, so content
 * imported from a document keeps its depth and survives editing.
 *
 * Only removal is bound to the keyboard: an import infers depth from page
 * geometry and can get it wrong. Adding depth is not, because that would
 * compete with list nesting for Tab.
 *
 * A level renders as a class rather than only an inline style, because the
 * sanitizer read-only content passes through allows `class` but not `style`.
 * The style is still emitted, for renderers outside F0.
 */
export declare const IndentExtension: Extension<IndentOptions, any>;
