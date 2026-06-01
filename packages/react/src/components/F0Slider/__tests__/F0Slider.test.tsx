import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Slider } from "../index"

describe("F0Slider", () => {
  it("renders the visible label", () => {
    render(<F0Slider label="Duration" min={0} max={10} />)
    expect(screen.getByText("Duration")).toBeInTheDocument()
  })

  it("hides the visible label but keeps it as accessible name when hideLabel is true", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        hideLabel
        ariaLabel="Duration"
      />
    )
    expect(screen.queryByText("Duration")).not.toBeInTheDocument()
    expect(screen.getByRole("slider")).toHaveAttribute("aria-label", "Duration")
  })

  it("uses defaultValue when uncontrolled", () => {
    render(<F0Slider label="Duration" min={0} max={10} defaultValue={4} />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "4")
  })

  it("falls back to min when no value or defaultValue is provided", () => {
    render(<F0Slider label="Duration" min={2} max={10} />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "2")
  })

  it("exposes min and max via aria attributes", () => {
    render(<F0Slider label="Duration" min={3} max={10} defaultValue={5} />)
    const slider = screen.getByRole("slider")
    expect(slider).toHaveAttribute("aria-valuemin", "3")
    expect(slider).toHaveAttribute("aria-valuemax", "10")
  })

  it("calls onChange with a number when value changes via keyboard", async () => {
    const onChange = vi.fn()
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        defaultValue={5}
        onChange={onChange}
      />
    )
    const slider = screen.getByRole("slider")
    slider.focus()
    await userEvent.keyboard("{ArrowRight}")
    expect(onChange).toHaveBeenCalledWith(6)
  })

  it("respects step when incrementing via keyboard", async () => {
    const onChange = vi.fn()
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={100}
        step={5}
        defaultValue={50}
        onChange={onChange}
      />
    )
    const slider = screen.getByRole("slider")
    slider.focus()
    await userEvent.keyboard("{ArrowRight}")
    expect(onChange).toHaveBeenCalledWith(55)
  })

  it("does not move beyond max", async () => {
    const onChange = vi.fn()
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        defaultValue={10}
        onChange={onChange}
      />
    )
    const slider = screen.getByRole("slider")
    slider.focus()
    await userEvent.keyboard("{ArrowRight}")
    expect(onChange).not.toHaveBeenCalled()
    expect(slider).toHaveAttribute("aria-valuenow", "10")
  })

  it("does not move below min", async () => {
    const onChange = vi.fn()
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        defaultValue={0}
        onChange={onChange}
      />
    )
    const slider = screen.getByRole("slider")
    slider.focus()
    await userEvent.keyboard("{ArrowLeft}")
    expect(onChange).not.toHaveBeenCalled()
    expect(slider).toHaveAttribute("aria-valuenow", "0")
  })

  it("behaves as controlled when value is provided", async () => {
    const onChange = vi.fn()
    const Controlled = () => {
      const [value, setValue] = useState(5)
      return (
        <F0Slider
          label="Duration"
          min={0}
          max={10}
          value={value}
          onChange={(next) => {
            onChange(next)
            setValue(next)
          }}
        />
      )
    }
    render(<Controlled />)
    const slider = screen.getByRole("slider")
    slider.focus()
    await userEvent.keyboard("{ArrowRight}")
    expect(onChange).toHaveBeenCalledWith(6)
    expect(slider).toHaveAttribute("aria-valuenow", "6")
  })

  it("ignores keyboard input when disabled", async () => {
    const onChange = vi.fn()
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        defaultValue={5}
        disabled
        onChange={onChange}
      />
    )
    const slider = screen.getByRole("slider")
    slider.focus()
    await userEvent.keyboard("{ArrowRight}")
    expect(onChange).not.toHaveBeenCalled()
  })

  it("renders the minLabel and maxLabel when provided", () => {
    render(
      <F0Slider
        label="Duration"
        min={3}
        max={10}
        minLabel="3min"
        maxLabel="10min"
      />
    )
    expect(screen.getByText("3min")).toBeInTheDocument()
    expect(screen.getByText("10min")).toBeInTheDocument()
  })

  it("does not render the range labels row when neither minLabel nor maxLabel is provided", () => {
    render(<F0Slider label="Duration" min={0} max={10} />)
    expect(screen.queryByTestId("slider-range-labels")).not.toBeInTheDocument()
  })

  it("shows the formatted tooltip value when showTooltip is always", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        defaultValue={5}
        showTooltip="always"
        formatValue={(v) => `${v} min`}
      />
    )
    expect(screen.getByRole("tooltip")).toHaveTextContent("5 min")
  })

  it("does not render any tooltip when showTooltip is never", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        defaultValue={5}
        showTooltip="never"
      />
    )
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("renders the hint message under the slider", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        hint="Based on the information you provide"
      />
    )
    expect(
      screen.getByText("Based on the information you provide")
    ).toBeInTheDocument()
  })

  it("renders the error message when status is error", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        status={{ type: "error", message: "Out of range" }}
      />
    )
    expect(screen.getByText("Out of range")).toBeInTheDocument()
  })

  it("renders the skeleton variant", () => {
    render(<F0Slider.Skeleton />)
    expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0)
  })
})
