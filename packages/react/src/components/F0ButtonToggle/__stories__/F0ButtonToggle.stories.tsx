import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Microphone, MicrophoneNegative } from "@/icons/app"
import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"

import { buttonToggleSizes, buttonToggleVariants } from "../"
import { F0ButtonToggle } from "../F0ButtonToggle"

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
    label: ["Toggle me", "Toggle me again"],
    size: "md",
    disabled: false,
  },
  argTypes: {
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
        "The accessible label for the button. Required for accessibility. Can be a single string or an array of two strings for the selected and unselected states.",
      table: {
        type: {
          summary: "string | [string, string]",
        },
      },
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
    selected: {
      control: "boolean",
      description:
        "Whether the button is in selected/active state. (only works together with onSelectedChange. Controlled component)",
    },
    onSelectedChange: {
      action: "selected",
      description: "Callback fired when the button is selected.",
    },
    defaultSelected: {
      control: "boolean",
      description:
        "Whether the button is in selected/active state by default. (uncontrolled component)",
    },
    variant: {
      control: "select",
      options: buttonToggleVariants,
      description: "Visual style variant of the button. (default: compact)",
      table: {
        type: {
          summary: buttonToggleVariants.join(" | "),
        },
      },
    },
  },
} satisfies Meta<typeof F0ButtonToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Default Toggle",
    icon: [MicrophoneNegative, Microphone],
    selected: undefined,
    onSelectedChange: undefined,
  },
}

export const SingleIcon: Story = {
  args: {
    label: "Single Icon Toggle",
    icon: Microphone,
  },
}

export const VariantExpanded: Story = {
  args: {
    label: ["Toggle me", "Toggle me"],
    icon: [MicrophoneNegative, Microphone],
    variant: "expanded",
  },
}

export const Controlled: Story = {
  args: {
    label: "Controlled Toggle",
    icon: Microphone,
    selected: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected)
    return (
      <>
        <F0ButtonToggle
          {...args}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <p className="text-gray-500 text-sm">
          Selected: {selected ? "true" : "false"}
        </p>
      </>
    )
  },
}

export const UncontrolledWithDefaultSelected: Story = {
  args: {
    label: "Controlled Toggle",
    icon: Microphone,
    defaultSelected: true,
  },
}

export const Snapshot: Story = {
  parameters: withSkipA11y(withSnapshot({})),
  args: {
    label: "Toggle me",
    icon: [MicrophoneNegative, Microphone],
  },
  render: () => (
    <div className="flex flex-col gap-2">
      {buttonToggleVariants.map((variant) => (
        <div key={variant}>
          <h4 className="mb-3 text-lg font-semibold">Variant: {variant}</h4>
          <div className="flex flex-row gap-2">
            {buttonToggleSizes.map((size) => (
              <div key={size}>
                <F0ButtonToggle
                  key={`${size}-unselected`}
                  size={size}
                  label="Toggle me"
                  icon={[MicrophoneNegative, Microphone]}
                  variant={variant}
                />
                <F0ButtonToggle
                  key={`${size}-selected`}
                  size={size}
                  label="Toggle me"
                  selected={true}
                  icon={Microphone}
                  variant={variant}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}
