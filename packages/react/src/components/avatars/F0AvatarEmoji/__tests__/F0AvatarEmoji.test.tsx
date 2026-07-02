import { describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { F0AvatarEmoji } from "../F0AvatarEmoji"

describe("F0AvatarEmoji", () => {
  it("renders with the provided accessible label", () => {
    const { container } = zeroRender(
      <F0AvatarEmoji emoji="🍑" aria-label="Peach" />
    )

    expect(container.querySelector('[aria-label="Peach"]')).toBeInTheDocument()
  })

  it("falls back to a neutral emoji for an invalid value", () => {
    const { container } = zeroRender(
      <F0AvatarEmoji emoji="not-an-emoji" aria-label="Invalid" />
    )

    expect(
      container.querySelector('[aria-label="Invalid"]')
    ).toBeInTheDocument()
  })
})
