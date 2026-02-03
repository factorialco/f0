import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { expect, within } from "storybook/test"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Link } from ".."
import { linkVariants } from "../types"

const meta = {
  title: "Link",
  component: F0Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable"],
  argTypes: {
    target: {
      control: "select",
      options: [undefined, "_blank", "_self", "_parent", "_top"],
    },
    variant: {
      control: "select",
      options: linkVariants,
    },
    tooltip: {
      control: "text",
      description: "The tooltip to show when the link is hovered.",
    },
    ...dataTestIdArgs,
  },
  args: {
    children: "Link",
    href: "/foo",
    "data-test": "foo",
  },
} satisfies Meta<ComponentProps<typeof F0Link>>

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
      Do not click this <F0Link {...args} /> because it goes nowhere.
    </p>
  ),
}

export const WithDataTestId: Story = {
  args: {
    children: "Link with Test ID",
    href: "/foo",
    dataTestId: "my-test-link",
  },
  render: (args) => (
    <p>
      <F0Link {...args} />
    </p>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas
      .getByRole("link", {
        name: "Link with Test ID",
      })
      .closest("[data-testid]")
    await expect(link).toHaveAttribute("data-testid", "my-test-link")
  },
}

export const States: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex flex-row items-center justify-center space-x-6">
      <F0Link {...args} variant="link">
        Default link
      </F0Link>
      <F0Link {...args} variant="link" disabled>
        Disabled link
      </F0Link>
    </div>
  ),
}

export const InteractiveExamples: Story = {
  render: (args) => (
    <div className="flex flex-row items-center justify-center space-x-6">
      <F0Link {...args} variant="link" href="/internal">
        Internal link
      </F0Link>
      <F0Link
        {...args}
        variant="link"
        href="https://example.com"
        target="_blank"
      >
        External link
      </F0Link>
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="[&>h3]:mt-5 [&>h3]:pb-2">
      <h3 className="!m-0">Basic usage</h3>
      <F0Link {...args} variant="link" />
      <h3>External link</h3>
      <F0Link {...args} variant="link" target="_blank" />
      <h3>Unstyled</h3>
      <F0Link {...args} variant="unstyled" />
      <h3>Disabled</h3>
      <F0Link {...args} variant="link" disabled />
      <h3>Tooltip</h3>
      <F0Link {...args} variant="link" tooltip="Tooltip" />
    </div>
  ),
}
