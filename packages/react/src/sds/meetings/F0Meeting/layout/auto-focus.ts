import { type F0MeetingTile } from "./tiles"

export type AutoFocusInput = {
  tiles: F0MeetingTile[]
  /** The user's explicit pin. Wins over everything while its tile exists. */
  manualFocusKey: string | null
  /** Screen shares already auto-focused once, so they are not re-focused. */
  seenShareKeys: ReadonlySet<string>
}

export type AutoFocusResult = {
  focusKey: string | null
  /** Share keys to remember as already auto-focused. */
  seenShareKeys: ReadonlySet<string>
  /** True when the manual pin no longer matches a live tile. */
  clearManualFocus: boolean
}

/**
 * Decides which tile is spotlighted. Pure, so every branch is a unit test —
 * the previous implementation was a 75-line effect over mutable refs.
 *
 * Priority: the user's pin, then a screen share we have not focused yet, then
 * the remote participant in a one-to-one.
 */
export const resolveAutoFocus = ({
  tiles,
  manualFocusKey,
  seenShareKeys,
}: AutoFocusInput): AutoFocusResult => {
  const liveKeys = new Set(tiles.map((tile) => tile.key))
  const shareKeys = tiles
    .filter((tile) => tile.kind === "screenShare")
    .map((tile) => tile.key)

  // Forget shares that ended, so re-sharing focuses again.
  const nextSeen = new Set(shareKeys.filter((key) => seenShareKeys.has(key)))

  if (manualFocusKey && liveKeys.has(manualFocusKey)) {
    for (const key of shareKeys) nextSeen.add(key)
    return {
      focusKey: manualFocusKey,
      seenShareKeys: nextSeen,
      clearManualFocus: false,
    }
  }

  const clearManualFocus = manualFocusKey !== null

  const freshShare = shareKeys.find((key) => !nextSeen.has(key))
  if (freshShare) {
    nextSeen.add(freshShare)
    return { focusKey: freshShare, seenShareKeys: nextSeen, clearManualFocus }
  }

  if (shareKeys.length === 0) {
    const cameras = tiles.filter((tile) => tile.kind === "camera")
    if (cameras.length === 2) {
      const remote = cameras.find((tile) => !tile.participant.isLocal)
      if (remote) {
        return {
          focusKey: remote.key,
          seenShareKeys: nextSeen,
          clearManualFocus,
        }
      }
    }
  }

  return { focusKey: null, seenShareKeys: nextSeen, clearManualFocus }
}
