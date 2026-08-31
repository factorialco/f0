import { userEvent } from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { Check } from "@/icons/app"
import { screen, zeroRender } from "@/testing/test-utils"

import { BaseAvatar } from "../BaseAvatar"

/**
 * Every avatar variant that supports a badge (person, company, team, flag)
 * renders through BaseAvatar, so the badge tooltip behavior is pinned here
 * once instead of per variant.
 */
describe("BaseAvatar", () => {
  it("shows the badge tooltip when hovering the avatar", async () => {
    const user = userEvent.setup()
    zeroRender(
      <BaseAvatar
        name="Jane Smith"
        aria-label="Jane Smith"
        badge={{ type: "positive", icon: Check, tooltip: "Verified" }}
      />
    )

    // Tooltip content only mounts while the tooltip is open, and the default
    // open delay is 700ms, so this has to hover and wait it out. Hovering the
    // avatar itself, not the badge, must open it.
    await user.hover(screen.getByRole("img", { name: "Jane Smith" }))

    const tooltip = await screen.findByRole("tooltip", {}, { timeout: 3000 })
    expect(tooltip).toHaveTextContent("Verified")
  })

  it("renders no tooltip trigger when the badge has none", async () => {
    const user = userEvent.setup()
    zeroRender(
      <BaseAvatar
        name="Jane Smith"
        aria-label="Jane Smith"
        badge={{ type: "positive", icon: Check }}
      />
    )

    await user.hover(screen.getByRole("img", { name: "Jane Smith" }))

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })
})
