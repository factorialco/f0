import { DetailsItemsList } from "@factorialco/f0-react-native";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";

const meta: Meta = {
  title: "List/DetailsItemsList",
  component: DetailsItemsList,
  decorators: [
    (Story) => (
      <View className="flex-1 p-4">
        <Story />
      </View>
    ),
  ],
  args: {
    title: "Details",
    details: [
      {
        title: "Legal entity",
        content: {
          type: "item",
          text: "Everyday Software SL",
          action: {
            type: "copy",
          },
        },
      },
      {
        title: "Manager",
        content: {
          type: "person",
          firstName: "Saul",
          lastName: "Dominguez",
          avatarUrl: "https://github.com/sauldom102.png",
          action: {
            type: "generic",
            handlePress: () => console.log("Its work"),
          },
        },
      },
      {
        title: "Teams",
        content: [
          {
            type: "team",
            name: "Management",
            action: {
              type: "generic",
              handlePress: () => console.log("Its work"),
            },
          },
          {
            type: "team",
            name: "Engineering",
            action: {
              type: "generic",
              handlePress: () => console.log("Its work"),
            },
          },
        ],
      },
      {
        title: "Type",
        content: {
          type: "dot-tag",
          text: "Holidays",
          customColor: "#07A2AD",
        },
      },
    ],
  },
} satisfies Meta<typeof DetailsItemsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const TableView: Story = {
  args: {
    title: undefined,
    tableView: true,
  },
};

export const TableViewHorizontalItems: Story = {
  args: {
    title: undefined,
    tableView: true,
    isHorizontalItem: true,
  },
};
