import {
  type F0MeetingParticipant,
  type F0MeetingTrack,
  type F0MeetingTrackKind,
} from "../types"

/**
 * A rendered cell. One per published camera (with a placeholder when the camera
 * is off) plus one per screen share, so a participant who is sharing occupies
 * two tiles — the same behaviour as every other call product.
 */
export type F0MeetingTile = {
  /** `${participantId}:${kind}` — stable across re-solves. */
  key: string
  participant: F0MeetingParticipant
  kind: Extract<F0MeetingTrackKind, "camera" | "screenShare">
  /** Undefined when nothing is published: the tile renders the avatar. */
  track?: F0MeetingTrack
}

export const tileKey = (participantId: string, kind: string): string =>
  `${participantId}:${kind}`

const findTrack = (
  participant: F0MeetingParticipant,
  kind: F0MeetingTrackKind
): F0MeetingTrack | undefined =>
  participant.tracks.find((track) => track.kind === kind)

/**
 * Flattens the roster into tiles, preserving the host's participant order.
 * Screen shares come first so they are never pushed off the visible page by a
 * long roster.
 */
export const buildTiles = (
  participants: F0MeetingParticipant[]
): F0MeetingTile[] => {
  const shares: F0MeetingTile[] = []
  const cameras: F0MeetingTile[] = []

  for (const participant of participants) {
    const share = findTrack(participant, "screenShare")
    if (share) {
      shares.push({
        key: tileKey(participant.id, "screenShare"),
        participant,
        kind: "screenShare",
        track: share,
      })
    }
    cameras.push({
      key: tileKey(participant.id, "camera"),
      participant,
      kind: "camera",
      track: findTrack(participant, "camera"),
    })
  }

  return [...shares, ...cameras]
}

/** Ratio to lay a tile out with: screen shares keep their intrinsic one. */
export const tileAspectRatio = (
  tile: F0MeetingTile,
  fallback: number
): number => {
  const { width, height } = tile.track ?? {}
  if (tile.kind === "screenShare" && width && height) return width / height
  return fallback
}
