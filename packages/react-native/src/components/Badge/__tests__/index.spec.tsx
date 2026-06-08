import { render } from "@testing-library/react-native"
import React from "react"

import { Add } from "../../../icons/app"
import { Badge } from "../index"

const getClassName = (
  json: ReturnType<ReturnType<typeof render>["toJSON"]>
) => {
  if (!json || Array.isArray(json)) return ""
  return String(json.props.className ?? "")
}

describe("Badge (deprecated wrapper)", () => {
  it("renders by delegating to F0Badge", () => {
    const { toJSON } = render(<Badge icon={Add} />)
    expect(toJSON()).toBeTruthy()
  })

  it("maps `type` to F0Badge `variant`", () => {
    const { toJSON } = render(<Badge icon={Add} type="critical" />)
    expect(getClassName(toJSON())).toContain("bg-f0-icon-critical")
  })

  it("preserves size mapping contract", () => {
    const { toJSON } = render(<Badge icon={Add} size="lg" />)
    expect(getClassName(toJSON())).toContain("stroke-md")
  })
})
