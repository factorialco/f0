import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { Textarea } from "../textarea"

describe("Textarea", () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
  })

  it("should render with a label", () => {
    render(<Textarea label="Description" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("should render with a value", () => {
    render(<Textarea label="Description" value="Hello world" />)
    expect(screen.getByRole("textbox")).toHaveValue("Hello world")
  })

  it("should call onChange when typing", async () => {
    const onChange = vi.fn()
    render(<Textarea label="Description" value="" onChange={onChange} />)
    const textarea = screen.getByRole("textbox")
    await userEvent.type(textarea, "a")
    expect(onChange).toHaveBeenCalled()
  })

  it("should be disabled when disabled prop is true", () => {
    render(<Textarea label="Description" disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  describe("auto-grow", () => {
    let scrollHeightValue: number
    let originalDescriptor: PropertyDescriptor | undefined
    let originalGetComputedStyle: typeof window.getComputedStyle =
      window.getComputedStyle

    beforeEach(() => {
      scrollHeightValue = 0
      originalDescriptor = Object.getOwnPropertyDescriptor(
        HTMLTextAreaElement.prototype,
        "scrollHeight"
      )
      Object.defineProperty(HTMLTextAreaElement.prototype, "scrollHeight", {
        configurable: true,
        get() {
          return scrollHeightValue
        },
      })

      // jsdom's getComputedStyle returns "" for unset properties,
      // causing NaN in parseFloat. Mock with realistic browser defaults.
      originalGetComputedStyle = window.getComputedStyle
      window.getComputedStyle = vi.fn().mockImplementation((el) => {
        const real = originalGetComputedStyle(el)
        return {
          ...real,
          lineHeight: "20px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }
      }) as typeof window.getComputedStyle
    })

    afterEach(() => {
      window.getComputedStyle = originalGetComputedStyle
      if (originalDescriptor) {
        Object.defineProperty(
          HTMLTextAreaElement.prototype,
          "scrollHeight",
          originalDescriptor
        )
      }
    })

    it("should cap height at maxHeight and enable scrolling", () => {
      scrollHeightValue = 200
      render(<Textarea label="Notes" value="Long content" maxHeight={100} />)
      const textarea = screen.getByRole("textbox")

      expect(textarea.style.height).toBe("100px")
      expect(textarea.style.overflowY).toBe("auto")
    })

    it("should grow freely when no maxHeight is set", () => {
      scrollHeightValue = 300
      render(<Textarea label="Notes" value="Content" />)
      const textarea = screen.getByRole("textbox")

      expect(textarea.style.height).toBe("300px")
      expect(textarea.style.overflowY).toBe("hidden")
    })

    it("should not scroll when content fits within maxHeight", () => {
      scrollHeightValue = 80
      render(<Textarea label="Notes" value="Short" maxHeight={200} />)
      const textarea = screen.getByRole("textbox")

      expect(textarea.style.height).toBe("80px")
      expect(textarea.style.overflowY).toBe("hidden")
    })

    it("should have resize-none class to prevent manual resizing", () => {
      scrollHeightValue = 40
      render(<Textarea label="Notes" value="" />)
      const textarea = screen.getByRole("textbox")
      expect(textarea.className).toContain("resize-none")
    })

    it("should not use flex-stretched height (collapses to 0px before measuring)", () => {
      // When scrollHeight is 0 (collapsed), the minimum rows-based height kicks in.
      // This verifies the textarea doesn't inherit its parent's flex-stretched height.
      scrollHeightValue = 0
      render(<Textarea label="Notes" value="" />)
      const textarea = screen.getByRole("textbox")

      // Height should be the rows-based minimum, not 0
      const height = parseFloat(textarea.style.height)
      expect(height).toBeGreaterThan(0)
    })

    it("should respect rows-based minimum height even when scrollHeight is small", () => {
      scrollHeightValue = 5 // Very small scrollHeight
      render(<Textarea label="Notes" value="" rows={3} />)
      const textarea = screen.getByRole("textbox")

      // The minimum height should be at least lineHeight * rows
      const height = parseFloat(textarea.style.height)
      // With mocked getComputedStyle defaults, lineHeight is usually 20
      // 3 rows * 20 + padding should be > 5
      expect(height).toBeGreaterThan(5)
    })

    it("should update height on every render, not just on value change", () => {
      scrollHeightValue = 60
      const { rerender } = render(<Textarea label="Notes" value="same value" />)

      const textarea = screen.getByRole("textbox")
      expect(textarea.style.height).toBe("60px")

      // Change scrollHeight but re-render with the SAME value
      // This simulates programmatic updates (e.g. formRef.setValues)
      scrollHeightValue = 120
      rerender(<Textarea label="Notes" value="same value" />)

      expect(textarea.style.height).toBe("120px")
    })
  })

  describe("maxHeight prop", () => {
    it("should accept maxHeight as a number", () => {
      render(<Textarea label="Notes" maxHeight={150} />)
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })

    it("should work without maxHeight", () => {
      render(<Textarea label="Notes" />)
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })
  })
})
