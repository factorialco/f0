import type { Meta, StoryObj } from "@storybook/react-vite"

import { fakePeople } from "@/mocks/people"

import { Celebration } from "./index"

const meta: Meta<typeof Celebration> = {
  component: Celebration,
  title: "Home/Communities/Celebration",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof Celebration>

// Fixed date for the example stories
const exampleDate = new Date(2024, 11, 13, 20, 0)

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <div className="w-48">
        <Celebration
          link="/"
          firstName={fakePeople.tobias.firstName}
          lastName={fakePeople.tobias.lastName}
          src={fakePeople.tobias.image}
          type="birthday"
          typeLabel="Birthday"
          date={exampleDate}
        />
      </div>
      <div className="w-48">
        <Celebration
          link="/"
          firstName={fakePeople.felix.firstName}
          lastName={fakePeople.felix.lastName}
          src={fakePeople.felix.image}
          type="anniversary"
          typeLabel="Anniversary"
          date={exampleDate}
        />
      </div>
    </>
  ),
}

export const WithReaction: Story = {
  render: () => (
    <div className="w-48">
      <Celebration
        link="/"
        firstName={fakePeople.lena.firstName}
        lastName={fakePeople.lena.lastName}
        src={fakePeople.lena.image}
        type="birthday"
        typeLabel="Birthday"
        date={exampleDate}
        lastEmojiReaction="😍"
      />
    </div>
  ),
}

export const NoImage: Story = {
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
  args: {
    link: "/",
    firstName: fakePeople.lena.firstName,
    lastName: fakePeople.lena.lastName,
    canReact: false,
    type: "first-day",
    typeLabel: "First day very long name",
    date: exampleDate,
  },
}

export const Skeleton: Story = {
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
  args: {},
  render: () => <Celebration.Skeleton />,
}
