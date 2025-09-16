import React from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { ModuleAvatar, ModuleIcons } from "@factorialco/f0-react-native";

const meta = {
  title: "Components/Avatars/ModuleAvatar",
  component: ModuleAvatar,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
  args: {
    size: "md",
    icon: ModuleIcons.Home,
  },
  decorators: [
    (Story) => (
      <View className="flex-1 p-4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ModuleAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

interface SizeVariantProps {
  icon: any;
  name: string;
  size: "sm" | "md" | "lg" | "xl";
}

interface IconDisplayProps {
  icon: any;
  name: string;
}

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => (
  <View className="items-center justify-center">
    <ModuleAvatar icon={icon} size={size} />
    <Text className="text-xs mt-2 text-center">{name}</Text>
  </View>
);

const IconDisplay = ({ icon, name }: IconDisplayProps) => (
  <View className="items-center w-24 mb-4 p-2">
    <ModuleAvatar icon={icon} size="lg" />
    <Text className="text-xs mt-2 text-center text-f1-foreground">{name}</Text>
  </View>
);

export const Default: Story = {
  args: {
    icon: ModuleIcons.Home,
    size: "md",
  },
};

export const SizeVariants: Story = {
  args: {
    icon: ModuleIcons.Home,
  },
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 mt-6">Size Variants</Text>
      <View className="flex-row justify-around mb-8 p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={ModuleIcons.Home} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Home} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Home} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.Home} name="xl" size="xl" />
      </View>

      <View className="flex-row justify-around mb-8 p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={ModuleIcons.TimeTracking} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.TimeTracking} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.TimeTracking} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.TimeTracking} name="xl" size="xl" />
      </View>

      <View className="flex-row justify-around p-4 bg-gray-100 rounded-lg">
        <SizeVariant icon={ModuleIcons.Documents} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Documents} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Documents} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.Documents} name="xl" size="xl" />
      </View>
    </ScrollView>
  ),
};

export const AllModules: Story = {
  render: () => {
    const moduleEntries = Object.entries(ModuleIcons);

    return (
      <ScrollView>
        <Text className="text-lg font-bold mb-4 text-f1-foreground">
          All Module Avatar Icons
        </Text>
        <View className="flex-row flex-wrap justify-start">
          {moduleEntries.map(([name, icon]) => (
            <IconDisplay key={name} icon={icon} name={name} />
          ))}
        </View>
      </ScrollView>
    );
  },
};
