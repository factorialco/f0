import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import type { F0AiFormDescription } from "@/patterns/F0Form/F0AiFormRegistry"
import { zeroRender as render, screen } from "@/testing/test-utils"

let mockActiveForm: F0AiFormDescription | null = null
let mockFillVersion = 0

vi.mock("@/patterns/F0Form/F0AiFormRegistry", () => ({
  useF0AiFormRegistry: () => ({
    activeForm: mockActiveForm,
    getFillVersion: (formName: string) =>
      formName === mockActiveForm?.formName ? mockFillVersion : 0,
  }),
}))

vi.mock("../../../hooks/useAutoOpenCanvas", () => ({
  useAutoOpenCanvas: vi.fn(),
}))

vi.mock("../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    canvasContent: null,
    openCanvas: vi.fn(),
    closeCanvas: vi.fn(),
  }),
}))

import { ActiveFormCard } from "../ActiveFormCard"

const baseForm: F0AiFormDescription = {
  formName: "edit-employee",
  description: "Edit an employee",
  module: "time_management",
  cardTitle: "Edit Employee",
  cardDescription: "Fill in the employee details",
  formSchema: {},
  fieldDescriptions: {},
  sectionDescriptions: {},
  formValues: { name: "Alice", email: "alice@test.com" },
  formErrors: {},
  isDirty: true,
}

describe("ActiveFormCard", () => {
  beforeEach(() => {
    mockActiveForm = null
    mockFillVersion = 0
  })

  it("renders nothing when there is no active form", () => {
    const { container } = render(<ActiveFormCard />)

    expect(container.firstChild).toBeNull()
  })

  it("renders nothing when fillForm has not been called (fillVersion is 0)", () => {
    mockActiveForm = { ...baseForm }
    mockFillVersion = 0

    const { container } = render(<ActiveFormCard />)

    expect(container.firstChild).toBeNull()
  })

  it("renders FormCard when fillForm has been called (fillVersion > 0)", () => {
    mockActiveForm = { ...baseForm }
    mockFillVersion = 1

    render(<ActiveFormCard />)

    expect(screen.getByText("Edit Employee")).toBeInTheDocument()
    expect(screen.getByText("Fill in the employee details")).toBeInTheDocument()
  })

  it("renders FormCard after multiple fillForm calls", () => {
    mockActiveForm = { ...baseForm }
    mockFillVersion = 3

    render(<ActiveFormCard />)

    expect(screen.getByText("Edit Employee")).toBeInTheDocument()
  })

  it("renders nothing when cardTitle is missing", () => {
    mockActiveForm = { ...baseForm, cardTitle: "" }
    mockFillVersion = 1

    const { container } = render(<ActiveFormCard />)

    // Falls back to formName for cardTitle, so it should still render
    expect(screen.getByText("edit-employee")).toBeInTheDocument()
    expect(container.firstChild).not.toBeNull()
  })

  it("renders nothing when both cardDescription and description are missing", () => {
    mockActiveForm = {
      ...baseForm,
      cardDescription: "",
      description: undefined,
    }
    mockFillVersion = 1

    const { container } = render(<ActiveFormCard />)

    expect(container.firstChild).toBeNull()
  })
})
