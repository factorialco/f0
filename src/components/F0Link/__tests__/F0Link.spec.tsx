import { fireEvent, render, screen } from "@testing-library/react-native"
import React from "react"
import { Linking } from "react-native"

import { F0Link, F0_LINK_SIZES, F0_LINK_VARIANTS } from "../"

describe("F0Link", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Snapshot - all variants", () => {
    F0_LINK_VARIANTS.forEach((variant) => {
      const { toJSON } = render(<F0Link variant={variant}>Link</F0Link>)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - all sizes", () => {
    F0_LINK_SIZES.forEach((size) => {
      const { toJSON } = render(<F0Link size={size}>Link</F0Link>)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - disabled", () => {
    const { toJSON } = render(<F0Link disabled>Link</F0Link>)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - target blank (recommended external path)", () => {
    const { toJSON } = render(
      <F0Link href="https://factorialhr.com" target="_blank">
        Link
      </F0Link>
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - explicit external prop path", () => {
    const { toJSON } = render(
      <F0Link external href="https://factorialhr.com">
        Link
      </F0Link>
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - mention does not show external icon", () => {
    const { toJSON } = render(
      <F0Link variant="mention" external href="https://factorialhr.com">
        User name
      </F0Link>
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it("fires onPress when provided", () => {
    const onPress = jest.fn()
    render(<F0Link onPress={onPress}>Open profile</F0Link>)

    fireEvent.press(screen.getByRole("link"))
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("forwards press event to onPress", () => {
    const onPress = jest.fn()
    render(<F0Link onPress={onPress}>Open profile</F0Link>)

    const event = { stopPropagation: jest.fn() } as unknown as Parameters<
      typeof onPress
    >[0]
    fireEvent(screen.getByRole("link"), "press", event)
    expect(onPress).toHaveBeenCalledWith(event)
  })

  it("calls event.stopPropagation when stopPropagation is true", () => {
    const onPress = jest.fn()
    render(
      <F0Link onPress={onPress} stopPropagation>
        Open profile
      </F0Link>
    )

    const event = {
      stopPropagation: jest.fn(),
    } as unknown as Parameters<typeof onPress>[0]
    fireEvent(screen.getByRole("link"), "press", event)
    expect(event.stopPropagation).toHaveBeenCalledTimes(1)
  })

  it("opens href when onPress is not provided", () => {
    const openURLSpy = jest
      .spyOn(Linking, "openURL")
      .mockResolvedValueOnce(undefined)
    render(<F0Link href="https://factorialhr.com">Factorial</F0Link>)

    fireEvent.press(screen.getByRole("link"))

    expect(openURLSpy).toHaveBeenCalledWith("https://factorialhr.com")
  })

  it("opens href when target is _blank and onPress is absent", () => {
    const openURLSpy = jest
      .spyOn(Linking, "openURL")
      .mockResolvedValueOnce(undefined)
    render(
      <F0Link href="https://factorialhr.com" target="_blank">
        Factorial
      </F0Link>
    )

    fireEvent.press(screen.getByRole("link"))

    expect(openURLSpy).toHaveBeenCalledWith("https://factorialhr.com")
  })

  it("does not trigger onPress or open href when disabled", () => {
    const onPress = jest.fn()
    const openURLSpy = jest
      .spyOn(Linking, "openURL")
      .mockResolvedValue(undefined)

    render(
      <F0Link onPress={onPress} href="https://factorialhr.com" disabled>
        Disabled link
      </F0Link>
    )

    fireEvent.press(screen.getByRole("link"))

    expect(onPress).not.toHaveBeenCalled()
    expect(openURLSpy).not.toHaveBeenCalled()
  })

  it("sets link accessibility contract", () => {
    render(<F0Link disabled>Link text</F0Link>)

    const link = screen.getByRole("link")
    expect(link.props.accessibilityRole).toBe("link")
    expect(link.props.accessibilityState).toMatchObject({
      disabled: true,
    })
    expect(link.props.accessibilityLabel).toBe("Link text")
  })

  it("falls back to href in accessibilityLabel when text is not plain", () => {
    render(
      <F0Link href="https://factorialhr.com">
        <React.Fragment />
      </F0Link>
    )

    const link = screen.getByRole("link")
    expect(link.props.accessibilityLabel).toBe("https://factorialhr.com")
  })

  it("falls back to 'Link' in accessibilityLabel when there is no text or href", () => {
    render(
      <F0Link>
        <React.Fragment />
      </F0Link>
    )

    const link = screen.getByRole("link")
    expect(link.props.accessibilityLabel).toBe("Link")
  })

  it("explicit accessibilityLabel overrides derived label", () => {
    render(<F0Link accessibilityLabel="Go to profile">Profile</F0Link>)

    const link = screen.getByRole("link")
    expect(link.props.accessibilityLabel).toBe("Go to profile")
  })

  it("calls onFocus and onBlur callbacks", () => {
    const onFocus = jest.fn()
    const onBlur = jest.fn()
    render(
      <F0Link onFocus={onFocus} onBlur={onBlur}>
        Link
      </F0Link>
    )

    const link = screen.getByRole("link")
    fireEvent(link, "focus")
    expect(onFocus).toHaveBeenCalledTimes(1)

    fireEvent(link, "blur")
    expect(onBlur).toHaveBeenCalledTimes(1)
  })
})
