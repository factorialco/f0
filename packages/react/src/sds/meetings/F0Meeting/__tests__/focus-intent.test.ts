import { describe, expect, it } from "vitest"

import { resolveAutoFocus } from "../layout/auto-focus"
import { type F0MeetingTile } from "../layout/tiles"
import { type F0MeetingParticipant } from "../types"

const participant = (id: string, isLocal = false): F0MeetingParticipant => ({
  id,
  name: id,
  isLocal,
  tracks: [],
})

const camera = (id: string, isLocal = false): F0MeetingTile => ({
  key: `${id}:camera`,
  participant: participant(id, isLocal),
  kind: "camera",
})

const share = (id: string): F0MeetingTile => ({
  key: `${id}:screenShare`,
  participant: participant(id),
  kind: "screenShare",
})

const ONE_TO_ONE = [camera("me", true), camera("other")]

describe("dismissing the spotlight in a one-to-one", () => {
  it("auto-focuses the remote person on arrival, like Meet", () => {
    const result = resolveAutoFocus({
      tiles: ONE_TO_ONE,
      intent: { type: "auto" },
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBe("other:camera")
  })

  it("stays dismissed instead of re-focusing them in the same render", () => {
    // The bug: with a nullable key there was no way to say "no focus", so
    // clearing the pin fell straight back into the two-camera rule and the
    // control did nothing at all.
    const result = resolveAutoFocus({
      tiles: ONE_TO_ONE,
      intent: { type: "none" },
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBeNull()
    expect(result.clearIntent).toBe(false)
  })

  it("lets a fresh screen share override a dismissal", () => {
    // A share starting is an event, not a preference — it outranks the last
    // thing the user asked the layout to do.
    const result = resolveAutoFocus({
      tiles: [...ONE_TO_ONE, share("other")],
      intent: { type: "none" },
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBe("other:screenShare")
  })

  it("does not re-focus a share it has already shown", () => {
    const result = resolveAutoFocus({
      tiles: [...ONE_TO_ONE, share("other")],
      intent: { type: "none" },
      seenShareKeys: new Set(["other:screenShare"]),
    })
    expect(result.focusKey).toBeNull()
  })

  it("moves the spotlight when another tile is pinned", () => {
    const result = resolveAutoFocus({
      tiles: ONE_TO_ONE,
      intent: { type: "pinned", key: "me:camera" },
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBe("me:camera")
  })

  it("reports a pin whose tile has gone, so the caller can clear it", () => {
    const result = resolveAutoFocus({
      tiles: ONE_TO_ONE,
      intent: { type: "pinned", key: "ghost:camera" },
      seenShareKeys: new Set(),
    })
    expect(result.clearIntent).toBe(true)
  })

  it("never reports a stale intent for auto or none", () => {
    for (const intent of [{ type: "auto" }, { type: "none" }] as const) {
      const result = resolveAutoFocus({
        tiles: ONE_TO_ONE,
        intent,
        seenShareKeys: new Set(),
      })
      expect(result.clearIntent).toBe(false)
    }
  })
})
