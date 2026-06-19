import { ReactNode } from "react"
import { describe, expect, it } from "vitest"

import { act, renderHook } from "@/testing/test-utils"

import { SidebarChatProvider, useSidebarChats } from "../SidebarChatProvider"
import { SidebarChatGroup } from "../types"

const groups: SidebarChatGroup[] = [
  {
    id: "dms",
    title: "Direct messages",
    chats: [
      {
        id: "a",
        label: "Ana",
        avatar: { type: "person", firstName: "A", lastName: "N" },
      },
      {
        id: "b",
        label: "Bob",
        avatar: { type: "person", firstName: "B", lastName: "B" },
      },
    ],
  },
  { id: "groups", title: "Groups", chats: [] },
]

const wrapper = ({ children }: { children: ReactNode }) => (
  <SidebarChatProvider initialGroups={groups}>{children}</SidebarChatProvider>
)

const renderStore = () => renderHook(() => useSidebarChats(), { wrapper })

describe("SidebarChatProvider store", () => {
  it("throws when used outside the provider", () => {
    expect(() => renderHook(() => useSidebarChats())).toThrow(
      /SidebarChatProvider/
    )
  })

  it("exposes the initial groups", () => {
    const { result } = renderStore()
    expect(result.current.groups).toHaveLength(2)
    expect(result.current.groups[0].chats).toHaveLength(2)
  })

  it("counts unread conversations", () => {
    const { result } = renderStore()
    expect(result.current.unreadChatsCount).toBe(0)
    act(() => result.current.setUnread("a", 3))
    expect(result.current.unreadChatsCount).toBe(1)
    act(() => result.current.setUnread("b", 5))
    expect(result.current.unreadChatsCount).toBe(2)
    act(() => result.current.setUnread("a", 0))
    expect(result.current.unreadChatsCount).toBe(1)
  })

  it("upsertChat inserts a new chat into a group", () => {
    const { result } = renderStore()
    act(() =>
      result.current.upsertChat("groups", {
        id: "g1",
        label: "General",
        avatar: { type: "team", name: "General" },
      })
    )
    expect(result.current.groups[1].chats.map((c) => c.id)).toEqual(["g1"])
  })

  it("upsertChat updates an existing chat in place", () => {
    const { result } = renderStore()
    act(() =>
      result.current.upsertChat("dms", {
        id: "a",
        label: "Ana Updated",
        avatar: { type: "person", firstName: "A", lastName: "N" },
      })
    )
    expect(result.current.groups[0].chats[0].label).toBe("Ana Updated")
    expect(result.current.groups[0].chats).toHaveLength(2)
  })

  it("updateChat patches a chat by id", () => {
    const { result } = renderStore()
    act(() => result.current.updateChat("b", { presence: "online" }))
    expect(result.current.groups[0].chats[1].presence).toBe("online")
  })

  it("setUnread sets the unread counter", () => {
    const { result } = renderStore()
    act(() => result.current.setUnread("a", 7))
    expect(result.current.groups[0].chats[0].unreadCount).toBe(7)
  })

  it("removeChat removes a chat by id", () => {
    const { result } = renderStore()
    act(() => result.current.removeChat("a"))
    expect(result.current.groups[0].chats.map((c) => c.id)).toEqual(["b"])
  })

  it("reorder reorders chats within a group", () => {
    const { result } = renderStore()
    act(() => result.current.reorder("dms", ["b", "a"]))
    expect(result.current.groups[0].chats.map((c) => c.id)).toEqual(["b", "a"])
  })

  it("keeps action identity stable across renders", () => {
    const { result, rerender } = renderStore()
    const first = result.current.upsertChat
    act(() => result.current.setUnread("a", 1))
    rerender()
    expect(result.current.upsertChat).toBe(first)
  })
})
