import React from "react"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import userEvent from "@testing-library/user-event"

import { F0Wizard } from "../F0Wizard"
import type { F0WizardStep } from "../types"

const makeSteps = (count: number): F0WizardStep[] =>
  Array.from({ length: count }, (_, i) => ({ title: `Step ${i + 1}` }))

describe("F0Wizard", () => {
  it("renders the wizard with title and steps", () => {
    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        title="Add employee"
        steps={makeSteps(3)}
      >
        {({ currentStep }) => <div>Content for step {currentStep}</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Add employee")).toBeInTheDocument()
    expect(screen.getByText("Step 1")).toBeInTheDocument()
    expect(screen.getByText("Step 2")).toBeInTheDocument()
    expect(screen.getByText("Step 3")).toBeInTheDocument()
    expect(screen.getByText("Content for step 0")).toBeInTheDocument()
  })

  it("does not render when isOpen is false", () => {
    render(
      <F0Wizard
        isOpen={false}
        onClose={() => {}}
        title="Add employee"
        steps={makeSteps(3)}
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    expect(screen.queryByText("Add employee")).not.toBeInTheDocument()
  })

  it("shows Continue button on non-last steps and Submit on last step", () => {
    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={makeSteps(1)}>
        {() => <div>Content</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Submit")).toBeInTheDocument()
  })

  it("navigates to next step when Continue is clicked", async () => {
    const user = userEvent.setup()

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={makeSteps(3)}>
        {({ currentStep }) => (
          <div data-testid="step-content">Step {currentStep}</div>
        )}
      </F0Wizard>
    )

    expect(screen.getByTestId("step-content")).toHaveTextContent("Step 0")

    await user.click(screen.getByText("Continue"))

    await waitFor(() => {
      expect(screen.getByTestId("step-content")).toHaveTextContent("Step 1")
    })
  })

  it("navigates back when Previous is clicked", async () => {
    const user = userEvent.setup()

    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(3)}
        defaultStepIndex={1}
      >
        {({ currentStep }) => (
          <div data-testid="step-content">Step {currentStep}</div>
        )}
      </F0Wizard>
    )

    expect(screen.getByTestId("step-content")).toHaveTextContent("Step 1")

    await user.click(screen.getByText("Previous"))

    await waitFor(() => {
      expect(screen.getByTestId("step-content")).toHaveTextContent("Step 0")
    })
  })

  it("does not show Previous button on the first step", () => {
    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={makeSteps(3)}>
        {() => <div>Content</div>}
      </F0Wizard>
    )

    expect(screen.queryByText("Previous")).not.toBeInTheDocument()
  })

  it("shows Previous button on non-first steps", () => {
    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(3)}
        defaultStepIndex={1}
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Previous")).toBeInTheDocument()
  })

  it("calls onSubmit when Continue is clicked on the last step", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue(undefined)

    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(2)}
        defaultStepIndex={1}
        onSubmit={onSubmit}
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    await user.click(screen.getByText("Submit"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledOnce()
    })
  })

  it("calls onStepChanged when navigating", async () => {
    const user = userEvent.setup()
    const onStepChanged = vi.fn()

    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(3)}
        onStepChanged={onStepChanged}
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    await user.click(screen.getByText("Continue"))

    await waitFor(() => {
      expect(onStepChanged).toHaveBeenCalledWith(1)
    })
  })

  it("uses custom button labels", () => {
    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(3)}
        defaultStepIndex={1}
        nextLabel="Next step"
        previousLabel="Go back"
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Next step")).toBeInTheDocument()
    expect(screen.getByText("Go back")).toBeInTheDocument()
  })

  it("uses custom submit label on last step", () => {
    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(2)}
        defaultStepIndex={1}
        submitLabel="Create employee"
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Create employee")).toBeInTheDocument()
  })

  it("uses step-level label overrides", () => {
    const steps: F0WizardStep[] = [
      { title: "Step 1", nextLabel: "Validate" },
      { title: "Step 2" },
    ]

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={steps}>
        {() => <div>Content</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Validate")).toBeInTheDocument()
  })

  it("renders step navigation with aria-current on active step", () => {
    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(3)}
        defaultStepIndex={1}
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    expect(nav).toBeInTheDocument()

    const buttons = nav.querySelectorAll("button")
    expect(buttons[1]).toHaveAttribute("aria-current", "step")
    expect(buttons[0]).not.toHaveAttribute("aria-current")
    expect(buttons[2]).not.toHaveAttribute("aria-current")
  })

  it("allows clicking on a step to navigate to it", async () => {
    const user = userEvent.setup()

    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(3)}
        defaultStepIndex={1}
      >
        {({ currentStep }) => (
          <div data-testid="step-content">Current: {currentStep}</div>
        )}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    await user.click(stepButtons[0])

    await waitFor(() => {
      expect(screen.getByTestId("step-content")).toHaveTextContent("Current: 0")
    })
  })

  it("starts at defaultStepIndex", () => {
    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(3)}
        defaultStepIndex={2}
      >
        {({ currentStep }) => (
          <div data-testid="step-content">Step {currentStep}</div>
        )}
      </F0Wizard>
    )

    expect(screen.getByTestId("step-content")).toHaveTextContent("Step 2")
  })

  it("disables Next button when isCompleted returns false", () => {
    const steps: F0WizardStep[] = [
      { title: "Step 1", isCompleted: () => false },
      { title: "Step 2" },
    ]

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={steps}>
        {() => <div>Content</div>}
      </F0Wizard>
    )

    const continueButton = screen.getByText("Continue").closest("button")
    expect(continueButton).toBeDisabled()
  })

  it("provides goToStep to children render prop (with allowStepSkipping)", async () => {
    const user = userEvent.setup()

    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(3)}
        allowStepSkipping
      >
        {({ currentStep, goToStep }) => (
          <div>
            <div data-testid="step-content">Step {currentStep}</div>
            <button onClick={() => goToStep(2)}>Jump to step 3</button>
          </div>
        )}
      </F0Wizard>
    )

    await user.click(screen.getByText("Jump to step 3"))

    await waitFor(() => {
      expect(screen.getByTestId("step-content")).toHaveTextContent("Step 2")
    })
  })

  it("blocks goToStep from skipping steps by default", async () => {
    const user = userEvent.setup()

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={makeSteps(3)}>
        {({ currentStep, goToStep }) => (
          <div>
            <div data-testid="step-content">Step {currentStep}</div>
            <button onClick={() => goToStep(2)}>Jump to step 3</button>
          </div>
        )}
      </F0Wizard>
    )

    await user.click(screen.getByText("Jump to step 3"))

    await waitFor(() => {
      expect(screen.getByTestId("step-content")).toHaveTextContent("Step 0")
    })
  })

  it("disables Continue button when hasErrors returns true", () => {
    const steps: F0WizardStep[] = [
      { title: "Step 1", hasErrors: () => true },
      { title: "Step 2" },
    ]

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={steps}>
        {() => <div>Content</div>}
      </F0Wizard>
    )

    const continueButton = screen.getByText("Continue").closest("button")
    expect(continueButton).toBeDisabled()
  })

  it("does not disable Continue button when hasErrors returns false", () => {
    const steps: F0WizardStep[] = [
      { title: "Step 1", hasErrors: () => false },
      { title: "Step 2" },
    ]

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={steps}>
        {() => <div>Content</div>}
      </F0Wizard>
    )

    const continueButton = screen.getByText("Continue").closest("button")
    expect(continueButton).not.toBeDisabled()
  })

  it("stays on current step when onNext rejects", async () => {
    const user = userEvent.setup()
    const onNext = vi.fn().mockRejectedValue(new Error("Validation failed"))

    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext },
      { title: "Step 2" },
    ]

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={steps}>
        {({ currentStep }) => (
          <div data-testid="step-content">Step {currentStep}</div>
        )}
      </F0Wizard>
    )

    await user.click(screen.getByText("Continue"))

    await waitFor(() => {
      expect(screen.getByTestId("step-content")).toHaveTextContent("Step 0")
    })
    expect(onNext).toHaveBeenCalledOnce()
  })

  it("blocks step jumping when current step has errors", async () => {
    const user = userEvent.setup()

    const steps: F0WizardStep[] = [
      { title: "Step 1", hasErrors: () => true },
      { title: "Step 2" },
      { title: "Step 3" },
    ]

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={steps}>
        {({ currentStep }) => (
          <div data-testid="step-content">Current: {currentStep}</div>
        )}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    await user.click(stepButtons[1])

    expect(screen.getByTestId("step-content")).toHaveTextContent("Current: 0")
  })

  it("sidebar next step click triggers onNext validation", async () => {
    const user = userEvent.setup()
    const onNext = vi.fn().mockResolvedValue(undefined)

    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext },
      { title: "Step 2" },
    ]

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={steps}>
        {({ currentStep }) => (
          <div data-testid="step-content">Step {currentStep}</div>
        )}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    await user.click(stepButtons[1])

    await waitFor(() => {
      expect(onNext).toHaveBeenCalledOnce()
      expect(screen.getByTestId("step-content")).toHaveTextContent("Step 1")
    })
  })

  it("sidebar next step click stays put when onNext rejects", async () => {
    const user = userEvent.setup()
    const onNext = vi.fn().mockRejectedValue(new Error("Validation failed"))

    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext },
      { title: "Step 2" },
    ]

    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={steps}>
        {({ currentStep }) => (
          <div data-testid="step-content">Step {currentStep}</div>
        )}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    await user.click(stepButtons[1])

    await waitFor(() => {
      expect(onNext).toHaveBeenCalledOnce()
    })

    expect(screen.getByTestId("step-content")).toHaveTextContent("Step 0")
  })

  it("with allowStepSkipping, clicking a far step validates intermediate steps", async () => {
    const user = userEvent.setup()
    const onNext0 = vi.fn().mockResolvedValue(undefined)
    const onNext1 = vi.fn().mockResolvedValue(undefined)

    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext: onNext0 },
      { title: "Step 2", onNext: onNext1 },
      { title: "Step 3" },
    ]

    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={steps}
        allowStepSkipping
      >
        {({ currentStep }) => (
          <div data-testid="step-content">Step {currentStep}</div>
        )}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    await user.click(stepButtons[2])

    await waitFor(() => {
      expect(onNext0).toHaveBeenCalledOnce()
      expect(onNext1).toHaveBeenCalledOnce()
      expect(screen.getByTestId("step-content")).toHaveTextContent("Step 2")
    })
  })

  it("with allowStepSkipping, clicking a far step stays put if intermediate validation fails", async () => {
    const user = userEvent.setup()
    const onNext0 = vi.fn().mockResolvedValue(undefined)
    const onNext1 = vi.fn().mockRejectedValue(new Error("Validation failed"))

    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext: onNext0 },
      { title: "Step 2", onNext: onNext1 },
      { title: "Step 3" },
    ]

    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={steps}
        allowStepSkipping
      >
        {({ currentStep }) => (
          <div data-testid="step-content">Step {currentStep}</div>
        )}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    await user.click(stepButtons[2])

    await waitFor(() => {
      expect(onNext0).toHaveBeenCalledOnce()
      expect(onNext1).toHaveBeenCalledOnce()
    })

    expect(screen.getByTestId("step-content")).toHaveTextContent("Step 0")
  })

  it("disables sidebar steps >1 ahead by default", () => {
    render(
      <F0Wizard isOpen={true} onClose={() => {}} steps={makeSteps(4)}>
        {() => <div>Content</div>}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const buttons = nav.querySelectorAll("button")

    expect(buttons[1]).not.toBeDisabled()
    expect(buttons[2]).toBeDisabled()
    expect(buttons[3]).toBeDisabled()
  })

  it("enables sidebar steps >1 ahead with allowStepSkipping", () => {
    render(
      <F0Wizard
        isOpen={true}
        onClose={() => {}}
        steps={makeSteps(4)}
        allowStepSkipping
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const buttons = nav.querySelectorAll("button")

    expect(buttons[1]).not.toBeDisabled()
    expect(buttons[2]).not.toBeDisabled()
    expect(buttons[3]).not.toBeDisabled()
  })

  // ---------------------------------------------------------------------------
  // autoCloseOnLastStepSubmit
  // ---------------------------------------------------------------------------

  it("calls onClose after last step submit with autoCloseOnLastStepSubmit", async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const onSubmit = vi.fn().mockResolvedValue(undefined)

    render(
      <F0Wizard
        isOpen={true}
        onClose={onClose}
        steps={[{ title: "Only step" }]}
        onSubmit={onSubmit}
        autoCloseOnLastStepSubmit
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    await user.click(screen.getByText("Submit"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  it("does not call onClose without autoCloseOnLastStepSubmit", async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const onSubmit = vi.fn().mockResolvedValue(undefined)

    render(
      <F0Wizard
        isOpen={true}
        onClose={onClose}
        steps={[{ title: "Only step" }]}
        onSubmit={onSubmit}
      >
        {() => <div>Content</div>}
      </F0Wizard>
    )

    await user.click(screen.getByText("Submit"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })

    expect(onClose).not.toHaveBeenCalled()
  })

  // ---------------------------------------------------------------------------
  // autoSkipCompletedSteps
  // ---------------------------------------------------------------------------

  it("skips to the first non-completed step on open when autoSkipCompletedSteps is enabled", () => {
    render(
      <F0Wizard
        isOpen={true}
        steps={[
          { title: "Step 1", isCompleted: () => true },
          { title: "Step 2", isCompleted: () => true },
          { title: "Step 3" },
        ]}
        autoSkipCompletedSteps
      >
        {({ currentStep }) => <div>Step {currentStep + 1} content</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Step 3 content")).toBeInTheDocument()
  })

  it("stays on last step when all steps are completed with autoSkipCompletedSteps", () => {
    render(
      <F0Wizard
        isOpen={true}
        steps={[
          { title: "Step 1", isCompleted: () => true },
          { title: "Step 2", isCompleted: () => true },
        ]}
        autoSkipCompletedSteps
      >
        {({ currentStep }) => <div>Step {currentStep + 1} content</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Step 2 content")).toBeInTheDocument()
  })

  it("does not skip steps when autoSkipCompletedSteps is disabled", () => {
    render(
      <F0Wizard
        isOpen={true}
        steps={[
          { title: "Step 1", isCompleted: () => true },
          { title: "Step 2" },
        ]}
      >
        {({ currentStep }) => <div>Step {currentStep + 1} content</div>}
      </F0Wizard>
    )

    expect(screen.getByText("Step 1 content")).toBeInTheDocument()
  })
})
