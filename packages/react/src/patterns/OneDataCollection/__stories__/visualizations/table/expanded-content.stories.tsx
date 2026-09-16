import { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, userEvent, within } from "storybook/test"
import { OneDataCollection } from "../../.."
import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { ExpandedContentContext } from "../../../visualizations/collection/Table/types"

/**
 * `renderExpandedContent` gives a row an expander that opens a full-width panel
 * beneath it — a free-form region spanning every column, for detail that does
 * not fit in a cell. Return `undefined` for a row that has nothing to reveal.
 *
 * Only rows without children get one: a row that `itemsWithChildren` claims
 * already owns the chevron for its children.
 */
const meta = {
  title: "Data Collection/Visualizations/Table/Expanded content",
  parameters: { layout: "padded" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type Day = {
  id: string
  name: string
  hours: string
  editable: boolean
  children?: Day[]
}

const TREE: Day[] = [
  {
    id: "alice",
    name: "Alice Doe",
    hours: "16h 00m",
    editable: false,
    children: [
      { id: "alice-mon", name: "Monday", hours: "8h 00m", editable: true },
      { id: "alice-tue", name: "Tuesday", hours: "8h 00m", editable: true },
    ],
  },
  { id: "bob", name: "Bob Stone", hours: "6h 00m", editable: true },
  { id: "cleo", name: "Cleo Vance", hours: "8h 00m", editable: false },
]

const indexTree = (nodes: Day[], into = new Map<string, Day>()) => {
  nodes.forEach((node) => {
    into.set(node.id, node)
    if (node.children) {
      indexTree(node.children, into)
    }
  })
  return into
}

const byId = indexTree(TREE)

const columns = [
  { id: "name", label: "Name", render: (day: Day) => day.name },
  { id: "hours", label: "Hours", width: 140, render: (day: Day) => day.hours },
] as const

/** A small editable panel, so the story exercises interactive content. */
const ShiftPanel = ({ day, onDone }: { day: Day; onDone: () => void }) => {
  const [start, setStart] = useState("09:00")
  const [end, setEnd] = useState("17:00")

  return (
    <div className="flex flex-col gap-3 bg-f1-background-secondary p-4">
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-f1-foreground-secondary">
          Start
          <input
            className="rounded-sm border border-solid border-f1-border p-1"
            value={start}
            onChange={(event) => setStart(event.target.value)}
          />
        </label>
        <label className="flex items-center gap-2 text-f1-foreground-secondary">
          End
          <input
            className="rounded-sm border border-solid border-f1-border p-1"
            value={end}
            onChange={(event) => setEnd(event.target.value)}
          />
        </label>
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={onDone}>
          Save {day.name}
        </button>
        <button type="button" onClick={onDone}>
          Cancel
        </button>
      </div>
    </div>
  )
}

const useTreeSource = () =>
  useDataCollectionSource({
    dataAdapter: { fetchData: async () => ({ records: TREE }) },
    itemsWithChildren: (day: Day) => !!byId.get(day.id)?.children?.length,
    fetchChildren: async ({ item }: { item: Day }) => ({
      records: byId.get(item.id)?.children ?? [],
      type: "basic" as const,
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)

const Table = ({ frozenColumns }: { frozenColumns?: 0 | 1 | 2 }) => {
  const source = useTreeSource()
  return (
    <OneDataCollection
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      source={source as any}
      visualizations={[
        {
          type: "table",
          options: {
            columns,
            frozenColumns,
            // Rows that cannot be edited return nothing and get no expander.
            renderExpandedContent: (
              day: Day,
              { collapse }: ExpandedContentContext
            ) =>
              day.editable ? (
                <ShiftPanel day={day} onDone={collapse} />
              ) : undefined,
          },
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        } as any,
      ]}
    />
  )
}

/**
 * Bob is editable and opens a panel. Cleo is not, so she has no expander at
 * all — note the first column stays aligned either way.
 */
export const Default: Story = {
  render: () => <Table />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const row = (await canvas.findByText("Bob Stone")).closest("tr")
    const expander = row?.querySelector("button[aria-expanded]")

    expect(expander).not.toBeNull()
    expect(expander).toHaveAttribute("aria-expanded", "false")

    await userEvent.click(expander as Element)

    expect(await canvas.findByText("Save Bob Stone")).toBeVisible()
    expect(expander).toHaveAttribute("aria-expanded", "true")
  },
}

/**
 * The panel closes itself: `context.collapse` is what a Save or Cancel inside
 * the panel calls, and focus returns to the row's expander.
 */
export const ClosedByItsContent: Story = {
  render: () => <Table />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const row = (await canvas.findByText("Bob Stone")).closest("tr")
    const expander = row?.querySelector("button[aria-expanded]")

    await userEvent.click(expander as Element)
    await userEvent.click(await canvas.findByText("Save Bob Stone"))

    expect(canvas.queryByText("Save Bob Stone")).toBeNull()
    expect(document.activeElement).toBe(expander)
  },
}

/**
 * A row with children keeps its chevron for them — expanding Alice reveals her
 * days, and those leaf rows each carry their own panel.
 */
export const WithNestedRows: Story = {
  render: () => <Table />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const parentRow = (await canvas.findByText("Alice Doe")).closest("tr")

    await userEvent.click(
      parentRow?.querySelector("button[aria-expanded]") as Element
    )

    const childRow = (await canvas.findByText("Monday")).closest("tr")
    await userEvent.click(
      childRow?.querySelector("button[aria-expanded]") as Element
    )

    expect(await canvas.findByText("Save Monday")).toBeVisible()
    // The parent stayed open.
    expect(canvas.getByText("Tuesday")).toBeVisible()
  },
}

/**
 * The panel is one cell spanning the table, so `frozenColumns` does not pin it:
 * it scrolls horizontally with the table body.
 */
export const WithFrozenColumns: Story = {
  render: () => <Table frozenColumns={1} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const row = (await canvas.findByText("Bob Stone")).closest("tr")

    await userEvent.click(
      row?.querySelector("button[aria-expanded]") as Element
    )

    expect(await canvas.findByText("Save Bob Stone")).toBeVisible()
  },
}
