import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Rating } from "../index"

describe("F0Rating", () => {
  it("renders a tile for each value up to `max`", () => {
    render(<F0Rating max={5} ariaLabel="Rating" />)
    for (const tile of ["1", "2", "3", "4", "5"]) {
      expect(screen.getByText(tile)).toBeInTheDocument()
    }
    expect(screen.queryByText("6")).not.toBeInTheDocument()
  })

  it("marks the selected value", () => {
    render(<F0Rating value={3} ariaLabel="Rating" />)
    expect(screen.getByText("3").closest("button")).toHaveAttribute(
      "data-state",
      "on"
    )
    expect(screen.getByText("2").closest("button")).toHaveAttribute(
      "data-state",
      "off"
    )
  })

  it("calls onChange with the selected value", async () => {
    const onChange = vi.fn()
    render(<F0Rating value={null} onChange={onChange} ariaLabel="Rating" />)
    await userEvent.click(screen.getByText("4"))
    expect(onChange).toHaveBeenCalledWith(4)
  })

  it("clears the value when the active tile is re-selected", async () => {
    const onChange = vi.fn()
    render(<F0Rating value={2} onChange={onChange} ariaLabel="Rating" />)
    await userEvent.click(screen.getByText("2"))
    expect(onChange).toHaveBeenCalledWith(null)
  })

  it("keeps the value when re-selected while `required`", async () => {
    const onChange = vi.fn()
    render(
      <F0Rating value={2} required onChange={onChange} ariaLabel="Rating" />
    )
    await userEvent.click(screen.getByText("2"))
    expect(onChange).not.toHaveBeenCalled()
  })

  it("does not call onChange when disabled", async () => {
    const onChange = vi.fn()
    render(
      <F0Rating value={2} disabled onChange={onChange} ariaLabel="Rating" />
    )
    await userEvent.click(screen.getByText("4"))
    expect(onChange).not.toHaveBeenCalled()
  })

  it("renders a non-interactive image with a localized default label in read-only mode", () => {
    render(<F0Rating value={4} max={5} readOnly />)
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: "Rating: 4 of 5" })
    ).toBeInTheDocument()
  })

  it("uses the empty default label when there is no value", () => {
    render(<F0Rating value={null} max={5} readOnly />)
    expect(
      screen.getByRole("img", { name: "Rating: not rated, out of 5" })
    ).toBeInTheDocument()
  })

  it("prefers an explicit ariaLabel over the default", () => {
    render(<F0Rating value={4} readOnly ariaLabel="Overall score" />)
    expect(
      screen.getByRole("img", { name: "Overall score" })
    ).toBeInTheDocument()
  })
})
