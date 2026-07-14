import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0GraphSkeleton } from "../F0GraphSkeleton"

const cards = (c: HTMLElement) => c.querySelectorAll(".w-64")
const pills = (c: HTMLElement) => c.querySelectorAll(".w-20.rounded-full")
const connectors = (c: HTMLElement) => c.querySelector("svg")

describe("F0GraphSkeleton", () => {
  it("renders a root plus the default 3 children", () => {
    const { container } = render(<F0GraphSkeleton />)
    expect(cards(container)).toHaveLength(4) // 1 root + 3 children
    expect(container.firstElementChild).toHaveAttribute("aria-busy", "true")
  })

  it("renders the requested number of children", () => {
    const { container } = render(<F0GraphSkeleton childrenCount={5} />)
    expect(cards(container)).toHaveLength(6)
  })

  it("toggles metadata pills with showTags", () => {
    const { container: withTags } = render(
      <F0GraphSkeleton childrenCount={3} />
    )
    expect(pills(withTags)).toHaveLength(4) // root + 3 children

    const { container: withoutTags } = render(
      <F0GraphSkeleton childrenCount={3} showTags={false} />
    )
    expect(pills(withoutTags)).toHaveLength(0)
  })

  it("scales the connector bus width with childrenCount", () => {
    const { container: three } = render(<F0GraphSkeleton childrenCount={3} />)
    expect(connectors(three)).toHaveAttribute("width", "848") // 3·256 + 2·40

    const { container: five } = render(<F0GraphSkeleton childrenCount={5} />)
    expect(connectors(five)).toHaveAttribute("width", "1440") // 5·256 + 4·40
  })

  it("renders only the root (no connectors) when childrenCount is 0", () => {
    const { container } = render(<F0GraphSkeleton childrenCount={0} />)
    expect(cards(container)).toHaveLength(1)
    expect(connectors(container)).toBeNull()
  })
})
