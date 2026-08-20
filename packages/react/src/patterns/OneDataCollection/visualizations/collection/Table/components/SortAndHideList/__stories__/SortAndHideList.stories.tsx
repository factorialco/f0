import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { SortAndHideList } from "../SortAndHideList"

const meta = {
  component: SortAndHideList,
  title: "Data Collection/Internal/SortAndHideList",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component for managing the sorting order and visibility of table columns. Users can drag items to reorder them and toggle their visibility with switches.",
      },
    },
  },
  tags: ["internal", "!autodocs"],
  argTypes: {
    items: {
      description: "Array of items that can be sorted and hidden",
      control: false,
    },
  },
} satisfies Meta<typeof SortAndHideList>

export default meta
type Story = StoryObj<typeof meta>

// Mock data for stories
const defaultItems = [
  {
    id: "name",
    label: "Name",
    sortable: true,
    canHide: false,
    visible: true,
    order: 1,
  },
  {
    id: "email",
    label: "Email",
    sortable: true,
    canHide: true,
    visible: true,
    order: 2,
  },
  {
    id: "role",
    label: "Role",
    sortable: true,
    canHide: true,
    visible: true,
    order: 3,
  },
  {
    id: "department",
    label: "Department",
    sortable: true,
    canHide: true,
    visible: false,
    order: 4,
  },
  {
    id: "salary",
    label: "Salary",
    sortable: false,
    canHide: true,
    visible: true,
    order: 5,
  },
]

export const Default: Story = {
  args: {
    items: defaultItems,
    allowSorting: true,
    allowHiding: true,
  },
}

export const WithAllItemsVisible: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "name",
        label: "Name",
        sortable: true,
        canHide: true,
        visible: true,
        order: 1,
      },
      {
        id: "email",
        label: "Email",
        sortable: true,
        canHide: true,
        visible: true,
        order: 2,
      },
      {
        id: "role",
        label: "Role",
        sortable: true,
        canHide: true,
        visible: true,
        order: 3,
      },
    ],
  },
}

export const WithAllItemsHidden: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "optional1",
        label: "Optional Column 1",
        sortable: true,
        canHide: true,
        visible: true,
        order: 1,
      },
      {
        id: "optional2",
        label: "Optional Column 2",
        sortable: true,
        canHide: true,
        visible: true,
        order: 2,
      },
      {
        id: "optional3",
        label: "Optional Column 3",
        sortable: false,
        canHide: true,
        visible: true,
        order: 3,
      },
    ],
  },
}

export const WithMixedStates: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "required",
        label: "Required Column",
        sortable: true,
        canHide: false,
        visible: true,
        order: 1,
      },
      {
        id: "visible",
        label: "Visible Optional",
        sortable: true,
        canHide: true,
        visible: true,
        order: 2,
      },
      {
        id: "hidden",
        label: "Hidden Optional",
        sortable: true,
        canHide: true,
        visible: false,
        order: 3,
      },
      {
        id: "no-sort",
        label: "No Sort Available",
        sortable: false,
        canHide: true,
        visible: true,
        order: 4,
      },
    ],
  },
}

export const EmptyList: Story = {
  args: {
    items: [],
    allowSorting: true,
    allowHiding: true,
  },
}

export const SingleItem: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "only",
        label: "Only Column",
        sortable: true,
        canHide: false,
        visible: true,
        order: 1,
      },
    ],
  },
}

export const LongLabels: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "long1",
        label:
          "This is a very long column name that might wrap to multiple lines",
        sortable: true,
        canHide: true,
        visible: true,
        order: 1,
      },
      {
        id: "long2",
        label:
          "Another extremely long column header that tests text overflow behavior",
        sortable: false,
        canHide: true,
        visible: false,
        order: 2,
      },
      {
        id: "short",
        label: "Short",
        sortable: true,
        canHide: false,
        visible: true,
        order: 3,
      },
    ],
  },
}

/**
 * Items flagged `removable` reveal a trash button on hover (alongside the
 * visibility switch) when an `onRemove` handler is provided. Removing is
 * distinct from hiding — it asks the caller to drop the column entirely. The
 * locked first column is not removable.
 */
export const WithRemovableItems: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    // eslint-disable-next-line no-console -- story action
    onRemove: (item) => console.log("remove", item.id),
    items: [
      {
        id: "name",
        label: "Name",
        sortable: false,
        canHide: false,
        visible: true,
        order: 1,
      },
      {
        id: "email",
        label: "Email",
        sortable: true,
        canHide: true,
        visible: true,
        removable: true,
        order: 2,
      },
      {
        id: "role",
        label: "Role",
        sortable: true,
        canHide: true,
        visible: true,
        removable: true,
        order: 3,
      },
      {
        id: "department",
        label: "Department",
        sortable: true,
        canHide: true,
        visible: false,
        removable: true,
        order: 4,
      },
    ],
  },
}

const lockableItems = [
  {
    id: "name",
    label: "Name",
    visible: true,
    removable: true,
    order: 1,
  },
  {
    id: "email",
    label: "Email",
    visible: true,
    removable: true,
    order: 2,
  },
  {
    id: "role",
    label: "Role",
    visible: true,
    removable: true,
    order: 3,
  },
]

const LockableList = () => {
  const [lockedId, setLockedId] = useState<string | null>("name")

  return (
    <div className="w-72">
      <SortAndHideList
        allowSorting
        allowHiding
        items={lockableItems.map((item) => ({
          ...item,
          locked: item.id === lockedId,
          lockable: true,
          sortable: item.id !== lockedId,
          canHide: item.id !== lockedId,
        }))}
        onLockedChange={(item, locked) => setLockedId(locked ? item.id : null)}
        onRemove={fn()}
      />
    </div>
  )
}

/**
 * Unlock the required column, then lock another one. Hover or keyboard focus
 * reveals lock and remove actions for every unlocked row.
 */
const playLockTransfer: NonNullable<Story["play"]> = async ({
  canvasElement,
  step,
}) => {
  const canvas = within(canvasElement)
  const page = within(canvasElement.ownerDocument.body)

  await step("Unlock the current required column", async () => {
    await userEvent.click(
      canvas.getByRole("button", { name: "Unlock column: Name" })
    )
    await expect(
      canvas.queryByRole("button", { name: "Unlock column: Name" })
    ).not.toBeInTheDocument()
    await expect(
      canvas.getByRole("button", { name: "Lock column: Name" })
    ).toHaveFocus()
  })

  await step("Lock a different column", async () => {
    const emailRow = canvas.getByText("Email").closest("li")!
    await userEvent.click(
      within(emailRow).getByRole("button", { name: "Lock column: Email" })
    )
    await waitFor(() => {
      const updatedEmailRow = canvas.getByText("Email").closest("li")!
      expect(
        within(updatedEmailRow).getByRole("button", {
          name: "Unlock column: Email",
        })
      ).toHaveFocus()
      expect(within(updatedEmailRow).getByRole("switch")).toBeDisabled()
    })
  })

  const focusedUnlock = canvas.getByRole("button", {
    name: "Unlock column: Email",
  })
  focusedUnlock.blur()
  const nameRow = canvas.getByText("Name").closest("li") as HTMLElement
  const nameActions = nameRow.querySelector(
    "[data-column-actions]"
  ) as HTMLElement
  nameActions.tabIndex = -1
  nameActions.focus()
  await waitFor(() => {
    expect(nameActions).toHaveFocus()
    expect(getComputedStyle(nameActions).opacity).toBe("1")
    expect(page.queryByRole("tooltip")).toBeNull()
  })
}

export const WithLockableItems: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: lockableItems,
  },
  render: () => <LockableList />,
  play: playLockTransfer,
}

export const Snapshot: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: lockableItems,
  },
  parameters: withSnapshot({}),
  render: () => <LockableList />,
  play: playLockTransfer,
}
