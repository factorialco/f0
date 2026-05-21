import { screen, zeroRender as render } from "@/testing/test-utils"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { F0AmountCalculator } from "../F0AmountCalculator"

const defaultProps = { locale: "de-DE" }

describe("F0AmountCalculator", () => {
  it("renders input", () => {
    render(<F0AmountCalculator {...defaultProps} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("renders units via appendTag", () => {
    render(<F0AmountCalculator {...defaultProps} units="%" />)
    expect(screen.getByText("%")).toBeInTheDocument()
  })

  it("renders custom units", () => {
    render(<F0AmountCalculator {...defaultProps} units="€" />)
    expect(screen.getByText("€")).toBeInTheDocument()
  })

  it("displays value", () => {
    render(<F0AmountCalculator {...defaultProps} value={15} />)
    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("15")
  })

  it("calls onChange when input changes", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<F0AmountCalculator {...defaultProps} onChange={onChange} />)

    const input = screen.getByRole("textbox")
    await user.type(input, "10")

    expect(onChange).toHaveBeenLastCalledWith(10)
  })

  it("calls onChange with null when input is cleared", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <F0AmountCalculator {...defaultProps} value={10} onChange={onChange} />
    )

    const input = screen.getByRole("textbox")
    await user.clear(input)

    expect(onChange).toHaveBeenLastCalledWith(null)
  })

  it("renders base amount with currency when provided", () => {
    render(
      <F0AmountCalculator {...defaultProps} baseAmount={300} currency="€" />
    )
    expect(screen.getByText(/of 300,00 €/)).toBeInTheDocument()
  })

  it("does not render base amount when not provided", () => {
    render(<F0AmountCalculator {...defaultProps} />)
    expect(screen.queryByText(/of/)).not.toBeInTheDocument()
  })

  it("is disabled when disabled prop is true", () => {
    render(<F0AmountCalculator {...defaultProps} disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it("uses label as aria-label (visually hidden)", () => {
    render(<F0AmountCalculator {...defaultProps} label="Percentage input" />)
    expect(screen.getByLabelText("Percentage input")).toBeInTheDocument()
  })
})
