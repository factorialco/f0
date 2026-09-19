import { describe, expect, it } from "vitest"
import { listIconTint } from "./ListIcon"

describe("listIconTint", () => {
  it("paints a palette name with its own literal classes", () => {
    const tint = listIconTint("viridian")

    expect(tint?.className).toContain("colors.viridian.50")
    // A palette hue needs no runtime value, so it carries no inline style.
    expect(tint?.style).toBeUndefined()
  })

  it("carries a custom hex through a CSS variable the dark step can reuse", () => {
    const tint = listIconTint("#4F46E5")

    expect(tint?.style).toEqual({ "--list-icon-tint": "79 70 229" })
    expect(tint?.className).toContain("var(--list-icon-tint)")
  })

  it("expands a three-digit hex the way CSS expands it", () => {
    expect(listIconTint("#4F6")?.style).toEqual({
      "--list-icon-tint": "68 255 102",
    })
  })

  // Falling back to the plain glyph beats painting the tile black.
  it("refuses a hex it cannot read", () => {
    expect(listIconTint("#nothex")).toBeUndefined()
    expect(listIconTint("#12")).toBeUndefined()
  })
})
