import type { Meta, StoryObj } from "@storybook/react-vite"

import { fakePeople } from "@/mocks/people"

import { WidgetAvatarsListItem, WidgetAvatarsListItemProps } from "./index"

const meta: Meta<WidgetAvatarsListItemProps> = {
  title: "Widgets/WidgetAvatarsListItem",
  component: WidgetAvatarsListItem,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<WidgetAvatarsListItemProps>

export const Default: Story = {
  args: {
    id: "1",
    emoji: "🤝",
    title: "Title",
    subtitle: "4 people",
    avatars: [
      {
        firstName: fakePeople.noor.firstName,
        lastName: fakePeople.noor.lastName,
        src: fakePeople.noor.image,
      },
      {
        firstName: fakePeople.felix.firstName,
        lastName: fakePeople.felix.lastName,
        src: fakePeople.felix.image,
      },
      {
        firstName: fakePeople.tobias.firstName,
        lastName: fakePeople.tobias.lastName,
        src: fakePeople.tobias.image,
      },
      {
        firstName: fakePeople.lena.firstName,
        lastName: fakePeople.lena.lastName,
      },
    ],
    onClick: () => {},
  },
}

export const WithLongTitle: Story = {
  args: {
    ...Default.args,
    emoji: "🤝",
    title: "This item will show a really really really long title",
    subtitle: "4 people",
    avatars: [
      {
        firstName: fakePeople.noor.firstName,
        lastName: fakePeople.noor.lastName,
        src: fakePeople.noor.image,
      },
      {
        firstName: fakePeople.felix.firstName,
        lastName: fakePeople.felix.lastName,
        src: fakePeople.felix.image,
      },
      {
        firstName: fakePeople.tobias.firstName,
        lastName: fakePeople.tobias.lastName,
        src: fakePeople.tobias.image,
      },
      {
        firstName: fakePeople.lena.firstName,
        lastName: fakePeople.lena.lastName,
      },
    ],
  },
}

export const WithAlertAvatar: Story = {
  args: {
    ...Default.args,
    emoji: undefined,
    alert: "critical",
    remainingCount: 10,
  },
}
