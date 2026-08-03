import { describe, expect, it } from "vitest"

import { Building, Placeholder } from "@/icons/app"
import { zeroRender } from "@/testing/test-utils"

import { avatarIconSizes, F0AvatarIcon } from "../F0AvatarIcon"

describe("F0AvatarIcon", () => {
  it("renders the icon it is handed, not a fixed one", () => {
    const placeholder = zeroRender(<F0AvatarIcon icon={Placeholder} />)
    const building = zeroRender(<F0AvatarIcon icon={Building} />)

    const placeholderSvg = placeholder.container.querySelector("svg")
    const buildingSvg = building.container.querySelector("svg")

    expect(placeholderSvg).toBeInTheDocument()
    expect(buildingSvg).toBeInTheDocument()
    // The icons have no <title> and no text node, so their drawn paths are the
    // only thing that distinguishes them. Comparing two different icons is what
    // proves `icon` is actually forwarded rather than ignored.
    expect(placeholderSvg?.innerHTML).not.toBe("")
    expect(buildingSvg?.innerHTML).not.toBe(placeholderSvg?.innerHTML)
  })

  it("renders the icon in the default icon color", () => {
    const { container } = zeroRender(<F0AvatarIcon icon={Placeholder} />)
    const svg = container.querySelector("svg")

    // F0AvatarIcon forces `color="default"` on the icon, which F0Icon maps to
    // `text-f1-icon`. That class is the only observable that distinguishes
    // "default" from any other color: `data-has-color` is stamped for every
    // value other than `currentColor`, so on its own it would still pass if the
    // color became `critical` or a hex. Assert both, class first.
    expect(svg).toHaveClass("text-f1-icon")
    expect(svg).toHaveAttribute("data-has-color", "true")
  })

  describe("labelling", () => {
    // These two tests pin a known limitation, not a feature. `aria-label` and
    // `aria-labelledby` are in the public type, but the root they land on has no
    // role, which is exactly what makes them ARIA-prohibited: the component
    // exposes no accessible name. Asserting the missing `role` alongside the
    // attribute is what keeps the assertion honest — the previous version of
    // this file checked only the attribute and read as if the avatar were
    // labelled.
    //
    // Both assertions are deliberately red-on-fix: giving the root `role="img"`
    // (the fix, out of scope for a docs change) breaks them. Two things make
    // that traceable rather than silent:
    // - axe 4.11 reports `aria-prohibited-attr` (wcag2a) for this markup, so it
    //   is a real WCAG A failure, not a style preference. The story-level
    //   `a11y: { test: "error" }` gate does not catch it because no story passes
    //   either attribute; see the note on `parameters` in the stories file.
    // - The MDX lists it under Accessibility as a known limitation. Whoever adds
    //   `role="img"` has to update that list and these two tests together.
    // There is no ticket to link: the repo's Path to AA burndown is
    // `.storybook/a11y-skip-allowlist.json`, which only tracks stories that skip
    // axe, and these stories do not skip it.
    it("puts aria-label on a root that has no role", () => {
      const { container } = zeroRender(
        <F0AvatarIcon icon={Placeholder} aria-label="Placeholder" />
      )

      const root = container.firstElementChild
      expect(root).toHaveAttribute("aria-label", "Placeholder")
      expect(root).not.toHaveAttribute("role")
      expect(root).not.toHaveAttribute("aria-hidden")
    })

    it("puts aria-labelledby on a root that has no role", () => {
      const { container } = zeroRender(
        <F0AvatarIcon icon={Placeholder} aria-labelledby="entity-name" />
      )

      const root = container.firstElementChild
      expect(root).toHaveAttribute("aria-labelledby", "entity-name")
      expect(root).not.toHaveAttribute("role")
    })
  })

  describe("size", () => {
    // The only observable of `size` is the box and radius classes on the root
    // plus the width class F0Icon derives from the same value: the component
    // renders no text, no role and no dimension attributes. The Tailwind
    // coupling here is deliberate and has nowhere else to go. The radius is
    // pinned too because the docs claim it scales with the size, and the only
    // other guard would be a Chromatic diff.
    const cases = {
      sm: { box: "size-6", radius: "rounded-sm", icon: "w-4" },
      md: { box: "size-8", radius: "rounded", icon: "w-5" },
      lg: { box: "size-10", radius: "rounded-md", icon: "w-6" },
    } as const

    it("covers every size the component accepts", () => {
      expect(Object.keys(cases)).toEqual([...avatarIconSizes])
    })

    Object.entries(cases).forEach(([size, expected]) => {
      it(`renders ${size} as a ${expected.box} ${expected.radius} box with a ${expected.icon} icon`, () => {
        const { container } = zeroRender(
          <F0AvatarIcon icon={Placeholder} size={size as keyof typeof cases} />
        )

        expect(container.firstElementChild).toHaveClass(
          expected.box,
          expected.radius
        )
        expect(container.querySelector("svg")).toHaveClass(expected.icon)
      })
    })

    it("defaults to md when no size is given", () => {
      const { container } = zeroRender(<F0AvatarIcon icon={Placeholder} />)

      expect(container.firstElementChild).toHaveClass(
        cases.md.box,
        cases.md.radius
      )
      expect(container.querySelector("svg")).toHaveClass(cases.md.icon)
    })
  })
})
