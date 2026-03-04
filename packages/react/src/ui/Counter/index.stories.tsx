import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { expect, within } from "storybook/test"

import { Counter } from "./index"

const meta = {
  title: "Counter",
  component: Counter,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-Components?node-id=252-8537&t=SrGKlGDdzYxFSTb8-4",
    },
  },
  tags: ["autodocs", "experimental"],
  args: {
    value: 42,
    size: "md",
    type: "default",
    maxValue: undefined,
  } satisfies ComponentProps<typeof Counter>,
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MaxValue: Story = {
  args: {
    value: 123,
    maxValue: 99,
    type: "bold",
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "counter-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("counter-test-id")).toBeInTheDocument()
  },
}
