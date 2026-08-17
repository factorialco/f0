import type { Meta, StoryObj } from "@storybook/react-vite"

import { Calendar, Clock } from "@/icons/app"

import { type HomeWidgetItem, listSlot, widgetTitle } from "../slotRenderers"
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

/**
 * A COLUMN LONGER THAN ITS SCROLL REGION, `virtualized`: 50 widgets, of which
 * only the handful in view (plus the overscan) is in the DOM. Inspect the column
 * while you scroll it — the cards ahead and behind are not hidden, they are not
 * there, and the box they sit in holds the height of all 50 so the scrollbar
 * still describes the whole column.
 *
 * The scroll region is the column's nearest scrollable ancestor, which here is
 * the decorator's own box; `NewHomeLayout` hands its columns theirs.
 *
 * `estimateHeight` is what an unmounted card is assumed to be worth, and these
 * are small ones — left at the 280px default the column would claim nearly twice
 * its real height and the scrollbar would shrink under your thumb as the cards
 * you scroll past get measured. Aim it at the cards you actually have.
 */
export const Virtualized: Story = {
  args: {
    widgets: Array.from({ length: 50 }, (_, index) => {
      const source = WIDGETS[index % WIDGETS.length]!
      return {
        ...source,
        id: `widget-${index}`,
        header: {
          ...source.header,
          title: `${index + 1}. ${widgetTitle(source)}`,
        },
      }
    }),
    virtualized: { estimateHeight: 150 },
  },
  decorators: [
    (Story) => (
      <div className="h-[480px] max-w-96 overflow-y-auto p-4">
        <Story />
      </div>
    ),
  ],
}
