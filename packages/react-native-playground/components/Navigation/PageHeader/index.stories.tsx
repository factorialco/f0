import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { Meta, StoryFn } from "@storybook/react";
import { PageHeader } from "@factorialco/f0-react-native";

const meta: Meta<typeof PageHeader> = {
  title: "Components/Navigation/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <ScrollView>
        <Story />
      </ScrollView>
    ),
  ],
};

export default meta;

export const Showcase = () => {
  return (
    <View>
      <Text className="text-lg font-bold my-4 text-f1-foreground px-4">
        Default
      </Text>
      <PageHeader title="Timesheet" />

      <Text className="text-lg font-bold my-4 text-f1-foreground px-4">
        With action
      </Text>
      <PageHeader
        title="Home"
        actions={[
          {
            type: "notifications",
            label: "Notifications",
            onPress: () => console.log("Notifications pressed"),
          },
        ]}
      />

      <Text className="text-lg font-bold my-4 text-f1-foreground px-4">
        With action and badge
      </Text>
      <PageHeader
        title="Profile"
        actions={[
          {
            type: "notifications",
            label: "Notifications",
            onPress: () => console.log("Notifications pressed"),
            showBadge: true,
          },
        ]}
      />
    </View>
  );
};
