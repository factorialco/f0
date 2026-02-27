import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0TextV2 } from "../"

describe("F0TextV2 Component", () => {
  describe("Title variant", () => {
    it("renders with default size (3xl) and h2 tag", () => {
      render(<F0TextV2 variant="title" content="Page Title" />)
      const el = screen.getByText("Page Title")
      expect(el.tagName).toBe("H2")
      expect(el).toHaveClass("text-3xl", "font-semibold")
    })

    it("renders with explicit size override", () => {
      render(<F0TextV2 variant="title" size="2xl" content="Smaller Title" />)
      const el = screen.getByText("Smaller Title")
      expect(el.tagName).toBe("H2")
      expect(el).toHaveClass("text-2xl", "font-semibold")
    })
  })

  describe("Heading variant", () => {
    it("renders with default size (xl) and h3 tag", () => {
      render(<F0TextV2 variant="heading" content="Section Heading" />)
      const el = screen.getByText("Section Heading")
      expect(el.tagName).toBe("H3")
      expect(el).toHaveClass("text-xl", "font-semibold")
    })

    it("renders with explicit size override", () => {
      render(<F0TextV2 variant="heading" size="lg" content="Smaller Heading" />)
      const el = screen.getByText("Smaller Heading")
      expect(el.tagName).toBe("H3")
      expect(el).toHaveClass("text-lg", "font-semibold")
    })
  })

  describe("Subtitle variant", () => {
    it("renders with default size (lg/text-lg) and p tag", () => {
      render(<F0TextV2 variant="subtitle" content="Subtitle text" />)
      const el = screen.getByText("Subtitle text")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-lg", "font-normal")
    })

    it("defaults to secondary color", () => {
      render(<F0TextV2 variant="subtitle" content="Subtitle secondary" />)
      const el = screen.getByText("Subtitle secondary")
      expect(el).toHaveClass("text-f1-foreground-secondary")
    })

    it("allows explicit color to override secondary default", () => {
      render(
        <F0TextV2
          variant="subtitle"
          color="critical"
          content="Critical subtitle"
        />
      )
      const el = screen.getByText("Critical subtitle")
      expect(el).toHaveClass("text-f1-foreground-critical")
    })

    it('allows color="default" to override secondary default', () => {
      render(
        <F0TextV2
          variant="subtitle"
          color="default"
          content="Default subtitle"
        />
      )
      const el = screen.getByText("Default subtitle")
      expect(el).not.toHaveClass("text-f1-foreground-secondary")
    })

    it("renders with explicit size override", () => {
      render(
        <F0TextV2 variant="subtitle" size="lg" content="Bigger subtitle" />
      )
      const el = screen.getByText("Bigger subtitle")
      expect(el).toHaveClass("text-lg")
    })
  })

  describe("Body variant", () => {
    it("renders with default size (md) and p tag", () => {
      render(<F0TextV2 variant="body" content="Body text" />)
      const el = screen.getByText("Body text")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-base", "font-normal")
    })

    it("renders with explicit size override", () => {
      render(<F0TextV2 variant="body" size="lg" content="Larger body" />)
      const el = screen.getByText("Larger body")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-lg", "font-normal")
    })
  })

  describe("Label variant", () => {
    it("renders with default size (md/text-base) and label tag", () => {
      render(<F0TextV2 variant="label" content="Field label" />)
      const el = screen.getByText("Field label")
      expect(el.tagName).toBe("LABEL")
      expect(el).toHaveClass("text-base", "font-medium")
    })

    it("defaults to secondary color", () => {
      render(<F0TextV2 variant="label" content="Label secondary" />)
      const el = screen.getByText("Label secondary")
      expect(el).toHaveClass("text-f1-foreground-secondary")
    })

    it("allows explicit color to override secondary default", () => {
      render(
        <F0TextV2 variant="label" color="critical" content="Critical label" />
      )
      const el = screen.getByText("Critical label")
      expect(el).toHaveClass("text-f1-foreground-critical")
    })

    it('allows color="default" to override secondary default', () => {
      render(
        <F0TextV2 variant="label" color="default" content="Default label" />
      )
      const el = screen.getByText("Default label")
      expect(el).not.toHaveClass("text-f1-foreground-secondary")
    })

    it("renders with explicit size override", () => {
      render(<F0TextV2 variant="label" size="sm" content="Smaller label" />)
      const el = screen.getByText("Smaller label")
      expect(el.tagName).toBe("LABEL")
      expect(el).toHaveClass("text-sm", "font-medium")
    })
  })

  describe("Description variant", () => {
    it("renders with default size (md/text-base) and secondary color", () => {
      render(<F0TextV2 variant="description" content="Help text" />)
      const el = screen.getByText("Help text")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-base", "font-normal")
      expect(el).toHaveClass("text-f1-foreground-secondary")
    })

    it("allows explicit color to override secondary default", () => {
      render(
        <F0TextV2 variant="description" color="critical" content="Error help" />
      )
      const el = screen.getByText("Error help")
      expect(el).toHaveClass("text-f1-foreground-critical")
    })

    it('allows color="default" to override secondary default', () => {
      render(
        <F0TextV2
          variant="description"
          color="default"
          content="Default color description"
        />
      )
      const el = screen.getByText("Default color description")
      expect(el).not.toHaveClass("text-f1-foreground-secondary")
    })

    it("renders with explicit size override", () => {
      render(
        <F0TextV2 variant="description" size="sm" content="Smaller help" />
      )
      const el = screen.getByText("Smaller help")
      expect(el).toHaveClass("text-sm")
    })
  })

  describe("Caption variant", () => {
    it("renders with default size (sm) and span tag", () => {
      render(<F0TextV2 variant="caption" content="Caption text" />)
      const el = screen.getByText("Caption text")
      expect(el.tagName).toBe("SPAN")
      expect(el).toHaveClass("text-sm", "font-normal")
    })

    it("defaults to secondary color", () => {
      render(<F0TextV2 variant="caption" content="Caption secondary" />)
      const el = screen.getByText("Caption secondary")
      expect(el).toHaveClass("text-f1-foreground-secondary")
    })

    it("allows explicit color to override secondary default", () => {
      render(
        <F0TextV2 variant="caption" color="warning" content="Warning caption" />
      )
      const el = screen.getByText("Warning caption")
      expect(el).toHaveClass("text-f1-foreground-warning")
    })

    it('allows color="default" to override secondary default', () => {
      render(
        <F0TextV2 variant="caption" color="default" content="Default caption" />
      )
      const el = screen.getByText("Default caption")
      expect(el).not.toHaveClass("text-f1-foreground-secondary")
    })

    it("renders with explicit size override", () => {
      render(<F0TextV2 variant="caption" size="xs" content="Tiny caption" />)
      const el = screen.getByText("Tiny caption")
      expect(el).toHaveClass("text-xs")
    })
  })

  describe("Code variant", () => {
    it("renders with default size (sm), monospace font, and code tag", () => {
      render(<F0TextV2 variant="code" content="const x = 1" />)
      const el = screen.getByText("const x = 1")
      expect(el.tagName).toBe("CODE")
      expect(el).toHaveClass("text-sm", "font-normal", "font-mono")
    })

    it("renders with explicit size override", () => {
      render(<F0TextV2 variant="code" size="md" content="const y = 2" />)
      const el = screen.getByText("const y = 2")
      expect(el.tagName).toBe("CODE")
      expect(el).toHaveClass("text-base", "font-mono")
    })
  })

  describe("Size is optional — default baked into variant", () => {
    it("title defaults to 3xl", () => {
      render(<F0TextV2 variant="title" content="T" />)
      expect(screen.getByText("T")).toHaveClass("text-3xl")
    })

    it("heading defaults to xl", () => {
      render(<F0TextV2 variant="heading" content="H" />)
      expect(screen.getByText("H")).toHaveClass("text-xl")
    })

    it("subtitle defaults to lg (text-lg)", () => {
      render(<F0TextV2 variant="subtitle" content="S" />)
      expect(screen.getByText("S")).toHaveClass("text-lg")
    })

    it("body defaults to md (text-base)", () => {
      render(<F0TextV2 variant="body" content="B" />)
      expect(screen.getByText("B")).toHaveClass("text-base")
    })

    it("label defaults to md (text-base)", () => {
      render(<F0TextV2 variant="label" content="L" />)
      expect(screen.getByText("L")).toHaveClass("text-base")
    })

    it("description defaults to md (text-base)", () => {
      render(<F0TextV2 variant="description" content="D" />)
      expect(screen.getByText("D")).toHaveClass("text-base")
    })

    it("caption defaults to sm", () => {
      render(<F0TextV2 variant="caption" content="C" />)
      expect(screen.getByText("C")).toHaveClass("text-sm")
    })

    it("code defaults to sm", () => {
      render(<F0TextV2 variant="code" content="X" />)
      expect(screen.getByText("X")).toHaveClass("text-sm")
    })
  })

  describe('Size "default" keeps variant built-in size', () => {
    it("title with size=default keeps 3xl", () => {
      render(<F0TextV2 variant="title" size="default" content="T" />)
      expect(screen.getByText("T")).toHaveClass("text-3xl")
    })

    it("heading with size=default keeps xl", () => {
      render(<F0TextV2 variant="heading" size="default" content="H" />)
      expect(screen.getByText("H")).toHaveClass("text-xl")
    })

    it("body with size=default keeps text-base", () => {
      render(<F0TextV2 variant="body" size="default" content="B" />)
      expect(screen.getByText("B")).toHaveClass("text-base")
    })

    it("caption with size=default keeps sm", () => {
      render(<F0TextV2 variant="caption" size="default" content="C" />)
      expect(screen.getByText("C")).toHaveClass("text-sm")
    })
  })

  describe("Size independence", () => {
    it("allows any size with any variant", () => {
      render(<F0TextV2 variant="heading" size="3xl" content="Big heading" />)
      const el = screen.getByText("Big heading")
      expect(el).toHaveClass("text-3xl", "font-semibold")
    })

    it("allows xs size with title variant", () => {
      render(<F0TextV2 variant="title" size="xs" content="Tiny title" />)
      const el = screen.getByText("Tiny title")
      expect(el).toHaveClass("text-xs", "font-semibold")
    })
  })

  describe("Default variant", () => {
    it("defaults to body when no variant specified", () => {
      render(<F0TextV2 content="Default" />)
      const el = screen.getByText("Default")
      expect(el.tagName).toBe("P")
      expect(el).toHaveClass("text-base", "font-normal")
    })
  })

  describe("HTML tags determined by variant", () => {
    it("title renders as h2", () => {
      render(<F0TextV2 variant="title" content="T" />)
      expect(screen.getByText("T").tagName).toBe("H2")
    })

    it("heading renders as h3", () => {
      render(<F0TextV2 variant="heading" content="H" />)
      expect(screen.getByText("H").tagName).toBe("H3")
    })

    it("subtitle renders as p", () => {
      render(<F0TextV2 variant="subtitle" content="S" />)
      expect(screen.getByText("S").tagName).toBe("P")
    })

    it("body renders as p", () => {
      render(<F0TextV2 variant="body" content="B" />)
      expect(screen.getByText("B").tagName).toBe("P")
    })

    it("label renders as label", () => {
      render(<F0TextV2 variant="label" content="L" />)
      expect(screen.getByText("L").tagName).toBe("LABEL")
    })

    it("description renders as p", () => {
      render(<F0TextV2 variant="description" content="D" />)
      expect(screen.getByText("D").tagName).toBe("P")
    })

    it("caption renders as span", () => {
      render(<F0TextV2 variant="caption" content="C" />)
      expect(screen.getByText("C").tagName).toBe("SPAN")
    })

    it("code renders as code", () => {
      render(<F0TextV2 variant="code" content="X" />)
      expect(screen.getByText("X").tagName).toBe("CODE")
    })
  })

  describe("Color prop", () => {
    it("renders with default color", () => {
      render(<F0TextV2 color="default" content="Default" />)
      expect(screen.getByText("Default")).toHaveClass("text-f1-foreground")
    })

    it("renders with secondary color", () => {
      render(<F0TextV2 color="secondary" content="Secondary" />)
      expect(screen.getByText("Secondary")).toHaveClass(
        "text-f1-foreground-secondary"
      )
    })

    it("renders with tertiary color", () => {
      render(<F0TextV2 color="tertiary" content="Tertiary" />)
      expect(screen.getByText("Tertiary")).toHaveClass(
        "text-f1-foreground-tertiary"
      )
    })

    it("renders with critical color", () => {
      render(<F0TextV2 color="critical" content="Critical" />)
      expect(screen.getByText("Critical")).toHaveClass(
        "text-f1-foreground-critical"
      )
    })

    it("renders with warning color", () => {
      render(<F0TextV2 color="warning" content="Warning" />)
      expect(screen.getByText("Warning")).toHaveClass(
        "text-f1-foreground-warning"
      )
    })

    it("renders with positive color", () => {
      render(<F0TextV2 color="positive" content="Positive" />)
      expect(screen.getByText("Positive")).toHaveClass(
        "text-f1-foreground-positive"
      )
    })

    it("renders with info color", () => {
      render(<F0TextV2 color="info" content="Info" />)
      expect(screen.getByText("Info")).toHaveClass("text-f1-foreground-info")
    })

    it("renders with inverse color", () => {
      render(<F0TextV2 color="inverse" content="Inverse" />)
      expect(screen.getByText("Inverse")).toHaveClass(
        "text-f1-foreground-inverse"
      )
    })

    it("renders with inverse-secondary color", () => {
      render(<F0TextV2 color="inverse-secondary" content="InverseSecondary" />)
      expect(screen.getByText("InverseSecondary")).toHaveClass(
        "text-f1-foreground-inverse-secondary"
      )
    })

    it("renders with disabled color", () => {
      render(<F0TextV2 color="disabled" content="Disabled" />)
      expect(screen.getByText("Disabled")).toHaveClass(
        "text-f1-foreground-disabled"
      )
    })

    it("renders with accent color", () => {
      render(<F0TextV2 color="accent" content="Accent" />)
      expect(screen.getByText("Accent")).toHaveClass(
        "text-f1-foreground-accent"
      )
    })

    it("renders with selected color", () => {
      render(<F0TextV2 color="selected" content="Selected" />)
      expect(screen.getByText("Selected")).toHaveClass(
        "text-f1-foreground-selected"
      )
    })

    it("combines color with variant independently", () => {
      render(
        <F0TextV2
          variant="heading"
          color="critical"
          content="Critical Heading"
        />
      )
      const el = screen.getByText("Critical Heading")
      expect(el).toHaveClass("font-semibold", "text-f1-foreground-critical")
    })
  })

  describe("Text decoration", () => {
    it("renders with underline decoration", () => {
      render(<F0TextV2 decoration="underline" content="Underlined" />)
      expect(screen.getByText("Underlined")).toHaveClass("underline")
    })

    it("renders with overline decoration", () => {
      render(<F0TextV2 decoration="overline" content="Overlined" />)
      expect(screen.getByText("Overlined")).toHaveClass("overline")
    })

    it("renders with line-through decoration", () => {
      render(<F0TextV2 decoration="line-through" content="Strikethrough" />)
      expect(screen.getByText("Strikethrough")).toHaveClass("line-through")
    })

    it("renders without decoration by default", () => {
      render(<F0TextV2 content="No decoration" />)
      const el = screen.getByText("No decoration")
      expect(el).not.toHaveClass("underline")
      expect(el).not.toHaveClass("overline")
      expect(el).not.toHaveClass("line-through")
    })
  })

  describe("Text transform", () => {
    it("renders with uppercase transform", () => {
      render(<F0TextV2 transform="uppercase" content="Uppercase" />)
      expect(screen.getByText("Uppercase")).toHaveClass("uppercase")
    })

    it("renders with lowercase transform", () => {
      render(<F0TextV2 transform="lowercase" content="Lowercase" />)
      expect(screen.getByText("Lowercase")).toHaveClass("lowercase")
    })

    it("renders with capitalize transform", () => {
      render(<F0TextV2 transform="capitalize" content="Capitalize" />)
      expect(screen.getByText("Capitalize")).toHaveClass("capitalize")
    })

    it("renders without transform by default", () => {
      render(<F0TextV2 content="No transform" />)
      const el = screen.getByText("No transform")
      expect(el).not.toHaveClass("uppercase")
      expect(el).not.toHaveClass("lowercase")
      expect(el).not.toHaveClass("capitalize")
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

    it("renders asterisk with any variant", () => {
      render(<F0TextV2 variant="body" content="Name" required />)
      const asterisk = screen.getByText("*", { exact: false })
      expect(asterisk).toHaveClass("text-f1-foreground-critical")
    })
  })

  describe("Combined props", () => {
    it("combines variant, size, color, decoration, and transform", () => {
      render(
        <F0TextV2
          variant="label"
          size="md"
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
})
