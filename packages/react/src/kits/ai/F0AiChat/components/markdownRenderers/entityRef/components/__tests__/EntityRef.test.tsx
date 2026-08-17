import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

// Mock the registry so we control which renderers are available
vi.mock("../entityRefRegistry", () => {
  return {
    getEntityRefRenderer: vi.fn(),
  }
})

import { getEntityRefRenderer } from "../entityRefRegistry"
import { EntityRef, extractText } from "../EntityRef"

describe("EntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Register a mock renderer for "person"
    const MockPerson = ({ id, label }: { id: string; label: string }) => (
      <span data-testid="mock-person">{`${label} (${id})`}</span>
    )
    ;(getEntityRefRenderer as ReturnType<typeof vi.fn>).mockImplementation(
      (type: string) => {
        if (type === "person") return MockPerson
        return undefined
      }
    )
  })

  it("renders children as plain text when id is missing", () => {
    render(<EntityRef type="person">Ana García</EntityRef>)
    expect(screen.getByText("Ana García")).toBeInTheDocument()
  })

  it("renders children as plain text when type is missing", () => {
    render(<EntityRef id="42">Ana García</EntityRef>)
    expect(screen.getByText("Ana García")).toBeInTheDocument()
  })

  it("renders children as plain text for an unregistered type", () => {
    render(
      <EntityRef type="unknown" id="1">
        Unknown Entity
      </EntityRef>
    )
    expect(screen.getByText("Unknown Entity")).toBeInTheDocument()
  })

  it("dispatches to the registered renderer for a known type", () => {
    render(
      <EntityRef type="person" id="42">
        Ana García
      </EntityRef>
    )
    expect(screen.getByTestId("mock-person")).toHaveTextContent(
      "Ana García (42)"
    )
  })
})

describe("extractText", () => {
  it("extracts from a string", () => {
    expect(extractText("hello")).toBe("hello")
  })

  it("extracts from a number", () => {
    expect(extractText(42)).toBe("42")
  })

  it("extracts from an array", () => {
    expect(extractText(["hello", " ", "world"])).toBe("hello world")
  })

  it("returns empty string for null/undefined", () => {
    expect(extractText(null)).toBe("")
    expect(extractText(undefined)).toBe("")
  })
})
