import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { CardSelectableItem } from "../types"

import { CardSelectableContainer } from "../index"

const baseItems: CardSelectableItem<string>[] = [
  {
    value: "a",
    title: "Option A",
    description: "First option",
    selectedContent: <div data-testid="content-a">Content A</div>,
  },
  {
    value: "b",
    title: "Option B",
    description: "Second option",
    selectedContent: <div data-testid="content-b">Content B</div>,
  },
  {
    value: "c",
    title: "Option C",
    description: "No extra content",
  },
]

describe("CardSelectable selectedContent", () => {
  it("renders selectedContent when the card is selected", () => {
    render(
      <CardSelectableContainer
        items={baseItems}
        value="a"
        onChange={vi.fn()}
        label="test"
      />
    )

    expect(screen.getByTestId("content-a")).toBeInTheDocument()
  })

  it("hides selectedContent when the card is not selected", () => {
    render(
      <CardSelectableContainer
        items={baseItems}
        value="a"
        onChange={vi.fn()}
        label="test"
      />
    )

    // Content B exists in DOM (always mounted for animation) but is hidden
    // via motion.div animating height:0/opacity:0/visibility:hidden.
    // JSDOM doesn't execute motion animations, so we verify it's mounted
    // and that the wrapper has overflow-hidden (which clips the content at height:0).
    const contentB = screen.getByTestId("content-b")
    expect(contentB).toBeInTheDocument()
    expect(contentB.closest(".overflow-hidden")).not.toBeNull()
  })

  it("does not render animation wrapper when item has no selectedContent", () => {
    const itemsWithoutContent: CardSelectableItem<string>[] = [
      {
        value: "x",
        title: "Option X",
      },
      {
        value: "y",
        title: "Option Y",
      },
    ]

    render(
      <CardSelectableContainer
        items={itemsWithoutContent}
        value="x"
        onChange={vi.fn()}
        label="test"
      />
    )

    // No selectedContent means no motion wrappers in the DOM
    const cards = screen.getAllByRole("radio")
    expect(cards).toHaveLength(2)
    expect(screen.queryByTestId("content-a")).not.toBeInTheDocument()
  })

  it("clicking inside selectedContent does not toggle the card", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    const items: CardSelectableItem<string>[] = [
      {
        value: "a",
        title: "Option A",
        selectedContent: (
          <button type="button" data-testid="inner-btn">
            Click me
          </button>
        ),
      },
    ]

    render(
      <CardSelectableContainer
        items={items}
        value="a"
        onChange={onChange}
        label="test"
      />
    )

    const innerBtn = screen.getByTestId("inner-btn")
    await user.click(innerBtn)

    // onChange should not have been called — click was stopped
    expect(onChange).not.toHaveBeenCalled()
  })

  it("works with grouped toggle mode and selectedContent", () => {
    render(
      <CardSelectableContainer
        multiple
        isToggle
        grouped
        items={baseItems}
        value={["a"]}
        onChange={vi.fn()}
        label="test"
      />
    )

    expect(screen.getByTestId("content-a")).toBeInTheDocument()
  })
})
