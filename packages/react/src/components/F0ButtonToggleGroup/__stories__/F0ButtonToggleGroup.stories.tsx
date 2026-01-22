import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { buttonToggleVariants } from "@/components/F0ButtonToggle"
import { Archive, Delete, Microphone, MicrophoneNegative } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type {
  F0ButtonToggleGroupItem,
  F0ButtonToggleGroupProps,
} from "../types"

import { buttonToggleGroupSizes, F0ButtonToggleGroup } from "../index"

const meta = {
  title: "ButtonToggleGroup",
  component: F0ButtonToggleGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A group of toggle buttons that allows single or multiple selection. Built on top of Radix UI ToggleGroup.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: buttonToggleGroupSizes,
      description: "Sets the buttons size",
    },
    multiple: {
      control: "boolean",
      description:
        "Whether multiple selections are allowed. When true, value and onChange use string[].",
    },
    required: {
      control: "boolean",
      description:
        "Whether a selection is required. When true, at least one option must be selected.",
    },
    value: {
      control: "text",
      description:
        "The selected value(s). Use string for single selection, string[] for multiple selection.",
    },
    onChange: {
      action: "changed",
      description:
        "Callback fired when the selection changes. Receives string or string[] based on multiple prop.",
    },
    items: {
      control: "object",
      description:
        "Array of button items. Each item should have label, icon, and optionally disabled.",
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
  decorators: [
    (Story, { args }) => {
      const [singleValue, setSingleValue] = useState<string>("")
      const [multipleValue, setMultipleValue] = useState<string[]>([])

      const displayValue = args.multiple
        ? multipleValue.join(", ") || "(none)"
        : singleValue || "(none)"

      const storyArgs = args.multiple
        ? ({
            ...args,
            value: multipleValue,
            onChange: setMultipleValue,
          } as const)
        : ({
            ...args,
            value: singleValue,
            onChange: setSingleValue,
          } as const)

      return (
        <div className="flex flex-col gap-4">
          <Story args={storyArgs} />
          <div className="text-gray-500 mt-10 text-sm">
            Value: {displayValue}
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<F0ButtonToggleGroupProps>

export default meta

// Story args type - base props only, excluding the discriminated union (value/onChange/multiple)
type StoryArgs = {
  items: F0ButtonToggleGroupProps["items"]
  size: F0ButtonToggleGroupProps["size"]
  variant?: F0ButtonToggleGroupProps["variant"]
  required?: boolean
  disabled?: boolean
  multiple?: boolean
}

type Story = Omit<StoryObj<typeof meta>, "args"> & {
  args?: Partial<StoryArgs>
}

const mockItems = [
  {
    label: ["Active", "Inactive"],
    icon: [Microphone, MicrophoneNegative],
    value: "active",
  },
  {
    label: "Option 2 with a long label that should be truncated",
    icon: Delete,
    value: "delete",
  },
  { label: "Option 3", icon: Archive, value: "archive" },
] satisfies F0ButtonToggleGroupItem[]

// Basic single selection
const defaultArgs: Partial<StoryArgs> = {
  items: mockItems,
  size: "md",
  multiple: false,
  required: false,
}

export const Default: Story = {
  args: defaultArgs,
}

export const Single: Story = {
  args: {
    ...defaultArgs,
    multiple: false,
  },
}

// Required selection
export const SingleRequired: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When required is true, at least one option must be selected. The selection cannot be cleared.",
      },
    },
  },
  args: {
    ...Default.args,
    required: true,
  },
}

export const VariantExpanded: Story = {
  args: { ...Default.args, variant: "expanded" },
}
// Multiple selection
export const Multiple: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Allows multiple buttons to be selected at the same time. The value prop uses string[] instead of string.",
      },
    },
  },
  args: {
    ...Default.args,
    multiple: true,
    required: false,
  },
}

export const MultipleRequired: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Allows multiple buttons to be selected at the same time. The value prop uses string[] instead of string. But at least one button must be selected.",
      },
    },
  },
  args: {
    ...Multiple.args,
    multiple: true,
    required: true,
  },
}
// Size variants
export const Sizes: Story = {
  args: {
    ...Default.args,
  },
  parameters: withSnapshot({}),
  render: () => {
    const [valueSm, setValueSm] = useState<string>("")
    const [valueMd, setValueMd] = useState<string>("")

    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div style={{ fontWeight: 600 }}>Small (sm)</div>
          <F0ButtonToggleGroup
            items={mockItems}
            size="sm"
            multiple={false}
            required={false}
            value={valueSm}
            onChange={setValueSm}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div style={{ fontWeight: 600 }}>Medium (md)</div>
          <F0ButtonToggleGroup
            items={mockItems}
            size="md"
            multiple={false}
            required={false}
            value={valueMd}
            onChange={setValueMd}
          />
        </div>
      </div>
    )
  },
}

// With disabled items
export const WithDisabledItem: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Individual items can be disabled. Disabled items cannot be selected.",
      },
    },
  },
  args: {
    ...Default.args,
    items: mockItems.map((item, index) => ({
      ...item,
      disabled: index === 1,
    })),
  },
}

// With disabled all items
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "All items can be disabled. Disabled items cannot be selected.",
      },
    },
  },
  args: {
    ...Default.args,
    disabled: true,
  },
}

// Wrap
export const Flow: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The buttons in the group will wrap to the next line if they don't fit in the available space.",
      },
    },
  },
  args: {
    ...Default.args,
    items: Array.from({ length: 100 }).map((_, index) => ({
      label: `Option ${index + 1} with a long label that should be truncated`,
      icon: Archive,
      value: `option-${index + 1}`,
    })),
  },
}

// Snapshot with all variants
export const Snapshot: Story = {
  args: {
    items: mockItems,
  },
  parameters: withSnapshot({}),
  render: () => {
    return (
      <div className="flex max-w-96 flex-col gap-6">
        {buttonToggleVariants.map((variant) => {
          return buttonToggleGroupSizes.map((size) => {
            return (
              <section
                key={`${size}-${variant}`}
                className="flex flex-col gap-2"
              >
                <h4 className="mb-2 font-semibold">
                  Size: {size} Variant: {variant}
                </h4>
                <F0ButtonToggleGroup
                  items={mockItems}
                  size={size}
                  variant={variant}
                  multiple={false}
                  required={false}
                />
              </section>
            )
          })
        })}

        <section>
          <h4 className="mb-2 font-semibold">Wrap</h4>
          <F0ButtonToggleGroup
            items={Array.from({ length: 30 }).map((_, index) => ({
              label: `Option ${index + 1} with a long label that should be truncated`,
              icon: Archive,
              value: `option-${index + 1}`,
            }))}
            size="md"
            variant="expanded"
            multiple={false}
            required={false}
          />
        </section>
      </div>
    )
  },
}
