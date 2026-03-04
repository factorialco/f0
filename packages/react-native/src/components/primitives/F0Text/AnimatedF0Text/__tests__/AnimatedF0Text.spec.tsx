import { render } from "@testing-library/react-native"
import React from "react"

import { AnimatedF0Text } from "../AnimatedF0Text"

describe("AnimatedF0Text", () => {
  describe("Snapshots", () => {
    it("renders with default variant (body-sm-default)", () => {
      const { toJSON } = render(<AnimatedF0Text>Default text</AnimatedF0Text>)
      expect(toJSON()).toMatchSnapshot()
    })

    it("renders all typography variants", () => {
      const variants = [
        "heading-xl",
        "heading-lg",
        "heading-md",
        "heading-sm",
        "body-md-default",
        "body-md-medium",
        "body-md-semibold",
        "body-sm-default",
        "body-sm-medium",
        "body-sm-semibold",
        "body-xs-medium",
      ] as const

      variants.forEach((variant) => {
        const { toJSON } = render(
          <AnimatedF0Text variant={variant}>{variant} text</AnimatedF0Text>
        )
        expect(toJSON()).toMatchSnapshot(`variant-${variant}`)
      })
    })

    it("renders with color variants", () => {
      const colors = ["default", "secondary", "accent", "critical"] as const

      colors.forEach((color) => {
        const { toJSON } = render(
          <AnimatedF0Text color={color}>{color} text</AnimatedF0Text>
        )
        expect(toJSON()).toMatchSnapshot(`color-${color}`)
      })
    })
  })

  describe("Behavior", () => {
    it("renders children correctly", () => {
      const { getByText } = render(<AnimatedF0Text>Hello World</AnimatedF0Text>)
      expect(getByText("Hello World")).toBeTruthy()
    })

    it("applies correct variant classes", () => {
      const { getByText } = render(
        <AnimatedF0Text variant="heading-xl">XL Heading</AnimatedF0Text>
      )
      const element = getByText("XL Heading")
      expect(element.props.className).toContain("text-[36px]")
      expect(element.props.className).toContain("leading-[40px]")
      expect(element.props.className).toContain("tracking-[-0.2px]")
      expect(element.props.className).toContain("font-semibold")
    })

    it("applies correct color classes", () => {
      const { getByText } = render(
        <AnimatedF0Text color="secondary">Secondary text</AnimatedF0Text>
      )
      const element = getByText("Secondary text")
      expect(element.props.className).toContain("text-f0-foreground-secondary")
    })

    it("applies correct alignment classes", () => {
      const { getByText } = render(
        <AnimatedF0Text align="center">Centered text</AnimatedF0Text>
      )
      const element = getByText("Centered text")
      expect(element.props.className).toContain("text-center")
    })

    it("applies decoration classes", () => {
      const { getByText } = render(
        <AnimatedF0Text decoration="underline">Underlined text</AnimatedF0Text>
      )
      const element = getByText("Underlined text")
      expect(element.props.className).toContain("underline")
    })

    it("applies transform classes", () => {
      const { getByText } = render(
        <AnimatedF0Text transform="uppercase">uppercase text</AnimatedF0Text>
      )
      const element = getByText("uppercase text")
      expect(element.props.className).toContain("uppercase")
    })

    it("sets numberOfLines prop correctly", () => {
      const { getByText } = render(
        <AnimatedF0Text numberOfLines={3}>Multiline text</AnimatedF0Text>
      )
      const element = getByText("Multiline text")
      expect(element.props.numberOfLines).toBe(3)
      expect(element.props.ellipsizeMode).toBe("tail")
    })

    it("does not set ellipsizeMode when numberOfLines is not provided", () => {
      const { getByText } = render(<AnimatedF0Text>Normal text</AnimatedF0Text>)
      const element = getByText("Normal text")
      expect(element.props.ellipsizeMode).toBeUndefined()
    })

    it("accepts style prop for animated styles", () => {
      const animatedStyle = { opacity: 0.5 }
      const { getByText } = render(
        <AnimatedF0Text style={animatedStyle}>Styled text</AnimatedF0Text>
      )
      const element = getByText("Styled text")
      expect(element.props.style).toEqual(animatedStyle)
    })

    it("forwards additional props", () => {
      const { getByText } = render(
        <AnimatedF0Text testID="test-animated-text">
          Pressable text
        </AnimatedF0Text>
      )
      const element = getByText("Pressable text")
      expect(element.props.testID).toBe("test-animated-text")
    })
  })
})
