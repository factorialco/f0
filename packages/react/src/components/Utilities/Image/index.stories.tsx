import type { Meta, StoryObj } from "@storybook/react-vite"

import heart from "@factorialco/f0-core/assets/icons/app/heart.svg"

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
