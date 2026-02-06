import type { Meta, StoryObj } from "@storybook/react-vite";

import * as Icons from "@/icons/app";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    type: "neutral",
    icon: Icons.Placeholder,
    size: "md",
  },
};

export const Types: Story = {
  render: () => (
    <div className="flex flex-row gap-2">
      <Badge icon={Icons.Placeholder} size="md" />
      <Badge icon={Icons.Circle} type="highlight" size="md" />
      <Badge icon={Icons.Check} type="positive" size="md" />
      <Badge icon={Icons.Cross} type="critical" size="md" />
      <Badge icon={Icons.Alert} type="warning" size="md" />
    </div>
  ),
};
