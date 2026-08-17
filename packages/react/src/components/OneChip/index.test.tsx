import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { Chip } from "./index"

describe("Chip", () => {
  it("keeps chip and close actions separate and preserves the close name", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    const onClose = vi.fn()

    render(
      <Chip
        label="Department: Engineering"
        onClick={onClick}
        onClose={onClose}
      />
    )

    const chipAction = screen.getByRole("button", {
      name: "Department: Engineering",
    })
    const closeAction = screen.getByRole("button", {
      name: "Close",
      description: "Department: Engineering",
    })

    expect(chipAction.parentElement).toBe(closeAction.parentElement)
    expect(chipAction).not.toContainElement(closeAction)

    await user.click(closeAction)
    expect(onClose).toHaveBeenCalledOnce()
    expect(onClick).not.toHaveBeenCalled()

    await user.click(chipAction)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("does not render a close action when the chip is not removable", () => {
    render(<Chip label="Department: Engineering" />)

    expect(
      screen.queryByRole("button", { name: "Close" })
    ).not.toBeInTheDocument()
  })
})
