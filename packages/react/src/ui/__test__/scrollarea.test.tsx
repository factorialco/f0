import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { ScrollArea } from "../scrollarea"

const getViewport = (container: HTMLElement) =>
  container.querySelector("[data-scroll-container]")

describe("ScrollArea", () => {
  it("renders a keyboard-focusable viewport by default", () => {
    const { container } = render(
      <ScrollArea>
        <p>Content</p>
      </ScrollArea>
    )

    expect(getViewport(container)).toHaveAttribute("tabindex", "0")
  })

  it("removes the viewport from the tab order when focusableViewport is false", () => {
    const { container } = render(
      <ScrollArea focusableViewport={false}>
        <p>Content</p>
      </ScrollArea>
    )

    expect(getViewport(container)).not.toHaveAttribute("tabindex")
  })
})
