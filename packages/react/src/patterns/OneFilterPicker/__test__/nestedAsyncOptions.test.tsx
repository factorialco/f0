import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import type { FiltersDefinition } from "../types"

import { OneFilterPicker } from "../index"

/**
 * With async options the picker can't walk the tree to find the nested child
 * keys, so it used to treat the parent as empty: no active dot, no count,
 * nothing to clear or to drop with the chip. `nestedFilterKeys` declares them.
 */
const officeOptions = [
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
]

const asyncDefinition = {
  office: {
    type: "in",
    label: "Office",
    options: {
      nestedFilterKeys: ["space"],
      options: async () => officeOptions,
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
      ],
    },
  },
} as const satisfies FiltersDefinition

const openPicker = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("button", { name: /filters/i }))
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "Office" })).toBeInTheDocument()
  )
}

describe("OneFilterPicker - nested filters with async options", () => {
  it("marks the parent filter as active when only a nested child is selected", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })

    render(
      <OneFilterPicker
        filters={asyncDefinition}
        value={{ space: ["1"] }}
        onChange={vi.fn()}
      />
    )

    await openPicker(user)

    expect(
      screen.getByRole("button", {
        name: "Office",
        description: "Active filters: Office",
      })
    ).toBeInTheDocument()
  })

  it("counts nested child selections in the parent's selected label", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })

    render(
      <OneFilterPicker
        filters={asyncDefinition}
        value={{ space: ["1", "2"] }}
        onChange={vi.fn()}
      />
    )

    await openPicker(user)
    await user.click(screen.getByRole("button", { name: "Office" }))

    expect(await screen.findByText("2 selected")).toBeInTheDocument()
  })

  it("clears nested child selections from the parent's select-all toggle", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const onChange = vi.fn()

    render(
      <OneFilterPicker
        filters={asyncDefinition}
        value={{ space: ["1"] }}
        onChange={onChange}
      />
    )

    await openPicker(user)
    await user.click(screen.getByRole("button", { name: "Office" }))

    await user.click(
      await screen.findByRole("checkbox", { name: /select all/i })
    )
    await user.click(screen.getByRole("button", { name: /apply filters/i }))

    // Empty values are dropped on apply: an orphaned `space: ["1"]` would survive.
    expect(onChange).toHaveBeenCalledWith({})
  })

  it("drops nested child selections together with the parent chip", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const onChange = vi.fn()

    render(
      <OneFilterPicker
        filters={asyncDefinition}
        value={{ office: ["101"], space: ["1"] }}
        onChange={onChange}
      />
    )

    const removeChip = await screen.findByRole("button", {
      name: "Close",
      description: /^Office:/,
    })
    await user.click(removeChip)

    expect(onChange).toHaveBeenCalledWith({})
  })
})
