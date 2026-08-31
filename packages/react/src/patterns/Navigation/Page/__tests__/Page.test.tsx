import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { Page } from "../index"

/**
 * The page frame used to be a `ring-inset` on the page element itself. An inset
 * ring is a box-shadow, painted in the element's own background layer and
 * therefore *underneath* every descendant, so any full-bleed child reaching the
 * edge with an opaque background erased it — a table's header cells and its
 * sticky rows do exactly that.
 *
 * jsdom does not paint, so no test can observe the erased border directly.
 * These pin the structural property that makes the paint order right instead:
 * the frame is an overlay stacked above the content, and the page itself no
 * longer carries a ring for content to cover.
 */
describe("Page frame", () => {
  const renderPage = () => {
    render(
      <Page>
        <div data-testid="content">Content</div>
      </Page>
    )
    const contentWrapper = screen.getByTestId("content").parentElement!
    const page = contentWrapper.parentElement!
    const frame = page.querySelector<HTMLElement>(":scope > [aria-hidden]")
    return { page, contentWrapper, frame }
  }

  it("does not paint the frame on the page element, where content covers it", () => {
    const { page } = renderPage()

    expect(page.className).not.toMatch(/\bring-1\b/)
    expect(page.className).not.toMatch(/\bring-inset\b/)
  })

  it("paints the frame in a dedicated overlay", () => {
    const { frame } = renderPage()

    expect(frame).not.toBeNull()
    expect(frame!.className).toMatch(/\bring-1\b/)
    expect(frame!.className).toMatch(/\bring-inset\b/)
    expect(frame!.className).toMatch(/\babsolute\b/)
    expect(frame!.className).toMatch(/\binset-0\b/)
  })

  it("stacks the overlay above the content so a flush child cannot cover it", () => {
    const { page, contentWrapper, frame } = renderPage()

    // Both halves matter: a later sibling loses to an earlier one that raises
    // itself, and a z-index resolves against nothing without a positioned page.
    expect(page.className).toMatch(/\brelative\b/)
    expect(frame!.className).toMatch(/\bz-10\b/)

    const order = [...page.children]
    expect(order.indexOf(frame!)).toBeGreaterThan(order.indexOf(contentWrapper))
  })

  it("keeps the overlay inert so it cannot swallow clicks on the content", () => {
    const { frame } = renderPage()

    expect(frame!.className).toMatch(/\bpointer-events-none\b/)
  })

  it("follows the page's rounded corners", () => {
    const { frame } = renderPage()

    expect(frame!.className).toContain("rounded-[inherit]")
  })
})
