import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { TextV2 } from "../TextV2"

describe("TextV2 base component", () => {
  describe("Variants", () => {
    it("renders body variant by default as p tag", () => {
      render(<TextV2 content="Body text" />)
      const el = screen.getByText("Body text")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-base", "font-normal")
    })

    it("renders title variant as h2", () => {
      render(<TextV2 variant="title" content="Title" />)
      const el = screen.getByText("Title")
      expect(el.tagName).toBe("H2")
      expect(el).toHaveClass("text-3xl", "font-semibold")
    })

    it("renders heading variant as h3", () => {
      render(<TextV2 variant="heading" content="Heading" />)
      const el = screen.getByText("Heading")
      expect(el.tagName).toBe("H3")
      expect(el).toHaveClass("text-xl", "font-semibold")
    })

    it("renders subtitle variant as p with secondary color", () => {
      render(<TextV2 variant="subtitle" content="Subtitle" />)
      const el = screen.getByText("Subtitle")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-lg", "font-normal")
      expect(el).toHaveClass("text-f1-foreground-secondary")
    })

    it("renders label variant as label with secondary color", () => {
      render(<TextV2 variant="label" content="Label" />)
      const el = screen.getByText("Label")
      expect(el.tagName).toBe("LABEL")
      expect(el).toHaveClass("text-base", "font-medium")
      expect(el).toHaveClass("text-f1-foreground-secondary")
    })

    it("renders description variant as p with secondary color", () => {
      render(<TextV2 variant="description" content="Description" />)
      const el = screen.getByText("Description")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-base", "font-normal")
      expect(el).toHaveClass("text-f1-foreground-secondary")
    })

    it("renders caption variant as span with secondary color", () => {
      render(<TextV2 variant="caption" content="Caption" />)
      const el = screen.getByText("Caption")
      expect(el.tagName).toBe("SPAN")
      expect(el).toHaveClass("text-sm", "font-normal")
      expect(el).toHaveClass("text-f1-foreground-secondary")
    })

    it("renders code variant as code with monospace font", () => {
      render(<TextV2 variant="code" content="const x = 1" />)
      const el = screen.getByText("const x = 1")
      expect(el.tagName).toBe("CODE")
      expect(el).toHaveClass("text-base", "font-normal", "font-mono")
    })
    it("supports explicit sized heading variants", () => {
      render(<TextV2 variant="heading-lg" content="Heading lg" />)
      expect(screen.getByText("Heading lg")).toHaveClass(
        "text-2xl",
        "font-semibold"
      )
    })

    it("maps heading-xs variant to h4", () => {
      render(<TextV2 variant="heading-xs" content="Heading extra small" />)
      expect(screen.getByText("Heading extra small").tagName).toBe("H4")
    })

    it("supports explicit sized body variants", () => {
      render(<TextV2 variant="body-xl" content="Body extra large" />)
      expect(screen.getByText("Body extra large")).toHaveClass(
        "text-xl",
        "font-normal"
      )
    })
  })

  describe("Color", () => {
    it("applies explicit color", () => {
      render(<TextV2 color="critical" content="Error" />)
      expect(screen.getByText("Error")).toHaveClass(
        "text-f1-foreground-critical"
      )
    })

    it('color="default" overrides secondary variant default', () => {
      render(
        <TextV2 variant="description" color="default" content="Override" />
      )
      expect(screen.getByText("Override")).not.toHaveClass(
        "text-f1-foreground-secondary"
      )
    })
  })

  describe("Alignment", () => {
    it("renders left-aligned by default", () => {
      render(<TextV2 content="Left" />)
      expect(screen.getByText("Left")).toHaveClass("text-left")
    })

    it("renders centered text", () => {
      render(<TextV2 align="center" content="Centered" />)
      expect(screen.getByText("Centered")).toHaveClass("text-center")
    })

    it("renders right-aligned text", () => {
      render(<TextV2 align="right" content="Right" />)
      expect(screen.getByText("Right")).toHaveClass("text-right")
    })
  })

  describe("Decoration", () => {
    it("renders with underline", () => {
      render(<TextV2 decoration="underline" content="Underlined" />)
      expect(screen.getByText("Underlined")).toHaveClass("underline")
    })

    it("renders without decoration by default", () => {
      render(<TextV2 content="Plain" />)
      const el = screen.getByText("Plain")
      expect(el).not.toHaveClass("underline")
      expect(el).not.toHaveClass("overline")
      expect(el).not.toHaveClass("line-through")
    })
  })

  describe("Transform", () => {
    it("renders with uppercase", () => {
      render(<TextV2 transform="uppercase" content="Upper" />)
      expect(screen.getByText("Upper")).toHaveClass("uppercase")
    })

    it("renders without transform by default", () => {
      render(<TextV2 content="Normal" />)
      const el = screen.getByText("Normal")
      expect(el).not.toHaveClass("uppercase")
      expect(el).not.toHaveClass("lowercase")
      expect(el).not.toHaveClass("capitalize")
    })
  })

  describe("Required indicator", () => {
    it("renders a red asterisk when required is true", () => {
      render(<TextV2 variant="label" content="Field label" required />)
      const asterisk = screen.getByText("*", { exact: false })
      expect(asterisk.tagName).toBe("SPAN")
      expect(asterisk).toHaveClass("text-f1-foreground-critical")
      expect(asterisk).toHaveAttribute("aria-hidden", "true")
    })

    it("does not render asterisk when required is false", () => {
      render(<TextV2 variant="label" content="Field label" />)
      expect(screen.queryByText("*")).not.toBeInTheDocument()
    })

    it("renders asterisk with ellipsis enabled", () => {
      const { container } = render(
        <TextV2 variant="label" content="Email" required ellipsis />
      )
      const asterisk = container.querySelector(".text-f1-foreground-critical")
      expect(asterisk).toBeInTheDocument()
      expect(asterisk).toHaveAttribute("aria-hidden", "true")
    })
  })

  describe("Ellipsis", () => {
    it("renders with ellipsis component when ellipsis is true", () => {
      const { container } = render(
        <TextV2 content="Long text" ellipsis={true} />
      )
      const ellipsisElement = container.querySelector(
        '[data-testid="one-ellipsis"]'
      )
      expect(ellipsisElement).toHaveClass("text-ellipsis", "whitespace-nowrap")
    })
  })
})
