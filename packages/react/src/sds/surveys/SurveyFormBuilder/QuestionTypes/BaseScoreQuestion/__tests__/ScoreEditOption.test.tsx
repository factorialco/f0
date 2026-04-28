import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ScoreEditOption } from "../ScoreEditOption"

describe("ScoreEditOption", () => {
  const defaultProps = {
    option: { value: 1, label: "😠" },
    selected: false,
    onClick: vi.fn(),
    onChangeLabel: vi.fn(),
    isEmojiMode: true,
    disabled: false,
  }

  it("opens emoji picker when clicked in emoji mode", async () => {
    const user = userEvent.setup()

    render(<ScoreEditOption {...defaultProps} />)

    const button = screen.getByRole("button")
    await user.click(button)

    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("does not open emoji picker when disabled", async () => {
    const user = userEvent.setup()

    render(<ScoreEditOption {...defaultProps} disabled />)

    const button = screen.getByRole("button")
    await user.click(button)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    const { container } = render(
      <ScoreEditOption {...defaultProps} onClick={onClick} disabled />
    )

    const wrapper = container.firstElementChild as HTMLElement
    await user.click(wrapper)

    expect(onClick).not.toHaveBeenCalled()
  })

  it("calls onClick when not disabled", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    const { container } = render(
      <ScoreEditOption
        {...defaultProps}
        onClick={onClick}
        isEmojiMode={false}
      />
    )

    const wrapper = container.firstElementChild as HTMLElement
    await user.click(wrapper)

    expect(onClick).toHaveBeenCalledWith(1)
  })
})
