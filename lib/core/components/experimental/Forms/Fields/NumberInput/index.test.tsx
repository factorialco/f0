import { composeStory } from "@storybook/react"
import { userEvent } from "@storybook/test"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { NumberInput } from "./index.tsx"
import Meta, { WithStep } from "./index.stories.tsx"

const WithStepStory = composeStory(WithStep, Meta)

describe("NumberInput", () => {
  test("renders the input", () => {
    render(<NumberInput locale="es-ES" value={123.456} maxDecimals={2} />)
    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("123,46")
  })

  describe("when the value is null", () => {
    test("renders an empty input", () => {
      render(<NumberInput locale="en-US" value={null} />)
      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("")
    })
  })

  describe("when typing a number", () => {
    test("trigger the onChange callback with the number", async () => {
      const onChange = vi.fn()
      render(<NumberInput locale="en-US" maxDecimals={0} onChange={onChange} />)

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "-12.")

      expect(input).toHaveValue("-12")
      expect(onChange).toHaveBeenLastCalledWith(-12)
    })
  })

  describe("with step", () => {
    test("increases and decreases the value", async () => {
      render(<WithStepStory />)

      const input = screen.getByRole("textbox")

      const incrementButton = await screen.getAllByRole("button")[0]
      await userEvent.click(incrementButton)
      expect(input).toHaveValue("2")

      const decrementButton = await screen.getAllByRole("button")[1]
      await userEvent.click(decrementButton)
      expect(input).toHaveValue("1")
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
})
