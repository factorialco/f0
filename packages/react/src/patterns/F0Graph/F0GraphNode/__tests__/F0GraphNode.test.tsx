import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0GraphNodeActions } from "../components/F0GraphNodeActions"
import { F0GraphNodeAvatar } from "../components/F0GraphNodeAvatar"
import { F0GraphNodeMetadata } from "../components/F0GraphNodeMetadata"
import { F0GraphNodeSubtitle } from "../components/F0GraphNodeSubtitle"
import { F0GraphNodeTitle } from "../components/F0GraphNodeTitle"
import { F0GraphNode } from "../F0GraphNode"

describe("F0GraphNode", () => {
  it("renders with default props", () => {
    render(<F0GraphNode />)
    expect(screen.getByRole("treeitem")).toBeInTheDocument()
  })

  it("renders detail variant with all slots", () => {
    render(
      <F0GraphNode variant="detail">
        <F0GraphNodeAvatar>
          <span>AV</span>
        </F0GraphNodeAvatar>
        <F0GraphNodeTitle>Alice</F0GraphNodeTitle>
        <F0GraphNodeSubtitle>Engineer</F0GraphNodeSubtitle>
      </F0GraphNode>
    )

    expect(screen.getByText("AV")).toBeInTheDocument()
    expect(screen.getByText("Alice")).toBeInTheDocument()
    expect(screen.getByText("Engineer")).toBeInTheDocument()
  })

  it("renders compact variant (subtitle/metadata/actions hidden)", () => {
    render(
      <F0GraphNode variant="compact">
        <F0GraphNodeAvatar>
          <span>AV</span>
        </F0GraphNodeAvatar>
        <F0GraphNodeTitle>Alice</F0GraphNodeTitle>
        <F0GraphNodeSubtitle>Engineer</F0GraphNodeSubtitle>
        <F0GraphNodeMetadata>
          <span>Madrid</span>
        </F0GraphNodeMetadata>
        <F0GraphNodeActions>
          <button type="button">Edit</button>
        </F0GraphNodeActions>
      </F0GraphNode>
    )

    expect(screen.getByText("AV")).toBeInTheDocument()
    expect(screen.getByText("Alice")).toBeInTheDocument()
    // subtitle, metadata, actions are not rendered in compact
    expect(screen.queryByText("Engineer")).not.toBeInTheDocument()
    expect(screen.queryByText("Madrid")).not.toBeInTheDocument()
    expect(screen.queryByText("Edit")).not.toBeInTheDocument()
  })

  it("renders dot variant (minimal display)", () => {
    render(
      <F0GraphNode variant="dot">
        <F0GraphNodeTitle>Alice</F0GraphNodeTitle>
      </F0GraphNode>
    )

    const node = screen.getByRole("treeitem")
    expect(node).toBeInTheDocument()
    // title is not rendered in dot variant
    expect(screen.queryByText("Alice")).not.toBeInTheDocument()
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
    const { rerender } = render(<F0GraphNode state="selected" />)
    const node = screen.getByRole("treeitem")
    expect(node.className).toContain("ring-2")

    rerender(<F0GraphNode state="highlighted" />)
    expect(screen.getByRole("treeitem").className).toContain("ring-1")

    rerender(<F0GraphNode state="dimmed" />)
    expect(screen.getByRole("treeitem").className).toContain("opacity-40")
  })
})
