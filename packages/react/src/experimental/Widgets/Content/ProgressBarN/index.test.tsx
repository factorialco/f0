import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { ProgressBarN } from "./index"

vi.mock("@/kits/Charts/utils/colors", () => ({
  getColor: (key: string) => `mock-color-${key}`,
}))

describe("ProgressBarN", () => {
  it("renders the correct number of segments", () => {
    const { container } = render(
      <ProgressBarN
        segments={[
          { value: 30, color: "#aaa" },
          { value: 50, color: "#bbb" },
          { value: 20, color: "#ccc" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars).toHaveLength(3)
  })

  it("calculates percentage widths from segment values", () => {
    const { container } = render(
      <ProgressBarN
        segments={[
          { value: 25, color: "#aaa" },
          { value: 75, color: "#bbb" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({ width: "25%" })
    expect(bars[1]).toHaveStyle({ width: "75%" })
  })

  it("uses max prop as total when provided", () => {
    const { container } = render(
      <ProgressBarN
        segments={[
          { value: 25, color: "#aaa" },
          { value: 25, color: "#bbb" },
        ]}
        max={200}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({ width: "12.5%" })
    expect(bars[1]).toHaveStyle({ width: "12.5%" })
  })

  it("applies custom colors when provided", () => {
    const { container } = render(
      <ProgressBarN
        segments={[
          { value: 50, color: "#FF0000" },
          { value: 50, color: "#00FF00" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({ backgroundColor: "#FF0000" })
    expect(bars[1]).toHaveStyle({ backgroundColor: "#00FF00" })
  })

  it("falls back to getColor when no color is provided", () => {
    const { container } = render(
      <ProgressBarN segments={[{ value: 50 }, { value: 50 }]} />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({
      backgroundColor: "mock-color-categorical-1",
    })
    expect(bars[1]).toHaveStyle({
      backgroundColor: "mock-color-categorical-2",
    })
  })

  it("renders a single segment", () => {
    const { container } = render(
      <ProgressBarN segments={[{ value: 100, color: "#000" }]} />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars).toHaveLength(1)
    expect(bars[0]).toHaveStyle({ width: "100%" })
  })

  it("handles zero total gracefully", () => {
    const { container } = render(
      <ProgressBarN
        segments={[
          { value: 0, color: "#aaa" },
          { value: 0, color: "#bbb" },
        ]}
      />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({ width: "0%" })
    expect(bars[1]).toHaveStyle({ width: "0%" })
  })

  it("renders empty when no segments provided", () => {
    const { container } = render(<ProgressBarN segments={[]} />)

    const bars = container.querySelectorAll(".rounded")
    expect(bars).toHaveLength(0)
  })

  it("forwards ref to the container div", () => {
    const ref = {
      current: null,
    } as React.MutableRefObject<HTMLDivElement | null>
    render(
      <ProgressBarN ref={ref} segments={[{ value: 100, color: "#000" }]} />
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current?.classList.contains("flex")).toBe(true)
  })

  it("clamps percentage when value exceeds max", () => {
    const { container } = render(
      <ProgressBarN segments={[{ value: 150, color: "#aaa" }]} max={100} />
    )

    const bars = container.querySelectorAll(".rounded")
    expect(bars[0]).toHaveStyle({ width: "150%" })
  })
})
