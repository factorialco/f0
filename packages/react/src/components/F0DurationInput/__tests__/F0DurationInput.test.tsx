import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"
import { fireEvent } from "@testing-library/react"
import { useState } from "react"

import { F0DurationInput } from ".."
import {
  fieldsToSeconds,
  secondsToFields,
  secondsToVisibleFields,
} from "../utils"

describe("secondsToFields", () => {
  it("converts 0 seconds", () => {
    expect(secondsToFields(0)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it("converts seconds only", () => {
    expect(secondsToFields(45)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 45,
    })
  })

  it("converts minutes and seconds", () => {
    expect(secondsToFields(150)).toEqual({
      days: 0,
      hours: 0,
      minutes: 2,
      seconds: 30,
    })
  })

  it("converts exact hours", () => {
    expect(secondsToFields(7200)).toEqual({
      days: 0,
      hours: 2,
      minutes: 0,
      seconds: 0,
    })
  })

  it("converts hours, minutes, and seconds", () => {
    expect(secondsToFields(3661)).toEqual({
      days: 0,
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
  })

  it("converts days", () => {
    expect(secondsToFields(90061)).toEqual({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
  })

  it("converts exact days", () => {
    expect(secondsToFields(172800)).toEqual({
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it("normalizes negative values to zero", () => {
    expect(secondsToFields(-100)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it("floors fractional seconds", () => {
    expect(secondsToFields(3661.7)).toEqual({
      days: 0,
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
  })

  it("normalizes NaN to zero", () => {
    expect(secondsToFields(NaN)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it("normalizes Infinity to zero", () => {
    expect(secondsToFields(Infinity)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})

describe("secondsToVisibleFields", () => {
  it("rolls hours into minutes when only minutes visible", () => {
    expect(secondsToVisibleFields(7200, ["minutes"])).toEqual({
      days: 0,
      hours: 0,
      minutes: 120,
      seconds: 0,
    })
  })

  it("rolls days and hours into hours when only hours visible", () => {
    expect(secondsToVisibleFields(90000, ["hours"])).toEqual({
      days: 0,
      hours: 25,
      minutes: 0,
      seconds: 0,
    })
  })

  it("drops sub-unit remainder for hidden finer units", () => {
    expect(secondsToVisibleFields(7261, ["hours"])).toEqual({
      days: 0,
      hours: 2,
      minutes: 0,
      seconds: 0,
    })
  })

  it("decomposes normally when all units visible", () => {
    expect(
      secondsToVisibleFields(90061, ["days", "hours", "minutes", "seconds"])
    ).toEqual({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
  })
})

describe("fieldsToSeconds", () => {
  it("converts days only", () => {
    expect(fieldsToSeconds({ days: 2, hours: 0, minutes: 0, seconds: 0 })).toBe(
      172800
    )
  })

  it("converts hours only", () => {
    expect(fieldsToSeconds({ days: 0, hours: 3, minutes: 0, seconds: 0 })).toBe(
      10800
    )
  })

  it("converts all fields", () => {
    expect(fieldsToSeconds({ days: 1, hours: 1, minutes: 1, seconds: 1 })).toBe(
      90061
    )
  })

  it("handles zero values", () => {
    expect(fieldsToSeconds({ days: 0, hours: 0, minutes: 0, seconds: 0 })).toBe(
      0
    )
  })

  it("normalizes non-finite, fractional, and negative inputs", () => {
    expect(
      fieldsToSeconds({
        days: NaN,
        hours: 1.9,
        minutes: -10,
        seconds: Infinity,
      })
    ).toBe(3600)
  })
})

describe("F0DurationInput", () => {
  describe("rendering", () => {
    it("renders hours and minutes segments by default", () => {
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)

      expect(screen.getByLabelText("Hours")).toBeInTheDocument()
      expect(screen.getByLabelText("Minutes")).toBeInTheDocument()
    })

    it("renders all four units", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          units={["days", "hours", "minutes", "seconds"]}
        />
      )

      expect(screen.getByLabelText("Days")).toBeInTheDocument()
      expect(screen.getByLabelText("Hours")).toBeInTheDocument()
      expect(screen.getByLabelText("Minutes")).toBeInTheDocument()
      expect(screen.getByLabelText("Seconds")).toBeInTheDocument()
    })

    it("renders only the specified units", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          units={["days", "hours"]}
        />
      )

      expect(screen.getByLabelText("Days")).toBeInTheDocument()
      expect(screen.getByLabelText("Hours")).toBeInTheDocument()
      expect(screen.queryByLabelText("Minutes")).not.toBeInTheDocument()
    })

    it("renders the label", () => {
      render(
        <F0DurationInput label="Minimum hours" value={0} onChange={() => {}} />
      )

      expect(screen.getByText("Minimum hours")).toBeInTheDocument()
    })

    it("hides the label when hideLabel is true", () => {
      render(
        <F0DurationInput
          label="Hidden"
          value={0}
          onChange={() => {}}
          hideLabel
        />
      )

      expect(screen.queryByText("Hidden")).not.toBeInTheDocument()
    })

    it("renders custom suffixes", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          fields={{
            hours: { suffix: "hrs" },
            minutes: { suffix: "mins" },
          }}
        />
      )

      expect(screen.getByText("hrs")).toBeInTheDocument()
      expect(screen.getByText("mins")).toBeInTheDocument()
    })

    it("displays correct field values from total seconds", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={90061}
          onChange={() => {}}
          units={["days", "hours", "minutes", "seconds"]}
        />
      )

      expect(screen.getByLabelText("Days")).toHaveValue("1")
      expect(screen.getByLabelText("Hours")).toHaveValue("1")
      expect(screen.getByLabelText("Minutes")).toHaveValue("1")
      expect(screen.getByLabelText("Seconds")).toHaveValue("1")
    })

    it("renders empty inputs with placeholder when value is 0", () => {
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)

      const hours = screen.getByLabelText("Hours")
      const minutes = screen.getByLabelText("Minutes")

      expect(hours).toHaveValue("")
      expect(hours).toHaveAttribute("placeholder", "0")
      expect(minutes).toHaveValue("")
      expect(minutes).toHaveAttribute("placeholder", "0")
    })

    it("uses 1ch width for single-digit values", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          units={["days", "seconds"]}
        />
      )

      expect(screen.getByLabelText("Days")).toHaveStyle({ width: "1ch" })
      expect(screen.getByLabelText("Seconds")).toHaveStyle({ width: "1ch" })
    })

    it("caps width at 2ch for values with more than two digits", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={17280000}
          onChange={() => {}}
          units={["days"]}
        />
      )

      expect(screen.getByLabelText("Days")).toHaveValue("200")
      expect(screen.getByLabelText("Days")).toHaveStyle({ width: "2ch" })
    })

    it("uses maxVisibleDigits override from field config", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={172800000}
          onChange={() => {}}
          units={["days"]}
          fields={{ days: { maxVisibleDigits: 4 } }}
        />
      )

      expect(screen.getByLabelText("Days")).toHaveValue("2000")
      expect(screen.getByLabelText("Days")).toHaveStyle({ width: "4ch" })
    })

    it("normalizes invalid maxVisibleDigits to at least 1", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={1728000}
          onChange={() => {}}
          units={["days"]}
          fields={{ days: { maxVisibleDigits: 0 } }}
        />
      )

      expect(screen.getByLabelText("Days")).toHaveStyle({ width: "1ch" })
    })

    it("does not set maxLength on segment inputs", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={90061}
          onChange={() => {}}
          units={["days", "hours", "minutes", "seconds"]}
        />
      )

      expect(screen.getByLabelText("Days")).not.toHaveAttribute("maxLength")
      expect(screen.getByLabelText("Hours")).not.toHaveAttribute("maxLength")
      expect(screen.getByLabelText("Minutes")).not.toHaveAttribute("maxLength")
      expect(screen.getByLabelText("Seconds")).not.toHaveAttribute("maxLength")
    })

    it("renders with disabled state", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          disabled
        />
      )

      const container = screen.getByRole("group", { name: "Duration" })
      expect(container).toHaveAttribute("data-disabled", "")
      expect(container).toHaveAttribute("aria-disabled", "true")
      expect(container).toHaveClass("bg-f1-background-tertiary")
      expect(container).not.toHaveClass("opacity-50")
    })

    it("omits data-disabled when not disabled", () => {
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)

      const container = screen.getByRole("group", { name: "Duration" })
      expect(container).not.toHaveAttribute("data-disabled")
    })

    it("uses custom ariaLabel from fields config", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          fields={{
            hours: { ariaLabel: "Horas" },
            minutes: { ariaLabel: "Minutos" },
          }}
        />
      )

      expect(screen.getByLabelText("Horas")).toBeInTheDocument()
      expect(screen.getByLabelText("Minutos")).toBeInTheDocument()
    })

    it("renders error status with message", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          status={{ type: "error", message: "Too long" }}
        />
      )

      const container = screen.getByRole("group")
      expect(container).toHaveAttribute("data-status", "error")
      expect(screen.getByText("Too long")).toBeInTheDocument()
    })

    it("renders warning status with message", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          status={{ type: "warning", message: "Almost full" }}
        />
      )

      expect(screen.getByText("Almost full")).toBeInTheDocument()
    })

    it("renders info status with message", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          status={{ type: "info", message: "Max 8h per day" }}
        />
      )

      expect(screen.getByText("Max 8h per day")).toBeInTheDocument()
    })

    it("renders required asterisk", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={() => {}}
          required
        />
      )

      expect(screen.getByText("*")).toBeInTheDocument()
    })

    it("renders as a group with accessible label", () => {
      render(
        <F0DurationInput label="Working time" value={0} onChange={() => {}} />
      )

      expect(
        screen.getByRole("group", { name: "Working time" })
      ).toBeInTheDocument()
    })

    it("exposes input wrapper test id for form error navigation animation", () => {
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)

      expect(screen.getByTestId("input-field-wrapper")).toBeInTheDocument()
    })

    it("forwards aria-describedby and aria-invalid to all segment inputs", () => {
      render(
        <F0DurationInput
          id="duration-control"
          aria-describedby="duration-help duration-error"
          aria-invalid
          label="Duration"
          value={0}
          onChange={() => {}}
        />
      )

      const group = screen.getByRole("group", { name: "Duration" })
      expect(group).toHaveAttribute("id", "duration-control")
      expect(group).toHaveAttribute(
        "aria-describedby",
        "duration-help duration-error"
      )
      expect(group).toHaveAttribute("aria-invalid", "true")

      expect(screen.getByLabelText("Hours")).toHaveAttribute(
        "aria-describedby",
        "duration-help duration-error"
      )
      expect(screen.getByLabelText("Hours")).toHaveAttribute(
        "aria-invalid",
        "true"
      )
      expect(screen.getByLabelText("Minutes")).toHaveAttribute(
        "aria-describedby",
        "duration-help duration-error"
      )
      expect(screen.getByLabelText("Minutes")).toHaveAttribute(
        "aria-invalid",
        "true"
      )
    })

    it("links label to first input via htmlFor", () => {
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)

      const label = screen.getByText("Duration")
      const htmlFor = label.closest("label")?.getAttribute("for")
      expect(htmlFor).toBeTruthy()
      const input = screen.getByLabelText("Hours")
      expect(input.id).toBe(htmlFor)
    })

    it("hides the label when label is an empty string and warns once", () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
      const { container, rerender } = render(
        <F0DurationInput label="" value={0} onChange={() => {}} />
      )

      expect(screen.getByRole("group")).toBeInTheDocument()
      expect(container.querySelector("label")).toBeNull()
      expect(warnSpy).toHaveBeenCalledTimes(1)
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining("provide a non-empty label or ariaLabel")
      )

      rerender(<F0DurationInput label="" value={60} onChange={() => {}} />)
      expect(warnSpy).toHaveBeenCalledTimes(1)

      warnSpy.mockRestore()
    })

    it("omits aria-label when label is empty", () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
      render(<F0DurationInput label="" value={0} onChange={() => {}} />)

      const group = screen.getByRole("group")
      expect(group).not.toHaveAttribute("aria-label")
      warnSpy.mockRestore()
    })

    it("uses ariaLabel prop as the group accessible name", () => {
      render(
        <F0DurationInput
          label=""
          ariaLabel="Duration field"
          hideLabel
          value={0}
          onChange={() => {}}
        />
      )

      expect(
        screen.getByRole("group", { name: "Duration field" })
      ).toBeInTheDocument()
    })

    it("keeps readonly inputs focusable but non-editable", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={3600}
          onChange={() => {}}
          readonly
        />
      )

      const hours = screen.getByLabelText("Hours")
      expect(hours).not.toBeDisabled()
      expect(hours).toHaveAttribute("readonly")
    })
  })

  describe("interaction", () => {
    it("calls onChange with updated seconds when hours change", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput label="Duration" value={1800} onChange={onChange} />
      )

      fireEvent.change(screen.getByLabelText("Hours"), {
        target: { value: "2" },
      })

      expect(onChange).toHaveBeenLastCalledWith(9000)
    })

    it("calls onChange with updated seconds when minutes change", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput label="Duration" value={7200} onChange={onChange} />
      )

      fireEvent.change(screen.getByLabelText("Minutes"), {
        target: { value: "45" },
      })

      expect(onChange).toHaveBeenLastCalledWith(9900)
    })

    it("preserves other fields when one changes", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={90061}
          onChange={onChange}
          units={["days", "hours", "minutes", "seconds"]}
        />
      )

      fireEvent.change(screen.getByLabelText("Hours"), {
        target: { value: "5" },
      })

      expect(onChange).toHaveBeenLastCalledWith(104461)
    })

    it("calls onChange with 0 when the only field is cleared", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={3600}
          onChange={onChange}
          units={["hours"]}
        />
      )

      fireEvent.change(screen.getByLabelText("Hours"), {
        target: { value: "" },
      })

      expect(onChange).toHaveBeenLastCalledWith(0)
    })

    it("strips non-numeric characters from input", () => {
      const onChange = vi.fn()
      render(<F0DurationInput label="Duration" value={0} onChange={onChange} />)

      fireEvent.change(screen.getByLabelText("Hours"), {
        target: { value: "5abc" },
      })

      expect(onChange).toHaveBeenLastCalledWith(18000)
    })

    it("focuses first input on container click", async () => {
      const user = userEvent.setup()
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)

      const container = screen.getByRole("group")
      await user.click(container)

      expect(screen.getByLabelText("Hours")).toHaveFocus()
    })

    it("rolls minutes into hours on blur when hours unit is visible", () => {
      const onChange = vi.fn()
      const onBlur = vi.fn()

      function ControlledDurationInput() {
        const [value, setValue] = useState(0)
        return (
          <F0DurationInput
            label="Duration"
            value={value}
            onChange={(nextValue) => {
              onChange(nextValue)
              setValue(nextValue)
            }}
            onBlur={onBlur}
          />
        )
      }

      render(<ControlledDurationInput />)

      const hours = screen.getByLabelText("Hours")
      const minutes = screen.getByLabelText("Minutes")

      fireEvent.change(minutes, {
        target: { value: "75" },
      })

      expect(onChange).toHaveBeenLastCalledWith(4500)
      expect(hours).toHaveValue("")
      expect(minutes).toHaveValue("75")

      fireEvent.blur(minutes)

      expect(onBlur).toHaveBeenCalledTimes(1)
      expect(hours).toHaveValue("1")
      expect(minutes).toHaveValue("15")
    })

    it("rolls seconds into minutes when minutes unit is visible", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={onChange}
          units={["minutes", "seconds"]}
        />
      )

      fireEvent.change(screen.getByLabelText("Seconds"), {
        target: { value: "99" },
      })

      expect(onChange).toHaveBeenLastCalledWith(99)
    })

    it("rolls hours into days when days unit is visible", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={onChange}
          units={["days", "hours"]}
        />
      )

      fireEvent.change(screen.getByLabelText("Hours"), {
        target: { value: "30" },
      })

      expect(onChange).toHaveBeenLastCalledWith(108000)
    })

    it("does not clamp minutes when hours unit is not visible", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={onChange}
          units={["minutes"]}
        />
      )

      fireEvent.change(screen.getByLabelText("Minutes"), {
        target: { value: "120" },
      })

      expect(onChange).toHaveBeenLastCalledWith(7200)
    })

    it("accepts more than two digits", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={onChange}
          units={["days"]}
        />
      )

      fireEvent.change(screen.getByLabelText("Days"), {
        target: { value: "200" },
      })

      expect(onChange).toHaveBeenLastCalledWith(17280000)
    })

    it("rolls minutes into days when days and minutes are visible", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={onChange}
          units={["days", "minutes"]}
        />
      )

      fireEvent.change(screen.getByLabelText("Minutes"), {
        target: { value: "2000" },
      })

      expect(onChange).toHaveBeenLastCalledWith(120000)
    })

    it("respects explicit field max when provided", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={0}
          onChange={onChange}
          fields={{ minutes: { max: 59 } }}
        />
      )

      fireEvent.change(screen.getByLabelText("Minutes"), {
        target: { value: "75" },
      })

      expect(onChange).toHaveBeenLastCalledWith(3540)
    })

    it("rolls hidden units into visible ones on render", () => {
      render(
        <F0DurationInput
          label="Duration"
          value={7200}
          onChange={() => {}}
          units={["minutes"]}
        />
      )

      expect(screen.getByLabelText("Minutes")).toHaveValue("120")
    })

    it("does not preserve hidden unit remainder on change", () => {
      const onChange = vi.fn()
      render(
        <F0DurationInput
          label="Duration"
          value={3661}
          onChange={onChange}
          units={["hours"]}
        />
      )

      expect(screen.getByLabelText("Hours")).toHaveValue("1")

      fireEvent.change(screen.getByLabelText("Hours"), {
        target: { value: "2" },
      })

      expect(onChange).toHaveBeenLastCalledWith(7200)
    })

    it("blocks printable non-digit keys", () => {
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)
      const hours = screen.getByLabelText("Hours")

      expect(fireEvent.keyDown(hours, { key: "a" })).toBe(false)
    })

    it("allows digits and non-printable keys", () => {
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)
      const hours = screen.getByLabelText("Hours")

      expect(fireEvent.keyDown(hours, { key: "5" })).toBe(true)
      expect(fireEvent.keyDown(hours, { key: "Enter" })).toBe(true)
      expect(fireEvent.keyDown(hours, { key: "ArrowUp" })).toBe(true)
      expect(fireEvent.keyDown(hours, { key: "PageDown" })).toBe(true)
    })

    it("allows printable keys when modifiers are pressed", () => {
      render(<F0DurationInput label="Duration" value={0} onChange={() => {}} />)
      const hours = screen.getByLabelText("Hours")

      expect(fireEvent.keyDown(hours, { key: "v", ctrlKey: true })).toBe(true)
      expect(fireEvent.keyDown(hours, { key: "c", metaKey: true })).toBe(true)
      expect(fireEvent.keyDown(hours, { key: "x", altKey: true })).toBe(true)
    })
  })
})
