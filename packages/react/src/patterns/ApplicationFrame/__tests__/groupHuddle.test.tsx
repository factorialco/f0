import { act } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { MockChatAppProvider } from "@/sds/chat/F0Chat/mocks/MockChatApp"
import { SEED_BY_ID } from "@/sds/chat/F0Chat/mocks/mockSeeds"
import { useMockChatApp } from "@/sds/chat/F0Chat/mocks/useMockChatApp"
import { isCallMessage, type F0ChatCall } from "@/sds/chat/F0Chat/types"
import { renderHook } from "@/testing/test-utils"

import { GROUP_ARRIVAL_MS, useMockHuddle } from "../mocks/useMockHuddle"

/** Just past the nth arrival. */
const afterArrival = (nth: number): number => GROUP_ARRIVAL_MS * nth + 100

/** Four people, the most ordinary group huddle there is. */
const GROUP = "grp-design"
/** 45 people — the case that exercises the camera cap, not the happy path. */
const BIG_GROUP = "grp-reporting"

const setup = () =>
  renderHook(() => ({ huddle: useMockHuddle(), chat: useMockChatApp() }), {
    wrapper: MockChatAppProvider,
  })

const callIn = (
  chat: ReturnType<typeof useMockChatApp>,
  convId: string
): F0ChatCall | undefined =>
  (chat.states[convId]?.messages ?? []).filter(isCallMessage).at(-1)?.call

describe("group huddles", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it("opens without ringing anybody", () => {
    // Ringing five people is wrong, and SPEC.md commits to the Slack model: the
    // card in the channel IS the notification. So a group skips `ringing`
    // entirely and opens with you already inside.
    const { result } = setup()
    act(() => result.current.huddle.start(GROUP))

    expect(callIn(result.current.chat, GROUP)?.state).toBe("live")
    expect(result.current.huddle.runtime).not.toBeNull()
  })

  it("puts you in an empty room, with nobody waiting", () => {
    // Opening a huddle in a channel is not calling 45 people. Nobody is
    // "waiting", so nobody is represented — a grid of dark "Waiting…" tiles for
    // people who do not know the room exists would be a lie.
    const { result } = setup()
    act(() => result.current.huddle.start(GROUP))

    const others = (result.current.huddle.runtime?.participants ?? []).filter
      ? (result.current.huddle.runtime?.participants ?? []).filter(
          (person) => !person.isLocal
        )
      : []
    expect(others).toHaveLength(0)
    expect(
      (result.current.huddle.runtime?.participants ?? []).some(
        (person) => person.presence === "invited"
      )
    ).toBe(false)
  })

  it("lets them walk in one at a time", async () => {
    const { result } = setup()
    act(() => result.current.huddle.start(GROUP))

    const others = () =>
      (result.current.huddle.runtime?.participants ?? []).filter(
        (person) => !person.isLocal
      ).length

    expect(others()).toBe(0)

    await act(async () => {
      vi.advanceTimersByTime(afterArrival(1))
    })
    expect(others()).toBe(1)

    await act(async () => {
      vi.advanceTimersByTime(GROUP_ARRIVAL_MS)
    })
    expect(others()).toBe(2)
  })

  it("has the room filled before the conversation is underway", async () => {
    // The pace is a judgement call, but not a free one: the script clock starts
    // on the first arrival and skips lines from anyone not yet in the room, so a
    // slow fill eats the opening of the conversation.
    const { result } = setup()
    act(() => result.current.huddle.start(GROUP))

    await act(async () => {
      vi.advanceTimersByTime(10_000)
    })

    const others = (result.current.huddle.runtime?.participants ?? []).filter(
      (person) => !person.isLocal
    )
    expect(others.length).toBeGreaterThanOrEqual(4)
  })

  it("counts them onto the card as they arrive", async () => {
    const { result } = setup()
    act(() => result.current.huddle.start(GROUP))

    // Just you, to begin with.
    expect(callIn(result.current.chat, GROUP)?.participants).toHaveLength(1)

    await act(async () => {
      vi.advanceTimersByTime(afterArrival(2))
    })
    expect(
      (callIn(result.current.chat, GROUP)?.participants ?? []).length
    ).toBeGreaterThan(1)
  })

  it("keeps the roster and the summary on the card once it ends", async () => {
    const { result } = setup()
    act(() => result.current.huddle.start(GROUP))
    await act(async () => {
      vi.advanceTimersByTime(afterArrival(2))
    })
    act(() => result.current.huddle.runtime?.leave())

    const call = callIn(result.current.chat, GROUP)
    expect(call?.state).toBe("ended")
    expect((call?.participants ?? []).length).toBeGreaterThan(1)
    expect(call?.summary).toBeTypeOf("string")
    expect(call?.summary).not.toMatch(/\{(me|\d+)\}/)
  })

  it("does not try to seat a whole 45-person channel", async () => {
    // Nobody is seeded, and only a handful ever turn up: a channel huddle is
    // not a meeting the channel attends. This is also what keeps the room from
    // mounting ~30 simultaneous hotlinked <video> elements, which is the perf
    // question SPEC.md already flags.
    const seed = SEED_BY_ID.get(BIG_GROUP)
    expect(seed?.participants.length).toBeGreaterThan(20)

    const { result } = setup()
    act(() => result.current.huddle.start(BIG_GROUP))
    await act(async () => {
      vi.advanceTimersByTime(60000)
    })

    const others = (result.current.huddle.runtime?.participants ?? []).filter(
      (person) => !person.isLocal
    )
    expect(others.length).toBeLessThanOrEqual(4)
  })

  it("still rings a DM, which is the one case with a person to wait for", () => {
    const { result } = setup()
    const dm = "dm-eleanor"
    act(() => result.current.huddle.start(dm))
    expect(callIn(result.current.chat, dm)?.state).toBe("ringing")
  })
})
