import { beforeEach, describe, expect, it } from "vitest"

import type { CanvasContent } from "@/kits/ai/canvas/types"
import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { DEFAULT_CHAT_WIDTH } from "@/kits/ai/F0AiChat/utils/constants"
import {
  fireEvent,
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

// Wide enough to be unmistakable against DEFAULT_CHAT_WIDTH (360).
const RESIZED_CHAT_WIDTH = 500

const Probe = () => {
  const { openCanvas, setChatWidth, isResizing } = useAiChat()
  return (
    <div>
      <button type="button" onClick={() => openCanvas(DOCKED_NOTE)}>
        open-docked
      </button>
      <button type="button" onClick={() => openCanvas(FULLSCREEN_NOTE)}>
        open-fullscreen
      </button>
      <button type="button" onClick={() => setChatWidth(RESIZED_CHAT_WIDTH)}>
        widen-chat
      </button>
      <span>resizing:{String(isResizing)}</span>
    </div>
  )
}

const renderFrame = (
  side?: "left" | "right",
  { resizable }: { resizable?: boolean } = {}
) =>
  render(
    <ApplicationFrame
      ai={{
        enabled: true,
        ...(side ? { side } : {}),
        ...(resizable ? { resizable } : {}),
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

// The inset animates, so an assertion has to wait for a settled value: an
// unwritten edge reads as "" and an in-flight one as some fraction of the
// target. Assert the exact px so a wrong-but-nonzero inset can't pass.
const waitForEdge = (edge: "left" | "right", px: number) =>
  waitFor(() => expect(canvasContainer().style[edge]).toBe(`${px}px`))

const waitForReservedEdge = (edge: "left" | "right") =>
  waitForEdge(edge, DEFAULT_CHAT_WIDTH)

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

  it("animates the inset away when open content becomes fullscreen", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("open-docked"))
    await waitForReservedEdge("right")

    // The canvas stays mounted across this swap (content is non-null
    // throughout), so this is the one path that actually animates rather than
    // mounting at its target — motion seeds `initial` from `animate` on mount.
    await userEvent.click(screen.getByText("open-fullscreen"))
    await waitForFlushEdge("right")

    // ...and back, so a one-way write can't pass.
    await userEvent.click(screen.getByText("open-docked"))
    await waitForReservedEdge("right")
  })

  it("tracks the chat width while resizable", async () => {
    renderFrame(undefined, { resizable: true })
    await userEvent.click(screen.getByText("open-docked"))
    await waitForReservedEdge("right")

    await userEvent.click(screen.getByText("widen-chat"))
    await waitForEdge("right", RESIZED_CHAT_WIDTH)
  })

  it("broadcasts the handle drag so the frame can track it 1:1", async () => {
    // The canvas inset drops its transition while the handle is being dragged
    // (the chat's own width is already instant then), so the drag has to reach
    // AiChatStateProvider — with it local to ChatWindow the frame cannot see
    // it, and the canvas edge eases 300ms behind the cursor on every frame.
    renderFrame(undefined, { resizable: true })
    // The handle only exists once the panel is open and docked (not fullscreen).
    await userEvent.click(screen.getByText("open-docked"))
    await waitForReservedEdge("right")
    expect(screen.getByText("resizing:false")).toBeInTheDocument()

    const handle = await waitFor(() => {
      const node = document.querySelector<HTMLElement>(".cursor-ew-resize")
      if (!node) throw new Error("resize handle not found")
      return node
    })

    fireEvent.mouseDown(handle, { clientX: 800 })
    expect(screen.getByText("resizing:true")).toBeInTheDocument()

    fireEvent.mouseUp(document)
    expect(screen.getByText("resizing:false")).toBeInTheDocument()
  })
})
