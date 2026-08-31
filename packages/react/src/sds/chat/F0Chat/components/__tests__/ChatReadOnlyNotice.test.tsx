import { describe, expect, it } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { type F0ChatChannel } from "../../types"
import { ChatReadOnlyNotice } from "../ChatReadOnlyNotice"

const channel: F0ChatChannel = {
  id: "c1",
  type: "announcement",
  title: "Factorial",
  avatar: { type: "company", name: "Factorial" },
}

describe("ChatReadOnlyNotice", () => {
  it("says what the host wrote — only the host knows who can post", () => {
    render(
      <ChatReadOnlyNotice
        channel={{
          ...channel,
          readOnlyNotice: "Only Factorial can send messages",
        }}
      />
    )
    expect(
      screen.getByText("Only Factorial can send messages")
    ).toBeInTheDocument()
  })

  it("falls back to a generic line when the host doesn't name anyone", () => {
    render(<ChatReadOnlyNotice channel={channel} />)
    expect(
      screen.getByText("You can't send messages in this conversation")
    ).toBeInTheDocument()
  })
})
