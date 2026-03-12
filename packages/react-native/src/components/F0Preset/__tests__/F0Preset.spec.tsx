import { fireEvent, render, screen } from "@testing-library/react-native"
import React from "react"

import { F0Preset } from "../"

describe("F0Preset", () => {
  it("renders the label", () => {
    render(<F0Preset label="Active" />)
    expect(screen.getByText("Active")).toBeDefined()
  })

  it("renders counter when number is provided", () => {
    render(<F0Preset label="Pending" number={5} />)
    expect(screen.getByText("Pending")).toBeDefined()
    expect(screen.getByText("5")).toBeDefined()
  })

  it("does not render counter when number is omitted", () => {
    render(<F0Preset label="Draft" />)
    expect(screen.getByText("Draft")).toBeDefined()
    expect(screen.queryByText("0")).toBeNull()
  })

  it("calls onPress when pressed", () => {
    const handler = jest.fn()
    render(<F0Preset label="Click me" onPress={handler} />)
    fireEvent.press(screen.getByText("Click me"))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it("Snapshot - default without counter", () => {
    const { toJSON } = render(<F0Preset label="Label" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - default with counter", () => {
    const { toJSON } = render(<F0Preset label="Label" number={3} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - selected without counter", () => {
    const { toJSON } = render(<F0Preset label="Label" selected />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - selected with counter", () => {
    const { toJSON } = render(<F0Preset label="Label" number={12} selected />)
    expect(toJSON()).toMatchSnapshot()
  })
})
