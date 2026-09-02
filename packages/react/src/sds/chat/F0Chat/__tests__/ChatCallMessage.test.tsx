import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { render } from "@/testing/test-utils"

import { ChatCallMessage } from "../components/ChatCallMessage"
import { type F0ChatCall, type F0ChatUser } from "../types"

const ME: F0ChatUser = { id: "me", name: "Jordan Avery" }
const THEM: F0ChatUser = { id: "u_eleanor", name: "Eleanor Whitfield" }

const call = (overrides: Partial<F0ChatCall> = {}): F0ChatCall => ({
  id: "call-1",
  state: "ended",
  startedBy: ME,
  startedAt: "2026-03-12T09:00:00.000Z",
  endedAt: "2026-03-12T09:12:00.000Z",
  participants: [ME, THEM],
  ...overrides,
})

describe("ChatCallMessage", () => {
  it("shows the summary once the call has ended", () => {
    render(
      <ChatCallMessage call={call({ summary: "Panel ships behind a flag." })} />
    )
    expect(screen.getByRole("group", { name: "Summary" })).toHaveTextContent(
      "Panel ships behind a flag."
    )
  })

  it("shows the faces of everyone who was in it", () => {
    // The card used to lose its roster on hang-up, so a finished call listed
    // nobody — which reads as a call that never happened. Faces rather than a
    // count because `auto` labels the count "guests", the invited wording.
    render(<ChatCallMessage call={call()} />)
    expect(screen.getByRole("group", { name: "Attendees" })).toBeInTheDocument()
    expect(screen.queryByText(/guests?$/)).not.toBeInTheDocument()
  })

  it("shows how long it lasted, which the compact card drops", () => {
    render(<ChatCallMessage call={call()} />)
    expect(screen.getByText(/12 mins/)).toBeInTheDocument()
  })

  it("offers the transcript through an action the host owns", () => {
    // Deliberately an action and not a viewer: a transcript is long, and a
    // node of unpredictable height inside a virtualized list is what `compact`
    // exists to avoid.
    const onClick = vi.fn()
    render(
      <ChatCallMessage
        call={call({
          summary: "…",
          actions: [{ label: "Transcript", onClick }],
        })}
      />
    )
    expect(screen.getByRole("button", { name: "Transcript" })).toBeVisible()
  })

  it("runs the transcript action when it is pressed", async () => {
    const onClick = vi.fn()
    render(
      <ChatCallMessage
        call={call({
          summary: "…",
          actions: [{ label: "Transcript", onClick }],
        })}
      />
    )
    await userEvent.click(screen.getByRole("button", { name: "Transcript" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("says nothing about a summary while the call is still live", () => {
    // The card gates the summary on `finished` itself, so passing it
    // unconditionally cannot leak one onto a call in progress.
    render(
      <ChatCallMessage
        call={call({
          state: "live",
          endedAt: undefined,
          summary: "should not appear",
        })}
      />
    )
    expect(screen.queryByText("should not appear")).not.toBeInTheDocument()
  })

  it("shows no summary on a call nobody answered", () => {
    render(
      <ChatCallMessage
        call={call({ state: "missed", summary: "should not appear" })}
      />
    )
    expect(screen.queryByText("should not appear")).not.toBeInTheDocument()
  })

  it("renders a joinable call with its Join button", () => {
    render(
      <ChatCallMessage
        call={call({ state: "live", endedAt: undefined, join: vi.fn() })}
      />
    )
    expect(screen.getByRole("button", { name: /join/i })).toBeVisible()
  })

  it("cannot render a dead Join button on a finished call", () => {
    render(<ChatCallMessage call={call()} />)
    expect(
      screen.queryByRole("button", { name: /join/i })
    ).not.toBeInTheDocument()
  })
})
