import type { Meta, StoryObj } from "@storybook/react-vite"
import type { ComponentType, ReactNode } from "react"

import { useState } from "react"
import { TOCItem } from "../../../experimental/Navigation/F0TableOfContent"
import { F0TableOfContentPopover } from "../index"
import { courseModulesData, mockTOCData } from "./mocks"

const meta: Meta<typeof F0TableOfContentPopover> = {
  title: "Navigation/TableOfContentPopover",
  component: F0TableOfContentPopover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A table of content popover component that shows minimized bars and expands to a full menu on hover. Inspired by Notion's collapsible navigation. Uses F0TableOfContent internally for the expanded menu.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Optional title displayed at the top of the menu popup",
    },
    barsAlign: {
      control: "select",
      options: ["left", "right"],
      description: "Alignment of the collapsed bars (left or right)",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description:
        "Maximum height of the popup: sm (max 240px), md (max 400px), lg (max 600px). Content auto-adjusts within limit.",
    },
    items: {
      control: false,
      description: `Array of menu items with hierarchical structure (same as F0TableOfContent). Each item can have:
        - id: Unique identifier
        - label: Display text
        - icon: Optional icon component
        - disabled: Whether the item is disabled
        - onClick: Callback when item is clicked
        - otherActions: Array of dropdown actions
        - children: Nested items (max 4 levels deep)`,
    },
    activeItem: {
      control: "text",
      description: "ID of the currently active item",
    },
    collapsible: {
      control: "boolean",
      description:
        "Enable collapsible sections in the popup menu (default: false)",
    },
    showChildrenCounter: {
      control: "boolean",
      description:
        "Show the count of children items next to parent items (default: false)",
    },
    variant: {
      control: "select",
      options: ["dark", "light"],
      description:
        'Visual variant: "dark" for light backgrounds (default), "light" for dark backgrounds',
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-[500px] w-[400px] items-center justify-start bg-f1-background-secondary p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// Helper to create story render functions and reduce repetition
const createStoryRender = (
  defaultActiveItem: string,
  getData: (setter: (id: string) => void) => TOCItem[] = mockTOCData,
  Wrapper?: ComponentType<{ children: ReactNode }>
): Story["render"] => {
  return (args) => {
    const [activeItem, setActiveItem] = useState(defaultActiveItem)
    const menu = (
      <F0TableOfContentPopover
        {...args}
        items={getData(setActiveItem)}
        activeItem={activeItem}
      />
    )
    return Wrapper ? <Wrapper>{menu}</Wrapper> : menu
  }
}

export const Default: Story = {
  render: createStoryRender("nested-child-1"),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Default menu without title. Sections are expanded by default. The popup appears centered over the trigger bars.",
      },
    },
  },
}

export const Collapsible: Story = {
  render: createStoryRender("nested-child-1"),
  args: { collapsible: true },
  parameters: {
    docs: {
      description: {
        story: "Menu with collapsible sections that can be expanded/collapsed.",
      },
    },
  },
}

export const WithChildrenCounter: Story = {
  render: createStoryRender("nested-child-1"),
  args: { showChildrenCounter: true, collapsible: true },
  parameters: {
    docs: {
      description: {
        story: "Menu showing the count of children items next to parent items.",
      },
    },
  },
}

export const SizeSmall: Story = {
  render: createStoryRender("nested-child-1"),
  args: { size: "sm" },
  parameters: {
    docs: {
      description: {
        story: "Small popup with max 240px height. Content auto-adjusts.",
      },
    },
  },
}

export const SizeLarge: Story = {
  render: createStoryRender("nested-child-1"),
  args: { size: "lg" },
  parameters: {
    docs: {
      description: {
        story: "Large popup with max 600px height. Content auto-adjusts.",
      },
    },
  },
}

const RightAlignedWrapper = ({ children }: { children: ReactNode }) => (
  <div className="flex w-full justify-end">{children}</div>
)

export const RightAligned: Story = {
  render: createStoryRender("nested-child-1", mockTOCData, RightAlignedWrapper),
  args: { barsAlign: "right" },
  parameters: {
    docs: {
      description: {
        story:
          "Menu with bars aligned to the right. The popup appears on the left side automatically.",
      },
    },
  },
}

export const WithTitle: Story = {
  render: createStoryRender("nested-child-1"),
  args: { title: "Table of Contents" },
  parameters: {
    docs: {
      description: {
        story: "Menu with an optional title header displayed at the top.",
      },
    },
  },
}

export const CourseModules: Story = {
  render: createStoryRender("mod-1-page-1", courseModulesData),
  args: { size: "lg" },
  parameters: {
    docs: {
      description: {
        story:
          "Course modules example with collapsible sections, icons for different content types (pages, videos, quizzes), and children counter.",
      },
    },
  },
}

const DarkBackgroundWrapper = ({ children }: { children: ReactNode }) => (
  <div className="flex h-full w-full items-center justify-start rounded-lg bg-f1-background-bold p-8">
    {children}
  </div>
)

export const DarkVariant: Story = {
  render: (args) => {
    const [activeItem, setActiveItem] = useState("nested-child-1")
    return (
      <DarkBackgroundWrapper>
        <F0TableOfContentPopover
          {...args}
          items={mockTOCData(setActiveItem)}
          activeItem={activeItem}
        />
      </DarkBackgroundWrapper>
    )
  },
  args: { variant: "dark" },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story:
          "Dark variant with lighter colored bars, designed for  backgrounds. The bars use lighter colors that are visible against dark surfaces.",
      },
    },
  },
}
