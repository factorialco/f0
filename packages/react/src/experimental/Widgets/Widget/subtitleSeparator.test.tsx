import { describe, expect, test } from "vitest"
import { zeroRender } from "@/testing/test-utils"
import { Widget } from "./index"

/**
 * A LINKED TITLE ALREADY SEPARATES ITSELF from the subtitle: it ends in a
 * chevron. Drawing the dot as well put two separators between them, reading as
 * a stray glyph — "Wellness programs › · Boosting workplace health".
 *
 * jsdom computes no layout, so the dot is found by the classes that draw it.
 */
describe("the widget header's separator dot", () => {
  const header = {
    title: "Wellness programs",
    subtitle: "Boosting workplace health",
  }

  const dotsIn = (container: HTMLElement) =>
    container.querySelectorAll(".rounded-full.bg-f1-foreground-secondary")
      .length

  test("separates a plain title from its subtitle", () => {
    const { container } = zeroRender(<Widget header={header}>Content</Widget>)

    expect(dotsIn(container)).toBe(1)
  })

  test("is dropped when the title is a link", () => {
    const { container } = zeroRender(
      <Widget header={{ ...header, link: { url: "/", title: "Go to link" } }}>
        Content
      </Widget>
    )

    expect(dotsIn(container)).toBe(0)
  })
})
