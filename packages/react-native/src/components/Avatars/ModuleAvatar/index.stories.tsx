import React from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { ModuleAvatar } from "./index";
import { ModuleIcons } from "../../../icons";
import { IconType } from "../../Icon";

const meta: Meta<typeof ModuleAvatar> = {
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
  icon: IconType;
  name: string;
  size: "sm" | "md" | "lg" | "xl";
}

interface IconDisplayProps {
  icon: IconType;
  name: string;
}

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => (
  <View className="items-center justify-center">
    <ModuleAvatar icon={icon} size={size} />
    <Text className="mt-2 text-center text-xs">{name}</Text>
  </View>
);

const IconDisplay = ({ icon, name }: IconDisplayProps) => (
  <View className="mb-4 w-24 items-center p-2">
    <ModuleAvatar icon={icon} size="lg" />
    <Text className="mt-2 text-center text-xs text-f1-foreground">{name}</Text>
  </View>
);

export const Default: Story = {
  args: {
    module: "home",
    size: "md",
  },
};

export const SizeVariants: Story = {
  args: {
    module: "home",
  },
  render: () => (
    <ScrollView>
      <Text className="font-bold mb-4 mt-6 text-lg">Size Variants</Text>
      <View className="bg-gray-100 mb-8 flex-row justify-around rounded-lg p-4">
        <SizeVariant icon={ModuleIcons.Home} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Home} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Home} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.Home} name="xl" size="xl" />
      </View>

      <View className="bg-gray-100 mb-8 flex-row justify-around rounded-lg p-4">
        <SizeVariant icon={ModuleIcons.TimeTracking} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.TimeTracking} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.TimeTracking} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.TimeTracking} name="xl" size="xl" />
      </View>

      <View className="bg-gray-100 flex-row justify-around rounded-lg p-4">
        <SizeVariant icon={ModuleIcons.Documents} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Documents} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Documents} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.Documents} name="xl" size="xl" />
      </View>
    </ScrollView>
  ),
};

export const AllModules: Story = {
  args: {
    module: "home",
  },
  render: () => {
    const moduleEntries = Object.entries(ModuleIcons);

    return (
      <ScrollView>
        <Text className="font-bold mb-4 text-lg text-f1-foreground">
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
