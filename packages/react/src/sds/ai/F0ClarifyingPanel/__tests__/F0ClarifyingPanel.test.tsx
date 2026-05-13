import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { ClarifyingQuestionState } from "../types"
import { F0ClarifyingPanel } from "../F0ClarifyingPanel"

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

describe("F0ClarifyingPanel", () => {
  it("does not show Skip button when the step is required", () => {
    const state = buildState()
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    expect(screen.queryByRole("button", { name: "Skip" })).toBeNull()
  })

  it("shows Skip button when the step is optional and nothing selected", () => {
    const state = buildState({}, { optional: true })
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    expect(screen.getByRole("button", { name: "Skip" })).toBeInTheDocument()
  })

  it("hides Skip button once the user has selected something", () => {
    const state = buildState(
      {},
      { optional: true, selectedOptionIds: ["this-month"] }
    )
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    expect(screen.queryByRole("button", { name: "Skip" })).toBeNull()
  })

  it("calls skip() when the Skip button is clicked", async () => {
    const state = buildState({}, { optional: true })
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    await userEvent.click(screen.getByRole("button", { name: "Skip" }))
    expect(state.skip).toHaveBeenCalledOnce()
  })

  it("moves focus with ArrowDown without auto-selecting", async () => {
    const state = buildState()
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    const radios = screen.getAllByRole("radio")
    radios[0].focus()
    await userEvent.keyboard("{ArrowDown}")
    expect(state.toggleOption).not.toHaveBeenCalled()
    expect(radios[1]).toHaveFocus()
  })

  it("toggles (selects) the focused radio on Space", async () => {
    const state = buildState()
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    const radios = screen.getAllByRole("radio")
    radios[1].focus()
    await userEvent.keyboard(" ")
    expect(state.toggleOption).toHaveBeenCalledWith("last-month")
  })

  it("triggers cancel (not skip) on Escape when step is optional", async () => {
    const state = buildState({}, { optional: true })
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    const radios = screen.getAllByRole("radio")
    radios[0].focus()
    await userEvent.keyboard("{Escape}")
    expect(state.cancel).toHaveBeenCalledOnce()
    expect(state.skip).not.toHaveBeenCalled()
  })

  it("triggers cancel on Escape when step is required", async () => {
    const state = buildState()
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    const radios = screen.getAllByRole("radio")
    radios[0].focus()
    await userEvent.keyboard("{Escape}")
    expect(state.cancel).toHaveBeenCalledOnce()
    expect(state.skip).not.toHaveBeenCalled()
  })

  it("renders radio role for single-select options", () => {
    const state = buildState()
    render(<F0ClarifyingPanel clarifyingQuestion={state} />)
    expect(screen.getByRole("radiogroup")).toBeInTheDocument()
    expect(screen.getAllByRole("radio")).toHaveLength(3)
  })

  describe("auto-advance in single-select mode", () => {
    it("calls confirm() after selecting an option on a non-final step", async () => {
      const state = buildState({ currentStepIndex: 0, totalSteps: 2 })
      render(<F0ClarifyingPanel clarifyingQuestion={state} />)
      await userEvent.click(screen.getByRole("radio", { name: "This month" }))
      // confirm() is deferred via microtask — flush before asserting
      await Promise.resolve()
      expect(state.toggleOption).toHaveBeenCalledExactlyOnceWith("this-month")
      expect(state.confirm).toHaveBeenCalledOnce()
    })

    it("does not call confirm() when clicking an already-selected option (deselect)", async () => {
      const state = buildState(
        { currentStepIndex: 0, totalSteps: 2 },
        { selectedOptionIds: ["this-month"] }
      )
      render(<F0ClarifyingPanel clarifyingQuestion={state} />)
      await userEvent.click(screen.getByRole("radio", { name: "This month" }))
      await Promise.resolve()
      expect(state.toggleOption).toHaveBeenCalledExactlyOnceWith("this-month")
      expect(state.confirm).not.toHaveBeenCalled()
    })

    it("does not call confirm() when selecting an option on the final step", async () => {
      // currentStepIndex === totalSteps - 1 means final step
      const state = buildState({ currentStepIndex: 1, totalSteps: 2 })
      render(<F0ClarifyingPanel clarifyingQuestion={state} />)
      await userEvent.click(screen.getByRole("radio", { name: "This month" }))
      await Promise.resolve()
      expect(state.toggleOption).toHaveBeenCalledExactlyOnceWith("this-month")
      expect(state.confirm).not.toHaveBeenCalled()
    })

    it("does not call confirm() on option click in multiple-selection mode", async () => {
      const state = buildState(
        { currentStepIndex: 0, totalSteps: 2 },
        { selectionMode: "multiple" }
      )
      render(<F0ClarifyingPanel clarifyingQuestion={state} />)
      await userEvent.click(
        screen.getByRole("checkbox", { name: "This month" })
      )
      await Promise.resolve()
      expect(state.toggleOption).toHaveBeenCalledExactlyOnceWith("this-month")
      expect(state.confirm).not.toHaveBeenCalled()
    })

    it("calls confirm() when selecting a predefined option even if custom answer was active", async () => {
      const state = buildState(
        { currentStepIndex: 0, totalSteps: 2 },
        {
          allowCustomAnswer: true,
          isCustomAnswerActive: true,
          customAnswerText: "my custom answer",
        }
      )
      render(<F0ClarifyingPanel clarifyingQuestion={state} />)
      await userEvent.click(screen.getByRole("radio", { name: "This month" }))
      await Promise.resolve()
      expect(state.toggleOption).toHaveBeenCalledExactlyOnceWith("this-month")
      expect(state.confirm).toHaveBeenCalledOnce()
    })

    it("does not call confirm() when typing in the custom answer input", async () => {
      const state = buildState(
        { currentStepIndex: 0, totalSteps: 2 },
        { allowCustomAnswer: true }
      )
      render(<F0ClarifyingPanel clarifyingQuestion={state} />)
      const input = screen.getByRole("textbox")
      await userEvent.type(input, "hello")
      await Promise.resolve()
      expect(state.toggleOption).not.toHaveBeenCalled()
      expect(state.confirm).not.toHaveBeenCalled()
    })
  })
})
