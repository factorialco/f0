import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { ExampleComponent } from "@factorialco/f0-react-native";

const meta = {
  title: "Components/ExampleComponent",
  component: ExampleComponent,
  argTypes: {
    text: { control: "text" },
  },
  args: {
    text: "Hello World",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ExampleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    text: "Hello from F0!",
  },
};

export const LongText: Story = {
  args: {
    text: "This is a much longer text that demonstrates how the component handles text that might wrap to multiple lines.",
  },
};
