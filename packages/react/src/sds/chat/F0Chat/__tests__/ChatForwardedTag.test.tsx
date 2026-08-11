import { describe, expect, it } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { ChatForwardedTag } from "../components/ChatForwardedTag"

describe("ChatForwardedTag", () => {
  it("shows the muted 'Forwarded' marker", () => {
    render(<ChatForwardedTag />)
    expect(screen.getByText("Forwarded")).toBeInTheDocument()
  })

  it("is a plain marker — non-interactive, no jump-to-source", () => {
    // Unlike a reply quote, a forward can't jump to its origin (the source may
    // live in a conversation this viewer doesn't belong to).
    render(<ChatForwardedTag />)
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })
})
