import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0ProgressSeries } from "../index"
import { F0ProgressSeriesBar } from "../types"

const getBars = () => screen.getAllByRole("img")

const quarters: F0ProgressSeriesBar[] = [
  { value: 100, max: 100, label: "Q1" },
  { value: 50, max: 100, label: "Q2" },
  { value: undefined, label: "Q3" },
  { value: undefined, label: "Q4" },
]

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

describe("F0ProgressSeries", () => {
  it("renders one bar per data point", () => {
    render(<F0ProgressSeries bars={quarters} />)

    expect(getBars()).toHaveLength(4)
  })

  it("fills proportionally to value / max", () => {
    render(<F0ProgressSeries bars={[{ value: 50, max: 100 }]} />)

    expect(getBars()[0].querySelector("div")?.getAttribute("style")).toContain(
      "width: 50%"
    )
  })

  it("defaults max to 100", () => {
    render(<F0ProgressSeries bars={[{ value: 25 }]} />)

    expect(getBars()[0].getAttribute("aria-label")).toBe("25 / 100 (25%)")
  })

  it("splits the bar at 100/pct on overachievement and reports the real %", () => {
    render(<F0ProgressSeries bars={[{ value: 158, max: 100, label: "Q1" }]} />)

    const bar = getBars()[0]
    expect(bar.getAttribute("aria-label")).toContain("158%")

    // Full bar split at 100/158 ≈ 63.29% (base) + ≈ 36.71% (lighter overflow).
    const widths = Array.from(bar.querySelectorAll("[style*='width']")).map(
      (el) => el.getAttribute("style") ?? ""
    )
    expect(widths).toHaveLength(2)
    expect(widths.some((w) => w.includes("width: 63.29"))).toBe(true)
    expect(widths.some((w) => w.includes("width: 36.70"))).toBe(true)
  })

  it("applies the color token to the fill, defaulting to categorical-1", () => {
    render(
      <F0ProgressSeries
        bars={[
          { value: 40, max: 100, color: "feedback-positive" },
          { value: 40, max: 100 },
        ]}
      />
    )

    for (const bar of getBars()) {
      expect(bar.querySelector("div")?.getAttribute("style")).toContain(
        "background-color"
      )
    }
  })

  it("renders a canceled bar as a hatched grey bar with no fill", () => {
    render(
      <F0ProgressSeries
        bars={[{ value: 30, max: 100, canceled: true, label: "Q1" }]}
      />
    )

    const bar = getBars()[0]
    expect(bar).toHaveClass("bg-f1-foreground-disabled")
    expect(bar.className).toContain("repeating-linear-gradient")
    expect(bar.querySelector("div")).toBeNull()
    expect(bar.getAttribute("aria-label")).toBe("Q1 · Canceled")
  })

  it("renders an empty/future bar with track only and announces no data", () => {
    render(<F0ProgressSeries bars={[{ value: undefined, label: "Q3" }]} />)

    const bar = getBars()[0]
    expect(bar).toHaveClass("bg-f1-background-secondary")
    expect(bar.querySelector("div")).toBeNull()
    expect(bar.getAttribute("aria-label")).toBe("Q3 · No data")
  })

  it("builds an accessible name with value / max and the percentage", () => {
    render(
      <F0ProgressSeries bars={[{ value: 1700, max: 3400, label: "Q2" }]} />
    )

    expect(getBars()[0].getAttribute("aria-label")).toBe(
      "Q2 · 1700 / 3400 (50%)"
    )
  })

  it("formats value / max through formatValue, printing a trailing unit once", () => {
    render(
      <F0ProgressSeries
        bars={[{ value: 1700, max: 3400, label: "Q2" }]}
        formatValue={(value) => `${value.toLocaleString("de-DE")} €`}
      />
    )

    expect(getBars()[0].getAttribute("aria-label")).toBe(
      "Q2 · 1.700 / 3.400 € (50%)"
    )
  })

  it("keeps a prefixed unit on both sides", () => {
    render(
      <F0ProgressSeries
        bars={[{ value: 1700, max: 3400 }]}
        formatValue={(value) => `$${value}`}
      />
    )

    expect(getBars()[0].getAttribute("aria-label")).toBe("$1700 / $3400 (50%)")
  })

  it("lets the consumer override the tooltip text", () => {
    render(
      <F0ProgressSeries
        bars={[{ value: 1700, max: 3400, label: "Q2", tooltip: "Custom" }]}
      />
    )

    expect(getBars()[0].getAttribute("aria-label")).toBe("Custom")
  })

  it.each([
    ["NaN value", { value: NaN, max: 100 }],
    ["Infinite value", { value: Infinity, max: 100 }],
    ["NaN max", { value: 50, max: NaN }],
    ["zero max", { value: 50, max: 0 }],
  ])("treats a bar with %s as empty, never leaking NaN", (_case, bar) => {
    render(<F0ProgressSeries bars={[{ ...bar, label: "Q1" }]} />)

    const rendered = getBars()[0]
    expect(rendered.querySelector("div")).toBeNull()
    expect(rendered.getAttribute("aria-label")).toBe("Q1 · No data")
    expect(rendered.outerHTML).not.toContain("NaN")
  })

  it("shows a label under every bar when count <= maxLabels, with % as the default caption", () => {
    render(<F0ProgressSeries bars={quarters} />)

    expect(screen.getByText("Q1")).toBeInTheDocument()
    expect(screen.getByText("Q4")).toBeInTheDocument()
    expect(screen.getByText("100%")).toBeInTheDocument()
    expect(screen.getByText("50%")).toBeInTheDocument()
  })

  it("shows only maxLabels labels, evenly spaced, when there are more bars (12 → 0,3,6,9)", () => {
    render(
      <F0ProgressSeries
        bars={months.map((label) => ({ value: 50, max: 100, label }))}
      />
    )

    for (const shown of ["Jan", "Apr", "Jul", "Oct"]) {
      expect(screen.getByText(shown)).toBeInTheDocument()
    }
    for (const hidden of ["Feb", "Mar", "May", "Dec"]) {
      expect(screen.queryByText(hidden)).not.toBeInTheDocument()
    }
  })

  it("spreads labels evenly when the count is not a multiple of maxLabels", () => {
    render(
      <F0ProgressSeries
        bars={["A", "B", "C", "D", "E", "F"].map((label) => ({
          value: 50,
          max: 100,
          label,
        }))}
      />
    )

    // floor(i * 6 / 4) → 0, 1, 3, 4 — spread across the row, not bunched left.
    for (const shown of ["A", "B", "D", "E"]) {
      expect(screen.getByText(shown)).toBeInTheDocument()
    }
    for (const hidden of ["C", "F"]) {
      expect(screen.queryByText(hidden)).not.toBeInTheDocument()
    }
  })

  it("honours an explicit maxLabels", () => {
    render(<F0ProgressSeries bars={quarters} maxLabels={2} />)

    expect(screen.getByText("Q1")).toBeInTheDocument()
    expect(screen.getByText("Q3")).toBeInTheDocument()
    expect(screen.queryByText("Q2")).not.toBeInTheDocument()
  })

  it("hides the caption when passed as an empty string", () => {
    render(
      <F0ProgressSeries
        bars={[{ value: 100, max: 100, label: "Q1", caption: "" }]}
      />
    )

    expect(screen.getByText("Q1")).toBeInTheDocument()
    expect(screen.queryByText("100%")).not.toBeInTheDocument()
  })

  it("still renders bars when hideTooltip is true", () => {
    render(<F0ProgressSeries bars={[{ value: 50, max: 100 }]} hideTooltip />)

    expect(getBars()).toHaveLength(1)
  })

  it("renders a skeleton with aria-busy while loading", () => {
    render(<F0ProgressSeries bars={[]} loading />)

    expect(screen.getByTestId("skeleton")).toBeInTheDocument()
    expect(screen.getByTestId("skeleton").parentElement).toHaveAttribute(
      "aria-busy"
    )
  })

  it.each([
    ["sm", "h-1.5", "text-xs"],
    ["md", "h-2", "text-sm"],
    // The label caps at text-sm: a taller bar doesn't warrant bigger text.
    ["lg", "h-3", "text-sm"],
  ] as const)(
    "scales the bar height and the label row for size %s",
    (size, height, text) => {
      render(
        <F0ProgressSeries bars={[{ value: 50, label: "Q1" }]} size={size} />
      )

      expect(getBars()[0].parentElement).toHaveClass(height)
      expect(screen.getByText("Q1").parentElement).toHaveClass(text)
    }
  )
})
