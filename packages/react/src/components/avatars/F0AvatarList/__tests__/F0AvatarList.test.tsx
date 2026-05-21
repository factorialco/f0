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
          { firstName: "Hellen", lastName: "Fernández" },
          { firstName: "Nik", lastName: "Lopin" },
          { firstName: "Danilo", lastName: "Pereira" },
        ]}
        max={3}
        noTooltip
      />
    )

    expect(screen.getByText("HF")).toBeInTheDocument()
    expect(screen.getByText("NL")).toBeInTheDocument()
    expect(screen.getByText("DP")).toBeInTheDocument()
    expect(screen.queryByText(/^\+\d+$/)).not.toBeInTheDocument()
  })

  it("renders a `+N` overflow counter when count exceeds max", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Hellen", lastName: "Fernández" },
          { firstName: "Nik", lastName: "Lopin" },
          { firstName: "Danilo", lastName: "Pereira" },
          { firstName: "Sara", lastName: "Doe" },
          { firstName: "Ana", lastName: "García" },
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
          { firstName: "Hellen", lastName: "Fernández" },
          { firstName: "Nik", lastName: "Lopin" },
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
          { firstName: "Hellen", lastName: "Fernández" },
          { firstName: "Nik", lastName: "Lopin" },
          { firstName: "Danilo", lastName: "Pereira" },
          {
            firstName: "Sara",
            lastName: "Doe",
            tooltipDescription: "sara.doe@factorial.co",
          },
          {
            firstName: "Ana",
            lastName: "García",
            tooltipDescription: "ana.garcia@factorial.co",
          },
        ]}
        max={3}
        noTooltip
      />
    )

    await user.hover(screen.getByText("+2"))

    expect(await screen.findByText("sara.doe@factorial.co")).toBeInTheDocument()
    expect(screen.getByText("ana.garcia@factorial.co")).toBeInTheDocument()
  })

  it("does not render tooltip content when noTooltip is true", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          {
            firstName: "Hellen",
            lastName: "Fernández",
            tooltipDescription: "hellen.fernandez@factorial.co",
          },
        ]}
        max={1}
        noTooltip
      />
    )

    // With noTooltip, the avatar is rendered without a Tooltip wrapper, so
    // the description text should never appear in the DOM.
    expect(
      screen.queryByText("hellen.fernandez@factorial.co")
    ).not.toBeInTheDocument()
  })
})
