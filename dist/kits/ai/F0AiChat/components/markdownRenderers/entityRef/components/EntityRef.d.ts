import { ReactNode } from 'react';
/**
 * Extract plain text from a ReactNode tree.
 * Handles strings, numbers, arrays, and fragments.
 */
export declare function extractText(node: ReactNode): string;
/**
 * Generic entity reference renderer for custom `<entity-ref>` HTML tags
 * embedded in AI chat markdown output.
 *
 * Dispatches to type-specific renderers via the entity ref registry.
 * Falls back to rendering children as plain text for unknown types.
 *
 * Usage in markdown (via rehype-raw):
 *   <entity-ref type="person" id="123">Ana García</entity-ref>
 */
export declare function EntityRef({ type, id, children, }: {
    type?: string;
    id?: string;
    children?: ReactNode;
}): import("react").JSX.Element;
