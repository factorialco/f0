import React from "react";
import { Text, View } from "react-native";

export interface ExampleComponentProps {
  /**
   * Optional custom text to display
   */
  text?: string;
}

/**
 * An example component that demonstrates system-based dark/light mode functionality
 */
export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  text = "Hello World",
}) => {
  return (
    <View className="rounded-lg bg-f1-background p-4">
      <Text className="text-base font-medium text-f1-foreground">{text}</Text>
    </View>
  );
};
