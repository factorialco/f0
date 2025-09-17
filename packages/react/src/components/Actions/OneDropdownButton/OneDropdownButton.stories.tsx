import type { Meta, StoryObj } from "@storybook/react-vite"

import { Add, Replace } from "../../../icons/app/index.ts"
import { OneDropdownButton } from "./index"
import { oneDropdownButtonSizes, oneDropdownButtonVariants } from "./types.ts"

const meta = {
  title: "DropdownButton",
  component: OneDropdownButton,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Internal-Components?node-id=1751-49043",
    },
    docs: {
      description: {
        component:
          "<p>Action button that allows to select the action using a dropdown.</p>" +
          "<p>This component received a list of items (each item has a value), when the user clicks the button the component emits the `onClick` event with the value of the item and the item itself</p>",
      },
    },
  },
  tags: ["autodocs", "experimental"],
  args: {
    variant: "default",
    onClick: (value, item) => {
      console.log("DropdownButton clicked => value:", value, "item:", item)
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: oneDropdownButtonVariants,
      description: "Visual style variant of the button",
    },
    size: {
      control: "select",
      options: oneDropdownButtonSizes,
      description: "Size of the button",
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof OneDropdownButton>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  args: {
    variant: "default",
    items: [
      {
        value: "1",
        label: "Item 1",
        icon: Add,
      },
      {
        value: "2",
        label: "Item 2",
        icon: Replace,
      },
      {
        value: "3",
        label: "Item 3",
      },
    ],
  },
}
