import { zeroRender as render, screen } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it } from "vitest"
import { F0Text } from "../Text"

describe("F0Text Component", () => {
  it("renders a title", () => {
    render(<F0Text variant="heading">Test Heading</F0Text>)

    expect(screen.getByText("Test Heading")).toBeInTheDocument()
    expect(screen.getByText("Test Heading").tagName).toBe("H2")
  })

  it("renders a centered text", () => {
    render(<F0Text align="center">Centered</F0Text>)

    expect(screen.getByText("Centered")).toBeInTheDocument()
    expect(screen.getByText("Centered")).toHaveClass("text-center")
  })

  it("renders a small text", () => {
    render(<F0Text variant="small">Small</F0Text>)

    expect(screen.getByText("Small")).toBeInTheDocument()
    expect(screen.getByText("Small")).toHaveClass("text-sm")
  })
})
