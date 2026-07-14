import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarTeam } from "../F0AvatarTeam"

describe("F0AvatarTeam", () => {
  it("exposes the accessible name when labelled", () => {
    zeroRender(
      <F0AvatarTeam name="Engineering Team" aria-label="Engineering Team" />
    )

    expect(
      screen.getByRole("img", { name: "Engineering Team" })
    ).toBeInTheDocument()
  })

  it("falls back to the name initials when no image is provided", () => {
    zeroRender(
      <F0AvatarTeam name="Engineering" size="md" aria-label="Engineering" />
    )

    expect(screen.getByText("EN")).toBeInTheDocument()
  })
})
