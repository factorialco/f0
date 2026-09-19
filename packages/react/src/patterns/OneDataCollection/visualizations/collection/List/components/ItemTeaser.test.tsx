import { describe, expect, it } from "vitest"
import { Placeholder } from "@/icons/app"
import { zeroRender } from "@/testing/test-utils"
import { ItemTeaser } from "./ItemTeaser"

describe("ItemTeaser", () => {
  it("tints the glyph when the row names a colour", () => {
    const { container } = zeroRender(
      <ItemTeaser
        title="Laptop will not boot"
        avatar={{ type: "icon", icon: Placeholder, color: "malibu" }}
      />
    )

    expect(container.innerHTML).toContain("colors.malibu.50")
  })

  // The neutral tile is a white box with a border; a tinted one has neither.
  it("draws the plain avatar when the row names no colour", () => {
    const { container } = zeroRender(
      <ItemTeaser
        title="Laptop will not boot"
        avatar={{ type: "icon", icon: Placeholder }}
      />
    )

    expect(container.innerHTML).not.toContain("colors.malibu.50")
    expect(
      container.querySelector(".border-f1-border-secondary")
    ).toBeInTheDocument()
  })

  it("leaves every other avatar kind alone", () => {
    const { container } = zeroRender(
      <ItemTeaser
        title="Ada Lovelace"
        avatar={{ type: "person", firstName: "Ada", lastName: "Lovelace" }}
      />
    )

    expect(container.innerHTML).not.toContain("--list-icon-tint")
  })
})
