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
    header: { title: "Events", count: 2 },
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
 * View mode: the widgets and the add placeholder — adding is ALWAYS on offer;
 * edit mode is only for arranging what's already there.
 */
export const Default: Story = {}

/**
 * Edit mode: the movable widgets gain a remove control and become draggable.
 * A `locked` widget (the first here) stays inert — no drag, no remove.
 */
export const Editing: Story = {
  args: {
    editing: true,
    widgets: [{ ...WIDGETS[0], locked: true }, WIDGETS[1]],
  },
}

/**
 * `disableEdition` opts a column out entirely: no remove controls, no
 * dragging, and not even the add placeholder.
 */
export const EditingDisabled: Story = {
  args: { editing: true, disableEdition: true },
}

/** The rail variant — a tighter gap between its widgets than the main column. */
export const RightSide: Story = {
  args: { side: "right", editing: true },
}
