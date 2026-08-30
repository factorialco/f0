import { afterEach, describe, expect, it, vi } from "vitest"

import { waitFor, zeroRender as render } from "@/testing/test-utils"

import { ButtonLabel } from "../ButtonLabel"

describe("ButtonLabel", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("reports when the visible label is truncated", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(200)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(100)
    const onOverflowChange = vi.fn()

    render(
      <ButtonLabel
        label="A long button label"
        onOverflowChange={onOverflowChange}
      />
    )

    await waitFor(() => {
      expect(onOverflowChange).toHaveBeenCalledWith(true)
    })
  })
})
