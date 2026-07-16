import type { ReactElement } from "react"

import { fireEvent } from "@testing-library/react"
import { ReactFlowProvider } from "@xyflow/react"
import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0GraphNode } from "../F0GraphNode"

const personAvatar = {
  type: "person",
  firstName: "Al",
  lastName: "Ic",
} as const

// F0GraphNode reads from the React Flow store, so every render must be
// scoped to a ReactFlowProvider. We keep using zeroRender for the
// design-system providers (i18n, l10n, etc.) and wrap the UI inline,
// also re-wrapping when callers use `rerender(...)` so the provider
// survives the second render.
const render = (ui: ReactElement) => {
  const result = zeroRender(<ReactFlowProvider>{ui}</ReactFlowProvider>)
  const wrappedRerender: typeof result.rerender = (nextUi) =>
    result.rerender(<ReactFlowProvider>{nextUi}</ReactFlowProvider>)
  return { ...result, rerender: wrappedRerender }
}

describe("F0GraphNode", () => {
  it("renders with default props", () => {
    render(<F0GraphNode />)
    expect(screen.getByRole("treeitem")).toBeInTheDocument()
  })

  it("renders detail variant with title and subtitle", () => {
    render(
      <F0GraphNode
        variant="detail"
        avatar={personAvatar}
        title="Alice"
        subtitle="Engineer"
      />
    )

    expect(screen.getByText("Alice")).toBeInTheDocument()
    expect(screen.getByText("Engineer")).toBeInTheDocument()
  })

  it("renders metadata in detail variant; reflects selected state for toolbar gating", () => {
    const { rerender } = render(
      <F0GraphNode
        variant="detail"
        avatar={personAvatar}
        title="Alice"
        subtitle="Engineer"
        tags={[{ type: "raw", text: "Madrid" }]}
        actions={<button type="button">Edit</button>}
      />
    )

    expect(screen.getByText("Madrid")).toBeInTheDocument()
    // Default state: not selected → toolbar visibility is off.
    expect(screen.getByRole("treeitem")).toHaveAttribute(
      "aria-selected",
      "false"
    )
    // The Edit button is rendered inside ReactFlow's NodeToolbar, which
    // requires a real node in the RF store to render. In this isolated
    // unit test the toolbar is suppressed; full rendering is exercised
    // by the Storybook stories and F0Graph integration.
    expect(
      screen.queryByRole("button", { name: "Edit" })
    ).not.toBeInTheDocument()

    rerender(
      <F0GraphNode
        variant="detail"
        state="selected"
        avatar={personAvatar}
        title="Alice"
        subtitle="Engineer"
        tags={[{ type: "raw", text: "Madrid" }]}
        actions={<button type="button">Edit</button>}
      />
    )

    // Selected state is wired through to the DOM; NodeToolbar consumes
    // this same gate via its `isVisible` prop.
    expect(screen.getByRole("treeitem")).toHaveAttribute(
      "aria-selected",
      "true"
    )
  })

  it("compact variant hides toolbar even when selected", () => {
    render(
      <F0GraphNode
        variant="compact"
        state="selected"
        avatar={personAvatar}
        title="Alice"
        subtitle="Engineer"
        tags={[{ type: "raw", text: "Madrid" }]}
        actions={<button type="button">Edit</button>}
      />
    )

    expect(screen.getByText("Alice")).toBeInTheDocument()
    expect(screen.queryByText("Engineer")).not.toBeInTheDocument()
    expect(screen.queryByText("Madrid")).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Edit" })
    ).not.toBeInTheDocument()
  })

  it("renders dot variant (minimal display)", () => {
    render(<F0GraphNode variant="dot" title="Alice" />)

    const node = screen.getByRole("treeitem")
    expect(node).toBeInTheDocument()
    expect(node).toHaveAttribute("data-zoom-level", "dot")
    // Title text remains in the DOM for a11y/search; it is visually clipped
    // by the scaled pill, so we don't assert on visibility here.
  })

  it("has ARIA treeitem role", () => {
    render(<F0GraphNode />)
    expect(screen.getByRole("treeitem")).toBeInTheDocument()
  })

  it("aria-expanded reflects expanded prop", () => {
    const { rerender } = render(<F0GraphNode hasChildren expanded={false} />)
    expect(screen.getByRole("treeitem")).toHaveAttribute(
      "aria-expanded",
      "false"
    )

    rerender(<F0GraphNode hasChildren expanded={true} />)
    expect(screen.getByRole("treeitem")).toHaveAttribute(
      "aria-expanded",
      "true"
    )
  })

  it("does not set aria-expanded when hasChildren is false", () => {
    render(<F0GraphNode expanded={false} />)
    expect(screen.getByRole("treeitem").hasAttribute("aria-expanded")).toBe(
      false
    )
  })

  it("onClick fires on click", () => {
    const onClick = vi.fn()
    render(<F0GraphNode onClick={onClick} />)
    const el = screen.getByRole("treeitem")
    fireEvent.click(el)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("onExpandToggle fires on ArrowRight keyboard", async () => {
    const onExpandToggle = vi.fn()
    render(
      <F0GraphNode
        hasChildren
        expanded={false}
        onExpandToggle={onExpandToggle}
      />
    )
    const node = screen.getByRole("treeitem")
    node.focus()
    await import("@testing-library/user-event").then(({ userEvent }) =>
      userEvent.setup().keyboard("{ArrowRight}")
    )
    expect(onExpandToggle).toHaveBeenCalledOnce()
  })

  it("keyboard Enter triggers onClick", async () => {
    const onClick = vi.fn()
    render(<F0GraphNode onClick={onClick} />)
    const node = screen.getByRole("treeitem")
    node.focus()
    await import("@testing-library/user-event").then(({ userEvent }) =>
      userEvent.setup().keyboard("{Enter}")
    )
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("keyboard Space triggers onClick", async () => {
    const onClick = vi.fn()
    render(<F0GraphNode onClick={onClick} />)
    const node = screen.getByRole("treeitem")
    node.focus()
    await import("@testing-library/user-event").then(({ userEvent }) =>
      userEvent.setup().keyboard(" ")
    )
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("state variants apply correct classes", () => {
    // Selected/highlighted ring lives on the pill wrapper for compact/detail.
    // For the dot variant, the ring is applied to the avatar so it scales
    // together with the visible dot circle. Dimmed applies opacity-40 to
    // the wrapper, only in dot mode.
    const getPill = () =>
      screen.getByRole("treeitem").firstElementChild as HTMLElement
    const getAvatarRingTarget = () => {
      // Pill wrapper > [chrome layer, content row]; avatar wrapper is the
      // first child of the content row.
      const pill = getPill()
      const contentRow = pill.children[1] as HTMLElement
      return contentRow.firstElementChild as HTMLElement
    }

    const { rerender } = render(<F0GraphNode state="selected" />)
    expect(getPill().className).toContain("ring-2")

    rerender(<F0GraphNode variant="dot" state="highlighted" />)
    expect(getAvatarRingTarget().className).toContain("ring-2")

    rerender(<F0GraphNode variant="dot" state="dimmed" />)
    expect(getPill().className).toContain("opacity-40")
  })

  it("forwards tabIndex prop to treeitem", () => {
    const { rerender } = render(<F0GraphNode tabIndex={0} />)
    expect(screen.getByRole("treeitem")).toHaveAttribute("tabindex", "0")

    rerender(<F0GraphNode tabIndex={-1} />)
    expect(screen.getByRole("treeitem")).toHaveAttribute("tabindex", "-1")
  })

  it("forwards aria-level, aria-setsize, aria-posinset to treeitem", () => {
    render(<F0GraphNode level={3} setSize={5} posInSet={2} />)
    const node = screen.getByRole("treeitem")
    expect(node).toHaveAttribute("aria-level", "3")
    expect(node).toHaveAttribute("aria-setsize", "5")
    expect(node).toHaveAttribute("aria-posinset", "2")
  })

  it("calls nodeRef callback on mount", () => {
    const nodeRef = vi.fn()
    render(<F0GraphNode nodeRef={nodeRef} />)
    expect(nodeRef).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })

  describe("hover card", () => {
    it("compact: reveals the hidden subtitle on hover", async () => {
      const { userEvent } = await import("@testing-library/user-event")
      const { waitFor } = await import("@testing-library/react")
      const user = userEvent.setup()

      render(
        <F0GraphNode
          hoverCard
          variant="compact"
          avatar={personAvatar}
          title="Alice"
          subtitle="Engineer"
        />
      )

      // Subtitle is hidden on the compact node itself.
      expect(screen.queryByText("Engineer")).not.toBeInTheDocument()

      await user.hover(screen.getByRole("treeitem"))

      await waitFor(() => {
        expect(screen.getByText("Engineer")).toBeInTheDocument()
      })
    })

    it("dot: reveals title and tags on hover", async () => {
      const { userEvent } = await import("@testing-library/user-event")
      const { waitFor } = await import("@testing-library/react")
      const user = userEvent.setup()

      render(
        <F0GraphNode
          hoverCard
          variant="dot"
          avatar={personAvatar}
          title="Alice"
          subtitle="Engineer"
          tags={[{ type: "raw", text: "Madrid" }]}
        />
      )

      expect(screen.queryByText("Madrid")).not.toBeInTheDocument()

      await user.hover(screen.getByRole("treeitem"))

      await waitFor(() => {
        expect(screen.getByText("Madrid")).toBeInTheDocument()
      })
    })

    it("detail: never wires a hover card (everything is already visible)", async () => {
      const { userEvent } = await import("@testing-library/user-event")
      const user = userEvent.setup()

      render(
        <F0GraphNode
          hoverCard
          variant="detail"
          avatar={personAvatar}
          title="Alice"
          subtitle="Engineer"
          tags={[{ type: "raw", text: "Madrid" }]}
        />
      )

      // Detail shows it all, so the node is rendered without a hover trigger.
      expect(screen.getByRole("treeitem")).not.toHaveAttribute("data-state")

      await user.hover(screen.getByRole("treeitem"))

      // No popover card appears — the single "Madrid" is the node's own tag.
      expect(screen.getAllByText("Madrid")).toHaveLength(1)
    })

    it("compact: card omits tags hidden via visibleTagTypes", async () => {
      const { userEvent } = await import("@testing-library/user-event")
      const { waitFor } = await import("@testing-library/react")
      const user = userEvent.setup()

      render(
        <F0GraphNode
          hoverCard
          variant="compact"
          avatar={personAvatar}
          title="Alice"
          subtitle="Engineer"
          tags={[
            { type: "raw", text: "Madrid" },
            { type: "status", text: "Active", variant: "positive" },
          ]}
          // Only "raw" tags are allowed in view; "status" is blocked.
          visibleTagTypes={new Set(["raw"])}
        />
      )

      await user.hover(screen.getByRole("treeitem"))

      await waitFor(() => {
        expect(screen.getByText("Madrid")).toBeInTheDocument()
      })
      // The blocked "status" tag must not be surfaced in the card.
      expect(screen.queryByText("Active")).not.toBeInTheDocument()
    })

    it("detail: filters tags by `column` so same-`type` columns toggle independently", () => {
      render(
        <F0GraphNode
          variant="detail"
          avatar={personAvatar}
          title="Alice"
          subtitle="Engineer"
          // Two raw tags; only the "workplace" column is visible.
          tags={[
            { type: "raw", text: "Madrid", column: "workplace" },
            { type: "raw", text: "2020-01-01", column: "hireDate" },
          ]}
          visibleTagTypes={new Set(["workplace"])}
        />
      )

      expect(screen.getByText("Madrid")).toBeInTheDocument()
      // Hidden despite sharing the `raw` type with the visible tag.
      expect(screen.queryByText("2020-01-01")).not.toBeInTheDocument()
    })

    it("does not wrap in a hover card when hoverCard is not set", () => {
      render(
        <F0GraphNode
          variant="dot"
          avatar={personAvatar}
          title="Alice"
          subtitle="Engineer"
        />
      )

      expect(screen.getByRole("treeitem")).not.toHaveAttribute("data-state")
    })
  })
})
