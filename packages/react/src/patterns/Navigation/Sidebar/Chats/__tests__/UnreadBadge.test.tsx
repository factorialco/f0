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
})
