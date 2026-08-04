import { afterEach, describe, expect, it } from "vitest"

import { resolveChartTheme } from "../utils/theme"

// ---------------------------------------------------------------------------
// `containerBackground` — the surface a chart actually sits on, used when the
// chart paints its own background (e.g. the hairline between stacked segments).
// ---------------------------------------------------------------------------

function mount(...backgrounds: (string | undefined)[]) {
  let parent: HTMLElement = document.body
  for (const background of backgrounds) {
    const element = document.createElement("div")
    if (background !== undefined) {
      element.style.backgroundColor = background
    }
    parent.appendChild(element)
    parent = element
  }
  return parent
}

afterEach(() => {
  document.body.replaceChildren()
})

describe("resolveChartTheme — containerBackground", () => {
  it("falls back to the page token when nothing paints a background", () => {
    const theme = resolveChartTheme(mount(undefined, undefined))
    expect(theme.colors.containerBackground).toBe(theme.colors.background)
  })

  it("falls back to the page token when no element is given", () => {
    const theme = resolveChartTheme(null)
    expect(theme.colors.containerBackground).toBe(theme.colors.background)
  })

  it("uses the element's own background when it has one", () => {
    const theme = resolveChartTheme(mount("rgb(10, 20, 30)"))
    expect(theme.colors.containerBackground).toBe("rgb(10, 20, 30)")
  })

  it("walks up to the nearest ancestor that paints one", () => {
    const theme = resolveChartTheme(mount("rgb(10, 20, 30)", undefined))
    expect(theme.colors.containerBackground).toBe("rgb(10, 20, 30)")
  })

  it("stops at the nearest surface rather than the outermost one", () => {
    // A tinted card inside a page wrapper — the card wins.
    const theme = resolveChartTheme(
      mount("rgb(1, 1, 1)", "rgb(2, 2, 2)", undefined)
    )
    expect(theme.colors.containerBackground).toBe("rgb(2, 2, 2)")
  })

  it("skips fully transparent backgrounds", () => {
    const theme = resolveChartTheme(
      mount("rgb(10, 20, 30)", "rgba(0, 0, 0, 0)")
    )
    expect(theme.colors.containerBackground).toBe("rgb(10, 20, 30)")
  })

  it("takes a translucent surface at face value", () => {
    // Blending against what sits beneath is overkill for a hairline.
    const theme = resolveChartTheme(mount("rgba(10, 20, 30, 0.5)"))
    expect(theme.colors.containerBackground).toBe("rgba(10, 20, 30, 0.5)")
  })

  it("leaves the page-level background token untouched", () => {
    const theme = resolveChartTheme(mount("rgb(10, 20, 30)"))
    expect(theme.colors.background).not.toBe("rgb(10, 20, 30)")
  })
})
