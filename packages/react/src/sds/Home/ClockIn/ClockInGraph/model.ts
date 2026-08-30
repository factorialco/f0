export type ClockInStatus = "clocked-in" | "break" | "clocked-out"

export type ClockInGraphVariant = "ring" | "horizontal-bar"

export interface ClockInGraphProps {
  trackedMinutes?: number
  data?: {
    from: Date
    to: Date
    variant: ClockInStatus
    /**
     * Context for this stretch of the day, beyond its state — which break or
     * which task. The horizontal bar appends it to the time range on hover;
     * the ring has nowhere to display it and ignores it.
     */
    label?: string
  }[]
  remainingMinutes?: number
  /**
   * `ring` renders the 160px dial with totals and endpoints. `horizontal-bar`
   * renders only the same normalized segments as a full-width 6px rail, leaving
   * surrounding layout such as ClockInControls to carry the labels.
   */
  variant?: ClockInGraphVariant
}

export const CLOCK_IN_COLORS = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))",
}
