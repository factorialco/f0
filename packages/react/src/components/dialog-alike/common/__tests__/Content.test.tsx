import { fireEvent, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { DialogWrapperProvider } from "../DialogWrapperProvider"
import { Content } from "../Content"

const renderContent = (children: React.ReactNode) =>
  render(
    <DialogWrapperProvider
      isOpen
      onClose={() => {}}
      position="center"
      portalContainer={null}
    >
      <Content>{children}</Content>
    </DialogWrapperProvider>
  )

describe("Content", () => {
  it("lets its flex-1 wrapper shrink below content size so the inner ScrollArea can scroll instead of clipping", () => {
    const { container } = renderContent(<div>Step content</div>)

    const wrapper = container.querySelector(".flex-1.flex-col.overflow-hidden")
    expect(wrapper).not.toBeNull()
    expect(wrapper).toHaveClass("min-h-0")
  })

  it("hides the bottom scroll shadow only once the viewport has actually reached the end of the content", async () => {
    const { container } = renderContent(
      <div data-testid="last-field">Last field</div>
    )

    const viewport = container.querySelector<HTMLDivElement>(
      "[data-scroll-container]"
    )
    expect(viewport).not.toBeNull()

    // jsdom never lays out real content, so scrollHeight/clientHeight are
    // always 0. Fake them to simulate a step tall enough to overflow, with
    // "last-field" past the fold — mirrors the it_management form that
    // triggered the original clipping bug.
    Object.defineProperty(viewport, "scrollHeight", { value: 1000 })
    Object.defineProperty(viewport, "clientHeight", { value: 300 })
    Object.defineProperty(viewport, "scrollTop", {
      value: 0,
      writable: true,
    })
    fireEvent.scroll(viewport!)

    const bottomShadow = () => container.querySelector(".bottom-0.h-4")

    await waitFor(() => expect(bottomShadow()).not.toBeNull())

    viewport!.scrollTop = 700
    fireEvent.scroll(viewport!)

    await waitFor(() => expect(bottomShadow()).toBeNull())
  })
})
