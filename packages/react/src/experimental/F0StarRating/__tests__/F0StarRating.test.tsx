import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0StarRating } from "../index"

/** The interactive/disabled star cells are the aria-hidden wrapper spans. */
const getStars = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>("span[aria-hidden]"))

describe("F0StarRating", () => {
  it("renders `max` stars", () => {
    const { container } = render(<F0StarRating max={5} ariaLabel="Rating" />)
    expect(getStars(container)).toHaveLength(5)
  })

  it("exposes slider semantics when interactive", () => {
    render(<F0StarRating value={3} onChange={vi.fn()} ariaLabel="Rating" />)
    const slider = screen.getByRole("slider", { name: "Rating" })
    expect(slider).toHaveAttribute("aria-valuenow", "3")
    expect(slider).toHaveAttribute("aria-valuemin", "0")
    expect(slider).toHaveAttribute("aria-valuemax", "5")
  })

  it("calls onChange with the clicked value", async () => {
    const onChange = vi.fn()
    const { container } = render(
      <F0StarRating value={null} onChange={onChange} ariaLabel="Rating" />
    )
    await userEvent.click(getStars(container)[3]) // 4th star
    expect(onChange).toHaveBeenCalledWith(4)
  })

  it("clears the value when the active star is re-selected", async () => {
    const onChange = vi.fn()
    const { container } = render(
      <F0StarRating value={2} onChange={onChange} ariaLabel="Rating" />
    )
    await userEvent.click(getStars(container)[1]) // 2nd star
    expect(onChange).toHaveBeenCalledWith(null)
  })

  it("keeps the value when re-selected while `required`", async () => {
    const onChange = vi.fn()
    const { container } = render(
      <F0StarRating value={2} required onChange={onChange} ariaLabel="Rating" />
    )
    await userEvent.click(getStars(container)[1])
    expect(onChange).not.toHaveBeenCalled()
  })

  it("does not call onChange when disabled", async () => {
    const onChange = vi.fn()
    const { container } = render(
      <F0StarRating value={2} disabled onChange={onChange} ariaLabel="Rating" />
    )
    await userEvent.click(getStars(container)[3])
    expect(onChange).not.toHaveBeenCalled()
    expect(screen.queryByRole("slider")).not.toBeInTheDocument()
  })

  it("steps by 0.5 with the keyboard when `allowHalf`", async () => {
    const onChange = vi.fn()
    render(
      <F0StarRating
        value={3}
        allowHalf
        onChange={onChange}
        ariaLabel="Rating"
      />
    )
    screen.getByRole("slider").focus()
    await userEvent.keyboard("{ArrowUp}")
    expect(onChange).toHaveBeenCalledWith(3.5)
  })

  it("clears via the keyboard when stepping below the minimum", async () => {
    const onChange = vi.fn()
    render(
      <F0StarRating
        value={0.5}
        allowHalf
        onChange={onChange}
        ariaLabel="Rating"
      />
    )
    screen.getByRole("slider").focus()
    await userEvent.keyboard("{ArrowDown}")
    expect(onChange).toHaveBeenCalledWith(null)
  })

  it("renders a non-interactive image with a localized label in read-only mode", () => {
    render(<F0StarRating value={4} max={5} readOnly />)
    expect(screen.queryByRole("slider")).not.toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: "Rating: 4 of 5" })
    ).toBeInTheDocument()
  })

  it("uses the empty default label when there is no value", () => {
    render(<F0StarRating value={null} max={5} readOnly />)
    expect(
      screen.getByRole("img", { name: "Rating: not rated, out of 5" })
    ).toBeInTheDocument()
  })

  it("prefers an explicit ariaLabel over the default", () => {
    render(<F0StarRating value={4} readOnly ariaLabel="Overall score" />)
    expect(
      screen.getByRole("img", { name: "Overall score" })
    ).toBeInTheDocument()
  })
})
