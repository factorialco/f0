import { act } from "react"

import { describe, expect, it } from "vitest"

import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { isSystemMessage, type F0ChatUser } from "../../types"
import { useMockChatRuntime, type MockChatSeed } from "../createMockChatRuntime"

const me: F0ChatUser = { id: "me", name: "Me" }
const ana: F0ChatUser = { id: "ana", name: "Ana García" }
const luis: F0ChatUser = { id: "luis", name: "Luis Pérez" }

const seed: MockChatSeed = {
  channel: {
    id: "grp",
    type: "group",
    title: "Team",
    avatar: { type: "company", name: "Team" },
    memberCount: 3,
  },
  me,
  others: [ana],
  initialCount: 4,
  olderPages: 0,
  ambientEveryMs: 0,
}

describe("useMockChatRuntime membership events", () => {
  it("addMembers appends ONE system item for the batch and bumps memberCount", () => {
    const { result } = renderHook(() => useMockChatRuntime(seed))
    const before = result.current.messages.length

    act(() => result.current.addMembers([ana, luis]))

    expect(result.current.messages).toHaveLength(before + 1)
    const last = result.current.messages.at(-1)!
    expect(isSystemMessage(last)).toBe(true)
    expect(isSystemMessage(last) && last.system?.event).toBe("member.added")
    expect(isSystemMessage(last) && last.system?.members).toEqual([ana, luis])
    expect(result.current.channel.memberCount).toBe(5)
  })

  it("removeMember / memberLeaves append their events and decrement memberCount", () => {
    const { result } = renderHook(() => useMockChatRuntime(seed))

    act(() => result.current.removeMember(ana))
    let last = result.current.messages.at(-1)!
    expect(isSystemMessage(last) && last.system?.event).toBe("member.removed")

    act(() => result.current.memberLeaves(luis))
    last = result.current.messages.at(-1)!
    expect(isSystemMessage(last) && last.system?.event).toBe("member.left")
    expect(result.current.channel.memberCount).toBe(1)
  })

  it("system items never count as unread", () => {
    const { result } = renderHook(() => useMockChatRuntime(seed))
    const before = result.current.unreadCount

    act(() => result.current.addMembers([luis]))

    expect(result.current.unreadCount).toBe(before)
  })
})
