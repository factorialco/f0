import type { Meta, StoryObj } from "@storybook/react-vite"

import { Check } from "@/icons/app"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TimelineRowLogCardItem } from "../"

const james = {
  name: "James Hopper",
  email: "james.hopper@example.com",
}
const hellen = {
  name: "Hellen Wagner",
  email: "hellen.wagner@example.com",
}
const danilo = {
  name: "Danilo Pereira",
  email: "danilo.pereira@example.com",
}
const maria = {
  name: "Maria González",
  email: "maria.gonzalez@example.com",
}
const ahmed = {
  name: "Ahmed Khan",
  email: "ahmed.khan@example.com",
}

const signedBadge = { icon: Check, type: "positive" as const }

const meta: Meta<typeof F0TimelineRowLogCardItem> = {
  component: F0TimelineRowLogCardItem,
  title: "TimelineRowLogCardItem",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A bordered card composing one or more file rows, designed to live inside the `content` slot of a `F0TimelineRow` nestedtask (e.g. signature requests). Each row shows a file, an assignees cluster (name + email tooltips, signed badges), an optional status tag and a hover-revealed actions cluster. Status stays visible on hover; assignees fade out and the actions cluster takes their place.",
      },
    },
  },
  argTypes: {
    rows: {
      description:
        "File rows hosted by the card. Each row has `file`, `assignees`, `status`, `actions`. Pass `file.onOpen` to add an Eye icon button that appears on row hover. Pass `assignee.badge = { icon: Check, type: 'positive' }` to mark a person as signed.",
    },
    ...dataTestIdArgs,
  },
} satisfies Meta<typeof F0TimelineRowLogCardItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rows: [
      {
        file: {
          name: "Employment contract.pdf",
          type: "pdf",
          onOpen: () => {},
        },
        assignees: [james, hellen, danilo],
        status: { text: "3 pending", variant: "warning" },
        actions: [
          { label: "Remind", variant: "neutral", size: "sm" },
          { label: "Cancel", variant: "neutral", size: "sm" },
        ],
      },
      {
        file: {
          name: "Confidentiality agreement.pdf",
          type: "pdf",
          onOpen: () => {},
        },
        assignees: [{ ...james, badge: signedBadge }],
        status: { text: "Signed", variant: "positive" },
      },
      {
        file: {
          name: "Offer letter.pdf",
          type: "pdf",
          onOpen: () => {},
        },
        assignees: [
          { ...james, badge: signedBadge },
          { ...hellen, badge: signedBadge },
          danilo,
        ],
        status: { text: "1 pending", variant: "warning" },
        actions: [{ label: "Remind", variant: "neutral", size: "sm" }],
      },
    ],
  },
}

export const Signed: Story = {
  args: {
    rows: [
      {
        file: {
          name: "Confidentiality agreement.pdf",
          type: "pdf",
          onOpen: () => {},
        },
        assignees: [
          { ...james, badge: signedBadge },
          { ...hellen, badge: signedBadge },
        ],
        status: { text: "Signed", variant: "positive" },
      },
    ],
  },
}

export const ManyAssignees: Story = {
  args: {
    rows: [
      {
        file: {
          name: "Team handbook.pdf",
          type: "pdf",
          onOpen: () => {},
        },
        assignees: [
          james,
          hellen,
          { ...danilo, badge: signedBadge },
          maria,
          ahmed,
        ],
        maxAssignees: 3,
        status: { text: "4 pending", variant: "warning" },
        actions: [{ label: "Remind all", variant: "neutral", size: "sm" }],
      },
    ],
  },
}

export const NoActions: Story = {
  args: {
    rows: [
      {
        file: { name: "Read-only.pdf", type: "pdf", onOpen: () => {} },
        assignees: [james, hellen],
        status: { text: "Signed", variant: "positive" },
      },
    ],
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: Default.args,
}
