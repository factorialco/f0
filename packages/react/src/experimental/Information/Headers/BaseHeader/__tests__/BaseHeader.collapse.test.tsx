import { ReactNode } from "react"

import { describe, expect, it } from "vitest"

import { HeaderCollapseProvider } from "@/lib/providers/headerCollapse"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { BaseHeader } from "../index"

const metadata = [
  { label: "Location", value: { type: "text" as const, content: "Barcelona" } },
]

const header = (extra?: { collapsed?: boolean }) => (
  <BaseHeader
    title="Angel Moreno"
    description="Senior Product Designer"
    avatar={{ type: "person", firstName: "Angel", lastName: "Moreno" }}
    metadata={metadata}
    {...extra}
  />
)

/** Renders the header with a container driving the collapse, as `Page` does. */
const at = (progress: number, extra?: { collapsed?: boolean }) =>
  render(
    <HeaderCollapseProvider progress={progress}>
      {header(extra)}
    </HeaderCollapseProvider>
  )

/** Renders it with no container at all, as `F0Dialog` does. */
const alone = (children: ReactNode = header()) => render(children)

const root = () =>
  document.querySelector<HTMLElement>(".resource-header") as HTMLElement

const title = () => screen.getByText("Angel Moreno")

/** The identity column, which holds the name over the role. */
const identity = () => title().parentElement as HTMLElement

/**
 * The box around the avatar. Found structurally, as the identity column's
 * sibling, because at rest it carries no inline style to select it by, which is
 * the whole point of the at-rest contract.
 */
const avatarBox = () => identity().previousElementSibling as HTMLElement

/** Every element whose styling this change touches. */
const styledByCollapse = () => [
  root(),
  avatarBox(),
  title(),
  identity(),
  descriptionText(),
  metadataRow(),
]

/** The desktop metadata row, which is the header's last block. */
const metadataRow = () => root().lastElementChild as HTMLElement

const descriptionText = () => screen.getAllByText("Senior Product Designer")[0]

describe("BaseHeader at rest", () => {
  /**
   * The compatibility contract, and the only test in this file that really
   * matters. `BaseHeader` has around a hundred call sites in the product and none
   * of them are changing.
   *
   * It asserts the *absence* of inline style rather than its value, which is the
   * only form of the assertion that can catch a regression. Pinning the inline
   * numbers is circular: it proves this component still says what this component
   * says. A declaration silently dropped along with its class, `letter-spacing`
   * riding on `text-2xl` being the real example, is invisible that way.
   */
  it("writes no inline style at all while the header is open", () => {
    alone()

    styledByCollapse().forEach((element) => {
      expect(element.getAttribute("style")).toBeNull()
    })
  })

  it("keeps the classes that carry more than a size", () => {
    // `text-2xl` and `text-lg` also set letter-spacing, and size in rem so the
    // header follows the root font size. An inline px font-size drops both.
    alone()

    expect(title().className).toContain("text-2xl")
    expect(descriptionText().className).toContain("text-lg")
  })

  it("keeps the spacing classes so the cascade can still reach them", () => {
    // `F0Dialog` and the drawers cancel this header's padding with
    // `[&_.resource-header]:p-0`, which beats a class and loses to inline style.
    alone()

    expect(root().className).toContain("pb-5")
    expect(root().className).toContain("gap-3")
    expect(identity().className).toContain("gap-1")
  })

  it("applies no transform and no explicit avatar box at rest", () => {
    alone()

    // Not even `scale(1)`: a transform makes the element a stacking context and a
    // containing block for absolutely positioned descendants. And no width or
    // height, because `xl` is not 56px for every avatar variant, so an explicit
    // box is only safe once we are the ones choosing the size.
    const scaled = avatarBox().firstElementChild as HTMLElement
    expect(scaled.style.transform).toBe("")
    expect(avatarBox().className).not.toContain("translate-y")
    expect(avatarBox().className).not.toContain("shrink-0")
  })

  it("stays inline-free with every optional part present", () => {
    // The same contract over a maximally loaded header, covering the props the
    // narrower tests never render: a status tag, a deactivated title, all three
    // action clusters, a close button and the bottom border.
    render(
      <BaseHeader
        title="Angel Moreno"
        description="Senior Product Designer"
        avatar={{ type: "person", firstName: "Angel", lastName: "Moreno" }}
        metadata={metadata}
        status={{ label: "Status", text: "Active", variant: "positive" }}
        deactivated
        showBottomBorder
        primaryAction={{ label: "Edit", onClick: () => {} }}
        secondaryActions={[{ label: "Share", onClick: () => {} }]}
        otherActions={[{ label: "Archive", onClick: () => {} }]}
        onClose={() => {}}
      />
    )

    styledByCollapse().forEach((element) => {
      expect(element.getAttribute("style")).toBeNull()
    })
  })
})

describe("BaseHeader condensed", () => {
  it("steps every size down when the container says it is fully condensed", () => {
    at(1)

    expect(root().style.paddingBottom).toBe("12px")
    expect(avatarBox().style.width).toBe("32px")
    expect(avatarBox().style.height).toBe("32px")
    expect(title().style.fontSize).toBe("16px")
    expect(title().style.lineHeight).toBe("24px")
    expect(identity().style.gap).toBe("0px")
    expect(descriptionText().style.fontSize).toBe("14px")
    expect(descriptionText().style.lineHeight).toBe("20px")
  })

  it("drops the classes it is now overriding inline", () => {
    // Or the class and the inline value would fight, and which wins would depend
    // on specificity rather than on progress.
    at(1)

    expect(title().className).not.toContain("text-2xl")
    expect(root().className).not.toContain("pb-5")
    expect(root().className).not.toContain("gap-3")
    expect(identity().className).not.toContain("gap-1")
  })

  it("closes the metadata row and blanks it on the way", () => {
    at(1)

    expect(metadataRow().style.paddingTop).toBe("0px")
    expect(metadataRow().style.opacity).toBe("0")
  })

  it("leaves the row's height alone until something has been measured", () => {
    // jsdom never delivers a ResizeObserver entry, so the row's height is
    // unknown here, and an unknown height must not be read as zero: that would
    // close the row for a frame on a page mounted mid-scroll. The height's own
    // continuity across progress needs a real layout engine to test.
    at(1)

    expect(metadataRow().style.height).toBe("")
    expect(metadataRow().style.overflow).toBe("")
  })

  it("interpolates rather than switching", () => {
    at(0.5)

    // Halfway means halfway, not one end or the other. This is what lets the
    // header follow a scroll instead of snapping at a threshold.
    expect(title().style.fontSize).toBe("19px")
    expect(avatarBox().style.width).toBe("44px")
    expect(root().style.paddingBottom).toBe("16px")
  })

  it("scales the avatar once there is something to scale", () => {
    at(1)

    const scaled = avatarBox().firstElementChild as HTMLElement
    expect(scaled.style.transform).toBe(`scale(${32 / 56})`)
    expect(avatarBox().className).toContain("translate-y")
  })
})

describe("BaseHeader transitions", () => {
  const transitioned = () => root().className.includes("transition-")

  it("adds no transition while it is following a scroll", () => {
    // Every size is a function of the scroll position, so they all land in the
    // same commit. Easing them lets the compositor-driven avatar scale drift
    // away from the main-thread sizes around it.
    at(0.5)

    expect(transitioned()).toBe(false)
  })

  it("tweens when it is simply switched", () => {
    alone(header({ collapsed: true }))

    expect(transitioned()).toBe(true)
  })
})

describe("BaseHeader collapsed prop", () => {
  it("condenses a header that has no container at all", () => {
    // The case a dialog needs: no scrolling page anywhere in sight.
    alone(header({ collapsed: true }))

    expect(title().style.fontSize).toBe("16px")
  })

  it("wins over a container that says otherwise", () => {
    at(0.3, { collapsed: true })

    expect(title().style.fontSize).toBe("16px")
  })

  it("cannot be used to switch the scroll collapse off", () => {
    // The prop only ever adds collapse. If `false` overrode the container, it
    // would be an opt-out, and the whole point is that every resource page in
    // the product condenses the same way.
    at(1, { collapsed: false })

    expect(title().style.fontSize).toBe("16px")
  })
})

describe("BaseHeader without the optional parts", () => {
  it("condenses a header with no metadata", () => {
    render(
      <HeaderCollapseProvider progress={1}>
        <BaseHeader title="Payroll" />
      </HeaderCollapseProvider>
    )

    expect(title).toBeDefined()
    expect(screen.getByText("Payroll").style.fontSize).toBe("16px")
    // Nothing was left behind where the metadata row would have been.
    expect(root().style.paddingBottom).toBe("12px")
  })

  it("condenses a header with no avatar", () => {
    render(
      <HeaderCollapseProvider progress={1}>
        <BaseHeader title="Payroll" description="14 members" />
      </HeaderCollapseProvider>
    )

    expect(root().querySelector('[style*="--avatar-offset"]')).toBeNull()
    expect(screen.getByText("Payroll").style.fontSize).toBe("16px")
  })
})
