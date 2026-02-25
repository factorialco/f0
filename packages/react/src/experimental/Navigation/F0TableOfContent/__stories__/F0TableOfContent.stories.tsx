import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, within } from "storybook/test"

import { Placeholder } from "@/icons/app"

import { F0TableOfContent } from "../index"
import { TOCItem, TOCItemAction } from "../types"

const mockOtherActions: TOCItemAction[] = [
  {
    label: "Edit",
    onClick: fn(),
    icon: Placeholder,
  },
  {
    type: "separator",
  },
  {
    label: "Delete",
    onClick: fn(),
    icon: Placeholder,
  },
]

const mockTOCData = (setActiveItem: (id: string) => void): TOCItem[] => [
  {
    id: "simple-item",
    label: "Simple Item",
    onClick: setActiveItem,
    icon: Placeholder,
  },
  {
    id: "item-with-actions",
    label: "Item with Actions",
    onClick: setActiveItem,
    icon: Placeholder,

    otherActions: mockOtherActions,
  },
  {
    id: "section-1",
    label: "Section with Children",
    onClick: setActiveItem,
    icon: Placeholder,
    otherActions: mockOtherActions,
    children: [
      {
        id: "child-1",
        label: "Child Item 1",
        onClick: setActiveItem,
        icon: Placeholder,
        otherActions: mockOtherActions,
      },
      {
        id: "child-2",
        label: "Child Item 2",
        onClick: setActiveItem,
        otherActions: mockOtherActions,
      },
      {
        id: "nested-section",
        label: "Nested Section",
        onClick: setActiveItem,
        children: [
          {
            id: "nested-child-1",
            label: "Nested Child 1",
            onClick: setActiveItem,
          },
          {
            id: "deep-section",
            label: "Deep Section (Level 3)",
            onClick: setActiveItem,
            children: [
              {
                id: "deepest-item",
                label: "Deepest Item (Level 4)",
                onClick: setActiveItem,
              },
            ],
          },
        ],
      },
    ],
  },
]

const meta: Meta<typeof F0TableOfContent> = {
  title: "Navigation/TableOfContent",
  component: F0TableOfContent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A hierarchical table of contents component with support for up to 4 levels of nesting, collapsible sections, and drag & drop reordering.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title displayed at the top of the table of contents",
    },
    items: {
      control: false,
      description: `Array of TOC items with hierarchical structure. Each item can have:
        - id: Unique identifier
        - label: Display text
        - icon: Optional icon component
        - disabled: Whether the item is disabled
        - onClick: Callback when item is clicked
        - otherActions: Array of dropdown actions
        - children: Nested items (max 4 levels deep)
        
        The component automatically determines item types based on presence of children.`,
    },
    activeItem: {
      control: "text",
      description:
        "ID of the currently active item. This item will be highlighted with a selected background",
    },
    className: {
      control: "text",
      description:
        "Additional CSS classes to apply to the table of contents container",
    },
    collapsible: {
      control: "boolean",
      description:
        "Enable collapsible sections. When enabled, sections can be expanded/collapsed, and the path to the active item is automatically expanded.",
    },
    sortable: {
      control: "boolean",
      description:
        "Enable drag and drop reordering of items. When reordered, onReorder callback is called with hierarchical structure containing only IDs.",
    },
    onReorder: {
      action: "reordered",
      description:
        "Callback fired when items are reordered via drag and drop. Receives hierarchical structure with only IDs: [{ id: string, children?: { id: string }[] }]",
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[360px] w-fit border border-solid border-f1-border">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [activeItem, setActiveItem] = useState("nested-child-1")

    return (
      <F0TableOfContent
        {...args}
        items={mockTOCData(setActiveItem)}
        activeItem={activeItem}
        className="h-full"
        onReorder={(order) => {
          console.log("Items reordered:", order)
        }}
      />
    )
  },
  args: {
    title: "Table of Contents",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Collapsible: Story = {
  args: {
    collapsible: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows collapsible functionality.",
      },
    },
  },
}

export const Sortable: Story = {
  args: {
    sortable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows drag & drop reordering",
      },
    },
  },
}

export const WithSearchBox: Story = {
  args: {
    ...Collapsible.args,
    showSearchBox: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows collapsible functionality with a search box.",
      },
    },
  },
}

export const SortableWithSearchBox: Story = {
  args: {
    ...Sortable.args,
    showSearchBox: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows drag & drop reordering with a search box.",
      },
    },
  },
}

export const HideChildrenCounter: Story = {
  args: {
    ...Default.args,
    hideChildrenCounter: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows how to hide the children counter.",
      },
    },
  },
}

export const WithDataTestId: Story = {
  render: (args) => {
    const [activeItem, setActiveItem] = useState("nested-child-1")

    return (
      <F0TableOfContent
        {...args}
        dataTestId="toc-test-id"
        items={mockTOCData(setActiveItem)}
        activeItem={activeItem}
        className="h-full"
        onReorder={(order) => {
          console.log("Items reordered:", order)
        }}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("toc-test-id")).toBeInTheDocument()
  },
}
