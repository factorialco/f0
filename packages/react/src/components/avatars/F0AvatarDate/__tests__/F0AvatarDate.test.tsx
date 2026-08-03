import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarDate } from "../F0AvatarDate"
// The public export is the `withDataTestId`-wrapped component; the bare one
// above is what the rendering assertions target.
import { F0AvatarDate as PublicF0AvatarDate } from "../index"

/**
 * Runs `body` with the process timezone pinned. Node applies a `process.env.TZ`
 * write to `Date` immediately, so this is enough to make a timezone-sensitive
 * assertion deterministic. Restores by deleting when TZ was unset, because
 * assigning `undefined` would leave the literal string "undefined" behind.
 */
const withTimeZone = (timeZone: string, body: () => void) => {
  const previous = process.env.TZ
  process.env.TZ = timeZone
  try {
    // Fail loudly if the pin did not take. Writing `process.env.TZ` only reaches
    // `Date` under vitest's `forks` pool, which is what this repo resolves to
    // today; in a worker thread the write is a silent no-op and every assertion
    // below would pass for the wrong reason.
    const pinned = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (pinned !== timeZone) {
      throw new Error(
        `timezone pin ineffective: asked for ${timeZone}, got ${pinned}. ` +
          "vitest is probably running the `threads` pool."
      )
    }
    body()
  } finally {
    if (previous === undefined) delete process.env.TZ
    else process.env.TZ = previous
  }
}

describe("F0AvatarDate", () => {
  it("renders the day of the month from the given date", () => {
    zeroRender(<F0AvatarDate date={new Date(2026, 0, 14)} />)

    expect(screen.getByText("14")).toBeInTheDocument()
  })

  it("renders the abbreviated month from the given date", () => {
    zeroRender(<F0AvatarDate date={new Date(2026, 0, 14)} />)

    // "Jan", not "JAN": the capitals come from the `uppercase` class, the text
    // node is what date-fns' "LLL" format returns.
    expect(screen.getByText("Jan")).toBeInTheDocument()
  })

  it("reads both values in local time, so the chip never shifts a day", () => {
    // The timezone has to be pinned for this to mean anything: CI runs in UTC,
    // where no instant can tell a local read apart from a UTC one. Sydney is
    // UTC+11 in December, so 08:00 local on 1 Dec is 21:00 UTC on 30 Nov — a
    // getUTCMonth()/getUTCDate() implementation renders "Nov" and 30 here.
    withTimeZone("Australia/Sydney", () => {
      zeroRender(<F0AvatarDate date={new Date(2024, 11, 1, 8, 0)} />)

      expect(screen.getByText("Dec")).toBeInTheDocument()
      expect(screen.getByText("1")).toBeInTheDocument()
    })
  })

  it("exposes no role, so aria-label lands on a role-less element", () => {
    const { container } = zeroRender(
      <F0AvatarDate date={new Date(2026, 0, 14)} aria-label="14 January 2026" />
    )

    // Pinning a known limitation, not endorsing it: unlike the other avatars
    // this one does not go through BaseAvatar, so it renders no `role="img"`.
    // `aria-label` here is an ARIA-prohibited attribute — assistive technology
    // need not honour it, and axe reports it as needs-review rather than a
    // violation, because the chip has text content. So this test is the only
    // guard on it; no axe gate will catch it. Don't "verify" the label with
    // getByLabelText: that reads the attribute off the DOM and would pass while
    // the name is unreachable in practice.
    expect(container.firstChild).not.toHaveAttribute("role")
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("renders the data test id through the public export", () => {
    zeroRender(
      <PublicF0AvatarDate
        date={new Date(2026, 0, 14)}
        dataTestId="date-avatar"
      />
    )

    // `dataTestId` comes from the withDataTestId HOC in index.tsx, so the bare
    // component cannot satisfy this — it is the only test that mounts the
    // public export at all.
    expect(screen.getByTestId("date-avatar")).toBeInTheDocument()
    expect(screen.getByTestId("date-avatar")).toHaveTextContent("Jan")
  })
})
