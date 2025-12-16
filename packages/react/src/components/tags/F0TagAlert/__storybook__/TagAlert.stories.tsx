import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0TagAlert } from "../"
import { levels } from "../types"

const meta: Meta = {
  component: F0TagAlert,
  title: "Tags/TagAlert",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A tag component that displays semantically a text alert with an icon and color based on the severity level.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    level: {
      control: "select",
      options: levels,
      table: {
        type: {
          summary: "Level",
        },
      },
    },
    text: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
  args: {
    text: "Info",
    level: "info",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const InfoAlertTag: Story = {}

export const WarningAlertTag: Story = {
  args: {
    text: "Warning",
    level: "warning",
  },
}

export const CriticalAlertTag: Story = {
  args: {
    text: "Critical",
    level: "critical",
  },
}

export const PositiveAlertTag: Story = {
  args: {
    text: "Success",
    level: "positive",
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-2">
      {levels.map((level) => (
        <F0TagAlert key={level} text={level} level={level} />
      ))}
    </div>
  ),
}
