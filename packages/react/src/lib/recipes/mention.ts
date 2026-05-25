/**
 * Visual recipe for the "mention" pattern.
 *
 * A "mention" is an inline chip (subtle gray background, small horizontal
 * padding, medium font weight) that signals a reference to an entity inside
 * running text — a person, a team, a project, etc.
 *
 * It is **not a component**. It is a reusable set of Tailwind classes that
 * different surfaces can apply to whatever element they need to style as a
 * mention. This guarantees a single source of truth for the visual treatment
 * across the design system.
 *
 * ## Where this recipe is used
 *
 * - **`F0Link variant="mention"`** — the public component to render a mention
 *   in any React tree. Prefer this whenever you can mount a React component.
 * - **Tiptap-based editors** (RichText, NotesTextEditor) — the Mention
 *   extension serializes mention nodes to plain HTML (`<a class="...">`) and
 *   needs to apply the same classes without going through React.
 * - **Other rich-text or HTML surfaces** (e.g. notification renderers, AI
 *   chat chips) that produce HTML strings rather than React trees.
 *
 * ## Why a recipe and not just a component variant
 *
 * The mention treatment must be reproducible in two execution models:
 *
 * 1. **React render tree** (most cases): consumers can mount `<F0Link
 *    variant="mention">` and the variant takes care of everything.
 * 2. **Serialized HTML output** (Tiptap, server-rendered chat messages, …):
 *    consumers cannot mount React; they emit raw `<a>` / `<span>` strings.
 *    The recipe gives them the exact same Tailwind classes to apply.
 *
 * If we kept the styles only inside `Action`'s CVA, surfaces in case (2)
 * would have to re-implement the visual treatment by hand and the design
 * would silently drift. The recipe prevents that.
 *
 * ## When to use the recipe directly vs. `F0Link`
 *
 * - **Use `F0Link variant="mention"`** whenever you can render React.
 * - **Use the recipe** only when you must produce raw HTML (Tiptap
 *   `HTMLAttributes`, dangerouslySetInnerHTML payloads, …). Always keep the
 *   mention semantically a link (`<a href>`) so screen readers and keyboard
 *   navigation work.
 *
 * ## The two exports
 *
 * - {@link mentionClasses} — paint-only classes (bg, padding, font, color,
 *   radius) **plus** a hover affordance. Use it from F0 components like
 *   `F0Link` that already handle focus through `focusRing()`.
 * - {@link mentionFocusableClasses} — same as `mentionClasses` plus
 *   accessible focus styles. Use it for raw HTML elements that live outside
 *   of any F0 component (Tiptap, …) and need their own focus ring.
 */
export const mentionClasses =
  "bg-f1-background-secondary hover:bg-f1-background-secondary-hover !px-1.5 font-medium text-f1-foreground rounded-xs no-underline transition-colors"

export const mentionFocusableClasses = `${mentionClasses} focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold`
