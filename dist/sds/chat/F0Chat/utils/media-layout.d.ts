/**
 * The single width every media surface in the transcript shares.
 *
 * Web used to give each kind its own number (video 576, location 384, document
 * 288, voice 320, image thumbs 112), so a conversation with mixed attachments
 * read as a pile of unrelated cards. Mobile has essentially one media width and
 * looks like WhatsApp because of it.
 *
 * `24rem` is not a new value — it is the 384px the location card already used.
 *
 * A flat width, NOT a percentage of the column: a percentage has no definite
 * basis here (every ancestor up to the row is content-sized), so the card's
 * intrinsic contribution fell back to the photo's own size and stretched the
 * message column to the full width of the transcript — which parked the hover
 * actions at the far right edge instead of beside the photo. `max-w-full` is
 * what the percentage was really there for: media still shrinks with a narrow
 * panel, it just no longer decides how wide the message is.
 */
export declare const CHAT_MEDIA_WIDTH_CLASS = "w-[24rem] max-w-full";
/**
 * Wider variant for surfaces that are read rather than glanced at.
 *
 * A map is the clearest case: at the standard media width it shrinks to a
 * thumbnail you can't actually orient yourself in. Mobile stretches locations
 * to the full message column for the same reason; on the web the column can be
 * ~660px, so this caps the stretch at 512 instead of letting a single map
 * dominate the transcript.
 */
export declare const CHAT_MEDIA_WIDE_WIDTH_CLASS = "w-[32rem] max-w-full";
/** Gap between album cells. Mobile uses 2px; 4px reads as separate photos. */
export declare const CHAT_ALBUM_GAP_CLASS = "gap-0.5";
/**
 * Scrim behind the timestamp on media. Solid pills sit ON the photo; WhatsApp
 * fades the bottom edge instead, which stays readable over both a snowfield and
 * a night shot without hiding the image.
 */
export declare const CHAT_MEDIA_SCRIM_CLASS = "pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(to_top,rgba(0,0,0,0.5),rgba(0,0,0,0.18)_45%,transparent)]";
/** Neutral letterbox for video. The sender tint must never surround pixels. */
export declare const CHAT_VIDEO_SURFACE_CLASS = "bg-[hsl(222_31%_11%)]";
/** Chrome floated over media: the `+N` cover, the play button, the size badge. */
export declare const CHAT_MEDIA_OVERLAY_CLASS = "bg-[hsl(220_39%_6%/0.72)]";
export declare const CHAT_MEDIA_BADGE_CLASS = "bg-[hsl(220_39%_6%/0.6)]";
export declare const CHAT_ALBUM_MORE_CLASS = "bg-[hsl(220_39%_6%/0.55)]";
