import type { Meta, StoryObj } from "@storybook/react-vite";

import { expect, within } from "storybook/test";

import { Add, Delete, Pencil, Replace, Save } from "@/icons/app/index.ts";
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args";
import { withSnapshot } from "@/lib/storybook-utils/parameters.ts";

import { F0ButtonDropdown } from "../index";
import {
  buttonDropdownModes,
  buttonDropdownSizes,
  buttonDropdownVariants,
} from "../types.ts";

const meta = {
  title: "Button/ButtonDropdown",
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
  tags: ["stable"],
  args: {
    variant: "default",
    onClick: (value, item) => {
      console.log("DropdownButton clicked => value:", value, "item:", item);
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
    mode: {
      control: "select",
      options: buttonDropdownModes,
      description: "Rendering mode of the button",
      table: {
        type: {
          summary: buttonDropdownModes.join(" | "),
        },
      },
    },
    ...dataTestIdArgs,
  },
} satisfies Meta<typeof F0ButtonDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Variants
export const Default: Story = {
  tags: ["!dev"],
  args: {
    variant: "default",
    items: [
      {
        value: "save",
        label: "Save changes",
        icon: Save,
      },
      {
        value: "save-close",
        label: "Save and close",
        icon: Save,
      },
      {
        value: "discard",
        label: "Discard changes",
        icon: Delete,
        critical: true,
      },
    ],
  },
};

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
    const canvas = within(canvasElement);
    await expect(
      canvas.getByTestId("my-test-button-dropdown"),
    ).toBeInTheDocument();
  },
};

// Basic Variants
export const WithTooltip: Story = {
  tags: ["!dev"],
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
};

export const WithDescription: Story = {
  tags: ["!dev"],
  args: {
    items: [
      {
        value: "save",
        label: "Save changes",
        description: "Save without closing the form",
        icon: Save,
      },
      {
        value: "save-close",
        label: "Save and close",
        description: "Save and return to the list",
        icon: Save,
      },
      {
        value: "archive",
        label: "Archive employee",
        description: "Hide from active headcount",
        icon: Pencil,
      },
      {
        value: "delete",
        label: "Delete employee",
        description: "Permanently remove all data",
        icon: Delete,
        critical: true,
      },
    ],
  },
};

export const WithGroups: Story = {
  tags: ["!dev"],
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
};

// Dropdown mode stories
export const DropdownMode: Story = {
  tags: ["!dev"],
  args: {
    mode: "dropdown",
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
};

export const DropdownModeWithTrigger: Story = {
  tags: ["!dev"],
  args: {
    mode: "dropdown",
    trigger: "New action",
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
    ],
  },
};

export const DropdownModeWithGroups: Story = {
  tags: ["!dev"],
  args: {
    mode: "dropdown",
    trigger: "Actions",
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
};

export const Variants: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="flex flex-col gap-4">
      <F0ButtonDropdown
        variant="default"
        items={[
          { value: "save", label: "Save draft", icon: Save },
          {
            value: "delete",
            label: "Delete record",
            icon: Delete,
            critical: true,
          },
        ]}
        onClick={() => {}}
      />
      <F0ButtonDropdown
        variant="outline"
        items={[
          { value: "save", label: "Save draft", icon: Save },
          {
            value: "delete",
            label: "Delete record",
            icon: Delete,
            critical: true,
          },
        ]}
        onClick={() => {}}
      />
      <F0ButtonDropdown
        variant="neutral"
        items={[
          { value: "save", label: "Save draft", icon: Save },
          {
            value: "delete",
            label: "Delete record",
            icon: Delete,
            critical: true,
          },
        ]}
        onClick={() => {}}
      />
    </div>
  ),
};

export const Sizes: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="flex flex-col gap-4">
      <F0ButtonDropdown
        size="sm"
        items={[
          { value: "save", label: "Save draft", icon: Save },
          {
            value: "delete",
            label: "Delete record",
            icon: Delete,
            critical: true,
          },
        ]}
        onClick={() => {}}
      />
      <F0ButtonDropdown
        size="md"
        items={[
          { value: "save", label: "Save draft", icon: Save },
          {
            value: "delete",
            label: "Delete record",
            icon: Delete,
            critical: true,
          },
        ]}
        onClick={() => {}}
      />
      <F0ButtonDropdown
        size="lg"
        items={[
          { value: "save", label: "Save draft", icon: Save },
          {
            value: "delete",
            label: "Delete record",
            icon: Delete,
            critical: true,
          },
        ]}
        onClick={() => {}}
      />
    </div>
  ),
};

export const Modes: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="flex flex-col gap-4">
      <F0ButtonDropdown
        mode="split"
        items={[
          { value: "save", label: "Save draft", icon: Save },
          { value: "add", label: "Add item", icon: Add },
          {
            value: "delete",
            label: "Delete record",
            icon: Delete,
            critical: true,
          },
        ]}
        onClick={() => {}}
      />
      <F0ButtonDropdown
        mode="dropdown"
        trigger="Actions"
        items={[
          { value: "save", label: "Save draft", icon: Save },
          { value: "add", label: "Add item", icon: Add },
          {
            value: "delete",
            label: "Delete record",
            icon: Delete,
            critical: true,
          },
        ]}
        onClick={() => {}}
      />
    </div>
  ),
};

// Split mode: one action is clearly more frequent
export const SplitModeExample: Story = {
  tags: ["!dev"],
  args: {
    mode: "split",
    items: [
      { value: "save", label: "Save changes", icon: Save },
      { value: "save-close", label: "Save and close", icon: Save },
      {
        value: "discard",
        label: "Discard changes",
        icon: Delete,
        critical: true,
      },
    ],
  },
};

// Dropdown mode: no single action has priority
export const DropdownModeExample: Story = {
  tags: ["!dev"],
  args: {
    mode: "dropdown",
    trigger: "Export",
    items: [
      { value: "csv", label: "Export as CSV", icon: Add },
      { value: "pdf", label: "Export as PDF", icon: Add },
      { value: "xlsx", label: "Export as Excel", icon: Add },
    ],
  },
};

// When not to use: single action → use F0Button instead (shown as reference)
export const CriticalItems: Story = {
  tags: ["!dev"],
  args: {
    items: [
      { value: "save", label: "Save changes", icon: Save },
      { value: "archive", label: "Archive employee", icon: Pencil },
      {
        value: "delete",
        label: "Delete employee",
        icon: Delete,
        critical: true,
      },
    ],
  },
};

export const Snapshot: Story = {
  tags: ["!dev"],
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
};

// Do: only genuinely destructive actions marked as critical
export const DoDontCriticalDo: Story = {
  tags: ["!dev"],
  args: {
    items: [
      { value: "save", label: "Save changes", icon: Save },
      { value: "archive", label: "Archive record", icon: Pencil },
      {
        value: "delete",
        label: "Delete employee",
        icon: Delete,
        critical: true,
      },
    ],
  },
};

// Don't: non-destructive actions marked as critical
export const DoDontCriticalDont: Story = {
  tags: ["!dev"],
  args: {
    items: [
      { value: "save", label: "Save changes", icon: Save },
      { value: "export", label: "Export report", icon: Add, critical: true },
      {
        value: "notify",
        label: "Send notification",
        icon: Pencil,
        critical: true,
      },
    ],
  },
};
