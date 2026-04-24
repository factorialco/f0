import { act } from "react"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi, beforeEach } from "vitest"
import { z } from "zod"

import type {
  F0FormCommonProps,
  F0FormLikeComponent,
} from "@/patterns/F0Form/types"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

// ---- Mock state ----

const mockSubmit = vi.fn().mockResolvedValue(undefined)
const mockFormRef = {
  current: {
    submit: mockSubmit,
    reset: vi.fn(),
    isDirty: () => false,
    getValues: vi.fn().mockReturnValue({}),
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
    defaultValuesParams?: Record<string, unknown>
  } | null
} = {}

let mockRegistryEntry: Record<string, unknown> | undefined

const mockResetFillVersion = vi.fn()
const mockClearActiveForm = vi.fn()
const mockGetFillVersion = vi.fn().mockReturnValue(0)
const mockMarkDefaultValuesResolving = vi.fn()
const mockMarkDefaultValuesResolved = vi.fn()
const mockHasDefaultValuesEverResolved = vi.fn().mockReturnValue(false)
const mockCloseCanvas = vi.fn()

let mockHasErrors = false

vi.mock("@copilotkit/react-core", () => ({
  useCoAgent: () => ({ state: mockCoAgentState }),
}))

let mockFormComponent: F0FormLikeComponent | undefined

vi.mock("@/lib/providers/f0", () => ({
  useFormComponent: () => mockFormComponent,
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
    getFillVersion: mockGetFillVersion,
    markDefaultValuesResolving: mockMarkDefaultValuesResolving,
    markDefaultValuesResolved: mockMarkDefaultValuesResolved,
    hasDefaultValuesEverResolved: mockHasDefaultValuesEverResolved,
  }),
}))

vi.mock("@/patterns/F0Form/useF0Form", () => ({
  useF0Form: () => ({ formRef: mockFormRef, hasErrors: mockHasErrors }),
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
    mockFormComponent = undefined
    mockHasErrors = false
    mockGetFillVersion.mockReturnValue(0)
    mockHasDefaultValuesEverResolved.mockReturnValue(false)
    mockFormRef.current.getValues.mockReturnValue({})
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

  // ==========================================================================
  // Custom FormComponent override via F0Provider
  // ==========================================================================

  describe("custom FormComponent from F0Provider", () => {
    beforeEach(() => {
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
      mockRegistryEntry = makeEntry()
    })

    it("renders custom FormComponent instead of default F0Form", () => {
      mockFormComponent = (props: F0FormCommonProps) => (
        <div
          data-testid="custom-form"
          data-form-name={props.formDefinition?.name}
        />
      )
      render(<FormContent />)
      expect(screen.getByTestId("custom-form")).toBeInTheDocument()
      expect(screen.queryByTestId("f0-form")).not.toBeInTheDocument()
    })

    it("falls back to F0Form when FormComponent is undefined", () => {
      mockFormComponent = undefined
      render(<FormContent />)
      expect(screen.getByTestId("f0-form")).toBeInTheDocument()
    })

    it("passes formDefinition to custom FormComponent", () => {
      let receivedProps: F0FormCommonProps | null = null
      mockFormComponent = (props: F0FormCommonProps) => {
        receivedProps = props
        return <div data-testid="custom-form" />
      }
      render(<FormContent />)
      expect(receivedProps).not.toBeNull()
      expect(receivedProps.formDefinition).toBeDefined()
      expect(receivedProps.formDefinition.name).toBe("test-form")
    })

    it("passes styling to custom FormComponent", () => {
      let receivedProps: F0FormCommonProps | null = null
      mockFormComponent = (props: F0FormCommonProps) => {
        receivedProps = props
        return <div data-testid="custom-form" />
      }
      render(<FormContent />)
      expect(receivedProps.styling).toBeDefined()
    })

    it("passes formRef to custom FormComponent", () => {
      let receivedProps: F0FormCommonProps | null = null
      mockFormComponent = (props: F0FormCommonProps) => {
        receivedProps = props
        return <div data-testid="custom-form" />
      }
      render(<FormContent />)
      expect(receivedProps.formRef).toBeDefined()
    })
  })

  // ==========================================================================
  // Submit button disabled state — errorTriggerMode
  // ==========================================================================

  describe("submit button disabled state based on errorTriggerMode", () => {
    beforeEach(() => {
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
    })

    it("enables button when there are no errors (any mode)", () => {
      mockHasErrors = false
      mockRegistryEntry = makeEntry()
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).not.toBeDisabled()
    })

    it("disables button when hasErrors and errorTriggerMode is the default (on-blur)", () => {
      mockHasErrors = true
      mockRegistryEntry = makeEntry()
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled()
    })

    it("disables button when hasErrors and errorTriggerMode is on-change", () => {
      mockHasErrors = true
      mockRegistryEntry = makeEntry({ errorTriggerMode: "on-change" })
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled()
    })

    it("does not disable button when hasErrors and errorTriggerMode is on-submit", () => {
      mockHasErrors = true
      mockRegistryEntry = makeEntry({ errorTriggerMode: "on-submit" })
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).not.toBeDisabled()
    })

    it("disables wizard submit button when hasErrors and errorTriggerMode is on-blur", () => {
      mockHasErrors = true
      mockRegistryEntry = makeEntry({
        steps: [{ title: "Step 1", sectionIds: ["a"] }],
        errorTriggerMode: "on-blur",
      })
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled()
    })

    it("does not disable wizard submit button when hasErrors and errorTriggerMode is on-submit", () => {
      mockHasErrors = true
      mockRegistryEntry = makeEntry({
        steps: [{ title: "Step 1", sectionIds: ["a"] }],
        errorTriggerMode: "on-submit",
      })
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).not.toBeDisabled()
    })
  })

  // ==========================================================================
  // resolvedDefaultValues — defaultValuesFn + defaultValuesParams
  // ==========================================================================

  describe("resolvedDefaultValues with defaultValuesParams", () => {
    it("calls defaultValuesFn with params when both are available", async () => {
      const defaultValuesFn = vi.fn().mockResolvedValue({
        name: "Resolved Name",
        email: "resolved@test.com",
      })
      mockRegistryEntry = makeEntry({
        defaultValuesFn,
        defaultValuesParams: { employeeId: "123" },
      })
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "", email: "" },
          defaultValuesParams: { employeeId: "123" },
        },
      }
      render(<FormContent />)

      const result = await capturedFormDefinition.defaultValues()
      expect(defaultValuesFn).toHaveBeenCalledWith({ employeeId: "123" })
      expect(result).toEqual({
        name: "Resolved Name",
        email: "resolved@test.com",
      })
    })

    it("falls back to currentValues when no defaultValuesFn", async () => {
      mockRegistryEntry = makeEntry()
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "John", email: "john@test.com" },
        },
      }
      render(<FormContent />)

      const result = await capturedFormDefinition.defaultValues()
      expect(result).toEqual({ name: "John", email: "john@test.com" })
    })

    it("falls back to currentValues when defaultValuesFn exists but no params", async () => {
      const defaultValuesFn = vi.fn().mockResolvedValue({
        name: "Should Not Resolve",
      })
      mockRegistryEntry = makeEntry({ defaultValuesFn })
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "John", email: "john@test.com" },
        },
      }
      render(<FormContent />)

      const result = await capturedFormDefinition.defaultValues()
      expect(defaultValuesFn).not.toHaveBeenCalled()
      expect(result).toEqual({ name: "John", email: "john@test.com" })
    })

    it("always returns a thenable to prevent TypeError in useAsyncDefaultValues", () => {
      mockRegistryEntry = makeEntry()
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
      render(<FormContent />)

      const result = capturedFormDefinition.defaultValues()
      expect(typeof result.then).toBe("function")
    })
  })

  // ==========================================================================
  // fillForm after resolving defaults — fillVersion guard
  // ==========================================================================

  describe("fillForm after resolving defaults preserves AI-filled values", () => {
    it("does not overwrite virtual ref values when fillVersion > 0", () => {
      mockGetFillVersion.mockReturnValue(1)
      mockFormRef.current.getValues.mockReturnValue({
        name: "AI Filled",
        email: "ai@test.com",
      })
      mockRegistryEntry = makeEntry()
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "original", email: "original@test.com" },
        },
      }
      render(<FormContent />)

      // fillVersion > 0 → effect reads getValues() for both valuesToApply and
      // existing — they match, so setValues is NOT called.
      // The form keeps the AI-filled values.
      expect(mockFormRef.current.setValues).not.toHaveBeenCalled()
    })

    it("applies coagent formValues when fillVersion is 0", () => {
      mockGetFillVersion.mockReturnValue(0)
      mockFormRef.current.getValues.mockReturnValue({})
      mockRegistryEntry = makeEntry()
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "John", email: "john@test.com" },
        },
      }
      render(<FormContent />)

      expect(mockFormRef.current.setValues).toHaveBeenCalledWith(
        { name: "John", email: "john@test.com" },
        { shouldDirty: true, shouldValidate: false }
      )
    })
  })

  // ==========================================================================
  // Slow async defaultValues — AI-filled dirty fields survive resolution
  // ==========================================================================

  describe("slow async defaultValues preserve AI-filled dirty fields", () => {
    it("merges AI-filled dirty fields on top of resolved defaults (2s delay)", async () => {
      vi.useFakeTimers()
      let resolveFn!: (v: Record<string, unknown>) => void
      const defaultValuesFn = vi.fn(
        () =>
          new Promise<Record<string, unknown>>((resolve) => {
            resolveFn = resolve
          })
      )
      // Simulate AI having filled "name" before defaults resolve
      const dirtyFields = new Set(["name"])
      mockFormRef.current.getValues.mockReturnValue({
        name: "AI Filled Name",
        email: "",
      })
      mockRegistryEntry = makeEntry({
        defaultValuesFn,
        defaultValuesParams: { employeeId: "42" },
        dirtyFields,
      })
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "AI Filled Name", email: "" },
          defaultValuesParams: { employeeId: "42" },
        },
      }
      render(<FormContent />)

      // Trigger the async defaultValues callback
      const resultPromise = capturedFormDefinition.defaultValues()

      // Verify resolving was signaled
      expect(mockMarkDefaultValuesResolving).toHaveBeenCalledWith("test-form")

      // Simulate 2 seconds passing, then resolve with server defaults
      await vi.advanceTimersByTimeAsync(2000)
      resolveFn({
        name: "Server Default Name",
        email: "server@default.com",
      })

      const result = await resultPromise

      // AI-filled "name" survives; server "email" is used since it wasn't dirty
      expect(result).toEqual({
        name: "AI Filled Name",
        email: "server@default.com",
      })
      expect(mockMarkDefaultValuesResolved).toHaveBeenCalledWith("test-form")
      vi.useRealTimers()
    })

    it("uses all server defaults when no dirty fields exist", async () => {
      vi.useFakeTimers()
      let resolveFn!: (v: Record<string, unknown>) => void
      const defaultValuesFn = vi.fn(
        () =>
          new Promise<Record<string, unknown>>((resolve) => {
            resolveFn = resolve
          })
      )
      mockFormRef.current.getValues.mockReturnValue({
        name: "",
        email: "",
      })
      mockRegistryEntry = makeEntry({
        defaultValuesFn,
        defaultValuesParams: { employeeId: "42" },
        // No dirtyFields → empty set
      })
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "", email: "" },
          defaultValuesParams: { employeeId: "42" },
        },
      }
      render(<FormContent />)

      const resultPromise = capturedFormDefinition.defaultValues()

      await vi.advanceTimersByTimeAsync(2000)
      resolveFn({
        name: "Server Name",
        email: "server@test.com",
      })

      const result = await resultPromise

      // No dirty fields → all server defaults are used
      expect(result).toEqual({
        name: "Server Name",
        email: "server@test.com",
      })
      vi.useRealTimers()
    })

    it("preserves multiple AI-filled fields when defaults resolve", async () => {
      vi.useFakeTimers()
      let resolveFn!: (v: Record<string, unknown>) => void
      const defaultValuesFn = vi.fn(
        () =>
          new Promise<Record<string, unknown>>((resolve) => {
            resolveFn = resolve
          })
      )
      const dirtyFields = new Set(["name", "email"])
      mockFormRef.current.getValues.mockReturnValue({
        name: "AI Name",
        email: "ai@filled.com",
      })
      mockRegistryEntry = makeEntry({
        defaultValuesFn,
        defaultValuesParams: { employeeId: "42" },
        dirtyFields,
      })
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "AI Name", email: "ai@filled.com" },
          defaultValuesParams: { employeeId: "42" },
        },
      }
      render(<FormContent />)

      const resultPromise = capturedFormDefinition.defaultValues()

      await vi.advanceTimersByTimeAsync(2000)
      resolveFn({
        name: "Server Name",
        email: "server@test.com",
      })

      const result = await resultPromise

      // Both AI-filled fields survive
      expect(result).toEqual({
        name: "AI Name",
        email: "ai@filled.com",
      })
      vi.useRealTimers()
    })

    it("calls markDefaultValuesResolving before the async call starts", async () => {
      const defaultValuesFn = vi.fn().mockResolvedValue({ name: "Default" })
      mockRegistryEntry = makeEntry({
        defaultValuesFn,
        defaultValuesParams: { id: "1" },
      })
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: {},
          defaultValuesParams: { id: "1" },
        },
      }
      render(<FormContent />)

      // Kick off async resolution and wait for it to complete
      await capturedFormDefinition.defaultValues()

      // Both have been called — resolving was signaled before resolved
      expect(mockMarkDefaultValuesResolving).toHaveBeenCalledWith("test-form")
      expect(mockMarkDefaultValuesResolved).toHaveBeenCalledWith("test-form")
      expect(mockMarkDefaultValuesResolving).toHaveBeenCalledBefore(
        mockMarkDefaultValuesResolved
      )
    })
  })

  // ==========================================================================
  // Close and reopen — defaults should NOT re-resolve
  // ==========================================================================

  describe("skips re-resolving defaults on canvas reopen", () => {
    it("returns current values instead of calling defaultValuesFn when defaults were already resolved", async () => {
      const defaultValuesFn = vi.fn().mockResolvedValue({
        name: "Server Name",
        email: "server@test.com",
      })
      mockFormRef.current.getValues.mockReturnValue({
        name: "AI Filled",
        email: "ai@test.com",
      })
      // Defaults were resolved on the first open
      mockHasDefaultValuesEverResolved.mockReturnValue(true)
      mockRegistryEntry = makeEntry({
        defaultValuesFn,
        defaultValuesParams: { employeeId: "42" },
      })
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: { name: "AI Filled", email: "ai@test.com" },
          defaultValuesParams: { employeeId: "42" },
        },
      }
      render(<FormContent />)

      const result = await capturedFormDefinition.defaultValues()

      // defaultValuesFn should NOT be called again
      expect(defaultValuesFn).not.toHaveBeenCalled()
      // Should return current virtual ref values
      expect(result).toEqual({
        name: "AI Filled",
        email: "ai@test.com",
      })
    })

    it("still resolves defaults on first open when defaults have never been resolved", async () => {
      const defaultValuesFn = vi.fn().mockResolvedValue({
        name: "Server Name",
        email: "server@test.com",
      })
      mockFormRef.current.getValues.mockReturnValue({})
      mockHasDefaultValuesEverResolved.mockReturnValue(false)
      mockRegistryEntry = makeEntry({
        defaultValuesFn,
        defaultValuesParams: { employeeId: "42" },
      })
      mockCoAgentState = {
        activeForm: {
          formName: "test-form",
          formValues: {},
          defaultValuesParams: { employeeId: "42" },
        },
      }
      render(<FormContent />)

      const result = await capturedFormDefinition.defaultValues()

      // defaultValuesFn IS called on first open
      expect(defaultValuesFn).toHaveBeenCalledWith({ employeeId: "42" })
      expect(result).toEqual({
        name: "Server Name",
        email: "server@test.com",
      })
    })
  })
})
