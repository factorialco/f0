import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { SectionHeader } from "../index"

/**
 * The separator's dash is a design decision, not a browser default: 3px on,
 * 4px off. `border-style: dashed` cannot express that, so the rule is painted
 * as a repeating gradient and these tests pin the pattern down.
 */
describe("SectionHeader", () => {
  const dashPattern = "transparent_3px,transparent_7px"

  const section = () =>
    screen.getByRole("heading", { level: 2 }).closest("div")?.parentElement
      ?.parentElement

  it("draws a top separator as a 3px-on/4px-off dashed rule", () => {
    render(
      <SectionHeader title="Personal" description="Details" separator="top" />
    )

    const className = section()?.className ?? ""
    expect(className).toContain("repeating-linear-gradient")
    expect(className).toContain(dashPattern)
    expect(className).toContain("bg-left-top")
  })

  it("anchors a bottom separator to the bottom edge with the same dash", () => {
    render(
      <SectionHeader
        title="Personal"
        description="Details"
        separator="bottom"
      />
    )

    const className = section()?.className ?? ""
    expect(className).toContain(dashPattern)
    expect(className).toContain("bg-left-bottom")
  })

  it("paints no rule when no separator is asked for", () => {
    render(<SectionHeader title="Personal" description="Details" />)

    expect(section()?.className ?? "").not.toContain(
      "repeating-linear-gradient"
    )
  })
})
