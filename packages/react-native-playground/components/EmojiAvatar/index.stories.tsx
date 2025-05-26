import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { EmojiAvatar } from "@factorialco/factorial-one-react-native";

const meta = {
  title: "Components/EmojiAvatar",
  component: EmojiAvatar,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    emoji: "🏝️",
    size: "md",
    className: "",
  },
  decorators: [
    (Story) => (
      <View className="flex-1 p-4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof EmojiAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

type EmojiAvatarProps = {
  emoji: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const EmojiAvatarDisplay = ({ emoji, size, className }: EmojiAvatarProps) => (
  <View className="items-center justify-center m-4">
    <EmojiAvatar emoji={emoji} size={size} className={className} />
  </View>
);

export const Basic: Story = {
  args: {
    emoji: "🏝️",
    size: "md",
  },
};

export const SizeVariants: Story = {
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 text-f1-foreground">
        Size Variants
      </Text>
      <View className="flex-row flex-wrap justify-center p-4 bg-gray-100 rounded-lg">
        <EmojiAvatarDisplay emoji="🏝️" size="sm" />
        <EmojiAvatarDisplay emoji="🏝️" size="md" />
        <EmojiAvatarDisplay emoji="🏝️" size="lg" />
      </View>
    </ScrollView>
  ),
};

export const Styling: Story = {
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 text-f1-foreground">
        Custom Styling
      </Text>
      <View className="flex-row flex-wrap justify-center p-4 bg-gray-100 rounded-lg">
        <EmojiAvatarDisplay
          emoji="🍑"
          size="md"
          className="border-f1-border-critical"
        />
        <EmojiAvatarDisplay
          emoji="🍑"
          size="md"
          className="border-f1-border-info"
        />
        <EmojiAvatarDisplay
          emoji="🍑"
          size="md"
          className="border-f1-border-warning"
        />
      </View>
    </ScrollView>
  ),
};
