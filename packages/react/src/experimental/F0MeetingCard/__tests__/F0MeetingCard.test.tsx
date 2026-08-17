import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import { F0MeetingCard } from "../F0MeetingCard"
import type { MeetingAttendee } from "../types"

const now = new Date("2026-03-12T09:00:00")

const attendees: MeetingAttendee[] = [
  { type: "internal", firstName: "Ada", lastName: "Lovelace" },
  { type: "internal", firstName: "Alan", lastName: "Turing" },
  { type: "external", name: "Grace Hopper", email: "grace@example.com" },
]

describe("F0MeetingCard", () => {
  it("renders the title and the meta line for an upcoming meeting", () => {
    render(
      <F0MeetingCard
        state="scheduled"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T09:30:00")}
        now={now}
        attendees={attendees}
        invitedCount={12}
      />
    )

    expect(screen.getByText("Morning shift briefing")).toBeInTheDocument()
    expect(screen.getByText(/Today/)).toBeInTheDocument()
    expect(screen.getByText(/12 guests/)).toBeInTheDocument()
  })

  it("labels a meeting held the previous day", () => {
    render(
      <F0MeetingCard
        state="finished"
        title="Retro"
        startsAt={new Date("2026-03-11T16:00:00")}
        now={now}
        attendees={attendees}
      />
    )

    expect(screen.getByText(/Yesterday/)).toBeInTheDocument()
  })

  it("shows the duration once the meeting is over", () => {
    render(
      <F0MeetingCard
        state="finished"
        title="Retro"
        startsAt={new Date("2026-03-12T08:00:00")}
        endsAt={new Date("2026-03-12T08:23:00")}
        now={now}
      />
    )

    expect(screen.getByText(/23 mins/)).toBeInTheDocument()
  })

  it("keeps the join button disabled outside the join window", () => {
    render(
      <F0MeetingCard
        state="scheduled"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T11:00:00")}
        now={now}
        join={{ onJoin: vi.fn() }}
      />
    )

    expect(screen.getByRole("button", { name: /Join/ })).toBeDisabled()
    expect(screen.queryByText(/In \d+ min/)).not.toBeInTheDocument()
  })

  it("enables the join button and counts down inside the window", async () => {
    const onJoin = vi.fn()
    render(
      <F0MeetingCard
        state="scheduled"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T09:08:00")}
        now={now}
        join={{ onJoin }}
      />
    )

    expect(screen.getByText("In 8 mins")).toBeInTheDocument()

    const join = screen.getByRole("button", { name: /Join/ })
    expect(join).toBeEnabled()

    await userEvent.click(join)
    expect(onJoin).toHaveBeenCalledOnce()
  })

  it("respects a custom join window", () => {
    render(
      <F0MeetingCard
        state="scheduled"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T09:25:00")}
        now={now}
        join={{ onJoin: vi.fn(), windowMinutes: 30 }}
      />
    )

    expect(screen.getByRole("button", { name: /Join/ })).toBeEnabled()
    expect(screen.getByText("In 25 mins")).toBeInTheDocument()
  })

  it("lets the consumer force the join button off", () => {
    render(
      <F0MeetingCard
        state="inProgress"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T08:56:00")}
        now={now}
        join={{ onJoin: vi.fn(), disabled: true }}
      />
    )

    expect(screen.getByRole("button", { name: /Join/ })).toBeDisabled()
  })

  it("reports elapsed time and shows attendee faces while in progress", () => {
    render(
      <F0MeetingCard
        state="inProgress"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T08:56:00")}
        now={now}
        attendees={attendees}
        presentCount={8}
      />
    )

    expect(screen.getByText(/4 mins ago/)).toBeInTheDocument()
    expect(screen.getByText("In progress")).toBeInTheDocument()
    expect(screen.getByRole("group", { name: "Attendees" })).toBeInTheDocument()
    expect(screen.queryByText(/8 inside/)).not.toBeInTheDocument()
  })

  it("reads 'Starting now' instead of zero minutes", () => {
    render(
      <F0MeetingCard
        state="inProgress"
        title="Morning shift briefing"
        startsAt={now}
        now={now}
      />
    )

    expect(screen.getByText(/Starting now/)).toBeInTheDocument()
  })

  it("switches to a written count when asked to", () => {
    render(
      <F0MeetingCard
        state="inProgress"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T08:56:00")}
        now={now}
        attendees={attendees}
        presentCount={8}
        attendeesDisplay="count"
      />
    )

    expect(screen.getByText(/8 inside/)).toBeInTheDocument()
    expect(
      screen.queryByRole("group", { name: "Attendees" })
    ).not.toBeInTheDocument()
  })

  it("flags a recap still being generated and hides the summary", () => {
    render(
      <F0MeetingCard
        state="summarizing"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T08:00:00")}
        now={now}
        summary="Marta covers the first shift."
      />
    )

    expect(screen.getByText("Summarizing")).toBeInTheDocument()
    expect(
      screen.queryByRole("group", { name: "Summary" })
    ).not.toBeInTheDocument()
  })

  it("shows the summary and drops the join button once finished", () => {
    render(
      <F0MeetingCard
        state="finished"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T08:00:00")}
        now={now}
        summary="Marta covers the first shift."
        join={{ onJoin: vi.fn() }}
      />
    )

    expect(screen.getByRole("group", { name: "Summary" })).toHaveTextContent(
      "Marta covers the first shift."
    )
    expect(screen.getByText("Finished")).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /Join/ })
    ).not.toBeInTheDocument()
  })

  it("strikes through a cancelled meeting and tags it", () => {
    render(
      <F0MeetingCard
        state="cancelled"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T11:00:00")}
        now={now}
        join={{ onJoin: vi.fn() }}
      />
    )

    expect(screen.getByText("Cancelled")).toBeInTheDocument()
    expect(screen.getByText("Morning shift briefing")).toHaveClass(
      "line-through"
    )
    expect(
      screen.queryByRole("button", { name: /Join/ })
    ).not.toBeInTheDocument()
  })

  it("renders consumer-owned footer actions", async () => {
    const onClick = vi.fn()
    render(
      <F0MeetingCard
        state="finished"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T08:00:00")}
        now={now}
        secondaryActions={[{ label: "Transcript", onClick }]}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: "Transcript" }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("works without a title, letting the status tag carry the meaning", () => {
    render(
      <F0MeetingCard
        state="inProgress"
        startsAt={new Date("2026-03-12T08:56:00")}
        now={now}
        attendees={attendees}
        join={{ onJoin: vi.fn() }}
      />
    )

    expect(screen.getByText("In progress")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Join/ })).toBeEnabled()
  })

  describe("compact", () => {
    it("titles a running untitled meeting and drops the redundant tag", () => {
      render(
        <F0MeetingCard
          state="inProgress"
          startsAt={new Date("2026-03-12T08:56:00")}
          now={now}
          attendees={attendees}
          presentCount={8}
          join={{ onJoin: vi.fn() }}
          compact
        />
      )

      expect(screen.getByText("Call in progress")).toBeInTheDocument()
      expect(screen.getByText("4 mins ago")).toBeInTheDocument()
      // The headline already says it — a tag would repeat itself.
      expect(screen.queryByText("In progress")).not.toBeInTheDocument()
    })

    it("keeps a provided title and still tags the running state", () => {
      render(
        <F0MeetingCard
          state="inProgress"
          title="Morning shift briefing"
          startsAt={new Date("2026-03-12T08:56:00")}
          now={now}
          attendees={attendees}
          presentCount={8}
          compact
        />
      )

      expect(screen.getByText("Morning shift briefing")).toBeInTheDocument()
      expect(screen.getByText("In progress")).toBeInTheDocument()
      expect(screen.queryByText("Call in progress")).not.toBeInTheDocument()
    })

    it("moves the countdown into the text line, with no tag", () => {
      render(
        <F0MeetingCard
          state="scheduled"
          title="Morning shift briefing"
          startsAt={new Date("2026-03-12T09:08:00")}
          now={now}
          invitedCount={12}
          join={{ onJoin: vi.fn() }}
          compact
        />
      )

      expect(screen.getByText(/In 8 mins/)).toBeInTheDocument()
      expect(screen.getByText(/12 guests/)).toBeInTheDocument()
      expect(screen.getByRole("button", { name: /Join/ })).toBeEnabled()
    })

    it("still surfaces states the headline cannot carry", () => {
      render(
        <F0MeetingCard
          state="cancelled"
          title="Morning shift briefing"
          startsAt={new Date("2026-03-12T11:00:00")}
          now={now}
          compact
        />
      )

      expect(screen.getByText("Cancelled")).toBeInTheDocument()
    })

    it("drops the clock time while the meeting runs", () => {
      render(
        <F0MeetingCard
          state="inProgress"
          startsAt={new Date("2026-03-12T08:56:00")}
          now={now}
          compact
        />
      )

      expect(screen.getByText("4 mins ago")).toBeInTheDocument()
      expect(screen.queryByText(/8:56/)).not.toBeInTheDocument()
    })
  })

  it("exposes a dataTestId", () => {
    render(
      <F0MeetingCard
        state="scheduled"
        title="Morning shift briefing"
        startsAt={new Date("2026-03-12T09:30:00")}
        now={now}
        dataTestId="meeting"
      />
    )

    expect(screen.getByTestId("meeting")).toBeInTheDocument()
  })
})
