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
      expect(element.props.className).not.toContain("no-underline")
    })

    it("applies transform classes", () => {
      const { getByText } = render(
        <F0Text transform="uppercase">uppercase text</F0Text>
      )
      const element = getByText("uppercase text")
      expect(element.props.className).toContain("uppercase")
      expect(element.props.className).not.toContain("normal-case")
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

  describe("className — layout classes pass through", () => {
    it("applies margin classes", () => {
      const { getByText } = render(
        <F0Text className="mx-3 mt-4 mb-2">Margin text</F0Text>
      )
      const element = getByText("Margin text")
      expect(element.props.className).toContain("mt-4")
      expect(element.props.className).toContain("mb-2")
      expect(element.props.className).toContain("mx-3")
    })

    it("applies padding classes", () => {
      const { getByText } = render(
        <F0Text className="p-4 px-2 py-1">Padded text</F0Text>
      )
      const element = getByText("Padded text")
      expect(element.props.className).toContain("p-4")
      expect(element.props.className).toContain("px-2")
      expect(element.props.className).toContain("py-1")
    })

    it("applies flex classes", () => {
      const { getByText } = render(
        <F0Text className="flex-1 flex-shrink-0">Flex text</F0Text>
      )
      const element = getByText("Flex text")
      expect(element.props.className).toContain("flex-1")
      expect(element.props.className).toContain("flex-shrink-0")
    })

    it("applies self-alignment classes", () => {
      const { getByText } = render(
        <F0Text className="self-center">Self-aligned text</F0Text>
      )
      const element = getByText("Self-aligned text")
      expect(element.props.className).toContain("self-center")
    })

    it("applies position classes", () => {
      const { getByText } = render(
        <F0Text className="absolute top-0 left-0">Positioned text</F0Text>
      )
      const element = getByText("Positioned text")
      expect(element.props.className).toContain("absolute")
      expect(element.props.className).toContain("top-0")
      expect(element.props.className).toContain("left-0")
    })

    it("applies width and height classes", () => {
      const { getByText } = render(
        <F0Text className="w-full max-w-xs">Sized text</F0Text>
      )
      const element = getByText("Sized text")
      expect(element.props.className).toContain("w-full")
      expect(element.props.className).toContain("max-w-xs")
    })

    it("applies opacity classes", () => {
      const { getByText } = render(
        <F0Text className="opacity-50">Faded text</F0Text>
      )
      const element = getByText("Faded text")
      expect(element.props.className).toContain("opacity-50")
    })

    it("applies display/visibility classes", () => {
      const { getByText } = render(
        <F0Text className="hidden">Hidden text</F0Text>
      )
      const element = getByText("Hidden text")
      expect(element.props.className).toContain("hidden")
    })

    it("applies z-index classes", () => {
      const { getByText } = render(
        <F0Text className="z-10">Layered text</F0Text>
      )
      const element = getByText("Layered text")
      expect(element.props.className).toContain("z-10")
    })

    it("preserves layout classes with all variant combinations", () => {
      const { getByText } = render(
        <F0Text
          variant="heading-lg"
          color="critical"
          align="center"
          decoration="underline"
          transform="uppercase"
          className="mt-4 flex-1 self-end"
        >
          Full combo
        </F0Text>
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
        <F0Text variant="body-sm-default" className="text-xs">
          Size override attempt
        </F0Text>
      )
      const element = getByText("Size override attempt")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).not.toContain("text-xs")
    })

    it("rejects arbitrary font-size override", () => {
      const { getByText } = render(
        <F0Text variant="body-sm-default" className="text-[40px]">
          Size override attempt
        </F0Text>
      )
      const element = getByText("Size override attempt")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).not.toContain("text-[40px]")
    })

    it("rejects font-weight override", () => {
      const { getByText } = render(
        <F0Text variant="body-sm-default" className="font-bold">
          Weight override attempt
        </F0Text>
      )
      const element = getByText("Weight override attempt")
      expect(element.props.className).toContain("font-normal")
      expect(element.props.className).not.toContain("font-bold")
    })

    it("rejects line-height override", () => {
      const { getByText } = render(
        <F0Text variant="body-sm-default" className="leading-10">
          Leading override attempt
        </F0Text>
      )
      const element = getByText("Leading override attempt")
      expect(element.props.className).toContain("leading-[20px]")
      expect(element.props.className).not.toContain("leading-10")
    })

    it("rejects letter-spacing override", () => {
      const { getByText } = render(
        <F0Text variant="heading-lg" className="tracking-widest">
          Tracking override attempt
        </F0Text>
      )
      const element = getByText("Tracking override attempt")
      expect(element.props.className).toContain("tracking-[-0.2px]")
      expect(element.props.className).not.toContain("tracking-widest")
    })

    it("rejects text-color override", () => {
      const { getByText } = render(
        <F0Text color="default" className="text-red-500">
          Color override attempt
        </F0Text>
      )
      const element = getByText("Color override attempt")
      expect(element.props.className).toContain("text-f0-foreground")
      expect(element.props.className).not.toContain("text-red-500")
    })

    it("rejects text-align override", () => {
      const { getByText } = render(
        <F0Text align="left" className="text-center">
          Align override attempt
        </F0Text>
      )
      const element = getByText("Align override attempt")
      expect(element.props.className).toContain("text-left")
      expect(element.props.className).not.toContain("text-center")
    })

    it("rejects text-decoration override", () => {
      const { getByText } = render(
        <F0Text decoration="none" className="underline">
          Decoration override attempt
        </F0Text>
      )
      const element = getByText("Decoration override attempt")
      const classes = element.props.className.split(" ")
      expect(classes).not.toContain("underline")
      expect(classes).toContain("no-underline")
    })

    it("rejects text-transform override", () => {
      const { getByText } = render(
        <F0Text transform="none" className="uppercase">
          Transform override attempt
        </F0Text>
      )
      const element = getByText("Transform override attempt")
      expect(element.props.className).not.toContain("uppercase")
    })

    it("rejects multiple typography overrides simultaneously", () => {
      const { getByText } = render(
        <F0Text
          variant="body-sm-default"
          color="default"
          className="text-xl leading-loose font-bold tracking-wider text-blue-500"
        >
          Multi override attempt
        </F0Text>
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
        <F0Text
          variant="heading-md"
          className="mt-4 flex-1 p-2 text-xl font-bold text-red-500"
        >
          Mixed attempt
        </F0Text>
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

    it("handles real-world card pattern without View wrapper", () => {
      const { getByText } = render(
        <F0Text variant="heading-sm" className="mb-2">
          Card Title
        </F0Text>
      )
      const element = getByText("Card Title")
      expect(element.props.className).toContain("mb-2")
      expect(element.props.className).toContain("text-[16px]")
      expect(element.props.className).toContain("font-semibold")
    })

    it("handles icon + text row pattern", () => {
      const { getByText } = render(
        <F0Text variant="body-sm-default" className="ml-2 flex-1">
          Row item text
        </F0Text>
      )
      const element = getByText("Row item text")
      expect(element.props.className).toContain("flex-1")
      expect(element.props.className).toContain("ml-2")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).toContain("font-normal")
    })
  })

  describe("className — edge cases", () => {
    it("works correctly when className is undefined", () => {
      const { getByText } = render(<F0Text>No className</F0Text>)
      const element = getByText("No className")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).toContain("font-normal")
      expect(element.props.className).toContain("text-f0-foreground")
    })

    it("works correctly when className is empty string", () => {
      const { getByText } = render(
        <F0Text className="">Empty className</F0Text>
      )
      const element = getByText("Empty className")
      expect(element.props.className).toContain("text-[14px]")
      expect(element.props.className).toContain("font-normal")
    })

    it("handles className with extra whitespace", () => {
      const { getByText } = render(
        <F0Text className="  mt-4   mb-2  ">Whitespace className</F0Text>
      )
      const element = getByText("Whitespace className")
      expect(element.props.className).toContain("mt-4")
      expect(element.props.className).toContain("mb-2")
    })

    it("still blocks style prop even when className is allowed", () => {
      const propsWithBoth = {
        style: { color: "red", marginTop: 10 },
        className: "mt-4",
        children: "Both props",
      }
      const { getByText } = render(
        <F0Text {...(propsWithBoth as React.ComponentProps<typeof F0Text>)}>
          Both props
        </F0Text>
      )
      const element = getByText("Both props")
      expect(element.props.style).toBeUndefined()
      expect(element.props.className).toContain("mt-4")
    })

    it("produces correct output without className", () => {
      const { getByText } = render(
        <F0Text variant="heading-lg" color="accent" align="center">
          No className
        </F0Text>
      )
      const element = getByText("No className")
      expect(element.props.className).toBe(
        "no-underline normal-case text-[24px] leading-[32px] tracking-[-0.2px] font-semibold text-f0-foreground-accent text-center"
      )
    })
  })
})
