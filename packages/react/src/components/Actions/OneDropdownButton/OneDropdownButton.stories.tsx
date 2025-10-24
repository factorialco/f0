import type { Meta, StoryObj } from "@storybook/react-vite"

import { Add, Delete, Pencil, Replace, Save } from "../../../icons/app/index.ts"
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
        component: [
          "Action button that allows to select the action using a dropdown.",
          "This component received a list of items (each item has a value), when the user clicks the button the component emits the `onClick` event with the value of the item and the item itself",
        ]
          .map((text) => `<p>${text}</p>`)
          .join(""),
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
    items: {
      control: "object",
      description: "The items to display in the dropdown",

      table: {
        type: {
          summary:
            "OneDropdownButtonItem[] | OneDropdownButtonGroup[] | OneDropdownButtonGroup",
          detail: [
            "type OneDropdownButtonItem = { value: string, label: string, icon?: React.ReactNode, critical?: boolean, description?: string }",
            "type OneDropdownButtonGroup = { label?: string, items: OneDropdownButtonItem[] }",
          ].join("\n"),
        },
      },
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

export const WithDescription: Story = {
  args: {
    items: [
      {
        value: "1",
        label: "Item 1",
        description: "New creation process",
        icon: Add,
      },
      {
        value: "2",
        label: "Item 2",
        description: "Edit item's information",
        icon: Pencil,
      },
      {
        value: "3",
        label: "Item 3",
        description: "Save changes",
        icon: Save,
      },
      {
        value: "4",
        label: "Item 4",
        description: "Delete item",
        icon: Delete,
        critical: true,
      },
    ],
  },
}

export const WithGroups: Story = {
  args: {
    items: [
      {
        label: "Group 1",
        items: [
          {
            value: "1",
            label: "Item 1",
            description: "New creation process",
            icon: Add,
          },
          {
            value: "2",
            label: "Item 2",
            description: "Edit item's information",
            icon: Pencil,
          },
        ],
      },
      {
        label: "Group 2",
        items: [
          {
            value: "3",
            label: "Item 3",
            description: "Save changes",
            icon: Save,
          },
        ],
      },
    ],
  },
}
