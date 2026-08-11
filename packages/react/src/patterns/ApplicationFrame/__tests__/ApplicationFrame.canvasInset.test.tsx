import { beforeEach, describe, expect, it } from "vitest"

import type { CanvasContent } from "@/kits/ai/canvas/types"
import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { ApplicationFrame } from ".."

// "note" is not part of the SDS `CanvasContent` union — hosts register their own
// entities and the panel matches on the `type` string at runtime, so widen here
// the same way the consuming stories do.
const asContent = (content: Record<string, unknown>) =>
  content as unknown as CanvasContent

const DOCKED_NOTE = asContent({ type: "note", title: "NOTE CANVAS" })
const FULLSCREEN_NOTE = asContent({
  type: "note",
  title: "NOTE CANVAS",
  fullscreen: true,
})

const noteEntity = {
  type: "note",
  renderHeader: () => <div>NOTE HEADER</div>,
  renderContent: () => <div>NOTE BODY</div>,
}

const Probe = () => {
  const { openCanvas } = useAiChat()
  return (
    <div>
      <button type="button" onClick={() => openCanvas(DOCKED_NOTE)}>
        open-docked
      </button>
      <button type="button" onClick={() => openCanvas(FULLSCREEN_NOTE)}>
        open-fullscreen
      </button>
    </div>
  )
}

const renderFrame = (side?: "left" | "right") =>
  render(
    <ApplicationFrame
      ai={{
        enabled: true,
        ...(side ? { side } : {}),
        chatMessages: <div>AI CHAT</div>,
        canvasEntities: { note: noteEntity },
      }}
      sidebar={<div>SIDEBAR</div>}
    >
      <Probe />
    </ApplicationFrame>
  )

// The animated container is the positioned ancestor motion writes the inset
// onto — walk up from the rendered canvas body to the element carrying it.
const canvasContainer = (): HTMLElement => {
  let element: HTMLElement | null = screen.getByText("NOTE BODY")
  while (element && !element.className.includes("pointer-events-none")) {
    element = element.parentElement
  }
  if (!element) throw new Error("canvas container not found")
  return element
}

// The inset animates in, so an assertion has to wait for a settled value: an
// unwritten edge reads as "" and an in-flight one as some fraction of the
// target. Waiting on "> 0" (or on an explicit "0px") covers both.
const waitForReservedEdge = (edge: "left" | "right") =>
  waitFor(() => {
    const value = canvasContainer().style[edge]
    expect(value).not.toBe("")
    expect(Number.parseFloat(value)).toBeGreaterThan(0)
  })

const waitForFlushEdge = (edge: "left" | "right") =>
  waitFor(() => expect(canvasContainer().style[edge]).toBe("0px"))

describe("ApplicationFrame canvas inset", () => {
  beforeEach(() => {
    // `open` / `visualization-mode` persist to localStorage — reset between tests.
    localStorage.clear()
  })

  it("reserves the chat's width for docked canvas content", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("open-docked"))

    // Default behavior: the canvas hugs the seam and leaves the chat's width
    // free on that edge.
    await waitForReservedEdge("right")
  })

  it("reserves nothing for fullscreen canvas content", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("open-fullscreen"))

    await waitForFlushEdge("right")
  })

  it("keeps the chat mounted underneath a fullscreen canvas", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("open-fullscreen"))
    await waitForFlushEdge("right")

    // Covered, not closed: the conversation keeps its state, so dismissing the
    // canvas returns to exactly the step the user left.
    expect(screen.getByText("AI CHAT")).toBeInTheDocument()
  })

  it("insets the left edge instead when the panel docks left", async () => {
    renderFrame("left")
    await userEvent.click(screen.getByText("open-docked"))

    // Mirrored: the canvas sits opposite the panel, so a left-docked chat is
    // reserved on the left and the right edge stays flush.
    await waitForReservedEdge("left")
    await waitForFlushEdge("right")
  })

  it("clears the mirrored inset for fullscreen content too", async () => {
    renderFrame("left")
    await userEvent.click(screen.getByText("open-fullscreen"))

    await waitForFlushEdge("left")
    await waitForFlushEdge("right")
  })
})
