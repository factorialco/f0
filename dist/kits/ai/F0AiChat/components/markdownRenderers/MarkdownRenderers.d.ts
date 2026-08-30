import { ComponentType } from 'react';
/**
 * Map of tag name → renderer component, consumed by the markdown rendering
 * layer (factorial / mock runtime pass these through to whatever markdown
 * renderer they pick). Kept as a plain `Record` so f0 stays decoupled from
 * any specific markdown library.
 */
export type MarkdownTagRenderers = Record<string, ComponentType<any>>;
export declare const markdownRenderers: MarkdownTagRenderers;
