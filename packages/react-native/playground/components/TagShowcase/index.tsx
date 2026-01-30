import React from "react";
import { ScrollView, View, Text } from "react-native";
import { AlertTag, DotTag, RawTag } from "../../../src/components/Tags/exports";
import { AppIcons } from "../../../src/icons";
import { useCSSVariable } from "uniwind";

const { Check, Alert, Home, Settings, Archive } = AppIcons;

export function TagShowcase() {
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
      {/* AlertTag */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Alert Tag
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <AlertTag text="Info message" level="info" />
        <AlertTag text="Warning message" level="warning" />
        <AlertTag text="Critical message" level="critical" />
      </View>

      {/* DotTag with predefined colors */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Dot Tag - Predefined Colors
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <DotTag text="Viridian" color="viridian" />
        <DotTag text="Malibu" color="malibu" />
        <DotTag text="Yellow" color="yellow" />
        <DotTag text="Purple" color="purple" />
        <DotTag text="Lilac" color="lilac" />
        <DotTag text="Barbie" color="barbie" />
        <DotTag text="Smoke" color="smoke" />
        <DotTag text="Army" color="army" />
        <DotTag text="Flubber" color="flubber" />
        <DotTag text="Indigo" color="indigo" />
        <DotTag text="Camel" color="camel" />
      </View>

      {/* DotTag with custom colors */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Dot Tag - Custom Colors
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <DotTag text="Custom Red" customColor="hsl(0 84% 60%)" />
        <DotTag text="Custom Blue" customColor="hsl(216 90% 65%)" />
        <DotTag text="Custom Green" customColor="hsl(142 76% 36%)" />
      </View>

      {/* RawTag */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Raw Tag - Basic
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <RawTag text="Simple tag" />
        <RawTag text="Another tag" />
        <RawTag text="Tag with text" />
      </View>

      {/* RawTag with icons */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Raw Tag - With Icons
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <RawTag text="Home" icon={Home} />
        <RawTag text="Settings" icon={Settings} />
        <RawTag text="Archive" icon={Archive} />
        <RawTag text="Check" icon={Check} />
        <RawTag text="Alert" icon={Alert} />
      </View>

      {/* RawTag without border */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Raw Tag - No Border
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <RawTag text="No border" noBorder />
        <RawTag text="With icon" icon={Home} noBorder />
      </View>

      {/* RawTag with additional accessible text */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Raw Tag - With Accessible Text
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <RawTag 
          text="Tag" 
          additionalAccesibleText="Additional context for screen readers"
        />
        <RawTag 
          text="Icon Tag" 
          icon={Check}
          additionalAccesibleText="This tag has an icon"
        />
      </View>

      {/* All variants summary */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        All Variants Summary
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <AlertTag text="Alert" level="info" />
        <DotTag text="Dot" color="viridian" />
        <RawTag text="Raw" />
        <RawTag text="Raw Icon" icon={Home} />
        <RawTag text="Raw No Border" noBorder />
      </View>
    </ScrollView>
  );
}
