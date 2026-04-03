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
    expect(cell.className).toContain(
      "shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]"
    )
    expect(cell.className).toContain("bg-f1-background-critical")
    expect(cell.className).toContain("relative")
    expect(cell.className).toContain("z-[1]")
  })

  it("does not apply error styling when no error", () => {
    const { container } = render(
      <BaseCell>
        <span>Cell content</span>
      </BaseCell>
    )

    const cell = container.firstChild as HTMLElement
    expect(cell.className).not.toContain("bg-f1-background-critical")
    expect(cell.className).not.toContain(
      "shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]"
    )
  })

  it("shows error tooltip on hover", async () => {
    const user = userEvent.setup()

    render(
      <BaseCell error="Invalid value">
        <span>Cell content</span>
      </BaseCell>
    )

    // Hover the tooltip trigger wrapper, not the inner content
    const triggerWrapper =
      screen
        .getByText("Cell content")
        .closest("[data-radix-collection-item]") ??
      screen.getByText("Cell content").parentElement!
    await user.hover(triggerWrapper)

    // Tooltip should appear after delay
    const tooltip = await screen.findByRole("tooltip", {}, { timeout: 1000 })
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

  it("has focus-within styling classes for child focus", () => {
    const { container } = render(
      <BaseCell>
        <button>Click me</button>
      </BaseCell>
    )

    const cell = container.firstChild as HTMLElement
    expect(cell.className).toContain("focus-within:bg-f1-background")
    expect(cell.className).toContain(
      "focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]"
    )
    expect(cell.className).toContain("focus-within:relative")
    expect(cell.className).toContain("focus-within:z-[1]")
    expect(cell.className).toContain("focus-within:border-r-0")
  })

  it("applies active styling when isActive is true", () => {
    const { container } = render(
      <BaseCell isActive>
        <button>Click me</button>
      </BaseCell>
    )

    const cell = container.firstChild as HTMLElement
    expect(cell.className).toContain(
      "shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]"
    )
    expect(cell.className).toContain("relative z-[1] border-r-0")
    expect(cell.className).not.toContain("focus-within:")
  })

  it("does not have focus-within styling when error is present", () => {
    const { container } = render(
      <BaseCell error="Something went wrong">
        <button>Click me</button>
      </BaseCell>
    )

    const cell = container.firstChild as HTMLElement
    expect(cell.className).not.toContain("focus-within:bg-f1-background")
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
