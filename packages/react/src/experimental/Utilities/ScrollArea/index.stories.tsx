import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { F0Alert } from "@/components/F0Alert"
import { Placeholder } from "@/lib/storybook-utils/placeholder"

import { ScrollArea } from "./index"

const meta = {
  title: "ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental", "no-sidebar"],
  args: {},
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (props) => (
    <div className="flex h-96 flex-col gap-4 overflow-hidden">
      <ScrollArea {...props}>
        <StackWithOverflow />
      </ScrollArea>
    </div>
  ),
}

export const WithDataTestId: Story = {
  args: {
    dataTestId: "my-test-scroll-area",
  } as Record<string, unknown>,
  render: (props) => (
    <div className="flex h-96 flex-col gap-4 overflow-hidden">
      <ScrollArea {...props}>
        <StackWithOverflow />
      </ScrollArea>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector(
      "[data-test-id='my-test-scroll-area']"
    )
    await expect(root).toBeInTheDocument()
    await expect(root).toHaveAttribute("data-test-id", "my-test-scroll-area")
  },
}

export const Horizontal: Story = {
  args: {},
  render: (props) => (
    <div className="flex w-48 flex-col gap-4 overflow-hidden">
      <ScrollArea {...props}>
        <StackWithOverflow length={4} />
      </ScrollArea>
    </div>
  ),
}

export const Both: Story = {
  args: {},
  render: (props) => (
    <div className="flex h-96 w-48 flex-row gap-4 overflow-hidden">
      <ScrollArea {...props}>
        <StackWithOverflow />
      </ScrollArea>
    </div>
  ),
}

export const Comparison: Story = {
  args: {},
  render: (props) => (
    <div className="h-96 flex-row gap-8">
      <div className="flex h-full flex-col gap-4 overflow-hidden">
        <F0Alert
          variant="positive"
          title="New ScrollArea Component"
          description="This is a new scroll area component"
        />
        <ScrollArea {...props}>
          <StackWithOverflow />
        </ScrollArea>
      </div>
      <div className="flex h-full flex-col gap-4 overflow-hidden">
        <F0Alert
          variant="warning"
          title="Default ScrollBar"
          description="This is a default scroll bar component"
        />
        <div className="flex flex-col gap-4 overflow-auto">
          <StackWithOverflow />
        </div>
      </div>
    </div>
  ),
}

const StackWithOverflow = ({ length = 20 }: { length?: number }) => (
  <div className="flex w-96 flex-col gap-4">
    <F0Button
      label="Some button"
      onClick={() =>
        alert(
          "This button is needed so the content can be focused for accessibility purposes."
        )
      }
    />
    {Array.from({ length }).map((_, i) => (
      <Placeholder key={i}>
        Element {i + 1} in a scrollable placeholder
      </Placeholder>
    ))}
  </div>
)
