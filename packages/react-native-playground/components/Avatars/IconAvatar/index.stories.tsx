import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { IconAvatar, AppIcons } from "@factorialco/f0-react-native";

const meta = {
  title: "Components/Avatars/IconAvatar",
  component: IconAvatar,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    size: "md",
    icon: AppIcons.Bell,
    className: "",
  },
  decorators: [
    (Story) => (
      <View className="flex-1 p-4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

interface AvatarDisplayProps {
  icon: any;
  size: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const AvatarDisplay = ({
  icon,
  size,
  className,
  label,
}: AvatarDisplayProps) => (
  <View className="items-center justify-center m-4">
    <IconAvatar icon={icon} size={size} className={className} />
    {label && (
      <Text className="text-sm mt-2 text-center text-f1-foreground">
        {label}
      </Text>
    )}
  </View>
);

export const Basic: Story = {
  args: {
    icon: AppIcons.Bell,
    size: "md",
  },
};

export const SizeVariants: Story = {
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 text-f1-foreground">
        Size Variants
      </Text>
      <View className="flex-row flex-wrap justify-center p-4 bg-gray-100 rounded-lg">
        <AvatarDisplay icon={AppIcons.Bell} size="sm" label="sm" />
        <AvatarDisplay icon={AppIcons.Bell} size="md" label="md" />
        <AvatarDisplay icon={AppIcons.Bell} size="lg" label="lg" />
      </View>
    </ScrollView>
  ),
};

export const Styling: Story = {
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 text-f1-foreground">
        Custom Styling
      </Text>
      <View className="flex-row flex-wrap justify-center p-4 bg-gray-100 rounded-lg">
        <AvatarDisplay
          icon={AppIcons.Bell}
          size="md"
          className="border-f1-border-critical"
          label="Critical Border"
        />
        <AvatarDisplay
          icon={AppIcons.Bell}
          size="md"
          className="border-f1-border-info"
          label="Info Border"
        />
        <AvatarDisplay
          icon={AppIcons.Bell}
          size="md"
          className="border-f1-border-positive"
          label="Positive Border"
        />
        <AvatarDisplay
          icon={AppIcons.Bell}
          size="md"
          className="border-f1-border-warning"
          label="Warning Border"
        />
      </View>
    </ScrollView>
  ),
};

export const DifferentIcons: Story = {
  render: () => (
    <ScrollView>
      <Text className="text-lg font-bold mb-4 text-f1-foreground">
        Different Icons
      </Text>
      <View className="flex-row flex-wrap justify-center p-4 bg-gray-100 rounded-lg">
        <AvatarDisplay icon={AppIcons.Bell} size="md" label="Bell" />
        <AvatarDisplay icon={AppIcons.Calendar} size="md" label="Calendar" />
        <AvatarDisplay
          icon={AppIcons.AlertCircle}
          size="md"
          label="AlertCircle"
        />
        <AvatarDisplay icon={AppIcons.Crown} size="md" label="Crown" />
        <AvatarDisplay icon={AppIcons.Pencil} size="md" label="Pencil" />
      </View>
    </ScrollView>
  ),
};
