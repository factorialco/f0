import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { OneChip } from "../../../src/components/OneChip";
import { AppIcons } from "../../../src/icons";
import { useCSSVariable } from "uniwind";

const { Add, Check, Alert, Archive, Home, Settings } = AppIcons;

export function OneChipShowcase() {
  const [f1Foreground] = useCSSVariable(['--color-f1-foreground']);
  const [selectedChips, setSelectedChips] = useState<Set<string>>(new Set());

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  const handleChipClick = (chipId: string) => {
    const newSelected = new Set(selectedChips);
    if (newSelected.has(chipId)) {
      newSelected.delete(chipId);
    } else {
      newSelected.add(chipId);
    }
    setSelectedChips(newSelected);
  };

  const handleChipClose = (chipId: string) => {
    const newSelected = new Set(selectedChips);
    newSelected.delete(chipId);
    setSelectedChips(newSelected);
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
        <OneChip label="Default" />
        <OneChip label="Selected" variant="selected" />
      </View>

      {/* With Icons */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Icons
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OneChip label="Add" icon={Add} />
        <OneChip label="Check" icon={Check} />
        <OneChip label="Alert" icon={Alert} />
        <OneChip label="Archive" icon={Archive} />
        <OneChip label="Home" icon={Home} />
        <OneChip label="Settings" icon={Settings} />
      </View>

      {/* With Close Button */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Close Button
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OneChip 
          label="Removable" 
          onClose={() => console.log("Close clicked")}
        />
        <OneChip 
          label="Selected Removable" 
          variant="selected"
          onClose={() => console.log("Close clicked")}
        />
      </View>

      {/* With Icon and Close */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Icon and Close
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OneChip 
          label="Tag" 
          icon={Check}
          onClose={() => console.log("Close clicked")}
        />
        <OneChip 
          label="Selected Tag" 
          variant="selected"
          icon={Add}
          onClose={() => console.log("Close clicked")}
        />
      </View>

      {/* Interactive (Clickable) */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Interactive (Click to Toggle Selection)
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OneChip 
          label="Clickable" 
          variant={selectedChips.has("chip1") ? "selected" : "default"}
          onClick={() => handleChipClick("chip1")}
        />
        <OneChip 
          label="With Icon" 
          icon={Check}
          variant={selectedChips.has("chip2") ? "selected" : "default"}
          onClick={() => handleChipClick("chip2")}
        />
        <OneChip 
          label="With Close" 
          variant={selectedChips.has("chip3") ? "selected" : "default"}
          onClick={() => handleChipClick("chip3")}
          onClose={() => handleChipClose("chip3")}
        />
        <OneChip 
          label="Full Featured" 
          icon={Archive}
          variant={selectedChips.has("chip4") ? "selected" : "default"}
          onClick={() => handleChipClick("chip4")}
          onClose={() => handleChipClose("chip4")}
        />
      </View>

      {/* Different Labels */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Different Labels
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OneChip label="Short" />
        <OneChip label="Medium Label" />
        <OneChip label="This is a longer label" />
        <OneChip label="Very Long Label Text Here" />
      </View>

      {/* All Variants Summary */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        All Variants Summary
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <OneChip label="Default" />
        <OneChip label="Selected" variant="selected" />
        <OneChip label="With Icon" icon={Add} />
        <OneChip label="Selected Icon" variant="selected" icon={Check} />
        <OneChip label="Closable" onClose={() => {}} />
        <OneChip label="Selected Closable" variant="selected" onClose={() => {}} />
        <OneChip label="Full" icon={Settings} onClose={() => {}} />
        <OneChip label="Full Selected" variant="selected" icon={Home} onClose={() => {}} />
      </View>
    </ScrollView>
  );
}
