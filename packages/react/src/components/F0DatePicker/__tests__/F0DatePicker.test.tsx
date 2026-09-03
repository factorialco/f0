import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { fireEvent, screen, zeroRender as render } from "@/testing/test-utils"

import { F0DatePicker } from "../F0DatePicker"
import { predefinedPresets } from "../presets"
import { DatePickerValue } from "../types"

const mockDate = new Date(2025, 6, 30)

const dayValue: DatePickerValue = {
  value: { from: new Date(2025, 6, 30), to: new Date(2025, 6, 30) },
  granularity: "day",
}

const getInput = () => screen.getByRole("textbox") as HTMLInputElement

const getWrapper = () => screen.getByTestId("input-field-wrapper")

const setupUser = () =>
  userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

describe("F0DatePicker", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    vi.setSystemTime(mockDate)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("typing a date", () => {
    it("commits the typed value on blur and calls onChange with the value and its string", async () => {
      const user = setupUser()
      const onChange = vi.fn()
      render(<F0DatePicker label="Date" onChange={onChange} />)

      const input = getInput()
      await user.click(input)
      await user.type(input, "15/07/2025")
      fireEvent.blur(input)

      expect(onChange).toHaveBeenCalledTimes(1)
      const [value, stringValue] = onChange.mock.calls[0]
      expect(value.granularity).toBe("day")
      expect(value.value.from).toEqual(new Date(2025, 6, 15, 0, 0, 0, 0))
      expect(stringValue).toBe("15/07/2025")
    })

    it("commits the typed value on Enter", async () => {
      const user = setupUser()
      const onChange = vi.fn()
      render(<F0DatePicker label="Date" onChange={onChange} />)

      const input = getInput()
      await user.click(input)
      await user.type(input, "15/07/2025{Enter}")

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange.mock.calls[0][0].value.from).toEqual(
        new Date(2025, 6, 15, 0, 0, 0, 0)
      )
    })

    it("sets the error state and does not call onChange for an out-of-range date", async () => {
      const user = setupUser()
      const onChange = vi.fn()
      render(
        <F0DatePicker
          label="Date"
          onChange={onChange}
          minDate={new Date(2025, 6, 1)}
        />
      )

      const input = getInput()
      await user.click(input)
      await user.type(input, "15/06/2025{Enter}")

      expect(onChange).not.toHaveBeenCalled()
      expect(getWrapper().className).toContain("border-f1-border-critical-bold")
    })
  })

  describe("granularity normalization", () => {
    it("normalizes a day value to the month granularity range in the displayed value", () => {
      const onChange = vi.fn()
      render(
        <F0DatePicker
          label="Date"
          onChange={onChange}
          granularities={["month"]}
          value={{
            value: { from: new Date(2025, 6, 15, 10, 30) },
            granularity: "month",
          }}
        />
      )

      expect(getInput().value).toBe("July 2025")
      // A controlled value never emits onChange
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  describe("clearing", () => {
    it("calls onChange with undefined when the clear button is clicked and does not re-fire on a later blur", async () => {
      const user = setupUser()
      const onChange = vi.fn()
      render(
        <F0DatePicker
          label="Date"
          onChange={onChange}
          clearable
          value={dayValue}
        />
      )

      await user.click(screen.getByTestId("clear-button"))

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange.mock.calls[0][0]).toBeUndefined()

      // Blurring the now-empty input resolves to the same undefined value
      fireEvent.blur(getInput())
      expect(onChange).toHaveBeenCalledTimes(1)
    })

    it("puts a required field into the error state when cleared", async () => {
      const user = setupUser()
      render(
        <F0DatePicker
          label="Date"
          onChange={vi.fn()}
          clearable
          required
          value={dayValue}
        />
      )

      await user.click(screen.getByTestId("clear-button"))

      expect(getWrapper().className).toContain("border-f1-border-critical-bold")
    })
  })

  describe("presets", () => {
    it("filters out presets whose granularity is not available", async () => {
      render(
        <F0DatePicker
          label="Date"
          onChange={vi.fn()}
          open
          granularities={["day"]}
          presets={[predefinedPresets.lastQuarter, predefinedPresets.today]}
        />
      )

      // The popup portals to document.body, so assertions go through `screen`
      expect((await screen.findAllByText("Today")).length).toBeGreaterThan(0)
      expect(screen.queryByText("Last quarter")).not.toBeInTheDocument()
    })
  })

  describe("onOpenChange", () => {
    it("calls the consumer's onOpenChange(true) when the input is focused", () => {
      const onOpenChange = vi.fn()
      render(
        <F0DatePicker
          label="Date"
          onChange={vi.fn()}
          onOpenChange={onOpenChange}
        />
      )

      fireEvent.focus(getInput())

      expect(onOpenChange).toHaveBeenCalledWith(true)
    })
  })

  describe("granularities", () => {
    it("uses the first granularity as the default (month placeholder)", () => {
      render(
        <F0DatePicker
          label="Date"
          onChange={vi.fn()}
          granularities={["month"]}
        />
      )

      // The placeholder renders as an overlay div with a title attribute
      expect(screen.getByTitle("mm/yyyy")).toBeInTheDocument()
    })

    it("defaults to the day granularity when none is provided", () => {
      render(<F0DatePicker label="Date" onChange={vi.fn()} />)

      expect(screen.getByTitle("dd/mm/yyyy")).toBeInTheDocument()
    })

    it("throws when rendered with an unknown granularity", () => {
      const consoleError = vi
        .spyOn(console, "error")
        .mockImplementation(() => {})

      expect(() =>
        render(
          <F0DatePicker
            label="Date"
            onChange={vi.fn()}
            granularities={[
              "bogus" as unknown as NonNullable<
                Parameters<typeof F0DatePicker>[0]["granularities"]
              >[number],
            ]}
          />
        )
      ).toThrow()

      consoleError.mockRestore()
    })
  })

  describe("displayFormat", () => {
    it("renders the long format by default", () => {
      render(<F0DatePicker label="Date" onChange={vi.fn()} value={dayValue} />)

      expect(getInput().value).toBe("30 Jul 2025")
    })

    it("renders dd/MM/yyyy with displayFormat='default'", () => {
      render(
        <F0DatePicker
          label="Date"
          onChange={vi.fn()}
          value={dayValue}
          displayFormat="default"
        />
      )

      expect(getInput().value).toBe("30/07/2025")
    })
  })

  describe("showIcon", () => {
    it("shows the calendar icon by default", () => {
      const { container } = render(
        <F0DatePicker label="Date" onChange={vi.fn()} />
      )

      expect(container.querySelector('[data-slot="icon"]')).not.toBeNull()
    })

    it("drops the calendar icon with showIcon={false}", () => {
      const { container } = render(
        <F0DatePicker label="Date" onChange={vi.fn()} showIcon={false} />
      )

      expect(container.querySelector('[data-slot="icon"]')).toBeNull()
    })
  })
})
