import { withSnapshot } from "@/lib/storybook-utils/parameters"
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
    content: "This is a text wrapped in the Text component.",
  },
}

export const Variants: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0Text
        variant="description"
        content="This is a description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <F0Text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <F0Text variant="small" content="This is a small text." />
      <F0Text variant="code" content="const example = 'code text';" />
      <F0Text variant="label" content="Label text" />
    </div>
  ),
}

export const TextAlignment: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "body",
    content: "Text alignment",
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
    content:
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

export const Markdown: Story = {
  args: {
    content:
      "This is a **bold** text and this is a [link](https://www.google.com).",
    markdown: true,
  },
}

export const MarkdownWithEllipsis: Story = {
  args: {
    content:
      "This is a **bold** text and this is a [link](https://www.google.com), this is a **bold** text and this is a [link](https://www.google.com), this is a **bold** text and this is a [link](https://www.google.com).",
    markdown: true,
    ellipsis: true,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    content: "",
  },
  render: () => (
    <div className="flex w-fit flex-col gap-4">
      <h3 className="text-lg font-semibold">All Text Variants</h3>

      <section>
        <h4 className="text-lg font-semibold">All Variants</h4>
        <div className="flex flex-col gap-2">
          <F0Text variant="description" content="Description variant text" />
          <F0Text variant="body" content="Body variant text (default)" />
          <F0Text variant="small" content="Small variant text" />
          <F0Text variant="code" content="const code = 'Code variant text';" />
          <F0Text variant="label" content="Label variant text" />
          <F0Text variant="inverse" content="Inverse variant text" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Text Alignment</h4>
        <div className="flex w-96 flex-col gap-2">
          <F0Text variant="body" align="left" content="Left aligned text" />
          <F0Text variant="body" align="center" content="Center aligned text" />
          <F0Text variant="body" align="right" content="Right aligned text" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Text with Ellipsis</h4>
        <div className="w-96">
          <F0Text
            variant="body"
            content="This is a very long text that will be truncated with ellipsis when it exceeds the container width"
            ellipsis
          />
        </div>
      </section>
    </div>
  ),
}
