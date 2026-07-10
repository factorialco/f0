import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarCompany } from "../F0AvatarCompany"

describe("F0AvatarCompany", () => {
  it("exposes the accessible name when labelled", () => {
    zeroRender(<F0AvatarCompany name="Acme Corp" aria-label="Acme Corp" />)

    expect(screen.getByRole("img", { name: "Acme Corp" })).toBeInTheDocument()
  })

  it("falls back to the name initials when no image is provided", () => {
    zeroRender(<F0AvatarCompany name="Acme" size="md" aria-label="Acme" />)

    expect(screen.getByText("AC")).toBeInTheDocument()
  })
})
