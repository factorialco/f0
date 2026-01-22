import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { Text } from "../Text"

describe("Text base component", () => {
  describe("Text variants", () => {
    it("renders a regular text", () => {
      render(<Text variant="body" content="Test Text" />)

      expect(screen.getByText("Test Text")).toBeInTheDocument()
      expect(screen.getByText("Test Text").tagName).toBe("P")
    })

    it("renders a small text", () => {
      render(<Text variant="small" content="Small" />)

      expect(screen.getByText("Small")).toBeInTheDocument()
      expect(screen.getByText("Small")).toHaveClass("text-sm")
    })

    it("renders code variant with code tag", () => {
      render(<Text variant="code" content="console.log()" />)
      expect(screen.getByText("console.log()").tagName).toBe("CODE")
    })

    it("renders heading variant with h2 tag", () => {
      render(<Text variant="heading" content="Heading" />)
      expect(screen.getByText("Heading").tagName).toBe("H2")
      expect(screen.getByText("Heading")).toHaveClass(
        "text-lg",
        "font-semibold"
      )
    })
  })

  describe("Text alignment", () => {
    it("renders left-aligned text by default", () => {
      render(<Text content="Left" />)
      expect(screen.getByText("Left")).toHaveClass("text-left")
    })

    it("renders centered text", () => {
      render(<Text align="center" content="Centered" />)
      expect(screen.getByText("Centered")).toHaveClass("text-center")
    })

    it("renders right-aligned text", () => {
      render(<Text align="right" content="Right" />)
      expect(screen.getByText("Right")).toHaveClass("text-right")
    })
  })

  describe("Ellipsis", () => {
    it("renders with single line ellipsis classes when ellipsis is true", () => {
      const { container } = render(<Text content="Long text" ellipsis={true} />)
      const ellipsisElement = container.querySelector(
        '[data-testid="one-ellipsis"]'
      )
      expect(ellipsisElement).toHaveClass("text-ellipsis", "whitespace-nowrap")
    })
  })
})
