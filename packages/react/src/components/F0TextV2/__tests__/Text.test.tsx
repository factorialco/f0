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

    it("code → code with text-base font-normal font-mono", () => {
      render(<F0TextV2 variant="code" content="const x = 1" />)
      const el = screen.getByText("const x = 1")
      expect(el.tagName).toBe("CODE")
      expect(el).toHaveClass("text-base", "font-normal", "font-mono")
    })
    it("heading-lg → h3 with text-2xl font-semibold", () => {
      render(<F0TextV2 variant="heading-lg" content="Heading large" />)
      const el = screen.getByText("Heading large")
      expect(el.tagName).toBe("H3")
      expect(el).toHaveClass("text-2xl", "font-semibold")
    })

    it("heading-xs → h4", () => {
      render(<F0TextV2 variant="heading-xs" content="Heading extra small" />)
      const el = screen.getByText("Heading extra small")
      expect(el.tagName).toBe("H4")
    })

    it("body-xl → p with text-xl font-normal", () => {
      render(<F0TextV2 variant="body-xl" content="Body extra large" />)
      const el = screen.getByText("Body extra large")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-xl", "font-normal")
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
    it("combines variant, color, decoration, and transform", () => {
      render(
        <F0TextV2
          variant="label"
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
        "text-base",
        "text-f1-foreground-critical",
        "underline",
        "uppercase"
      )
    })
  })

  it("supports dataTestId", () => {
    render(<F0TextV2 content="With test id" dataTestId="text-v2" />)
    expect(screen.getByTestId("text-v2")).toBeInTheDocument()
  })
})
