import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarFlag } from "../F0AvatarFlag"

describe("F0AvatarFlag", () => {
  it("exposes the accessible name when labelled", () => {
    zeroRender(<F0AvatarFlag flag="es" aria-label="Spain" />)

    expect(screen.getByRole("img", { name: "Spain" })).toBeInTheDocument()
  })
})
