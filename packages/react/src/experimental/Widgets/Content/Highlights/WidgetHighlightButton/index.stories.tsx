import type { Meta, StoryObj } from "@storybook/react-vite"

import { InfoCircle as InfoCircleIcon } from "../../../../../icons/app"
import { WidgetHighlightButton, WidgetHighlightButtonProps } from "./index"

const meta: Meta<WidgetHighlightButtonProps> = {
  title: "Widgets/WidgetHighlightButton",
  component: WidgetHighlightButton,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[165px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<WidgetHighlightButtonProps>

export const Default: Story = {
  args: {
    icon: InfoCircleIcon,
    iconClassName: "text-f1-icon-info",
    label: "Out of office",
    count: 51,
    onClick: () => {},
  },
}

export const WithLongTitle: Story = {
  args: {
    ...Default.args,
    label: "This item will show a really really long title",
  },
}

export const WithoutOnClick: Story = {
  args: {
    ...Default.args,
    onClick: undefined,
  },
}
