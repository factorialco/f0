import type { Meta, StoryObj } from "@storybook/react-vite"

import heart from "@factorialco/f0-core/assets/icons/app/heart.svg"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { Image } from "./index"

const meta = {
  title: "Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "no-sidebar"],
  args: {
    src: heart,
    width: 100,
    height: 100,
    alt: "Heart",
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

// `Image` is a thin passthrough to `<img>`, so its only real flexibility is
// intrinsic sizing — the snapshot renders the same source at a few sizes.
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-row items-end gap-6">
      {[24, 48, 96].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-f1-foreground-secondary">
            {size}px
          </span>
          <Image src={heart} width={size} height={size} alt="Heart" />
        </div>
      ))}
    </div>
  ),
}
