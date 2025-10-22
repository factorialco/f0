import { zeroRender as render, screen } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it } from "vitest"
import { F0Text } from "../Text"

describe("F0Text Component", () => {
  it("renders a regular text", () => {
    render(<F0Text variant="body" content="Test Text" />)

    expect(screen.getByText("Test Text")).toBeInTheDocument()
    expect(screen.getByText("Test Text").tagName).toBe("P")
  })

  it("renders a centered text", () => {
    render(<F0Text align="center" content="Centered" />)

    expect(screen.getByText("Centered")).toBeInTheDocument()
    expect(screen.getByText("Centered")).toHaveClass("text-center")
  })

  it("renders a small text", () => {
    render(<F0Text variant="small" content="Small" />)

    expect(screen.getByText("Small")).toBeInTheDocument()
    expect(screen.getByText("Small")).toHaveClass("text-sm")
  })
})
