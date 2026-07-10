import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0Avatar } from "../F0Avatar"

describe("F0Avatar", () => {
  it("renders the person variant with its accessible label", () => {
    zeroRender(
      <F0Avatar
        avatar={{
          type: "person",
          firstName: "John",
          lastName: "Doe",
          "aria-label": "John Doe",
        }}
      />
    )

    expect(screen.getByRole("img", { name: "John Doe" })).toBeInTheDocument()
  })

  it("dispatches to the avatar matching the type discriminator", () => {
    zeroRender(
      <F0Avatar
        avatar={{
          type: "company",
          name: "Factorial HR",
          "aria-label": "Factorial HR",
        }}
      />
    )

    expect(
      screen.getByRole("img", { name: "Factorial HR" })
    ).toBeInTheDocument()
  })

  it("forwards dataTestId to the rendered avatar", () => {
    zeroRender(
      <F0Avatar
        dataTestId="my-test-avatar"
        avatar={{
          type: "team",
          name: "Engineering Team",
          "aria-label": "Engineering Team",
        }}
      />
    )

    expect(screen.getByTestId("my-test-avatar")).toBeInTheDocument()
  })
})
