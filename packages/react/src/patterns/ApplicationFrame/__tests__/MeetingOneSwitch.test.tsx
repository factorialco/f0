import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  MeetingSurfaceProvider,
  useMeetingSurface,
} from "@/sds/meetings/F0Meeting"
import { type F0MeetingSurfaceMode } from "@/sds/meetings/F0Meeting/types"
import { render } from "@/testing/test-utils"

import { MeetingOneSwitch } from "../MeetingOneSwitch"

const setOpen = vi.fn()
let bridgeEnabled = true

vi.mock("../AiChatBridge", () => ({
  useAiChatBridge: () => ({
    enabled: bridgeEnabled,
    open: false,
    setOpen,
  }),
}))

const ModeProbe = () => {
  const { mode } = useMeetingSurface()
  return <span data-testid="mode">{mode}</span>
}

const setup = (defaultMode: F0MeetingSurfaceMode = "fullscreen") =>
  render(
    <MeetingSurfaceProvider defaultMode={defaultMode} roomId="room-1">
      <MeetingOneSwitch />
      <ModeProbe />
    </MeetingSurfaceProvider>
  )

describe("MeetingOneSwitch", () => {
  beforeEach(() => {
    setOpen.mockClear()
    bridgeEnabled = true
    localStorage.clear()
  })

  it("only exists in full screen", () => {
    setup("fullscreen")
    expect(screen.getByRole("switch")).toBeVisible()
  })

  it.each(["floating", "panel"] as const)(
    "stays out of the way in %s, where the app is already reachable",
    (mode) => {
      setup(mode)
      expect(screen.queryByRole("switch")).not.toBeInTheDocument()
    }
  )

  it("is absent when there is no AI to open", () => {
    bridgeEnabled = false
    setup("fullscreen")
    expect(screen.queryByRole("switch")).not.toBeInTheDocument()
  })

  it("opens the chat and gets the call out of full screen in one press", async () => {
    // Both halves matter. `F0MeetingSurface` marks every sibling of its portal
    // `inert` while full screen, so a chat opened without changing the mode
    // would be visibly there and completely unreachable.
    setup("fullscreen")
    await userEvent.click(screen.getByRole("switch"))

    expect(setOpen).toHaveBeenCalledWith(true)
    expect(screen.getByTestId("mode")).toHaveTextContent("floating")
  })

  it("goes to floating rather than panel", async () => {
    // `panel` loses: the frame's exclusivity effect hands a contested slot to
    // whoever just arrived, so a call moved there with the chat freshly open is
    // bounced to floating one render later anyway.
    setup("fullscreen")
    await userEvent.click(screen.getByRole("switch"))
    expect(screen.getByTestId("mode")).not.toHaveTextContent("panel")
  })

  it("never reads as on, because there is no second press to make", () => {
    setup("fullscreen")
    expect(screen.getByRole("switch")).toHaveAttribute(
      "data-state",
      "unchecked"
    )
  })
})
