import type { Meta, StoryObj } from "@storybook/react-vite"

import { WidgetInboxListItem, WidgetInboxListItemProps } from "./index"

const meta: Meta<WidgetInboxListItemProps> = {
  title: "Widgets/WidgetInboxListItem",
  component: WidgetInboxListItem,
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
type Story = StoryObj<WidgetInboxListItemProps>

export const Default: Story = {
  args: {
    id: "1",
    module: "clock-in",
    title: "Title",
    subtitle: "Module · 4 Nov 2024",
    onClick: () => {},
  },
}

export const DefaultModule: Story = {
  args: {
    id: "1",
    title: "Title",
    subtitle: "Module · 4 Nov 2024",
    onClick: () => {},
  },
}

export const WithLongTitle: Story = {
  args: {
    ...Default.args,
    title: "This item will show a really really really long title",
    subtitle: "This item will show a really really really long subtitle",
  },
}
