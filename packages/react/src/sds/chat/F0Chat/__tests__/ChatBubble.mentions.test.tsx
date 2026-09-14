import { describe, expect, it } from "vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"
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
  it("renders a neutral mention of someone else with a profile hover trigger", () => {
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
    expect(chip.className).toContain("text-f1-foreground-secondary")
    expect(chip).toHaveTextContent("@Ana García, Product Designer")
    // Wrapped in the hover-card trigger (same affordance as the sender avatar).
    expect(chip.closest("[data-state]")).not.toBeNull()
  })

  it("renders a neutral mention of you, still hover-carded", () => {
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
    expect(chip.className).toContain("text-f1-foreground-secondary")
    expect(chip.closest("[data-state]")).not.toBeNull()
  })

  it("renders a neutral @here with no hover card", () => {
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
    expect(chip.className).toContain("text-f1-foreground-secondary")
    expect(chip.closest("[data-state]")).toBeNull()
  })

  it("keeps canonically equivalent occurrences tied to their profiles", async () => {
    const { container } = render(
      <ChatBubble
        message={makeMessage({
          body: "Before @Garc\u00EDa and @Garci\u0301a, after",
          mentions: [
            {
              id: "nfc",
              name: "Garc\u00EDa",
              subtitle: "NFC profile",
              profileHref: "/people/nfc",
            },
            {
              id: "nfd",
              name: "Garci\u0301a",
              subtitle: "NFD profile",
              profileHref: "/people/nfd",
            },
          ],
        })}
        isMine
        currentUserId="me"
      />
    )

    expect(container).toHaveTextContent("Before @García and @García, after")

    const nfc = screen.getByRole("link", {
      name: "@García, NFC profile",
    })
    const nfd = screen.getByRole("link", {
      name: "@García, NFD profile",
    })
    expect(nfc).toHaveAttribute("href", "/people/nfc")
    expect(nfd).toHaveAttribute("href", "/people/nfd")

    await userEvent.hover(nfc)
    expect(await screen.findByText("NFC profile")).toBeVisible()
    await userEvent.unhover(nfc)
    await userEvent.hover(nfd)
    expect(await screen.findByText("NFD profile")).toBeVisible()
  })

  it("opens a mention profile from keyboard focus", async () => {
    render(
      <ChatBubble
        message={makeMessage({
          body: "Ping @Ana García",
          mentions: [
            {
              id: "ana-g",
              name: "Ana García",
              subtitle: "Product Designer",
              profileHref: "/people/ana-g",
            },
          ],
        })}
        isMine
        currentUserId="me"
      />
    )

    await userEvent.tab()
    const mention = screen.getByRole("link", {
      name: "@Ana García, Product Designer",
    })
    expect(mention).toHaveAttribute("href", "/people/ana-g")
    expect(mention).toHaveFocus()
    expect(await screen.findByText("Product Designer")).toBeVisible()
  })
})
