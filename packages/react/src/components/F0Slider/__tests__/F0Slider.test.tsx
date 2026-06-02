import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

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

  it("calls onValueCommit with the committed value on a keyboard step", async () => {
    const onChange = vi.fn()
    const onValueCommit = vi.fn()
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        defaultValue={5}
        onChange={onChange}
        onValueCommit={onValueCommit}
      />
    )
    const slider = screen.getByRole("slider")
    slider.focus()
    await userEvent.keyboard("{ArrowRight}")
    expect(onValueCommit).toHaveBeenCalledTimes(1)
    expect(onValueCommit).toHaveBeenCalledWith(6)
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

  it("warns when neither label nor ariaLabel is provided", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    render(<F0Slider label="" min={0} max={10} />)
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("provide a non-empty `label` or `ariaLabel`")
    )
    warn.mockRestore()
  })

  it("treats a whitespace-only label as empty (warns, renders no visible label)", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    render(<F0Slider label="   " min={0} max={10} />)
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("provide a non-empty `label` or `ariaLabel`")
    )
    expect(screen.queryByText("   ")).not.toBeInTheDocument()
    warn.mockRestore()
  })

  it("exposes the formatted value to assistive tech via aria-valuetext", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        defaultValue={5}
        formatValue={(v) => `${v} min`}
      />
    )
    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuetext",
      "5 min"
    )
  })

  it("sets aria-required on the thumb when required", () => {
    render(<F0Slider label="Duration" min={0} max={10} required />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-required", "true")
  })

  it("renders the status message inside a polite live region", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        status={{ type: "error", message: "Out of range" }}
      />
    )
    const liveRegion = screen.getByRole("status")
    expect(liveRegion).toHaveAttribute("aria-live", "polite")
    expect(liveRegion).toHaveTextContent("Out of range")
  })

  it("renders warning and info status messages", () => {
    const { rerender } = render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        status={{ type: "warning", message: "Close to the maximum" }}
      />
    )
    expect(screen.getByText("Close to the maximum")).toBeInTheDocument()

    rerender(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        status={{ type: "info", message: "Within normal range" }}
      />
    )
    expect(screen.getByText("Within normal range")).toBeInTheDocument()
  })

  it("shows the tooltip on hover and hides it on leave when showTooltip is onHover", async () => {
    render(<F0Slider label="Duration" min={0} max={10} defaultValue={5} />)
    const root = screen
      .getByRole("slider")
      .closest(".touch-none") as HTMLElement

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    fireEvent.mouseEnter(root)
    expect(screen.getByRole("tooltip")).toBeInTheDocument()
    fireEvent.mouseLeave(root)
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    )
  })

  it("dismisses the tooltip on pointer up after a drag", async () => {
    render(<F0Slider label="Duration" min={0} max={10} defaultValue={5} />)
    const root = screen
      .getByRole("slider")
      .closest(".touch-none") as HTMLElement

    fireEvent.pointerDown(root)
    expect(screen.getByRole("tooltip")).toBeInTheDocument()
    fireEvent.pointerUp(root)
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    )
  })

  it("does not leave the tooltip stuck when a drag moves focus to the thumb", async () => {
    render(<F0Slider label="Duration" min={0} max={10} defaultValue={5} />)
    const slider = screen.getByRole("slider")
    const root = slider.closest(".touch-none") as HTMLElement

    fireEvent.pointerDown(root)
    fireEvent.focus(slider)
    expect(screen.getByRole("tooltip")).toBeInTheDocument()
    fireEvent.pointerUp(root)
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    )
  })

  it("treats focus after a pointer-down on the label as pointer focus (no stuck tooltip)", () => {
    render(<F0Slider label="Duration" min={0} max={10} defaultValue={5} />)
    const slider = screen.getByRole("slider")

    fireEvent.pointerDown(screen.getByText("Duration"))
    fireEvent.focus(slider)
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("shows the tooltip on keyboard focus and hides it on blur", async () => {
    render(<F0Slider label="Duration" min={0} max={10} defaultValue={5} />)
    const slider = screen.getByRole("slider")

    fireEvent.focus(slider)
    expect(screen.getByRole("tooltip")).toBeInTheDocument()
    fireEvent.blur(slider)
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    )
  })

  it("clamps the tooltip position when the value exceeds max", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={100}
        value={150}
        showTooltip="always"
      />
    )
    const tooltip = screen.getByRole("tooltip")
    expect(tooltip.style.left).toBe("calc(100% + -10px)")
  })

  it("names the thumb via the visible label using aria-labelledby", () => {
    render(<F0Slider label="Duration" min={0} max={10} />)
    const slider = screen.getByRole("slider")
    expect(slider).not.toHaveAttribute("aria-label")
    const labelledBy = slider.getAttribute("aria-labelledby")
    expect(labelledBy).toBeTruthy()
    expect(document.getElementById(labelledBy as string)).toHaveTextContent(
      "Duration"
    )
  })

  it("prioritizes the status message over the hint when both are provided", () => {
    render(
      <F0Slider
        label="Duration"
        min={0}
        max={10}
        hint="Helper text"
        status={{ type: "error", message: "Out of range" }}
      />
    )
    expect(screen.getByText("Out of range")).toBeInTheDocument()
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument()
  })
})
