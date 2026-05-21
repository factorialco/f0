import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { F0AmountCalculator } from "../F0AmountCalculator"

describe("F0AmountCalculator", () => {
  it("renders with placeholder", () => {
    render(<F0AmountCalculator placeholder="0,0" />)
    expect(screen.getByPlaceholderText("0,0")).toBeInTheDocument()
  })

  it("renders units label", () => {
    render(<F0AmountCalculator units="%" />)
    expect(screen.getByText("%")).toBeInTheDocument()
  })

  it("renders custom units", () => {
    render(<F0AmountCalculator units="€" />)
    expect(screen.getByText("€")).toBeInTheDocument()
  })

  it("displays formatted value with comma", () => {
    render(<F0AmountCalculator value={15} />)
    expect(screen.getByDisplayValue("15,0")).toBeInTheDocument()
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
    expect(screen.getByText(/of/)).toBeInTheDocument()
    expect(screen.getByText(/€/)).toBeInTheDocument()
  })

  it("does not render base amount context when baseAmount is not provided", () => {
    render(<F0AmountCalculator />)
    expect(screen.queryByText(/of/)).not.toBeInTheDocument()
  })

  it("is disabled when disabled prop is true", () => {
    render(<F0AmountCalculator disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })
})
