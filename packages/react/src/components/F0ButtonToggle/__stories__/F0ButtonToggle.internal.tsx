import { Microphone, MicrophoneNegative } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0ButtonToggleInternal } from "../internal/F0ButtonToggle.internal"
import F0ButtonToggleStories from "./F0ButtonToggle.stories"

const meta = {
  ...F0ButtonToggleStories,
  title: "ButtonToggle/Internal",
  component: F0ButtonToggleInternal,
  tags: ["autodocs", "internal"],
  argTypes: {
    ...F0ButtonToggleStories.argTypes,
    withBorder: {
      control: "boolean",
      description:
        "Whether to show a border around the button toggle. (default: false)",
    },
  },
} satisfies Meta<typeof F0ButtonToggleInternal>

export default meta
type Story = StoryObj<typeof meta>

export const WithBorder: Story = {
  args: {
    withBorder: true,
    label: "Default Toggle",
    icon: [MicrophoneNegative, Microphone],
  },
}
