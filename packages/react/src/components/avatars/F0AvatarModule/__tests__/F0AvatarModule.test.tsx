import { describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { F0AvatarModule } from "../F0AvatarModule"

describe("F0AvatarModule", () => {
  it("renders the squircle and the module icon", () => {
    const { container } = zeroRender(<F0AvatarModule module="home" />)

    // The squircle background plus the module's own icon.
    expect(container.querySelectorAll("svg")).toHaveLength(2)
  })

  it("is decorative: aria-hidden wins over any label passed in", () => {
    const { container } = zeroRender(
      <F0AvatarModule module="home" aria-label="Home" />
    )

    // The root hardcodes aria-hidden, so the label sits on a hidden element and
    // never reaches assistive technology. Asserting both attributes on the same
    // node is the point: `aria-label` here is inert, not an accessible name.
    // Don't "verify" this with queryByLabelText — it reads the attribute off the
    // DOM and ignores aria-hidden, which is how the old test read as a pass.
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true")
    expect(container.firstChild).toHaveAttribute("aria-label", "Home")
  })

  it("gives each instance its own gradient id", () => {
    const { container } = zeroRender(
      <>
        <F0AvatarModule module="home" />
        <F0AvatarModule module="home" />
      </>
    )

    const ids = [...container.querySelectorAll("linearGradient")].map(
      (node) => node.id
    )

    expect(ids).toHaveLength(2)
    expect(new Set(ids).size).toBe(2)
  })

  describe("size mapping", () => {
    const sizeTests = {
      "4xs": ["h-2.5", "w-2.5"],
      "3xs": ["h-3", "w-3"],
      "2xs": ["h-4", "w-4"],
      xs: ["h-5", "w-5"],
      sm: ["h-6", "w-6"],
      md: ["h-8", "w-8"],
      lg: ["h-10", "w-10"],
    } as const

    Object.entries(sizeTests).forEach(([size, expectedClasses]) => {
      it(`applies the ${size} size classes`, () => {
        const { container } = zeroRender(
          <F0AvatarModule module="home" size={size as keyof typeof sizeTests} />
        )

        expectedClasses.forEach((className) => {
          expect(container.firstChild).toHaveClass(className)
        })
      })
    })
  })

  it("warns when the module is not supported", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

    // @ts-expect-error - unsupported module on purpose
    zeroRender(<F0AvatarModule module="not-a-real-module" />)

    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })
})
