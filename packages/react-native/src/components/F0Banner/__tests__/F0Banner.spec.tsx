import { fireEvent, render, screen } from "@testing-library/react-native"
import React from "react"

import { F0Link } from "../../F0Link"
import { F0Banner } from "../F0Banner"
import { F0_BANNER_LEVELS } from "../F0Banner.types"

describe("F0Banner", () => {
  it("Snapshot - default", () => {
    const { toJSON } = render(<F0Banner level="info" message="Message" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - all levels", () => {
    F0_BANNER_LEVELS.forEach((level) => {
      const { toJSON } = render(<F0Banner level={level} message="Message" />)
      expect(toJSON()).toMatchSnapshot(level)
    })
  })

  it("renders the message", () => {
    render(<F0Banner level="info" message="Hello banner" />)
    expect(screen.getByText("Hello banner")).toBeTruthy()
  })

  it("applies the level background class", () => {
    render(<F0Banner level="warning" message="Message" testID="banner" />)
    const className = String(screen.getByTestId("banner").props.className ?? "")
    expect(className).toContain("bg-f0-background-warning")
  })

  it("renders a link slot and fires its press handler", () => {
    const onPress = jest.fn()
    render(
      <F0Banner
        level="info"
        message="Message"
        link={
          <F0Link size="sm" onPress={onPress}>
            Link
          </F0Link>
        }
      />
    )
    const link = screen.getByText("Link")
    fireEvent.press(link)
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("renders an action button and fires its press handler", () => {
    const onPress = jest.fn()
    render(
      <F0Banner
        level="positive"
        message="Message"
        action={{ label: "Label", onPress }}
      />
    )
    const button = screen.getByText("Label")
    fireEvent.press(button)
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("shows the loading spinner when loading", () => {
    render(<F0Banner level="critical" message="Message" loading />)
    expect(screen.getByTestId("f0-banner-spinner")).toBeTruthy()
  })

  it("hides the loading spinner by default", () => {
    render(<F0Banner level="critical" message="Message" />)
    expect(screen.queryByTestId("f0-banner-spinner")).toBeNull()
  })

  it("removes itself and fires onDismiss when dismissed", () => {
    const onDismiss = jest.fn()
    render(<F0Banner level="info" message="Dismiss me" onDismiss={onDismiss} />)
    expect(screen.getByText("Dismiss me")).toBeTruthy()

    fireEvent.press(screen.getByTestId("f0-banner-dismiss"))

    expect(onDismiss).toHaveBeenCalledTimes(1)
    expect(screen.queryByText("Dismiss me")).toBeNull()
  })

  it("shows a dismiss button with `dismissible` even without onDismiss", () => {
    render(<F0Banner level="info" message="Dismiss me" dismissible />)
    fireEvent.press(screen.getByTestId("f0-banner-dismiss"))
    expect(screen.queryByText("Dismiss me")).toBeNull()
  })

  it("has no dismiss button by default", () => {
    render(<F0Banner level="info" message="Message" />)
    expect(screen.queryByTestId("f0-banner-dismiss")).toBeNull()
  })
})
