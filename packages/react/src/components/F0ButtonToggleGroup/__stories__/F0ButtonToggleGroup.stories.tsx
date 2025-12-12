import { buttonToggleVariants } from "@/components/F0ButtonToggle"
import { Archive, Delete, Microphone, MicrophoneNegative } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { toArray } from "@/lib/toArray"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { F0ButtonToggleGroup } from "../index"

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
      options: ["sm", "md", "lg"],
      description:
        "Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.",
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
      const [value, setValue] = useState<string[]>([])
      const handleChange = (newValue: string | string[]) => {
        setValue(toArray(newValue))
      }
      return (
        <div className="flex flex-col gap-4">
          <Story
            args={{
              ...args,
              value: args.multiple ? value : value[0],
              onChange: handleChange,
            }}
          />
          <div className="text-gray-500 mt-10 text-sm">
            Value: {Array.isArray(value) ? value.join(", ") : value}
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof F0ButtonToggleGroup>

export default meta

type Story = StoryObj<typeof meta>

// Basic single selection
export const Default: Story = {
  args: {
    items: [
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
    ],
    size: "md",
    multiple: false,
    required: false,
  },
}

export const Single: Story = {
  args: {
    ...Default.args,
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
    const [valueLg, setValueLg] = useState<string>("")

    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div style={{ fontWeight: 600 }}>Small (sm)</div>
          <F0ButtonToggleGroup
            items={[
              { label: "Option 1", icon: Microphone },
              { label: "Option 2", icon: Microphone },
              { label: "Option 3", icon: Microphone },
            ]}
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
            items={[
              { label: "Option 1", icon: Microphone },
              { label: "Option 2", icon: Microphone },
              { label: "Option 3", icon: Microphone },
            ]}
            size="md"
            multiple={false}
            required={false}
            value={valueMd}
            onChange={setValueMd}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div style={{ fontWeight: 600 }}>Large (lg)</div>
          <F0ButtonToggleGroup
            items={[
              { label: "Option 1", icon: Microphone },
              { label: "Option 2", icon: Microphone },
              { label: "Option 3", icon: Microphone },
            ]}
            size="lg"
            multiple={false}
            required={false}
            value={valueLg}
            onChange={setValueLg}
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
    items: Default.args?.items?.map((item, index) => ({
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

// Snapshot with all variants
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => {
    const [singleValue, setSingleValue] = useState<string>("")
    const [multipleValue, setMultipleValue] = useState<string[]>([])
    const [requiredValue, setRequiredValue] = useState<string>("Option 1")

    return (
      <div className="flex flex-col gap-6">
        <section>
          <h4 className="mb-3 text-lg font-semibold">Single Selection</h4>
          <div className="flex flex-col gap-4">
            {(["sm", "md", "lg"] as const).map((size) => (
              <div key={size} className="flex flex-col gap-2">
                <div style={{ fontWeight: 600 }}>Size: {size}</div>
                <F0ButtonToggleGroup
                  items={[
                    { label: "Option 1", icon: Microphone },
                    { label: "Option 2", icon: Microphone },
                    { label: "Option 3", icon: Microphone },
                  ]}
                  size={size}
                  multiple={false}
                  required={false}
                  value={singleValue}
                  onChange={setSingleValue}
                />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h4 className="mb-3 text-lg font-semibold">Multiple Selection</h4>
          <div className="flex flex-col gap-4">
            {(["sm", "md", "lg"] as const).map((size) => (
              <div key={size} className="flex flex-col gap-2">
                <div style={{ fontWeight: 600 }}>Size: {size}</div>
                <F0ButtonToggleGroup
                  items={[
                    { label: "Option 1", icon: Microphone },
                    { label: "Option 2", icon: Microphone },
                    { label: "Option 3", icon: Microphone },
                  ]}
                  size={size}
                  multiple={true}
                  required={false}
                  value={multipleValue}
                  onChange={setMultipleValue}
                />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h4 className="mb-3 text-lg font-semibold">With Disabled Items</h4>
          <F0ButtonToggleGroup
            items={[
              { label: "Enabled", icon: Microphone },
              { label: "Disabled", icon: Microphone, disabled: true },
              { label: "Enabled", icon: Microphone },
            ]}
            size="md"
            multiple={false}
            required={false}
            value={singleValue}
            onChange={setSingleValue}
          />
        </section>
        <section>
          <h4 className="mb-3 text-lg font-semibold">Required Selection</h4>
          <F0ButtonToggleGroup
            items={[
              { label: "Option 1", icon: Microphone },
              { label: "Option 2", icon: Microphone },
              { label: "Option 3", icon: Microphone },
            ]}
            size="md"
            multiple={false}
            required={true}
            value={requiredValue}
            onChange={setRequiredValue}
          />
        </section>
        <section>
          <h4 className="mb-3 text-lg font-semibold">With Different Icons</h4>
          <F0ButtonToggleGroup
            items={[
              { label: "Mic Off", icon: MicrophoneNegative },
              { label: "Mic On", icon: Microphone },
              { label: "Mic Off", icon: MicrophoneNegative },
            ]}
            size="md"
            multiple={false}
            required={false}
            value={singleValue}
            onChange={setSingleValue}
          />
        </section>
      </div>
    )
  },
}
