import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { UnreadBadge } from "../UnreadBadge"

describe("UnreadBadge", () => {
  it("renders the count, capped at +99", () => {
    render(<UnreadBadge count={150} />)
    expect(screen.getByText("+99")).toBeInTheDocument()
  })

  it("prefixes the count with @ when the unread run mentions you", () => {
    render(<UnreadBadge count={3} hasMention />)
    expect(screen.getByText("@3")).toBeInTheDocument()
    expect(screen.getByLabelText(/mentions you/i)).toBeInTheDocument()
  })

  it("names a conversation's count as unread", () => {
    render(<UnreadBadge count={3} />)
    expect(screen.getByLabelText("3 unread")).toBeInTheDocument()
  })

  it("names a community's count as new posts", () => {
    // "3 unread" is semantically false for a feed: they are three posts.
    render(<UnreadBadge count={3} kind="community" />)
    expect(screen.getByLabelText("3 new posts")).toBeInTheDocument()
  })

  it("uses the singular for one new post", () => {
    render(<UnreadBadge count={1} kind="community" />)
    expect(screen.getByLabelText("1 new post")).toBeInTheDocument()
  })

  it("never prefixes a community count with @", () => {
    // There are no mentions in a feed to carry.
    render(<UnreadBadge count={3} kind="community" hasMention />)
    expect(screen.queryByText("@3")).not.toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  it("exposes the badge as a status region", () => {
    // An aria-label on a bare div is not reliably announced.
    render(<UnreadBadge count={3} />)
    expect(screen.getByRole("status")).toBeInTheDocument()
  })
})
