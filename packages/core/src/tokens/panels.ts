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
   * The narrowest main content worth showing beside a panel. Matches the `xs`
   * screen token the frame already uses to decide when its own seams stop
   * being worth drawing, rounded up to fit a data table's header actions.
   */
  mainMin: 560,
}
