import type { Meta, StoryObj } from "@storybook/react-vite"

import { F1SearchBox } from "./index"

const meta = {
  component: F1SearchBox,
  title: "Input/Search",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This components provides the input search themed. Input can debouced to avoid several requests",
      },
    },
  },
  tags: ["autodocs", "experimental"],
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
      description: "Debouce time in ms. It avoids to make repeated calls when the value changes",
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
} satisfies Meta<typeof F1SearchBox>

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
        story: "Check console to see onChange updates. It will only happens every 3s",
      },
    },
  },
  args: {
    placeholder: "Search...",
    debounceTime: 3000,
    onChange: (value) => console.log("Debounced change:", value),
  },
}
