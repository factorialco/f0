import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Button } from "@/components/F0Button"

import { ButtonGroup, ButtonGroupSeparator } from "../ButtonGroup"

const meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    align: {
      control: "inline-radio",
      options: ["end", "between"],
    },
    gap: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    stack: {
      control: "inline-radio",
      options: ["none", "sm", "md", "container-md"],
    },
    fullWidthOnStack: { control: "boolean" },
    reverseOnStack: { control: "boolean" },
    wrap: { control: "boolean" },
  },
  args: {
    align: "end",
    gap: "md",
    stack: "none",
    fullWidthOnStack: false,
    reverseOnStack: false,
    wrap: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl rounded-lg border border-solid border-f1-border-secondary p-4">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <ButtonGroup {...args}>
      <F0Button variant="outline" label="Cancel" onClick={() => {}} />
      <F0Button variant="default" label="Confirm" onClick={() => {}} />
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

/** Default: right-aligned row, primary (last child) rightmost. */
export const Default: Story = {}

export const SpaceBetween: Story = {
  args: { align: "between" },
}

/**
 * Stack into a full-width column below the viewport `sm` breakpoint; resize the
 * canvas across 640px to see it become a row.
 */
export const StackOnMobile: Story = {
  args: { stack: "sm", fullWidthOnStack: true },
}

/**
 * `reverseOnStack` flips the stacked column order so the primary (last child)
 * sits on top when stacked, while the row order is unchanged at/above the
 * breakpoint. Resize across 640px: below it the primary is on top; above it the
 * primary is rightmost. (The whole column reverses, so any secondaries flip too.)
 */
export const StackReversed: Story = {
  args: { stack: "sm", fullWidthOnStack: true, reverseOnStack: true },
}

/** A `ButtonGroupSeparator` divides logical groups (hidden when stacked). */
export const WithSeparator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <F0Button variant="outline" label="Discard" onClick={() => {}} />
      <ButtonGroupSeparator />
      <F0Button variant="default" label="Save" onClick={() => {}} />
    </ButtonGroup>
  ),
}
