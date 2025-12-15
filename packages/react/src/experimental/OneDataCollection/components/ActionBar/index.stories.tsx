import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { Delete, EyeInvisible, EyeVisible, LayersFront, Settings, Share, Upload } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { fn } from "storybook/test"
import { ActionBar } from "."

const meta: Meta<typeof ActionBar> = {
  title: "ActionBar",
  component: ActionBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
    a11y: {
      // This rule is disabled as dark-themed buttons are not compliant, we have to fix this in Figma first
      // Meanwhile, disabling this rule
      skipCi: true,
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the action bar",
    },
    primaryActions: {
      control: false,
      description: "The primary action",
    },
    secondaryActions: {
      control: false,
      description: "The secondary actions",
    },
    selectedNumber: {
      control: "number",
      description:
        "The number of selected items. If not defined, the action bar will not show the selected items count and the unselect button.",
    },
    onUnselect: {
      control: false,
      description: "The function to unselect the items",
    },
  },
}

export default meta
type Story = StoryObj<typeof ActionBar>

interface Item {
  id: string
  name: string
  selected: boolean
}

export const Default: Story = {
  args: {
    isOpen: true,
    primaryActions: [
      {
        label: "Export",
        onClick: fn(),
        icon: Upload,
      },
    ],
    secondaryActions: [
      {
        label: "Share",
        onClick: fn(),
        icon: Share,
      },
      {
        label: "Duplicate",
        onClick: fn(),
        icon: LayersFront,
      },
      {
        label: "Edit permissions",
        onClick: fn(),
        icon: Settings,
      },
      {
        label: "Remove",
        onClick: fn(),
        icon: Delete,
        critical: true,
      },
    ],
    selectedNumber: 10,
    onUnselect: fn(),
  },
  render: (args) => {
    const [items, setItems] = useState<Item[]>([
      { id: "1", name: "Payslip 2025", selected: true },
      { id: "2", name: "Medical leaves", selected: false },
      { id: "3", name: "Contract", selected: false },
      { id: "4", name: "Employee expenses", selected: false },
      { id: "5", name: "ID card", selected: false },
    ])

    const selectedItems = items.filter((item) => item.selected)
    const hasSelectedItems = selectedItems.length > 0

    const toggleItem = (id: string) => {
      setItems(items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)))
    }

    const handleUnselect = () => {
      setItems(items.map((item) => ({ ...item, selected: false })))
    }

    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="h-fit w-[90%] max-w-[400px] overflow-hidden rounded-md bg-f1-background">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex h-[44px] items-center gap-3 border border-solid border-transparent border-b-f1-border-secondary px-2 last:border-b-transparent"
              id={item.id}
            >
              <F0Checkbox
                id={item.id}
                title={item.name}
                hideLabel
                checked={item.selected}
                onCheckedChange={() => toggleItem(item.id)}
              />
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
        <ActionBar
          {...args}
          isOpen={hasSelectedItems}
          selectedNumber={selectedItems.length}
          onUnselect={handleUnselect}
        />
      </div>
    )
  },
}

export const NoSelectedItems: Story = {
  args: {
    ...Default.args,
    secondaryActions: [
      {
        label: "Share",
        onClick: fn(),
        icon: Share,
      },
      {
        label: "Remove",
        onClick: fn(),
        icon: Delete,
        critical: true,
      },
    ],
    selectedNumber: undefined,
  },
  render: (args) => {
    const [open, setOpen] = useState(true)

    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <F0Button
          variant="outline"
          onClick={() => setOpen(!open)}
          label={open ? "Hide ActionBar" : "Show ActionBar"}
          icon={open ? EyeInvisible : EyeVisible}
        />
        <ActionBar {...args} isOpen={open} />
      </div>
    )
  },
}

export const MultiplePrimaryActions: Story = {
  args: {
    ...Default.args,
    primaryActions: [
      {
        label: "Export",
        onClick: fn(),
        icon: Upload,
      },
      {
        label: "Export to Excel",
        onClick: fn(),
        icon: Upload,
      },
      {
        label: "Export to PDF",
        onClick: fn(),
        icon: Upload,
      },
    ],
  },
}

const clickMock = (value: string) => {
  console.log("clicked", value)
}
export const WithGroupsAndDescription: Story = {
  args: {
    ...Default.args,
    primaryActions: [
      {
        label: "Export",
        items: [
          {
            label: "Export",
            onClick: () => clickMock("Export"),
            icon: Upload,
          },
          {
            label: "Export to Excel",
            onClick: () => clickMock("Export to Excel"),
            icon: Upload,
            description: "Export to Excel",
          },
          {
            label: "Export to PDF",
            onClick: () => clickMock("Export to PDF"),
            icon: Upload,
            description: "Export to PDF",
          },
        ],
      },
      {
        label: "Export Text",
        items: [
          {
            label: "Export to CSV",
            onClick: () => clickMock("Export to CSV"),
            icon: Upload,
            description: "Export to CSV",
          },
          {
            label: "Export to JSON",
            onClick: () => clickMock("Export to JSON"),
            icon: Upload,
            description: "Export to JSON",
          },
        ],
      },
    ],
    secondaryActions: [
      {
        label: "Share",
        onClick: () => clickMock("Share"),
        icon: Share,
      },
      {
        label: "Duplicate",
        onClick: () => clickMock("Duplicate"),
        icon: LayersFront,
        description: "Duplicate items",
      },
      {
        label: "Export to CSV",
        onClick: fn(),
        icon: Upload,
        description: "Export to CSV",
      },
      {
        label: "Delete",
        onClick: fn(),
        icon: Delete,
        description: "Delete items",
        critical: true,
      },
    ],
  },
}
