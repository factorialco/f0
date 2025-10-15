import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { Meta, StoryFn } from "@storybook/react";
import { PageHeader } from "./index";

const meta: Meta<typeof PageHeader> = {
  title: "Components/Navigation/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <ScrollView>
        {/* @ts-expect-error - Storybook type issue with Story component */}
        <Story />
      </ScrollView>
    ),
  ],
};

export default meta;

export const Showcase = () => {
  return (
    <View>
      <Text className="font-bold my-4 px-4 text-lg text-f1-foreground">
        Default
      </Text>
      <PageHeader title="Timesheet" />

      <Text className="font-bold my-4 px-4 text-lg text-f1-foreground">
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

      <Text className="font-bold my-4 px-4 text-lg text-f1-foreground">
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
