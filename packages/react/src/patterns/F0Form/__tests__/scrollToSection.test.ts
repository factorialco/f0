import { describe, expect, it, vi } from "vitest"
import { canScroll, scrollSectionIntoView } from "../scrollToSection"

function makeElement(sizes: { scrollHeight: number; clientHeight: number }) {
  const element = document.createElement("div")
  Object.defineProperty(element, "scrollHeight", { value: sizes.scrollHeight })
  Object.defineProperty(element, "clientHeight", { value: sizes.clientHeight })
  return element
}

describe("canScroll", () => {
  it("is false for a container that grew to fit its content", () => {
    expect(
      canScroll(makeElement({ scrollHeight: 900, clientHeight: 900 }))
    ).toBe(false)
  })

  it("ignores a sub-pixel rounding difference", () => {
    expect(
      canScroll(makeElement({ scrollHeight: 901, clientHeight: 900 }))
    ).toBe(false)
  })

  it("is true once the container has a real scroll range", () => {
    expect(
      canScroll(makeElement({ scrollHeight: 902, clientHeight: 900 }))
    ).toBe(true)
  })
})

describe("scrollSectionIntoView", () => {
  it("scrolls the container when it has a scroll range", () => {
    const container = makeElement({ scrollHeight: 2000, clientHeight: 400 })
    container.scrollTo = vi.fn()
    Object.defineProperty(container, "offsetTop", { value: 40 })

    const anchor = document.createElement("div")
    Object.defineProperty(anchor, "offsetTop", { value: 640 })
    anchor.scrollIntoView = vi.fn()

    scrollSectionIntoView(container, anchor)

    expect(container.scrollTo).toHaveBeenCalledWith({
      top: 600,
      behavior: "smooth",
    })
    expect(anchor.scrollIntoView).not.toHaveBeenCalled()
  })

  it("falls back to the anchor when the container cannot scroll", () => {
    const container = makeElement({ scrollHeight: 2000, clientHeight: 2000 })
    container.scrollTo = vi.fn()

    const anchor = document.createElement("div")
    anchor.scrollIntoView = vi.fn()

    scrollSectionIntoView(container, anchor)

    expect(container.scrollTo).not.toHaveBeenCalled()
    expect(anchor.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    })
  })

  it("falls back to the anchor when there is no container", () => {
    const anchor = document.createElement("div")
    anchor.scrollIntoView = vi.fn()

    scrollSectionIntoView(null, anchor)

    expect(anchor.scrollIntoView).toHaveBeenCalled()
  })
})
