import { render, fireEvent, screen, act } from "@testing-library/react-native"
import React from "react"

import { F0Button } from "../"
import type { IconType } from "../../primitives/F0Icon"

jest.mock("../../primitives/F0Icon", () => ({
  F0Icon: () => null,
}))

const mockIcon: IconType = "check" as unknown as IconType
const mockOnPress = jest.fn()

describe("F0Button", () => {
  const defaultProps = {
    label: "Test Button",
    onPress: mockOnPress,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Snapshot - default button", () => {
    const { toJSON } = render(<F0Button {...defaultProps} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - outline variant", () => {
    const { toJSON } = render(<F0Button {...defaultProps} variant="outline" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - critical variant", () => {
    const { toJSON } = render(<F0Button {...defaultProps} variant="critical" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - with icon", () => {
    const { toJSON } = render(<F0Button {...defaultProps} icon={mockIcon} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - with emoji", () => {
    const { toJSON } = render(<F0Button {...defaultProps} emoji="👋" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - disabled state", () => {
    const { toJSON } = render(<F0Button {...defaultProps} disabled />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - loading state", () => {
    const { toJSON } = render(<F0Button {...defaultProps} loading />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("renders loading indicator and hides content when loading", () => {
    render(<F0Button {...defaultProps} loading />)

    expect(screen.getByTestId("f0-button-loading-indicator")).toBeDefined()
    expect(screen.getByTestId("f0-button-content").props.className).toContain(
      "opacity-0"
    )
  })

  it("Snapshot - different sizes", () => {
    const sizes = ["sm", "md", "lg"] as const
    sizes.forEach((size) => {
      const { toJSON } = render(<F0Button {...defaultProps} size={size} />)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - round button with hidden label", () => {
    const { toJSON } = render(<F0Button {...defaultProps} round hideLabel />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("renders correctly with required props", () => {
    render(<F0Button {...defaultProps} />)
    const button = screen.getByText("Test Button")
    expect(button).toBeDefined()
  })

  it("handles press events", () => {
    render(<F0Button {...defaultProps} />)
    fireEvent.press(screen.getByRole("button"))
    expect(mockOnPress).toHaveBeenCalled()
  })

  it("does not call onPress when disabled", () => {
    render(<F0Button {...defaultProps} disabled />)
    fireEvent.press(screen.getByRole("button"))
    expect(mockOnPress).not.toHaveBeenCalled()
  })

  it("shows correct accessibility label when disabled", () => {
    render(<F0Button {...defaultProps} disabled />)
    const button = screen.getByRole("button")
    expect(button.props.accessibilityLabel).toBe("Test Button, disabled")
  })

  it("shows correct accessibility label when loading", () => {
    render(<F0Button {...defaultProps} loading />)
    const button = screen.getByRole("button")
    expect(button.props.accessibilityLabel).toBe(
      "Test Button, disabled, loading"
    )
  })

  it("sets correct accessibilityState when disabled", () => {
    render(<F0Button {...defaultProps} disabled />)
    const button = screen.getByRole("button")
    expect(button.props.accessibilityState).toMatchObject({
      disabled: true,
      busy: false,
    })
  })

  it("sets correct accessibilityState when loading", () => {
    render(<F0Button {...defaultProps} loading />)
    const button = screen.getByRole("button")
    expect(button.props.accessibilityState).toMatchObject({
      disabled: true,
      busy: true,
    })
  })

  it("hides label text when hideLabel is true", () => {
    render(<F0Button {...defaultProps} hideLabel />)
    expect(screen.queryByText("Test Button")).toBeNull()
  })

  it("uses label as accessibilityLabel even when hideLabel is true", () => {
    render(<F0Button {...defaultProps} hideLabel />)
    const button = screen.getByRole("button")
    expect(button.props.accessibilityLabel).toBe("Test Button")
  })

  it("renders with testID", () => {
    render(<F0Button {...defaultProps} testID="my-button" />)
    expect(screen.getByTestId("my-button")).toBeDefined()
  })

  it("renders badge for outline variant with showBadge", () => {
    render(<F0Button {...defaultProps} variant="outline" showBadge />)
    expect(screen.getByLabelText("Notification Badge")).toBeDefined()
  })

  it("does not render badge for non-outline variant even with showBadge", () => {
    render(<F0Button {...defaultProps} variant="default" showBadge />)
    expect(screen.queryByLabelText("Notification Badge")).toBeNull()
  })

  it("does not render badge when showBadge is false", () => {
    render(<F0Button {...defaultProps} variant="outline" />)
    expect(screen.queryByLabelText("Notification Badge")).toBeNull()
  })

  it("auto-enters loading state for async onPress", async () => {
    let resolvePromise: () => void
    const asyncOnPress = jest.fn(
      () =>
        new Promise<void>((resolve) => {
          resolvePromise = resolve
        })
    )

    render(<F0Button label="Async" onPress={asyncOnPress} />)

    await act(async () => {
      fireEvent.press(screen.getByRole("button"))
    })

    expect(asyncOnPress).toHaveBeenCalled()
    expect(screen.getByTestId("f0-button-loading-indicator")).toBeDefined()
    expect(screen.getByTestId("f0-button-content").props.className).toContain(
      "opacity-0"
    )

    await act(async () => {
      resolvePromise!()
      await asyncOnPress.mock.results[0].value
    })

    expect(screen.queryByTestId("f0-button-loading-indicator")).toBeNull()
    expect(screen.getByTestId("f0-button-content").props.className).toContain(
      "opacity-100"
    )
  })

  it("handles rejected async onPress without leaking rejections", async () => {
    const onPressError = new Error("Async failure")
    const asyncOnPress = jest.fn().mockRejectedValue(onPressError)
    render(<F0Button label="Async reject" onPress={asyncOnPress} />)

    await act(async () => {
      fireEvent.press(screen.getByRole("button"))
      await Promise.resolve()
    })

    expect(asyncOnPress).toHaveBeenCalled()
    expect(screen.queryByTestId("f0-button-loading-indicator")).toBeNull()
  })

  it("handles sync throw in onPress without throwing from press handler", () => {
    const onPressError = new Error("Sync failure")
    const throwingOnPress = jest.fn(() => {
      throw onPressError
    })

    render(<F0Button label="Sync throw" onPress={throwingOnPress} />)
    expect(() => {
      fireEvent.press(screen.getByRole("button"))
    }).not.toThrow()

    expect(throwingOnPress).toHaveBeenCalled()
    expect(screen.queryByTestId("f0-button-loading-indicator")).toBeNull()
  })

  it("renders all six variants without error", () => {
    const allVariants = [
      "default",
      "outline",
      "critical",
      "neutral",
      "ghost",
      "promote",
    ] as const

    allVariants.forEach((variant) => {
      const { unmount } = render(<F0Button label={variant} variant={variant} />)
      expect(screen.getByText(variant)).toBeDefined()
      unmount()
    })
  })

  it("ignores className passed via unsafe cast", () => {
    const unsafeProps = {
      ...defaultProps,
      className: "bg-red-500 p-9",
    } as unknown as React.ComponentProps<typeof F0Button>
    render(<F0Button {...unsafeProps} />)

    const button = screen.getByRole("button")
    expect(button.props.className).toBe("overflow-hidden")
  })

  it("ignores style passed via unsafe cast", () => {
    const unsafeProps = {
      ...defaultProps,
      style: { padding: 999 },
    } as unknown as React.ComponentProps<typeof F0Button>
    render(<F0Button {...unsafeProps} />)

    const button = screen.getByRole("button")
    expect(button.props.style?.[1]).toBeUndefined()
  })

  it("ignores onPressIn passed via unsafe cast", () => {
    const unsafeOnPressIn = jest.fn()
    const unsafeProps = {
      ...defaultProps,
      onPressIn: unsafeOnPressIn,
    } as unknown as React.ComponentProps<typeof F0Button>
    render(<F0Button {...unsafeProps} />)

    const button = screen.getByRole("button")
    fireEvent(button, "pressIn")
    expect(unsafeOnPressIn).not.toHaveBeenCalled()
  })

  it("ignores accessibilityLabel passed via unsafe cast", () => {
    const unsafeProps = {
      ...defaultProps,
      accessibilityLabel: "Unsafe label override",
    } as unknown as React.ComponentProps<typeof F0Button>
    render(<F0Button {...unsafeProps} />)

    const button = screen.getByRole("button")
    expect(button.props.accessibilityLabel).toBe("Test Button")
  })
})
