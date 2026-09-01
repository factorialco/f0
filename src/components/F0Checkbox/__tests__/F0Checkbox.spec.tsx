import { fireEvent, render } from "@testing-library/react-native"
import React from "react"

import { F0Checkbox } from "../F0Checkbox"

describe("F0Checkbox", () => {
  describe("Snapshots", () => {
    it("renders unchecked", () => {
      const { toJSON } = render(<F0Checkbox label="Option" />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("renders checked", () => {
      const { toJSON } = render(<F0Checkbox label="Option" checked />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("renders indeterminate", () => {
      const { toJSON } = render(<F0Checkbox label="Option" indeterminate />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("renders disabled", () => {
      const { toJSON } = render(<F0Checkbox label="Option" disabled />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("renders with hideLabel", () => {
      const { toJSON } = render(
        <F0Checkbox label="Hidden label" checked hideLabel />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Interaction", () => {
    it("calls onValueChange with true when unchecked and pressed", () => {
      const onValueChange = jest.fn()
      const { getByRole } = render(
        <F0Checkbox
          label="Option"
          checked={false}
          onValueChange={onValueChange}
        />
      )
      fireEvent.press(getByRole("checkbox"))
      expect(onValueChange).toHaveBeenCalledWith(true)
    })

    it("calls onValueChange with false when checked and pressed", () => {
      const onValueChange = jest.fn()
      const { getByRole } = render(
        <F0Checkbox label="Option" checked onValueChange={onValueChange} />
      )
      fireEvent.press(getByRole("checkbox"))
      expect(onValueChange).toHaveBeenCalledWith(false)
    })

    it("does not call onValueChange when disabled", () => {
      const onValueChange = jest.fn()
      const { getByRole } = render(
        <F0Checkbox label="Option" disabled onValueChange={onValueChange} />
      )
      fireEvent.press(getByRole("checkbox"))
      expect(onValueChange).not.toHaveBeenCalled()
    })
  })

  describe("Accessibility", () => {
    it("has accessibilityRole checkbox", () => {
      const { getByRole } = render(<F0Checkbox label="Option" />)
      expect(getByRole("checkbox")).toBeTruthy()
    })

    it("exposes accessibilityLabel", () => {
      const { getByLabelText } = render(<F0Checkbox label="Accept terms" />)
      expect(getByLabelText("Accept terms")).toBeTruthy()
    })

    it("sets accessibilityState.checked correctly", () => {
      const { getByRole, rerender } = render(
        <F0Checkbox label="Option" checked={false} />
      )
      expect(getByRole("checkbox").props.accessibilityState?.checked).toBe(
        false
      )

      rerender(<F0Checkbox label="Option" checked />)
      expect(getByRole("checkbox").props.accessibilityState?.checked).toBe(true)
    })

    it("sets accessibilityState.checked to mixed when indeterminate", () => {
      const { getByRole } = render(<F0Checkbox label="Option" indeterminate />)
      expect(getByRole("checkbox").props.accessibilityState?.checked).toBe(
        "mixed"
      )
    })

    it("sets accessibilityState.disabled when disabled", () => {
      const { getByRole } = render(<F0Checkbox label="Option" disabled />)
      expect(getByRole("checkbox").props.accessibilityState?.disabled).toBe(
        true
      )
    })
  })
})
