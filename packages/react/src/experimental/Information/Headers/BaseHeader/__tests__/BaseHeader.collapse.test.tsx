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

/** The box around the avatar, the only element carrying the offset variable. */
const avatarBox = () =>
  root().querySelector<HTMLElement>('[style*="--avatar-offset"]') as HTMLElement

/** The desktop metadata row, which is the header's last block. */
const metadataRow = () => root().lastElementChild as HTMLElement

const descriptionText = () => screen.getAllByText("Senior Product Designer")[0]

describe("BaseHeader at rest", () => {
  it("renders every size exactly as it did before the collapse existed", () => {
    // The compatibility contract. `BaseHeader` has around a hundred call sites
    // in the product, none of which are changing, so a header with no container
    // driving it has to be indistinguishable from the one that shipped.
    alone()

    expect(root().style.paddingBottom).toBe("20px")
    expect(avatarBox().style.width).toBe("56px")
    expect(avatarBox().style.height).toBe("56px")
    expect(title().style.fontSize).toBe("22px")
    expect(title().style.lineHeight).toBe("28px")
    expect(identity().style.gap).toBe("4px")
    expect(descriptionText().style.fontSize).toBe("16px")
    expect(descriptionText().style.lineHeight).toBe("24px")
  })

  it("keeps the 12px between the identity and the metadata", () => {
    // It used to be a `gap` on the header itself. It moved onto the metadata row
    // so it can close along with the row rather than leaving a hole behind, and
    // the distance has to come out the same.
    alone()

    expect(metadataRow().style.paddingTop).toBe("12px")
    expect(root().className).not.toContain("gap-3")
  })

  it("leaves the metadata row untouched at rest", () => {
    alone()

    expect(metadataRow().style.opacity).toBe("1")
    // No height and no clipping until there is something to close.
    expect(metadataRow().style.height).toBe("")
    expect(metadataRow().style.overflow).toBe("")
  })

  it("does not scale the avatar at rest", () => {
    alone()

    const scaled = avatarBox().firstElementChild as HTMLElement
    expect(scaled.style.transform).toBe("scale(1)")
    expect(avatarBox().style.getPropertyValue("--avatar-offset")).toBe("0px")
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

  it("closes the metadata row and blanks it on the way", () => {
    at(1)

    expect(metadataRow().style.paddingTop).toBe("0px")
    expect(metadataRow().style.opacity).toBe("0")
    expect(metadataRow().style.overflow).toBe("hidden")
  })

  it("interpolates rather than switching", () => {
    at(0.5)

    // Halfway means halfway, not one end or the other. This is what lets the
    // header follow a scroll instead of snapping at a threshold.
    expect(title().style.fontSize).toBe("19px")
    expect(avatarBox().style.width).toBe("44px")
    expect(root().style.paddingBottom).toBe("16px")
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
