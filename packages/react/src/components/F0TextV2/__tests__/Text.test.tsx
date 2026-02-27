import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0TextV2 } from "../"

describe("F0TextV2 Component", () => {
  describe("Renders each variant with correct tag and classes", () => {
    it("title → h2 with text-3xl font-semibold", () => {
      render(<F0TextV2 variant="title" content="Title" />)
      const el = screen.getByText("Title")
      expect(el.tagName).toBe("H2")
      expect(el).toHaveClass("text-3xl", "font-semibold")
    })

    it("heading → h3 with text-xl font-semibold", () => {
      render(<F0TextV2 variant="heading" content="Heading" />)
      const el = screen.getByText("Heading")
      expect(el.tagName).toBe("H3")
      expect(el).toHaveClass("text-xl", "font-semibold")
    })

    it("subtitle → p with text-lg font-normal and secondary color", () => {
      render(<F0TextV2 variant="subtitle" content="Subtitle" />)
      const el = screen.getByText("Subtitle")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass(
        "text-lg",
        "font-normal",
        "text-f1-foreground-secondary"
      )
    })

    it("body → p with text-base font-normal (default variant)", () => {
      render(<F0TextV2 content="Body" />)
      const el = screen.getByText("Body")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-base", "font-normal")
    })

    it("label → label with text-base font-medium and secondary color", () => {
      render(<F0TextV2 variant="label" content="Label" />)
      const el = screen.getByText("Label")
      expect(el.tagName).toBe("LABEL")
      expect(el).toHaveClass(
        "text-base",
        "font-medium",
        "text-f1-foreground-secondary"
      )
    })

    it("description → p with text-base font-normal and secondary color", () => {
      render(<F0TextV2 variant="description" content="Description" />)
      const el = screen.getByText("Description")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass(
        "text-base",
        "font-normal",
        "text-f1-foreground-secondary"
      )
    })

    it("caption → span with text-sm font-normal and secondary color", () => {
      render(<F0TextV2 variant="caption" content="Caption" />)
      const el = screen.getByText("Caption")
      expect(el.tagName).toBe("SPAN")
      expect(el).toHaveClass(
        "text-sm",
        "font-normal",
        "text-f1-foreground-secondary"
      )
    })

    it("code → code with text-sm font-normal font-mono", () => {
      render(<F0TextV2 variant="code" content="const x = 1" />)
      const el = screen.getByText("const x = 1")
      expect(el.tagName).toBe("CODE")
      expect(el).toHaveClass("text-sm", "font-normal", "font-mono")
    })
  })

  describe("Size override", () => {
    it("overrides variant default size", () => {
      render(<F0TextV2 variant="title" size="sm" content="Small title" />)
      expect(screen.getByText("Small title")).toHaveClass("text-sm")
    })

    it('size="default" keeps variant built-in size', () => {
      render(<F0TextV2 variant="title" size="default" content="Default" />)
      expect(screen.getByText("Default")).toHaveClass("text-3xl")
    })
  })

  describe("Color override", () => {
    it("applies explicit color", () => {
      render(<F0TextV2 color="critical" content="Error" />)
      expect(screen.getByText("Error")).toHaveClass(
        "text-f1-foreground-critical"
      )
    })

    it('color="default" overrides secondary variant default', () => {
      render(
        <F0TextV2 variant="description" color="default" content="Override" />
      )
      expect(screen.getByText("Override")).not.toHaveClass(
        "text-f1-foreground-secondary"
      )
    })
  })

  describe("Required indicator", () => {
    it("renders a red asterisk when required is true", () => {
      render(<F0TextV2 variant="label" content="Email" required />)
      const asterisk = screen.getByText("*", { exact: false })
      expect(asterisk.tagName).toBe("SPAN")
      expect(asterisk).toHaveClass("text-f1-foreground-critical")
      expect(asterisk).toHaveAttribute("aria-hidden", "true")
    })

    it("does not render asterisk when required is false", () => {
      render(<F0TextV2 variant="label" content="Email" />)
      const el = screen.getByText("Email")
      expect(el.innerHTML).not.toContain("*")
    })

    it("renders asterisk with ellipsis enabled", () => {
      const { container } = render(
        <F0TextV2 variant="label" content="Email" required ellipsis />
      )
      const asterisk = container.querySelector(".text-f1-foreground-critical")
      expect(asterisk).toBeInTheDocument()
      expect(asterisk).toHaveAttribute("aria-hidden", "true")
    })
  })

  describe("Ellipsis", () => {
    it("renders with ellipsis component when ellipsis is true", () => {
      const { container } = render(
        <F0TextV2 content="Long text" ellipsis={true} />
      )
      const ellipsisElement = container.querySelector(
        '[data-testid="one-ellipsis"]'
      )
      expect(ellipsisElement).toHaveClass("text-ellipsis", "whitespace-nowrap")
    })
  })

  describe("Combined props", () => {
    it("combines variant, size, color, decoration, and transform", () => {
      render(
        <F0TextV2
          variant="label"
          size="lg"
          color="critical"
          decoration="underline"
          transform="uppercase"
          content="Combined"
        />
      )
      const el = screen.getByText("Combined")
      expect(el.tagName).toBe("LABEL")
      expect(el).toHaveClass(
        "font-medium",
        "text-lg",
        "text-f1-foreground-critical",
        "underline",
        "uppercase"
      )
    })
  })
})
