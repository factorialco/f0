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

  describe("className — layout classes pass through", () => {
    it("applies margin classes", () => {
      const { getByText } = render(
        <AnimatedF0Text className="mx-3 mt-4 mb-2">Margin text</AnimatedF0Text>
      )
      const element = getByText("Margin text")
      expect(element.props.className).toContain("mt-4")
      expect(element.props.className).toContain("mb-2")
      expect(element.props.className).toContain("mx-3")
    })

    it("applies padding classes", () => {
      const { getByText } = render(
        <AnimatedF0Text className="p-4 px-2 py-1">Padded text</AnimatedF0Text>
      )
      const element = getByText("Padded text")
      expect(element.props.className).toContain("p-4")
      expect(element.props.className).toContain("px-2")
      expect(element.props.className).toContain("py-1")
    })

    it("applies flex classes", () => {
      const { getByText } = render(
        <AnimatedF0Text className="flex-1 flex-shrink-0">
          Flex text
        </AnimatedF0Text>
      )
      const element = getByText("Flex text")
      expect(element.props.className).toContain("flex-1")
      expect(element.props.className).toContain("flex-shrink-0")
    })

    it("applies position classes", () => {
      const { getByText } = render(
        <AnimatedF0Text className="absolute top-0 left-0">
          Positioned text
        </AnimatedF0Text>
      )
      const element = getByText("Positioned text")
      expect(element.props.className).toContain("absolute")
      expect(element.props.className).toContain("top-0")
      expect(element.props.className).toContain("left-0")
    })

    it("applies opacity classes", () => {
      const { getByText } = render(
        <AnimatedF0Text className="opacity-50">Faded text</AnimatedF0Text>
      )
      const element = getByText("Faded text")
      expect(element.props.className).toContain("opacity-50")
    })

    it("preserves layout classes with all variant combinations", () => {
      const { getByText } = render(
        <AnimatedF0Text
          variant="heading-lg"
          color="critical"
          align="center"
          decoration="underline"
          transform="uppercase"
          className="mt-4 flex-1 self-end"
        >
          Full combo
        </AnimatedF0Text>
      )
      const element = getByText("Full combo")
      expect(element.props.className).toContain("mt-4")
      expect(element.props.className).toContain("flex-1")
      expect(element.props.className).toContain("self-end")
      expect(element.props.className).toContain("text-[24px]")
      expect(element.props.className).toContain("font-semibold")
      expect(element.props.className).toContain("text-f0-foreground-critical")
      expect(element.props.className).toContain("text-center")
      expect(element.props.className).toContain("underline")
      expect(element.props.className).toContain("uppercase")
    })
  })

  describe("className — typography overrides are rejected", () => {
    it("rejects font-size override", () => {
      const { getByText } = render(
        <AnimatedF0Text variant="body-sm-default" className="text-xs">
          Size override attempt
        </AnimatedF0Text>
      )
      const element = getByText("Size override attempt")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).not.toContain("text-xs")
    })

    it("rejects font-weight override", () => {
      const { getByText } = render(
        <AnimatedF0Text variant="body-sm-default" className="font-bold">
          Weight override attempt
        </AnimatedF0Text>
      )
      const element = getByText("Weight override attempt")
      expect(element.props.className).toContain("font-normal")
      expect(element.props.className).not.toContain("font-bold")
    })

    it("rejects line-height override", () => {
      const { getByText } = render(
        <AnimatedF0Text variant="body-sm-default" className="leading-10">
          Leading override attempt
        </AnimatedF0Text>
      )
      const element = getByText("Leading override attempt")
      expect(element.props.className).toContain("leading-[20px]")
      expect(element.props.className).not.toContain("leading-10")
    })

    it("rejects text-color override", () => {
      const { getByText } = render(
        <AnimatedF0Text color="default" className="text-red-500">
          Color override attempt
        </AnimatedF0Text>
      )
      const element = getByText("Color override attempt")
      expect(element.props.className).toContain("text-f0-foreground")
      expect(element.props.className).not.toContain("text-red-500")
    })

    it("rejects multiple typography overrides simultaneously", () => {
      const { getByText } = render(
        <AnimatedF0Text
          variant="body-sm-default"
          color="default"
          className="text-xl leading-loose font-bold tracking-wider text-blue-500"
        >
          Multi override attempt
        </AnimatedF0Text>
      )
      const element = getByText("Multi override attempt")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).toContain("font-normal")
      expect(element.props.className).toContain("leading-[20px]")
      expect(element.props.className).toContain("text-f0-foreground")
      expect(element.props.className).not.toContain("text-xl")
      expect(element.props.className).not.toContain("font-bold")
      expect(element.props.className).not.toContain("leading-loose")
      expect(element.props.className).not.toContain("text-blue-500")
      expect(element.props.className).not.toContain("tracking-wider")
    })
  })

  describe("className — mixed layout + typography attempts", () => {
    it("keeps layout classes, rejects typography overrides", () => {
      const { getByText } = render(
        <AnimatedF0Text
          variant="heading-md"
          className="mt-4 flex-1 p-2 text-xl font-bold text-red-500"
        >
          Mixed attempt
        </AnimatedF0Text>
      )
      const element = getByText("Mixed attempt")
      expect(element.props.className).toContain("mt-4")
      expect(element.props.className).toContain("p-2")
      expect(element.props.className).toContain("flex-1")
      expect(element.props.className).toContain("text-[20px]")
      expect(element.props.className).toContain("font-semibold")
      expect(element.props.className).toContain("text-f0-foreground")
      expect(element.props.className).not.toContain("font-bold")
      expect(element.props.className).not.toContain("text-red-500")
      expect(element.props.className).not.toContain("text-xl")
    })

    it("works with both className and style simultaneously", () => {
      const animatedStyle = { opacity: 0.5 }
      const { getByText } = render(
        <AnimatedF0Text
          variant="heading-sm"
          className="mb-2 flex-1"
          style={animatedStyle}
        >
          className + style
        </AnimatedF0Text>
      )
      const element = getByText("className + style")
      expect(element.props.className).toContain("mb-2")
      expect(element.props.className).toContain("flex-1")
      expect(element.props.className).toContain("text-[16px]")
      expect(element.props.className).toContain("font-semibold")
      expect(element.props.style).toEqual(animatedStyle)
    })
  })

  describe("className — edge cases", () => {
    it("works correctly when className is undefined", () => {
      const { getByText } = render(
        <AnimatedF0Text>No className</AnimatedF0Text>
      )
      const element = getByText("No className")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).toContain("font-normal")
      expect(element.props.className).toContain("text-f0-foreground")
    })

    it("works correctly when className is empty string", () => {
      const { getByText } = render(
        <AnimatedF0Text className="">Empty className</AnimatedF0Text>
      )
      const element = getByText("Empty className")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).toContain("font-normal")
    })

    it("handles className with extra whitespace", () => {
      const { getByText } = render(
        <AnimatedF0Text className="  mt-4   mb-2  ">
          Whitespace className
        </AnimatedF0Text>
      )
      const element = getByText("Whitespace className")
      expect(element.props.className).toContain("mt-4")
      expect(element.props.className).toContain("mb-2")
    })
  })
})
