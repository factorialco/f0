import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { useCSSVariable, withUniwind } from "uniwind";
import { ActivityShowcase } from "../../components/ActivityShowcase";
import { AvatarShowcase } from "../../components/AvatarShowcase";
import { BadgeShowcase } from "../../components/BadgeShowcase";
import { ButtonShowcase } from "../../components/ButtonShowcase";
import { CounterShowcase } from "../../components/CounterShowcase";
import { DataListShowcase } from "../../components/DataListShowcase";
import { DetailsItemShowcase } from "../../components/DetailsItemShowcase";
import { DetailsItemsListShowcase } from "../../components/DetailsItemsListShowcase";
import { IconShowcase } from "../../components/IconShowcase";
import { OneChipShowcase } from "../../components/OneChipShowcase";
import { OnePresetShowcase } from "../../components/OnePresetShowcase";
import { PageHeaderShowcase } from "../../components/PageHeaderShowcase";
import { Select } from "../../components/Select";
import { TagShowcase } from "../../components/TagShowcase";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";

const SafeAreaView = withUniwind(RNSafeAreaView);

type ComponentType = "activity" | "avatar" | "badge" | "button" | "counter" | "datalist" | "detailsitem" | "detailsitemslist" | "icon" | "onechip" | "onepreset" | "pageheader" | "tag";

const componentOptions = [
  { value: "activity" as ComponentType, label: "Activity" },
  { value: "avatar" as ComponentType, label: "Avatar" },
  { value: "badge" as ComponentType, label: "Badge" },
  { value: "button" as ComponentType, label: "Button" },
  { value: "counter" as ComponentType, label: "Counter" },
  { value: "datalist" as ComponentType, label: "DataList" },
  { value: "detailsitem" as ComponentType, label: "DetailsItem" },
  { value: "detailsitemslist" as ComponentType, label: "DetailsItemsList" },
  { value: "icon" as ComponentType, label: "Icon" },
  { value: "onechip" as ComponentType, label: "OneChip" },
  { value: "onepreset" as ComponentType, label: "OnePreset" },
  { value: "pageheader" as ComponentType, label: "PageHeader" },
  { value: "tag" as ComponentType, label: "Tag" },
];

export default function ComponentsShowcase() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentType>("activity");
  
  const [f1Background, f1Foreground] = useCSSVariable([
    '--color-f1-background',
    '--color-f1-foreground',
  ]);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "activity":
        return <ActivityShowcase />;
      case "avatar":
        return <AvatarShowcase />;
      case "badge":
        return <BadgeShowcase />;
      case "button":
        return <ButtonShowcase />;
      case "counter":
        return <CounterShowcase />;
      case "datalist":
        return <DataListShowcase />;
      case "detailsitem":
        return <DetailsItemShowcase />;
      case "detailsitemslist":
        return <DetailsItemsListShowcase />;
      case "icon":
        return <IconShowcase />;
      case "onechip":
        return <OneChipShowcase />;
      case "onepreset":
        return <OnePresetShowcase />;
      case "pageheader":
        return <PageHeaderShowcase />;
      case "tag":
        return <TagShowcase />;
      default:
        return <ButtonShowcase />;
    }
  };

  return (
    <SafeAreaView 
      className="flex-1 bg-f1-background" 
      edges={['top', 'bottom']}
    >
      <View className="flex-1" style={{ backgroundColor: asString(f1Background) }}>
        <View className="px-4 pt-3 pb-2">
          <View className="mb-2">
            <Text className="text-xl font-bold mb-1" style={{ color: asString(f1Foreground) }}>
              Components Showcase
            </Text>
            <ThemeSwitcher />
          </View>
          
          <View className="mb-2">
            <Text className="text-sm font-semibold mb-1" style={{ color: asString(f1Foreground) }}>
              Select Component
            </Text>
            <Select
              options={componentOptions}
              value={selectedComponent}
              onChange={setSelectedComponent}
            />
          </View>
        </View>
        
        <View className="flex-1" style={{ minHeight: 0 }}>
          {renderComponent()}
        </View>
      </View>
    </SafeAreaView>
  );
}
