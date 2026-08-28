/**
 * The single width every media surface in the transcript shares.
 *
 * Web used to give each kind its own number (video 576, location 384, document
 * 288, voice 320, image thumbs 112), so a conversation with mixed attachments
 * read as a pile of unrelated cards. Mobile has essentially one media width and
 * looks like WhatsApp because of it.
 *
 * `24rem` is not a new value — it is the 384px the location card already used.
 * The 70% floor keeps media proportional to a narrow panel instead of pinning
 * it to a fixed block, which is the one place the web version has to differ
 * from mobile's constant 288.
 */
export const CHAT_MEDIA_WIDTH_CLASS = "w-[min(24rem,70%)]"

/**
 * Wider variant for surfaces that are read rather than glanced at.
 *
 * A map is the clearest case: at the standard media width it shrinks to a
 * thumbnail you can't actually orient yourself in. Mobile stretches locations
 * to the full message column for the same reason; on the web the column can be
 * ~660px, so this caps the stretch at 512 instead of letting a single map
 * dominate the transcript.
 */
export const CHAT_MEDIA_WIDE_WIDTH_CLASS = "w-[min(32rem,100%)]"

/** Gap between album cells. Mobile uses 2px; 4px reads as separate photos. */
export const CHAT_ALBUM_GAP_CLASS = "gap-0.5"

/**
 * Scrim behind the timestamp on media. Solid pills sit ON the photo; WhatsApp
 * fades the bottom edge instead, which stays readable over both a snowfield and
 * a night shot without hiding the image.
 */
// rgba(), not hsl(…/α): a slash inside a gradient's arbitrary value reads as
// Tailwind's opacity modifier and the whole utility is silently dropped.
export const CHAT_MEDIA_SCRIM_CLASS =
  "pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(to_top,rgba(0,0,0,0.5),rgba(0,0,0,0.18)_45%,transparent)]"

/** Neutral letterbox for video. The sender tint must never surround pixels. */
export const CHAT_VIDEO_SURFACE_CLASS = "bg-[hsl(222_31%_11%)]"

/** Chrome floated over media: the `+N` cover, the play button, the size badge. */
export const CHAT_MEDIA_OVERLAY_CLASS = "bg-[hsl(220_39%_6%/0.72)]"
export const CHAT_MEDIA_BADGE_CLASS = "bg-[hsl(220_39%_6%/0.6)]"
export const CHAT_ALBUM_MORE_CLASS = "bg-[hsl(220_39%_6%/0.55)]"
