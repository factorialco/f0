import type { Meta, StoryObj } from "@storybook/react-vite"

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
        },
      },
    ],
  },
}
