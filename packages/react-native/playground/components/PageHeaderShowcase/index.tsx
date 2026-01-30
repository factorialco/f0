import React from "react";
import { ScrollView, Text } from "react-native";
import { PageHeader } from "../../../src/components/Navigation/PageHeader";
import { useCSSVariable } from "uniwind";

export function PageHeaderShowcase() {
  const [f1Foreground] = useCSSVariable(['--color-f1-foreground']);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  return (
    <ScrollView 
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      <Text className="text-lg font-bold my-4 text-f1-foreground px-4" style={{ color: asString(f1Foreground) }}>
        Default
      </Text>
      <PageHeader title="Timesheet" />

      <Text className="text-lg font-bold my-4 text-f1-foreground px-4" style={{ color: asString(f1Foreground) }}>
        With action
      </Text>
      <PageHeader
        title="Home"
        actions={[
          {
            type: "notifications",
            label: "Notifications",
            onPress: () => console.log("Notifications pressed"),
          },
        ]}
      />

      <Text className="text-lg font-bold my-4 text-f1-foreground px-4" style={{ color: asString(f1Foreground) }}>
        With action and badge
      </Text>
      <PageHeader
        title="Profile"
        actions={[
          {
            type: "notifications",
            label: "Notifications",
            onPress: () => console.log("Notifications pressed"),
            showBadge: true,
          },
        ]}
      />
    </ScrollView>
  );
}
