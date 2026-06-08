import React from "react"
import { ScrollView, View } from "react-native"
import { F0Text } from "../../../src/components/primitives/F0Text"

export function F0TextShowcase() {
  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: "100%" }}
    >
      {/* Typography Variants */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        Typography Variants
      </F0Text>

      <View className="mb-8 gap-4">
        <F0Text variant="heading-xl">Heading XL (36px)</F0Text>
        <F0Text variant="heading-lg">Heading LG (24px)</F0Text>
        <F0Text variant="heading-md">Heading MD (20px)</F0Text>
        <F0Text variant="heading-sm">Heading SM (16px)</F0Text>
        <F0Text variant="body-md-default">Body MD Default (16px)</F0Text>
        <F0Text variant="body-md-medium">Body MD Medium (16px)</F0Text>
        <F0Text variant="body-md-semibold">Body MD Semibold (16px)</F0Text>
        <F0Text variant="body-sm-default">Body SM Default (14px)</F0Text>
        <F0Text variant="body-sm-medium">Body SM Medium (14px)</F0Text>
        <F0Text variant="body-sm-semibold">Body SM Semibold (14px)</F0Text>
        <F0Text variant="body-xs-medium">Body XS Medium (12px)</F0Text>
      </View>

      {/* Color Variants */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        Color Variants
      </F0Text>

      <View className="mb-8 gap-3">
        <F0Text color="default">Default foreground color</F0Text>
        <F0Text color="secondary">Secondary foreground color</F0Text>
        <F0Text color="tertiary">Tertiary foreground color</F0Text>
        <F0Text color="disabled">Disabled foreground color</F0Text>
        <F0Text color="accent">Accent color</F0Text>
        <F0Text color="critical">Critical color</F0Text>
        <F0Text color="info">Info color</F0Text>
        <F0Text color="warning">Warning color</F0Text>
        <F0Text color="positive">Positive color</F0Text>
        <F0Text color="selected">Selected color</F0Text>
      </View>

      {/* Text Alignment */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        Text Alignment
      </F0Text>

      <View className="bg-f0-background-secondary mb-8 gap-3 rounded p-4">
        <F0Text align="left">Left aligned text</F0Text>
        <F0Text align="center">Center aligned text</F0Text>
        <F0Text align="right">Right aligned text</F0Text>
        <F0Text align="justify">
          Justified text that spans multiple lines to demonstrate how text
          justification works when the content is long enough to wrap.
        </F0Text>
      </View>

      {/* Text Decorations */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        Text Decorations
      </F0Text>

      <View className="mb-8 gap-3">
        <F0Text decoration="none">No decoration</F0Text>
        <F0Text decoration="underline">Underlined text</F0Text>
        <F0Text decoration="line-through">Strikethrough text</F0Text>
      </View>

      {/* Text Transforms */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        Text Transforms
      </F0Text>

      <View className="mb-8 gap-3">
        <F0Text transform="none">Original text case</F0Text>
        <F0Text transform="uppercase">uppercase transformed</F0Text>
        <F0Text transform="lowercase">LOWERCASE TRANSFORMED</F0Text>
        <F0Text transform="capitalize">capitalize each word</F0Text>
      </View>

      {/* Number of Lines Truncation */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        Text Truncation
      </F0Text>

      <View className="bg-f0-background-secondary mb-8 gap-3 rounded p-4">
        <F0Text variant="body-xs-medium" color="secondary">
          Single line truncation:
        </F0Text>
        <F0Text numberOfLines={1}>
          This is a very long text that will be truncated after one line with an
          ellipsis at the end to show how the component handles overflow content
          when numberOfLines is set to 1.
        </F0Text>

        <F0Text variant="body-xs-medium" color="secondary" className="mt-2">
          Two lines truncation:
        </F0Text>
        <F0Text numberOfLines={2}>
          This is a very long text that will be truncated after two lines with
          an ellipsis at the end to show how the component handles overflow
          content when numberOfLines is set to 2. This should wrap to a second
          line before truncating.
        </F0Text>

        <F0Text variant="body-xs-medium" color="secondary" className="mt-2">
          Three lines truncation:
        </F0Text>
        <F0Text numberOfLines={3}>
          This is a very long text that will be truncated after three lines with
          an ellipsis at the end to show how the component handles overflow
          content when numberOfLines is set to 3. This should wrap to multiple
          lines before truncating at the specified line limit. This demonstrates
          how you can control text overflow in your mobile applications.
        </F0Text>
      </View>

      {/* className — Layout & Positioning */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        className — Layout & Positioning
      </F0Text>

      <F0Text variant="body-xs-medium" color="tertiary" className="mb-4">
        className accepts layout classes (margin, padding, flex, position).
        Typography classes are ignored — semantic props always win.
      </F0Text>

      <View className="mb-8 gap-4">
        {/* Margin directly on text */}
        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary">
            Margin: className="mt-2 mb-4"
          </F0Text>
          <F0Text variant="body-sm-default" className="mt-2 mb-4">
            This text has mt-2 and mb-4 directly
          </F0Text>
          <F0Text variant="body-xs-medium" color="tertiary">
            ↑ No View wrapper needed
          </F0Text>
        </View>

        {/* Padding directly on text */}
        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary">
            Padding: className="p-3 bg-f0-background-info rounded"
          </F0Text>
          <F0Text
            variant="body-sm-default"
            color="info"
            className="mt-2 bg-f0-background-info rounded p-3"
          >
            Text with padding and background
          </F0Text>
        </View>

        {/* Flex layout */}
        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary" className="mb-2">
            Flex: className="flex-1" inside a row
          </F0Text>
          <View className="flex-row items-center gap-2">
            <View className="h-3 w-3 rounded-full bg-f0-foreground-positive" />
            <F0Text variant="body-sm-default" className="flex-1">
              This text fills remaining space with flex-1
            </F0Text>
          </View>
        </View>

        {/* Self alignment */}
        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary" className="mb-2">
            Self alignment: className="self-center" / "self-end"
          </F0Text>
          <F0Text variant="body-sm-default" className="self-start">
            self-start (default)
          </F0Text>
          <F0Text variant="body-sm-medium" color="accent" className="self-center">
            self-center
          </F0Text>
          <F0Text variant="body-sm-default" className="self-end">
            self-end
          </F0Text>
        </View>

        {/* Width */}
        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary" className="mb-2">
            Width: className="w-1/2"
          </F0Text>
          <F0Text
            variant="body-sm-default"
            className="w-1/2 bg-f0-background-warning rounded p-2"
            color="warning"
          >
            Half width text
          </F0Text>
        </View>
      </View>

      {/* className — Typography Protection */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        className — Typography Protection
      </F0Text>

      <F0Text variant="body-xs-medium" color="tertiary" className="mb-4">
        Typography classes in className are silently overridden by semantic
        props. The design system always wins via twMerge.
      </F0Text>

      <View className="mb-8 gap-4">
        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary" className="mb-2">
            variant="heading-md" + className="text-xs font-normal"
          </F0Text>
          <F0Text variant="heading-md" className="text-xs font-normal">
            Still heading-md (20px semibold)
          </F0Text>
        </View>

        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary" className="mb-2">
            color="positive" + className="text-red-500"
          </F0Text>
          <F0Text color="positive" className="text-red-500">
            Still positive color (not red)
          </F0Text>
        </View>

        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary" className="mb-2">
            decoration="none" + className="underline"
          </F0Text>
          <F0Text decoration="none" className="underline">
            No underline (prop wins)
          </F0Text>
        </View>

        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary" className="mb-2">
            Mixed: layout passes, typography blocked
          </F0Text>
          <F0Text
            variant="body-sm-default"
            color="accent"
            className="mt-2 p-2 self-center font-bold text-xl text-red-500"
          >
            mt-2 + p-2 + self-center applied, font-bold + text-xl + text-red
            ignored
          </F0Text>
        </View>
      </View>

      {/* Nested Text */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        Nested Text
      </F0Text>

      <View className="mb-8 gap-3">
        <F0Text variant="body-sm-default">
          This is regular text with{" "}
          <F0Text variant="body-sm-semibold" color="accent">
            bold accent nested text
          </F0Text>{" "}
          and{" "}
          <F0Text variant="body-sm-default" decoration="underline">
            underlined nested text
          </F0Text>
          .
        </F0Text>
      </View>

      {/* Real-world Examples */}
      <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
        Real-world Examples
      </F0Text>

      <View className="mb-8 gap-6">
        {/* Card — using className instead of View wrappers */}
        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="heading-sm" className="mb-1">
            Card Title
          </F0Text>
          <F0Text color="secondary">
            This is a description of the card content. It uses secondary color
            for less emphasis.
          </F0Text>
          <F0Text variant="body-xs-medium" color="tertiary" className="mt-2">
            Last updated 2 hours ago
          </F0Text>
        </View>

        {/* Alert — critical */}
        <View className="bg-f0-background-critical rounded-lg p-4">
          <F0Text variant="heading-sm" color="critical" className="mb-1">
            Error occurred
          </F0Text>
          <F0Text color="critical">
            Something went wrong. Please try again later.
          </F0Text>
        </View>

        {/* Alert — success */}
        <View className="bg-f0-background-positive rounded-lg p-4">
          <F0Text variant="heading-sm" color="positive" className="mb-1">
            Success!
          </F0Text>
          <F0Text color="positive">Your changes have been saved.</F0Text>
        </View>

        {/* Row items with flex */}
        <View className="bg-f0-background-secondary rounded-lg p-4">
          <F0Text variant="body-xs-medium" color="tertiary" className="mb-2">
            Row items using flex-1 on text
          </F0Text>
          <View className="gap-2">
            <View className="flex-row items-center gap-2">
              <View className="h-2 w-2 rounded-full bg-f0-foreground-positive" />
              <F0Text variant="body-sm-default" className="flex-1">
                Online — ready to go
              </F0Text>
              <F0Text variant="body-xs-medium" color="tertiary">
                2m ago
              </F0Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="h-2 w-2 rounded-full bg-f0-foreground-warning" />
              <F0Text variant="body-sm-default" className="flex-1">
                Away — back in 15 min
              </F0Text>
              <F0Text variant="body-xs-medium" color="tertiary">
                5m ago
              </F0Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="h-2 w-2 rounded-full bg-f0-foreground-critical" />
              <F0Text variant="body-sm-default" className="flex-1">
                Offline — last seen yesterday
              </F0Text>
              <F0Text variant="body-xs-medium" color="tertiary">
                1d ago
              </F0Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
