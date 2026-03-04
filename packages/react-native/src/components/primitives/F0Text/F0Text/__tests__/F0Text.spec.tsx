import { render } from "@testing-library/react-native"
import React from "react"
import { Text as RNText } from "react-native"

import { F0Text } from "../F0Text"

describe("F0Text", () => {
  describe("Snapshots", () => {
    it("renders with default variant (body-sm-default)", () => {
      const { toJSON } = render(<F0Text>Default text</F0Text>)
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
          <F0Text variant={variant}>{variant} text</F0Text>
        )
        expect(toJSON()).toMatchSnapshot(`variant-${variant}`)
      })
    })

    it("renders all color variants", () => {
      const colors = [
        "default",
        "secondary",
        "tertiary",
        "inverse",
        "inverse-secondary",
        "disabled",
        "accent",
        "critical",
        "info",
        "warning",
        "positive",
        "selected",
      ] as const

      colors.forEach((color) => {
        const { toJSON } = render(<F0Text color={color}>{color} text</F0Text>)
        expect(toJSON()).toMatchSnapshot(`color-${color}`)
      })
    })

    it("renders with alignment options", () => {
      const alignments = ["left", "center", "right", "justify"] as const

      alignments.forEach((align) => {
        const { toJSON } = render(<F0Text align={align}>{align} text</F0Text>)
        expect(toJSON()).toMatchSnapshot(`align-${align}`)
      })
    })

    it("renders with text decorations", () => {
      const decorations = ["none", "underline", "line-through"] as const

      decorations.forEach((decoration) => {
        const { toJSON } = render(
          <F0Text decoration={decoration}>{decoration} text</F0Text>
        )
        expect(toJSON()).toMatchSnapshot(`decoration-${decoration}`)
      })
    })

    it("renders with text transforms", () => {
      const transforms = [
        "none",
        "uppercase",
        "lowercase",
        "capitalize",
      ] as const

      transforms.forEach((transform) => {
        const { toJSON } = render(
          <F0Text transform={transform}>{transform} text</F0Text>
        )
        expect(toJSON()).toMatchSnapshot(`transform-${transform}`)
      })
    })

    it("renders with numberOfLines truncation", () => {
      const { toJSON } = render(
        <F0Text numberOfLines={2}>
          This is a very long text that should be truncated after two lines with
          an ellipsis at the end
        </F0Text>
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Behavior", () => {
    it("renders children correctly", () => {
      const { getByText } = render(<F0Text>Hello World</F0Text>)
      expect(getByText("Hello World")).toBeTruthy()
    })

    it("applies correct variant classes", () => {
      const { getByText } = render(
        <F0Text variant="heading-lg">Large Heading</F0Text>
      )
      const element = getByText("Large Heading")
      expect(element.props.className).toContain("text-[24px]")
      expect(element.props.className).toContain("leading-[32px]")
      expect(element.props.className).toContain("tracking-[-0.2px]")
      expect(element.props.className).toContain("font-semibold")
    })

    it("applies correct color classes", () => {
      const { getByText } = render(
        <F0Text color="secondary">Secondary text</F0Text>
      )
      const element = getByText("Secondary text")
      expect(element.props.className).toContain("text-f0-foreground-secondary")
    })

    it("applies correct alignment classes", () => {
      const { getByText } = render(
        <F0Text align="center">Centered text</F0Text>
      )
      const element = getByText("Centered text")
      expect(element.props.className).toContain("text-center")
    })

    it("applies decoration classes", () => {
      const { getByText } = render(
        <F0Text decoration="underline">Underlined text</F0Text>
      )
      const element = getByText("Underlined text")
      expect(element.props.className).toContain("underline")
    })

    it("applies transform classes", () => {
      const { getByText } = render(
        <F0Text transform="uppercase">uppercase text</F0Text>
      )
      const element = getByText("uppercase text")
      expect(element.props.className).toContain("uppercase")
    })

    it("sets numberOfLines prop correctly", () => {
      const { getByText } = render(
        <F0Text numberOfLines={3}>Multiline text</F0Text>
      )
      const element = getByText("Multiline text")
      expect(element.props.numberOfLines).toBe(3)
      expect(element.props.ellipsizeMode).toBe("tail")
    })

    it("does not set ellipsizeMode when numberOfLines is not provided", () => {
      const { getByText } = render(<F0Text>Normal text</F0Text>)
      const element = getByText("Normal text")
      expect(element.props.ellipsizeMode).toBeUndefined()
    })

    it("forwards additional props to React Native Text", () => {
      const onPress = jest.fn()
      const { getByText } = render(
        <F0Text onPress={onPress} testID="test-text">
          Pressable text
        </F0Text>
      )
      const element = getByText("Pressable text")
      expect(element.props.testID).toBe("test-text")
      expect(element.props.onPress).toBe(onPress)
    })

    it("filters style prop at runtime (prevents override via spread)", () => {
      const propsWithStyle = {
        style: { color: "red" },
        children: "Text with style attempt",
      }
      const { getByText } = render(
        <F0Text {...(propsWithStyle as React.ComponentProps<typeof F0Text>)}>
          Text with style attempt
        </F0Text>
      )
      const element = getByText("Text with style attempt")
      expect(element.props.style).toBeUndefined()
    })

    it("filters className prop at runtime (prevents override via spread)", () => {
      const propsWithClassName = {
        className: "font-bold text-red-500",
        children: "Text with className attempt",
      }
      const { getByText } = render(
        <F0Text
          {...(propsWithClassName as React.ComponentProps<typeof F0Text>)}
        >
          Text with className attempt
        </F0Text>
      )
      const element = getByText("Text with className attempt")
      expect(element.props.className).not.toContain("font-bold")
      expect(element.props.className).not.toContain("text-red-500")
    })

    it("handles ref forwarding", () => {
      const ref = React.createRef<RNText>()
      render(<F0Text ref={ref}>Ref text</F0Text>)
      expect(ref.current).toBeTruthy()
    })

    it("renders nested children", () => {
      const { getByText } = render(
        <F0Text>
          Parent <F0Text variant="body-xs-medium">nested</F0Text> text
        </F0Text>
      )
      expect(getByText("nested")).toBeTruthy()
    })
  })
})
