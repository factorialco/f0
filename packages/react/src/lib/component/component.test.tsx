import { render, screen } from "@testing-library/react"
import React, { forwardRef } from "react"
import { describe, expect, it } from "vitest"

import { Component, F0_COMPONENT_NAME_ATTRIBUTE } from "./component"

const Inner = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <div ref={ref} {...props}>
      Content
    </div>
  )
)
Inner.displayName = "Inner"

describe("Component factory", () => {
  it("stamps data-f0-component-name with meta.name on the root node", () => {
    const Marked = Component({ name: "F0Test", type: "info" }, Inner)

    render(<Marked />)

    expect(screen.getByText("Content")).toHaveAttribute(
      F0_COMPONENT_NAME_ATTRIBUTE,
      "F0Test"
    )
  })

  it("stamps regardless of XRay being enabled (no provider present)", () => {
    const Marked = Component({ name: "F0NoProvider", type: "action" }, Inner)

    render(<Marked />)

    expect(screen.getByText("Content")).toHaveAttribute(
      "data-f0-component-name",
      "F0NoProvider"
    )
  })

  it("still forwards the caller's ref to the root node", () => {
    const ref = React.createRef<HTMLDivElement>()
    const Marked = Component({ name: "F0Ref", type: "info" }, Inner)

    render(<Marked ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current).toHaveAttribute("data-f0-component-name", "F0Ref")
  })

  it("sets displayName to meta.name", () => {
    const Marked = Component({ name: "F0Named", type: "info" }, Inner)

    expect(Marked.displayName).toBe("F0Named")
  })
})
