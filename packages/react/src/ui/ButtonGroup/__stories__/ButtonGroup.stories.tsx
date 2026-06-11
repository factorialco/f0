import type { Meta, StoryObj } from "@storybook/react-vite"

import { Delete, Pencil, Share } from "@/icons/app"

import { ButtonGroup } from "../ButtonGroup"

const noop = () => {}

const meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "inline-radio",
      options: ["end", "between"],
    },
    stack: {
      control: "inline-radio",
      options: ["none", "sm", "md", "container-md"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    fullWidthOnStack: { control: "boolean" },
    reverseOnStack: { control: "boolean" },
  },
  args: {
    align: "end",
    stack: "none",
    size: "md",
    fullWidthOnStack: false,
    reverseOnStack: false,
    secondaryActions: [{ id: "cancel", label: "Cancel", onClick: noop }],
    primaryAction: { id: "confirm", label: "Confirm", onClick: noop },
  },
  decorators: [
    // `@container` so the `stack="container-md"` option reacts to this box's
    // width (resize the canvas); the viewport `sm`/`md` options react to the
    // browser width instead.
    (Story) => (
      <div className="@container w-full max-w-xl rounded-lg border border-solid border-f1-border-secondary p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

/** Default: right-aligned row, the primary (solid) pinned at the trailing edge. */
export const Default: Story = {}

export const SpaceBetween: Story = {
  args: { align: "between" },
}

/**
 * More secondaries than fit: the ones that don't shed into a "⋯" menu, while the
 * primary stays pinned. Narrow the canvas to watch buttons collapse.
 */
export const Overflowing: Story = {
  args: {
    secondaryActions: [
      { id: "edit", label: "Edit", icon: Pencil, onClick: noop },
      { id: "share", label: "Share", icon: Share, onClick: noop },
      { id: "delete", label: "Delete", icon: Delete, onClick: noop },
    ],
    primaryAction: { id: "save", label: "Save changes", onClick: noop },
  },
}

/** Extra actions always live in the "⋯" menu via `otherActions`. */
export const WithOtherActions: Story = {
  args: {
    secondaryActions: [{ id: "edit", label: "Edit", onClick: noop }],
    otherActions: [
      { label: "Duplicate", onClick: noop },
      { type: "separator" },
      { label: "Delete", critical: true, onClick: noop },
    ],
    primaryAction: { id: "save", label: "Save", onClick: noop },
  },
}

/**
 * Destructive actions, two ways. **Guard** it (default for permanent resources):
 * put it in `otherActions` with `critical` so it sits behind the "⋯" — the extra
 * click is the safety gate. **One-click** (for cheap/recoverable resources): mark
 * an inline `secondaryActions` button `critical` to render a red button with no
 * extra click.
 */
export const CriticalActions: Story = {
  args: {
    secondaryActions: [
      { id: "edit", label: "Edit", onClick: noop },
      // One-click destructive button — use only when the resource is cheap to recreate.
      {
        id: "delete",
        label: "Delete",
        icon: Delete,
        critical: true,
        onClick: noop,
      },
    ],
    // Guarded destructive action — the safer default for permanent resources.
    otherActions: [
      { label: "Delete permanently", critical: true, onClick: noop },
    ],
    primaryAction: { id: "save", label: "Save", onClick: noop },
  },
}

/** An inline `{ type: "separator" }` divides logical groups (hidden when stacked). */
export const WithSeparator: Story = {
  args: {
    secondaryActions: [
      { id: "discard", label: "Discard", onClick: noop },
      { type: "separator" },
    ],
    primaryAction: { id: "save", label: "Save", onClick: noop },
  },
}

/**
 * Stack into a full-width column below the viewport `sm` breakpoint; resize the
 * canvas across 640px to see it become a row.
 */
export const StackOnMobile: Story = {
  args: { stack: "sm", fullWidthOnStack: true },
}

/**
 * `reverseOnStack` promotes the primary to the top of the stacked column, while
 * the row order is unchanged at/above the breakpoint. Resize across 640px.
 */
export const StackReversed: Story = {
  args: { stack: "sm", fullWidthOnStack: true, reverseOnStack: true },
}

/** The primary can be a split button (`type: "split"`), wrapping `F0ButtonDropdown`. */
export const SplitPrimary: Story = {
  args: {
    secondaryActions: [{ id: "discard", label: "Discard", onClick: noop }],
    primaryAction: {
      id: "publish",
      type: "split",
      items: [
        { value: "now", label: "Publish now" },
        { value: "schedule", label: "Schedule" },
      ],
      onClick: noop,
    },
  },
}
