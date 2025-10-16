import type { StoryFn } from "@storybook/react";
import { Counter } from "./index";
import { ScrollView, View, Text } from "react-native";

const meta = {
  title: "Components/Counter",
  component: Counter,
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

export const CounterShowcase = () => {
  return (
    <ScrollView className="p-4">
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        Variants by types
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        <View className="items-center justify-center">
          <Counter value={42} />
          <Text className="mt-2 text-center text-xs text-f1-foreground">
            default
          </Text>
        </View>
        <View className="items-center justify-center">
          <Counter value={142} type="bold" maxValue={99} />
          <Text className="mt-2 text-center text-xs text-f1-foreground">
            bold
          </Text>
        </View>
        <View className="items-center justify-center">
          <Counter value={42} type="selected" />
          <Text className="mt-2 text-center text-xs text-f1-foreground">
            selected
          </Text>
        </View>
      </View>
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        Variants by size
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        <View className="items-center justify-center">
          <Counter value={42} size="md" />
          <Text className="mt-2 text-center text-xs text-f1-foreground">
            md
          </Text>
        </View>
        <View className="items-center justify-center">
          <Counter value={42} size="sm" />
          <Text className="mt-2 text-center text-xs text-f1-foreground">
            sm
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
