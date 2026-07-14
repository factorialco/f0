import { describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import { SortAndHideList } from "./SortAndHideList"
import type { SortAndHideListItem } from "./types"

const items: SortAndHideListItem[] = [
  { id: "name", label: "Name", sortable: false, canHide: false, visible: true },
  {
    id: "email",
    label: "Email",
    sortable: true,
    canHide: true,
    visible: true,
    removable: true,
  },
  {
    id: "role",
    label: "Role",
    sortable: true,
    canHide: true,
    visible: true,
    removable: true,
  },
]

describe("SortAndHideList remove affordance", () => {
  it("renders a remove button for each removable item and calls onRemove with it", async () => {
    const onRemove = vi.fn()
    render(
      <SortAndHideList
        items={items}
        onRemove={onRemove}
        allowSorting
        allowHiding
      />
    )

    const removeButtons = screen.getAllByRole("button", {
      name: "Remove column",
    })
    // Only the two `removable` items expose the affordance (not the locked "Name").
    expect(removeButtons).toHaveLength(2)

    await userEvent.click(removeButtons[0]!)
    expect(onRemove).toHaveBeenCalledTimes(1)
    expect(onRemove).toHaveBeenCalledWith(
      expect.objectContaining({ id: "email" })
    )
  })

  it("renders no remove buttons when onRemove is not provided", () => {
    render(<SortAndHideList items={items} allowSorting allowHiding />)

    expect(
      screen.queryByRole("button", { name: "Remove column" })
    ).not.toBeInTheDocument()
  })

  it("does not render a remove button for non-removable items", () => {
    const onRemove = vi.fn()
    render(
      <SortAndHideList
        items={[{ id: "name", label: "Name", sortable: true, visible: true }]}
        onRemove={onRemove}
        allowSorting
        allowHiding
      />
    )

    expect(
      screen.queryByRole("button", { name: "Remove column" })
    ).not.toBeInTheDocument()
  })
})
