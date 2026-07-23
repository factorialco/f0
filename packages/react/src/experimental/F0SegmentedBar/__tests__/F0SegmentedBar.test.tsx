import { describe, expect, it } from "vitest"

import { getColor } from "@/lib/chart-colors"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0SegmentedBar } from "../index"

const getSegments = () =>
  Array.from(screen.getByRole("progressbar").children) as HTMLElement[]

describe("F0SegmentedBar", () => {
  it("renders `max` segments", () => {
    render(<F0SegmentedBar value={2} max={3} label="UX Design" />)
    expect(getSegments()).toHaveLength(3)
  })

  it("fills `value` segments with the resolved colour and leaves the rest on the track", () => {
    render(
      <F0SegmentedBar
        value={2}
        max={3}
        color="feedback-positive"
        label="UX Design"
      />
    )
    const segments = getSegments()

    expect(segments[0]).toHaveStyle({
      backgroundColor: getColor("feedback-positive"),
    })
    expect(segments[1]).toHaveStyle({
      backgroundColor: getColor("feedback-positive"),
    })
    // Empty segments carry no inline colour and fall back to the track class.
    expect(segments[2].style.backgroundColor).toBe("")
    expect(segments[2]).toHaveClass("bg-f1-background-secondary")
  })

  it("defaults the filled colour to categorical-1", () => {
    render(<F0SegmentedBar value={1} max={2} label="UX Design" />)
    expect(getSegments()[0]).toHaveStyle({
      backgroundColor: getColor("categorical-1"),
    })
  })

  it("clamps `value` greater than `max`", () => {
    render(<F0SegmentedBar value={5} max={3} label="UX Design" />)
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuenow", "3")
    expect(bar).toHaveAttribute("aria-valuetext", "3 of 3")
    getSegments().forEach((segment) =>
      expect(segment).toHaveStyle({
        backgroundColor: getColor("categorical-1"),
      })
    )
  })

  it("clamps `value` below zero", () => {
    render(<F0SegmentedBar value={-2} max={3} label="UX Design" />)
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuenow", "0")
    getSegments().forEach((segment) => {
      expect(segment.style.backgroundColor).toBe("")
      expect(segment).toHaveClass("bg-f1-background-secondary")
    })
  })

  it("exposes the progressbar a11y contract", () => {
    render(<F0SegmentedBar value={2} max={3} label="UX Design" />)
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-label", "UX Design")
    expect(bar).toHaveAttribute("aria-valuemin", "0")
    expect(bar).toHaveAttribute("aria-valuemax", "3")
    expect(bar).toHaveAttribute("aria-valuenow", "2")
    expect(bar).toHaveAttribute("aria-valuetext", "2 of 3")
  })

  it("renders no segments and does not throw when max <= 0", () => {
    render(<F0SegmentedBar value={2} max={0} label="UX Design" />)
    const bar = screen.getByRole("progressbar")
    expect(bar.children).toHaveLength(0)
    expect(bar).toHaveAttribute("aria-valuemax", "0")
    expect(bar).toHaveAttribute("aria-valuenow", "0")
  })

  it("floors a fractional value instead of over-filling", () => {
    render(
      <F0SegmentedBar
        value={2.5}
        max={3}
        color="feedback-positive"
        label="UX Design"
      />
    )
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuenow", "2")
    expect(bar).toHaveAttribute("aria-valuetext", "2 of 3")
    const segments = getSegments()
    expect(segments[1]).toHaveStyle({
      backgroundColor: getColor("feedback-positive"),
    })
    expect(segments[2].style.backgroundColor).toBe("")
  })

  it("does not leak NaN when max or value is not finite", () => {
    render(
      <F0SegmentedBar value={Number.NaN} max={Number.NaN} label="UX Design" />
    )
    const bar = screen.getByRole("progressbar")
    expect(bar.children).toHaveLength(0)
    expect(bar).toHaveAttribute("aria-valuemax", "0")
    expect(bar).toHaveAttribute("aria-valuenow", "0")
  })

  it("does not throw when max is Infinity", () => {
    render(
      <F0SegmentedBar
        value={2}
        max={Number.POSITIVE_INFINITY}
        label="UX Design"
      />
    )
    const bar = screen.getByRole("progressbar")
    expect(bar.children).toHaveLength(0)
    expect(bar).toHaveAttribute("aria-valuemax", "0")
  })
})
