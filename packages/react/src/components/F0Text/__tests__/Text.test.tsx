import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Text } from "../F0Text"

describe("F0Text Component", () => {
  describe("Allowed Variants", () => {
    it("renders body variant", () => {
      render(<F0Text variant="body" content="Body" />)
      expect(screen.getByText("Body")).toBeInTheDocument()
    })

    it("renders description variant", () => {
      render(<F0Text variant="description" content="Description" />)
      expect(screen.getByText("Description")).toBeInTheDocument()
    })

    it("renders small variant", () => {
      render(<F0Text variant="small" content="Small" />)
      expect(screen.getByText("Small")).toBeInTheDocument()
    })

    it("renders inverse variant", () => {
      render(<F0Text variant="inverse" content="Inverse" />)
      expect(screen.getByText("Inverse")).toBeInTheDocument()
    })

    it("renders code variant", () => {
      render(<F0Text variant="code" content="Code" />)
      expect(screen.getByText("Code")).toBeInTheDocument()
    })

    it("renders label variant", () => {
      render(<F0Text variant="label" content="Label" />)
      expect(screen.getByText("Label")).toBeInTheDocument()
    })
  })

  describe("Allowed HTML Tags", () => {
    it("renders as p tag", () => {
      render(<F0Text as="p" content="Paragraph" />)
      expect(screen.getByText("Paragraph").tagName).toBe("P")
    })

    it("renders as span tag", () => {
      render(<F0Text as="span" content="Span" />)
      expect(screen.getByText("Span").tagName).toBe("SPAN")
    })

    it("renders as div tag", () => {
      render(<F0Text as="div" content="Div" />)
      expect(screen.getByText("Div").tagName).toBe("DIV")
    })

    it("renders as label tag", () => {
      render(<F0Text as="label" content="Label" />)
      expect(screen.getByText("Label").tagName).toBe("LABEL")
    })

    it("renders as code tag", () => {
      render(<F0Text as="code" content="Code" />)
      expect(screen.getByText("Code").tagName).toBe("CODE")
    })
  })
})
