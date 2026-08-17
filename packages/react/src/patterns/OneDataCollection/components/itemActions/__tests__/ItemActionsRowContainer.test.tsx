import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { ItemActionsRowContainer } from "../ItemActionsRowContainer"

describe("ItemActionsRowContainer", () => {
  it("is transparent to pointer events by default so it never blocks the content beneath", () => {
    const { container } = render(
      <ItemActionsRowContainer dropDownOpen={false}>
        <button type="button">Action</button>
      </ItemActionsRowContainer>
    )

    const overlay = container.querySelector("aside")
    expect(overlay).not.toBeNull()
    // The overlay (including its wide transparent fade area) must not intercept
    // hover/click on the cell content underneath — e.g. a trailing tagList "+N"
    // pill. Only the action buttons re-enable pointer events themselves.
    expect(overlay!.className).toContain("pointer-events-none")
  })

  it("lets a consumer opt the whole overlay back into pointer events via className", () => {
    // The List visualization wants the entire overlay clickable.
    const { container } = render(
      <ItemActionsRowContainer
        dropDownOpen={false}
        className="pointer-events-auto"
      >
        <button type="button">Action</button>
      </ItemActionsRowContainer>
    )

    const overlay = container.querySelector("aside")
    expect(overlay!.className).toContain("pointer-events-auto")
    expect(overlay!.className).not.toContain("pointer-events-none")
  })
})
