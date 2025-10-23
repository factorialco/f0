import { withSnapshot } from "@/lib/storybook-utils/parameters"
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

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    content: "",
  },
  render: () => (
    <div className="flex w-fit flex-col gap-4">
      <h3 className="text-lg font-semibold">All Heading Variants</h3>

      <section>
        <h4 className="text-lg font-semibold">Variants</h4>
        <div className="flex flex-col gap-2">
          <F0Heading variant="heading-large" content="Heading Large" />
          <F0Heading variant="heading" content="Heading" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Heading Alignment</h4>
        <div className="flex w-96 flex-col gap-2">
          <F0Heading
            variant="heading"
            align="left"
            content="Left aligned heading"
          />
          <F0Heading
            variant="heading"
            align="center"
            content="Center aligned heading"
          />
          <F0Heading
            variant="heading"
            align="right"
            content="Right aligned heading"
          />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Heading with Ellipsis</h4>
        <div className="w-96">
          <F0Heading
            variant="heading"
            content="This is a very long heading that will be truncated with ellipsis when it exceeds the container width"
            ellipsis
          />
        </div>
      </section>
    </div>
  ),
}
