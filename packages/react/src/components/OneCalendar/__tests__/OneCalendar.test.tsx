import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { OneCalendar } from "../OneCalendar"

describe("OneCalendar", () => {
  it("renders the empty periods state when the view is periods and none are supplied", () => {
    render(<OneCalendar mode="single" view="periods" />)

    expect(screen.getByText("No periods available")).toBeInTheDocument()
  })
})
