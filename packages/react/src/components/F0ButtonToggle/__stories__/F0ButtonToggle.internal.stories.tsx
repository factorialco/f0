import { Microphone, MicrophoneNegative } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0ButtonToggleInternal } from "../internal/F0ButtonToggle.internal"
import F0ButtonToggleStories from "./F0ButtonToggle.stories"

const meta = {
  ...F0ButtonToggleStories,
  title: "ButtonToggle/Internal",
  component: F0ButtonToggleInternal,
  tags: ["autodocs", "internal"],
  parameters: {
    ...F0ButtonToggleStories.parameters,
    docs: {
      description: {
        component: "F0ButtonToggle including the internal props",
      },
    },
  },
  argTypes: {
    ...F0ButtonToggleStories.argTypes,
    withBorder: {
      description:
        "🔒 [INTERNAL] Whether to show a border around the button toggle. (default: false)",
      control: "boolean",
    },
  },
} satisfies Meta<typeof F0ButtonToggleInternal>

export default meta
type Story = StoryObj<typeof meta>

export const WithBorder: Story = {
  args: {
    withBorder: true,
    label: "Default Toggle with a long label that should be truncated",
    icon: [MicrophoneNegative, Microphone],
  },
}
