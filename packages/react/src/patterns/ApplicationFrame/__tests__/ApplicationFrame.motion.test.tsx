import { act } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { ApplicationFrame } from ".."

/**
 * These tests are about WHAT MOVES, not how fast.
 * `MotionGlobalConfig.skipAnimations` is on in this environment, so durations
 * are not observable — the curves and timings live in `layoutTransition` and
 * are asserted there, as pure functions. What is observable here is the value
 * motion lands on, which is exactly what the two reported defects are about:
 * a panel that shrinks to its docked width on the way out, and a panel that
 * opens covering the frame before snapping to a column.
 */

let viewportWidth = 1440

/**
 * A `matchMedia` that actually answers `max-width` against a viewport, instead
 * of the suite-wide stub that answers `false` to everything. The frame's
 * behaviour in the 900–1440 band is decided entirely by which of `md`, `lg`
 * and `xl` match, so a stub that cannot tell them apart cannot test it.
 */
const setViewport = (width: number) => {
  viewportWidth = width
  window.matchMedia = ((query: string) => {
    const max = /max-width:\s*(\d+)px/.exec(query)
    const matches = max ? viewportWidth <= Number(max[1]) : false
    return {
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    }
  }) as unknown as typeof window.matchMedia
}

const Probe = () => {
  const {
    setOpen,
    setVisualizationMode,
    setPanelContent,
    clearPanelContent,
    panelOverlays,
  } = useAiChat()
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        open-chat
      </button>
      <button type="button" onClick={() => setOpen(false)}>
        close-chat
      </button>
      <button type="button" onClick={() => setVisualizationMode("fullscreen")}>
        go-fullscreen
      </button>
      <button type="button" onClick={() => setVisualizationMode("sidepanel")}>
        go-sidepanel
      </button>
      <button
        type="button"
        onClick={() =>
          setPanelContent({ id: "conv", content: <div>CONVERSATION</div> })
        }
      >
        open-conv
      </button>
      <button
        type="button"
        onClick={() => {
          // What a host does to hand the panel over to the AI chat.
          clearPanelContent()
          setVisualizationMode("fullscreen")
        }}
      >
        conv-to-fullscreen-ai
      </button>
      <span>overlays:{String(panelOverlays)}</span>
    </div>
  )
}

const renderFrame = (
  side: "left" | "right" = "right",
  panelContentSide?: "left" | "right"
) =>
  render(
    <ApplicationFrame
      ai={{
        enabled: true,
        side,
        panelContentSide,
        resizable: true,
        chatMessages: <div>AI CHAT</div>,
      }}
      sidebar={<div>SIDEBAR</div>}
    >
      <Probe />
    </ApplicationFrame>
  )

/** The box the frame measures and pads — the parent of `<main id="content">`. */
const mainArea = (): HTMLElement => {
  const element = document.getElementById("content")?.parentElement
  if (!element) throw new Error("main area not found")
  return element
}

/** The room the nav is holding. */
const sidebarSlot = (): HTMLElement | null =>
  (mainArea().previousElementSibling as HTMLElement | null) ?? null

const click = async (label: string) => {
  await act(async () => {
    screen.getByText(label).click()
  })
}

/**
 * Let motion actually write its values out before reading them.
 *
 * Needed for the assertions that something did NOT move: without it they read
 * the style from before the render they are meant to be checking, and pass for
 * the wrong reason.
 */
const settle = async () => {
  await act(async () => {
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve))
    )
  })
}

describe("ApplicationFrame motion", () => {
  beforeEach(() => {
    localStorage.clear()
    setViewport(1440)
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function () {
        // Everything spans the viewport: the frame measures the row that holds
        // the nav and the content — whose width only changes when the window
        // does — and subtracts the nav's own room itself.
        const width = viewportWidth
        return {
          x: 0,
          y: 0,
          top: 0,
          left: 0,
          right: width,
          bottom: 900,
          width,
          height: 900,
          toJSON: () => ({}),
        } as DOMRect
      }
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("closing from fullscreen", () => {
    // What width the panel leaves from is decided by `resolvePanelWidthTarget`
    // and asserted against it directly — jsdom cannot help here, because motion
    // refuses to interpolate between `360px` and `100%` and simply keeps
    // whichever it had, so the rendered style says the same thing either way.
    // What IS observable is that the content gets its room back.
    it("gives the main content its room back", async () => {
      renderFrame("right")
      await click("open-chat")
      await click("go-fullscreen")
      await click("close-chat")

      await waitFor(() => expect(mainArea().style.paddingRight).toBe("0px"))
    })

    it("does not leave the content stuck with the scroll locked", async () => {
      // `isInFullscreenTransition` puts `overflow-hidden` on the content while
      // the panel is changing size, and used to be released by the container's
      // `onAnimationComplete`. That callback only fires when something
      // animated — and closing from fullscreen deliberately leaves the width
      // alone now, so the flag is on a timer instead.
      renderFrame("right")
      await click("open-chat")
      await click("go-fullscreen")
      await click("close-chat")

      const content = document.getElementById("content") as HTMLElement
      await waitFor(() =>
        expect(content.className).toContain("overflow-y-auto")
      )
    })
  })

  describe("a fullscreen panel is a cover, not a column", () => {
    it("holds the layout still underneath while the cover is arriving", async () => {
      // Opening the AI chat straight into fullscreen while a conversation is
      // docked on the left. The active side flips left → right, so the content
      // would slide the width of the panel across the screen — under a surface
      // that is still fading in, which is exactly where you can see it. The
      // cover is going to stay, so what it hides simply holds.
      renderFrame("right", "left")
      await click("open-conv")
      await waitFor(() => expect(mainArea().style.paddingLeft).toBe("360px"))

      await click("conv-to-fullscreen-ai")
      await settle()

      expect(mainArea().style.paddingLeft).toBe("360px")
      expect(mainArea().style.paddingRight).toBe("0px")
    })

    it("settles the layout before the cover goes away", async () => {
      // ...and the moment the panel stops being fullscreen, the layout it was
      // hiding is re-applied — while it is still hidden — so the panel shrinks
      // back onto a page that is already where it belongs.
      renderFrame("right", "left")
      await click("open-conv")
      await click("conv-to-fullscreen-ai")

      await click("go-sidepanel")

      await waitFor(() => expect(mainArea().style.paddingRight).toBe("360px"))
      expect(mainArea().style.paddingLeft).toBe("0px")
    })
  })

  describe("opening between 900 and 1200", () => {
    it("opens straight into a split, without a frame of full-frame overlay", async () => {
      // 920 is the awkward width. The nav is locked (over `md`), which leaves
      // the panel a 680px frame — under `splitMinFrame`, so the panel belongs
      // in an overlay. But opening a right-docked panel floats the nav, and
      // 920 IS enough to split.
      //
      // The frame used to learn that only when the ResizeObserver next fired,
      // one or two frames later: the panel opened covering the whole window
      // and then snapped to a column. Note there is no `resize` dispatched
      // anywhere in this test — the destination is published with the
      // sidebar's own change, which is the point.
      setViewport(920)
      renderFrame("right")
      // Locked nav, 680px of frame: correctly an overlay while it is closed.
      await waitFor(() =>
        expect(screen.getByText("overlays:true")).toBeInTheDocument()
      )

      await click("open-chat")

      // Synchronous on purpose: the point is that no later tick is needed.
      expect(screen.getByText("overlays:false")).toBeInTheDocument()
      await waitFor(() => expect(mainArea().style.paddingRight).toBe("300px"))
    })

    it("keeps the sidebar out of the way once the panel is up", async () => {
      // `forceFloat` had two writers racing each other; the promotion chat's
      // effect ran second and reset what this one had just decided.
      setViewport(920)
      renderFrame("right")
      await click("open-chat")

      await waitFor(() =>
        expect(sidebarSlot()?.hasAttribute("inert")).toBe(true)
      )
    })
  })

  describe("the sidebar's own room", () => {
    it("is animated by the frame, not by a stylesheet transition", async () => {
      // It used to close on Tailwind's `transition-all`: a different duration
      // and curve than the content beside it, and `all`, so colour and
      // z-index animated too.
      renderFrame("right")
      const slot = sidebarSlot() as HTMLElement

      await waitFor(() => expect(slot.style.width).toBe("240px"))
      expect(slot.className).not.toContain("transition-all")
    })
  })

  describe("the main content", () => {
    it("is not layout-animated", async () => {
      // A FLIP over a box whose width changes is a scale, and motion only
      // corrects it for child motion components — so the whole application's
      // text stretched horizontally for the length of every sidebar toggle.
      // The padding beneath already moves this, on the frame's clock.
      renderFrame("right")
      const content = document.getElementById("content") as HTMLElement

      await waitFor(() => expect(content).toBeInTheDocument())
      expect(content.style.transform).toBe("")
    })
  })
})
