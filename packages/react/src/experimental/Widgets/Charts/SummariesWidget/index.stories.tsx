import type { Meta } from "@storybook/react-vite"

import { WidgetDecorator } from "../storybook-utils"
import { SummariesWidget } from "./index"

const meta = {
  title: "Kits/Widgets/Charts/SummariesWidget",
  component: SummariesWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  args: {
    summaries: [
      {
        value: 12,
        label: "Total",
      },
      {
        value: 20,
        label: "Count",
      },
    ],
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof SummariesWidget>

export default meta

export const Default = {}
