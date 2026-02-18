import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ActivityItem,
  ActivityItemSkeleton,
} from "@factorialco/f0-react-native";
import { AppIcons } from "@factorialco/f0-react-native";

const meta = {
  title: "Components/ActivityItem",
  component: ActivityItem,
  argTypes: {
    isUnread: {
      control: "boolean",
    },
    onPress: { action: "pressed" },
  },
  args: {
    id: "1",
    date: "10 min ago",
    title: "Your time off request has been approved",
    description: "René Galindo has approved your time off request",
    category: "Time off",
    isUnread: false,
    onPress: (id: string) => console.log(`ActivityItem ${id} pressed`),
  },
  decorators: [
    (Story) => (
      <View className="flex-1 p-4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ActivityItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "1",
    date: "5 min ago",
    title: "Your time off request has been approved",
    description: "René Galindo has approved your time off request",
    category: "Time off",
    icon: AppIcons.Calendar,
    isUnread: false,
  },
};

export const Unread: Story = {
  args: {
    ...Default.args,
    id: "2",
    isUnread: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    ...Default.args,
    id: "3",
    icon: undefined,
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    id: "4",
    description: undefined,
  },
};

export const ActivityItemList: Story = {
  args: {
    // Adding default args to fix type error
    id: "1",
    date: "Just now",
    title: "Default Title",
    category: "Default",
    onPress: () => {},
  },
  render: () => {
    const activityItems = [
      {
        id: "1",
        date: "30 min ago",
        title: "Your time off request has been approved",
        description: "René Galindo has approved your time off request",
        icon: AppIcons.PalmTree,
        category: "Time off",
        isUnread: true,
      },
      {
        id: "2",
        date: "2 hours ago",
        title: "A document has been uploaded",
        description:
          "The document 04-2025 hs.pdf has been uploaded by Laia Moreno Padilla",
        icon: AppIcons.File,
        category: "Documents",
        isUnread: true,
      },
      {
        id: "3",
        date: "May 18",
        title: "Ana Clever adjusted your holiday allowance",
        description: "René Galindo has approved your holidays request",
        icon: AppIcons.PalmTree,
        category: "Module",
        isUnread: true,
      },
      {
        id: "4",
        date: "May 17",
        title: "Your time off request has been approved",
        description: "René Galindo has approved your time off request",
        icon: AppIcons.PalmTree,
        category: "Time off",
        isUnread: false,
      },
    ];

    return (
      <ScrollView>
        <Text className="text-lg font-bold mb-4 text-f1-foreground">
          Activity Feed
        </Text>
        <View className="gap-2">
          {activityItems.map((item) => (
            <ActivityItem
              key={item.id}
              id={item.id}
              date={item.date}
              title={item.title}
              description={item.description}
              icon={item.icon}
              category={item.category}
              isUnread={item.isUnread}
              onPress={(id: string) =>
                console.log(`ActivityItem ${id} pressed`)
              }
            />
          ))}
        </View>
      </ScrollView>
    );
  },
};

export const Skeleton: Story = {
  args: {
    id: "1",
    date: "Just now",
    title: "Default Title",
    category: "Default",
    onPress: () => {},
  },
  render: () => <ActivityItemSkeleton />,
};
