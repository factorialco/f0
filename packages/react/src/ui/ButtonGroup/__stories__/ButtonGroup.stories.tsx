import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Button } from "@/components/F0Button"

import { ButtonGroup } from "../ButtonGroup"

const meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    align: {
      control: "inline-radio",
      options: ["start", "end", "between"],
    },
    stackOnMobile: {
      control: "boolean",
    },
  },
  args: {
    align: "end",
    stackOnMobile: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl rounded-lg border border-solid border-f1-border-secondary p-4">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <ButtonGroup {...args}>
      <F0Button variant="outline" label="Cancel" onClick={() => {}} />
      <F0Button variant="default" label="Confirm" onClick={() => {}} />
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

/** Default: right-stacked, primary (last child) rightmost. */
export const Default: Story = {}

export const SpaceBetween: Story = {
  args: { align: "between" },
}

export const StackOnMobile: Story = {
  args: { stackOnMobile: true },
}
