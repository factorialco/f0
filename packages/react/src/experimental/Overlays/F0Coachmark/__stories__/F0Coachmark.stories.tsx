import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, screen, userEvent, waitFor, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Coachmark } from "../index"

const meta = {
  title: "F0Coachmark",
  component: F0Coachmark,
  // !autodocs is required to opt out — autodocs is enabled globally in
  // .storybook/preview.tsx, so dropping the tag alone has no effect.
  tags: ["!autodocs", "experimental"],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
  },
  args: {
    title: "Filters got smarter",
    description:
      "Stack filters on jobs and candidates, then save the combination as a view your whole team can reuse.",
    action: { label: "Learn more", onClick: fn() },
    onDismiss: fn(),
  },
  decorators: [
    // The panel is portalled out of this box, so the decorator has to be tall
    // enough to contain it visually or it spills onto the next docs block.
    (Story) => (
      <div className="flex min-h-80 items-center justify-center p-6">
        {Story()}
      </div>
    ),
  ],
} satisfies Meta<typeof F0Coachmark>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    open: true,
    children: <F0Button variant="outline" label="Filters" />,
  },
}

/**
 * The coachmark is fully controlled. The consumer decides when to show it and
 * persists the dismissal — the component never reopens itself.
 */
export const Controlled: Story = {
  tags: ["no-sidebar"],
  args: {
    open: true,
    children: <F0Button variant="outline" label="Filters" />,
  },
  render: function Controlled(args) {
    const [open, setOpen] = useState(true)

    return (
      <div className="flex flex-col items-center gap-4">
        <F0Coachmark {...args} open={open} onDismiss={() => setOpen(false)}>
          <F0Button variant="outline" label="Filters" />
        </F0Coachmark>
        {!open && (
          <F0Button
            variant="ghost"
            label="Show again"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
    )
  },
}

/**
 * `arrow={false}` removes the pointer while keeping the anchored positioning.
 */
export const WithoutArrow: Story = {
  tags: ["no-sidebar"],
  args: {
    open: true,
    arrow: false,
    children: <F0Button variant="outline" label="Filters" />,
  },
}

/**
 * Title and CTA only — `description` is optional.
 */
export const WithoutDescription: Story = {
  tags: ["no-sidebar"],
  args: {
    open: true,
    description: undefined,
    children: <F0Button variant="outline" label="Filters" />,
  },
}

/**
 * The coachmark flips to the opposite side and shifts along the anchor when it
 * would overflow the viewport, so it stays visible near a screen edge.
 */
export const CollisionAware: Story = {
  tags: ["no-sidebar"],
  args: {
    open: true,
    side: "top",
    children: <F0Button variant="outline" label="Filters" />,
  },
  decorators: [
    (Story) => (
      <div className="flex h-64 items-start justify-start p-2">{Story()}</div>
    ),
  ],
}

const sides = ["top", "right", "bottom", "left"] as const

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  args: {
    open: true,
    children: <F0Button variant="outline" label="Filters" />,
  },
  parameters: withSnapshot({}),
  decorators: [(Story) => <div className="p-16">{Story()}</div>],
  // Each cell is sized so the panel never collides with the viewport or a
  // neighbour — otherwise Radix flips the side and the snapshot stops showing
  // the four orientations it is meant to cover.
  render: (args) => (
    <div className="grid grid-cols-2">
      {sides.map((side) => (
        <div
          key={side}
          className="flex h-96 w-[46rem] items-center justify-center"
        >
          <F0Coachmark {...args} side={side} open>
            <F0Button variant="outline" label={side} />
          </F0Coachmark>
        </div>
      ))}
    </div>
  ),
}

/**
 * Opening the coachmark moves focus to the panel itself rather than the
 * dismiss button, so a screen reader announces the message and Enter does not
 * immediately discard it. Escape and the close button both dismiss.
 */
export const KeyboardAndDismissal: Story = {
  tags: ["no-sidebar"],
  args: {
    open: true,
    children: <F0Button variant="outline" label="Filters" />,
  },
  play: async ({ args, step }) => {
    const dialog = await screen.findByRole("dialog")

    await step("focus lands on the panel, not the dismiss button", async () => {
      await waitFor(() => expect(dialog).toHaveFocus())
    })

    await step("the panel is named and described by its copy", async () => {
      await expect(dialog).toHaveAccessibleName("Filters got smarter")
    })

    await step("the CTA is reachable and fires its handler", async () => {
      const cta = within(dialog).getByRole("button", { name: "Learn more" })
      await userEvent.click(cta)
      await expect(args.action.onClick).toHaveBeenCalled()
    })

    await step("the close button dismisses", async () => {
      await userEvent.click(
        within(dialog).getByRole("button", { name: "Close" })
      )
      await expect(args.onDismiss).toHaveBeenCalled()
    })
  },
}

// F0Coachmark calls useI18n, so it cannot be rendered as inline JSX in MDX.
// These render inside the full decorator chain and are embedded in the docs
// through <Canvas> as DoDonts children.

export const DoDontsGoodCopy: Story = {
  tags: ["no-sidebar"],
  args: {
    open: true,
    title: "Filters got smarter",
    description:
      "Stack filters on jobs and candidates, then save the combination as a view your whole team can reuse.",
    action: { label: "Learn more", onClick: fn() },
    children: <F0Button variant="outline" label="Filters" />,
  },
}

export const DoDontsBadCopy: Story = {
  tags: ["no-sidebar"],
  args: {
    open: true,
    title: "Update",
    description:
      "We have made some changes to this area of the product that you might find useful, so please take a moment to review them whenever you get the chance.",
    action: { label: "OK", onClick: fn() },
    children: <F0Button variant="outline" label="Filters" />,
  },
}
