import { Button } from "@/components/Actions/Button"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
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
  },
}

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title:
      "This is a banner message that is very long and will wrap to the next line",
  },
}

export const WithClose: Story = {
  args: {
    ...Default.args,
    onClose: () => {},
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleBanner = () => {
      setIsOpen((prev) => !prev)
    }

    return (
      <>
        {isOpen && <F0Banner {...args} onClose={toggleBanner} />}
        {!isOpen && (
          <Button
            label="Open"
            onClick={toggleBanner}
            size="sm"
            variant="outline"
          />
        )}
      </>
    )
  },
}
