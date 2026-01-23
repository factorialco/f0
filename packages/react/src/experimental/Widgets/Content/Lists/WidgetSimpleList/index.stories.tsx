import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Default as DefaultWidgetSimpleListItemStory,
  WithLongTitle as WithLongTitleWidgetSimpleListItemStory,
} from "../../ListItems/WidgetSimpleListItem/index.stories"
import { WidgetSimpleList, WidgetSimpleListProps } from "./index"

const meta: Meta<WidgetSimpleListProps> = {
  title: "Widgets/WidgetSimpleList",
  component: WidgetSimpleList,
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
type Story = StoryObj<WidgetSimpleListProps>

export const Default: Story = {
  args: {
    items: new Array(10).fill(null).map((_, i) => ({
      id: i,
      ...DefaultWidgetSimpleListItemStory.args,
      title: DefaultWidgetSimpleListItemStory.args?.title ?? "Example title",
    })),
    onClickItem: () => {},
  },
}

export const WithLongTitles: Story = {
  args: {
    ...Default.args,
    items: new Array(10).fill(null).map((_, i) => ({
      id: i,
      ...WithLongTitleWidgetSimpleListItemStory.args,
      title:
        WithLongTitleWidgetSimpleListItemStory.args?.title ??
        "This item will show a really really long title",
    })),
  },
}

export const WithAllItems: Story = {
  args: {
    ...Default.args,
    showAllItems: true,
  },
}
