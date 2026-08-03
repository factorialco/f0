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

describe("F0AvatarFlag", () => {
  it("exposes the accessible name when labelled", () => {
    zeroRender(<F0AvatarFlag flag="es" aria-label="Spain" />)

    expect(screen.getByRole("img", { name: "Spain" })).toBeInTheDocument()
  })

  it("is hidden from assistive tech when no label is passed", () => {
    zeroRender(<F0AvatarFlag flag="es" size="lg" />)

    // BaseAvatar renders `aria-hidden={!hasAria}`, and Testing Library skips
    // aria-hidden subtrees for role queries — so there is no `img` to find.
    expect(screen.queryByRole("img")).toBeNull()
    // Still rendered, just not announced.
    expect(screen.getByText("SP")).toBeInTheDocument()
  })

  it("uses the localized country name for the fallback initials", () => {
    // The label is deliberately different from the country name, so the
    // initials cannot be coming from the label.
    zeroRender(<F0AvatarFlag flag="es" size="lg" aria-label="Flag of Spain" />)

    expect(screen.getByText("SP")).toBeInTheDocument()
  })

  it("resolves the graphic case-insensitively but the country name not", () => {
    // `getFlag` lowercases the code (flagsMap.tsx:47) while the country name
    // lookup uses the raw prop against lowercase-only keys
    // (F0AvatarFlag.tsx:19) — so an uppercase code gets the flag and a raw-code
    // label. Documented in the MDX; this is the guard on that sentence.
    const { container } = zeroRender(
      <F0AvatarFlag flag="ES" size="lg" aria-label="Spain" />
    )

    // Assert the slot exists before reaching into it: `flagSlot(...)?.…` yields
    // `undefined` when the slot is missing, and `undefined` satisfies
    // `.not.toBeNull()` — so the optional chain would make this pass even if no
    // flag rendered at all.
    const slot = flagSlot(container)
    expect(slot).not.toBeNull()
    expect(slot!.querySelector("svg")).not.toBeNull()
    expect(screen.getByText("ES")).toBeInTheDocument()
    expect(screen.queryByText("SP")).toBeNull()
  })

  it("falls back to the raw code when the code has no localized name", () => {
    // "zw" has a flag graphic but no entry in i18n.countries.
    const { container } = zeroRender(
      <F0AvatarFlag flag="zw" size="lg" aria-label="Zimbabwe" />
    )

    expect(screen.getByText("ZW")).toBeInTheDocument()
    const slot = flagSlot(container)
    expect(slot).not.toBeNull()
    expect(slot!.querySelector("svg")).not.toBeNull()
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
