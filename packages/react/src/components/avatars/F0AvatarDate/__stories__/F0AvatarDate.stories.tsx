import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarDate } from "../F0AvatarDate"

const meta = {
  component: F0AvatarDate,
  title: "Avatars/AvatarDate",
  tags: ["stable", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component: ["An avatar component that displays a date."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
    date: {
      control: "date",
      description: "The date to display in the avatar",
    },
  },
} satisfies Meta<typeof F0AvatarDate>

export default meta

type Story = StoryObj<typeof F0AvatarDate>

// Fixed date for the example stories
const exampleDate = new Date(2024, 11, 13, 20, 0)

export const Default: Story = {
  args: {
    date: exampleDate,
  },
  // The Storybook "date" control emits a timestamp on change; coerce back to a
  // Date so the control stays interactive without breaking the component.
  render: ({ date, ...args }) => (
    <F0AvatarDate date={new Date(date)} {...args} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Query by text, not by role. Unlike the other avatars this one does not go
    // through BaseAvatar, so it renders a bare <div> with no `role="img"` and no
    // `aria-hidden`: the two text nodes are the whole accessible contract, and
    // there is no role to query even if a story passed `aria-label`.
    //
    // "Dec", not "DEC" — the capitals come from the `uppercase` class, the text
    // node itself is what date-fns' "LLL" format returns. Both values are read
    // in local time, so the assertions are timezone-independent.
    //
    // toBeVisible, not toBeInTheDocument: this runs in a real browser with real
    // layout, so it can catch the month or the day being clipped out of the
    // fixed 40px box — the one thing the unit tests, in jsdom, cannot see.
    await expect(canvas.getByText("Dec")).toBeVisible()
    await expect(canvas.getByText("13")).toBeVisible()
  },
}

/**
 * The chip keeps its fixed 40px box whatever the date: single- and double-digit
 * days and every month abbreviation lay out identically, so a column of them
 * stays aligned instead of stepping in and out.
 */
export const Dates: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {[
        new Date(2024, 0, 1),
        new Date(2024, 4, 9),
        new Date(2024, 8, 30),
        exampleDate,
      ].map((date) => (
        <F0AvatarDate key={date.toISOString()} date={date} />
      ))}
    </div>
  ),
}

/**
 * In a list row the chip marks the date and the row's own text carries the rest
 * — including the year, which the chip never shows.
 */
export const InContext: Story = {
  render: () => (
    <div className="flex w-fit flex-row items-center gap-3">
      <F0AvatarDate date={exampleDate} />
      <div className="flex flex-col">
        <span className="font-medium text-f1-foreground">
          Design system review
        </span>
        <span className="text-sm text-f1-foreground-secondary">
          Friday, 13 December 2024 · 20:00
        </span>
      </div>
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      <div className="flex flex-row gap-2">
        <F0AvatarDate date={exampleDate} />
      </div>
    </div>
  ),
}
