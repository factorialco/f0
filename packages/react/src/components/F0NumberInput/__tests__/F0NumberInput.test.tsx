import { composeStory } from "@storybook/react-vite"
import { screen, waitFor } from "@testing-library/react"
import { ComponentProps, useState } from "react"
import { userEvent } from "storybook/test"
import { describe, expect, test, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import Meta, { WithStep } from "../__stories__/F0NumberInput.stories"
import { F0NumberInput } from "../index"

const WithStepStory = composeStory(WithStep, Meta)

/**
 * Mirrors how consumers wire the input — including the EditableTable cells,
 * where every keystroke round-trips through the parent's state.
 */
function ControlledNumberInput({
  initialValue = null,
  ...props
}: Omit<ComponentProps<typeof F0NumberInput>, "value" | "onChange"> & {
  initialValue?: number | null
}) {
  const [value, setValue] = useState<number | null>(initialValue)
  return <F0NumberInput {...props} value={value} onChange={setValue} />
}

describe("F0NumberInput", () => {
  test("renders the input", () => {
    render(
      <F0NumberInput
        locale="es-ES"
        value={123.456}
        maxDecimals={2}
        label="Number Input"
      />
    )
    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("123,46")
  })

  describe("when the value is null", () => {
    test("renders an empty input", () => {
      render(<F0NumberInput locale="en-US" value={null} label="Number Input" />)
      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("")
    })
  })

  describe("when typing a number", () => {
    test("trigger the onChange callback with the number", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          locale="en-US"
          maxDecimals={0}
          onChange={onChange}
          label="Number Input"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "-34")

      expect(input).toHaveValue("-34")
      expect(onChange).toHaveBeenLastCalledWith(-34)
    })
  })

  describe("input filtering (integer mode, maxDecimals=0)", () => {
    test("onChange strips decimal values in integer mode", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          locale="en-US"
          maxDecimals={0}
          onChange={onChange}
          label="Number Input"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "34.5")

      // In integer mode, decimals are stripped
      expect(onChange).toHaveBeenCalledWith(34)
    })
  })

  describe("input filtering (decimal mode)", () => {
    test("allows decimal values with dot separator", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          locale="en-US"
          maxDecimals={2}
          onChange={onChange}
          label="Number Input"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "34.5")

      expect(input).toHaveValue("34.5")
      expect(onChange).toHaveBeenLastCalledWith(34.5)
    })

    test("limits decimals to maxDecimals", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          locale="en-US"
          maxDecimals={2}
          onChange={onChange}
          label="Number Input"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "34.567")

      expect(onChange).toHaveBeenLastCalledWith(34.56)
    })
  })

  describe("with step", () => {
    test("increases and decreases the value", async () => {
      render(<WithStepStory />)

      const input = screen.getByRole("textbox")

      const incrementButton = await screen.getAllByRole("button")[0]
      await userEvent.click(incrementButton)
      await waitFor(() => expect(input).toHaveValue("2"))

      const decrementButton = await screen.getAllByRole("button")[1]
      await userEvent.click(decrementButton)
      await waitFor(() => expect(input).toHaveValue("1"))
    })

    test("does not increase the value above the max", async () => {
      render(<WithStepStory value={5} />)

      const input = screen.getByRole("textbox")
      const incrementButton = screen.getAllByRole("button")[0]
      await userEvent.click(incrementButton)

      expect(input).toHaveValue("5")
    })

    test("does not decrease the value below the min", async () => {
      render(<WithStepStory value={1} />)

      const input = screen.getByRole("textbox")
      const decrementButton = screen.getAllByRole("button")[1]
      await userEvent.click(decrementButton)

      expect(input).toHaveValue("1")
    })
  })

  describe("inline extraContent mode", () => {
    test("renders extraContent to the right of the input", () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          units="%"
          extraContent="of 300,00 €"
          onChange={vi.fn()}
        />
      )
      expect(screen.getByText("of 300,00 €")).toBeInTheDocument()
    })

    test("hoists the label outside the row when extraContent is present", () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          units="%"
          extraContent="of 300,00 €"
          inputWidth="160px"
          onChange={vi.fn()}
        />
      )
      expect(screen.getByText("Discount")).toBeInTheDocument()
      expect(screen.getByText("of 300,00 €")).toBeInTheDocument()
    })

    test("renders hint outside the row when extraContent is present", () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          units="%"
          extraContent="of 300,00 €"
          hint="Enter a percentage"
          onChange={vi.fn()}
        />
      )
      expect(screen.getByText("Enter a percentage")).toBeInTheDocument()
    })
  })

  describe("popover mode", () => {
    test("renders a trigger button instead of a visible input", () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          popover={{}}
          onChange={vi.fn()}
        />
      )
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("uses the label as the accessible name of the trigger button", () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          popover={{}}
          onChange={vi.fn()}
        />
      )
      expect(
        screen.getByRole("button", { name: "Discount" })
      ).toBeInTheDocument()
    })

    test("opens the popover and shows the input when trigger is clicked", async () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          units="%"
          popover={{}}
          onChange={vi.fn()}
        />
      )
      const trigger = screen.getByRole("button", { name: "Discount" })
      await userEvent.click(trigger)

      await waitFor(() => {
        expect(screen.getByRole("textbox")).toBeInTheDocument()
      })
    })

    test("calls onChange when user types inside the popover input", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          units="%"
          popover={{}}
          onChange={onChange}
        />
      )
      const trigger = screen.getByRole("button", { name: "Discount" })
      await userEvent.click(trigger)

      const input = await screen.findByRole("textbox")
      await userEvent.type(input, "50")

      expect(onChange).toHaveBeenLastCalledWith(50)
    })

    test("deferred commit mode calls onChange only when Apply is clicked", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          units="%"
          popover={{ commitMode: "deferred" }}
          onChange={onChange}
        />
      )

      const trigger = screen.getByRole("button", { name: "Discount" })
      await userEvent.click(trigger)

      const input = await screen.findByRole("textbox")
      await userEvent.type(input, "50")

      expect(onChange).not.toHaveBeenCalled()

      await userEvent.click(screen.getByRole("button", { name: "Apply" }))

      expect(onChange).toHaveBeenLastCalledWith(50)
      await waitFor(() => {
        expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
      })
    })

    test("deferred commit mode keeps popover open when closeOnApply is false", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          units="%"
          popover={{ commitMode: "deferred", apply: { closeOnApply: false } }}
          onChange={onChange}
        />
      )

      const trigger = screen.getByRole("button", { name: "Discount" })
      await userEvent.click(trigger)

      const input = await screen.findByRole("textbox")
      await userEvent.type(input, "50")

      await userEvent.click(screen.getByRole("button", { name: "Apply" }))

      expect(onChange).toHaveBeenLastCalledWith(50)
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })

    test("does not open popover when disabled", async () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          popover={{}}
          disabled
          onChange={vi.fn()}
        />
      )

      const trigger = screen.getByRole("button", { name: "Discount" })
      expect(trigger).toBeDisabled()

      await userEvent.click(trigger)

      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    test("shows status message in popover mode and hides NumberInput duplicate", async () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          popover={{}}
          status={{ type: "warning", message: "Value is outside normal range" }}
          onChange={vi.fn()}
        />
      )

      const trigger = screen.getByRole("button", { name: "Discount" })
      await userEvent.click(trigger)

      await waitFor(() => {
        expect(
          screen.getByText("Value is outside normal range")
        ).toBeInTheDocument()
      })

      expect(screen.getAllByText("Value is outside normal range")).toHaveLength(
        1
      )
    })

    test("controlled open state: respects popover.open=false", () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          popover={{ open: false, onOpenChange: vi.fn() }}
          onChange={vi.fn()}
        />
      )
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    test("controlled open state: respects popover.open=true", async () => {
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          popover={{ open: true, onOpenChange: vi.fn() }}
          onChange={vi.fn()}
        />
      )
      await waitFor(() => {
        expect(screen.getByRole("textbox")).toBeInTheDocument()
      })
    })

    test("calls onOpenChange when trigger is clicked", async () => {
      const onOpenChange = vi.fn()
      render(
        <F0NumberInput
          label="Discount"
          locale="en-US"
          popover={{ open: false, onOpenChange }}
          onChange={vi.fn()}
        />
      )
      const trigger = screen.getByRole("button", { name: "Discount" })
      await userEvent.click(trigger)
      expect(onOpenChange).toHaveBeenCalledWith(true)
    })
  })

  describe("trailing decimal separator preservation", () => {
    test("preserves trailing dot while typing", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          locale="en-US"
          maxDecimals={2}
          onChange={onChange}
          label="Number Input"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "17.")

      expect(input).toHaveValue("17.")
      expect(onChange).toHaveBeenLastCalledWith(17)
    })

    test("preserves trailing comma while typing", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          locale="es-ES"
          maxDecimals={2}
          onChange={onChange}
          label="Number Input"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "17,")

      expect(input).toHaveValue("17,")
      expect(onChange).toHaveBeenLastCalledWith(17)
    })
  })

  describe("grouping", () => {
    test("groups the resting display and drops the separators for editing", async () => {
      render(
        <F0NumberInput
          locale="en-US"
          value={50000}
          maxDecimals={0}
          grouping
          label="Salary"
        />
      )

      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("50,000")

      await userEvent.click(input)
      expect(input).toHaveValue("50000")

      await userEvent.tab()
      expect(input).toHaveValue("50,000")
    })

    test("keeps the decimals the user typed when grouping on blur", async () => {
      render(
        <ControlledNumberInput
          locale="en-US"
          maxDecimals={2}
          grouping
          label="Salary"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "50000.50")
      expect(input).toHaveValue("50000.50")

      await userEvent.tab()
      // Not "50,000.5" — re-formatting the parsed number would drop the
      // trailing zero the user typed.
      expect(input).toHaveValue("50,000.50")
    })

    test("shows every decimal of the value, not just Intl's default three", () => {
      render(
        <F0NumberInput locale="en-US" value={1.23456} grouping label="Rate" />
      )

      expect(screen.getByRole("textbox")).toHaveValue("1.23456")
    })

    test("reads a typed group separator as grouping, not as a decimal", async () => {
      render(
        <ControlledNumberInput
          locale="en-US"
          maxDecimals={2}
          grouping
          label="Salary"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "50,000")

      expect(input).toHaveValue("50000")

      await userEvent.tab()
      expect(input).toHaveValue("50,000")
    })

    test("follows the locale's convention for each separator", async () => {
      render(
        <ControlledNumberInput
          locale="es-ES"
          maxDecimals={2}
          grouping
          label="Salary"
        />
      )

      const input = screen.getByRole("textbox")
      // In es-ES the dot groups and the comma separates decimals — the
      // opposite of en-US, and what the resting display formats with.
      await userEvent.type(input, "5.000,54")
      expect(input).toHaveValue("5000,54")

      await userEvent.tab()
      expect(input).toHaveValue("5.000,54")
    })

    test("accepts a grouped value pasted into the field", async () => {
      render(
        <ControlledNumberInput
          locale="en-US"
          maxDecimals={2}
          grouping
          label="Salary"
        />
      )

      const input = screen.getByRole("textbox")
      await userEvent.click(input)
      await userEvent.paste("1,234,567.8")

      expect(input).toHaveValue("1234567.8")

      await userEvent.tab()
      expect(input).toHaveValue("1,234,567.8")
    })

    test("allows the group separator in integer mode", async () => {
      const onChange = vi.fn()
      render(
        <F0NumberInput
          locale="en-US"
          maxDecimals={0}
          grouping
          onChange={onChange}
          label="Headcount"
        />
      )

      const input = screen.getByRole("textbox")
      // Grouping carries no decimals, so the separator stays typeable even
      // where a decimal separator is rejected.
      await userEvent.type(input, "1,500")

      expect(input).toHaveValue("1500")
      expect(onChange).toHaveBeenLastCalledWith(1500)
    })

    test("reaches the decimal separator from either key when neither groups", async () => {
      render(
        <ControlledNumberInput locale="fr-FR" maxDecimals={2} label="Rate" />
      )

      const input = screen.getByRole("textbox")
      // fr-FR groups with a space, so a numeric keypad dot still starts the
      // decimals — and reads back as the comma fr-FR formats them with.
      await userEvent.type(input, "1234.5")

      expect(input).toHaveValue("1234,5")
    })
  })
})
