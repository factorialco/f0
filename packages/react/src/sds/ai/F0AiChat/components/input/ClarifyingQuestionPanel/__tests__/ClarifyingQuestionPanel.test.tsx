import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { ClarifyingQuestionState } from "../../../../actions/core/clarifyingQuestion/types"
import { ClarifyingQuestionPanel } from "../ClarifyingQuestionPanel"

function buildState(
  overrides: Partial<ClarifyingQuestionState> = {},
  currentStep: Partial<ClarifyingQuestionState["currentStep"]> = {}
): ClarifyingQuestionState {
  return {
    currentStep: {
      question: "What time period should the report cover?",
      options: [
        { id: "this-month", label: "This month" },
        { id: "last-month", label: "Last month" },
        { id: "this-year", label: "This year" },
      ],
      selectionMode: "single",
      optional: false,
      allowCustomAnswer: false,
      selectedOptionIds: [],
      customAnswerText: undefined,
      isCustomAnswerActive: false,
      ...currentStep,
    },
    currentStepIndex: 0,
    totalSteps: 1,
    toggleOption: vi.fn(),
    confirm: vi.fn(),
    skip: vi.fn(),
    cancel: vi.fn(),
    back: vi.fn(),
    setCustomAnswerText: vi.fn(),
    setCustomAnswerActive: vi.fn(),
    activateCustomAnswer: vi.fn(),
    ...overrides,
  }
}

describe("ClarifyingQuestionPanel", () => {
  it("does not show Skip button when the step is required", () => {
    const state = buildState()
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    expect(screen.queryByRole("button", { name: "Skip" })).toBeNull()
  })

  it("shows Skip button when the step is optional and nothing selected", () => {
    const state = buildState({}, { optional: true })
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    expect(screen.getByRole("button", { name: "Skip" })).toBeInTheDocument()
  })

  it("hides Skip button once the user has selected something", () => {
    const state = buildState(
      {},
      { optional: true, selectedOptionIds: ["this-month"] }
    )
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    expect(screen.queryByRole("button", { name: "Skip" })).toBeNull()
  })

  it("calls skip() when the Skip button is clicked", async () => {
    const state = buildState({}, { optional: true })
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    await userEvent.click(screen.getByRole("button", { name: "Skip" }))
    expect(state.skip).toHaveBeenCalledOnce()
  })

  it("moves focus with ArrowDown without auto-selecting", async () => {
    const state = buildState()
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    const radios = screen.getAllByRole("radio")
    radios[0].focus()
    await userEvent.keyboard("{ArrowDown}")
    expect(state.toggleOption).not.toHaveBeenCalled()
    expect(radios[1]).toHaveFocus()
  })

  it("toggles (selects) the focused radio on Space", async () => {
    const state = buildState()
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    const radios = screen.getAllByRole("radio")
    radios[1].focus()
    await userEvent.keyboard(" ")
    expect(state.toggleOption).toHaveBeenCalledWith("last-month")
  })

  it("triggers cancel (not skip) on Escape when step is optional", async () => {
    const state = buildState({}, { optional: true })
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    const radios = screen.getAllByRole("radio")
    radios[0].focus()
    await userEvent.keyboard("{Escape}")
    expect(state.cancel).toHaveBeenCalledOnce()
    expect(state.skip).not.toHaveBeenCalled()
  })

  it("triggers cancel on Escape when step is required", async () => {
    const state = buildState()
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    const radios = screen.getAllByRole("radio")
    radios[0].focus()
    await userEvent.keyboard("{Escape}")
    expect(state.cancel).toHaveBeenCalledOnce()
    expect(state.skip).not.toHaveBeenCalled()
  })

  it("renders radio role for single-select options", () => {
    const state = buildState()
    render(<ClarifyingQuestionPanel clarifyingQuestion={state} />)
    expect(screen.getByRole("radiogroup")).toBeInTheDocument()
    expect(screen.getAllByRole("radio")).toHaveLength(3)
  })
})
