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
import { SidePanelProvider, useSidePanel } from "../SidePanel/SidePanelProvider"
import { type SidePanelViewDefinition } from "../SidePanel/types"

/** jsdom's window, which is what `panelArea` falls back to with no frame. */
const VIEWPORT = { width: 1024, height: 768 }
/** `CONTENT_PADDING` in MeetingOneSwitch. */
const PAD = 24

const AI_VIEW: SidePanelViewDefinition[] = [{ id: "ai" }]

const Probe = () => {
  const { mode, rect } = useMeetingSurface()
  const { layout, open, activeContent, effectiveWidth } = useSidePanel()
  return (
    <>
      <span data-testid="mode">{mode}</span>
      <span data-testid="rect">
        {rect.x},{rect.y},{rect.width},{rect.height}
      </span>
      <span data-testid="layout">{layout}</span>
      <span data-testid="open">{String(open)}</span>
      <span data-testid="content">{activeContent?.id ?? "none"}</span>
      <span data-testid="panel-width">{effectiveWidth}</span>
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

const setup = ({
  defaultMode = "fullscreen" as F0MeetingSurfaceMode,
  views = AI_VIEW,
  side = "right" as "left" | "right",
  defaultLayout = "sidepanel" as "sidepanel" | "fullscreen",
} = {}) =>
  render(
    <SidePanelProvider
      views={views}
      side={side}
      defaultLayout={defaultLayout}
      resizable
    >
      <MeetingSurfaceProvider defaultMode={defaultMode} roomId="room-1">
        <MeetingOneSwitch />
        <Probe />
      </MeetingSurfaceProvider>
    </SidePanelProvider>
  )

const panelWidth = (): number =>
  Number(screen.getByTestId("panel-width").textContent)

describe("MeetingOneSwitch", () => {
  beforeEach(() => {
    setCompactViewport(false)
    localStorage.clear()
  })

  it("only exists in full screen", () => {
    setup()
    expect(screen.getByRole("switch")).toBeVisible()
  })

  it.each(["floating", "panel"] as const)(
    "stays out of the way in %s, where the app is already reachable",
    (mode) => {
      setup({ defaultMode: mode })
      expect(screen.queryByRole("switch")).not.toBeInTheDocument()
    }
  )

  it("is absent when there is no panel to open", () => {
    setup({ views: [] })
    expect(screen.queryByRole("switch")).not.toBeInTheDocument()
  })

  it("opens the panel and gets the call out of full screen in one press", async () => {
    // Both halves matter. `F0MeetingSurface` marks every sibling of its portal
    // `inert` while full screen, so a chat opened without changing the mode
    // would be visibly there and completely unreachable.
    setup()
    await userEvent.click(screen.getByRole("switch"))

    expect(screen.getByTestId("open")).toHaveTextContent("true")
    expect(screen.getByTestId("mode")).toHaveTextContent("floating")
  })

  it("opens it DOCKED, not merely open", async () => {
    // `setOpen(true)` is not enough, and the case it misses is the panel being
    // ALREADY open: covering the frame there is no side to leave room beside,
    // and asking it to open does nothing.
    setup({ defaultLayout: "fullscreen" })
    await userEvent.click(screen.getByRole("switch"))

    expect(screen.getByTestId("layout")).toHaveTextContent("sidepanel")
  })

  it("hands the panel back from whatever held it, including the call", async () => {
    setup()
    await userEvent.click(screen.getByRole("switch"))

    // The chat is the panel's fallback occupant, so it only shows once nothing
    // else is claiming the space.
    expect(screen.getByTestId("content")).toHaveTextContent("none")
  })

  it("sizes the call to the content the chat leaves it", async () => {
    setup()
    await userEvent.click(screen.getByRole("switch"))

    const width = VIEWPORT.width - panelWidth() - PAD * 2
    expect(screen.getByTestId("rect")).toHaveTextContent(
      `${PAD},${PAD},${width},${VIEWPORT.height - PAD * 2}`
    )
  })

  it("leaves the gap on the edge the panel actually docks to", async () => {
    setup({ side: "left" })
    await userEvent.click(screen.getByRole("switch"))

    const width = VIEWPORT.width - panelWidth() - PAD * 2
    expect(screen.getByTestId("rect")).toHaveTextContent(
      `${panelWidth() + PAD},${PAD},${width},${VIEWPORT.height - PAD * 2}`
    )
  })

  it("does not store a desktop rect on a compact viewport", async () => {
    // There `floating` renders minimized and the panel covers the content rather
    // than docking beside it, so a rect reserving an edge nothing occupies would
    // be persisted for the next desktop session.
    setCompactViewport(true)
    setup()
    await userEvent.click(screen.getByRole("switch"))

    expect(screen.getByTestId("open")).toHaveTextContent("true")
    const stored = JSON.parse(
      localStorage.getItem(PLACEMENT_STORAGE_KEY) ?? "{}"
    )
    expect(stored.width).toBe(WINDOW_DEFAULT_WIDTH)
  })

  it("goes to floating rather than panel", async () => {
    // `panel` loses on purpose: the call has just handed the panel to the chat,
    // and asking for it back in the same breath is how the two used to fight.
    setup()
    await userEvent.click(screen.getByRole("switch"))
    expect(screen.getByTestId("mode")).not.toHaveTextContent("panel")
  })

  it("never reads as on, because there is no second press to make", () => {
    setup()
    expect(screen.getByRole("switch")).toHaveAttribute(
      "data-state",
      "unchecked"
    )
  })
})
