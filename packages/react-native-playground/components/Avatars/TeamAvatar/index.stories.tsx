import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { TeamAvatar } from "@factorialco/f0-react-native";
import { Check } from "@factorialco/f0-react-native/src/icons/app";

export const sizes = ["xsmall", "small", "medium", "large", "xlarge"] as const;

const meta: Meta<typeof TeamAvatar> = {
  component: TeamAvatar,
  title: "Components/Avatars/TeamAvatar",
  tags: ["autodocs", "experimental"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
  },
  args: {
    name: "Design",
    size: "medium",
  },
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center">
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TeamAvatar>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/21041797?s=48&v=4",
  },
};

export const WithBadge: Story = {
  args: {
    badge: {
      type: "positive",
      icon: Check,
    },
  },
};
