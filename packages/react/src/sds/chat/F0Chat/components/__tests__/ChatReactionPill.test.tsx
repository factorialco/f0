import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { ChatReactionPill } from "../ChatReactionPill"

const pill = () => screen.getByRole("button")

describe("ChatReactionPill", () => {
  it("draws the emoji with the system glyph, like the bubble above it", () => {
    render(<ChatReactionPill emoji="👍" initialCount={2} />)

    // Not a twemoji image: the pill has to match the message it belongs to.
    expect(pill().querySelector("img")).toBeNull()
    expect(pill()).toHaveTextContent("👍")
  })

  it("follows the owner's count without remounting", () => {
    const { rerender } = render(
      <ChatReactionPill emoji="👍" initialCount={2} />
    )
    const node = pill()
    expect(node).toHaveAttribute("aria-label", "👍 emoji: 2")

    // Someone else reacted. The pill is uncontrolled, so without an effect
    // syncing it the only way to refresh would be remounting it by key — which
    // also remounts NumberFlow, a measuring widget, mid-scroll in a virtualized
    // transcript.
    rerender(<ChatReactionPill emoji="👍" initialCount={5} />)

    expect(pill()).toBe(node)
    expect(node).toHaveAttribute("aria-label", "👍 emoji: 5")
  })

  it("follows the owner's reacted state without remounting", () => {
    const { rerender } = render(
      <ChatReactionPill emoji="🎉" initialCount={1} hasReacted={false} />
    )
    const node = pill()
    expect(node).toHaveAttribute("aria-pressed", "false")

    // The optimistic toggle being reconciled by the host.
    rerender(<ChatReactionPill emoji="🎉" initialCount={1} hasReacted />)

    expect(pill()).toBe(node)
    expect(node).toHaveAttribute("aria-pressed", "true")
  })

  it("keeps the same node when the user list resolves", () => {
    const loadUsers = vi.fn().mockResolvedValue([{ name: "Ana" }])
    const { rerender } = render(
      <ChatReactionPill emoji="🔥" initialCount={1} loadUsers={loadUsers} />
    )
    const node = pill()

    // The tooltip wrapper is unconditional precisely so this can't change the
    // element type: swapping a wrapped button for a bare one remounts the pill.
    rerender(
      <ChatReactionPill
        emoji="🔥"
        initialCount={1}
        loadUsers={loadUsers}
        users={[{ name: "Ana" }]}
      />
    )

    expect(pill()).toBe(node)
  })
})
