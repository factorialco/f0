import "@testing-library/jest-dom/vitest"
import React from "react"
import { describe, expect, it } from "vitest"
import { screen, zeroRender } from "@/testing/test-utils"
import { StandardLayout } from ".."
const _ = React

/**
 * jsdom lays nothing out, so these read the classes rather than the geometry.
 * An `overflow` box is a scrollport for every `position: sticky` descendant
 * whether or not it has a scroll range, and a rail pinned against one that
 * cannot scroll travels with the content instead of holding still. The
 * behaviour is measured in `F0FormInlinePerSection`'s
 * `StickySectionsRailInStandardLayout`.
 */
describe("StandardLayout", () => {
  const boxes = () => {
    const section = screen.getByTestId("layout")
    const inner = section.firstElementChild
    expect(inner).not.toBeNull()
    return [section, inner as HTMLElement]
  }

  it("declares no overflow on either of its boxes", () => {
    zeroRender(
      <StandardLayout data-testid="layout">
        <p>Content</p>
      </StandardLayout>
    )

    for (const box of boxes()) {
      expect(box.className).not.toMatch(/(^|\s|:)overflow-/)
    }
  })

  it("keeps declaring none when a consumer adds a class", () => {
    zeroRender(
      <StandardLayout data-testid="layout" variant="narrow" className="bg-red">
        <p>Content</p>
      </StandardLayout>
    )

    const [section, inner] = boxes()
    expect(section.className).toContain("bg-red")
    expect(inner.className).toContain("max-w-screen-lg")
    for (const box of [section, inner]) {
      expect(box.className).not.toMatch(/(^|\s|:)overflow-/)
    }
  })
})
