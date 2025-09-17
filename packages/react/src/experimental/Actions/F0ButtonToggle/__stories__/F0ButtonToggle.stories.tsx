import { Microphone, MicrophoneNegative } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { buttonToggleSizes, F0ButtonToggle } from "../index"

const meta = {
  title: "Actions/ButtonToggle",
  component: F0ButtonToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A button that can be toggled between two states. Works like a checkbox",
      },
    },
  },
  tags: ["autodocs", "experimental"],
  args: {
    onSelectedChange: (selected) => {
      console.log("Button toggle clicked", selected)
    },
    label: "Toggle me",
    size: "md",
    selected: false,
    disabled: false,
  },
  argTypes: {
    selected: {
      control: "boolean",
      description: "Whether the button is in selected/active state.",
    },
    size: {
      control: "select",
      options: buttonToggleSizes,
      table: {
        type: {
          summary: buttonToggleSizes.join(" | "),
        },
      },
    },
    label: {
      control: "text",
      description:
        "The accessible label for the button. Required for accessibility.",
    },
    icon: {
      table: {
        type: {
          summary: "IconType | [IconType, IconType]",
        },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "The button is inactive and does not respond to user interaction.",
    },
    onSelectedChange: {
      action: "selected",
      description: "Callback fired when the button is selected.",
    },
  },
} satisfies Meta<typeof F0ButtonToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Default Toggle",
    icon: [MicrophoneNegative, Microphone],
  },
}

export const SingleIcon: Story = {
  args: {
    label: "Single Icon Toggle",
    icon: Microphone,
  },
}
