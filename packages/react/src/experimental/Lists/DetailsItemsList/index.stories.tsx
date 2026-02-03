import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

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
