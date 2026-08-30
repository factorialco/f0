export declare function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>): import("react").JSX.Element;
/**
 * Renders both inline `<code>` spans and block code (children of `<pre>`).
 *
 * - Inline (default): subtle pill with the secondary background, monospace
 *   font, slightly smaller. Looks like the standard "inline code" tag.
 * - Block (descendant of `<pre>`): the parent `<pre>` already provides the
 *   background, padding and rounding, so the inner `<code>` resets its own
 *   bg/padding/rounding to avoid a doubled-up rounded box, and inherits the
 *   parent's font sizing. The `[pre_&]:` Tailwind variant scopes these
 *   resets to `<code>` elements that are descendants of a `<pre>`.
 */
export declare function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>): import("react").JSX.Element;
export declare function Blockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>): import("react").JSX.Element;
export declare function Hr({ ...props }: React.HTMLAttributes<HTMLHRElement>): import("react").JSX.Element;
