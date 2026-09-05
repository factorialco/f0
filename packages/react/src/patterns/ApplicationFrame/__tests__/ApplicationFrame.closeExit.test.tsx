import { MotionGlobalConfig } from "motion"
import { act } from "react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { ApplicationFrame } from ".."

/**
 * The one file that lets animations actually run.
 *
 * Everywhere else `MotionGlobalConfig.skipAnimations` is on and durations are
 * not observable, which is why the rest of this work is asserted through pure
 * resolvers. But the defect here was never in a resolver: it was that the
 * resolver's INPUT could not reach it. `AnimatePresence` keeps the element from
 * the last render in which it was present, so an `exitStyle` computed from
 * `open` describes the state before the close, forever — and a close therefore
 * ran the swap's exit, which holds at full opacity and then vanishes in a
 * single frame. Only a real exit, sampled mid-flight, can tell the two apart.
 */
const Probe = () => {
  const { setOpen, setVisualizationMode, setPanelContent, clearPanelContent } =
    useAiChat()
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setPanelContent({ id: "conv", content: <div>CONVERSATION</div> })
        }
      >
        open-conv
      </button>
      <button type="button" onClick={() => setVisualizationMode("fullscreen")}>
        go-fullscreen
      </button>
      <button
        type="button"
        onClick={() => {
          // Exactly what a host's `onClose` does — and the reason the bug
          // existed: both land in the same batch.
          clearPanelContent()
          setOpen(false)
        }}
      >
        close-conv
      </button>
      <button type="button" onClick={() => clearPanelContent()}>
        swap-to-ai
      </button>
    </div>
  )
}

const renderFrame = () =>
  render(
    <ApplicationFrame
      ai={{
        enabled: true,
        side: "right",
        panelContentSide: "left",
        resizable: true,
        chatMessages: <div>AI CHAT</div>,
      }}
      sidebar={<div>SIDEBAR</div>}
    >
      <Probe />
    </ApplicationFrame>
  )

const click = async (label: string) => {
  await act(async () => {
    screen.getByText(label).click()
  })
}

const wait = async (ms: number) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, ms))
  })
}

/** The docked window's own card — the element that carries the exit. */
const windowCard = (): HTMLElement | null =>
  document.querySelector<HTMLElement>("[class*='pointer-events-auto']")

const opacityOf = (element: HTMLElement | null): number =>
  Number.parseFloat(element?.style.opacity || "1")

/** How far the clip has closed, 0 (open) → 100 (gone). */
const clipProgress = (element: HTMLElement | null): number => {
  const match = /inset\(\s*[\d.]+\S*\s+([\d.]+)/.exec(
    element?.style.clipPath ?? ""
  )
  return match ? Number.parseFloat(match[1]) : 0
}

describe("closing a panel from fullscreen", () => {
  beforeEach(() => {
    localStorage.clear()
    MotionGlobalConfig.skipAnimations = false
  })

  afterEach(() => {
    MotionGlobalConfig.skipAnimations = true
  })

  it("takes itself off the screen instead of hanging and vanishing", async () => {
    renderFrame()
    await click("open-conv")
    await click("go-fullscreen")
    // Let the entrance land, so what follows is only the exit.
    await wait(350)
    expect(opacityOf(windowCard())).toBe(1)

    await click("close-conv")
    await wait(90)

    const leaving = windowCard()
    expect(leaving).not.toBeNull()
    // Both of these stayed put with the swap's exit: opacity frozen at
    // whatever it was, and the clip fully open — a window sitting there at
    // full strength, waiting to be deleted in one frame.
    expect(opacityOf(leaving)).toBeLessThan(1)
    expect(clipProgress(leaving)).toBeGreaterThan(0)
  })

  it("leaves at the size it was, without shrinking back to a column", async () => {
    // The other reported defect. A host closes by clearing its content and
    // closing the panel in the same batch, so `hasPanelContent` — which is
    // what tells the frame which container may fill the frame — went false
    // while the window was still very much on screen. Its container reverted
    // to the docked width and animated there over the exit, dragging a full
    // re-layout of the transcript through every frame.
    renderFrame()
    await click("open-conv")
    await click("go-fullscreen")
    await wait(350)
    const container = windowCard()?.parentElement
    expect(container?.style.width).toBe("100%")

    await click("close-conv")
    await wait(90)

    // Still the whole frame. Anything else means motion has been asked to
    // interpolate toward the docked width and has resolved `100%` to pixels.
    expect(container?.style.width).toBe("100%")
  })

  it("keeps holding still for a swap, where the content is covering it", async () => {
    // The other half of the rule. The `hold` exit has to survive: during a swap
    // the main content slides over this window, and a window that faded on its
    // own would be visible doing it.
    renderFrame()
    await click("open-conv")
    await wait(350)

    await click("swap-to-ai")
    await wait(90)

    const leaving = windowCard()
    expect(opacityOf(leaving)).toBe(1)
    expect(clipProgress(leaving)).toBe(0)
  })
})
