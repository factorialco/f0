import { describe, expect, it } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { type F0ChatMessage } from "../../types"
import { formatClock } from "../../utils/natural-time"
import { ChatMessageMeta } from "../ChatMessageMeta"

const CREATED_AT = "2026-06-21T13:53:00"

const MESSAGE: F0ChatMessage = {
  id: "m1",
  author: { id: "other", name: "Nora Vidal" },
  body: "hello",
  createdAt: CREATED_AT,
  isMine: false,
}

describe("ChatMessageMeta", () => {
  // A photo with a caption shows the clock twice in the same message — on the
  // image and in the bubble — and two type scales made them read as two
  // different things.
  it.each(["bubble", "overlay", "below"] as const)(
    "keeps the %s clock on the same type scale",
    (placement) => {
      render(<ChatMessageMeta message={MESSAGE} placement={placement} />)
      expect(screen.getByTestId("chat-message-time").className).toContain(
        "text-xs"
      )
    }
  )

  it("writes the clock in the reader's own locale", () => {
    render(<ChatMessageMeta message={MESSAGE} placement="below" />)
    // Through the shared formatter, not a hand-rolled 24-hour string: on a
    // 12-hour machine this reads "1:53 PM".
    expect(screen.getByTestId("chat-message-time")).toHaveTextContent(
      formatClock(new Date(CREATED_AT))
    )
  })
})
