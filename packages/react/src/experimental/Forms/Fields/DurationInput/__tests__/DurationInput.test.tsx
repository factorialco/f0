import { screen } from "@testing-library/react"
import { useState } from "react"
import { describe, expect, test, vi } from "vitest"

import { userEvent, zeroRender as render } from "@/testing/test-utils"

import { DurationInput } from "../index"

describe("DurationInput", () => {
  test("renders hours and minutes from a minutes value", () => {
    render(<DurationInput label="Duration" value={125} />)

    expect(screen.getByRole("textbox", { name: "Duration hours" })).toHaveValue(
      "2"
    )
    expect(
      screen.getByRole("textbox", { name: "Duration minutes" })
    ).toHaveValue("5")
  })

  test("normalizes minute overflow and emits total minutes", async () => {
    const onChange = vi.fn()

    const ControlledDurationInput = () => {
      const [value, setValue] = useState<number | null>(null)

      return (
        <DurationInput
          label="Duration"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue)
            onChange(nextValue)
          }}
        />
      )
    }

    render(<ControlledDurationInput />)

    const minutesInput = screen.getByRole("textbox", {
      name: "Duration minutes",
    })

    await userEvent.type(minutesInput, "65")

    expect(onChange).toHaveBeenLastCalledWith(65)
    expect(screen.getByRole("textbox", { name: "Duration hours" })).toHaveValue(
      "1"
    )
    expect(
      screen.getByRole("textbox", { name: "Duration minutes" })
    ).toHaveValue("5")
  })

  test("emits null when both fields are cleared", async () => {
    const onChange = vi.fn()

    const ControlledDurationInput = () => {
      const [value, setValue] = useState<number | null>(125)

      return (
        <DurationInput
          label="Duration"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue)
            onChange(nextValue)
          }}
        />
      )
    }

    render(<ControlledDurationInput />)

    const hoursInput = screen.getByRole("textbox", { name: "Duration hours" })
    const minutesInput = screen.getByRole("textbox", {
      name: "Duration minutes",
    })

    await userEvent.clear(hoursInput)
    await userEvent.clear(minutesInput)

    expect(onChange).toHaveBeenLastCalledWith(null)
    expect(hoursInput).toHaveValue("")
    expect(minutesInput).toHaveValue("")
  })

  test("syncs local inputs when controlled value changes externally", async () => {
    const ControlledDurationInput = () => {
      const [value, setValue] = useState<number | null>(10)

      return (
        <>
          <button type="button" onClick={() => setValue(135)}>
            Set duration
          </button>
          <DurationInput label="Duration" value={value} onChange={setValue} />
        </>
      )
    }

    render(<ControlledDurationInput />)

    await userEvent.click(screen.getByRole("button", { name: "Set duration" }))

    expect(screen.getByRole("textbox", { name: "Duration hours" })).toHaveValue(
      "2"
    )
    expect(
      screen.getByRole("textbox", { name: "Duration minutes" })
    ).toHaveValue("15")
  })

  test("supports uncontrolled usage without resetting typed values", async () => {
    render(<DurationInput label="Duration" />)

    const minutesInput = screen.getByRole("textbox", {
      name: "Duration minutes",
    })

    await userEvent.type(minutesInput, "65")

    expect(screen.getByRole("textbox", { name: "Duration hours" })).toHaveValue(
      "1"
    )
    expect(minutesInput).toHaveValue("5")
  })
})
