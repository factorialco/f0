import "@testing-library/jest-dom/vitest"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "../../../../../../testing/test-utils"
import { BaseCell } from "../components/cells/BaseCell"

describe("BaseCell", () => {
  it("renders children", () => {
    render(
      <BaseCell>
        <span>Cell content</span>
      </BaseCell>
    )

    expect(screen.getByText("Cell content")).toBeInTheDocument()
  })

  it("applies error styling when error is provided", () => {
    const { container } = render(
      <BaseCell error="Something went wrong">
        <span>Cell content</span>
      </BaseCell>
    )

    const cell = container.firstChild as HTMLElement
    expect(cell).toHaveStyle({
      outline: "1px solid hsl(var(--critical-50))",
      outlineOffset: "-0.5px",
    })
    expect(cell.className).toContain("bg-f1-background-critical")
  })

  it("does not apply error styling when no error", () => {
    const { container } = render(
      <BaseCell>
        <span>Cell content</span>
      </BaseCell>
    )

    const cell = container.firstChild as HTMLElement
    expect(cell.className).not.toContain("bg-f1-background-critical")
    expect(cell.style.outline).toBe("")
    expect(cell.style.outlineOffset).toBe("")
  })

  it("shows error tooltip on hover", async () => {
    const user = userEvent.setup()

    render(
      <BaseCell error="Invalid value">
        <span>Cell content</span>
      </BaseCell>
    )

    const cellContent = screen.getByText("Cell content")
    await user.hover(cellContent)

    // Tooltip should appear after delay
    const tooltip = await screen.findByRole("tooltip", {}, { timeout: 500 })
    expect(tooltip).toHaveTextContent("Invalid value")
  })

  it("hides right border when showRightBorder is false", () => {
    const { container } = render(
      <BaseCell showRightBorder={false}>
        <span>Cell content</span>
      </BaseCell>
    )

    const cell = container.firstChild as HTMLElement
    expect(cell.className).toContain("border-r-0")
  })

  it("applies readonly background when readonly", () => {
    const { container } = render(
      <BaseCell readonly>
        <span>Cell content</span>
      </BaseCell>
    )

    const cell = container.firstChild as HTMLElement
    expect(cell.className).toContain("bg-f1-background-secondary")
  })
})
