import type { Meta, StoryObj } from "@storybook/react-vite"
import { WidgetInboxListItemProps } from "../../ListItems/WidgetInboxListItem"
import {
  Default as DefaulWidgetInboxListItemStory,
  WithLongTitle as WithLongTitleWidgetInboxListItemStory,
} from "../../ListItems/WidgetInboxListItem/index.stories"
import { WidgetInboxList, WidgetInboxListProps } from "."

const meta: Meta<WidgetInboxListProps> = {
  title: "Widgets/WidgetInboxList",
  component: WidgetInboxList,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="h-[320px] w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<WidgetInboxListProps>

export const Default: Story = {
  args: {
    items: Array.from({ length: 12 }, () => ({
      ...(DefaulWidgetInboxListItemStory.args as WidgetInboxListItemProps),
    })),
    onClickItem: () => {},
  },
}

export const WithLongTitles: Story = {
  args: {
    ...Default.args,
    items: Array.from({ length: 12 }, () => ({
      ...(WithLongTitleWidgetInboxListItemStory.args as WidgetInboxListItemProps),
    })),
  },
}

export const WithAllItems: Story = {
  args: {
    ...Default.args,
    showAllItems: true,
  },
}
