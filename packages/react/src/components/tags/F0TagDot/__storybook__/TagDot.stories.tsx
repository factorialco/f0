import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0TagDot, tagDotColors } from "../"

const meta: Meta = {
  component: F0TagDot,
  title: "Tags/TagDot",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This is a component that is used to display a dot tag. They should be used to display categories, but not for statuses. Use the `TagStatus` component instead.",
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: tagDotColors,
      description: "The color of the dot",
      table: {
        type: {
          summary: tagDotColors.join(" | "),
        },
      },
    },
  },
  args: {
    text: "Label",
    color: "viridian",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultDotTag: Story = {}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => {
    return (
      <div className="flex w-[200px] flex-col gap-2 overflow-hidden border-[1px] border-dotted border-[#333]">
        <div className="flex flex-col gap-2">
          {tagDotColors.map((color) => (
            <div key={color} className="flex gap-4">
              <span className="w-20 font-medium">{color}</span>
              <F0TagDot key={color} text="Label" color={color} />
            </div>
          ))}

          <F0TagDot
            text="This is a long label text that should be truncated but should have an ellipsis and a tooltip"
            color="viridian"
          />
        </div>
      </div>
    )
  },
}
