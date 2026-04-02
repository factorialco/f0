import { render, screen, userEvent } from "@testing-library/react-native"
import React from "react"

import { F0Chip } from ".."
import { AppIcons } from "../../../icons"

describe("F0Chip", () => {
  const defaultProps = {
    label: "Label",
  }

  it("matches the default snapshot", () => {
    const { toJSON } = render(<F0Chip {...defaultProps} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it("matches the selected avatar closeable snapshot", () => {
    const { toJSON } = render(
      <F0Chip
        {...defaultProps}
        variant="selected"
        onClose={() => {}}
        avatar={{
          type: "team",
          name: "People",
          "aria-label": "People avatar",
        }}
      />
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it("matches the selected leading icon snapshot", () => {
    const { toJSON } = render(
      <F0Chip
        {...defaultProps}
        variant="selected"
        icon={AppIcons.Placeholder}
      />
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it("renders the visible label", () => {
    render(<F0Chip {...defaultProps} />)

    expect(screen.getByText("Label")).toBeDefined()
  })

  it("renders the avatar when provided", () => {
    render(
      <F0Chip
        label="Alex Taylor"
        avatar={{
          type: "person",
          firstName: "Alex",
          lastName: "Taylor",
          "aria-label": "Alex Taylor avatar",
        }}
      />
    )

    expect(screen.getByLabelText("Alex Taylor avatar")).toBeDefined()
  })

  it("reduces the label emphasis when deactivated", () => {
    render(<F0Chip label="Deactivated" deactivated />)

    expect(screen.getByText("Deactivated").props.className).toContain(
      "opacity-60"
    )
  })

  it("calls onPress when the interactive root is pressed", async () => {
    const handlePress = jest.fn()
    const user = userEvent.setup()

    render(<F0Chip {...defaultProps} onPress={handlePress} />)

    await user.press(screen.getByLabelText("Label"))

    expect(handlePress).toHaveBeenCalledTimes(1)
  })

  it("calls onClose without bubbling to onPress", async () => {
    const handlePress = jest.fn()
    const handleClose = jest.fn()
    const user = userEvent.setup()

    render(
      <F0Chip
        {...defaultProps}
        onPress={handlePress}
        onClose={handleClose}
        icon={AppIcons.Placeholder}
      />
    )

    await user.press(screen.getByLabelText("Close"))

    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(handlePress).not.toHaveBeenCalled()
  })

  it("exposes selected accessibility state on interactive chips", () => {
    render(<F0Chip {...defaultProps} variant="selected" onPress={() => {}} />)

    expect(
      screen.getByLabelText("Label").props.accessibilityState
    ).toMatchObject({
      selected: true,
    })
  })
})
