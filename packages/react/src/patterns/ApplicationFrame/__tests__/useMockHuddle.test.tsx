import { act } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { MockChatAppProvider } from "@/sds/chat/F0Chat/mocks/MockChatApp"
import { useMockChatApp } from "@/sds/chat/F0Chat/mocks/useMockChatApp"
import { SEEDS } from "@/sds/chat/F0Chat/mocks/mockSeeds"
import { isCallMessage, type F0ChatCall } from "@/sds/chat/F0Chat/types"
import { renderHook } from "@/testing/test-utils"

import { useMockHuddle } from "../mocks/useMockHuddle"

/** The first DM seed — huddles are 1:1 only. */
const DM = SEEDS.find((seed) => (seed.type ?? "dm") === "dm")!

const setup = () =>
  renderHook(
    () => ({
      huddle: useMockHuddle(),
      chat: useMockChatApp(),
    }),
    { wrapper: MockChatAppProvider }
  )

const callIn = (
  chat: ReturnType<typeof useMockChatApp>,
  convId: string
): F0ChatCall | undefined => {
  const items = chat.states[convId]?.messages ?? []
  return items.filter(isCallMessage).at(-1)?.call
}

describe("useMockHuddle", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it("puts the other person in the ROOM, not just on the card", async () => {
    // The bug this locks: the card went live with two people while the room
    // stayed empty, because the mock only re-reads its roster when the room id
    // changes — growing the seed mid-call does nothing.
    const { result } = setup()

    act(() => result.current.huddle.start(DM.id))
    expect(callIn(result.current.chat, DM.id)?.state).toBe("ringing")
    expect(result.current.huddle.runtime?.participants).toHaveLength(1)

    await act(async () => {
      vi.advanceTimersByTime(4000)
    })

    expect(callIn(result.current.chat, DM.id)?.state).toBe("live")
    expect(result.current.huddle.runtime?.participants).toHaveLength(2)
  })

  it("admits them exactly once, however many times it re-renders", async () => {
    const { result, rerender } = setup()
    act(() => result.current.huddle.start(DM.id))
    await act(async () => {
      vi.advanceTimersByTime(4000)
    })
    rerender()
    rerender()
    expect(result.current.huddle.runtime?.participants).toHaveLength(2)
  })

  it("keeps the caller as who started it after you answer", () => {
    // Reading the phase here made an incoming call claim you started it the
    // moment you answered.
    const { result } = setup()
    act(() => result.current.huddle.receive(DM.id))

    const ringing = callIn(result.current.chat, DM.id)
    expect(ringing?.startedBy.id).not.toBe("me")
    expect(ringing?.join).toBeTypeOf("function")

    act(() => ringing?.join?.())
    expect(callIn(result.current.chat, DM.id)).toMatchObject({
      state: "live",
      startedBy: { id: ringing?.startedBy.id },
    })
  })

  it("hands over no room until an incoming call is answered", () => {
    const { result } = setup()
    act(() => result.current.huddle.receive(DM.id))
    expect(result.current.huddle.runtime).toBeNull()

    act(() => callIn(result.current.chat, DM.id)?.join?.())
    expect(result.current.huddle.runtime).not.toBeNull()
  })

  it("records a missed call when you hang up before they answer", () => {
    const { result } = setup()
    act(() => result.current.huddle.start(DM.id))
    act(() => result.current.huddle.runtime?.leave())

    expect(callIn(result.current.chat, DM.id)).toMatchObject({
      state: "missed",
    })
    expect(result.current.huddle.runtime).toBeNull()
  })

  it("records an ended call with its end time once they answered", async () => {
    const { result } = setup()
    act(() => result.current.huddle.start(DM.id))
    await act(async () => {
      vi.advanceTimersByTime(4000)
    })
    act(() => result.current.huddle.runtime?.leave())

    const call = callIn(result.current.chat, DM.id)
    expect(call?.state).toBe("ended")
    expect(call?.endedAt).toBeTypeOf("string")
    expect(call?.join).toBeUndefined()
  })

  it("keeps one card per call, and a new call is a new card", async () => {
    const { result } = setup()
    act(() => result.current.huddle.start(DM.id))
    await act(async () => {
      vi.advanceTimersByTime(4000)
    })
    const firstId = callIn(result.current.chat, DM.id)?.id
    act(() => result.current.huddle.runtime?.leave())

    // One call is one line: ringing → live → ended never appended a second one.
    const items = result.current.chat.states[DM.id]?.messages ?? []
    expect(items.filter(isCallMessage)).toHaveLength(1)

    act(() => result.current.huddle.start(DM.id))
    expect(callIn(result.current.chat, DM.id)?.id).not.toBe(firstId)
    expect(
      (result.current.chat.states[DM.id]?.messages ?? []).filter(isCallMessage)
    ).toHaveLength(2)
  })
})
