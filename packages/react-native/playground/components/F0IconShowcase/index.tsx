import React, { useState, useEffect } from "react";
import { ScrollView, View, TextInput, Pressable } from "react-native";
import { F0Icon } from "../../../src/components/primitives/Icon";
import { F0Text } from "../../../src/components/primitives/Text/F0Text";
import { AppIcons, ModuleIcons } from "../../../src/icons";
import type { IconType } from "../../../src/components/primitives/Icon";
import { useCSSVariable } from "uniwind";

type IconCategoryType = "app" | "module";

interface IconDisplayProps {
  icon: IconType;
  name: string;
}

interface SizeVariantProps extends IconDisplayProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

interface StyledIconDisplayProps extends IconDisplayProps {
  className: string;
}

const IconDisplay = ({ icon, name }: IconDisplayProps) => {
  return (
    <View className="mb-4 w-20 items-center p-2">
      <F0Icon icon={icon} size="md" />
      <View className="mt-2">
        <F0Text variant="body-xs-medium" color="secondary" align="center">
          {name}
        </F0Text>
      </View>
    </View>
  );
};

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => {
  return (
    <View className="items-center justify-center">
      <F0Icon icon={icon} size={size} />
      <View className="mt-2">
        <F0Text variant="body-xs-medium" color="secondary" align="center">
          {name}
        </F0Text>
      </View>
    </View>
  );
};

const StyledIconDisplay = ({
  icon,
  name,
  className,
}: StyledIconDisplayProps) => {
  return (
    <View className="items-center justify-center">
      <F0Icon icon={icon} size="lg" className={className} />
      <View className="mt-2">
        <F0Text variant="body-xs-medium" color="secondary" align="center">
          {name}
        </F0Text>
      </View>
    </View>
  );
};

export function F0IconShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<IconCategoryType>("app");
  const [appIconList, setAppIconList] = useState<
    Array<{ name: string; icon: IconType }>
  >([]);
  const [moduleIconList, setModuleIconList] = useState<
    Array<{ name: string; icon: IconType }>
  >([]);

  const [
    f0Foreground,
    f0Background,
    f0Border,
    f0BackgroundSecondary,
    f0IconInfo,
  ] = useCSSVariable([
    "--color-f0-foreground",
    "--color-f0-background",
    "--color-f0-border",
    "--color-f0-background-secondary",
    "--color-f0-icon-info",
  ]);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value;
    if (typeof value === "number") return String(value);
    return "#000000";
  };

  // Generate icon lists on component mount
  useEffect(() => {
    // Create array of app icons
    const appIcons = Object.entries(AppIcons).map(([name, icon]) => ({
      name,
      icon,
    }));

    // Create array of module icons
    const modIcons = Object.entries(ModuleIcons).map(([name, icon]) => ({
      name,
      icon,
    }));

    setAppIconList(appIcons);
    setModuleIconList(modIcons);
  }, []);

  // Filter icons based on search term and selected type
  const filteredIcons = (
    selectedType === "app" ? appIconList : moduleIconList
  ).filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const TabButton = ({
    type,
    label,
    count,
  }: {
    type: IconCategoryType;
    label: string;
    count: number;
  }) => {
    const isSelected = selectedType === type;

    return (
      <View className="flex-1">
        <Pressable
          onPress={() => setSelectedType(type)}
          className="rounded-lg px-4 py-2"
          style={{
            backgroundColor: isSelected
              ? asString(f0IconInfo)
              : asString(f0BackgroundSecondary),
          }}
        >
          {isSelected ? (
            <F0Text variant="body-sm-semibold" align="center" color="inverse">
              {label} ({count})
            </F0Text>
          ) : (
            <F0Text variant="body-sm-semibold" align="center">
              {label} ({count})
            </F0Text>
          )}
        </Pressable>
        {isSelected && (
          <View
            className="mt-1 h-0.5"
            style={{ backgroundColor: asString(f0IconInfo) }}
          />
        )}
      </View>
    );
  };

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* Search Section */}
      <View className="mb-4">
        <F0Text variant="heading-lg" className="mb-2">
          Search Icons
        </F0Text>
        <TextInput
          className="mb-4 rounded-lg border p-3"
          style={{
            borderColor: asString(f0Border),
            color: asString(f0Foreground),
            backgroundColor: asString(f0Background),
          }}
          placeholder="Search icons..."
          placeholderTextColor={asString(f0Foreground)}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <View className="mb-4 flex-row gap-2">
          <TabButton
            type="app"
            label="App Icons"
            count={
              appIconList.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()),
              ).length
            }
          />
          <TabButton
            type="module"
            label="Module Icons"
            count={
              moduleIconList.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()),
              ).length
            }
          />
        </View>
      </View>

      {/* Icons Grid */}
      {filteredIcons.length > 0 ? (
        <View className="mb-6 flex-row flex-wrap justify-start">
          {filteredIcons.map((item) => (
            <IconDisplay key={item.name} icon={item.icon} name={item.name} />
          ))}
        </View>
      ) : (
        <View className="mb-6 items-center justify-center p-10">
          <F0Text variant="body-md-default">
            {`No icons found matching "${searchTerm}"`}
          </F0Text>
        </View>
      )}

      {/* Size Variants */}
      <F0Text variant="heading-lg" className="mt-6 mb-4">
        Size Variants
      </F0Text>
      <View
        className="mb-8 flex-row justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={AppIcons.ChevronDown} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.ChevronDown} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.ChevronDown} name="md" size="md" />
        <SizeVariant icon={AppIcons.ChevronDown} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.ChevronDown} name="xl" size="xl" />
      </View>

      <View
        className="mb-8 flex-row justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={AppIcons.Archive} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.Archive} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.Archive} name="md" size="md" />
        <SizeVariant icon={AppIcons.Archive} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.Archive} name="xl" size="xl" />
      </View>

      <View
        className="mb-8 flex-row justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={ModuleIcons.Home} name="xs" size="xs" />
        <SizeVariant icon={ModuleIcons.Home} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Home} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Home} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.Home} name="xl" size="xl" />
      </View>

      {/* Color Customization */}
      <F0Text variant="heading-lg" className="mt-6 mb-4">
        Color Customization
      </F0Text>
      <View
        className="flex-row justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <StyledIconDisplay
          icon={AppIcons.Heart}
          name="critical"
          className="text-f0-icon-critical"
        />
        <StyledIconDisplay
          icon={AppIcons.InfoCircle}
          name="info"
          className="text-f0-icon-info"
        />
        <StyledIconDisplay
          icon={AppIcons.Check}
          name="positive"
          className="text-f0-icon-positive"
        />
        <StyledIconDisplay
          icon={AppIcons.Warning}
          name="warning"
          className="text-f0-icon-warning"
        />
      </View>
    </ScrollView>
  );
}
