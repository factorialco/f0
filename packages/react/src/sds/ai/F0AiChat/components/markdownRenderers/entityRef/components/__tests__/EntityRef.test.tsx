import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { EntityRef, extractText } from "../EntityRef"

describe("EntityRef", () => {
  it("renders children as plain text when id is missing", () => {
    render(<EntityRef type="person">Ana García</EntityRef>)
    expect(screen.getByText("Ana García")).toBeInTheDocument()
  })

  it("renders children as plain text when type is missing", () => {
    render(<EntityRef id="42">Ana García</EntityRef>)
    expect(screen.getByText("Ana García")).toBeInTheDocument()
  })

  it("renders label as plain text for an unregistered type", () => {
    render(
      <EntityRef type="unknown" id="1">
        Unknown Entity
      </EntityRef>
    )
    expect(screen.getByText("Unknown Entity")).toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("renders label as plain text for a known type without a resolver", () => {
    // No AiChatStateProvider wrapping ⇒ no resolvers configured
    render(
      <EntityRef type="person" id="42">
        Ana García
      </EntityRef>
    )
    expect(screen.getByText("Ana García")).toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
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
