import type { Meta, StoryObj } from "@storybook/react-vite"

import { VirtualItem } from "@tanstack/react-virtual"

import { VirtualList } from "./index"

const meta: Meta<typeof VirtualList> = {
  title: "VirtualList",
  component: VirtualList,
  tags: ["autodocs", "experimental"],
  argTypes: {
    renderer: { table: { disable: true } },
    itemCount: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const ItemComponent = (vi: VirtualItem) => {
  return (
    <div className="w-[200px]" tabIndex={0}>
      Row {vi.key + ""}
    </div>
  )
}

export const Default: Story = {
  args: {
    renderer: ItemComponent,
    itemSize: 32,
    itemCount: 100000,
    height: 400,
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-weight-bold text-xl">
          List of 100.000 elements
        </span>
        <div className="w-[250px]">
          <Story />
        </div>
      </div>
    ),
  ],
}
