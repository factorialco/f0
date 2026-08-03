import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { BaseTag } from "./index"

describe("BaseTag", () => {
  it("marks its subtree with data-no-strike so row strike decorations skip it", () => {
    const { container } = render(<BaseTag text="Rejected" />)

    const optOut = container.querySelector("[data-no-strike]")
    expect(optOut).not.toBeNull()
    expect(optOut).toHaveTextContent("Rejected")
  })
})
