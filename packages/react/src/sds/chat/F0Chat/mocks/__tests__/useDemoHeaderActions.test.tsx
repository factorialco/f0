import { describe, expect, it, vi } from "vitest"

import { Bell, BellOff } from "@/icons/app"
import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { type F0ChatChannel } from "../../types"
import { useDemoHeaderActions } from "../useDemoHeaderActions"

const channel = (muted: boolean): F0ChatChannel => ({
  id: "channel",
  type: "group",
  title: "Product Team",
  avatar: { type: "emoji", emoji: "🚀" },
  statuses: muted ? [{ icon: BellOff, label: "Muted" }] : undefined,
})

describe("useDemoHeaderActions", () => {
  it("uses BellOff for Mute and Bell for Unmute", () => {
    const toggleMute = vi.fn()
    const { result, rerender } = renderHook(
      ({ muted }) =>
        useDemoHeaderActions({
          channel: channel(muted),
          toggleMute,
        }),
      { initialProps: { muted: false } }
    )

    expect(
      result.current.headerActions.find((action) => action.id === "mute")
    ).toMatchObject({ label: "Mute", icon: BellOff })

    rerender({ muted: true })

    expect(
      result.current.headerActions.find((action) => action.id === "mute")
    ).toMatchObject({ label: "Unmute", icon: Bell })
  })
})
