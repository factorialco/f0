import { type ReactNode } from "react"

import { describe, expect, it, vi } from "vitest"

import { Bell, BellOff } from "@/icons/app"
import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import {
  MockChatAppProvider,
  useConversationRuntime,
  useMockChatGroups,
} from "../MockChatApp"
import { useDemoHeaderActions } from "../useDemoHeaderActions"

const wrapper = ({ children }: { children: ReactNode }) => (
  <MockChatAppProvider>{children}</MockChatAppProvider>
)

describe("MockChatApp mute status", () => {
  it("keeps the channel, sidebar, and header action synchronized", () => {
    const onSelect = vi.fn()
    const { result } = renderHook(
      () => {
        const runtime = useConversationRuntime("dm-priya")
        const groups = useMockChatGroups(onSelect)
        const { headerActions } = useDemoHeaderActions(runtime)
        const sidebarChat = groups
          .flatMap((group) => group.chats)
          .find((chat) => chat.id === "dm-priya")

        return {
          runtime,
          sidebarChat,
          muteAction: headerActions.find((action) => action.id === "mute"),
        }
      },
      { wrapper }
    )

    const countStatus = (
      statuses: typeof result.current.runtime.channel.statuses,
      icon: typeof BellOff
    ) => statuses?.filter((status) => status.icon === icon).length ?? 0

    expect(countStatus(result.current.runtime.channel.statuses, BellOff)).toBe(
      1
    )
    expect(countStatus(result.current.sidebarChat?.statuses, BellOff)).toBe(1)
    expect(result.current.muteAction).toMatchObject({
      label: "Unmute",
      icon: Bell,
    })

    act(() =>
      result.current.muteAction?.onClick(result.current.runtime.channel)
    )

    expect(countStatus(result.current.runtime.channel.statuses, BellOff)).toBe(
      0
    )
    expect(countStatus(result.current.sidebarChat?.statuses, BellOff)).toBe(0)
    expect(result.current.muteAction).toMatchObject({
      label: "Mute",
      icon: BellOff,
    })
  })
})
