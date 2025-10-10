import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon, AppIcons, ModuleIcons } from "@factorialco/f0-react-native";
import { type IconColorName } from "@factorialco/f0-react-native/src/lib/colors";

const meta = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  args: {
    size: "md",
    icon: AppIcons.ChevronDown,
  },
  decorators: [
    (Story) => (
      <View className="flex-1 p-4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// Helper components with proper TypeScript types
interface IconDisplayProps {
  icon: any; // Using any to avoid import errors
  name: string;
}

interface SizeVariantProps extends IconDisplayProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

interface StyledIconDisplayProps extends IconDisplayProps {
  color: IconColorName;
}

const IconDisplay = ({ icon, name }: IconDisplayProps) => (
  <View className="items-center w-20 mb-4 p-2">
    <Icon icon={icon} size="md" />
    <Text className="text-sm mt-2 text-center text-f1-foreground">{name}</Text>
  </View>
);

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => (
  <View className="items-center justify-center">
    <Icon icon={icon} size={size} />
    <Text className="text-xs mt-2 text-center">{name}</Text>
  </View>
);

const StyledIconDisplay = ({ icon, name, color }: StyledIconDisplayProps) => (
  <View className="items-center justify-center">
    <Icon icon={icon} size="lg" color={color} />
    <Text className="text-xs mt-2 text-center text-f1-foreground">{name}</Text>
  </View>
);

type IconType = "app" | "module";

export const IconsShowcase: Story = {
  args: {
    icon: AppIcons.Archive,
  },
  render: () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState<IconType>("app");
    const [appIconList, setAppIconList] = useState<
      Array<{ name: string; icon: any }>
    >([]);
    const [moduleIconList, setModuleIconList] = useState<
      Array<{ name: string; icon: any }>
    >([]);

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
      type: IconType;
      label: string;
      count: number;
    }) => (
      <View className="flex-1">
        <TouchableOpacity
          onPress={() => setSelectedType(type)}
          className={`py-2 px-4 ${
            selectedType === type ? "bg-f1-icon-info" : "bg-f1-icon-secondary"
          }`}
        >
          <Text
            className={`text-center font-medium ${
              selectedType === type ? "text-white" : "text-gray-700"
            }`}
          >
            {label} ({count})
          </Text>
        </TouchableOpacity>
        {selectedType === type && <View className="h-0.5 bg-blue-500" />}
      </View>
    );

    return (
      <ScrollView>
        <View className="mb-4">
          <Text className="text-lg font-bold mb-2 text-f1-foreground">
            Search Icons
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-2 mb-4 text-f1-foreground"
            placeholder="Search icons..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />

          <View className="flex-row rounded-lg overflow-hidden mb-4">
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

        {filteredIcons.length > 0 ? (
          <View className="flex-row flex-wrap justify-start">
            {filteredIcons.map((item) => (
              <IconDisplay key={item.name} icon={item.icon} name={item.name} />
            ))}
          </View>
        ) : (
          <View className="items-center justify-center p-10">
            <Text className="text-lg text-f1-foreground">
              No icons found matching "{searchTerm}"
            </Text>
          </View>
        )}
      </ScrollView>
    );
  },
};

export const SizeVariants: Story = {
  args: {
    icon: AppIcons.ChevronDown,
  },
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 mt-6">Size Variants</Text>
      <View className="flex-row justify-around mb-8 p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={AppIcons.ChevronDown} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.ChevronDown} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.ChevronDown} name="md" size="md" />
        <SizeVariant icon={AppIcons.ChevronDown} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.ChevronDown} name="xl" size="xl" />
      </View>

      <View className="flex-row justify-around mb-8 p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={AppIcons.Archive} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.Archive} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.Archive} name="md" size="md" />
        <SizeVariant icon={AppIcons.Archive} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.Archive} name="xl" size="xl" />
      </View>

      <View className="flex-row justify-around p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={ModuleIcons.Home} name="xs" size="xs" />
        <SizeVariant icon={ModuleIcons.Home} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Home} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Home} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.Home} name="xl" size="xl" />
      </View>
    </ScrollView>
  ),
};

export const Styling: Story = {
  args: {
    icon: AppIcons.Heart,
    className: "text-f1-icon-critical",
  },
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 mt-6">Styling Icons</Text>
      <View className="flex-row justify-around p-4 bg-gray-100 rounded-lg">
        <StyledIconDisplay
          icon={AppIcons.Heart}
          name="critical"
          color="text-f1-icon-critical"
        />
        <StyledIconDisplay
          icon={AppIcons.InfoCircle}
          name="info"
          color="text-f1-icon-info"
        />
        <StyledIconDisplay
          icon={AppIcons.Check}
          name="positive"
          color="text-f1-icon-positive"
        />
        <StyledIconDisplay
          icon={AppIcons.Warning}
          name="warning"
          color="text-f1-icon-warning"
        />
      </View>
    </ScrollView>
  ),
};
