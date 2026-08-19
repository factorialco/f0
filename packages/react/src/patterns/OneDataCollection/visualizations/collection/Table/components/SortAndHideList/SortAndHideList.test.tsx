import { describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import type { SortAndHideListItem } from "./types"

import { SortAndHideList } from "./SortAndHideList"

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

const rowContents = (container: HTMLElement) =>
  Array.from(container.querySelectorAll("li")).map(
    (row) => row.firstElementChild
  )

describe("SortAndHideList edge padding", () => {
  it("pads only the first and last rows", () => {
    const { container } = render(
      <SortAndHideList items={items} allowSorting allowHiding />
    )

    const [first, middle, last] = rowContents(container)

    expect(first).toHaveClass("pt-1")
    expect(first).not.toHaveClass("pb-1")

    expect(middle).not.toHaveClass("pt-1")
    expect(middle).not.toHaveClass("pb-1")

    expect(last).toHaveClass("pb-1")
    expect(last).not.toHaveClass("pt-1")
  })

  it("pads both edges of a single row, which is first and last at once", () => {
    const { container } = render(
      <SortAndHideList items={[items[0]!]} allowSorting allowHiding />
    )

    const [only] = rowContents(container)

    expect(only).toHaveClass("pt-1")
    expect(only).toHaveClass("pb-1")
  })
})

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

describe("SortAndHideList disabledReason (locked entry)", () => {
  const lockedItems: SortAndHideListItem[] = [
    // Pinned: locked ON (disabled + checked), with a lock icon.
    {
      id: "name",
      label: "Name",
      sortable: false,
      canHide: false,
      visible: true,
    },
    // Locked by permission: OFF + disabled, no lock icon, tooltip reason.
    {
      id: "devices",
      label: "Devices",
      sortable: false,
      canHide: false,
      visible: false,
      disabledReason: "You don't have permission to see this",
    },
  ]

  it("renders a locked entry as an OFF, disabled switch", () => {
    render(<SortAndHideList items={lockedItems} allowSorting allowHiding />)

    const switches = screen.getAllByRole("switch")
    // Pinned "Name" stays ON; the locked "Devices" is forced OFF.
    expect(switches[0]).toBeDisabled()
    expect(switches[0]).toHaveAttribute("aria-checked", "true")
    expect(switches[1]).toBeDisabled()
    expect(switches[1]).toHaveAttribute("aria-checked", "false")
  })

  it("wraps the locked switch so its tooltip can trigger despite the disabled control", () => {
    const { container } = render(
      <SortAndHideList items={lockedItems} allowSorting allowHiding />
    )
    // The disabled switch sits inside a non-disabled wrapper (the tooltip
    // trigger) — a disabled control fires no pointer events of its own.
    expect(container.querySelector(".cursor-not-allowed")).not.toBeNull()
  })

  it("does not force other rows off when one entry is locked", () => {
    render(
      <SortAndHideList
        items={[
          ...lockedItems,
          {
            id: "role",
            label: "Role",
            sortable: true,
            canHide: true,
            visible: true,
          },
        ]}
        allowSorting
        allowHiding
      />
    )
    const switches = screen.getAllByRole("switch")
    expect(switches[2]).not.toBeDisabled()
    expect(switches[2]).toHaveAttribute("aria-checked", "true")
  })
})
