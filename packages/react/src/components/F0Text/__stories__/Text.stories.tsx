import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Text } from "../index"

const meta = {
  component: F0Text,
  title: "Text",
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex w-full items-center justify-center p-4">
        <div className="w-full max-w-96">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof F0Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "body",
    children: "This is a text wrapped in the Text component.",
  },
}

export const Variants: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0Text variant="heading">Heading Text</F0Text>
      <F0Text variant="description">
        This is a description text. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </F0Text>
      <F0Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </F0Text>
      <F0Text variant="small">This is a small text.</F0Text>
    </div>
  ),
}

export const TextAlignment: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "body",
    children: "Text alignment",
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <F0Text {...args} align="left" />
      <F0Text {...args} align="center" />
      <F0Text {...args} align="right" />
    </div>
  ),
}

export const TextEllipsis: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "body",
    children:
      "This is a very long text that will be truncated with ellipsis when it exceeds the container width and demonstrates the ellipsis functionality.",
    ellipsis: true,
  },
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
}
