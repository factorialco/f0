import {
  AlertTag,
  DotTag,
  dotTagColors,
  AppIcons,
  RawTag,
} from "@factorialco/f0-react-native";
import type { Meta, StoryFn } from "@storybook/react";
import { ScrollView, View, Text } from "react-native";

const meta: Meta = {
  title: "Components/Tags",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: StoryFn) => (
      <View className="flex-1">
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const TagsShowcase = () => (
  <ScrollView className="p-4">
    <Text className="text-lg font-bold mb-4 text-f1-foreground">AlertTag</Text>
    <View className="flex-row flex-wrap gap-2 mb-6">
      <AlertTag text="Critical" level="critical" />
      <AlertTag text="Warning" level="warning" />
      <AlertTag text="Info" level="info" />
    </View>
    <Text className="text-lg font-bold mb-4 text-f1-foreground">DotTag</Text>
    <View className="flex-row flex-wrap gap-2 mb-6">
      {dotTagColors.map((color) => (
        <DotTag key={color} text="Label" color={color} />
      ))}
      <DotTag text="Label" color="viridian" />
      <DotTag text="Label" color="viridian" />
    </View>
    <Text className="text-lg font-bold mb-4 text-f1-foreground">RawTag</Text>
    <View className="flex-row flex-wrap gap-2 mb-6">
      <RawTag text="Label" />
      <RawTag text="Label" icon={AppIcons.Ai} />
      <RawTag text="Label" noBorder={true} />
      <RawTag text="Label" noBorder={true} icon={AppIcons.Ai} />
    </View>
  </ScrollView>
);
