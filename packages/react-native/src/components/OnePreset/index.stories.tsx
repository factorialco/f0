import type { StoryFn } from "@storybook/react";
import { OnePreset } from "./index";
import { ScrollView, View, Text } from "react-native";
import { useState } from "react";

const meta = {
  title: "Components/OnePreset",
  component: OnePreset,
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

export const OnePresetShowcase = () => {
  const [isSelectedDefault, setIsSelectedDefault] = useState(false);
  const [isSelectedNoNumber, setIsSelectedNoNumber] = useState(false);

  return (
    <ScrollView className="p-4">
      <View className="flex-col flex-wrap gap-2">
        <View className="mb-6 justify-center">
          <Text className="font-bold mb-4 text-lg text-f1-foreground">
            Default
          </Text>
          <OnePreset
            label="Label"
            number={42}
            selected={isSelectedDefault}
            onClick={() => setIsSelectedDefault(!isSelectedDefault)}
          />
        </View>
        <View className="mb-6 justify-center">
          <Text className="font-bold mb-4 text-lg text-f1-foreground">
            No number
          </Text>
          <OnePreset
            label="Label"
            selected={isSelectedNoNumber}
            onClick={() => setIsSelectedNoNumber(!isSelectedNoNumber)}
          />
        </View>
        <View className="mb-6 justify-center">
          <Text className="font-bold mb-4 text-lg text-f1-foreground">
            No interactive
          </Text>
          <OnePreset label="Label" number={42} />
        </View>
      </View>
    </ScrollView>
  );
};
