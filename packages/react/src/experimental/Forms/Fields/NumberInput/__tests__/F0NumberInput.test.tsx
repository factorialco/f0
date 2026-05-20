import { composeStory } from "@storybook/react-vite"
import { screen, waitFor } from "@testing-library/react"
import { userEvent } from "storybook/test"
import { describe, expect, test, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import Meta, { WithStep } from "../__stories__/F0NumberInput.stories"
import { F0NumberInput } from "../index"

const WithStepStory = composeStory(WithStep, Meta)

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
})
