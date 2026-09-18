import { type ImageIntrinsicSize } from "./image-size"

/**
 * Which shape a link preview's Open Graph image gets.
 *
 * One rule used to do it all — a 160px-tall, full-width, centre-cropped strip —
 * which flatters a 1200×630 banner and destroys everything else: a vertical
 * screenshot showed a band from its middle, a 128px site logo was blown up into
 * a blur. So the image picks the shape that suits it: landscape images keep
 * their own proportions across the top of the card, and everything else becomes
 * a thumbnail beside the text rather than pretending to be a banner.
 */

/** Width ÷ height from which an image reads as a banner. 1200×630 (1.91), 16:9
 * and 3:2 clear it; 4:3, square and taller do not. */
export const BANNER_MIN_RATIO = 1.5

/** A landscape image narrower than this is a thumbnail: stretching a 200px
 * strip across the card only makes it blurry. */
export const BANNER_MIN_WIDTH = 320

/** Nothing about a link is worth half a screen of picture. At the card's 384px
 * this only bites below 1.6, which is already thumbnail territory — it is a
 * backstop for an unusually wide card, and it letterboxes rather than crops. */
export const BANNER_MAX_HEIGHT = 240

/** Reserved while the image is still being measured. The Open Graph standard
 * size is 1200×630, so the common case lands on its final height immediately. */
export const OG_DEFAULT_RATIO = 1.91

/** Side thumbnail, matching the chat's existing one (ReplyQuote, reply chips). */
export const THUMB_SIZE = 64

export type LinkPreviewImageLayout =
  | { kind: "banner"; aspectRatio: number }
  | { kind: "thumb" }
  | { kind: "none" }

/**
 * @param size `undefined` while the image is being measured, `null` when it
 * could not be decoded at all — a dead `og:image` leaves no box behind.
 * @param compact several previews stacked: those are Slack-style unfurls, where
 * a banner each would be a wall of pictures.
 */
export const linkPreviewImageLayout = (
  imageUrl: string | undefined,
  size: ImageIntrinsicSize | null | undefined,
  compact: boolean
): LinkPreviewImageLayout => {
  if (!imageUrl || size === null) {
    return { kind: "none" }
  }
  if (compact) {
    return { kind: "thumb" }
  }
  if (!size) {
    return { kind: "banner", aspectRatio: OG_DEFAULT_RATIO }
  }
  const ratio = size.width / size.height
  return ratio >= BANNER_MIN_RATIO && size.width >= BANNER_MIN_WIDTH
    ? { kind: "banner", aspectRatio: ratio }
    : { kind: "thumb" }
}
