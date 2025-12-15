import { zeroRender as render } from "@/testing/test-utils"
import { fireEvent, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { F0Checkbox } from "../F0Checkbox"

describe("F0Checkbox", () => {
  it("renders with custom id", () => {
    render(<F0Checkbox id="custom-id" title="Custom checkbox" />)

    const checkbox = screen.getByRole("checkbox")
    const label = screen.getByText("Custom checkbox")

    expect(checkbox).toHaveAttribute("id", "custom-id")
    expect(label).toHaveAttribute("for", "custom-id")
  })

  it("renders with value attribute", () => {
    render(<F0Checkbox value="checkbox-value" />)

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toHaveAttribute("value", "checkbox-value")
  })

  it("hides label when hideLabel is true", () => {
    render(<F0Checkbox title="Hidden label" hideLabel />)

    const checkbox = screen.getByRole("checkbox")
    const label = screen.queryByText("Hidden label")

    expect(checkbox).toBeInTheDocument()
    expect(label).not.toBeInTheDocument()
    expect(checkbox).toHaveAttribute("aria-label", "Hidden label")
  })

  it("calls onCheckedChange when clicked", async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<F0Checkbox onCheckedChange={onCheckedChange} />)

    const checkbox = screen.getByRole("checkbox")
    await user.click(checkbox)

    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it("does not call onCheckedChange when disabled", async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<F0Checkbox disabled={true} onCheckedChange={onCheckedChange} />)

    const checkbox = screen.getByRole("checkbox")
    await user.click(checkbox)

    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it("can be clicked via label", async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<F0Checkbox title="Click label" onCheckedChange={onCheckedChange} />)

    const label = screen.getByText("Click label")
    await user.click(label)

    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it("sets tabIndex to -1 when presentational", () => {
    render(<F0Checkbox presentational={true} />)

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toHaveAttribute("tabindex", "-1")
  })

  it("does not set tabIndex when not presentational", () => {
    render(<F0Checkbox presentational={false} />)

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).not.toHaveAttribute("tabindex")
  })

  it("stops event propagation when stopPropagation is true", () => {
    const parentClickHandler = vi.fn()

    render(
      <div onClick={parentClickHandler}>
        <F0Checkbox stopPropagation={true} />
      </div>
    )

    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    expect(parentClickHandler).not.toHaveBeenCalled()
  })

  it("allows event propagation when stopPropagation is false", () => {
    const parentClickHandler = vi.fn()

    render(
      <div onClick={parentClickHandler}>
        <F0Checkbox stopPropagation={false} />
      </div>
    )

    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    expect(parentClickHandler).toHaveBeenCalled()
  })

  it("forwards data attributes", () => {
    render(<F0Checkbox data-testid="custom-checkbox" data-custom="value" />)

    const checkbox = screen.getByTestId("custom-checkbox")
    expect(checkbox).toHaveAttribute("data-custom", "value")
  })

  it("maintains accessibility attributes", () => {
    render(
      <F0Checkbox title="Accessible checkbox" id="accessible-id" checked={true} disabled={false} />
    )

    const checkbox = screen.getByRole("checkbox")

    expect(checkbox).toHaveAttribute("aria-label", "Accessible checkbox")
    expect(checkbox).toHaveAttribute("id", "accessible-id")
    expect(checkbox).toBeChecked()
    expect(checkbox).not.toBeDisabled()
  })

  it("generates unique id when not provided", () => {
    render(
      <>
        <F0Checkbox title="First checkbox" />
        <F0Checkbox title="Second checkbox" />
      </>
    )

    const checkboxes = screen.getAllByRole("checkbox")
    const firstId = checkboxes[0].getAttribute("id")
    const secondId = checkboxes[1].getAttribute("id")

    expect(firstId).toBeTruthy()
    expect(secondId).toBeTruthy()
    expect(firstId).not.toBe(secondId)
  })
})
