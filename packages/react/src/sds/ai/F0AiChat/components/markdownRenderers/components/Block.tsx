import { cn } from "@/lib/utils"

export function Pre({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      {...props}
      className={cn(
        "relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        props.className
      )}
    >
      {children}
    </pre>
  )
}

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
export function Code({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      {...props}
      className={cn(
        // Inline default
        "rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground",
        // Reset inside <pre> — let the parent handle the surface
        "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base",
        props.className
      )}
    >
      {children}
    </code>
  )
}

export function Blockquote({
  children,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      {...props}
      className={cn(
        "m-0 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-4 text-base",
        props.className
      )}
    >
      {children}
    </blockquote>
  )
}

export function Hr({ ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      {...props}
      className={cn("my-3 border-0 border-t border-f1-border", props.className)}
    />
  )
}
