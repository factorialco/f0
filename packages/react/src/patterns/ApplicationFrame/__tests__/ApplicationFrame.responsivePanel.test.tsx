import { panelWidths } from "@factorialco/f0-core"
import { act } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { ApplicationFrame } from ".."

const { max: MAX } = panelWidths

// Every media query answers `false` in this environment (see vitest.setup),
// so the viewport-based rules are all off and the pointer reads as fine.
// Whatever these tests observe comes from the MEASURED frame — which is the
// half that did not exist before. `setCoarsePointer` opts a test out.
let frameWidth = 0

const setFrameWidth = (width: number) => {
  frameWidth = width
}

const mediaStub = (matches: (query: string) => boolean) =>
  ((query: string) => ({
    matches: matches(query),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  })) as unknown as typeof window.matchMedia

/**
 * Answer `(pointer: coarse)` and the compact-viewport query as a tablet would.
 *
 * Assigned directly rather than through `vi.stubGlobal`: the suite-wide
 * `matchMedia` in `vitest.setup` is itself a stubbed global, so unstubbing
 * would take that with it and leave the query undefined.
 */
const setCoarsePointer = () => {
  window.matchMedia = mediaStub(
    (query) => /pointer:\s*coarse/.test(query) || /max-width/.test(query)
  )
}

const resetPointer = () => {
  window.matchMedia = mediaStub(() => false)
}

const Probe = () => {
  const { setOpen, setChatWidth, effectiveChatWidth } = useAiChat()
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        open-chat
      </button>
      <button type="button" onClick={() => setChatWidth(MAX)}>
        widen-to-max
      </button>
      <span>effective:{effectiveChatWidth}</span>
    </div>
  )
}

const renderFrame = (side: "left" | "right" = "left") =>
  render(
    <ApplicationFrame
      ai={{
        enabled: true,
        side,
        resizable: true,
        chatMessages: <div>AI CHAT</div>,
      }}
      sidebar={<div>SIDEBAR</div>}
    >
      <Probe />
    </ApplicationFrame>
  )

/** The box the frame pads — the parent of `<main id="content">`. */
const mainArea = (): HTMLElement => {
  const element = document.getElementById("content")?.parentElement
  if (!element) throw new Error("main area not found")
  return element
}

/**
 * The frame measures the ROW holding the nav and the content, and subtracts
 * the nav's own room — measuring the content side directly would mean reading
 * a new width on every frame of the sidebar's animation.
 *
 * So the row has to report the frame under test PLUS the nav's slot. The
 * sidebar stays locked throughout this file (every media query answers
 * `false`), which makes the frame these tests are written against exactly
 * `frameWidth`. Harness only — no expectation below changes.
 */
const SIDEBAR_SLOT_WIDTH = 240

const isMainArea = (element: HTMLElement): boolean =>
  document.getElementById("content")?.parentElement === element

/** Re-runs the frame's publish path with the current stubbed width. */
const remeasure = async () => {
  await act(async () => {
    window.dispatchEvent(new Event("resize"))
    // The publish is rAF-coalesced.
    await new Promise((resolve) => requestAnimationFrame(resolve))
  })
}

const openChat = async () => {
  await act(async () => {
    screen.getByText("open-chat").click()
  })
  await remeasure()
}

describe("ApplicationFrame responsive side panel", () => {
  beforeEach(() => {
    localStorage.clear()
    frameWidth = 0
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function (this: HTMLElement) {
        const width = isMainArea(this)
          ? frameWidth
          : frameWidth + SIDEBAR_SLOT_WIDTH
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
    // Without this the coarse pointer leaks into whatever test runs next.
    resetPointer()
  })

  it("reserves the full preferred width when the frame has room", async () => {
    setFrameWidth(1600)
    renderFrame("left")
    await openChat()
    await act(async () => {
      screen.getByText("widen-to-max").click()
    })

    // 1600 - 712 still leaves the content well over its minimum, so nothing
    // is taken away from the panel.
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe(`${MAX}px`))
    expect(screen.getByText(`effective:${MAX}`)).toBeInTheDocument()
  })

  it("puts the panel at its minimum on a narrow frame, by default", async () => {
    // Nobody has dragged anything, so the content is served first: 900 - 640
    // is under the panel's own minimum, so it takes 300 and the content keeps
    // the remaining 600. An even split would have given it only 450.
    setFrameWidth(900)
    renderFrame("left")
    await openChat()

    await waitFor(() => expect(mainArea().style.paddingLeft).toBe("300px"))
  })

  it("honours a width the user dragged, up to the content's hard floor", async () => {
    // The same frame, but now with an explicit preference. 712 is more than
    // the frame can give, so it stops where the content would drop below 400.
    setFrameWidth(900)
    renderFrame("left")
    await openChat()
    await act(async () => {
      screen.getByText("widen-to-max").click()
    })

    await waitFor(() => expect(mainArea().style.paddingLeft).toBe("500px"))
  })

  it("stops splitting a frame too narrow to read as two columns", async () => {
    setFrameWidth(640)
    renderFrame("left")
    await openChat()
    await act(async () => {
      screen.getByText("widen-to-max").click()
    })

    // Overlay: the panel covers the frame, so nothing is reserved.
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe("0px"))
    expect(mainArea().style.paddingRight).toBe("0px")
  })

  it("splits a laptop window at half the screen", async () => {
    // 756 is half of a 14" MacBook Pro at its default scaling. This used to
    // overlay — the panel swallowed the page on a perfectly ordinary window.
    setFrameWidth(756)
    renderFrame("right")
    await openChat()

    // The panel takes its minimum and the content keeps 456 — an even split
    // would have left it 378.
    await waitFor(() => expect(mainArea().style.paddingRight).toBe("300px"))
  })

  it("still splits at the width that used to be the cut-off", async () => {
    // The "More Space" scaling puts half the screen at exactly 900, which the
    // old `max-width: 900px` rule caught by a hair.
    setFrameWidth(900)
    renderFrame("right")
    await openChat()

    await waitFor(() => {
      const reserved = Number.parseFloat(mainArea().style.paddingRight || "0")
      expect(reserved).toBeGreaterThan(0)
    })
  })

  it("keeps the drawer on a touch device at the same width", async () => {
    // Same 768 frame, coarse pointer: a tablet wants the drawer, not two
    // columns nobody can hit.
    setCoarsePointer()
    setFrameWidth(768)
    renderFrame("right")
    await openChat()

    await waitFor(() => expect(mainArea().style.paddingRight).toBe("0px"))
    expect(mainArea().style.paddingLeft).toBe("0px")
  })

  it("never reserves more than the frame has", async () => {
    // The old behaviour reserved 712 here regardless, which overflowed the
    // frame and left the content at zero width.
    setFrameWidth(900)
    renderFrame("left")
    await openChat()
    await act(async () => {
      screen.getByText("widen-to-max").click()
    })

    await waitFor(() => {
      const reserved = Number.parseFloat(mainArea().style.paddingLeft || "0")
      expect(reserved).toBeLessThan(900)
    })
  })

  it("remembers the preferred width across a narrow window", async () => {
    setFrameWidth(1600)
    renderFrame("left")
    await openChat()
    await act(async () => {
      screen.getByText("widen-to-max").click()
    })
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe(`${MAX}px`))

    // Narrow it: the reservation shrinks to what the content can spare...
    setFrameWidth(1000)
    await remeasure()
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe("600px"))

    // ...but the preference was not overwritten, so widening restores it.
    setFrameWidth(1600)
    await remeasure()
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe(`${MAX}px`))
  })
})
