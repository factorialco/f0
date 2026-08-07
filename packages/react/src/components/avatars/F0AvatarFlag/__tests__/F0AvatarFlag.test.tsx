import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarFlag } from "../F0AvatarFlag"

/**
 * The flag slot: BaseAvatar renders `<span class="absolute inset-0">{flag}</span>`
 * as a direct child of the `role="img"` avatar box, and only when a flag element
 * was resolved (BaseAvatar.tsx:148-152 — with no flag it renders an AvatarImage
 * instead). Scoping to that span is what makes these assertions about flag
 * resolution specifically: a badge SVG lives in a sibling of the avatar box, and
 * an icon replaces the slot entirely, so neither can satisfy them.
 */
const flagSlot = (container: HTMLElement) =>
  container.querySelector('[role="img"] > span.absolute.inset-0')

const expectFlagGraphic = (container: HTMLElement) => {
  const slot = flagSlot(container)

  expect(slot).not.toBeNull()
  expect(slot!.querySelector("svg")).not.toBeNull()
}

describe("F0AvatarFlag", () => {
  it("exposes the accessible name when labelled", () => {
    zeroRender(<F0AvatarFlag flag="es" aria-label="Spain" />)

    expect(screen.getByRole("img", { name: "Spain" })).toBeInTheDocument()
  })

  it("is hidden from assistive tech when no label is passed", () => {
    const { container } = zeroRender(<F0AvatarFlag flag="es" size="lg" />)

    // BaseAvatar renders `aria-hidden={!hasAria}`, and Testing Library skips
    // aria-hidden subtrees for role queries — so there is no `img` to find.
    expect(screen.queryByRole("img")).toBeNull()
    // Still rendered, just not announced.
    expectFlagGraphic(container)
  })

  it("renders the resolved flag graphic", () => {
    const { container } = zeroRender(
      <F0AvatarFlag flag="es" size="lg" aria-label="Flag of Spain" />
    )

    expectFlagGraphic(container)
  })

  it("resolves the graphic case-insensitively", () => {
    const { container } = zeroRender(
      <F0AvatarFlag flag="ES" size="lg" aria-label="Spain" />
    )

    expectFlagGraphic(container)
  })

  it("renders no flag graphic for an unknown code", () => {
    const { container } = zeroRender(
      <F0AvatarFlag flag="zz" size="lg" aria-label="Unknown" />
    )

    expect(flagSlot(container)).toBeNull()
    expect(screen.getByText("ZZ")).toBeInTheDocument()
  })

  it("shows a single initial at xs and sm, two from md up", () => {
    // getInitials (BaseAvatar/utils.ts:19-21) special-cases the small sizes.
    for (const [size, expected] of [
      ["xs", "Z"],
      ["sm", "Z"],
      ["md", "ZZ"],
      ["lg", "ZZ"],
    ] as const) {
      const { unmount } = zeroRender(
        <F0AvatarFlag flag="zz" size={size} aria-label="Unknown" />
      )

      expect(screen.getByRole("img", { name: "Unknown" })).toHaveTextContent(
        new RegExp(`^${expected}$`)
      )
      unmount()
    }
  })
})
