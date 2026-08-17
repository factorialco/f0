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

describe("resolveAutoFocus", () => {
  it("focuses nothing in a solo room", () => {
    const result = resolveAutoFocus({
      tiles: [camera("me", true)],
      manualFocusKey: null,
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBeNull()
  })

  it("focuses the remote participant in a one-to-one", () => {
    const result = resolveAutoFocus({
      tiles: [camera("me", true), camera("other")],
      manualFocusKey: null,
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBe("other:camera")
  })

  it("does not auto-focus with three or more cameras", () => {
    const result = resolveAutoFocus({
      tiles: [camera("me", true), camera("a"), camera("b")],
      manualFocusKey: null,
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBeNull()
  })

  it("focuses a new screen share over everything else", () => {
    const result = resolveAutoFocus({
      tiles: [share("a"), camera("me", true), camera("a")],
      manualFocusKey: null,
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBe("a:screenShare")
  })

  it("does not re-focus a screen share it already focused once", () => {
    const result = resolveAutoFocus({
      tiles: [share("a"), camera("me", true), camera("a")],
      manualFocusKey: null,
      seenShareKeys: new Set(["a:screenShare"]),
    })
    // And it does not fall through to the one-to-one rule either: yanking the
    // spotlight onto a face while someone is still sharing is worse than
    // leaving the room in its plain grid.
    expect(result.focusKey).toBeNull()
  })

  it("re-focuses a share that stopped and started again", () => {
    const stopped = resolveAutoFocus({
      tiles: [camera("me", true), camera("a")],
      manualFocusKey: null,
      seenShareKeys: new Set(["a:screenShare"]),
    })
    expect(stopped.seenShareKeys.has("a:screenShare")).toBe(false)

    const restarted = resolveAutoFocus({
      tiles: [share("a"), camera("me", true), camera("a")],
      manualFocusKey: null,
      seenShareKeys: stopped.seenShareKeys,
    })
    expect(restarted.focusKey).toBe("a:screenShare")
  })

  it("lets a manual pin win over a new screen share", () => {
    const result = resolveAutoFocus({
      tiles: [share("a"), camera("me", true), camera("b")],
      manualFocusKey: "b:camera",
      seenShareKeys: new Set(),
    })
    expect(result.focusKey).toBe("b:camera")
    expect(result.clearManualFocus).toBe(false)
  })

  it("asks to clear a pin whose tile has gone", () => {
    const result = resolveAutoFocus({
      tiles: [camera("me", true), camera("a"), camera("b")],
      manualFocusKey: "gone:camera",
      seenShareKeys: new Set(),
    })
    expect(result.clearManualFocus).toBe(true)
    expect(result.focusKey).toBeNull()
  })
})
