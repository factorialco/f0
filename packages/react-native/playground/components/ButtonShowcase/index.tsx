import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Button } from "../../../src/components/Button";
import { AppIcons } from "../../../src/icons";
import { useCSSVariable } from "uniwind";

const { Add, Archive, Delete, Save } = AppIcons;

export function ButtonShowcase() {
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
      {/* Basic Variants */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Default Variants
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6" style={{ width: "100%" }}>
        <Button
          variant="default"
          label="Default"
          accessibilityHint="Primary action button"
        />
        <Button
          variant="critical"
          label="Critical"
          accessibilityHint="Destructive action button"
        />
        <Button
          variant="neutral"
          label="Neutral"
          accessibilityHint="Secondary action button"
        />
        <Button
          variant="ghost"
          label="Ghost"
          accessibilityHint="Subtle action button"
        />
        <Button
          variant="outline"
          label="Outline"
          accessibilityHint="Alternative action button"
        />
        <Button
          variant="promote"
          label="Promote"
          accessibilityHint="Promotional action button"
        />
      </View>

      {/* With Icons */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Icons
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6" style={{ width: "100%" }}>
        <Button
          variant="default"
          label="Add item"
          icon={Add}
          accessibilityHint="Add a new item"
        />
        <Button
          variant="critical"
          label="Delete"
          icon={Delete}
          accessibilityHint="Delete selected item"
        />
        <Button
          variant="neutral"
          label="Archive"
          icon={Archive}
          accessibilityHint="Archive selected item"
        />
        <Button
          variant="ghost"
          label="Save"
          icon={Save}
          accessibilityHint="Save current changes"
        />
        <Button
          variant="outline"
          label="Add more"
          icon={Add}
          accessibilityHint="Add additional items"
        />
        <Button
          variant="promote"
          label="New"
          icon={Add}
          accessibilityHint="Try new feature"
        />
      </View>

      {/* Icon Only */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Icon Only
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <Button
          variant="default"
          label="Add"
          icon={Add}
          hideLabel
          round
          accessibilityHint="Add new item"
        />
        <Button
          variant="critical"
          label="Delete"
          icon={Delete}
          hideLabel
          round
          accessibilityHint="Delete selected item"
        />
        <Button
          variant="neutral"
          label="Archive"
          icon={Archive}
          hideLabel
          round
          accessibilityHint="Archive selected item"
        />
        <Button
          variant="ghost"
          label="Save"
          icon={Save}
          hideLabel
          round
          accessibilityHint="Save current changes"
        />
        <Button
          variant="outline"
          label="Add"
          icon={Add}
          hideLabel
          round
          accessibilityHint="Add new item"
        />
        <Button
          variant="outline"
          label="Add"
          icon={AppIcons.Bell}
          hideLabel
          round
          showBadge
          accessibilityHint="Add new item with notification"
        />
        <Button
          variant="promote"
          label="Add"
          icon={Add}
          hideLabel
          round
          accessibilityHint="Add new feature"
        />
      </View>

      {/* Sizes */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>Sizes</Text>
      <View className="flex-row items-center gap-2 mb-6">
        <Button size="sm" label="Small" accessibilityHint="Small size button" />
        <Button
          size="md"
          label="Medium"
          accessibilityHint="Medium size button"
        />
        <Button size="lg" label="Large" accessibilityHint="Large size button" />
      </View>

      {/* States */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>States</Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <Button label="Default" accessibilityHint="Interactive button" />
        <Button
          disabled
          label="Disabled"
          accessibilityHint="Non-interactive button"
        />
        <Button
          loading
          label="Loading"
          accessibilityHint="Button in loading state"
        />
      </View>

      {/* Icon Button Groups */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Icon Button Groups
      </Text>
      <View className="flex-row items-center gap-2 mb-6">
        <Button
          variant="ghost"
          icon={Add}
          hideLabel
          round
          label="Add"
          accessibilityHint="Add new item to group"
        />
        <Button
          variant="ghost"
          icon={Archive}
          hideLabel
          round
          label="Archive"
          accessibilityHint="Archive selected items"
        />
        <Button
          variant="ghost"
          icon={Delete}
          hideLabel
          round
          label="Delete"
          accessibilityHint="Delete selected items"
        />
      </View>

      {/* Icon Only Sizes */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Icon Only Sizes
      </Text>
      <View className="flex-row items-center gap-2 mb-6">
        <Button
          variant="default"
          icon={Add}
          hideLabel
          round
          size="sm"
          label="Add"
          accessibilityHint="Small icon-only button"
        />
        <Button
          variant="default"
          icon={Add}
          hideLabel
          round
          size="md"
          label="Add"
          accessibilityHint="Medium icon-only button"
        />
        <Button
          variant="default"
          icon={Add}
          hideLabel
          round
          size="lg"
          label="Add"
          accessibilityHint="Large icon-only button"
        />
      </View>
      <View className="flex-row items-center gap-2 mb-6">
        <Button
          variant="critical"
          icon={Delete}
          hideLabel
          round
          size="sm"
          label="Delete"
          accessibilityHint="Small icon-only button"
        />
        <Button
          variant="critical"
          icon={Delete}
          hideLabel
          round
          size="md"
          label="Delete"
          accessibilityHint="Medium icon-only button"
        />
        <Button
          variant="critical"
          icon={Delete}
          hideLabel
          round
          size="lg"
          label="Delete"
          accessibilityHint="Large icon-only button"
        />
      </View>

      {/* Emoji Buttons */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Emoji Buttons
      </Text>
      <View className="flex-row items-center gap-2 mb-6">
        <Button
          emoji="🥰"
          label="Love"
          variant="neutral"
          accessibilityHint="Express love reaction"
        />
        <Button
          emoji="👍"
          label="Like"
          variant="neutral"
          accessibilityHint="Express like reaction"
        />
        <Button
          emoji="🎉"
          label="Celebrate"
          variant="neutral"
          accessibilityHint="Express celebration reaction"
        />
        <Button
          emoji="🥰"
          label="Love"
          variant="neutral"
          hideLabel
          accessibilityHint="Express love reaction"
        />
      </View>

      {/* Notification Badge */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Notification Badge
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <Button
          variant="outline"
          label="Messages"
          showBadge
          accessibilityHint="Messages button with notification"
        />
        <Button
          variant="outline"
          label="Archive"
          icon={Archive}
          showBadge
          accessibilityHint="Archive with notifications"
        />
        <Button
          variant="outline"
          label="Notifications"
          icon={Add}
          hideLabel
          round
          showBadge
          accessibilityHint="Icon-only button with notification badge"
        />
      </View>

      {/* Async Example */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Async Action
      </Text>
      <View className="mb-6 items-start">
        <Button
          label="Save Changes"
          icon={Save}
          accessibilityHint="Save changes with loading state"
          onPress={async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Changes saved!");
          }}
        />
      </View>
    </ScrollView>
  );
}
