import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TagStatus } from "../"
import { statuses } from "../types"

const meta: Meta = {
  component: F0TagStatus,
  title: "Tags/TagStatus",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A tag component that displays a status with a label. This should not be used for user uses cases rather than status, e.g. for alerts, use `TagAlert` instead.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: statuses,
      table: {
        type: {
          summary: "StatusVariant",
        },
      },
    },
  },
  args: {
    text: "Label",
    variant: "neutral",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const NeutralStatusTag: Story = {}

export const InfoStatusTag: Story = {
  args: {
    variant: "info",
  },
}

export const PositiveTag: Story = {
  args: {
    variant: "positive",
  },
}

export const WarningStatusTag: Story = {
  args: {
    variant: "warning",
  },
}

export const CriticalStatusTag: Story = {
  args: {
    variant: "critical",
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[200px] flex-col gap-2 overflow-hidden border-[1px] border-dotted border-[#333]">
      <h3 className="text-lg font-semibold">All Status Tags</h3>
      {statuses.map((status) => (
        <F0TagStatus key={status} text={status} variant={status} />
      ))}

      <F0TagStatus
        text="This is a long label text that should be truncated but should have an ellipsis and a tooltip"
        variant="critical"
      />
    </div>
  ),
}
