import { Microphone, MicrophoneNegative } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
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
  args: {
    items: [
      { label: "Option 1", icon: [Microphone, MicrophoneNegative] },
      { label: "Option 2", icon: [Microphone, MicrophoneNegative] },
      { label: "Option 3", icon: [Microphone, MicrophoneNegative] },
    ],
    size: "md",
    multiple: false,
    required: false,
    value: "",
    onChange: (value) => {
      console.log("Value changed:", value)
    },
  },
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
  },
} satisfies Meta<typeof F0ButtonToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

// Basic single selection
export const Default: Story = {
  args: {
    items: [
      { label: "Option 1", icon: Microphone },
      { label: "Option 2", icon: Microphone },
      { label: "Option 3", icon: Microphone },
    ],
    size: "md",
    multiple: false,
    required: false,
    value: "",
    onChange: (value) => {
      console.log("Value changed:", value)
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <F0ButtonToggleGroup
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          args.onChange?.(newValue)
        }}
      />
    )
  },
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
    items: [
      { label: "Option 1", icon: Microphone },
      { label: "Option 2", icon: Microphone },
      { label: "Option 3", icon: Microphone },
    ],
    size: "md",
    multiple: true,
    required: false,
    value: [],
    onChange: (value) => {
      console.log("Value changed:", value)
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <F0ButtonToggleGroup
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          args.onChange?.(newValue)
        }}
      />
    )
  },
}

// With different icons
export const WithIcons: Story = {
  parameters: withSnapshot({}),
  render: () => {
    const [value1, setValue1] = useState<string>("")
    const [value2, setValue2] = useState<string[]>([])

    return (
      <div className="flex flex-col gap-6">
        <div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            Single Selection
          </div>
          <F0ButtonToggleGroup
            items={[
              { label: "Mic Off", icon: MicrophoneNegative },
              { label: "Mic On", icon: Microphone },
              { label: "Mic Off", icon: MicrophoneNegative },
            ]}
            size="md"
            multiple={false}
            required={false}
            value={value1}
            onChange={setValue1}
          />
        </div>
        <div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            Multiple Selection
          </div>
          <F0ButtonToggleGroup
            items={[
              { label: "Mic Off", icon: MicrophoneNegative },
              { label: "Mic On", icon: Microphone },
              { label: "Mic Off", icon: MicrophoneNegative },
            ]}
            size="md"
            multiple={true}
            required={false}
            value={value2}
            onChange={setValue2}
          />
        </div>
      </div>
    )
  },
}

// Size variants
export const Sizes: Story = {
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
export const WithDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Individual items can be disabled. Disabled items cannot be selected.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<string>("")
    return (
      <F0ButtonToggleGroup
        items={[
          { label: "Enabled 1", icon: Microphone },
          { label: "Disabled", icon: Microphone, disabled: true },
          { label: "Enabled 2", icon: Microphone },
        ]}
        size="md"
        multiple={false}
        required={false}
        value={value}
        onChange={setValue}
      />
    )
  },
}

// Required selection
export const Required: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When required is true, at least one option must be selected. The selection cannot be cleared.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<string>("Option 1")
    return (
      <F0ButtonToggleGroup
        items={[
          { label: "Option 1", icon: Microphone },
          { label: "Option 2", icon: Microphone },
          { label: "Option 3", icon: Microphone },
        ]}
        size="md"
        multiple={false}
        required={true}
        value={value}
        onChange={setValue}
      />
    )
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
