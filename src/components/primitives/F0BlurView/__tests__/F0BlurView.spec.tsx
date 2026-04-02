import { render } from "@testing-library/react-native"
import React from "react"
import { Text } from "react-native"

import { F0BlurView } from "../F0BlurView"

describe("F0BlurView", () => {
  describe("Snapshots", () => {
    it("renders with defaults", () => {
      const { toJSON } = render(<F0BlurView testID="blur" />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("renders with custom intensity", () => {
      const { toJSON } = render(<F0BlurView testID="blur" intensity={80} />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("renders with dark tint", () => {
      const { toJSON } = render(<F0BlurView testID="blur" tint="dark" />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("renders with children", () => {
      const { toJSON } = render(
        <F0BlurView testID="blur">
          <Text>Content over blur</Text>
        </F0BlurView>
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Props", () => {
    it("forwards intensity prop", () => {
      const { getByTestId } = render(
        <F0BlurView testID="blur" intensity={70} />
      )
      expect(getByTestId("blur").props.intensity).toBe(70)
    })

    it("uses default intensity of 40", () => {
      const { getByTestId } = render(<F0BlurView testID="blur" />)
      expect(getByTestId("blur").props.intensity).toBe(40)
    })

    it("forwards tint prop", () => {
      const { getByTestId } = render(<F0BlurView testID="blur" tint="light" />)
      expect(getByTestId("blur").props.tint).toBe("light")
    })

    it("uses default tint of default", () => {
      const { getByTestId } = render(<F0BlurView testID="blur" />)
      expect(getByTestId("blur").props.tint).toBe("default")
    })

    it("accepts style prop without error", () => {
      const style = {
        position: "absolute" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }
      expect(() =>
        render(<F0BlurView testID="blur" style={style} />)
      ).not.toThrow()
    })

    it("renders children", () => {
      const { getByText } = render(
        <F0BlurView>
          <Text>Hello</Text>
        </F0BlurView>
      )
      expect(getByText("Hello")).toBeTruthy()
    })
  })
})
