import { DateAvatar } from "@factorialco/f0-react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

const meta: Meta<typeof DateAvatar> = {
  component: DateAvatar,
  title: "Components/Avatars/DateAvatar",
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center">
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DateAvatar>;

// Fixed date for the example stories
const exampleDate = new Date(2024, 11, 13, 20, 0);

export const Default: Story = {
  args: {
    date: exampleDate,
  },
};
