import { describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { F0AvatarModule } from "../F0AvatarModule"

describe("F0AvatarModule", () => {
  it("renders the module avatar with its accessible label", () => {
    const { container } = zeroRender(
      <F0AvatarModule module="home" aria-label="Home" />
    )

    expect(container.querySelector('[aria-label="Home"]')).toBeInTheDocument()
  })

  it("warns when the module is not supported", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

    // @ts-expect-error - unsupported module on purpose
    zeroRender(<F0AvatarModule module="not-a-real-module" />)

    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })
})
