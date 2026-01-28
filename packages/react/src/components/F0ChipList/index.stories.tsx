import type { Meta, StoryObj } from "@storybook/react-vite"

import avatar01 from "@storybook-static/avatars/person01.jpg"
import avatar02 from "@storybook-static/avatars/person02.jpg"
import avatar03 from "@storybook-static/avatars/person03.jpg"

import { F0ChipList } from "./index"

const meta = {
  component: F0ChipList,
  title: "ChipList",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof F0ChipList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    layout: "compact",
    max: 2,
    chips: [
      {
        label: "John Doe",
        avatar: {
          type: "person",
          firstName: "John",
          lastName: "Doe",
          src: avatar01,
        },
      },
      {
        label: "Jane Smith",
        avatar: {
          type: "person",
          firstName: "John",
          lastName: "Doe",
          src: avatar02,
        },
      },
      {
        label: "Bob Johnson",
        avatar: {
          type: "person",
          firstName: "John",
          lastName: "Doe",
          src: avatar03,
        },
      },
    ],
  },
}

export const WithClose: Story = {
  args: {
    ...Default.args,
    chips: Default.args.chips.map((chip) => ({
      ...chip,
      onClose: () => {},
    })),
  },
}

export const WithFillLayout: Story = {
  args: {
    ...Default.args,
    layout: "fill",
  },
  parameters: {
    layout: "padded",
  },
}
