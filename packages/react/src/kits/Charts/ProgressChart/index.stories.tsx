import type { Meta } from "@storybook/react-vite"

import { ProgressBar } from "./index"

const meta: Meta<typeof ProgressBar> = {
  title: "Charts/ProgressChart",
  component: ProgressBar,
  tags: ["autodocs"],
  args: {
    value: 60,
    label: "Label",
  },
  decorators: [
    (Story) => (
      <div className="max-w-80">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default = {}
