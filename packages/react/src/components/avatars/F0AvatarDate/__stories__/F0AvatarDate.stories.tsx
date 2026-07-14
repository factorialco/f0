import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarDate } from "../F0AvatarDate"

const meta = {
  component: F0AvatarDate,
  title: "Avatars/AvatarDate",
  tags: ["stable", "!autodocs"],
  parameters: {
    docs: {
      description: {
        component: ["An avatar component that displays a date."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
    date: {
      control: "date",
      description: "The date to display in the avatar",
    },
  },
} satisfies Meta<typeof F0AvatarDate>

export default meta

type Story = StoryObj<typeof F0AvatarDate>

// Fixed date for the example stories
const exampleDate = new Date(2024, 11, 13, 20, 0)

export const Default: Story = {
  args: {
    date: exampleDate,
  },
  // The Storybook "date" control emits a timestamp on change; coerce back to a
  // Date so the control stays interactive without breaking the component.
  render: ({ date, ...args }) => (
    <F0AvatarDate date={new Date(date)} {...args} />
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      <div className="flex flex-row gap-2">
        <F0AvatarDate date={exampleDate} />
      </div>
    </div>
  ),
}
