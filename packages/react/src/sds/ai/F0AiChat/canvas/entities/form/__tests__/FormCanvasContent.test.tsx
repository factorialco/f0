import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import { act } from "react"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"
import { z } from "zod"

// ---- Mock state ----

const mockSubmit = vi.fn().mockResolvedValue(undefined)
const mockFormRef = {
  current: {
    submit: mockSubmit,
    reset: vi.fn(),
    isDirty: () => false,
    getValues: () => ({}),
    setValue: vi.fn(),
    setValues: vi.fn(),
    trigger: vi.fn().mockResolvedValue(true),
    getErrors: () => ({}),
    getFieldNames: () => [],
    actionBar: { wiggle: vi.fn() },
    _setStateCallback: vi.fn(),
  },
}

let mockCoAgentState: {
  activeForm?: {
    formName: string
    formValues?: Record<string, unknown>
  } | null
} = {}

let mockRegistryEntry: Record<string, unknown> | undefined

const mockResetFillVersion = vi.fn()
const mockClearActiveForm = vi.fn()
const mockCloseCanvas = vi.fn()

vi.mock("@copilotkit/react-core", () => ({
  useCoAgent: () => ({ state: mockCoAgentState }),
}))

vi.mock("@/ai", () => ({
  useAiChat: () => ({
    agent: "test-agent",
    closeCanvas: mockCloseCanvas,
  }),
}))

vi.mock("@/patterns/F0Form/F0AiFormRegistry", () => ({
  useF0AiFormRegistry: () => ({
    get: () => mockRegistryEntry,
    resetFillVersion: mockResetFillVersion,
    clearActiveForm: mockClearActiveForm,
  }),
}))

vi.mock("@/patterns/F0Form/useF0Form", () => ({
  useF0Form: () => ({ formRef: mockFormRef }),
}))

// Capture the formDefinition passed to F0Form so we can inspect submitConfig and call onSubmit
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let capturedFormDefinition: any = null

vi.mock("@/patterns/F0Form/F0Form", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  F0Form: (props: any) => {
    capturedFormDefinition = props.formDefinition
    return (
      <div
        data-testid="f0-form"
        data-form-name={props.formDefinition?.name}
        data-show-sections-sidepanel={
          props.styling?.showSectionsSidepanel ? "true" : "false"
        }
      />
    )
  },
}))

vi.mock("@/patterns/F0WizardForm/useF0FormDefinition", () => ({
  useF0FormDefinition: (config: Record<string, unknown>) => ({
    _brand: "single" as const,
    ...config,
  }),
}))

import { FormContent } from "../FormCanvasContent"

// ---- Helpers ----

const testSchema = z.object({
  name: z.string(),
  email: z.string().email(),
})

function makeEntry(overrides: Record<string, unknown> = {}) {
  return {
    ref: mockFormRef,
    schema: testSchema,
    description: "Test form",
    ...overrides,
  }
}

// ---- Tests ----

describe("FormCanvasContent", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockCoAgentState = {}
    mockRegistryEntry = undefined
    capturedFormDefinition = null
  })

  describe("when no active form", () => {
    it("renders nothing", () => {
      mockCoAgentState = { activeForm: null }
      const { container } = render(<FormContent />)
      expect(container.firstChild).toBeNull()
    })
  })

  // ==========================================================================
  // Submit config — F0Form's built-in submit button and action bar
  // ==========================================================================

  describe("submitConfig (F0Form built-in submit)", () => {
    beforeEach(() => {
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
      mockRegistryEntry = makeEntry()
    })

    it("hides F0Form's built-in submit button (external footer button is used)", () => {
      render(<FormContent />)
      expect(capturedFormDefinition.submitConfig?.hideSubmitButton).toBe(true)
    })

    it("hides the action bar (always hidden in canvas)", () => {
      render(<FormContent />)
      expect(capturedFormDefinition.submitConfig?.hideActionBar).toBe(true)
    })

    it("uses type default for submitConfig", () => {
      render(<FormContent />)
      expect(capturedFormDefinition.submitConfig?.type).toBe("default")
    })

    it("uses default label when no submitConfig on entry", () => {
      render(<FormContent />)
      expect(capturedFormDefinition.submitConfig?.label).toBeUndefined()
    })

    it("passes custom label from entry submitConfig", () => {
      mockRegistryEntry = makeEntry({
        submitConfig: { label: "Create Employee" },
      })
      render(<FormContent />)
      expect(capturedFormDefinition.submitConfig?.label).toBe("Create Employee")
    })
  })

  // ==========================================================================
  // onSubmit — canvas closes on success
  // ==========================================================================

  describe("onSubmit closes canvas on success", () => {
    beforeEach(() => {
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
      mockRegistryEntry = makeEntry()
    })

    it("calls closeCanvas after a delay on successful submit", async () => {
      vi.useFakeTimers()
      render(<FormContent />)
      await act(async () => {
        await capturedFormDefinition.onSubmit({
          data: { name: "Jane", email: "jane@test.com" },
        })
      })
      expect(mockCloseCanvas).not.toHaveBeenCalled()
      act(() => {
        vi.advanceTimersByTime(1500)
      })
      expect(mockCloseCanvas).toHaveBeenCalledTimes(1)
      vi.useRealTimers()
    })

    it("returns success from onSubmit", async () => {
      render(<FormContent />)
      let result: unknown
      await act(async () => {
        result = await capturedFormDefinition.onSubmit({
          data: { name: "Jane", email: "jane@test.com" },
        })
      })
      expect(result).toEqual({ success: true })
    })

    it("calls the entry onSubmit callback before closing canvas", async () => {
      vi.useFakeTimers()
      const entryOnSubmit = vi.fn()
      mockRegistryEntry = makeEntry({ onSubmit: entryOnSubmit })
      render(<FormContent />)
      await act(async () => {
        await capturedFormDefinition.onSubmit({
          data: { name: "Jane", email: "jane@test.com" },
        })
      })
      expect(entryOnSubmit).toHaveBeenCalledWith({
        name: "Jane",
        email: "jane@test.com",
      })
      expect(mockCloseCanvas).not.toHaveBeenCalled()
      act(() => {
        vi.advanceTimersByTime(1500)
      })
      expect(entryOnSubmit).toHaveBeenCalledBefore(mockCloseCanvas)
      vi.useRealTimers()
    })

    it("still closes canvas when entry has no onSubmit", async () => {
      vi.useFakeTimers()
      mockRegistryEntry = makeEntry({ onSubmit: undefined })
      render(<FormContent />)
      await act(async () => {
        await capturedFormDefinition.onSubmit({
          data: { name: "Jane", email: "jane@test.com" },
        })
      })
      act(() => {
        vi.advanceTimersByTime(1500)
      })
      expect(mockCloseCanvas).toHaveBeenCalledTimes(1)
      vi.useRealTimers()
    })

    it("resets fill version and clears active form after submit", async () => {
      vi.useFakeTimers()
      mockRegistryEntry = makeEntry({ onSubmit: vi.fn() })
      render(<FormContent />)
      await act(async () => {
        await capturedFormDefinition.onSubmit({
          data: { name: "Jane", email: "jane@test.com" },
        })
      })
      // Not called immediately — deferred with closeCanvas
      expect(mockResetFillVersion).not.toHaveBeenCalled()
      expect(mockClearActiveForm).not.toHaveBeenCalled()
      act(() => {
        vi.advanceTimersByTime(1500)
      })
      expect(mockResetFillVersion).toHaveBeenCalledWith("test-form")
      expect(mockClearActiveForm).toHaveBeenCalledTimes(1)
      expect(mockCloseCanvas).toHaveBeenCalledTimes(1)
      vi.useRealTimers()
    })
  })

  // ==========================================================================
  // Plain form (no steps) — layout
  // ==========================================================================

  describe("plain form layout (no steps)", () => {
    beforeEach(() => {
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
      mockRegistryEntry = makeEntry()
    })

    it("applies overflow-auto and p-6 padding to form area when no sidepanel", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      const formArea = form.parentElement as HTMLElement
      expect(formArea.className).toContain("overflow-auto")
      expect(formArea.className).toContain("p-6")
      expect(formArea.className).toContain("pb-6")
      expect(formArea.className).toContain("relative")
    })

    it("renders a footer with a submit button", () => {
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument()
    })

    it("renders a submit button with custom label from submitConfig", () => {
      mockRegistryEntry = makeEntry({
        submitConfig: { label: "Create Employee" },
      })
      render(<FormContent />)
      expect(
        screen.getByRole("button", { name: "Create Employee" })
      ).toBeInTheDocument()
    })

    it("renders footer with border-t and shrink-0", () => {
      render(<FormContent />)
      const button = screen.getByRole("button", { name: "Submit" })
      const footer = button.closest(".shrink-0") as HTMLElement
      expect(footer).toBeInTheDocument()
      expect(footer.className).toContain("border-t")
      expect(footer.className).toContain("shrink-0")
    })

    it("uses flex-col layout so the footer stays at the bottom", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      const layoutWrapper = form.parentElement?.parentElement
      expect(layoutWrapper?.className).toContain("flex")
      expect(layoutWrapper?.className).toContain("h-full")
      expect(layoutWrapper?.className).toContain("flex-col")
    })

    it("calls formRef.submit when clicking the submit button", async () => {
      const user = userEvent.setup()
      render(<FormContent />)
      await user.click(screen.getByRole("button", { name: "Submit" }))
      expect(mockSubmit).toHaveBeenCalledTimes(1)
    })

    it("hides footer and shows success overlay after onSubmit fires", async () => {
      mockRegistryEntry = makeEntry({ onSubmit: vi.fn() })
      render(<FormContent />)

      // Footer is visible before submit
      expect(screen.getByTestId("canvas-form-footer")).toBeInTheDocument()

      // Trigger onSubmit (simulates what F0Form calls after validation passes)
      await act(async () => {
        await capturedFormDefinition.onSubmit({
          data: { name: "Jane", email: "jane@test.com" },
        })
      })

      // Footer is hidden and success overlay is shown
      expect(screen.queryByTestId("canvas-form-footer")).not.toBeInTheDocument()
      expect(screen.getByTestId("canvas-form-success")).toBeInTheDocument()
      expect(screen.getByText("Saved")).toBeInTheDocument()
    })
  })

  // ==========================================================================
  // Plain form with sections sidepanel (>2 sections)
  // ==========================================================================

  describe("plain form with sections sidepanel (>2 sections)", () => {
    beforeEach(() => {
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
      mockRegistryEntry = makeEntry({
        sections: {
          a: { title: "Section A" },
          b: { title: "Section B" },
          c: { title: "Section C" },
        },
      })
    })

    it("renders a submit button", () => {
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument()
    })

    it("applies overflow-hidden and height propagation to form area", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      const formArea = form.parentElement as HTMLElement
      expect(formArea.className).toContain("overflow-hidden")
      expect(formArea.className).toContain("[&>div]:h-full")
    })

    it("does not apply p-6 padding when using sidepanel", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      const formArea = form.parentElement as HTMLElement
      expect(formArea.className).not.toContain("p-6")
    })

    it("passes showSectionsSidepanel to F0Form", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      expect(form.getAttribute("data-show-sections-sidepanel")).toBe("true")
    })
  })

  // ==========================================================================
  // Wizard form (with steps) — layout
  // ==========================================================================

  describe("wizard form layout (with steps)", () => {
    beforeEach(() => {
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
      mockRegistryEntry = makeEntry({
        steps: [
          { title: "Step 1", sectionIds: ["a"] },
          { title: "Step 2", sectionIds: ["b"] },
        ],
        sections: {
          a: { title: "Section A" },
          b: { title: "Section B" },
        },
      })
    })

    it("renders wizard layout with flex-col for footer positioning", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      // form → formArea → layoutWrapper (flex-col)
      const layoutWrapper = form.parentElement?.parentElement
      expect(layoutWrapper?.className).toContain("flex")
      expect(layoutWrapper?.className).toContain("h-full")
      expect(layoutWrapper?.className).toContain("flex-col")
    })

    it("renders wizard form area with overflow-hidden and height propagation", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      const formArea = form.parentElement as HTMLElement
      expect(formArea.className).toContain("overflow-hidden")
      expect(formArea.className).toContain("[&>div]:h-full")
    })

    it("passes showSectionsSidepanel true", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      expect(form.getAttribute("data-show-sections-sidepanel")).toBe("true")
    })

    it("renders a footer with submit button", () => {
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument()
    })

    it("renders footer with border-t and shrink-0", () => {
      render(<FormContent />)
      const button = screen.getByRole("button", { name: "Submit" })
      const footer = button.closest(".shrink-0") as HTMLElement
      expect(footer).toBeInTheDocument()
      expect(footer.className).toContain("border-t")
    })

    it("calls formRef.submit when clicking the wizard submit button", async () => {
      const user = userEvent.setup()
      render(<FormContent />)
      await user.click(screen.getByRole("button", { name: "Submit" }))
      expect(mockSubmit).toHaveBeenCalledTimes(1)
    })

    it("passes custom submitConfig label through for wizard form", () => {
      mockRegistryEntry = makeEntry({
        steps: [
          { title: "Step 1", sectionIds: ["a"] },
          { title: "Step 2", sectionIds: ["b"] },
        ],
        submitConfig: { label: "Save Employee" },
      })
      render(<FormContent />)
      expect(capturedFormDefinition.submitConfig?.label).toBe("Save Employee")
    })
  })
})
