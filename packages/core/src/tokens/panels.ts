/**
 * Widths for the application frame's side panel — the slot the AI chat, hosted
 * conversations and the meeting panel all take turns occupying.
 *
 * These lived as private constants in three places (the chat kit, its
 * localStorage validator, and the meeting window) that were manually kept in
 * step. They are one token now because changing one copy silently invalidated
 * values persisted against another.
 */
export const panelWidths = {
  min: 300,
  max: 712,
  default: 360,
  /**
   * How much room the main content keeps before the panel takes any — the
   * split the frame arrives at on its own.
   *
   * The panel is the guest here. Product surfaces are dense — filters, table
   * headers, bulk actions — and they degrade far worse in a narrow column than
   * a chat does, so the content is served first and the panel gets what is
   * left, down to its own `min`.
   *
   * This is what the layout CHOOSES, not a hard limit: an explicit drag may
   * cross it, down to `mainHardMin`. See `mainHardMin` and `splitMinFrame`.
   */
  mainMin: 640,
  /**
   * The floor a deliberate drag may not cross.
   *
   * `mainMin` decides the default; this decides how far the user is allowed to
   * overrule it. Someone who drags the panel wider on a narrow window has said
   * what they want and should get it — but not to the point where the content
   * behind stops being a usable page.
   */
  mainHardMin: 400,
  /**
   * Below this the panel covers the frame instead of splitting it.
   *
   * Independent of `mainMin` on purpose. Deriving it as `mainMin + min` tied
   * two unrelated questions together — "how much room does the content want"
   * and "when is splitting no longer worth it" — so making the content more
   * comfortable on a laptop also stopped a half-screen window from splitting
   * at all. They move separately now.
   *
   * 700 leaves at least 350 a side, which is the narrowest split that still
   * reads as two columns rather than two slivers.
   */
  splitMinFrame: 700,
}
