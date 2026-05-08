import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0GraphNode } from "../F0GraphNode"

const personAvatar = {
  type: "person",
  firstName: "Al",
  lastName: "Ic",
} as const

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

  it("renders metadata and actions in detail variant", () => {
    render(
      <F0GraphNode
        variant="detail"
        avatar={personAvatar}
        title="Alice"
        subtitle="Engineer"
        metadata={<span>Madrid</span>}
        actions={<button type="button">Edit</button>}
      />
    )

    expect(screen.getByText("Madrid")).toBeInTheDocument()
    expect(screen.getByText("Edit")).toBeInTheDocument()
  })

  it("renders compact variant (subtitle/metadata/actions hidden)", () => {
    render(
      <F0GraphNode
        variant="compact"
        avatar={personAvatar}
        title="Alice"
        subtitle="Engineer"
        metadata={<span>Madrid</span>}
        actions={<button type="button">Edit</button>}
      />
    )

    expect(screen.getByText("Alice")).toBeInTheDocument()
    expect(screen.queryByText("Engineer")).not.toBeInTheDocument()
    expect(screen.queryByText("Madrid")).not.toBeInTheDocument()
    expect(screen.queryByText("Edit")).not.toBeInTheDocument()
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
    screen.getByRole("treeitem").click()
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
    // State classes live on the inner pill, not the treeitem wrapper.
    // `highlighted` and `dimmed` only style the pill in dot mode.
    const getPill = () =>
      screen.getByRole("treeitem").firstElementChild as HTMLElement

    const { rerender } = render(<F0GraphNode state="selected" />)
    expect(getPill().className).toContain("ring-2")

    rerender(<F0GraphNode variant="dot" state="highlighted" />)
    expect(getPill().className).toContain("ring-1")

    rerender(<F0GraphNode variant="dot" state="dimmed" />)
    expect(getPill().className).toContain("opacity-40")
  })
})
