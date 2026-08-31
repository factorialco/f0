import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, userEvent, waitFor, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { Tooltip } from "./index"

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex h-32 items-center justify-center p-6">{Story()}</div>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: "View planmed hours",
    description: "View a breakdown of planned working hours.",
    children: <F0Button variant="outline" label="Planned hours" />,
  },
}

export const Snapshot: Story = {
  args: Basic.args,
  parameters: withSnapshot({}),
}

/**
 * A title, a body and a bulleted list. Bullets keep a set of separate reasons
 * legible — the same copy as one paragraph reads as a run-on sentence, since
 * tooltip text does not preserve line breaks.
 */
export const WithBulletedItems: Story = {
  args: {
    label: "3 alerts",
    description: "This row needs a look before it can be submitted.",
    items: [
      { title: "Not eligible", description: "Hired after the cycle cut-off." },
      {
        title: "Over the cap",
        description: "Raise exceeds the 10% guideline.",
      },
      "Missing effective date",
    ],
    children: <F0Button variant="outline" label="3 alerts" />,
  },
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.closest("body")!)

    await userEvent.hover(
      within(canvasElement).getByRole("button", { name: "3 alerts" })
    )

    const tooltip = await waitFor(() => body.getByRole("tooltip"))
    await expect(tooltip).toHaveTextContent("3 alerts")
    // Each bullet is its own list item, titles included.
    await expect(within(tooltip).getAllByRole("listitem")).toHaveLength(3)
    await expect(tooltip).toHaveTextContent(
      "Not eligible Hired after the cycle cut-off."
    )
    await expect(tooltip).toHaveTextContent("Missing effective date")
  },
}

/**
 * Bullets alone, with no title or body — a plain list of reasons.
 */
export const ItemsOnly: Story = {
  args: {
    items: ["Budget exceeded", "Currency outside the budget"],
    children: <F0Button variant="outline" label="2 alerts" />,
  },
}

export const WithShortcut: Story = {
  args: {
    label: "Collapse sidebar",
    children: <F0Button variant="outline" label="Hover me" />,
    shortcut: ["cmd", "."],
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Basic.args,
    dataTestId: "tooltip-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Tooltip trigger should have the test id
    await expect(canvas.getByTestId("tooltip-test-id")).toBeInTheDocument()
  },
}

/**
 * The child element carries a native HTML `title` attribute. Without handling
 * it, the browser would show its own tooltip on hover in addition to the F0
 * one, leaving the user with two overlapping tooltips. Hover the button: only
 * the F0 tooltip shows. The title text is preserved as an `aria-label` so the
 * accessible name survives even though the native tooltip is gone.
 */
export const ChildWithNativeTitle: Story = {
  args: {
    label: "Planned hours",
    description: "Only the F0 tooltip should show — no native browser tooltip.",
    children: (
      <button title="Native browser tooltip" data-testid="native-title-trigger">
        Hover me
      </button>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByTestId("native-title-trigger")
    // The native `title` is removed so only the F0 tooltip renders...
    await expect(trigger).not.toHaveAttribute("title")
    // ...but the accessible name is preserved via aria-label.
    await expect(trigger).toHaveAttribute(
      "aria-label",
      "Native browser tooltip"
    )
  },
}
