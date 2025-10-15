import { DotTag, dotTagColors } from "./DotTag";
import type { Meta, StoryFn } from "@storybook/react";
import { ScrollView, View, Text } from "react-native";
import { AlertTag } from "./AlertTab";
import { RawTag } from "./RawTag";
import { AppIcons } from "src/icons";

const meta: Meta = {
  title: "Components/Tags",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: StoryFn) => (
      <View className="flex-1">
        {/* @ts-expect-error - Storybook type issue with Story component */}
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const TagsShowcase = () => (
  <ScrollView className="p-4">
    <Text className="font-bold mb-4 text-lg text-f1-foreground">AlertTag</Text>
    <View className="mb-6 flex-row flex-wrap gap-2">
      <AlertTag text="Critical" level="critical" />
      <AlertTag text="Warning" level="warning" />
      <AlertTag text="Info" level="info" />
    </View>
    <Text className="font-bold mb-4 text-lg text-f1-foreground">DotTag</Text>
    <View className="mb-6 flex-row flex-wrap gap-2">
      {dotTagColors.map((color) => (
        <DotTag key={color} text="Label" color={color} />
      ))}
      <DotTag text="Label" color="viridian" />
      <DotTag text="Label" color="viridian" />
    </View>
    <Text className="font-bold mb-4 text-lg text-f1-foreground">RawTag</Text>
    <View className="mb-6 flex-row flex-wrap gap-2">
      <RawTag text="Label" />
      <RawTag text="Label" icon={AppIcons.Ai} />
      <RawTag text="Label" noBorder={true} />
      <RawTag text="Label" noBorder={true} icon={AppIcons.Ai} />
    </View>
  </ScrollView>
);
