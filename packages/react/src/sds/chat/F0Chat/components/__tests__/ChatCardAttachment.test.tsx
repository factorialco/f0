import { describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import { type F0ChatCardAttachment } from "../../types"
import { CHAT_MEDIA_WIDTH_CLASS } from "../../utils/media-layout"
import { ChatCardAttachment } from "../ChatCardAttachment"

const card: F0ChatCardAttachment = {
  kind: "card",
  title: "Give your team access",
  description: "One step. We've prepared 📣 General for when they join.",
}

describe("ChatCardAttachment", () => {
  it("renders the title and description the host described", () => {
    render(<ChatCardAttachment card={card} />)
    expect(screen.getByText("Give your team access")).toBeInTheDocument()
    expect(screen.getByText(/One step\./)).toBeInTheDocument()
  })

  it("renders the action as a button that calls back", async () => {
    const onClick = vi.fn()
    render(
      <ChatCardAttachment
        card={{ ...card, action: { label: "Invite people", onClick } }}
      />
    )
    await userEvent.click(screen.getByRole("button", { name: "Invite people" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("renders an href action as a link instead", () => {
    render(
      <ChatCardAttachment
        card={{ ...card, action: { label: "Read more", href: "/changelog" } }}
      />
    )
    expect(screen.getByRole("link", { name: "Read more" })).toHaveAttribute(
      "href",
      "/changelog"
    )
  })

  it("takes the shared media width and never the message column's", () => {
    render(<ChatCardAttachment card={card} />)
    const host = screen.getByTestId("chat-card-attachment")
    for (const className of CHAT_MEDIA_WIDTH_CLASS.split(" ")) {
      expect(host).toHaveClass(className)
    }
    // `classList.contains`, not a substring check: "max-w-full" contains it.
    expect(host.classList.contains("w-full")).toBe(false)
  })
})
