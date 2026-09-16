import "@testing-library/jest-dom/vitest"
import { describe, expect, it } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { UsageRing, type UsageRingTone } from "../components/UsageRing"

// Figma "One pricing" 29650-9450: caja de 14, trazo 2,31 (1/6 del diámetro).
const CENTER = 7
const STROKE = 2.31
const RADIUS = CENTER - STROKE / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const renderRing = (percentage: number, tone: UsageRingTone = "default") => {
  const { container } = render(
    <UsageRing percentage={percentage} tone={tone} />
  )
  const svg = container.querySelector("svg")!
  const [track, arc] = Array.from(svg.querySelectorAll("circle"))
  return { svg, track, arc }
}

describe("UsageRing", () => {
  it("keeps the Figma proportions", () => {
    const { svg, track, arc } = renderRing(50)

    expect(svg).toHaveAttribute("viewBox", "0 0 14 14")
    expect(svg).toHaveClass("h-3.5", "w-3.5")
    for (const circle of [track, arc]) {
      expect(circle).toHaveAttribute("stroke-width", String(STROKE))
      expect(circle).toHaveAttribute("r", String(RADIUS))
      expect(circle).toHaveAttribute("cx", String(CENTER))
      expect(circle).toHaveAttribute("cy", String(CENTER))
    }
  })

  it("offsets the arc by the unused share", () => {
    expect(renderRing(0).arc).toHaveAttribute(
      "stroke-dashoffset",
      String(CIRCUMFERENCE)
    )
    expect(renderRing(50).arc).toHaveAttribute(
      "stroke-dashoffset",
      String(CIRCUMFERENCE / 2)
    )
    expect(renderRing(100).arc).toHaveAttribute("stroke-dashoffset", "0")
  })

  it("fills the whole ring when the allowance is unlimited", () => {
    const { arc } = renderRing(0, "unlimited")

    expect(arc).toHaveAttribute("stroke-dashoffset", "0")
    expect(arc).toHaveClass("stroke-f1-border")
  })

  it("paints an exhausted allowance in the critical tone", () => {
    expect(renderRing(100, "exhausted").arc).toHaveClass(
      "stroke-f1-background-critical-bold"
    )
    expect(renderRing(40).arc).toHaveClass("stroke-f1-background-info-bold")
  })

  it("stays decorative — the owning button carries the name", () => {
    const { svg } = renderRing(40)

    expect(svg).toHaveAttribute("aria-hidden", "true")
    expect(svg).toHaveAttribute("focusable", "false")
  })
})
