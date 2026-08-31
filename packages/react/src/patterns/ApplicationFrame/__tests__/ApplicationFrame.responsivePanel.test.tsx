import { panelWidths } from "@factorialco/f0-core"
import { act } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { ApplicationFrame } from ".."

const { max: MAX } = panelWidths

// Every media query answers `false` in this environment (see vitest.setup),
// so the viewport-based rules are all off. Whatever these tests observe comes
// from the MEASURED frame — which is the half that did not exist before.
let frameWidth = 0

const setFrameWidth = (width: number) => {
  frameWidth = width
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

/** The box the frame measures and pads — the parent of `<main id="content">`. */
const mainArea = (): HTMLElement => {
  const element = document.getElementById("content")?.parentElement
  if (!element) throw new Error("main area not found")
  return element
}

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
        return {
          x: 0,
          y: 0,
          top: 0,
          left: 0,
          right: frameWidth,
          bottom: 900,
          width: frameWidth,
          height: 900,
          toJSON: () => ({}),
        } as DOMRect
      }
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
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

  it("holds the panel back so the content keeps its minimum", async () => {
    setFrameWidth(1200)
    renderFrame("left")
    await openChat()
    await act(async () => {
      screen.getByText("widen-to-max").click()
    })

    // 1200 - 560: the panel yields rather than crush the content.
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe("640px"))
  })

  it("splits the frame evenly when neither minimum fits", async () => {
    setFrameWidth(1000)
    renderFrame("left")
    await openChat()
    await act(async () => {
      screen.getByText("widen-to-max").click()
    })

    await waitFor(() => expect(mainArea().style.paddingLeft).toBe("500px"))
  })

  it("stops splitting a frame too narrow to seat both", async () => {
    // The case that used to leave 60px of content: a left-docked panel beside
    // a locked sidebar on a 1024px window.
    setFrameWidth(772)
    renderFrame("left")
    await openChat()
    await act(async () => {
      screen.getByText("widen-to-max").click()
    })

    // Overlay: the panel covers the frame, so nothing is reserved.
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe("0px"))
    expect(mainArea().style.paddingRight).toBe("0px")
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

    // Narrow it: the reservation shrinks...
    setFrameWidth(1000)
    await remeasure()
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe("500px"))

    // ...but the preference was not overwritten, so widening restores it.
    setFrameWidth(1600)
    await remeasure()
    await waitFor(() => expect(mainArea().style.paddingLeft).toBe(`${MAX}px`))
  })
})
