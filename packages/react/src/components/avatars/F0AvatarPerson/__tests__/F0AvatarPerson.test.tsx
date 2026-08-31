import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarPerson } from "../F0AvatarPerson"

describe("F0AvatarPerson", () => {
  it("exposes the accessible name when labelled", () => {
    zeroRender(
      <F0AvatarPerson
        firstName="Jane"
        lastName="Smith"
        aria-label="Jane Smith"
      />
    )

    expect(screen.getByRole("img", { name: "Jane Smith" })).toBeInTheDocument()
  })

  it("falls back to the name initials when no image is provided", () => {
    zeroRender(
      <F0AvatarPerson
        firstName="Jane"
        lastName="Smith"
        size="md"
        aria-label="Jane Smith"
      />
    )

    expect(screen.getByText("JS")).toBeInTheDocument()
  })

  it("replaces the initials with an icon when pending", () => {
    zeroRender(
      <F0AvatarPerson
        firstName="Jane"
        lastName="Smith"
        size="md"
        pending
        aria-label="Open position"
      />
    )

    expect(screen.queryByText("JS")).not.toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: "Open position" })
    ).toBeInTheDocument()
  })
})
