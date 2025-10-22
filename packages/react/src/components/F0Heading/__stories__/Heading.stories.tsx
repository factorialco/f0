import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Heading } from "../index"

const meta = {
  component: F0Heading,
  title: "Heading",
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
} satisfies Meta<typeof F0Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "heading",
    content: "This is a heading",
  },
}

export const Variants: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <F0Heading variant="heading-large" content="Heading Large" />
      <F0Heading variant="heading" content="Heading" />
    </div>
  ),
}

export const HeadingAlignment: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "heading",
    content: "Heading alignment",
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <F0Heading {...args} align="left" />
      <F0Heading {...args} align="center" />
      <F0Heading {...args} align="right" />
    </div>
  ),
}

export const HeadingEllipsis: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "heading",
    content:
      "This is a very long heading that will be truncated with ellipsis when it exceeds the container width",
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

export const SemanticTags: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <F0Heading variant="heading-large" as="h1" content="H1 Heading Large" />
      <F0Heading variant="heading" as="h2" content="H2 Heading" />
      <F0Heading variant="heading" as="h3" content="H3 Heading" />
      <F0Heading variant="heading" as="h4" content="H4 Heading" />
      <F0Heading variant="heading" as="h5" content="H5 Heading" />
      <F0Heading variant="heading" as="h6" content="H6 Heading" />
    </div>
  ),
}
