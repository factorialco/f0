import { describe, expect, it } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import {
  F0MapMarker,
  f0MapDensityColors,
  f0MapDensityColorSteps,
  f0MapDensityPalette,
} from "../F0MapMarker"

describe("F0MapMarker", () => {
  it("renders density values and caps three-digit values", () => {
    const { rerender } = render(
      <F0MapMarker variant="density" value={42} level="high" />
    )

    expect(screen.getByText("42")).toBeInTheDocument()

    rerender(<F0MapMarker variant="density" value={128} level="high" />)
    expect(screen.getByText("99+")).toBeInTheDocument()
  })

  it("normalizes invalid density values to zero", () => {
    const { rerender } = render(
      <F0MapMarker variant="density" value={Number.NaN} level="low" />
    )
    expect(screen.getByText("0")).toBeInTheDocument()

    rerender(<F0MapMarker variant="density" value={-8.4} level="medium" />)
    expect(screen.getByText("0")).toBeInTheDocument()

    rerender(<F0MapMarker variant="density" value={7.6} level="medium" />)
    expect(screen.getByText("8")).toBeInTheDocument()
  })

  it("uses a clearly stepped Factorial density scale with consistent ink", () => {
    expect(f0MapDensityColors).toEqual({
      low: "red",
      medium: "red",
      high: "red",
    })
    expect(f0MapDensityColorSteps).toEqual({ low: 10, medium: 50, high: 70 })
    expect(f0MapDensityPalette).toEqual({
      low: { color: "red", colorStep: 10 },
      medium: { color: "red", colorStep: 50 },
      high: { color: "red", colorStep: 70 },
    })

    const { rerender } = render(
      <F0MapMarker variant="density" value={4} level="low" />
    )
    expect(screen.getByText("4").parentElement).toHaveStyle({
      backgroundColor: "hsl(var(--neutral-0))",
    })
    expect(screen.getByText("4")).toHaveStyle({
      color: "hsl(var(--neutral-100))",
    })

    rerender(<F0MapMarker variant="density" value={9} level="medium" />)
    expect(screen.getByText("9").parentElement).toHaveStyle({
      backgroundColor: "hsl(5 100% 65%)",
    })
    expect(screen.getByText("9")).toHaveStyle({
      color: "hsl(218 48% 10%)",
    })

    rerender(<F0MapMarker variant="density" value={22} level="high" />)
    expect(screen.getByText("22").parentElement).toHaveStyle({
      backgroundColor: "hsl(3 71% 41%)",
    })
    expect(screen.getByText("22")).toHaveStyle({
      color: "hsl(var(--white-100))",
    })
  })

  it("normalizes an inaccessible composing density step within its F0 hue", () => {
    render(
      <F0MapMarker
        variant="density"
        value={18}
        level="medium"
        style={{ color: "malibu", colorStep: 60 }}
      />
    )

    expect(screen.getByText("18").parentElement).toHaveStyle({
      backgroundColor: "hsl(216 48% 44%)",
    })
    expect(screen.getByText("18")).toHaveStyle({
      color: "hsl(var(--white-100))",
    })
  })
})
