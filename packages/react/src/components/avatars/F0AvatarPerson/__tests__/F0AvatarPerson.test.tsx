import { userEvent } from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { Check } from "@/icons/app"
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

  it("shows the badge tooltip when hovering the avatar", async () => {
    const user = userEvent.setup()
    zeroRender(
      <F0AvatarPerson
        firstName="Jane"
        lastName="Smith"
        badge={{ type: "positive", icon: Check, tooltip: "Verified profile" }}
      />
    )

    // Tooltip content only mounts while the tooltip is open, and the default
    // open delay is 700ms, so this has to hover and wait it out. Hovering the
    // avatar itself (the initials), not the badge, must open it.
    await user.hover(screen.getByText("JS"))

    const tooltip = await screen.findByRole("tooltip", {}, { timeout: 3000 })
    expect(tooltip).toHaveTextContent("Verified profile")
  })
})
