import { type F0MeetingFocusIntent } from "../types"
import { type F0MeetingTile } from "./tiles"

export type AutoFocusInput = {
  tiles: F0MeetingTile[]
  /** What the user asked for, if anything. */
  intent: F0MeetingFocusIntent
  /** Screen shares already auto-focused once, so they are not re-focused. */
  seenShareKeys: ReadonlySet<string>
}

export type AutoFocusResult = {
  focusKey: string | null
  /** Share keys to remember as already auto-focused. */
  seenShareKeys: ReadonlySet<string>
  /** True when the stored intent no longer matches a live tile. */
  clearIntent: boolean
}

/**
 * Decides which tile is spotlighted. Pure, so every branch is a unit test.
 *
 * Priority: the user's pin, then a screen share we have not focused yet, then
 * the remote participant in a one-to-one.
 *
 * The `none` intent is what makes the pin button work in a one-to-one. With a
 * plain nullable key, dismissing the spotlight fell straight back into the
 * two-camera rule below and re-focused the same person in the same render, so
 * the control did nothing at all.
 */
export const resolveAutoFocus = ({
  tiles,
  intent,
  seenShareKeys,
}: AutoFocusInput): AutoFocusResult => {
  const liveKeys = new Set(tiles.map((tile) => tile.key))
  const shareKeys = tiles
    .filter((tile) => tile.kind === "screenShare")
    .map((tile) => tile.key)

  // Forget shares that ended, so re-sharing focuses again.
  const nextSeen = new Set(shareKeys.filter((key) => seenShareKeys.has(key)))

  if (intent.type === "pinned" && liveKeys.has(intent.key)) {
    for (const key of shareKeys) nextSeen.add(key)
    return { focusKey: intent.key, seenShareKeys: nextSeen, clearIntent: false }
  }

  // A pin whose tile is gone is stale; `none` and `auto` are always valid.
  const clearIntent = intent.type === "pinned"

  // A share that has just started is a new event, not a preference, so it
  // overrides a dismissal — the same way it overrides the auto rule.
  const freshShare = shareKeys.find((key) => !nextSeen.has(key))
  if (freshShare) {
    nextSeen.add(freshShare)
    return { focusKey: freshShare, seenShareKeys: nextSeen, clearIntent }
  }

  if (intent.type === "none") {
    return { focusKey: null, seenShareKeys: nextSeen, clearIntent: false }
  }

  if (shareKeys.length === 0) {
    // People who have not arrived are not candidates. Spotlighting one would
    // blow an empty "waiting" plate up to fill the room while the person who
    // IS there is demoted to a thumbnail — which is what a ringing call looks
    // like before anyone picks up.
    const cameras = tiles.filter(
      (tile) =>
        tile.kind === "camera" && tile.participant.presence !== "invited"
    )
    if (cameras.length === 2) {
      const remote = cameras.find((tile) => !tile.participant.isLocal)
      if (remote) {
        return { focusKey: remote.key, seenShareKeys: nextSeen, clearIntent }
      }
    }
  }

  return { focusKey: null, seenShareKeys: nextSeen, clearIntent }
}
