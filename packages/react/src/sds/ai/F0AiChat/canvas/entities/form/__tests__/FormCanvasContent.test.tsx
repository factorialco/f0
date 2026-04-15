import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

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

vi.mock("@copilotkit/react-core", () => ({
  useCoAgent: () => ({ state: mockCoAgentState }),
}))

vi.mock("@/ai", () => ({
  useAiChat: () => ({ agent: "test-agent" }),
}))

vi.mock("@/patterns/F0Form/F0AiFormRegistry", () => ({
  useF0AiFormRegistry: () => ({
    get: () => mockRegistryEntry,
  }),
}))

vi.mock("@/patterns/F0Form/useF0Form", () => ({
  useF0Form: () => ({ formRef: mockFormRef }),
}))

// Mock F0Form to render a simple div — avoids pulling in the real form internals
vi.mock("@/patterns/F0Form/F0Form", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  F0Form: (props: any) => (
    <div
      data-testid="f0-form"
      data-form-name={props.formDefinition?.name}
      data-show-sections-sidepanel={
        props.styling?.showSectionsSidepanel ? "true" : "false"
      }
    />
  ),
}))

// Mock useF0FormDefinition to pass the config through as a definition
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
  })

  describe("when no active form", () => {
    it("renders nothing", () => {
      mockCoAgentState = { activeForm: null }
      const { container } = render(<FormContent />)
      expect(container.firstChild).toBeNull()
    })
  })

  // ==========================================================================
  // Plain form (no steps)
  // ==========================================================================

  describe("plain form (no steps)", () => {
    beforeEach(() => {
      mockCoAgentState = {
        activeForm: { formName: "test-form", formValues: {} },
      }
      mockRegistryEntry = makeEntry()
    })

    it("renders a submit button with default label", () => {
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

    it("renders footer with border and shrink-0", () => {
      render(<FormContent />)
      const button = screen.getByRole("button", { name: "Submit" })
      const footer = button.closest(".flex.shrink-0") as HTMLElement
      expect(footer).toBeInTheDocument()
      expect(footer.className).toContain("border-t")
      expect(footer.className).toContain("shrink-0")
    })

    it("uses flex-col layout so the footer stays at the bottom", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      // Walk up: form → formArea → layoutWrapper (flex-col)
      const layoutWrapper = form.parentElement?.parentElement
      expect(layoutWrapper?.className).toContain("flex")
      expect(layoutWrapper?.className).toContain("h-full")
      expect(layoutWrapper?.className).toContain("flex-col")
    })

    it("applies overflow-auto and p-6 padding to form area when no sidepanel", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      const formArea = form.parentElement as HTMLElement
      expect(formArea.className).toContain("overflow-auto")
      expect(formArea.className).toContain("p-6")
      expect(formArea.className).toContain("pb-6")
    })

    it("calls formRef.submit when clicking the submit button", async () => {
      const user = userEvent.setup()
      render(<FormContent />)
      await user.click(screen.getByRole("button", { name: "Submit" }))
      expect(mockSubmit).toHaveBeenCalledTimes(1)
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
  // Wizard form (with steps)
  // ==========================================================================

  describe("wizard form (with steps)", () => {
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

    it("renders a submit button with default label", () => {
      render(<FormContent />)
      expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument()
    })

    it("renders a submit button with custom label from submitConfig", () => {
      mockRegistryEntry = makeEntry({
        steps: [
          { title: "Step 1", sectionIds: ["a"] },
          { title: "Step 2", sectionIds: ["b"] },
        ],
        submitConfig: { label: "Save Employee" },
      })
      render(<FormContent />)
      expect(
        screen.getByRole("button", { name: "Save Employee" })
      ).toBeInTheDocument()
    })

    it("renders footer with border and shrink-0", () => {
      render(<FormContent />)
      const button = screen.getByRole("button", { name: "Submit" })
      const footer = button.closest(".flex.shrink-0") as HTMLElement
      expect(footer).toBeInTheDocument()
      expect(footer.className).toContain("border-t")
    })

    it("uses flex-col layout so the footer stays at the bottom", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      const layoutWrapper = form.parentElement?.parentElement
      expect(layoutWrapper?.className).toContain("flex")
      expect(layoutWrapper?.className).toContain("h-full")
      expect(layoutWrapper?.className).toContain("flex-col")
    })

    it("passes showSectionsSidepanel true", () => {
      render(<FormContent />)
      const form = screen.getByTestId("f0-form")
      expect(form.getAttribute("data-show-sections-sidepanel")).toBe("true")
    })

    it("calls formRef.submit when clicking the submit button", async () => {
      const user = userEvent.setup()
      render(<FormContent />)
      await user.click(screen.getByRole("button", { name: "Submit" }))
      expect(mockSubmit).toHaveBeenCalledTimes(1)
    })
  })
})
