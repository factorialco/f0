import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Button } from "@/components/F0Button"
import { F0CardPopover } from "../index"
import {
  Briefcase,
  CalendarArrowRight,
  Check,
  Link,
  Person,
  Star,
} from "@/icons/app"
import { mockImage } from "@/testing/mocks/images"

const meta = {
  component: F0CardPopover,
  title: "CardPopover",
  parameters: {
    docs: {
      story: { inline: false, height: "400px" },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
    onChangeOpen: {
      action: "onChangeOpen",
      description: "Callback when open state changes",
    },
    children: {
      control: "object",
      description: "The children of the card popover",
    },
    metadata: {
      control: "object",
      description: "The metadata of the card popover",
    },
  },
  decorators: [
    (Story, context) => {
      if (context.parameters?.noMetaLayout) {
        return <Story />
      }
      return (
        <div className="flex h-[calc(100vh-32px)] w-full justify-center">
          <div className="w-full max-w-[372px]">
            <Story />
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof F0CardPopover>

export default meta
type Story = StoryObj<Meta<typeof F0CardPopover>>

export const Default = {
  args: {
    children: <F0Button variant="default" label="Open Card Popover"></F0Button>,
    primaryAction: {
      label: "Primary Action",
      icon: Check,
      onClick: () => alert("Primary action clicked"),
    },
    secondaryActions: [
      {
        label: "Secondary Action",
        icon: Check,
        onClick: () => alert("Secondary action clicked"),
      },
    ],
    metadata: [
      {
        icon: Briefcase,
        tooltip: "Job title",
        property: {
          type: "dotTag",
          value: {
            label: "Desireé is the best",
            color: "viridian",
          },
        },
      },
      {
        icon: Briefcase,
        tooltip: "Job title",
        property: {
          type: "text",
          value: "Design Engineer",
        },
      },
      {
        icon: CalendarArrowRight,
        tooltip: "Date",
        property: {
          type: "text",
          value: "3 years ago",
        },
      },
      {
        icon: Star,
        tooltip: "Status",
        property: {
          type: "status",
          value: {
            status: "positive",
            label: "Active",
          },
        },
      },
      {
        icon: Link,
        tooltip: "Link",
        property: {
          type: "text",
          value:
            "https://docs.google.com/spreadsheets/d/1jO1tPWhNe1y_ciSmNVYHugIPaOIEWOqrHR50Du2wvbc/edit",
        },
      },
      {
        icon: Person,
        tooltip: "Person",
        property: {
          type: "person",
          value: {
            firstName: "John",
            lastName: "Doe",
            src: mockImage("person", 0),
          },
        },
      },
    ],
  },
} as Story
