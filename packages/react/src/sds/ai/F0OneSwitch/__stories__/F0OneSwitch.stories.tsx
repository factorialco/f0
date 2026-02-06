import type { Meta, StoryObj } from "@storybook/react-vite";

import { F0AiChatProvider } from "@/sds/ai/F0AiChat";

import { F0OneSwitch } from "../F0OneSwitch";

const meta: Meta<typeof F0OneSwitch> = {
  title: "AI/F0OneSwitch",
  component: F0OneSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <F0AiChatProvider enabled runtimeUrl="https://example.com">
        <Story />
      </F0AiChatProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
