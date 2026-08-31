import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { OneDataCollectionActionBar } from "../OneDataCollectionActionBar"

describe("OneDataCollectionActionBar", () => {
  it("keeps the all-items-selected label readable on the dark bar", () => {
    render(
      <OneDataCollectionActionBar
        isOpen
        selectedNumber={133}
        allPagesSelection
        isAllItemsSelected
        totalItems={133}
      />
    )

    // The label sits inside a `dark`-themed container, so it must set
    // text-f1-foreground explicitly — otherwise it inherits the light theme's
    // dark text and renders black-on-black.
    const label = screen.getByText(/133/)
    expect(label).toHaveClass("text-f1-foreground")
  })
})
