import { DetailsItem } from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

const meta: Meta = {
  title: "List/DetailsItem",
  component: DetailsItem,
  args: {
    title: "Email",
    content: {
      type: "item",
      text: "alicia.keys@factorial.co",
      action: {
        type: "copy",
      },
    },
  },
  decorators: [
    (Story) => (
      <View className="flex-1 p-4">
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTwoContent: Story = {
  args: {
    title: "Address",
    content: [
      {
        type: "item",
        text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
        action: {
          type: "copy",
        },
      },
      {
        type: "item",
        text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
        action: {
          type: "copy",
        },
      },
    ],
  },
};

export const WithLongText: Story = {
  args: {
    title: "Address",
    content: {
      type: "item",
      text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
      action: {
        type: "copy",
      },
    },
  },
};

export const WithMoreLinesThanAllowed: Story = {
  args: {
    title: "Address",
    content: {
      type: "item",
      text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta\nPaseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
      action: {
        type: "copy",
      },
    },
  },
};
