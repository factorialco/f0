import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, within } from "storybook/test"

import { Microphone, MicrophoneNegative } from "@/icons/app"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"

import {
  buttonToggleColors,
  buttonToggleSizes,
  buttonToggleVariants,
} from "../"
import { F0ButtonToggle } from "../F0ButtonToggle"

const meta = {
  title: "Button/ButtonToggle",
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
    color: {
      control: "select",
      options: [undefined, ...buttonToggleColors],
      description:
        "The colour the toggle wears when selected — for a set whose members mean different things. Muted glyph when unselected.",
      table: {
        type: {
          summary: buttonToggleColors.join(" | "),
        },
      },
    },
    ...dataTestIdArgs,
  },
} satisfies Meta<typeof F0ButtonToggle>

export default meta
// See the note in F0Icon.stories.tsx: `StoryObj<typeof meta>` overflows TS's
// union complexity limit once `icon` accepts the icon-name union.
type Story = StoryObj<typeof F0ButtonToggle>

export const Default: Story = {
  args: {
    label: "Default Toggle",
    icon: [MicrophoneNegative, Microphone],
    selected: undefined,
    onSelectedChange: undefined,
  },
}

export const WithDataTestId: Story = {
  args: {
    label: "Toggle with Test ID",
    icon: [MicrophoneNegative, Microphone],
    dataTestId: "my-test-button-toggle",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByTestId("my-test-button-toggle")
    ).toBeInTheDocument()
  },
}

export const Colors: Story = {
  args: {
    label: "Toggle me",
    icon: Microphone,
  },
  parameters: {
    ...withSnapshot({}),
    docs: {
      description: {
        story:
          "`color` makes the toggle a member of a coloured set: it wears the " +
          "colour when selected and stays a muted glyph when it isn't. For a set " +
          "whose members mean different things — a mood scale, a status picker — " +
          "not for a lone toggle.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      {buttonToggleColors.map((color) => (
        <div key={color} className="flex items-center gap-3">
          <F0ButtonToggle
            label={color}
            icon={Microphone}
            color={color}
            selected
            onSelectedChange={() => {}}
          />
          <F0ButtonToggle
            label={color}
            icon={Microphone}
            color={color}
            selected={false}
            onSelectedChange={() => {}}
          />
          <span className="text-f1-foreground-secondary">{color}</span>
        </div>
      ))}
    </div>
  ),
}

export const WithTooltip: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A compact toggle shows no text of its own, so `tooltip` is what says " +
          "what it does. It replaces the native browser tooltip, and the object " +
          "form adds a line of explanation under the name.",
      },
    },
  },
  args: {
    label: ["Unmute", "Mute"],
    icon: [MicrophoneNegative, Microphone],
    tooltip: { label: "Microphone", description: "Nobody will hear you" },
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
