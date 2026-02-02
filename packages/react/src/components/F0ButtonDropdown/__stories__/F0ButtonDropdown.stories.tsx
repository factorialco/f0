import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { Add, Delete, Pencil, Replace, Save } from "@/icons/app/index.ts"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters.ts"

import { F0ButtonDropdown } from "../index"
import { buttonDropdownSizes, buttonDropdownVariants } from "../types.ts"

const meta = {
  title: "ButtonDropdown",
  component: F0ButtonDropdown,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Components?node-id=15914-56173",
    },
    docs: {
      description: {
        component:
          "<p>Action button that allows to select the action using a dropdown.</p>" +
          "<p>This component received a list of items (each item has a value), when the user clicks the button the component emits the `onClick` event with the value of the item and the item itself</p>",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    onClick: (value, item) => {
      console.log("DropdownButton clicked => value:", value, "item:", item)
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: buttonDropdownVariants,
      description: "Visual style variant of the button",
      table: {
        type: {
          summary: buttonDropdownVariants.join(" | "),
        },
      },
    },
    size: {
      control: "select",
      options: buttonDropdownSizes,
      description: "Size of the button",
      table: {
        type: {
          summary: buttonDropdownSizes.join(" | "),
        },
      },
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    items: {
      table: {
        type: {
          summary: "ButtonDropdownItem[]",
          detail: `type ButtonDropdownItem = { 
  value: string; 
  label: string; 
  icon?: IconType; 
  critical?: boolean 
}`,
        },
      },
    },
    tooltip: {
      control: "text",
      description: "Tooltip to explain the button",
    },
    ...dataTestIdArgs,
  },
} satisfies Meta<typeof F0ButtonDropdown>

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

export const WithDataTestId: Story = {
  args: {
    variant: "default",
    dataTestId: "my-test-button-dropdown",
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
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button")
    await expect(button).toHaveAttribute(
      "data-testid",
      "my-test-button-dropdown"
    )
  },
}

// Basic Variants
export const WithTooltip: Story = {
  args: {
    variant: "default",
    tooltip: "Tooltip to explain the button",
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

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
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
        critical: true,
      },
    ],
  },
  render: (args) => <F0ButtonDropdown {...args} />,
}
