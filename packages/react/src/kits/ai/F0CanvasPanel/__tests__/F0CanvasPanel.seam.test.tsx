import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import type { CanvasContent } from "../../canvas/types"
import { F0CanvasPanel } from "../F0CanvasPanel"

// "note" is not part of the SDS `CanvasContent` union — hosts register their own
// entities and the panel matches on the `type` string at runtime, so widen here
// the same way the consuming stories do.
const asContent = (content: Record<string, unknown>) =>
  content as unknown as CanvasContent

const noteEntity = {
  type: "note",
  renderHeader: () => <div>NOTE HEADER</div>,
  renderContent: () => <div>NOTE BODY</div>,
}

const renderPanel = (
  content: Record<string, unknown>,
  side?: "left" | "right"
) =>
  render(
    <F0CanvasPanel
      content={asContent(content)}
      onClose={() => {}}
      entities={{ note: noteEntity }}
      {...(side ? { side } : {})}
    />
  )

// The `f1-special-page` backdrop is the element carrying the seam treatment —
// walk up from the rendered body to the one that has it.
const backdrop = (): HTMLElement => {
  let element: HTMLElement | null = screen.getByText("NOTE BODY")
  while (element && !element.className.includes("bg-f1-special-page")) {
    element = element.parentElement
  }
  if (!element) throw new Error("canvas backdrop not found")
  return element
}

describe("F0CanvasPanel seam", () => {
  it("leaves the chat-facing edge open when docked right", () => {
    renderPanel({ type: "note", title: "NOTE CANVAS" })

    // Chat on the right -> the right edge is the seam: no border, no rounding.
    // The left edge meets the frame, so it is finished.
    expect(backdrop().className).toContain("border-r-0")
    expect(backdrop().className).toContain("md:rounded-l-lg")
    expect(backdrop().className).toContain("md:pl-1")
  })

  it("mirrors the open edge when docked left", () => {
    renderPanel({ type: "note", title: "NOTE CANVAS" }, "left")

    expect(backdrop().className).toContain("border-l-0")
    expect(backdrop().className).toContain("md:rounded-r-lg")
    expect(backdrop().className).toContain("md:pr-1")
  })

  it("finishes both edges for fullscreen content", () => {
    renderPanel({ type: "note", title: "NOTE CANVAS", fullscreen: true })

    // Fullscreen covers the chat, so neither edge is a seam: both meet the
    // frame and get the same rounding, border and inset. A one-sided treatment
    // here reads as a card jammed against the viewport edge.
    const className = backdrop().className
    expect(className).toContain("md:rounded-lg")
    expect(className).toContain("md:px-1")
    expect(className).not.toContain("border-r-0")
    expect(className).not.toContain("border-l-0")
  })

  it("finishes both edges for fullscreen content docked left too", () => {
    renderPanel(
      { type: "note", title: "NOTE CANVAS", fullscreen: true },
      "left"
    )

    // `side` is irrelevant once there is no chat beside the canvas.
    const className = backdrop().className
    expect(className).toContain("md:rounded-lg")
    expect(className).toContain("md:px-1")
    expect(className).not.toContain("border-l-0")
    expect(className).not.toContain("border-r-0")
  })
})
