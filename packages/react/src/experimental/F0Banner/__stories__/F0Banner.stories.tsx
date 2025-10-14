import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Banner } from "../F0Banner"

const meta: Meta<typeof F0Banner> = {
  component: F0Banner,
  tags: ["experimental"],
  title: "Banner",
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the banner",
    },
    type: {
      control: "select",
      options: ["default", "positive", "warning", "info", "critical"],
      description: "The type of the banner",
    },
    compact: {
      control: "boolean",
      description: "Whether the banner is compact",
    },
  },
} satisfies Meta<typeof F0Banner>

export default meta

type Story = StoryObj<typeof F0Banner>

export const Default: Story = {
  args: {
    title: "This is a banner message",
    description:
      "This is a banner message that is very long and will wrap to the next line",
    type: "default",
    compact: false,
    link: {
      href: "/",
      target: "_blank",
      disabled: false,
      label: "Link",
    },
    actions: [
      {
        label: "Action",
        onClick: () => {},
      },
    ],
  },
}

export const Positive: Story = {
  args: {
    title: "This is a banner message",
    type: "positive",
    compact: false,
  },
}

export const LongTitle: Story = {
  args: {
    title:
      "This is a banner message that is very long and will wrap to the next line",
    type: "default",
    compact: false,
  },
}
