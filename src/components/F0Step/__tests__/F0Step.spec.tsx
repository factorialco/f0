import { render, screen } from "@testing-library/react-native"
import React from "react"
import { View } from "react-native"

import { F0StepSegment } from "../F0StepSegment"
import { F0Step } from "../index"

describe("F0StepSegment", () => {
  it("Snapshot - step states", () => {
    const { toJSON } = render(
      <View className="w-40 flex-row gap-2">
        <F0StepSegment state="active" />
        <F0StepSegment state="completed" />
        <F0StepSegment state="pending" />
      </View>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it("renders semantic classes for each state", () => {
    render(
      <View className="w-40 flex-row gap-2">
        <F0StepSegment state="active" testID="step-active" />
        <F0StepSegment state="completed" testID="step-completed" />
        <F0StepSegment state="pending" testID="step-pending" />
      </View>
    )

    expect(
      screen.getByTestId("step-active").children[0].props.className
    ).toContain("bg-f0-background-bold")
    expect(screen.getByTestId("step-completed").props.className).toContain(
      "flex-1"
    )
    expect(
      screen.getByTestId("step-completed").children[0].props.className
    ).toContain("bg-f0-background-selected-bold")
    expect(
      screen.getByTestId("step-pending").children[0].props.className
    ).toContain("bg-f0-background-tertiary")
  })

  it("renders decorative segments only", () => {
    render(
      <View className="w-40 flex-row gap-2">
        <F0StepSegment state="active" testID="step-active" />
      </View>
    )

    expect(screen.queryByRole("button")).toBeNull()
  })
})

describe("F0Step", () => {
  it("Snapshot - middle step active", () => {
    const { toJSON } = render(
      <F0Step steps={4} currentStep={1} accessibilityLabel="Flow progress" />
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it("renders one segment per normalized step", () => {
    render(<F0Step steps={4} currentStep={1} testID="flow-progress" />)

    expect(screen.getByTestId("flow-progress").children).toHaveLength(4)
  })

  it("clamps currentStep below zero", () => {
    render(<F0Step steps={4} currentStep={-3} testID="flow-progress" />)

    const progress = screen.getByRole("progressbar")

    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 4,
      now: 1,
    })
    expect(
      screen.getByTestId("flow-progress-segment-0").children[0].props.className
    ).toContain("bg-f0-background-bold")
    expect(
      screen.getByTestId("flow-progress-segment-1").children[0].props.className
    ).toContain("bg-f0-background-tertiary")
  })

  it("clamps currentStep above the last step", () => {
    render(<F0Step steps={4} currentStep={12} testID="flow-progress" />)

    const progress = screen.getByRole("progressbar")

    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 4,
      now: 4,
    })
    expect(
      screen.getByTestId("flow-progress-segment-3").children[0].props.className
    ).toContain("bg-f0-background-bold")
  })

  it("falls back to one step for invalid step counts", () => {
    render(
      <F0Step
        steps={Number.NaN}
        currentStep={Number.NaN}
        testID="flow-progress"
      />
    )

    const progress = screen.getByRole("progressbar")

    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 1,
      now: 1,
    })
    expect(screen.getByTestId("flow-progress").children).toHaveLength(1)
  })

  it("sets accessibility label and value", () => {
    render(
      <F0Step steps={5} currentStep={2} accessibilityLabel="Story progress" />
    )

    const progress = screen.getByRole("progressbar")

    expect(progress.props.accessibilityLabel).toBe("Story progress")
    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 5,
      now: 3,
    })
  })

  it("supports explicit step states with no active segment", () => {
    render(
      <F0Step
        stepStates={["completed", "completed", "completed"]}
        testID="flow-progress"
      />
    )

    const progress = screen.getByRole("progressbar")

    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 3,
      now: 3,
    })
    expect(
      screen.getByTestId("flow-progress-segment-0").children[0].props.className
    ).toContain("bg-f0-background-selected-bold")
  })

  it("preserves completed progress in derived mode when currentStep moves backward", () => {
    render(
      <F0Step
        steps={4}
        currentStep={0}
        furthestReachedStep={2}
        testID="flow-progress"
      />
    )

    const progress = screen.getByRole("progressbar")

    expect(progress.props.accessibilityValue).toEqual({
      min: 0,
      max: 4,
      now: 3,
    })
    expect(
      screen.getByTestId("flow-progress-segment-0").children[0].props.className
    ).toContain("bg-f0-background-bold")
    expect(
      screen.getByTestId("flow-progress-segment-1").children[0].props.className
    ).toContain("bg-f0-background-selected-bold")
    expect(
      screen.getByTestId("flow-progress-segment-2").children[0].props.className
    ).toContain("bg-f0-background-selected-bold")
  })
})
