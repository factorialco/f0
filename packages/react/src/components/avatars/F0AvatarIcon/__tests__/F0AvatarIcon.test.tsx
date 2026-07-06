import { describe, expect, it } from "vitest"

import { Placeholder } from "@/icons/app"
import { zeroRender } from "@/testing/test-utils"

import { F0AvatarIcon } from "../F0AvatarIcon"

describe("F0AvatarIcon", () => {
  it("renders the icon with the provided accessible label", () => {
    const { container } = zeroRender(
      <F0AvatarIcon icon={Placeholder} aria-label="Placeholder" />
    )

    expect(
      container.querySelector('[aria-label="Placeholder"]')
    ).toBeInTheDocument()
  })
})
