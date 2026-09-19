import { describe, expect, it } from "vitest"
import { Placeholder } from "@/icons/app"
import { zeroRender } from "@/testing/test-utils"
import { listIconTint, ListIconGlyph } from "./ListIcon"

const tintOf = (color: Parameters<typeof listIconTint>[0]) => {
  const tint = listIconTint(color)
  if (!tint) {
    throw new Error(`no tint for ${color}`)
  }
  return tint
}

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

describe("ListIconGlyph", () => {
  it.each([
    ["sm", "size-6"],
    ["md", "size-8"],
    ["lg", "size-10"],
  ] as const)("draws the same box F0AvatarIcon draws at %s", (size, box) => {
    const { container } = zeroRender(
      <ListIconGlyph icon={Placeholder} tint={tintOf("viridian")} size={size} />
    )

    const tile = container.firstElementChild
    expect(tile).toHaveClass(box)
    // A tinted tile has no border — that is what distinguishes it from the
    // neutral one at the same size.
    expect(tile).not.toHaveClass("border-f1-border-secondary")
  })

  it("puts a custom hex on the element as a CSS variable", () => {
    const { container } = zeroRender(
      <ListIconGlyph icon={Placeholder} tint={tintOf("#4F46E5")} size="md" />
    )

    const tile = container.firstElementChild as HTMLElement
    expect(tile.style.getPropertyValue("--list-icon-tint")).toBe("79 70 229")
  })

  it("takes an accessible name, so a tint that means something can be read", () => {
    const { container } = zeroRender(
      <ListIconGlyph
        icon={Placeholder}
        tint={tintOf("malibu")}
        size="md"
        aria-label="Hardware issue"
      />
    )

    expect(container.firstElementChild).toHaveAttribute(
      "aria-label",
      "Hardware issue"
    )
  })
})
