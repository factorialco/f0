import { act } from "react"
import { describe, expect, it } from "vitest"

import { renderHook } from "@/testing/test-utils"

import { useMockRoomChat } from "../mocks/useMockRoomChat"

describe("useMockRoomChat", () => {
  it("signs your messages as you, not as the literal string 'me'", () => {
    // The bug this locks. The author was hard-coded to "me", which happens to
    // match the standalone seeds but not the huddle's local id — so in the frame
    // demo your own lines resolved to nobody and rendered under the other
    // person's name, with no avatar.
    const { result } = renderHook(() => useMockRoomChat("room-1", "u_jordan"))

    act(() => result.current.send("hello"))

    expect(result.current.messages).toHaveLength(1)
    expect(result.current.messages[0]?.participantId).toBe("u_jordan")
  })

  it("merges what arrives with what you sent, oldest first", () => {
    const incoming = [
      {
        id: "in-1",
        participantId: "u_eleanor",
        text: "here's the doc",
        at: "2026-01-01T10:00:00.000Z",
      },
    ]
    const { result } = renderHook(() =>
      useMockRoomChat("room-1", "me", incoming)
    )

    expect(result.current.messages).toHaveLength(1)
    act(() => result.current.send("thanks"))

    expect(result.current.messages.map((m) => m.text)).toEqual([
      "here's the doc",
      "thanks",
    ])
  })

  it("drops everything when the room changes", () => {
    // A new room is a new chat. Keeping the old lines is the exact
    // misunderstanding this hook exists to prevent.
    const { result, rerender } = renderHook(
      ({ roomId }) => useMockRoomChat(roomId, "me"),
      { initialProps: { roomId: "room-1" } }
    )

    act(() => result.current.send("stays in room 1"))
    expect(result.current.messages).toHaveLength(1)

    rerender({ roomId: "room-2" })
    expect(result.current.messages).toHaveLength(0)
  })

  it("ignores empty sends", () => {
    const { result } = renderHook(() => useMockRoomChat("room-1", "me"))
    act(() => result.current.send("   "))
    expect(result.current.messages).toHaveLength(0)
  })
})
