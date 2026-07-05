import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import type { FiltersDefinition } from "../types"

import { OneFilterPicker } from "../index"

/**
 * Nested subfilters store their selections under hidden filter keys
 * (`hideSelector: true`). Applying the picker must emit those selections too —
 * they used to be dropped because the applied value was resolved against the
 * shown-filters definition only, so deep levels had no effect.
 */

const definition = {
  office: {
    type: "in",
    label: "Office",
    options: {
      options: [
        {
          label: "Barcelona",
          value: "bcn",
          children: {
            filterKey: "space",
            options: [
              { label: "Floor 1", value: "f1" },
              { label: "Floor 2", value: "f2" },
            ],
          },
        },
        { label: "Madrid", value: "mad" },
      ],
    },
  },
  space: {
    type: "in",
    label: "Space",
    hideSelector: true,
    options: {
      options: [
        { label: "Floor 1", value: "f1" },
        { label: "Floor 2", value: "f2" },
      ],
    },
  },
} as const satisfies FiltersDefinition

const openFilterPopover = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("button", { name: /filters/i }))
}

describe("OneFilterPicker nested subfilters", () => {
  it("applies selections stored under hidden nested filter keys", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const onChange = vi.fn()

    render(
      <OneFilterPicker filters={definition} value={{}} onChange={onChange} />
    )

    await openFilterPopover(user)

    // Searching the options auto-expands parents, revealing nested children.
    // Paste (single change event) instead of typing: the search input is
    // controlled with a debounced onChange, so char-by-char typing is racy.
    const optionsSearch = await screen.findByRole("searchbox")
    await user.click(optionsSearch)
    await user.paste("Floor 1")

    await user.click(
      await screen.findByRole(
        "checkbox",
        { name: "Floor 1" },
        { timeout: 3000 }
      )
    )
    await user.click(screen.getByRole("button", { name: /apply filters/i }))

    // The nested selection (hidden `space` key) must survive Apply
    expect(onChange).toHaveBeenCalledWith({ space: ["f1"] })
  })

  it("applies parent and nested selections together", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const onChange = vi.fn()

    render(
      <OneFilterPicker filters={definition} value={{}} onChange={onChange} />
    )

    await openFilterPopover(user)

    const optionsSearch = await screen.findByRole("searchbox")
    await user.click(optionsSearch)
    await user.paste("Floor")

    await user.click(
      await screen.findByRole(
        "checkbox",
        { name: "Barcelona" },
        { timeout: 3000 }
      )
    )
    await user.click(screen.getByRole("checkbox", { name: "Floor 2" }))
    await user.click(screen.getByRole("button", { name: /apply filters/i }))

    expect(onChange).toHaveBeenCalledWith({
      office: ["bcn"],
      space: ["f2"],
    })
  })
})
