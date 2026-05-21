import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0SearchInput } from "../index"

const meta = {
  component: F0SearchInput,
  title: "Inputs/Search input",
  parameters: {
    layout: "centered",
  },
  tags: ["stable"],
  args: {
    placeholder: "",
  },

  argTypes: {
    disabled: {
      control: "boolean",
    },
    threshold: {
      description: "Min number of characteres before call `onChange`",
      defaultValue: 0,
    },
    debounceTime: {
      description:
        "Debouce time in ms. It avoids to make repeated calls when the value changes",
      defaultValue: 0,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300, margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0SearchInput>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Search...",
    disabled: true,
  },
}

export const Clearable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Display a clear button to reset the input value. It will only be displayed if the input is not disabled and has content",
      },
    },
  },
  args: {
    placeholder: "Search...",
    clearable: true,
  },
}

export const WithThreshold: Story = {
  parameters: {
    docs: {
      description: {
        story: "Check console to see onChange updates",
      },
    },
  },
  args: {
    placeholder: "Search...",
    threshold: 3,
    onChange: (value) => console.log("Change:", value),
  },
}

export const WithDebounce: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Check console to see onChange updates. It will only happens every 3s",
      },
    },
  },
  args: {
    placeholder: "Search...",
    debounceTime: 3000,
    onChange: (value) => console.log("Debounced change:", value),
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Sizes</h3>
        <F0SearchInput placeholder="Small (default)" size="sm" />
        <F0SearchInput placeholder="Medium" size="md" />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">States</h3>
        <F0SearchInput placeholder="Default" />
        <F0SearchInput placeholder="Disabled" disabled />
        <F0SearchInput placeholder="Clearable" clearable value="query" />
        <F0SearchInput placeholder="Loading" loading />
      </section>
    </div>
  ),
}
