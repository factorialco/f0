import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Counter } from "../../../src/components/Counter";
import { useCSSVariable } from "uniwind";

export function CounterShowcase() {
  const [f1Foreground] = useCSSVariable(['--color-f1-foreground']);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  return (
    <ScrollView 
      className="p-4" 
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* Type Variants */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Type Variants
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Counter type="default" value={5} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Default
          </Text>
        </View>
        <View className="items-center">
          <Counter type="selected" value={12} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Selected
          </Text>
        </View>
        <View className="items-center">
          <Counter type="bold" value={99} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Bold
          </Text>
        </View>
      </View>

      {/* Size Variants */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Size Variants
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Counter type="default" value={3} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Small
          </Text>
        </View>
        <View className="items-center">
          <Counter type="default" value={42} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Medium
          </Text>
        </View>
      </View>

      {/* Different Values */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Different Values
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Counter type="default" value={0} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            0
          </Text>
        </View>
        <View className="items-center">
          <Counter type="default" value={1} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            1
          </Text>
        </View>
        <View className="items-center">
          <Counter type="default" value={9} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            9
          </Text>
        </View>
        <View className="items-center">
          <Counter type="default" value={99} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            99
          </Text>
        </View>
        <View className="items-center">
          <Counter type="default" value={999} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            999
          </Text>
        </View>
      </View>

      {/* Max Value Examples */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Max Value (shows +max when exceeded)
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Counter type="default" value={5} maxValue={99} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Value: 5, Max: 99
          </Text>
        </View>
        <View className="items-center">
          <Counter type="default" value={100} maxValue={99} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Value: 100, Max: 99
          </Text>
        </View>
        <View className="items-center">
          <Counter type="bold" value={150} maxValue={99} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Value: 150, Max: 99
          </Text>
        </View>
      </View>

      {/* All Types with Small Size */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        All Types - Small Size
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Counter type="default" value={7} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Default
          </Text>
        </View>
        <View className="items-center">
          <Counter type="selected" value={15} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Selected
          </Text>
        </View>
        <View className="items-center">
          <Counter type="bold" value={88} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Bold
          </Text>
        </View>
      </View>

      {/* All Types with Medium Size */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        All Types - Medium Size
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Counter type="default" value={23} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Default
          </Text>
        </View>
        <View className="items-center">
          <Counter type="selected" value={45} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Selected
          </Text>
        </View>
        <View className="items-center">
          <Counter type="bold" value={123} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Bold
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
