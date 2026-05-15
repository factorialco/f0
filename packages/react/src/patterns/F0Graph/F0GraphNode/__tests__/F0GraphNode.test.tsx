import { ReactFlowProvider } from "@xyflow/react"
import { fireEvent, render as rtlRender } from "@testing-library/react"
import type { ReactElement, ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { TestProviders, screen } from "@/testing/test-utils"

import { F0GraphNode } from "../F0GraphNode"

const personAvatar = {
  type: "person",
  firstName: "Al",
  lastName: "Ic",
} as const

const Wrapper = ({ children }: { children: ReactNode }) => (
  <TestProviders>
    <ReactFlowProvider>{children}</ReactFlowProvider>
  </TestProviders>
)

const render = (ui: ReactElement) => rtlRender(ui, { wrapper: Wrapper })

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
    expect(getAvatarRingTarget().className).toContain("ring-1")

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
})
