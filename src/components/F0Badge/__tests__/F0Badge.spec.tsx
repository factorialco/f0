import { render } from "@testing-library/react-native"
import React from "react"

import { Add } from "../../../icons/app"
import { F0Badge } from "../F0Badge"

const getClassName = (
  json: ReturnType<ReturnType<typeof render>["toJSON"]>
) => {
  if (!json || Array.isArray(json)) return ""
  return String(json.props.className ?? "")
}

describe("F0Badge", () => {
  it("Snapshot - default", () => {
    const { toJSON } = render(<F0Badge icon={Add} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - all variants", () => {
    const variants = [
      "neutral",
      "highlight",
      "positive",
      "critical",
      "warning",
    ] as const

    variants.forEach((variant) => {
      const { toJSON } = render(<F0Badge icon={Add} variant={variant} />)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - all sizes", () => {
    const sizes = ["xs", "sm", "md", "lg"] as const

    sizes.forEach((size) => {
      const { toJSON } = render(<F0Badge icon={Add} size={size} />)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("maps xs badge size to xs icon size", () => {
    const { toJSON } = render(<F0Badge icon={Add} size="xs" />)
    expect(getClassName(toJSON())).toContain("stroke-xs")
  })

  it("maps sm badge size to xs icon size", () => {
    const { toJSON } = render(<F0Badge icon={Add} size="sm" />)
    expect(getClassName(toJSON())).toContain("stroke-xs")
  })

  it("maps md badge size to sm icon size", () => {
    const { toJSON } = render(<F0Badge icon={Add} size="md" />)
    expect(getClassName(toJSON())).toContain("stroke-sm")
  })

  it("maps lg badge size to md icon size", () => {
    const { toJSON } = render(<F0Badge icon={Add} size="lg" />)
    expect(getClassName(toJSON())).toContain("stroke-md")
  })
})
