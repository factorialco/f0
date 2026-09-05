import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  MeetingSurfaceProvider,
  useMeetingSurface,
} from "@/sds/meetings/F0Meeting"
import { type F0MeetingSurfaceMode } from "@/sds/meetings/F0Meeting/types"
import {
  PLACEMENT_STORAGE_KEY,
  WINDOW_DEFAULT_WIDTH,
} from "@/sds/meetings/F0Meeting/window/window-constants"
import { render } from "@/testing/test-utils"

import { MeetingOneSwitch } from "../MeetingOneSwitch"

const setOpen = vi.fn()
const openAsSidePanel = vi.fn()
let bridgeEnabled = true
let chatSide: "left" | "right" = "right"

const CHAT_WIDTH = 360

vi.mock("../AiChatBridge", () => ({
  useAiChatBridge: () => ({
    enabled: bridgeEnabled,
    open: false,
    setOpen,
    openAsSidePanel,
    chatWidth: CHAT_WIDTH,
    chatSide,
  }),
}))

/** jsdom's window, which is what `panelArea` falls back to with no frame. */
const VIEWPORT = { width: 1024, height: 768 }
/** `CONTENT_PADDING` in MeetingOneSwitch. */
const PAD = 24

const ModeProbe = () => {
  const { mode, rect } = useMeetingSurface()
  return (
    <>
      <span data-testid="mode">{mode}</span>
      <span data-testid="rect">
        {rect.x},{rect.y},{rect.width},{rect.height}
      </span>
    </>
  )
}

/** Drive `useMediaQuery((max-width: …))` to a given match value. */
const setCompactViewport = (matches: boolean) =>
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

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
    openAsSidePanel.mockClear()
    bridgeEnabled = true
    chatSide = "right"
    setCompactViewport(false)
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

    expect(openAsSidePanel).toHaveBeenCalled()
    expect(screen.getByTestId("mode")).toHaveTextContent("floating")
  })

  it("opens it as a side panel, not merely open", async () => {
    // `setOpen(true)` is not enough, and the case it misses is the chat being
    // ALREADY open: expanded or showing a canvas it spans the frame, so there is
    // no side to leave room beside, and asking it to open does nothing.
    setup("fullscreen")
    await userEvent.click(screen.getByRole("switch"))

    expect(openAsSidePanel).toHaveBeenCalled()
    expect(setOpen).not.toHaveBeenCalled()
  })

  it("sizes the call to the content the chat leaves it", async () => {
    setup("fullscreen")
    await userEvent.click(screen.getByRole("switch"))

    const width = VIEWPORT.width - CHAT_WIDTH - PAD * 2
    expect(screen.getByTestId("rect")).toHaveTextContent(
      `${PAD},${PAD},${width},${VIEWPORT.height - PAD * 2}`
    )
  })

  it("leaves the gap on the edge the chat actually docks to", async () => {
    chatSide = "left"
    setup("fullscreen")
    await userEvent.click(screen.getByRole("switch"))

    const width = VIEWPORT.width - CHAT_WIDTH - PAD * 2
    expect(screen.getByTestId("rect")).toHaveTextContent(
      `${CHAT_WIDTH + PAD},${PAD},${width},${VIEWPORT.height - PAD * 2}`
    )
  })

  it("does not store a desktop rect on a compact viewport", async () => {
    // There `floating` renders minimized and the chat covers the content rather
    // than docking beside it, so a rect reserving an edge nothing occupies would
    // be persisted for the next desktop session.
    setCompactViewport(true)
    setup("fullscreen")
    await userEvent.click(screen.getByRole("switch"))

    expect(openAsSidePanel).toHaveBeenCalled()
    const stored = JSON.parse(
      localStorage.getItem(PLACEMENT_STORAGE_KEY) ?? "{}"
    )
    expect(stored.width).toBe(WINDOW_DEFAULT_WIDTH)
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
