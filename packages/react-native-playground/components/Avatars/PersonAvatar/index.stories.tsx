import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import {
  PersonAvatar,
  PersonAvatarProps,
} from "@factorialco/factorial-one-react-native";
import { Check } from "@factorialco/factorial-one-react-native/src/icons/app";

export const sizes = ["xsmall", "small", "medium", "large", "xlarge"] as const;

const PersonAvatarExample = (
  props: PersonAvatarProps & { hasBadge: boolean },
) => {
  return <PersonAvatar {...props} />;
};
const meta = {
  title: "Components/Avatars/PersonAvatar",
  component: PersonAvatarExample,
  argTypes: {
    size: {
      control: "select",
      options: sizes,
      description: "Select the size of the avatar",
    },
    hasBadge: {
      control: "boolean",
      description: "Toggle badge visibility",
    },
    badge: {
      table: { disable: true },
    },
  },
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    size: "medium",
    hasBadge: false,
  },
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PersonAvatarExample>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const WithImage: Story = {
  args: {
    src: "https://github.com/dani-moreno.png",
  },
};

export const WithBadge: Story = {
  args: {
    badge: {
      type: "positive",
      icon: Check,
    },
    size: "medium",
  },
};
