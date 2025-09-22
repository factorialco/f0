import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { expect, within } from "storybook/test"
import { Link } from ".."

const meta = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable"],
  argTypes: {
    target: {
      control: "select",
      options: [undefined, "_blank", "_self", "_parent", "_top"],
    },
  },
  args: {
    children: "Link",
    href: "/foo",
    "data-test": "foo",
  },
} satisfies Meta<ComponentProps<typeof Link>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const link = canvas.getByRole("link")
    await expect(link.dataset.test).toBe("foo")
  },
  render: (args) => (
    <p>
      Do not click this <Link {...args} /> because it goes nowhere.
    </p>
  ),
}

export const Variants: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="[&>h3]:mt-5 [&>h3]:pb-2">
      <h3 className="!m-0">Basic usage</h3>
      <Link {...args} variant="link" />
      <h3>External link</h3>
      <Link {...args} variant="link" target="_blank" />
      <h3>Unstyled</h3>
      <Link {...args} variant="unstyled" />
      <h3>Disabled</h3>
      <Link {...args} variant="link" disabled />
    </div>
  ),
}

export const States: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex flex-row items-center justify-center space-x-6">
      <Link {...args} variant="link">
        Default link
      </Link>
      <Link {...args} variant="link" disabled>
        Disabled link
      </Link>
    </div>
  ),
}

export const InteractiveExamples: Story = {
  render: (args) => (
    <div className="flex flex-row items-center justify-center space-x-6">
      <Link {...args} variant="link" href="/internal">
        Internal link
      </Link>
      <Link {...args} variant="link" href="https://example.com" target="_blank">
        External link
      </Link>
    </div>
  ),
}
