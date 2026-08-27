import { baseColors } from "@factorialco/f0-core"
import { describe, expect, it, vi } from "vitest"

import { fireEvent, screen, zeroRender as render } from "@/testing/test-utils"

import { resolveF0MapDensityStyle } from "../../../F0MapMarker"
import {
  BaseMapMarker,
  countForegroundContrast,
  countForegroundColor,
  markerColors,
  markerColorSteps,
} from "../BaseMapMarker"

const hslToLuminance = (triplet: string) => {
  const [hue, saturation, lightness] = triplet
    .split("/")[0]
    .trim()
    .split(/\s+/)
    .map((part) => Number.parseFloat(part))
  const saturationRatio = saturation / 100
  const lightnessRatio = lightness / 100
  const chroma = (1 - Math.abs(2 * lightnessRatio - 1)) * saturationRatio
  const hueSection = (((hue % 360) + 360) % 360) / 60
  const intermediate = chroma * (1 - Math.abs((hueSection % 2) - 1))
  const [red, green, blue] =
    hueSection < 1
      ? [chroma, intermediate, 0]
      : hueSection < 2
        ? [intermediate, chroma, 0]
        : hueSection < 3
          ? [0, chroma, intermediate]
          : hueSection < 4
            ? [0, intermediate, chroma]
            : hueSection < 5
              ? [intermediate, 0, chroma]
              : [chroma, 0, intermediate]
  const match = lightnessRatio - chroma / 2
  const linearize = (channel: number) => {
    const value = channel + match
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  }
  return (
    0.2126 * linearize(red) +
    0.7152 * linearize(green) +
    0.0722 * linearize(blue)
  )
}

const contrastRatio = (first: string, second: string) => {
  const lighter = Math.max(hslToLuminance(first), hslToLuminance(second))
  const darker = Math.min(hslToLuminance(first), hslToLuminance(second))
  return (lighter + 0.05) / (darker + 0.05)
}

describe("BaseMapMarker", () => {
  it("renders the complete count and applies the requested palette step", () => {
    render(
      <BaseMapMarker variant="count" count="42" color="malibu" colorStep={70} />
    )

    const count = screen.getByText("42")
    expect(count).toBeInTheDocument()
    expect(count.parentElement).toHaveStyle({
      backgroundColor: "hsl(216 48% 44%)",
    })
  })

  it("uses contrast-aware count ink across palette steps", () => {
    const { rerender } = render(
      <BaseMapMarker variant="count" count="4" color="red" colorStep={10} />
    )

    expect(screen.getByText("4").parentElement).toHaveStyle({
      backgroundColor: "hsl(var(--neutral-0))",
    })
    expect(screen.getByText("4").parentElement?.style.boxShadow).toContain(
      "hsl(5 100% 65% / 0.1)"
    )
    expect(screen.getByText("4")).toHaveStyle({
      color: "hsl(var(--neutral-100))",
    })

    rerender(
      <BaseMapMarker variant="count" count="12" color="red" colorStep={50} />
    )
    expect(screen.getByText("12")).toHaveStyle({
      color: countForegroundColor("red", 50),
    })

    rerender(
      <BaseMapMarker variant="count" count="22" color="malibu" colorStep={70} />
    )
    expect(screen.getByText("22")).toHaveStyle({
      color: "hsl(var(--white-100))",
    })
  })

  it("keeps every opaque palette count at AA text contrast", () => {
    const paletteColors = markerColors.filter(
      (color) => color !== "neutral" && color !== "grey"
    )
    const opaqueSteps = markerColorSteps.filter((step) => step !== 10)

    for (const color of paletteColors) {
      for (const step of opaqueSteps) {
        const resolved = resolveF0MapDensityStyle({ color, colorStep: step })
        const foreground = countForegroundColor(
          resolved.color,
          resolved.colorStep
        )
        const foregroundTriplet = foreground.includes("white")
          ? baseColors.white[100]
          : baseColors.grey[100]
        expect([
          "hsl(var(--white-100))",
          `hsl(${baseColors.grey[100]})`,
        ]).toContain(foreground)
        expect(
          contrastRatio(
            baseColors[resolved.color][resolved.colorStep],
            foregroundTriplet
          ),
          `${color}.${step}`
        ).toBeGreaterThanOrEqual(4.5)
        expect(
          countForegroundContrast(resolved.color, resolved.colorStep),
          `${color}.${step}`
        ).toBeGreaterThanOrEqual(4.5)
      }
      expect(countForegroundColor(color, 10)).toBe("hsl(var(--neutral-100))")
      expect(countForegroundContrast(color, 10)).toBeGreaterThanOrEqual(4.5)
    }
  })

  it("uses semantic ink without a glow for count labels", () => {
    render(
      <BaseMapMarker
        variant="count"
        count="39"
        color="malibu"
        label="Barcelona HQ"
      />
    )

    const label = screen.getByText("Barcelona HQ")
    expect(label).toHaveClass("text-f1-foreground")
    expect(label.style.color).toBe("")
    expect(label.style.textShadow).toBe("")
  })

  it("keeps route-stop letters limited to one uppercase character", () => {
    render(<BaseMapMarker variant="letter" letter="ab" />)
    expect(screen.getByText("A")).toBeInTheDocument()
    expect(screen.queryByText("AB")).not.toBeInTheDocument()
  })

  it("keeps presentational pointer targets out of the accessibility tree", () => {
    const onClick = vi.fn()
    const { container } = render(
      <BaseMapMarker
        variant="count"
        count="12"
        presentational
        onClick={onClick}
      />
    )

    const marker = screen.getByText("12").closest("[aria-hidden='true']")
    expect(marker).toHaveProperty("tagName", "SPAN")
    expect(marker).not.toHaveAttribute("tabindex")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()

    const pointerTarget = container.querySelector("span.cursor-pointer")
    if (!(pointerTarget instanceof HTMLElement)) {
      throw new Error("Expected a presentational pointer target")
    }
    fireEvent(
      pointerTarget,
      new MouseEvent("pointerup", { button: 0, bubbles: true })
    )
    expect(onClick).toHaveBeenCalledTimes(1)

    fireEvent(
      pointerTarget,
      new MouseEvent("pointerup", { button: 2, bubbles: true })
    )
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
