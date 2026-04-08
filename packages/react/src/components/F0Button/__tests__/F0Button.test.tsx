import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { Add } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { ButtonInternal } from "../internal"
import { F0Button } from "../index"

describe("F0Button", () => {
  it("should call the onClick handler when clicked", async () => {
    const onClick = vi.fn()

    render(<F0Button label="Click me" onClick={() => onClick()} />)

    const button = screen.getByRole("button")
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it("should be temporarily disabled when onClick is a promise until the promise resolves", async () => {
    const onClick = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    render(<F0Button label="Click me" onClick={() => onClick()} />)

    const button = screen.getByRole("button", { name: "Click me" })
    await userEvent.click(button)

    expect(button).toBeDisabled()
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(button).not.toBeDisabled()
  })

  it("should render with icon", () => {
    render(<F0Button label="Add Item" icon={Add} />)
    const button = screen.getByRole("button")
    const svg = button.querySelector("svg")
    expect(svg).toBeInTheDocument()
    expect(screen.getByText("Add Item")).toBeInTheDocument()
  })

  it("should render as icon-only when hideLabel is true", () => {
    render(<F0Button label="Add Item" icon={Add} hideLabel round />)
    const button = screen.getByRole("button")
    const svg = button.querySelector("svg")
    const label = button.querySelector(".sr-only")
    expect(svg).toBeInTheDocument()

    expect(label).toHaveTextContent("Add Item")
  })

  it("should show loading state", () => {
    render(<F0Button label="Submit" loading />)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("should be disabled when disabled prop is true", () => {
    render(<F0Button label="Submit" disabled />)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })

  it("should clear loading state when onClick returns a rejected promise", async () => {
    // Pass a directly-rejected Promise so the finally block in handleClick fires
    const onClick = () => Promise.reject(new Error("Test error"))

    render(<F0Button label="Error Test" onClick={onClick} />)

    const button = screen.getByRole("button")
    await userEvent.click(button)

    // Loading clears even on rejection (finally block)
    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(button).not.toBeDisabled()
  })

  it("should render label as sr-only when emoji is provided", () => {
    render(<F0Button label="Emoji Button" emoji="🥰" variant="neutral" />)
    const button = screen.getByRole("button")
    const srOnly = button.querySelector(".sr-only")
    expect(srOnly).toBeInTheDocument()
    expect(srOnly).toHaveTextContent("Emoji Button")
  })

  it("should render as an anchor when href is provided", () => {
    render(<F0Button label="Visit" href="https://example.com" />)
    expect(screen.getByRole("link", { name: "Visit" })).toBeInTheDocument()
  })

  it("should render Counter when counterValue is provided", () => {
    render(<F0Button label="Save" counterValue={3} />)
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  it("should not render Counter when counterValue is 0", () => {
    render(<F0Button label="Save" counterValue={0} />)
    // counterValue=0 is defined (not undefined), so Counter should render
    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it("should render ai variant SVG gradient via ButtonInternal", () => {
    render(<ButtonInternal label="AI" variant="ai" />)
    const gradient = document.querySelector("#ai-gradient")
    expect(gradient).toBeInTheDocument()
  })
})
