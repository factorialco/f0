import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "../../../../../icons/app"
import { WidgetSimpleListItem, WidgetSimpleListItemProps } from "./index"

const meta: Meta<WidgetSimpleListItemProps> = {
  title: "Widgets/WidgetSimpleListItem",
  component: WidgetSimpleListItem,
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
type Story = StoryObj<WidgetSimpleListItemProps>

export const Default: Story = {
  args: {
    id: "1",
    icon: Placeholder,
    title: "Title",
    rightIcon: Placeholder,
    count: 2,
    alert: {
      text: "Info",
      level: "info",
    },
    rawTag: {
      text: "Label",
      icon: Placeholder,
    },
    onClick: () => {},
  },
}

export const WithLongTitle: Story = {
  args: {
    ...Default.args,
    title: "This item will show a really really long title",
  },
}
