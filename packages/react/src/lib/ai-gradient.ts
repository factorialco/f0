/**
 * The One brand gradient — Factorial's AI ramp (orange → periwinkle → red).
 *
 * Consumed by `F0AiText`, the chat composer glow (`F0AiChatTextArea`), the
 * rich-text Enhance menu and the Pong paddles. Import it instead of retyping
 * the stops: the ramp was duplicated across a dozen files and had already
 * started to drift.
 *
 * It deliberately lives here rather than in `lib/recipes/`: recipes must be
 * token-first, and this ramp is fixed brand paint that does not participate in
 * the themeable `f1-*` palette — it renders identically in light and dark.
 */
export const aiGradientStops = ["#E55619", "#A1ADE5", "#E51943"] as const

/**
 * Just the colour stops, with no gradient direction. Pair it with whichever
 * gradient utility the surface needs (`bg-gradient-to-r`, or an arbitrary
 * `conic-gradient(…, var(--tw-gradient-stops))`).
 */
export const aiGradientStopClasses = "from-[#E55619] via-[#A1ADE5] to-[#E51943]"

/**
 * The ramp painted onto the glyphs themselves — a left-to-right gradient
 * clipped to the text. Prefer the `F0AiText` component whenever React can be
 * mounted; reach for the classes directly only from a surface that cannot.
 */
export const aiGradientTextClasses = `bg-gradient-to-r ${aiGradientStopClasses} bg-clip-text text-transparent`
