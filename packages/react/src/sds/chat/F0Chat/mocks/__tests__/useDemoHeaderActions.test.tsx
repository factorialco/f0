import { describe, expect, it, vi } from "vitest"

import { VolumeHigh, VolumeMuted } from "@/icons/app"
import { renderHook } from "@/testing/test-utils"

import { type F0ChatChannel } from "../../types"
import { useDemoHeaderActions } from "../useDemoHeaderActions"

const channel = (muted: boolean): F0ChatChannel => ({
  id: "channel",
  type: "group",
  title: "Product Team",
  avatar: { type: "emoji", emoji: "🚀" },
  statuses: muted ? [{ icon: VolumeMuted, label: "Muted" }] : undefined,
})

describe("useDemoHeaderActions", () => {
  it("uses VolumeMuted for Mute and VolumeHigh for Unmute", () => {
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
    ).toMatchObject({ label: "Mute", icon: VolumeMuted })

    rerender({ muted: true })

    expect(
      result.current.headerActions.find((action) => action.id === "mute")
    ).toMatchObject({ label: "Unmute", icon: VolumeHigh })
  })
})
