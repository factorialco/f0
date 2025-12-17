import { OneChip } from "@factorialco/f0-react-native";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AppIcons } from "@factorialco/f0-react-native";
import { View } from "react-native";

const meta = {
  component: OneChip,
  title: "Components/Chip",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: StoryFn) => (
      <View className="flex-1 justify-center items-center">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    label: {
      description: "The label of the chip",
    },
    variant: {
      description: "The variant of the chip",
      options: ["default", "selected"],
      control: { type: "select" },
    },
    icon: {
      control: "select",
      options: Object.keys(AppIcons),
      mapping: AppIcons,
      description: "If defined, an icon will be displayed in the chip",
    },
    onClose: {
      description:
        "If defined, the close icon will be displayed and the chip will be clickable",
    },
  },
} satisfies Meta<typeof OneChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    variant: "default",
  },
};

const WithCloseComponent = () => {
  const [chips, setChips] = useState([
    { id: 1, label: "First Chip" },
    { id: 2, label: "Second Chip" },
    { id: 3, label: "Third Chip" },
  ]);

  const handleClose = (id: number) => {
    setChips((prevChips) => prevChips.filter((chip) => chip.id !== id));
  };

  return (
    <View className="flex flex-row flex-wrap gap-2">
      {chips.map((chip) => (
        <OneChip
          key={chip.id}
          label={chip.label}
          variant="default"
          onClose={() => handleClose(chip.id)}
        />
      ))}
    </View>
  );
};

export const WithClose: Story = {
  args: {
    label: "Label",
    variant: "default",
  },
  render: () => <WithCloseComponent />,
};

export const WithIcon: Story = {
  args: {
    label: "Label",
    icon: AppIcons.Placeholder,
  },
};

const SelectedWithCloseComponent = () => {
  const [chips, setChips] = useState([
    { id: 1, label: "First Chip" },
    { id: 2, label: "Second Chip" },
    { id: 3, label: "Third Chip" },
  ]);

  const handleClose = (id: number) => {
    setChips((prevChips) => prevChips.filter((chip) => chip.id !== id));
  };

  return (
    <View className="flex flex-row flex-wrap gap-2">
      {chips.map((chip) => (
        <OneChip
          key={chip.id}
          label={chip.label}
          variant="selected"
          onClose={() => handleClose(chip.id)}
        />
      ))}
    </View>
  );
};

export const SelectedWithClose: Story = {
  args: {
    label: "Label",
    variant: "selected",
  },
  render: () => <SelectedWithCloseComponent />,
};
