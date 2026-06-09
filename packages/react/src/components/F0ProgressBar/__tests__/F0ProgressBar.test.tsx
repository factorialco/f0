import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0ProgressBar } from "../index"

vi.mock("@/kits/Charts/utils/colors", () => ({
  getColor: (key: string) => `mock-color-${key}`,
  getCategoricalColor: (index: number) => `mock-categorical-${index}`,
}))

describe("F0ProgressBar (base)", () => {
  it("renders the correct number of segments", () => {
    const { container } = render(
      <F0ProgressBar
        segments={[
          { value: 30, color: "categorical-1" },
          { value: 50, color: "categorical-2" },
          { value: 20, color: "categorical-3" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars).toHaveLength(3)
  })

  it("calculates percentage widths from segment values", () => {
    const { container } = render(
      <F0ProgressBar
        segments={[
          { value: 25, color: "categorical-1" },
          { value: 75, color: "categorical-2" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({ width: "25%" })
    expect(bars[1]).toHaveStyle({ width: "75%" })
  })

  it("uses max prop as total when provided", () => {
    const { container } = render(
      <F0ProgressBar
        segments={[
          { value: 25, color: "categorical-1" },
          { value: 25, color: "categorical-2" },
        ]}
        max={200}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({ width: "12.5%" })
    expect(bars[1]).toHaveStyle({ width: "12.5%" })
  })

  it("applies color tokens via getColor", () => {
    const { container } = render(
      <F0ProgressBar
        segments={[
          { value: 50, color: "categorical-3" },
          { value: 50, color: "categorical-5" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({
      backgroundColor: "mock-color-categorical-3",
    })
    expect(bars[1]).toHaveStyle({
      backgroundColor: "mock-color-categorical-5",
    })
  })

  it("falls back to categorical index colors when no color is provided", () => {
    const { container } = render(
      <F0ProgressBar segments={[{ value: 50 }, { value: 50 }]} />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({
      backgroundColor: "mock-color-categorical-1",
    })
    expect(bars[1]).toHaveStyle({
      backgroundColor: "mock-color-categorical-2",
    })
  })

  it("renders with progressbar role and aria attributes", () => {
    render(
      <F0ProgressBar
        segments={[
          { value: 30, color: "categorical-1" },
          { value: 70, color: "categorical-2" },
        ]}
      />
    )

    const progressbar = screen.getByRole("progressbar")
    expect(progressbar).toHaveAttribute("aria-valuemin", "0")
    expect(progressbar).toHaveAttribute("aria-valuemax", "100")
    expect(progressbar).toHaveAttribute("aria-valuenow", "100")
  })

  it("handles zero total gracefully", () => {
    const { container } = render(
      <F0ProgressBar
        segments={[
          { value: 0, color: "categorical-1" },
          { value: 0, color: "categorical-2" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({ width: "0%" })
    expect(bars[1]).toHaveStyle({ width: "0%" })
  })

  it("renders empty when no segments provided", () => {
    const { container } = render(<F0ProgressBar segments={[]} />)
    const bars = container.querySelectorAll(".rounded")
    expect(bars).toHaveLength(0)
  })
})

describe("F0ProgressBar.Steps", () => {
  it("renders the correct number of step segments", () => {
    const { container } = render(
      <F0ProgressBar.Steps total={5} completed={3} />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars).toHaveLength(5)
  })

  it("marks completed steps with active color and rest as inactive", () => {
    const { container } = render(
      <F0ProgressBar.Steps total={3} completed={2} />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({
      backgroundColor: "mock-color-categorical-1",
    })
    expect(bars[1]).toHaveStyle({
      backgroundColor: "mock-color-categorical-1",
    })
    expect(bars[2]).toHaveStyle({
      backgroundColor: "var(--f1-foreground-disabled)",
    })
  })

  it("supports custom color token", () => {
    const { container } = render(
      <F0ProgressBar.Steps total={2} completed={1} color="categorical-4" />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({
      backgroundColor: "mock-color-categorical-4",
    })
  })

  it("clamps completed to total", () => {
    const { container } = render(
      <F0ProgressBar.Steps total={3} completed={10} />
    )

    const bars = container.querySelectorAll(".rounded")
    bars.forEach((bar) => {
      expect(bar).toHaveStyle({
        backgroundColor: "mock-color-categorical-1",
      })
    })
  })

  it("renders aria attributes with step context", () => {
    render(<F0ProgressBar.Steps total={5} completed={3} />)

    const progressbar = screen.getByRole("progressbar")
    expect(progressbar).toHaveAttribute("aria-valuemin", "0")
    expect(progressbar).toHaveAttribute("aria-valuemax", "5")
    expect(progressbar).toHaveAttribute("aria-valuenow", "3")
    expect(progressbar).toHaveAttribute(
      "aria-valuetext",
      "3 of 5 steps completed"
    )
  })
})

describe("F0ProgressBar.Distribution", () => {
  it("renders segments with proportional widths", () => {
    const { container } = render(
      <F0ProgressBar.Distribution
        items={[
          { label: "Male", value: 60 },
          { label: "Female", value: 40 },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars).toHaveLength(2)
    expect(bars[0]).toHaveStyle({ width: "60%" })
    expect(bars[1]).toHaveStyle({ width: "40%" })
  })

  it("assigns categorical colors by default", () => {
    const { container } = render(
      <F0ProgressBar.Distribution
        items={[
          { label: "A", value: 50 },
          { label: "B", value: 50 },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({
      backgroundColor: "mock-color-categorical-1",
    })
    expect(bars[1]).toHaveStyle({
      backgroundColor: "mock-color-categorical-2",
    })
  })

  it("uses custom color tokens when provided", () => {
    const { container } = render(
      <F0ProgressBar.Distribution
        items={[
          { label: "A", value: 50, color: "categorical-6" },
          { label: "B", value: 50, color: "categorical-8" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({
      backgroundColor: "mock-color-categorical-6",
    })
    expect(bars[1]).toHaveStyle({
      backgroundColor: "mock-color-categorical-8",
    })
  })

  it("renders aria-label with distribution percentages", () => {
    render(
      <F0ProgressBar.Distribution
        items={[
          { label: "Male", value: 60 },
          { label: "Female", value: 30 },
          { label: "Other", value: 10 },
        ]}
      />
    )

    const progressbar = screen.getByRole("progressbar")
    expect(progressbar).toHaveAttribute(
      "aria-label",
      "Male: 60%, Female: 30%, Other: 10%"
    )
  })
})
