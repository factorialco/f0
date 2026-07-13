import type { Meta, StoryObj } from "@storybook/react-vite"

import { useRef, useState } from "react"
import { action } from "storybook/actions"

import { OneEditableTable } from "../index"

const meta = {
  title: "OneEditableTable",
  component: OneEditableTable,
  tags: ["experimental"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A lightweight, fully controlled editable table built on the OneTable primitives and the editable-table cell components (text, number, money, date, select, …), with optional drag-to-reorder rows, per-row removal and an add-row action — no data collection required.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type LinkRow = {
  id: string
  title: string
  url: string
  category: string
  visits: number | undefined
}

const CATEGORIES = ["People", "Finance", "Legal", "Benefits"]

const INITIAL_LINKS: LinkRow[] = [
  {
    id: "link-1",
    title: "People Handbook",
    url: "https://app.factorialhr.com/dash",
    category: "People",
    visits: 1240,
  },
  {
    id: "link-2",
    title: "Travel policy",
    url: "https://example.com/travel",
    category: "Finance",
    visits: 87,
  },
  {
    id: "link-3",
    title: "Referrals Program",
    url: "https://example.com/referrals",
    category: "People",
    visits: 312,
  },
  {
    id: "link-4",
    title: "Denuncias",
    url: "https://example.com/whistleblowing",
    category: "Legal",
    visits: 12,
  },
]

/**
 * Editable table with sortable rows: drag rows by their handle to reorder,
 * edit cells inline (text, select and number cell types), remove rows with
 * the trailing button, and append rows with "Add row". Fully controlled —
 * the story owns the array and updates it from the callbacks.
 */
export const SortableWithAddAndRemove: Story = {
  render: () => {
    const [items, setItems] = useState<LinkRow[]>(INITIAL_LINKS)
    const addCounter = useRef(0)

    return (
      <OneEditableTable<LinkRow>
        items={items}
        columns={[
          {
            id: "title",
            label: "Title",
            editType: () => "text" as const,
            inputPlaceholder: "e.g. People Handbook",
          },
          {
            id: "url",
            label: "URL",
            editType: () => "text" as const,
            inputPlaceholder: "https://…",
          },
          {
            id: "category",
            label: "Category",
            width: 160,
            editType: () => "select" as const,
            selectConfig: {
              options: CATEGORIES.map((c) => ({ value: c, label: c })),
            },
          },
          {
            id: "visits",
            label: "Visits",
            width: 120,
            align: "right",
            editType: () => "number" as const,
            numberConfig: { min: 0 },
          },
        ]}
        onCellChange={async ({ updatedItem, changes }) => {
          action("onCellChange")(changes)
          setItems((prev) =>
            prev.map((i) => (i.id === updatedItem.id ? updatedItem : i))
          )
        }}
        sortableRows
        onReorderRows={({ items: reordered, from, to }) => {
          action("onReorderRows")({ from, to })
          setItems(reordered)
        }}
        onRemoveRow={(item) => {
          action("onRemoveRow")(item.id)
          setItems((prev) => prev.filter((i) => i.id !== item.id))
        }}
        addRow={{
          label: "Add link",
          onClick: () => {
            addCounter.current += 1
            setItems((prev) => [
              ...prev,
              {
                id: `link-new-${addCounter.current}`,
                title: "",
                url: "",
                category: "People",
                visits: undefined,
              },
            ])
          },
        }}
      />
    )
  },
}

type BudgetRow = {
  id: string
  concept: string
  amount: number
  dueDate: string
  status: string
}

/**
 * Non-sortable table showcasing more cell types: money, date and
 * display-only cells, without drag handles or remove buttons.
 */
export const CellTypes: Story = {
  render: () => {
    const [items, setItems] = useState<BudgetRow[]>([
      {
        id: "b-1",
        concept: "Team offsite",
        amount: 12000,
        dueDate: "2026-09-01",
        status: "Draft",
      },
      {
        id: "b-2",
        concept: "Laptops",
        amount: 8400,
        dueDate: "2026-08-15",
        status: "Approved",
      },
    ])

    return (
      <OneEditableTable<BudgetRow>
        items={items}
        columns={[
          {
            id: "concept",
            label: "Concept",
            editType: () => "text" as const,
          },
          {
            id: "amount",
            label: "Amount",
            width: 160,
            align: "right",
            editType: () => "money" as const,
            numberConfig: { min: 0, units: "€" },
          },
          {
            id: "dueDate",
            label: "Due date",
            width: 160,
            editType: () => "date" as const,
          },
          {
            id: "status",
            label: "Status",
            width: 140,
            editType: () => "display-only" as const,
          },
        ]}
        onCellChange={async ({ updatedItem }) => {
          setItems((prev) =>
            prev.map((i) => (i.id === updatedItem.id ? updatedItem : i))
          )
        }}
      />
    )
  },
}
