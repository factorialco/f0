import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarDate } from "../F0AvatarDate"

const meta: Meta<typeof F0AvatarDate> = {
  component: F0AvatarDate,
  title: "Avatars/AvatarDate",
  tags: ["autodocs"],
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
}

export default meta

type Story = StoryObj<typeof F0AvatarDate>

// Fixed date for the example stories
const exampleDate = new Date(2024, 11, 13, 20, 0)

export const Default: Story = {
  args: {
    date: exampleDate,
  },
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
