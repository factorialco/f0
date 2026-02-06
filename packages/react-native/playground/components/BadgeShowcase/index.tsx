import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Badge } from "../../../src/components/Badge";
import { AppIcons } from "../../../src/icons";
import { useCSSVariable } from "uniwind";

const { Add, Check, Alert, Warning, Info } = AppIcons;

export function BadgeShowcase() {
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
          <Badge type="neutral" icon={Info} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Neutral
          </Text>
        </View>
        <View className="items-center">
          <Badge type="highlight" icon={Add} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Highlight
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Positive
          </Text>
        </View>
        <View className="items-center">
          <Badge type="critical" icon={Alert} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Critical
          </Text>
        </View>
        <View className="items-center">
          <Badge type="warning" icon={Warning} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Warning
          </Text>
        </View>
      </View>

      {/* Size Variants */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Size Variants
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Badge type="positive" icon={Check} size="xs" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            XS
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            SM
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            MD
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            LG
          </Text>
        </View>
      </View>

      {/* All Types with Different Sizes */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        All Types - Small Size
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Badge type="neutral" icon={Info} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Neutral
          </Text>
        </View>
        <View className="items-center">
          <Badge type="highlight" icon={Add} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Highlight
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Positive
          </Text>
        </View>
        <View className="items-center">
          <Badge type="critical" icon={Alert} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Critical
          </Text>
        </View>
        <View className="items-center">
          <Badge type="warning" icon={Warning} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Warning
          </Text>
        </View>
      </View>

      {/* All Types with Large Size */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        All Types - Large Size
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <Badge type="neutral" icon={Info} size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Neutral
          </Text>
        </View>
        <View className="items-center">
          <Badge type="highlight" icon={Add} size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Highlight
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Positive
          </Text>
        </View>
        <View className="items-center">
          <Badge type="critical" icon={Alert} size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Critical
          </Text>
        </View>
        <View className="items-center">
          <Badge type="warning" icon={Warning} size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Warning
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
