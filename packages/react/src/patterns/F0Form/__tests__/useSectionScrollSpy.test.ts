import { act } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import {
  getActiveSectionId,
  SCROLL_SPY_TOP_OFFSET,
  type SectionTop,
  useSectionScrollSpy,
} from "../useSectionScrollSpy"

const sec = (id: string, top: number): SectionTop => ({ id, top })

describe("getActiveSectionId", () => {
  const offset = SCROLL_SPY_TOP_OFFSET

  it("returns undefined when there are no sections", () => {
    expect(getActiveSectionId([], offset, false)).toBeUndefined()
  })

  it("returns the only section when there is a single one", () => {
    expect(getActiveSectionId([sec("only", 500)], offset, false)).toBe("only")
  })

  it("keeps the first section active before any scroll (all below the line)", () => {
    const sections = [sec("a", 8), sec("b", 400), sec("c", 800)]
    expect(getActiveSectionId(sections, offset, false)).toBe("a")
  })

  it("activates the section whose top currently sits at the activation line", () => {
    // b scrolled just above the line, c still below it -> b is active
    const sections = [sec("a", -300), sec("b", -10), sec("c", 200)]
    expect(getActiveSectionId(sections, offset, false)).toBe("b")
  })

  it("activates the last section once its top passes the line", () => {
    const sections = [sec("a", -600), sec("b", -300), sec("c", -8)]
    expect(getActiveSectionId(sections, offset, false)).toBe("c")
  })

  it("treats a top within the sub-pixel epsilon of the line as active", () => {
    // top === offset + 1 is within the 1px activation epsilon
    const sections = [sec("a", -100), sec("b", offset + 1), sec("c", 900)]
    expect(getActiveSectionId(sections, offset, false)).toBe("b")
  })

  it("does not activate a section still clearly below the line", () => {
    const sections = [sec("a", -100), sec("b", offset + 2), sec("c", 900)]
    expect(getActiveSectionId(sections, offset, false)).toBe("a")
  })

  it("forces the last section active at the bottom even if its top never reaches the line", () => {
    // Short final section: c's top is well below the line, but we are at the
    // bottom of the container so it must still be reachable/active.
    const sections = [sec("a", -600), sec("b", -300), sec("c", 200)]
    expect(getActiveSectionId(sections, offset, false)).toBe("b")
    expect(getActiveSectionId(sections, offset, true)).toBe("c")
  })
})

// ---------------------------------------------------------------------------
// Hook behavior (mocked layout — jsdom has no real layout engine)
// ---------------------------------------------------------------------------

const IDS = ["a", "b", "c"]
const getElementId = (id: string) => `forms.test.${id}`

const makeRect = (top: number): DOMRect =>
  ({
    top,
    bottom: top + 300,
    left: 0,
    right: 0,
    width: 0,
    height: 300,
    x: 0,
    y: top,
    toJSON: () => ({}),
  }) as DOMRect

interface Harness {
  container: HTMLDivElement
  tops: Record<string, number>
  setScrollTop: (value: number) => void
}

function mountDom(): Harness {
  const container = document.createElement("div")
  container.id = "container"
  document.body.appendChild(container)

  Object.defineProperty(container, "clientHeight", {
    value: 300,
    configurable: true,
  })
  Object.defineProperty(container, "scrollHeight", {
    value: 900,
    configurable: true,
  })
  let scrollTop = 0
  Object.defineProperty(container, "scrollTop", {
    get: () => scrollTop,
    set: (v: number) => {
      scrollTop = v
    },
    configurable: true,
  })
  container.getBoundingClientRect = () => makeRect(0)

  const tops: Record<string, number> = { a: 0, b: 300, c: 600 }
  for (const id of IDS) {
    const el = document.createElement("div")
    el.id = getElementId(id)
    el.getBoundingClientRect = () => makeRect(tops[id]!)
    container.appendChild(el)
  }

  return {
    container,
    tops,
    setScrollTop: (value: number) => {
      scrollTop = value
    },
  }
}

function renderSpy(container: HTMLDivElement) {
  const containerRef: React.RefObject<HTMLElement | null> = {
    current: container,
  }
  return zeroRenderHook(() =>
    useSectionScrollSpy({
      sectionIds: IDS,
      getElementId,
      containerRef,
      enabled: true,
    })
  )
}

describe("useSectionScrollSpy", () => {
  beforeEach(() => {
    // Run rAF synchronously so recompute happens within the same act().
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0)
      return 0
    })
    vi.stubGlobal("cancelAnimationFrame", () => {})
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    document.body.innerHTML = ""
  })

  it("starts on the first section", () => {
    const { container } = mountDom()
    const { result } = renderSpy(container)
    expect(result.current.activeSection).toBe("a")
  })

  it("updates the active section on manual scroll", () => {
    const harness = mountDom()
    const { result } = renderSpy(harness.container)

    act(() => {
      // Scroll so section b sits at the top of the viewport.
      harness.tops.a = -300
      harness.tops.b = 0
      harness.tops.c = 300
      harness.container.dispatchEvent(new Event("scroll"))
    })

    expect(result.current.activeSection).toBe("b")
  })

  it("mutes spy during a programmatic scroll and resumes on scrollend", () => {
    const harness = mountDom()
    const { result } = renderSpy(harness.container)

    act(() => {
      result.current.beginProgrammaticScroll()
    })

    act(() => {
      // A scroll fired mid-animation must NOT move the highlight.
      harness.tops.a = -600
      harness.tops.b = -300
      harness.tops.c = 0
      harness.container.dispatchEvent(new Event("scroll"))
    })
    expect(result.current.activeSection).toBe("a")

    act(() => {
      harness.container.dispatchEvent(new Event("scrollend"))
    })
    expect(result.current.activeSection).toBe("c")
  })

  it("activates the last section when scrolled to the bottom", () => {
    const harness = mountDom()
    const { result } = renderSpy(harness.container)

    act(() => {
      // At the bottom, c's top is still below the line but must win.
      harness.setScrollTop(600)
      harness.tops.a = -600
      harness.tops.b = -300
      harness.tops.c = 200
      harness.container.dispatchEvent(new Event("scroll"))
    })

    expect(result.current.activeSection).toBe("c")
  })
})
