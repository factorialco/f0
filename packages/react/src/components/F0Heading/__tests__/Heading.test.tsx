import { zeroRender as render, screen } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it } from "vitest"
import { F0Heading } from "../F0Heading"

describe("F0Heading Component", () => {
  describe("Default Behavior", () => {
    it("defaults to heading variant", () => {
      render(<F0Heading content="Default Heading" />)
      const element = screen.getByText("Default Heading")
      expect(element).toHaveClass("text-lg", "font-semibold")
    })

    it("defaults to h2 tag", () => {
      render(<F0Heading content="Default Heading" />)
      expect(screen.getByText("Default Heading").tagName).toBe("H2")
    })
  })

  describe("Allowed Variants", () => {
    it("renders heading variant", () => {
      render(<F0Heading variant="heading" content="Heading" />)
      const element = screen.getByText("Heading")
      expect(element).toHaveClass("text-lg", "font-semibold")
    })

    it("renders heading-large variant", () => {
      render(<F0Heading variant="heading-large" content="Large Heading" />)
      const element = screen.getByText("Large Heading")
      expect(element).toHaveClass("text-2xl", "font-semibold")
    })
  })

  describe("Allowed HTML Tags", () => {
    it("renders as h1 tag", () => {
      render(<F0Heading as="h1" content="H1" />)
      expect(screen.getByText("H1").tagName).toBe("H1")
    })

    it("renders as h2 tag", () => {
      render(<F0Heading as="h2" content="H2" />)
      expect(screen.getByText("H2").tagName).toBe("H2")
    })

    it("renders as h3 tag", () => {
      render(<F0Heading as="h3" content="H3" />)
      expect(screen.getByText("H3").tagName).toBe("H3")
    })

    it("renders as h4 tag", () => {
      render(<F0Heading as="h4" content="H4" />)
      expect(screen.getByText("H4").tagName).toBe("H4")
    })

    it("renders as h5 tag", () => {
      render(<F0Heading as="h5" content="H5" />)
      expect(screen.getByText("H5").tagName).toBe("H5")
    })

    it("renders as h6 tag", () => {
      render(<F0Heading as="h6" content="H6" />)
      expect(screen.getByText("H6").tagName).toBe("H6")
    })
  })

  describe("Props Forwarding", () => {
    it("forwards all Text component props", () => {
      render(<F0Heading content="Test" align="center" />)
      expect(screen.getByText("Test")).toHaveClass("text-center")
    })
  })
})
