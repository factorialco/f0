import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconType } from "./index";
import { AppIcons, ModuleIcons } from "../../icons";
// import { type IconColorName } from "../../lib/colors";

const meta: Meta<typeof Icon> = {
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
  icon: IconType;
  name: string;
}

interface SizeVariantProps extends IconDisplayProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

interface StyledIconDisplayProps extends IconDisplayProps {
  color: string;
}

const IconDisplay = ({ icon, name }: IconDisplayProps) => (
  <View className="mb-4 w-20 items-center p-2">
    <Icon icon={icon} size="md" />
    <Text className="mt-2 text-center text-sm text-f1-foreground">{name}</Text>
  </View>
);

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => (
  <View className="items-center justify-center">
    <Icon icon={icon} size={size} />
    <Text className="mt-2 text-center text-xs">{name}</Text>
  </View>
);

const StyledIconDisplay = ({ icon, name, color }: StyledIconDisplayProps) => (
  <View className="items-center justify-center">
    <Icon icon={icon} size="lg" color={color} />
    <Text className="mt-2 text-center text-xs text-f1-foreground">{name}</Text>
  </View>
);

type IconCategory = "app" | "module";

const IconsShowcaseComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<IconCategory>("app");
  const [appIconList, setAppIconList] = useState<
    Array<{ name: string; icon: IconType }>
  >([]);
  const [moduleIconList, setModuleIconList] = useState<
    Array<{ name: string; icon: IconType }>
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
    type: IconCategory;
    label: string;
    count: number;
  }) => (
    <View className="flex-1">
      <TouchableOpacity
        onPress={() => setSelectedType(type)}
        className={`px-4 py-2 ${
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
      {selectedType === type && <View className="bg-blue-500 h-0.5" />}
    </View>
  );

  return (
    <ScrollView>
      <View className="mb-4">
        <Text className="font-bold mb-2 text-lg text-f1-foreground">
          Search Icons
        </Text>
        <TextInput
          className="border-gray-300 mb-4 rounded-lg border p-2 text-f1-foreground"
          placeholder="Search icons..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <View className="mb-4 flex-row overflow-hidden rounded-lg">
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
            No icons found matching &quot;{searchTerm}&quot;
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export const IconsShowcase: Story = {
  args: {
    icon: AppIcons.Archive,
  },
  render: () => <IconsShowcaseComponent />,
};

export const SizeVariants: Story = {
  args: {
    icon: AppIcons.ChevronDown,
  },
  render: () => (
    <ScrollView>
      <Text className="font-bold mb-4 mt-6 text-lg">Size Variants</Text>
      <View className="bg-gray-100 mb-8 flex-row justify-around rounded-lg p-4">
        <SizeVariant icon={AppIcons.ChevronDown} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.ChevronDown} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.ChevronDown} name="md" size="md" />
        <SizeVariant icon={AppIcons.ChevronDown} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.ChevronDown} name="xl" size="xl" />
      </View>

      <View className="bg-gray-100 mb-8 flex-row justify-around rounded-lg p-4">
        <SizeVariant icon={AppIcons.Archive} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.Archive} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.Archive} name="md" size="md" />
        <SizeVariant icon={AppIcons.Archive} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.Archive} name="xl" size="xl" />
      </View>

      <View className="bg-gray-100 flex-row justify-around rounded-lg p-4">
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
      <Text className="font-bold mb-4 mt-6 text-lg">Styling Icons</Text>
      <View className="bg-gray-100 flex-row justify-around rounded-lg p-4">
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
