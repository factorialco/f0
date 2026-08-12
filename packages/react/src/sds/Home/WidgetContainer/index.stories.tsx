import type { Meta, StoryObj } from "@storybook/react-vite"

import { Calendar, Clock } from "@/icons/app"

import { type HomeWidgetItem, listSlot } from "../slotRenderers"
import { WidgetContainer } from "./index"

const WIDGETS: HomeWidgetItem[] = [
  {
    id: "time-off",
    icon: Clock,
    header: { title: "Time off" },
    slots: [
      {
        visualization: "indicators",
        params: { items: [{ label: "Days left", content: "12" }] },
      },
    ],
  },
  {
    id: "events",
    icon: Calendar,
    // The way out of a widget: declared as `header.link`, drawn as a button in
    // the card's FOOTER (see `SlotWidget`).
    header: {
      title: "Events",
      count: 2,
      link: { title: "Go to Calendar", onClick: () => {} },
    },
    slots: [
      listSlot({ clickBehavior: "link" }, [
        { id: "1", title: "Design sync", href: "/calendar/1" },
        { id: "2", title: "All hands", href: "/calendar/2" },
      ]),
    ],
  },
]

const meta = {
  title: "Home/WidgetContainer",
  component: WidgetContainer,
  tags: ["autodocs", "experimental"],
  args: {
    widgets: WIDGETS,
    onRemoveWidget: () => {},
    onClickAddNewWidget: () => {},
    onReorder: () => {},
  },
  decorators: [
    (Story) => (
      <div className="max-w-96 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WidgetContainer>

export default meta
type Story = StoryObj<typeof meta>

/**
 * There is NO EDIT MODE. Every widget is draggable by its whole card (no handle
 * glyph) and carries "Remove widget" in the three-dots menu at its header's
 * top-right, and the column ends in the add placeholder — arranging a Home is
 * something you just do.
 */
export const Default: Story = {}

/**
 * A `locked` widget (the first here) is inert: it can't be dragged, nothing can
 * displace it, and it offers no menu at all — being mandatory, removing it is
 * not a choice the user has.
 */
export const WithLockedWidget: Story = {
  args: {
    widgets: [{ ...WIDGETS[0], locked: true }, WIDGETS[1]],
  },
}

/**
 * `disableEdition` opts a column out entirely: no remove menus, no dragging,
 * and not even the add placeholder.
 */
export const EditingDisabled: Story = {
  args: { disableEdition: true },
}

/** The rail variant — a tighter gap between its widgets than the main column. */
export const RightSide: Story = {
  args: { side: "right" },
}
