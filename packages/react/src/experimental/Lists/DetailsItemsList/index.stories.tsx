import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { TagListProps } from "@/components/tags/F0TagList"
import { TagDotProps } from "@/components/tags/F0TagDot"

import { DetailsItemsList } from "./index"

const meta: Meta = {
  title: "List/DetailsItemsList",
  component: DetailsItemsList,
  tags: ["autodocs", "experimental"],
  args: {
    title: "Details",
    details: [
      {
        title: "Legal entity",
        content: {
          type: "item",
          text: "Everyday Software SL",
          action: {
            type: "copy",
          },
        },
      },
      {
        title: "Manager",
        content: {
          type: "person",
          firstName: "Saul",
          lastName: "Dominguez",
          avatarUrl: "/avatars/person01.jpg",
          action: {
            type: "navigate",
            href: "",
          },
        },
      },
      {
        title: "Workable days",
        content: {
          type: "weekdays",
          activatedDays: [0, 1, 2],
        },
        spacingAtTheBottom: true,
      },
      {
        title: "Teams",
        content: [
          {
            type: "team",
            name: "Management",
            action: {
              href: "https://google.com",
              type: "navigate",
            },
          },
          {
            type: "team",
            name: "Engineering",
            action: {
              href: "https://google.com",
              type: "navigate",
            },
          },
        ],
      },
      {
        title: "Type",
        content: {
          type: "dot-tag",
          text: "Holidays",
          customColor: "#07A2AD",
          info: "Time off category used for annual leave",
        },
      },
      {
        title: "Status",
        content: {
          type: "alert-tag",
          text: "Approved",
          level: "positive",
          info: "Approved by your manager on Feb 28",
        },
      },
      {
        title: "Balance",
        content: {
          type: "balance-tag",
          hint: "vs last month",
          info: "Compared to the previous period",
          percentage: 8.5,
          amount: {
            numericValue: {
              value: 1522.48,
              units: "€",
              unitsPosition: "append",
            },
            formatterOptions: {
              decimalPlaces: 2,
              locale: "en-US",
            },
          },
        },
      },
      {
        title: "Review status",
        content: {
          type: "status-tag",
          text: "Pending review",
          variant: "warning",
        },
      },
      {
        title: "Category",
        content: {
          type: "raw-tag",
          text: "Engineering",
          info: "Department classification",
        },
      },
      {
        title: "Labels",
        content: {
          type: "tag-list",
          tagList: {
            type: "dot",
            tags: [
              { text: "Bug", customColor: "#E74C3C" },
              { text: "Feature", color: "viridian" },
              { text: "Urgent", customColor: "#F39C12" },
            ] as TagDotProps[],
          } as TagListProps<"dot">,
        },
      },
    ],
  },
} satisfies Meta<typeof DetailsItemsList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const TableView: Story = {
  args: {
    title: undefined,
    tableView: true,
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Primary.args,
    dataTestId: "details-items-list-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByTestId("details-items-list-test-id")
    ).toBeInTheDocument()
  },
}

export const TableViewWithPersonList: Story = {
  args: {
    title: "Team Members",
    tableView: true,
    details: [
      {
        title: "Manager",
        content: {
          type: "person",
          firstName: "Saul",
          lastName: "Dominguez",
          avatarUrl: "/avatars/person01.jpg",
        },
      },
      {
        title: "Tech Lead",
        content: {
          type: "person",
          firstName: "Dani",
          lastName: "Moreno",
          avatarUrl: "/avatars/person05.jpg",
        },
      },
      {
        title: "Designer",
        content: {
          type: "person",
          firstName: "Josep Jaume",
          lastName: "Rey Peroy",
          avatarUrl: "/avatars/person07.jpg",
        },
      },
      {
        title: "Engineers",
        content: [
          {
            type: "person",
            firstName: "Alex",
            lastName: "Garcia",
            avatarUrl: "/avatars/person06.jpg",
          },
          {
            type: "person",
            firstName: "Maria",
            lastName: "Lopez",
            avatarUrl: "/avatars/person02.jpg",
          },
        ],
      },
    ],
  },
}

export const WithAvatarList: Story = {
  args: {
    title: "Details",
    details: [
      {
        title: "Participants",
        content: {
          type: "avatar-list",
          avatarList: {
            type: "person",
            size: "sm",
            remainingCount: 9,
            avatars: [
              {
                firstName: "Saul",
                lastName: "Dominguez",
                src: "/avatars/person01.jpg",
              },
              {
                firstName: "Dani",
                lastName: "Moreno",
                src: "/avatars/person05.jpg",
              },
              {
                firstName: "Josep Jaume",
                lastName: "Rey Peroy",
                src: "/avatars/person07.jpg",
              },
            ],
          },
        },
      },
      {
        title: "Publish on",
        content: {
          type: "item",
          text: "Now",
        },
      },
      {
        title: "Anonymous answers",
        content: {
          type: "item",
          text: "No",
        },
      },
    ],
  },
}

export const TableViewWithAvatarList: Story = {
  args: {
    tableView: true,
    details: [
      {
        title: "Participants",
        content: {
          type: "avatar-list",
          avatarList: {
            type: "person",
            size: "sm",
            remainingCount: 9,
            avatars: [
              {
                firstName: "Saul",
                lastName: "Dominguez",
                src: "/avatars/person01.jpg",
              },
              {
                firstName: "Dani",
                lastName: "Moreno",
                src: "/avatars/person05.jpg",
              },
              {
                firstName: "Josep Jaume",
                lastName: "Rey Peroy",
                src: "/avatars/person07.jpg",
              },
            ],
          },
        },
      },
      {
        title: "Publish on",
        content: {
          type: "item",
          text: "Now",
        },
      },
      {
        title: "Anonymous answers",
        content: {
          type: "item",
          text: "No",
        },
      },
    ],
  },
}

export const WithTeamAvatarList: Story = {
  args: {
    title: "Project Info",
    tableView: true,
    details: [
      {
        title: "Teams",
        content: {
          type: "avatar-list",
          avatarList: {
            type: "team",
            size: "sm",
            remainingCount: 9,
            avatars: [
              { name: "Engineering" },
              { name: "Design" },
              { name: "Management" },
              { name: "Marketing" },
            ],
          },
        },
      },
      {
        title: "Companies",
        content: {
          type: "avatar-list",
          avatarList: {
            type: "company",
            size: "sm",
            remainingCount: 9,
            avatars: [
              { name: "Factorial", src: "/avatars/company01.jpg" },
              { name: "Acme Corp", src: "/avatars/company02.jpg" },
            ],
          },
        },
      },
      {
        title: "Status",
        content: {
          type: "dot-tag",
          text: "Active",
          customColor: "#07A2AD",
          info: "Project is currently active",
        },
      },
      {
        title: "Priority",
        content: {
          type: "alert-tag",
          text: "High priority",
          level: "warning",
          info: "Escalated by the project lead",
        },
      },
      {
        title: "Growth",
        content: {
          type: "balance-tag",
          hint: "vs last quarter",
          info: "Revenue growth compared to Q3",
          invertStatus: true,
          percentage: -3.2,
          amount: {
            numericValue: {
              value: -450.0,
              units: "$",
              unitsPosition: "prepend",
            },
            formatterOptions: {
              decimalPlaces: 2,
              locale: "en-US",
            },
          },
        },
      },
      {
        title: "Phase",
        content: {
          type: "status-tag",
          text: "In progress",
          variant: "info",
        },
      },
      {
        title: "Tag",
        content: {
          type: "raw-tag",
          text: "Internal",
          info: "Only visible to internal team members",
        },
      },
      {
        title: "Statuses",
        content: {
          type: "tag-list",
          tagList: {
            type: "status",
            tags: [
              { text: "Active", variant: "positive" },
              { text: "Paused", variant: "warning" },
            ],
          } as TagListProps<"status">,
        },
      },
    ],
  },
}
