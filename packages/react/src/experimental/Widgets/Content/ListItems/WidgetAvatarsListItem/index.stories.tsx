import type { Meta, StoryObj } from "@storybook/react-vite"

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
        firstName: "Miguel",
        lastName: "Pousa",
        src: "/avatars/person01.jpg",
      },
      {
        firstName: "Nik",
        lastName: "Lopin",
        src: "/avatars/person02.jpg",
      },
      {
        firstName: "Josep Jaume",
        lastName: "Rey",
        src: "/avatars/person03.jpg",
      },
      {
        firstName: "Saúl",
        lastName: "Domínguez",
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
        firstName: "Miguel",
        lastName: "Pousa",
        src: "/avatars/person01.jpg",
      },
      {
        firstName: "Nik",
        lastName: "Lopin",
        src: "/avatars/person02.jpg",
      },
      {
        firstName: "Josep Jaume",
        lastName: "Rey",
        src: "/avatars/person03.jpg",
      },
      {
        firstName: "Saúl",
        lastName: "Domínguez",
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
