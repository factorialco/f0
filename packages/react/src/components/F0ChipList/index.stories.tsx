import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { fakePeople } from "@/mocks/people"

import { F0ChipList } from "./index"

const meta = {
  component: F0ChipList,
  title: "Chip/ChipList",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    ...dataTestIdArgs,
  },
} satisfies Meta<typeof F0ChipList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    layout: "compact",
    max: 2,
    chips: [
      {
        label: fakePeople.noor.fullName,
        avatar: {
          type: "person",
          firstName: fakePeople.noor.firstName,
          lastName: fakePeople.noor.lastName,
          src: fakePeople.noor.image,
        },
      },
      {
        label: fakePeople.hana.fullName,
        avatar: {
          type: "person",
          firstName: fakePeople.hana.firstName,
          lastName: fakePeople.hana.lastName,
          src: fakePeople.hana.image,
        },
      },
      {
        label: fakePeople.caleb.fullName,
        avatar: {
          type: "person",
          firstName: fakePeople.caleb.firstName,
          lastName: fakePeople.caleb.lastName,
          src: fakePeople.caleb.image,
        },
      },
    ],
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "my-test-chip-list",
    chips: [
      {
        label: "Chip with Test ID",
        avatar: {
          type: "person",
          firstName: fakePeople.noor.firstName,
          lastName: fakePeople.noor.lastName,
          src: fakePeople.noor.image,
        },
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("my-test-chip-list")).toBeInTheDocument()
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
