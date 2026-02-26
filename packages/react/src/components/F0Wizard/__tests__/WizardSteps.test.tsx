import React from "react"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import userEvent from "@testing-library/user-event"

import { WizardProvider } from "../components/WizardProvider"
import { WizardSteps } from "../components/WizardSteps"
import type { F0WizardStep } from "../types"

function renderWithContext(
  steps: F0WizardStep[],
  currentStep = 0,
  overrides: Partial<React.ComponentProps<typeof WizardProvider>> = {}
) {
  const goToStep = overrides.goToStep ?? vi.fn()
  const goNext = overrides.goNext ?? vi.fn()
  const goPrevious = overrides.goPrevious ?? vi.fn()

  return render(
    <WizardProvider
      currentStep={currentStep}
      totalSteps={steps.length}
      loading={false}
      goToStep={goToStep}
      goNext={goNext}
      goPrevious={goPrevious}
      steps={steps}
      allowStepSkipping={overrides.allowStepSkipping ?? false}
      {...overrides}
    >
      <WizardSteps />
    </WizardProvider>
  )
}

describe("WizardSteps", () => {
  it("renders all step titles", () => {
    const steps: F0WizardStep[] = [
      { title: "General" },
      { title: "Personal" },
      { title: "Work" },
    ]

    renderWithContext(steps)

    expect(screen.getByText("General")).toBeInTheDocument()
    expect(screen.getByText("Personal")).toBeInTheDocument()
    expect(screen.getByText("Work")).toBeInTheDocument()
  })

  it("renders step numbers for non-completed steps", () => {
    const steps: F0WizardStep[] = [
      { title: "Step A" },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps)

    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  it("marks the active step with aria-current", () => {
    const steps: F0WizardStep[] = [
      { title: "Step A" },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps, 1)

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const buttons = nav.querySelectorAll("button")

    expect(buttons[0]).not.toHaveAttribute("aria-current")
    expect(buttons[1]).toHaveAttribute("aria-current", "step")
    expect(buttons[2]).not.toHaveAttribute("aria-current")
  })

  it("calls goToStep when a navigable step is clicked", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A" },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps, 1, { goToStep })

    await user.click(screen.getByText("Step A"))

    expect(goToStep).toHaveBeenCalledWith(0)
  })

  it("does not call goToStep when a blocked step is clicked", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A", isCompleted: () => false },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps, 0, { goToStep })

    await user.click(screen.getByText("Step C"))

    expect(goToStep).not.toHaveBeenCalled()
  })

  it("shows completed steps before current step", () => {
    const steps: F0WizardStep[] = [
      { title: "Step A" },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps, 2)

    expect(screen.queryByText("1")).not.toBeInTheDocument()
    expect(screen.queryByText("2")).not.toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  it("shows completed state for steps with isCompleted returning true", () => {
    const steps: F0WizardStep[] = [
      { title: "Step A", isCompleted: () => true },
      { title: "Step B" },
    ]

    renderWithContext(steps, 1)

    expect(screen.queryByText("1")).not.toBeInTheDocument()
  })

  it("does not call goToStep when current step has errors", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A", hasErrors: () => true },
      { title: "Step B" },
    ]

    renderWithContext(steps, 0, { goToStep })

    await user.click(screen.getByText("Step B"))

    expect(goToStep).not.toHaveBeenCalled()
  })

  it("calls goToStep when current step has no errors", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A", hasErrors: () => false },
      { title: "Step B" },
    ]

    renderWithContext(steps, 0, { goToStep })

    await user.click(screen.getByText("Step B"))

    expect(goToStep).toHaveBeenCalledWith(1)
  })

  it("disables steps more than one ahead when allowStepSkipping is false", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A" },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps, 0, { goToStep, allowStepSkipping: false })

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const buttons = nav.querySelectorAll("button")

    expect(buttons[2]).toBeDisabled()

    await user.click(buttons[2])
    expect(goToStep).not.toHaveBeenCalled()
  })

  it("enables steps more than one ahead when allowStepSkipping is true", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A" },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps, 0, { goToStep, allowStepSkipping: true })

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const buttons = nav.querySelectorAll("button")

    expect(buttons[2]).not.toBeDisabled()

    await user.click(buttons[2])
    expect(goToStep).toHaveBeenCalledWith(2)
  })

  it("disables forward steps when an intermediate step has errors", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A", hasErrors: () => false },
      { title: "Step B", hasErrors: () => true },
      { title: "Step C" },
    ]

    renderWithContext(steps, 0, { goToStep, allowStepSkipping: true })

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const buttons = nav.querySelectorAll("button")

    expect(buttons[2]).toBeDisabled()

    await user.click(buttons[2])
    expect(goToStep).not.toHaveBeenCalled()
  })

  it("allows clicking the immediately next step when allowStepSkipping is false", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A" },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps, 0, { goToStep, allowStepSkipping: false })

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const buttons = nav.querySelectorAll("button")

    expect(buttons[1]).not.toBeDisabled()

    await user.click(buttons[1])
    expect(goToStep).toHaveBeenCalledWith(1)
  })

  it("allows clicking backwards when allowStepSkipping is false", async () => {
    const user = userEvent.setup()
    const goToStep = vi.fn()

    const steps: F0WizardStep[] = [
      { title: "Step A" },
      { title: "Step B" },
      { title: "Step C" },
    ]

    renderWithContext(steps, 2, { goToStep, allowStepSkipping: false })

    await user.click(screen.getByText("Step A"))
    expect(goToStep).toHaveBeenCalledWith(0)
  })
})
