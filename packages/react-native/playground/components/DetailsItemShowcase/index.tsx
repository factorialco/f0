import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useCSSVariable } from "uniwind";
import { DetailsItem } from "../../../src/components/experimental/Lists/DetailsItem";

export function DetailsItemShowcase() {
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
      {/* Default */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Default
      </Text>
      <View className="mb-6">
        <DetailsItem
          title="Email"
          content={{
            type: "item",
            text: "alicia.keys@factorial.co",
            action: {
              type: "copy",
            },
          }}
        />
      </View>

      {/* With Two Content */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Two Content
      </Text>
      <View className="mb-6">
        <DetailsItem
          title="Address"
          content={[
            {
              type: "item",
              text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
              action: {
                type: "copy",
              },
            },
            {
              type: "item",
              text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
              action: {
                type: "copy",
              },
            },
          ]}
        />
      </View>

      {/* With Long Text */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Long Text
      </Text>
      <View className="mb-6">
        <DetailsItem
          title="Address"
          content={{
            type: "item",
            text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
            action: {
              type: "copy",
            },
          }}
        />
      </View>

      {/* With More Lines Than Allowed */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With More Lines Than Allowed
      </Text>
      <View className="mb-6">
        <DetailsItem
          title="Address"
          content={{
            type: "item",
            text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta\nPaseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
            action: {
              type: "copy",
            },
          }}
        />
      </View>
    </ScrollView>
  );
}
