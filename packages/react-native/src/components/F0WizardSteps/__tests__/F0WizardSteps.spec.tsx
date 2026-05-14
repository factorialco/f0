import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native"
import React from "react"
import { Text } from "react-native"

import { F0WizardSteps } from "../F0WizardSteps"
import type { F0WizardStepsStep } from "../F0WizardSteps.types"

const makeSteps = (count: number): F0WizardStepsStep[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Title ${i + 1}`,
    renderContent: () => <Text testID={`content-${i}`}>Content {i + 1}</Text>,
  }))

const LABELS = {
  nextLabel: "Next",
  previousLabel: "Back",
  submitLabel: "Submit",
}

describe("F0WizardSteps", () => {
  it("renders root, content area and nav buttons for a single step", () => {
    render(<F0WizardSteps steps={makeSteps(1)} testID="wizard" {...LABELS} />)

    expect(screen.getByTestId("wizard")).toBeTruthy()
    expect(screen.getByTestId("wizard-content")).toBeTruthy()
    expect(screen.getByTestId("wizard-back-button")).toBeTruthy()
    expect(screen.getByTestId("wizard-next-button")).toBeTruthy()
    // single step: back is disabled, next shows the submit label
    expect(
      screen.getByTestId("wizard-back-button").props.accessibilityState
        ?.disabled
    ).toBe(true)
    expect(screen.getByText("Submit")).toBeTruthy()
  })

  it("renders root, content area and nav buttons for multiple steps", () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    expect(screen.getByTestId("wizard")).toBeTruthy()
    expect(screen.getByTestId("wizard-content")).toBeTruthy()
    expect(screen.getByTestId("wizard-back-button")).toBeTruthy()
    expect(screen.getByTestId("wizard-next-button")).toBeTruthy()
    // first of 3 steps: back disabled, next shows the next label
    expect(
      screen.getByTestId("wizard-back-button").props.accessibilityState
        ?.disabled
    ).toBe(true)
    expect(screen.getByText("Next")).toBeTruthy()
  })

  it("renders the title of the current step", () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    expect(screen.getByText("Title 1")).toBeTruthy()
  })

  it("renders the content of the current step", () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    expect(screen.getByTestId("content-0")).toBeTruthy()
  })

  it("renders the Back button disabled on the first step", () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    expect(
      screen.getByTestId("wizard-back-button").props.accessibilityState
        ?.disabled
    ).toBe(true)
  })

  it("advances to the next step when Next is pressed", async () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(screen.getByText("Title 2")).toBeTruthy()
      expect(screen.getByTestId("content-1")).toBeTruthy()
    })
  })

  it("enables the Back button after advancing to step 2", async () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(
        screen.getByTestId("wizard-back-button").props.accessibilityState
          ?.disabled
      ).toBeFalsy()
    })
  })

  it("goes back to previous step when Back is pressed", async () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    fireEvent.press(screen.getByTestId("wizard-next-button"))
    await waitFor(() => expect(screen.getByText("Title 2")).toBeTruthy())

    fireEvent.press(screen.getByTestId("wizard-back-button"))
    await waitFor(() => expect(screen.getByText("Title 1")).toBeTruthy())
  })

  it("calls onStepChanged when navigating forward", async () => {
    const onStepChanged = jest.fn()
    render(
      <F0WizardSteps
        steps={makeSteps(3)}
        testID="wizard"
        {...LABELS}
        onStepChanged={onStepChanged}
      />
    )

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(onStepChanged).toHaveBeenCalledWith(1)
    })
  })

  it("calls onStepChanged when navigating backward", async () => {
    const onStepChanged = jest.fn()
    render(
      <F0WizardSteps
        steps={makeSteps(3)}
        testID="wizard"
        {...LABELS}
        onStepChanged={onStepChanged}
      />
    )

    fireEvent.press(screen.getByTestId("wizard-next-button"))
    await waitFor(() => expect(screen.getByText("Title 2")).toBeTruthy())

    fireEvent.press(screen.getByTestId("wizard-back-button"))
    await waitFor(() => {
      expect(onStepChanged).toHaveBeenLastCalledWith(0)
    })
  })

  it("shows Submit label on the last step", async () => {
    render(
      <F0WizardSteps
        steps={makeSteps(2)}
        testID="wizard"
        {...LABELS}
        submitLabel="Finish"
      />
    )

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(screen.getByText("Finish")).toBeTruthy()
    })
  })

  it("calls onSubmit when confirming the last step", async () => {
    const onSubmit = jest.fn()
    render(
      <F0WizardSteps
        steps={makeSteps(1)}
        testID="wizard"
        {...LABELS}
        onSubmit={onSubmit}
      />
    )

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it("disables the Next button when canAdvance is false", () => {
    const steps: F0WizardStepsStep[] = [
      {
        title: "Personal info",
        renderContent: () => <Text>Content</Text>,
        canAdvance: false,
      },
      {
        title: "Confirm",
        renderContent: () => <Text>Content 2</Text>,
      },
    ]

    render(<F0WizardSteps steps={steps} testID="wizard" {...LABELS} />)

    expect(
      screen.getByTestId("wizard-next-button").props.accessibilityState
        ?.disabled
    ).toBe(true)
  })

  it("blocks navigation when onNext returns canAdvance: false", async () => {
    const onNext = jest.fn().mockResolvedValue({ canAdvance: false })
    const steps: F0WizardStepsStep[] = [
      {
        title: "Personal info",
        renderContent: () => <Text>Content</Text>,
        onNext,
      },
      {
        title: "Confirm",
        renderContent: () => <Text>Content 2</Text>,
      },
    ]

    render(<F0WizardSteps steps={steps} testID="wizard" {...LABELS} />)

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(onNext).toHaveBeenCalledTimes(1)
      expect(screen.getByText("Personal info")).toBeTruthy()
    })
  })

  it("advances when onNext returns canAdvance: true", async () => {
    const onNext = jest.fn().mockResolvedValue({ canAdvance: true })
    const steps: F0WizardStepsStep[] = [
      {
        title: "Personal info",
        renderContent: () => <Text>Content</Text>,
        onNext,
      },
      {
        title: "Confirm",
        renderContent: () => <Text>Content 2</Text>,
      },
    ]

    render(<F0WizardSteps steps={steps} testID="wizard" {...LABELS} />)

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(screen.getByText("Confirm")).toBeTruthy()
    })
  })

  it("uses step-level nextLabel over global nextLabel", () => {
    const steps: F0WizardStepsStep[] = [
      {
        title: "Personal info",
        renderContent: () => <Text>Content</Text>,
        nextLabel: "Continue",
      },
      {
        title: "Confirm",
        renderContent: () => <Text>Content 2</Text>,
      },
    ]

    render(
      <F0WizardSteps
        steps={steps}
        testID="wizard"
        {...LABELS}
        nextLabel="Next global"
      />
    )

    expect(screen.getByText("Continue")).toBeTruthy()
  })

  it("respects defaultStepIndex", () => {
    render(
      <F0WizardSteps
        steps={makeSteps(3)}
        testID="wizard"
        {...LABELS}
        defaultStepIndex={2}
      />
    )

    expect(screen.getByText("Title 3")).toBeTruthy()
  })

  it("clamps defaultStepIndex below 0 to 0", () => {
    render(
      <F0WizardSteps
        steps={makeSteps(3)}
        testID="wizard"
        {...LABELS}
        defaultStepIndex={-5}
      />
    )

    expect(screen.getByText("Title 1")).toBeTruthy()
  })

  it("clamps defaultStepIndex above last step to last step", () => {
    render(
      <F0WizardSteps
        steps={makeSteps(3)}
        testID="wizard"
        {...LABELS}
        defaultStepIndex={99}
      />
    )

    expect(screen.getByText("Title 3")).toBeTruthy()
  })

  it("renders nothing when steps is empty", () => {
    const { toJSON } = render(<F0WizardSteps steps={[]} {...LABELS} />)

    expect(toJSON()).toBeNull()
  })

  it("passes accessibilityLabel to the root view", () => {
    render(
      <F0WizardSteps
        steps={makeSteps(1)}
        testID="wizard"
        {...LABELS}
        accessibilityLabel="Onboarding wizard"
      />
    )

    expect(screen.getByTestId("wizard").props.accessibilityLabel).toBe(
      "Onboarding wizard"
    )
  })

  it("updates F0Step progress when navigating", async () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    const progressBar = screen.getByRole("progressbar")
    expect(progressBar.props.accessibilityValue.now).toBe(1) // step 0 = active (counts as 1)

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(screen.getByRole("progressbar").props.accessibilityValue.now).toBe(
        2
      )
    })
  })

  it("renders stepLabel with step number when provided", () => {
    render(
      <F0WizardSteps
        steps={makeSteps(3)}
        testID="wizard"
        {...LABELS}
        stepLabel="Step"
      />
    )

    expect(screen.getByText("Step 1")).toBeTruthy()
  })

  it("does not render step counter when stepLabel is omitted", () => {
    render(<F0WizardSteps steps={makeSteps(3)} testID="wizard" {...LABELS} />)

    expect(screen.queryByText("Step 1")).toBeNull()
  })

  it("stepLabel updates with current step number when navigating", async () => {
    render(
      <F0WizardSteps
        steps={makeSteps(3)}
        testID="wizard"
        {...LABELS}
        stepLabel="Step"
      />
    )

    fireEvent.press(screen.getByTestId("wizard-next-button"))

    await waitFor(() => {
      expect(screen.getByText("Step 2")).toBeTruthy()
    })
  })

  it("renders subtitle when provided", () => {
    const steps: F0WizardStepsStep[] = [
      {
        title: "Personal info",
        subtitle: "Tell us about yourself",
        renderContent: () => <Text>Content</Text>,
      },
    ]

    render(<F0WizardSteps steps={steps} testID="wizard" {...LABELS} />)

    expect(screen.getByText("Tell us about yourself")).toBeTruthy()
  })

  it("does not render subtitle when omitted", () => {
    render(<F0WizardSteps steps={makeSteps(1)} testID="wizard" {...LABELS} />)

    expect(screen.queryByText("Tell us about yourself")).toBeNull()
  })

  it("canAdvance:false disables button and onNext is never called", async () => {
    const onNext = jest.fn().mockResolvedValue({ canAdvance: true })
    const steps: F0WizardStepsStep[] = [
      {
        title: "Personal info",
        renderContent: () => <Text>Content</Text>,
        canAdvance: false,
        onNext,
      },
      {
        title: "Confirm",
        renderContent: () => <Text>Content 2</Text>,
      },
    ]

    render(<F0WizardSteps steps={steps} testID="wizard" {...LABELS} />)

    expect(
      screen.getByTestId("wizard-next-button").props.accessibilityState
        ?.disabled
    ).toBe(true)
    expect(onNext).not.toHaveBeenCalled()
  })
})
