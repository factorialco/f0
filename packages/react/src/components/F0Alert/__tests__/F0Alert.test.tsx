import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Alert } from "../F0Alert"

describe("F0Alert", () => {
  it("does not render a close button when onClose is not provided", () => {
    render(
      <F0Alert
        variant="info"
        title="Info title"
        description="Info description"
      />
    )

    expect(
      screen.queryByRole("button", { name: /close/i })
    ).not.toBeInTheDocument()
  })

  it("renders a close button when onClose is provided", () => {
    render(
      <F0Alert
        variant="info"
        title="Info title"
        description="Info description"
        onClose={vi.fn()}
      />
    )

    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument()
  })

  it("calls onClose when the close button is clicked", async () => {
    const handleClose = vi.fn()

    render(
      <F0Alert
        variant="info"
        title="Info title"
        description="Info description"
        onClose={handleClose}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: /close/i }))

    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
