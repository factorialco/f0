import { userEvent } from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0AvatarList } from "../F0AvatarList"

describe("F0AvatarList", () => {
  it("renders all avatars when count is at or below max", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
        ]}
        max={3}
        noTooltip
      />
    )

    expect(screen.getByText("AL")).toBeInTheDocument()
    expect(screen.getByText("AT")).toBeInTheDocument()
    expect(screen.getByText("GH")).toBeInTheDocument()
    expect(screen.queryByText(/^\+\d+$/)).not.toBeInTheDocument()
  })

  it("renders a `+N` overflow counter when count exceeds max", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
          { firstName: "Marie", lastName: "Curie" },
          { firstName: "Lionel", lastName: "Messi" },
        ]}
        max={3}
        noTooltip
      />
    )

    expect(screen.getByText("+2")).toBeInTheDocument()
  })

  it("renders the remainingCount value when explicitly provided", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
        ]}
        max={2}
        remainingCount={7}
        noTooltip
      />
    )

    expect(screen.getByText("+7")).toBeInTheDocument()
  })

  it("renders tooltipDescription inside the overflow popover", async () => {
    const user = userEvent.setup()
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
          {
            firstName: "Marie",
            lastName: "Curie",
            tooltipDescription: "marie.curie@example.com",
          },
          {
            firstName: "Lionel",
            lastName: "Messi",
            tooltipDescription: "lionel.messi@example.com",
          },
        ]}
        max={3}
        noTooltip
      />
    )

    await user.hover(screen.getByText("+2"))

    expect(
      await screen.findByText("marie.curie@example.com")
    ).toBeInTheDocument()
    expect(screen.getByText("lionel.messi@example.com")).toBeInTheDocument()
  })

  it("does not render tooltip content when noTooltip is true", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          {
            firstName: "Ada",
            lastName: "Lovelace",
            tooltipDescription: "ada.lovelace@example.com",
          },
        ]}
        max={1}
        noTooltip
      />
    )

    // With noTooltip, the avatar is rendered without a Tooltip wrapper, so
    // the description text should never appear in the DOM.
    expect(
      screen.queryByText("ada.lovelace@example.com")
    ).not.toBeInTheDocument()
  })
})
