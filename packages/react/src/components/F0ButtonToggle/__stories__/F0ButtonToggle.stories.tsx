import { Microphone, MicrophoneNegative } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { buttonToggleSizes, F0ButtonToggle } from "../index"

const meta = {
  title: "ButtonToggle",
  component: F0ButtonToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A button that can be toggled between two states. Works like a checkbox",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Components?node-id=13235-148548&p=f&t=u27xbp3PH7jll0ic-0",
    },
  },
  tags: ["autodocs"],
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

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    label: "Toggle me",
    icon: [MicrophoneNegative, Microphone],
  },
  render: () => (
    <div className="flex w-fit flex-row gap-2">
      {buttonToggleSizes.map((size) => (
        <>
          <F0ButtonToggle
            key={size}
            size={size}
            label="Toggle me"
            icon={[MicrophoneNegative, Microphone]}
          />
          <F0ButtonToggle
            key={size}
            size={size}
            label="Toggle me"
            selected={true}
            icon={Microphone}
          />
        </>
      ))}
    </div>
  ),
}
