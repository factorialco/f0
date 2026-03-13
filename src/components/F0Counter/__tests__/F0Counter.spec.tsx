import { render, screen } from "@testing-library/react-native"
import React from "react"

import { F0Counter, F0_COUNTER_SIZES, F0_COUNTER_TYPES } from "../"

describe("F0Counter", () => {
  it("renders the value", () => {
    render(<F0Counter value={42} />)
    expect(screen.getByText("42")).toBeDefined()
  })

  it("displays +maxValue when value exceeds maxValue", () => {
    render(<F0Counter value={150} maxValue={99} />)
    expect(screen.getByText("+99")).toBeDefined()
  })

  it("displays the value when it does not exceed maxValue", () => {
    render(<F0Counter value={50} maxValue={99} />)
    expect(screen.getByText("50")).toBeDefined()
  })

  it("Snapshot - all type variants at md size", () => {
    F0_COUNTER_TYPES.forEach((type) => {
      const { toJSON } = render(<F0Counter value={5} type={type} size="md" />)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - all type variants at sm size", () => {
    F0_COUNTER_TYPES.forEach((type) => {
      const { toJSON } = render(<F0Counter value={5} type={type} size="sm" />)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - maxValue overflow", () => {
    const { toJSON } = render(
      <F0Counter value={123} maxValue={99} type="notification" />
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it("exports size and type constant arrays", () => {
    expect(F0_COUNTER_SIZES).toEqual(["md", "sm"])
    expect(F0_COUNTER_TYPES).toEqual([
      "default",
      "primary",
      "selected",
      "notification",
    ])
  })
})
