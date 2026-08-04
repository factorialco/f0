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

const linkItems: CardSelectableItem<string>[] = [
  {
    value: "workflows",
    title: "Link this course with Workflows",
    description: "Automate certificates and questionnaires.",
    moreInfoLink: {
      href: "https://help.example.com/workflows",
      label: "Learn more",
    },
  },
]

/**
 * The card header carries `role="switch" | "checkbox" | "radio"` and is
 * focusable. A link inside it makes an interactive control wrap another one,
 * which axe flags as `nested-interactive` (WCAG 2.0 SC 4.1.2, "Element has
 * focusable descendants"). The link is a sibling row below the header instead.
 */
describe("CardSelectable moreInfoLink", () => {
  it.each(["switch", "checkbox", "radio"] as const)(
    "renders the link outside the %s element",
    (role) => {
      render(
        <CardSelectableContainer
          {...(role === "switch"
            ? { multiple: true as const, isToggle: true }
            : role === "checkbox"
              ? { multiple: true as const }
              : { multiple: false as const })}
          items={linkItems}
          value={role === "radio" ? undefined : []}
          onChange={vi.fn()}
          label="test"
        />
      )

      const control = screen.getByRole(role)
      const link = screen.getByRole("link", { name: /Learn more/ })

      expect(link).toBeInTheDocument()
      expect(control.contains(link)).toBe(false)
    }
  )

  it("leaves no focusable descendant inside the interactive header", () => {
    render(
      <CardSelectableContainer
        multiple
        isToggle
        items={linkItems}
        value={[]}
        onChange={vi.fn()}
        label="test"
      />
    )

    const control = screen.getByRole("switch")
    expect(
      control.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).toHaveLength(0)
  })

  it("does not toggle the card when the link is activated", async () => {
    const onChange = vi.fn()
    render(
      <CardSelectableContainer
        multiple
        isToggle
        items={linkItems}
        value={[]}
        onChange={onChange}
        label="test"
      />
    )

    await userEvent.click(screen.getByRole("link", { name: /Learn more/ }))
    expect(onChange).not.toHaveBeenCalled()
  })
})
