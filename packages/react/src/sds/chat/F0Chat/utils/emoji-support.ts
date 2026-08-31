import { fontFamily } from "@factorialco/f0-core"

/**
 * Which emoji this platform can actually draw.
 *
 * Rendering the system glyph means inheriting the system's vintage: an emoji
 * newer than the installed font shows up as a tofu box, or — worse, because it
 * looks deliberate — decomposes into its parts (Emoji 13.1's "face with spiral
 * eyes" renders as "dizzy face" + "shooting star" on a platform that stops at
 * 13.0). Neither belongs in a picker.
 *
 * Probing 1,870 emoji would be absurd. Support arrives per **Emoji release**,
 * and the dataset tags every emoji with the release that introduced it, so one
 * representative per release settles the whole set — twelve canvas draws, once.
 */

/** The Emoji releases present in the dataset, ascending. */
const PROBES: { version: number; emoji: string }[] = [
  { version: 1, emoji: "😀" }, // grinning
  { version: 2, emoji: "🗨️" }, // left speech bubble — v2's only non-flag plain glyph
  { version: 3, emoji: "🤣" }, // rolling on the floor laughing
  { version: 4, emoji: "👱‍♀️" }, // blond-haired woman
  { version: 5, emoji: "🤩" }, // star-struck
  { version: 11, emoji: "🥰" }, // smiling face with hearts
  { version: 12, emoji: "🥱" }, // yawning face
  { version: 12.1, emoji: "🧑‍🦰" }, // red-haired person
  { version: 13, emoji: "🥲" }, // smiling face with tear
  { version: 13.1, emoji: "😵‍💫" }, // face with spiral eyes
  { version: 14, emoji: "🫠" }, // melting face
  { version: 15, emoji: "🫨" }, // shaking face
]

/** Highest release in {@link PROBES} — also the "show everything" answer. */
export const MAX_EMOJI_VERSION = PROBES[PROBES.length - 1].version

/**
 * Deliberately never assigned, so every font draws its notdef box for it. Gives
 * us a picture of what "unsupported" looks like on *this* machine, which is the
 * only reliable way to recognise it.
 */
const NOTDEF = "￿"

/** The probe must measure with the same stack the picker paints with, or it
 * answers a question nobody asked. */
const PROBE_FONT = `32px ${fontFamily.emoji.join(",")}`
const CANVAS_SIZE = 36

/** A decomposed sequence lands side by side, so it runs far wider than one
 * glyph. Half a glyph of slack absorbs the ordinary width spread between fonts
 * without letting a two-glyph render through. */
const SINGLE_GLYPH_WIDTH_TOLERANCE = 1.5

type Probe = {
  context: CanvasRenderingContext2D
  singleGlyphWidth: number
  notdefPixels: Uint8ClampedArray
}

const draw = (
  context: CanvasRenderingContext2D,
  text: string
): Uint8ClampedArray => {
  context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
  context.fillText(text, 0, 0)
  return context.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE).data
}

const isBlank = (pixels: Uint8ClampedArray): boolean => {
  // Alpha channel only — a glyph that drew anything at all has a non-zero one.
  for (let i = 3; i < pixels.length; i += 4) {
    if (pixels[i] !== 0) return false
  }
  return true
}

const looksIdentical = (
  a: Uint8ClampedArray,
  b: Uint8ClampedArray
): boolean => {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false
  }
  return true
}

const createProbe = (): Probe | null => {
  if (typeof document === "undefined") return null

  try {
    const canvas = document.createElement("canvas")
    canvas.width = CANVAS_SIZE
    canvas.height = CANVAS_SIZE
    // Everything from here is inside the try, `getContext` included: jsdom
    // without the canvas package doesn't return null, it throws — and this
    // running during render meant an environment with no canvas took the whole
    // picker down rather than falling back to showing every emoji.
    const context = canvas.getContext("2d", { willReadFrequently: true })
    if (!context) return null

    context.font = PROBE_FONT
    context.textBaseline = "top"

    const notdefPixels = draw(context, NOTDEF)
    const singleGlyphWidth = context.measureText(PROBES[0].emoji).width
    // If the oldest emoji in existence doesn't render, the canvas isn't telling
    // us about fonts — it's telling us it can't be trusted.
    if (singleGlyphWidth === 0 || isBlank(draw(context, PROBES[0].emoji))) {
      return null
    }
    return { context, singleGlyphWidth, notdefPixels }
  } catch {
    return null
  }
}

const canDraw = (probe: Probe, emoji: string): boolean => {
  const pixels = draw(probe.context, emoji)
  if (isBlank(pixels)) return false
  if (looksIdentical(pixels, probe.notdefPixels)) return false
  return (
    probe.context.measureText(emoji).width <=
    probe.singleGlyphWidth * SINGLE_GLYPH_WIDTH_TOLERANCE
  )
}

let cached: number | null = null

/**
 * The highest Emoji release this platform draws, for filtering the picker.
 *
 * Resolved once and memoized. **Fails open**: with no canvas (SSR, jsdom, a
 * sandboxed frame) or an untrustworthy one it returns
 * {@link MAX_EMOJI_VERSION}, so a broken probe never hides emoji that in fact
 * render fine.
 */
export const detectMaxEmojiVersion = (): number => {
  if (cached !== null) return cached

  const probe = createProbe()
  if (!probe) {
    cached = MAX_EMOJI_VERSION
    return cached
  }

  // Support is cumulative: stop at the first release that fails rather than
  // reporting the highest that happens to pass.
  let supported = PROBES[0].version
  for (const { version, emoji } of PROBES) {
    if (!canDraw(probe, emoji)) break
    supported = version
  }

  cached = supported
  return cached
}

/** Test seam — the memo would otherwise outlive a stubbed canvas. */
export const resetEmojiSupportCache = (): void => {
  cached = null
}
