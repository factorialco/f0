import { describe, expect, it, vi } from "vitest"

import { render, screen, userEvent } from "@/testing/test-utils"

import { type F0ChatCall, type F0ChatCallState } from "../../types"
import { ChatCallMessage } from "../ChatCallMessage"

const build = (overrides: Partial<F0ChatCall> = {}): F0ChatCall => ({
  id: "c1",
  state: "ringing",
  startedBy: { id: "u1", name: "Marcus Bennett" },
  startedAt: new Date().toISOString(),
  ...overrides,
})

const card = () => screen.getByTestId("meeting-card")

describe("ChatCallMessage", () => {
  it("names who started the call while it is not over", () => {
    render(<ChatCallMessage call={build()} />)
    expect(card()).toHaveTextContent("Marcus Bennett started a huddle")
  })

  it("shows the join button only when the call can be joined", async () => {
    const join = vi.fn()
    const { rerender } = render(<ChatCallMessage call={build({ join })} />)

    const button = screen.getByRole("button")
    await userEvent.click(button)
    expect(join).toHaveBeenCalledTimes(1)

    // An ended call has no `join` — its absence is what removes the button, so
    // there is never a dead control on a finished call.
    rerender(<ChatCallMessage call={build({ state: "ended" })} />)
    expect(screen.queryByRole("button")).toBeNull()
  })

  it.each<[F0ChatCallState, string]>([
    ["ringing", "Ringing"],
    ["live", "In progress"],
    ["ended", "Finished"],
    ["missed", "Missed"],
  ])("renders the %s state with its own tag", (state, label) => {
    render(<ChatCallMessage call={build({ state })} />)
    expect(card()).toHaveTextContent(label)
  })

  it("titles an ended call by what happened, not by who started it", () => {
    render(<ChatCallMessage call={build({ state: "ended" })} />)
    expect(card()).toHaveTextContent("Huddle ended")
    expect(card()).not.toHaveTextContent("started a huddle")
  })

  it("does not strike through a missed call", () => {
    // The reason `missed` exists instead of reusing `cancelled`: that one
    // strikes the title, which on "Missed huddle" says the opposite.
    render(<ChatCallMessage call={build({ state: "missed" })} />)
    const title = screen.getByText("Missed huddle")
    expect(title.className).not.toContain("line-through")
  })

  it("shows who is in the room while the call runs", () => {
    render(
      <ChatCallMessage
        call={build({
          state: "live",
          participants: [
            { id: "me", name: "Jordan Avery" },
            { id: "u1", name: "Marcus Bennett" },
          ],
        })}
      />
    )
    expect(screen.getByTestId("meeting-card")).toBeInTheDocument()
    // Avatars rather than a count: while a call runs, WHO matters more.
    expect(screen.queryByText(/2 guests/)).toBeNull()
  })
})
