import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TextInput, Pressable } from "react-native";
import { Icon, type IconType } from "../../../src/components/Icon";
import { AppIcons, ModuleIcons } from "../../../src/icons";
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
  const [f0Foreground] = useCSSVariable(['--color-f0-foreground']);
  
  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  return (
    <View className="items-center w-20 mb-4 p-2">
      <Icon icon={icon} size="md" />
      <Text className="text-sm mt-2 text-center" style={{ color: asString(f0Foreground) }}>
        {name}
      </Text>
    </View>
  );
};

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => {
  const [f0Foreground] = useCSSVariable(['--color-f0-foreground']);
  
  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  return (
    <View className="items-center justify-center">
      <Icon icon={icon} size={size} />
      <Text className="text-xs mt-2 text-center" style={{ color: asString(f0Foreground) }}>
        {name}
      </Text>
    </View>
  );
};

const StyledIconDisplay = ({ icon, name, className }: StyledIconDisplayProps) => {
  const [f0Foreground] = useCSSVariable(['--color-f0-foreground']);
  
  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  return (
    <View className="items-center justify-center">
      <Icon icon={icon} size="lg" className={className} />
      <Text className="text-xs mt-2 text-center" style={{ color: asString(f0Foreground) }}>
        {name}
      </Text>
    </View>
  );
};

export function IconShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<IconCategoryType>("app");
  const [appIconList, setAppIconList] = useState<Array<{ name: string; icon: IconType }>>([]);
  const [moduleIconList, setModuleIconList] = useState<Array<{ name: string; icon: IconType }>>([]);

  const [f0Foreground, f0Background, f0Border, f0BackgroundSecondary, f0IconInfo] = useCSSVariable([
    '--color-f0-foreground',
    '--color-f0-background',
    '--color-f0-border',
    '--color-f0-background-secondary',
    '--color-f0-icon-info',
  ]);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
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
          className="py-2 px-4 rounded-lg"
          style={{
            backgroundColor: isSelected ? asString(f0IconInfo) : asString(f0BackgroundSecondary),
          }}
        >
          <Text
            className="text-center font-medium text-sm"
            style={{
              color: isSelected ? '#ffffff' : asString(f0Foreground),
            }}
          >
            {label} ({count})
          </Text>
        </Pressable>
        {isSelected && (
          <View 
            className="h-0.5 mt-1"
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
        <Text className="text-lg font-bold mb-2" style={{ color: asString(f0Foreground) }}>
          Search Icons
        </Text>
        <TextInput
          className="border rounded-lg p-3 mb-4"
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

        <View className="flex-row gap-2 mb-4">
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
        <View className="flex-row flex-wrap justify-start mb-6">
          {filteredIcons.map((item) => (
            <IconDisplay key={item.name} icon={item.icon} name={item.name} />
          ))}
        </View>
      ) : (
        <View className="items-center justify-center p-10 mb-6">
          <Text className="text-lg" style={{ color: asString(f0Foreground) }}>
            {`No icons found matching "${searchTerm}"`}
          </Text>
        </View>
      )}

      {/* Size Variants */}
      <Text className="text-lg font-bold mb-4 mt-6" style={{ color: asString(f0Foreground) }}>
        Size Variants
      </Text>
      <View 
        className="flex-row justify-around mb-8 p-4 rounded-lg"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={AppIcons.ChevronDown} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.ChevronDown} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.ChevronDown} name="md" size="md" />
        <SizeVariant icon={AppIcons.ChevronDown} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.ChevronDown} name="xl" size="xl" />
      </View>

      <View 
        className="flex-row justify-around mb-8 p-4 rounded-lg"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={AppIcons.Archive} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.Archive} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.Archive} name="md" size="md" />
        <SizeVariant icon={AppIcons.Archive} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.Archive} name="xl" size="xl" />
      </View>

      <View 
        className="flex-row justify-around mb-8 p-4 rounded-lg"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={ModuleIcons.Home} name="xs" size="xs" />
        <SizeVariant icon={ModuleIcons.Home} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Home} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Home} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.Home} name="xl" size="xl" />
      </View>

      {/* Styling */}
      <Text className="text-lg font-bold mb-4 mt-6" style={{ color: asString(f0Foreground) }}>
        Styling Icons
      </Text>
      <View 
        className="flex-row justify-around p-4 rounded-lg"
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
