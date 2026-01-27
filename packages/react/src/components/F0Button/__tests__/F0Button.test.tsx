import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { Add } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

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
      vi.fn()
    }

    render(<F0Button label="Click me" onClick={() => onClick()} />)

    const button = screen.getByRole("button", { name: "Click me" })
    await userEvent.click(button)

    expect(button.attributes.getNamedItem("disabled")).not.toBeNull()
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(button.attributes.getNamedItem("disabled")).toBeNull()
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

  it("should handle async click with error", async () => {
    const onError = vi.fn()
    const onClick = async () => {
      throw new Error("Test error")
    }

    render(
      <F0Button
        label="Error Test"
        onClick={() => {
          onClick().catch(onError)
        }}
      />
    )

    const button = screen.getByRole("button")
    await userEvent.click(button)

    // Button should be enabled after error
    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(button).not.toBeDisabled()
    expect(onError).toHaveBeenCalled()
  })
})
