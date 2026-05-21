import { screen, zeroRender as render } from "@/testing/test-utils"
import { fireEvent } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { F0AmountCalculator } from "../F0AmountCalculator"

describe("F0AmountCalculator", () => {
  it("renders input", () => {
    render(<F0AmountCalculator />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("renders units via appendTag", () => {
    render(<F0AmountCalculator units="%" />)
    expect(screen.getByText("%")).toBeInTheDocument()
  })

  it("renders custom units", () => {
    render(<F0AmountCalculator units="€" />)
    expect(screen.getByText("€")).toBeInTheDocument()
  })

  it("displays value", () => {
    render(<F0AmountCalculator value={15} />)
    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("15")
  })

  it("calls onChange when input changes", () => {
    const onChange = vi.fn()
    render(<F0AmountCalculator onChange={onChange} />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "10" } })

    expect(onChange).toHaveBeenCalledWith(10)
  })

  it("calls onChange with null when input is cleared", () => {
    const onChange = vi.fn()
    render(<F0AmountCalculator value={10} onChange={onChange} />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "" } })

    expect(onChange).toHaveBeenCalledWith(null)
  })

  it("renders base amount with currency when provided", () => {
    render(<F0AmountCalculator baseAmount={300} currency="€" />)
    expect(screen.getByText(/of 300,00 €/)).toBeInTheDocument()
  })

  it("does not render base amount when not provided", () => {
    render(<F0AmountCalculator />)
    expect(screen.queryByText(/of/)).not.toBeInTheDocument()
  })

  it("is disabled when disabled prop is true", () => {
    render(<F0AmountCalculator disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it("uses label as aria-label (visually hidden)", () => {
    render(<F0AmountCalculator label="Percentage input" />)
    expect(screen.getByLabelText("Percentage input")).toBeInTheDocument()
  })
})
