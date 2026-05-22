import { screen, waitFor } from "@testing-library/react"
import { userEvent } from "storybook/test"
import { describe, expect, test, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0AmountCalculator } from "../F0AmountCalculator"

describe("F0AmountCalculator", () => {
  // ── Inline mode ────────────────────────────────────────────────────────────

  describe("inline mode (no popover prop)", () => {
    test("renders the label", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          onChange={vi.fn()}
        />
      )
      expect(screen.getByText("Discount")).toBeInTheDocument()
    })

    test("renders the input with the supplied value", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          value={25}
          onChange={vi.fn()}
        />
      )
      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("25")
    })

    test("renders empty input when value is null", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          value={null}
          onChange={vi.fn()}
        />
      )
      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("")
    })

    test("calls onChange when user types a number", async () => {
      const onChange = vi.fn()
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          onChange={onChange}
        />
      )
      const input = screen.getByRole("textbox")
      await userEvent.type(input, "42")
      expect(onChange).toHaveBeenLastCalledWith(42)
    })

    test("renders extraContent to the right of the input", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          units="%"
          extraContent="of 300,00 €"
          onChange={vi.fn()}
        />
      )
      expect(screen.getByText("of 300,00 €")).toBeInTheDocument()
    })

    test("renders hint below the input", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          hint="Enter a value between 0 and 100"
          onChange={vi.fn()}
        />
      )
      expect(
        screen.getByText("Enter a value between 0 and 100")
      ).toBeInTheDocument()
    })

    test("renders string error message below the input", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          error="Value must be between 0 and 100"
          onChange={vi.fn()}
        />
      )
      expect(
        screen.getByText("Value must be between 0 and 100")
      ).toBeInTheDocument()
    })

    test("renders status warning message below the input", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          status={{ type: "warning", message: "Value is outside normal range" }}
          onChange={vi.fn()}
        />
      )
      expect(
        screen.getByText("Value is outside normal range")
      ).toBeInTheDocument()
    })

    test("disables the input when disabled prop is set", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          value={25}
          disabled
          onChange={vi.fn()}
        />
      )
      const input = screen.getByRole("textbox")
      expect(input).toBeDisabled()
    })

    test("hoists the label outside the row when extraContent is present", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          units="%"
          extraContent="of 300,00 €"
          inputWidth="160px"
          onChange={vi.fn()}
        />
      )
      // Label and extraContent should both be visible
      expect(screen.getByText("Discount")).toBeInTheDocument()
      expect(screen.getByText("of 300,00 €")).toBeInTheDocument()
    })

    test("renders hint outside the row when extraContent is present", () => {
      render(
        <F0AmountCalculator
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

  // ── Popover mode ───────────────────────────────────────────────────────────

  describe("popover mode (popover prop provided)", () => {
    test("renders a trigger button instead of a visible input", () => {
      render(
        <F0AmountCalculator
          label="Discount"
          locale="en-US"
          popover={{}}
          onChange={vi.fn()}
        />
      )
      // The input should not be visible before the popover opens
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
      // A button should be rendered as the trigger
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("uses the label as the accessible name of the trigger button", () => {
      render(
        <F0AmountCalculator
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
        <F0AmountCalculator
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
        <F0AmountCalculator
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

    test("controlled open state: respects popover.open=false", () => {
      render(
        <F0AmountCalculator
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
        <F0AmountCalculator
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
        <F0AmountCalculator
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
})
