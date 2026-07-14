import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarDate } from "../F0AvatarDate"

describe("F0AvatarDate", () => {
  it("renders the day of the month from the given date", () => {
    zeroRender(
      <F0AvatarDate date={new Date(2026, 0, 14)} aria-label="14 January 2026" />
    )

    expect(screen.getByText("14")).toBeInTheDocument()
  })
})
