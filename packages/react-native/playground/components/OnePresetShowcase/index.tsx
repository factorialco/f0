import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { OnePreset } from "../../../src/components/OnePreset";
import { useCSSVariable } from "uniwind";

export function OnePresetShowcase() {
  const [f1Foreground] = useCSSVariable(['--color-f1-foreground']);
  const [selectedPresets, setSelectedPresets] = useState<Set<string>>(new Set());

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  const handlePresetClick = (presetId: string) => {
    const newSelected = new Set(selectedPresets);
    if (newSelected.has(presetId)) {
      newSelected.delete(presetId);
    } else {
      newSelected.add(presetId);
    }
    setSelectedPresets(newSelected);
  };

  return (
    <ScrollView 
      className="p-4" 
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* Basic Variants */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Basic Variants
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OnePreset label="Default" />
        <OnePreset label="Selected" selected />
      </View>

      {/* With Numbers */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Numbers
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OnePreset label="Inbox" number={5} />
        <OnePreset label="Messages" number={12} />
        <OnePreset label="Notifications" number={99} />
        <OnePreset label="Tasks" number={150} />
      </View>

      {/* Selected with Numbers */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Selected with Numbers
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OnePreset label="Inbox" number={5} selected />
        <OnePreset label="Messages" number={12} selected />
        <OnePreset label="Notifications" number={99} selected />
        <OnePreset label="Tasks" number={150} selected />
      </View>

      {/* Different Number Values */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Different Number Values
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OnePreset label="Zero" number={0} />
        <OnePreset label="One" number={1} />
        <OnePreset label="Small" number={9} />
        <OnePreset label="Medium" number={42} />
        <OnePreset label="Large" number={999} />
      </View>

      {/* Interactive (Clickable) */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Interactive (Click to Toggle Selection)
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OnePreset 
          label="Clickable" 
          selected={selectedPresets.has("preset1")}
          onClick={() => handlePresetClick("preset1")}
        />
        <OnePreset 
          label="With Number" 
          number={23}
          selected={selectedPresets.has("preset2")}
          onClick={() => handlePresetClick("preset2")}
        />
        <OnePreset 
          label="High Count" 
          number={456}
          selected={selectedPresets.has("preset3")}
          onClick={() => handlePresetClick("preset3")}
        />
      </View>

      {/* Different Labels */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Different Labels
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OnePreset label="Short" />
        <OnePreset label="Medium Label" />
        <OnePreset label="This is a longer label" />
        <OnePreset label="Very Long Label Text Here" number={7} />
      </View>

      {/* All Variants Summary */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        All Variants Summary
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OnePreset label="Default" />
        <OnePreset label="Selected" selected />
        <OnePreset label="With Number" number={5} />
        <OnePreset label="Selected Number" number={12} selected />
        <OnePreset label="Large Number" number={999} />
        <OnePreset label="Selected Large" number={999} selected />
      </View>

      {/* Use Cases */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Common Use Cases
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OnePreset label="All" number={0} />
        <OnePreset label="Unread" number={23} />
        <OnePreset label="Important" number={5} selected />
        <OnePreset label="Archived" number={150} />
        <OnePreset label="Drafts" number={3} />
        <OnePreset label="Sent" number={42} />
      </View>
    </ScrollView>
  );
}
