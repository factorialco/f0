import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { EmojiAvatar } from "./index";

const meta: Meta<typeof EmojiAvatar> = {
  title: "Components/Avatars/EmojiAvatar",
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
  <View className="m-4 items-center justify-center">
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
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        Size Variants
      </Text>
      <View className="bg-gray-100 flex-row flex-wrap justify-center rounded-lg p-4">
        <EmojiAvatarDisplay emoji="🏝️" size="sm" />
        <EmojiAvatarDisplay emoji="🏝️" size="md" />
        <EmojiAvatarDisplay emoji="🏝️" size="lg" />
      </View>
    </ScrollView>
  ),
};
