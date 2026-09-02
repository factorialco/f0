/**
 * A real face per person, so a huddle looks like a call and not like a wall of
 * the same cartoon rabbit at four different offsets.
 *
 * The clips are hotlinked rather than committed. That is a real trade: the demo
 * needs the network, and the URLs can rot — the `gtv-videos-bucket` links four
 * other stories still use went 403 exactly this way. The mitigation is in
 * `createClipVideoBinding`, which falls back to the synthetic tile on `error`,
 * so a dead link degrades to initials instead of a black rectangle.
 *
 * Source: Pexels, whose licence allows any use without attribution. Everything
 * here is the SD rendition (~0.5–1 MB, 640px wide) because these play in tiles
 * that are rarely wider than that, and several at once.
 */

const CLIP = "https://videos.pexels.com/video-files"
const POSTER = "https://images.pexels.com/videos"

type Clip = {
  src: string
  /**
   * First frame, shown while the video buffers. Not every Pexels video exposes
   * one, and it is only a nicety — without it the tile is briefly black.
   */
  poster?: string
}

const clip = (id: number, file: string, withPoster = true): Clip => ({
  src: `${CLIP}/${id}/${id}-${file}.mp4`,
  ...(withPoster ? { poster: `${POSTER}/${id}/pictures/preview-0.jpg` } : {}),
})

/**
 * Chat person id → their camera feed.
 *
 * Deliberately not everyone: see `CAMERAS_ON_LIMIT` in `mockSeeds`. People
 * missing from this map join with their camera off, which is both what a real
 * group call looks like and what keeps the number of simultaneous video decodes
 * survivable.
 */
export const HUDDLE_CLIPS: Record<string, Clip> = {
  me: clip(6321250, "sd_640_338_25fps"),
  u_eleanor: clip(5974565, "sd_640_338_30fps"),
  u_marcus: clip(7643346, "sd_640_338_25fps"),
  u_nadia: clip(5941020, "sd_640_360_25fps"),
  u_grace: clip(6774633, "sd_640_360_30fps"),
  u_priya: clip(8512946, "sd_640_360_30fps", false),
  u_harper: clip(9032398, "sd_640_360_25fps", false),
  u_sam: clip(8135795, "sd_640_360_25fps", false),
  u_owen: clip(8136089, "sd_640_360_25fps", false),
}

export const clipFor = (participantId: string): Clip | undefined =>
  HUDDLE_CLIPS[participantId]

/** The people who can be on camera at all, in the order the room should prefer. */
export const CLIP_PARTICIPANT_IDS = Object.keys(HUDDLE_CLIPS)
