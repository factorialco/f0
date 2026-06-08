import { render, screen } from "@testing-library/react-native"
import React from "react"

jest.mock("uniwind", () => ({
  useCSSVariable: (variables: string[]) =>
    variables.map((variable) => {
      const colorByVariable: Record<string, string> = {
        "--color-f0-icon-info": "#5596F6",
        "--color-f0-icon-positive": "#2E9B62",
        "--color-f0-icon-warning": "#D98C00",
        "--color-f0-icon-critical": "#D14343",
      }

      return colorByVariable[variable] ?? "#000000"
    }),
}))

import { getCircularStrokeDashoffset } from "../F0Progress"
import {
  F0_PROGRESS_CIRCULAR_BACKGROUND_OPACITY,
  F0_PROGRESS_CIRCULAR_CIRCUMFERENCE,
  F0_PROGRESS_CIRCULAR_METRICS,
} from "../F0Progress.styles"
import { F0Progress, F0_PROGRESS_STATUSES } from "../index"

describe("F0Progress", () => {
  it("Snapshot - linear variant", () => {
    const { toJSON } = render(<F0Progress type="linear" value={50} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - linear variant with label", () => {
    const { toJSON } = render(
      <F0Progress type="linear" value={50} label="50%" />
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - circular variant", () => {
    const { toJSON } = render(<F0Progress type="circular" value={50} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("clamps values below zero", () => {
    render(<F0Progress type="linear" value={-20} />)

    const progress = screen.getByRole("progressbar")
    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 100,
      now: 0,
    })
  })

  it("clamps values above one hundred", () => {
    render(<F0Progress type="linear" value={180} />)

    const progress = screen.getByRole("progressbar")
    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 100,
      now: 100,
    })
  })

  it("clamps values above max when max is provided", () => {
    render(<F0Progress type="linear" value={180} max={120} />)

    const progress = screen.getByRole("progressbar")
    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 120,
      now: 120,
    })
  })

  it("falls back to zero for non-finite values", () => {
    render(<F0Progress type="circular" value={Number.NaN} />)

    const progress = screen.getByRole("progressbar")
    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 100,
      now: 0,
    })
  })

  it("sets accessibility label and accessibility value", () => {
    render(
      <F0Progress
        type="linear"
        value={25}
        max={40}
        accessibilityLabel="Upload progress"
      />
    )

    const progress = screen.getByRole("progressbar")
    expect(progress.props.accessibilityLabel).toBe("Upload progress")
    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 40,
      now: 25,
    })
  })

  it("falls back to the default max for invalid max values", () => {
    render(<F0Progress type="linear" value={25} max={0} />)

    const progress = screen.getByRole("progressbar")
    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 100,
      now: 25,
    })
  })

  it("renders the visible label when provided", () => {
    render(<F0Progress type="linear" value={25} label="25%" />)

    expect(screen.getByTestId("f0-progress-label")).toBeDefined()
    expect(screen.getByText("25%")).toBeDefined()
  })

  it("renders semantic linear status classes", () => {
    F0_PROGRESS_STATUSES.forEach((status) => {
      const { unmount } = render(
        <F0Progress type="linear" value={25} status={status} />
      )

      expect(
        screen.getByTestId("f0-progress-linear-track").props.className
      ).toContain(`bg-f0-background-${status}`)
      expect(
        screen.getByTestId("f0-progress-linear-fill").props.className
      ).toContain(`bg-f0-icon-${status}`)

      unmount()
    })
  })

  it("renders the linear track and fill", () => {
    render(<F0Progress type="linear" value={75} />)

    expect(screen.getByTestId("f0-progress-linear-track")).toBeDefined()
    expect(screen.getByTestId("f0-progress-linear-fill")).toBeDefined()
    expect(screen.queryByTestId("f0-progress-circular-svg")).toBeNull()
  })

  it("renders linear progress using the provided max", () => {
    render(<F0Progress type="linear" value={25} max={40} />)

    const fill = screen.getByTestId("f0-progress-linear-fill")
    expect(fill.props.style.transform).toEqual([{ scaleX: 0.625 }])
  })

  it("renders the circular svg track and fill", () => {
    render(<F0Progress type="circular" value={75} />)

    const circularSvg = screen.getByTestId("f0-progress-circular-svg")
    const track = screen.getByTestId("f0-progress-circular-track")

    expect(circularSvg).toBeDefined()
    expect(circularSvg.props.width).toBe(
      F0_PROGRESS_CIRCULAR_METRICS.default.progressSize
    )
    expect(circularSvg.props.height).toBe(
      F0_PROGRESS_CIRCULAR_METRICS.default.progressSize
    )
    expect(track).toBeDefined()
    expect(track.props.style.opacity).toBe(
      F0_PROGRESS_CIRCULAR_BACKGROUND_OPACITY
    )
    expect(track.props.style.width).toBe(
      F0_PROGRESS_CIRCULAR_METRICS.default.size
    )
    expect(track.props.style.height).toBe(
      F0_PROGRESS_CIRCULAR_METRICS.default.size
    )
    const fill = screen.getByTestId("f0-progress-circular-fill")
    expect(fill).toBeDefined()
    expect(fill.props.strokeDasharray).toEqual([
      `${F0_PROGRESS_CIRCULAR_CIRCUMFERENCE}`,
      `${F0_PROGRESS_CIRCULAR_CIRCUMFERENCE}`,
    ])
    expect(["round", 1]).toContain(fill.props.strokeLinecap)
  })

  it("supports the compact circular size", () => {
    render(<F0Progress type="circular" value={75} size="small" />)

    const circularSvg = screen.getByTestId("f0-progress-circular-svg")
    const fill = screen.getByTestId("f0-progress-circular-fill")

    expect(circularSvg.props.width).toBe(
      F0_PROGRESS_CIRCULAR_METRICS.small.progressSize
    )
    expect(circularSvg.props.height).toBe(
      F0_PROGRESS_CIRCULAR_METRICS.small.progressSize
    )
    expect(fill.props.strokeWidth).toBe(
      F0_PROGRESS_CIRCULAR_METRICS.small.strokeWidth
    )
    expect(fill.props.strokeDasharray).toEqual([
      `${F0_PROGRESS_CIRCULAR_METRICS.small.circumference}`,
      `${F0_PROGRESS_CIRCULAR_METRICS.small.circumference}`,
    ])
  })

  it("keeps a visible circular gap before completion", () => {
    const ninetyNineOffset = getCircularStrokeDashoffset(
      99,
      F0_PROGRESS_CIRCULAR_METRICS.default.circumference,
      F0_PROGRESS_CIRCULAR_METRICS.default.strokeWidth
    )
    const hundredOffset = getCircularStrokeDashoffset(
      100,
      F0_PROGRESS_CIRCULAR_METRICS.default.circumference,
      F0_PROGRESS_CIRCULAR_METRICS.default.strokeWidth
    )

    expect(ninetyNineOffset).toBeGreaterThan(0)
    expect(hundredOffset).toBe(0)
    expect(ninetyNineOffset).toBeGreaterThan(hundredOffset)
  })
})
