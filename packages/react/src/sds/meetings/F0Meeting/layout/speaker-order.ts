import { type F0MeetingTile } from "./tiles"

export type SpeakerOrderInput = {
  tiles: F0MeetingTile[]
  /** Participants currently speaking. */
  speakerIds: readonly string[]
  /** How many tiles the grid can show at once. */
  pageSize: number
  /** participantId → epoch ms of their last turn. */
  lastSpokenAt: Readonly<Record<string, number>>
  /** Now, injected so the function stays pure and testable. */
  now: number
  /** A visible tile is only displaced after being quiet this long. */
  holdMs: number
}

/**
 * Promotes off-page speakers into the visible page, replacing the tile that has
 * been quiet the longest rather than the first one — swapping into slot 0 makes
 * the grid jump on every turn.
 *
 * The hold window stops two people alternating from shuffling tiles on every
 * exchange, which is the single most distracting thing a video grid can do.
 */
export const reorderForSpeakers = ({
  tiles,
  speakerIds,
  pageSize,
  lastSpokenAt,
  now,
  holdMs,
}: SpeakerOrderInput): F0MeetingTile[] => {
  if (tiles.length <= pageSize || speakerIds.length === 0) return tiles

  const speaking = new Set(speakerIds)
  const visible = tiles.slice(0, pageSize)
  const hidden = tiles.slice(pageSize)

  const promotable = hidden.filter(
    (tile) => tile.kind === "camera" && speaking.has(tile.participant.id)
  )
  if (promotable.length === 0) return tiles

  const result = [...visible]
  const displaced: F0MeetingTile[] = []

  for (const candidate of promotable) {
    // Never displace a screen share, the local tile, or someone still talking.
    const eligible = result
      .map((tile, index) => ({ tile, index }))
      .filter(
        ({ tile }) =>
          tile.kind === "camera" &&
          !tile.participant.isLocal &&
          !speaking.has(tile.participant.id) &&
          now - (lastSpokenAt[tile.participant.id] ?? 0) >= holdMs
      )
      .sort(
        (a, b) =>
          (lastSpokenAt[a.tile.participant.id] ?? 0) -
          (lastSpokenAt[b.tile.participant.id] ?? 0)
      )

    const target = eligible[0]
    if (!target) break

    displaced.push(target.tile)
    result[target.index] = candidate
  }

  if (displaced.length === 0) return tiles

  const promotedKeys = new Set(result.map((tile) => tile.key))
  const rest = [
    ...displaced,
    ...hidden.filter((tile) => !promotedKeys.has(tile.key)),
  ]

  return [...result, ...rest]
}
