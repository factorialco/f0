import { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { OmniButton } from "./index"

const meta: Meta<typeof OmniButton> = {
  title: "Omnibutton",
  component: OmniButton,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen w-screen">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs", "deprecated"],
}

export default meta

type Story = StoryObj<typeof OmniButton>

const mockOptions = [
  {
    title: "Let's talk",
    description: "Contact a specialist by phone.",
    href: "#",
    target: "_blank",
  },
  {
    title: "Drop us a line",
    description: "Send a support request form to our help team.",
    href: "#",
    target: "_blank",
  },
  {
    title: "Help Center",
    href: "#",
    target: "_blank",
  },
]

export const Default: Story = {
  args: {
    label: "Help",
    options: mockOptions,
    hasNewUpdate: false,
  },
}

export const WithNewUpdate: Story = {
  args: {
    label: "Help",
    options: mockOptions,
    hasNewUpdate: true,
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "omnibutton-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("omnibutton-test-id")).toBeInTheDocument()
  },
}
