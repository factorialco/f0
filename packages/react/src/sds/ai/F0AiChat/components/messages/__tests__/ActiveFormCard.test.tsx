import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import type { F0AiFormDescription } from "@/patterns/F0Form/F0AiFormRegistry"

import { zeroRender as render, screen } from "@/testing/test-utils"

let mockActiveForm: F0AiFormDescription | null = null

vi.mock("@/patterns/F0Form/F0AiFormRegistry", () => ({
  useF0AiFormRegistry: () => ({
    activeForm: mockActiveForm,
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
  })

  it("renders nothing when there is no active form", () => {
    const { container } = render(<ActiveFormCard />)

    expect(container.firstChild).toBeNull()
  })

  it("renders nothing when form is not dirty", () => {
    mockActiveForm = { ...baseForm, isDirty: false }

    const { container } = render(<ActiveFormCard />)

    expect(container.firstChild).toBeNull()
  })

  it("renders FormCard when form is dirty", () => {
    mockActiveForm = { ...baseForm, isDirty: true }

    render(<ActiveFormCard />)

    expect(screen.getByText("Edit Employee")).toBeInTheDocument()
    expect(screen.getByText("Fill in the employee details")).toBeInTheDocument()
  })

  it("renders nothing when cardTitle is missing", () => {
    mockActiveForm = { ...baseForm, cardTitle: "" }

    const { container } = render(<ActiveFormCard />)

    // cardTitle is empty string → ActiveFormCard returns null early
    expect(container.firstChild).toBeNull()
  })

  it("renders nothing when both cardDescription and description are missing", () => {
    mockActiveForm = {
      ...baseForm,
      cardDescription: "",
      description: undefined,
    }

    const { container } = render(<ActiveFormCard />)

    expect(container.firstChild).toBeNull()
  })
})
