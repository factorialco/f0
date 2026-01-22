import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import * as Icon from "../../../../icons/app"
import { Metadata } from "./index"

const meta: Meta<typeof Metadata> = {
  title: "Resource header/Metadata",
  component: Metadata,
  parameters: {
    layout: "padded",
  },
  tags: ["no-sidebar", "internal"],
}

export default meta

type Story = StoryObj<typeof Metadata>

export const Default: Story = {
  args: {
    items: [
      {
        label: "Type",
        value: { type: "text", content: "Text" },
      },
      {
        label: "Type",
        value: {
          type: "avatar",
          variant: {
            type: "team",
            name: "Avatar",
          },
          text: "Avatar",
        },
      },
      {
        label: "Type",
        value: {
          type: "status",
          label: "Status",
          variant: "warning",
        },
      },
      {
        label: "Type",
        value: {
          type: "list",
          variant: "person",
          avatars: [
            {
              type: "person",
              firstName: "Josep Jaume",
              lastName: "Rey",
            },
            {
              type: "person",
              firstName: "Nik",
              lastName: "Lopin",
            },
            {
              type: "person",
              firstName: "Josep Jaume",
              lastName: "Rey",
            },
            {
              type: "person",
              firstName: "Nik",
              lastName: "Lopin",
            },
            {
              type: "person",
              firstName: "Josep Jaume",
              lastName: "Rey",
            },
            {
              type: "person",
              firstName: "Nik",
              lastName: "Lopin",
            },
          ],
        },
      },
      {
        label: "Data list",
        value: {
          type: "data-list",
          data: Array(50)
            .fill(["Manager", "Direct report", "Self review", "Peer"])
            .flat(),
        },
      },
      {
        label: "Tag list",
        value: {
          type: "tag-list",
          tags: ["Projects", "Recruitment", "Tasks"],
        },
      },
      {
        label: "Type",
        value: {
          type: "dot-tag",
          label: "Dot tag",
          color: "malibu",
        },
      },
      {
        label: "Created",
        value: {
          type: "date",
          formattedDate: "January 15, 2023",
          icon: "warning",
        },
      },
    ],
  },
}

export const WithActions: Story = {
  args: {
    items: [
      {
        label: "Email",
        value: { type: "text", content: "info@factorial.co" },
        actions: [
          {
            type: "copy",
          },
          {
            label: "Edit",
            icon: Icon.Pencil,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Created",
        value: {
          type: "date",
          formattedDate: "January 15, 2023",
          icon: "critical",
        },
        actions: [
          {
            type: "copy",
          },
        ],
      },
    ],
  },
}
