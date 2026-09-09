/**
 * What sits under the composer once you are in a conversation with One
 * (Figma 2745:468340), in place of the suggestion chips: a quiet reminder
 * that One only ever acts with the access you already have.
 *
 * Shared by the canvas prompt bar and the split panel, because the rule
 * is about being IN a conversation, not about which surface you are on
 * (per Oskar, 2026-09-02: "esto aplica a todo").
 *
 * Both halves are `foreground-secondary`; the link is told apart by its
 * UNDERLINE alone, whose colour is the tertiary token, and
 * `decoration-skip-ink: none` so descenders stay crossed as the frame
 * draws them. "See more" is visual-only, like the composer's own gear —
 * there is no permissions doc to point at yet.
 */
export function PermissionsNote() {
  return (
    <div className="flex w-full items-start justify-center gap-1 whitespace-nowrap py-2 text-sm font-medium text-f1-foreground-secondary">
      <p className="overflow-hidden text-ellipsis text-center">
        One works within your permissions.
      </p>
      {/* The colour is repeated on the button ON PURPOSE: a `button` does
          not inherit `color`, so without it the UA default wins and the
          link renders BLACK against the secondary text beside it — the
          same trap the nav panel icons fell into. */}
      <button
        type="button"
        className="shrink-0 cursor-pointer text-f1-foreground-secondary underline decoration-f1-foreground-tertiary [text-decoration-skip-ink:none]"
      >
        See more
      </button>
    </div>
  )
}
