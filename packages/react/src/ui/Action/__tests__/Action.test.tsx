import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { Action } from "../Action"

describe("Action Component", () => {
  it("calls onClick when clicked (button)", () => {
    const handleClick = vi.fn()
    render(<Action onClick={handleClick}>Click</Action>)
    fireEvent.click(screen.getByText("Click"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("renders as a link when href is provided", () => {
    render(<Action href="https://factorialhr.com">Example</Action>)
    const link = screen.getByRole("link", { name: "Example" })
    expect(link.tagName).toBe("A")
    expect(link).toHaveAttribute("href", "https://factorialhr.com")
  })

  it("disabled link should not have href and should be a span", () => {
    render(
      <Action href="https://factorialhr.com" disabled>
        Example
      </Action>
    )
    const link = screen.getByText("Example")
    expect(link).not.toHaveAttribute("href")
    expect(link.tagName).toBe("SPAN")
  })

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn()
    render(
      <Action onClick={handleClick} disabled>
        Disabled
      </Action>
    )
    fireEvent.click(screen.getByText("Disabled"))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
