import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0Avatar } from "../F0Avatar"

describe("F0Avatar", () => {
  it("forwards deactivated to the person avatar", () => {
    zeroRender(
      <F0Avatar
        size="md"
        avatar={{
          type: "person",
          firstName: "Jane",
          lastName: "Smith",
          deactivated: true,
          "aria-label": "Jane Smith",
        }}
      />
    )

    expect(screen.queryByText("JS")).not.toBeInTheDocument()
  })

  it("forwards pending to the person avatar", () => {
    zeroRender(
      <F0Avatar
        size="md"
        avatar={{
          type: "person",
          firstName: "Jane",
          lastName: "Smith",
          pending: true,
          "aria-label": "Jane Smith",
        }}
      />
    )

    expect(screen.queryByText("JS")).not.toBeInTheDocument()
  })
})
