import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0NpsWidget } from "../index"

const defaultProps = {
  title: "How likely are you to recommend Factorial?",
  open: true,
  onClose: vi.fn(),
  onSubmit: vi.fn(),
}

describe("F0NpsWidget", () => {
  it("renders the title", () => {
    render(<F0NpsWidget {...defaultProps} />)
    expect(
      screen.getByText("How likely are you to recommend Factorial?")
    ).toBeInTheDocument()
  })

  it("renders nothing when open is false", () => {
    render(<F0NpsWidget {...defaultProps} open={false} />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("renders the 1–10 scoring buttons", () => {
    render(<F0NpsWidget {...defaultProps} />)
    for (let i = 1; i <= 10; i++) {
      expect(
        screen.getByRole("button", { name: String(i) })
      ).toBeInTheDocument()
    }
  })

  it("shows the next button after selecting a score", async () => {
    render(<F0NpsWidget {...defaultProps} />)
    await userEvent.click(screen.getByRole("button", { name: "8" }))
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument()
  })

  it("advances to feedback step after clicking next", async () => {
    render(<F0NpsWidget {...defaultProps} />)
    await userEvent.click(screen.getByRole("button", { name: "8" }))
    await userEvent.click(screen.getByRole("button", { name: "Next" }))
    expect(await screen.findByRole("textbox")).toBeInTheDocument()
  })

  it("calls onClose when close button is clicked", async () => {
    const onClose = vi.fn()
    render(<F0NpsWidget {...defaultProps} onClose={onClose} />)
    await userEvent.click(screen.getByRole("button", { name: "Close" }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it("calls onSubmit with score and feedback", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined)
    render(<F0NpsWidget {...defaultProps} onSubmit={onSubmit} />)

    await userEvent.click(screen.getByRole("button", { name: "9" }))
    await userEvent.click(screen.getByRole("button", { name: "Next" }))
    await userEvent.type(await screen.findByRole("textbox"), "Great product")
    await userEvent.click(screen.getByRole("button", { name: "Submit" }))

    expect(onSubmit).toHaveBeenCalledWith(9, "Great product")
  })
})
