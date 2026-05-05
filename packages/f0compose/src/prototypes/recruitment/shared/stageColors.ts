/**
 * Maps the internal candidate-stage colour (info/positive/warning/critical/
 * neutral, set in fixtures) to the F0TagDot palette so the funnel matches
 * the production screenshot.
 */
export const stageDotColor: Record<
  "info" | "positive" | "warning" | "critical" | "neutral",
  "malibu" | "viridian" | "yellow" | "barbie" | "smoke"
> = {
  info: "malibu",
  positive: "viridian",
  warning: "yellow",
  critical: "barbie",
  neutral: "smoke",
}
