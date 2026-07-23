import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import type { FiltersDefinition } from "../types"

import { OneFilterPicker } from "../index"

/**
 * Grouped ("in" filter with nested children) options store their selection under
 * a sibling filter key (`children.filterKey`). Those sibling filters are marked
 * `hideSelector: true` so they don't appear as their own entry in the filter
 * list — they're only ever reached by expanding their parent group.
 *
 * Regression coverage: selecting a nested child and applying the filters must
 * emit the child's value under its sibling key. The bug was that `hideSelector`
 * filters were stripped from the definition before the value was computed on
 * apply, so nested selections silently vanished.
 */
const groupedDefinition = {
  office: {
    type: "in",
    label: "Office",
    options: {
      options: [
        {
          value: "101",
          label: "Barcelona HQ",
          children: {
            filterKey: "space",
            options: [
              { value: "1", label: "Floor 1" },
              { value: "2", label: "Floor 2" },
            ],
          },
        },
        {
          value: "102",
          label: "Madrid Office",
          children: {
            filterKey: "space",
            options: [{ value: "4", label: "Floor 1 (Madrid)" }],
          },
        },
      ],
    },
  },
  space: {
    type: "in",
    label: "Space",
    hideSelector: true,
    options: {
      options: [
        { value: "1", label: "Floor 1" },
        { value: "2", label: "Floor 2" },
        { value: "4", label: "Floor 1 (Madrid)" },
      ],
    },
  },
} as const satisfies FiltersDefinition

const openPicker = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("button", { name: /filters/i }))
  await waitFor(() =>
    expect(
      screen.getByRole("checkbox", { name: "Barcelona HQ" })
    ).toBeInTheDocument()
  )
}

const expandGroup = async (
  user: ReturnType<typeof userEvent.setup>,
  index = 0
) => {
  const chevrons = screen.getAllByRole("button", { expanded: false })
  await user.click(chevrons[index])
}

describe("OneFilterPicker - grouped (nested) options", () => {
  it("counts an applied hidden nested filter in the trigger", () => {
    render(
      <OneFilterPicker
        filters={groupedDefinition}
        value={{ space: ["1"] }}
        onChange={vi.fn()}
        displayCounter
      />
    )

    const trigger = screen.getByRole("button", {
      name: "Filters. Active filters: Space",
    })
    expect(trigger).toHaveTextContent("1")
  })

  it("does not render hideSelector sibling filters as their own list entry", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })

    render(
      <OneFilterPicker
        filters={groupedDefinition}
        value={{}}
        onChange={vi.fn()}
      />
    )

    await openPicker(user)

    // "Office" is the only selectable filter; the "Space" sibling is hidden.
    expect(screen.getByText("Office")).toBeInTheDocument()
    const spaceEntries = screen
      .queryAllByRole("button")
      .filter((b) => b.textContent?.trim() === "Space")
    expect(spaceEntries).toHaveLength(0)
  })

  it("applies a nested child selection under its sibling filter key", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const onChange = vi.fn()

    render(
      <OneFilterPicker
        filters={groupedDefinition}
        value={{}}
        onChange={onChange}
      />
    )

    await openPicker(user)

    // Expand "Barcelona HQ" and pick its nested "Floor 1" child.
    await expandGroup(user, 0)
    const floorCheckbox = await screen.findByRole("checkbox", {
      name: "Floor 1",
    })
    await user.click(floorCheckbox)

    await user.click(screen.getByRole("button", { name: /apply filters/i }))

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ space: ["1"] })
    )
  })

  it("keeps a nested child selection alongside a top-level parent selection", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const onChange = vi.fn()

    render(
      <OneFilterPicker
        filters={groupedDefinition}
        value={{}}
        onChange={onChange}
      />
    )

    await openPicker(user)

    // Select the parent office itself.
    await user.click(screen.getByRole("checkbox", { name: "Barcelona HQ" }))

    // Then drill into it and select a nested child.
    await expandGroup(user, 0)
    const floorCheckbox = await screen.findByRole("checkbox", {
      name: "Floor 1",
    })
    await user.click(floorCheckbox)

    await user.click(screen.getByRole("button", { name: /apply filters/i }))

    expect(onChange).toHaveBeenCalledWith({ office: ["101"], space: ["1"] })
  })
})
