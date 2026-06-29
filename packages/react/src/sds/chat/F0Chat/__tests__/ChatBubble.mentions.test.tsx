import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ChatBubble } from "../components/ChatBubble"
import { type F0ChatMessage } from "../types"

const now = new Date().toISOString()

const makeMessage = (over: Partial<F0ChatMessage>): F0ChatMessage => ({
  id: "m1",
  author: { id: "bruno", name: "Bruno Martínez" },
  body: "",
  createdAt: now,
  isMine: false,
  ...over,
})

describe("ChatBubble mentions", () => {
  it("renders a mention of someone else in info colours, with a profile hover trigger", () => {
    render(
      <ChatBubble
        message={makeMessage({
          body: "Can you review this @Ana García?",
          mentions: [
            { id: "ana-g", name: "Ana García", subtitle: "Product Designer" },
          ],
        })}
        isMine
        currentUserId="me"
      />
    )
    const chip = screen.getByText("@Ana García")
    expect(chip.className).toContain("bg-f1-background-info")
    expect(chip.className).toContain("text-f1-foreground-info")
    // Wrapped in the hover-card trigger (same affordance as the sender avatar).
    expect(chip.closest("[data-state]")).not.toBeNull()
  })

  it("renders a mention of you in warning/amber, still hover-carded", () => {
    render(
      <ChatBubble
        message={makeMessage({
          body: "Heads up @Jordan Avery, ready 🙌",
          mentions: [{ id: "me", name: "Jordan Avery" }],
        })}
        isMine={false}
        currentUserId="me"
      />
    )
    const chip = screen.getByText("@Jordan Avery")
    expect(chip.className).toContain("bg-f1-background-warning")
    expect(chip.className).toContain("text-f1-foreground-warning")
    expect(chip.closest("[data-state]")).not.toBeNull()
  })

  it("renders @here in warning/amber with no hover card", () => {
    render(
      <ChatBubble
        message={makeMessage({
          body: "@here standup moved to 11:00",
          mentionedEveryone: true,
        })}
        isMine={false}
        currentUserId="me"
      />
    )
    const chip = screen.getByText("@here")
    expect(chip.className).toContain("bg-f1-background-warning")
    expect(chip.closest("[data-state]")).toBeNull()
  })
})
