import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type { F0AudienceEntity } from "@/experimental/Forms/Fields/F0AudienceSelector"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0AudienceListItem } from "../index"
import type { F0AudienceMember } from "../types"

const ada: F0AudienceEntity = {
  kind: "individual",
  id: "1",
  name: "Ada Lovelace",
  firstName: "Ada",
  lastName: "Lovelace",
  subtitle: "VP of Engineering",
}

const payroll: F0AudienceEntity = {
  kind: "team",
  id: "team-payroll",
  name: "Payroll",
  memberCount: 3,
}

const payrollMembers: F0AudienceMember[] = [
  { id: "m1", firstName: "Grace", lastName: "Hopper", subtitle: "Engineer" },
  { id: "m2", firstName: "Lin", lastName: "Chen" },
]

describe("F0AudienceListItem", () => {
  it("renders the entity name and subtitle", () => {
    render(<F0AudienceListItem entity={ada} />)

    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.getByText("VP of Engineering")).toBeInTheDocument()
  })

  it("appends the localized (You) suffix", () => {
    render(<F0AudienceListItem entity={ada} isYou />)

    expect(screen.getByText("Ada Lovelace (You)")).toBeInTheDocument()
  })

  it("renders the localized group subtitle", () => {
    render(<F0AudienceListItem entity={payroll} />)

    expect(screen.getByText("3 people · Team")).toBeInTheDocument()
  })

  it("renders an accessible warning chip", () => {
    render(
      <F0AudienceListItem entity={ada} warning="Outside your reporting line" />
    )

    expect(
      screen.getByRole("button", { name: "Outside your reporting line" })
    ).toBeInTheDocument()
  })

  it("renders the right slot", () => {
    render(<F0AudienceListItem entity={ada} right={<span>Viewer</span>} />)

    expect(screen.getByText("Viewer")).toBeInTheDocument()
  })

  it("is not expandable for individuals even with a members prop", () => {
    render(
      <F0AudienceListItem
        entity={ada}
        members={{ fetch: () => Promise.resolve(payrollMembers) }}
      />
    )

    expect(
      screen.queryByRole("button", { name: "Show members of Payroll" })
    ).not.toBeInTheDocument()
  })

  it("is not expandable for groups without a members prop", () => {
    render(<F0AudienceListItem entity={payroll} />)

    expect(
      screen.queryByRole("button", { name: "Show members of Payroll" })
    ).not.toBeInTheDocument()
  })

  it("fetches members once on first expand and renders them with the note", async () => {
    const user = userEvent.setup()
    const fetch = vi.fn(() => Promise.resolve(payrollMembers))
    render(
      <F0AudienceListItem
        entity={payroll}
        members={{
          fetch,
          note: "New members in this group automatically gain access.",
        }}
      />
    )

    const toggle = screen.getByRole("button", {
      name: "Show members of Payroll",
    })
    await user.click(toggle)

    await waitFor(() =>
      expect(screen.getByText("Grace Hopper")).toBeInTheDocument()
    )
    expect(screen.getByText("Lin Chen")).toBeInTheDocument()
    expect(
      screen.getByText("New members in this group automatically gain access.")
    ).toBeInTheDocument()
    expect(toggle).toHaveAttribute("aria-expanded", "true")

    // Collapse and expand again: no refetch
    await user.click(
      screen.getByRole("button", { name: "Hide members of Payroll" })
    )
    expect(screen.queryByText("Grace Hopper")).not.toBeInTheDocument()
    await user.click(
      screen.getByRole("button", { name: "Show members of Payroll" })
    )
    await waitFor(() =>
      expect(screen.getByText("Grace Hopper")).toBeInTheDocument()
    )
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it("shows the empty state for groups without members", async () => {
    const user = userEvent.setup()
    render(
      <F0AudienceListItem
        entity={payroll}
        members={{ fetch: () => Promise.resolve([]) }}
      />
    )

    await user.click(
      screen.getByRole("button", { name: "Show members of Payroll" })
    )
    await waitFor(() =>
      expect(screen.getByText("No current members")).toBeInTheDocument()
    )
  })

  it("supports controlled expansion", async () => {
    const user = userEvent.setup()
    const onExpandedChange = vi.fn()
    const { rerender } = render(
      <F0AudienceListItem
        entity={payroll}
        members={{ fetch: () => Promise.resolve(payrollMembers) }}
        expanded={false}
        onExpandedChange={onExpandedChange}
      />
    )

    expect(screen.queryByText("Grace Hopper")).not.toBeInTheDocument()
    await user.click(
      screen.getByRole("button", { name: "Show members of Payroll" })
    )
    expect(onExpandedChange).toHaveBeenCalledWith(true)
    // Still collapsed: the parent owns the state
    expect(screen.queryByText("Grace Hopper")).not.toBeInTheDocument()

    rerender(
      <F0AudienceListItem
        entity={payroll}
        members={{ fetch: () => Promise.resolve(payrollMembers) }}
        expanded
        onExpandedChange={onExpandedChange}
      />
    )
    await waitFor(() =>
      expect(screen.getByText("Grace Hopper")).toBeInTheDocument()
    )
  })

  it("surfaces a fetch error with a retry that reloads the members", async () => {
    const user = userEvent.setup()
    const fetch = vi
      .fn<() => Promise<F0AudienceMember[]>>()
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValueOnce(payrollMembers)
    render(<F0AudienceListItem entity={payroll} members={{ fetch }} />)

    await user.click(
      screen.getByRole("button", { name: "Show members of Payroll" })
    )
    // First fetch rejects: the row shows an error with a retry affordance,
    // not a blank body
    await waitFor(() =>
      expect(screen.getByText("Couldn't load members")).toBeInTheDocument()
    )
    expect(screen.queryByText("Grace Hopper")).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Try again" }))
    await waitFor(() =>
      expect(screen.getByText("Grace Hopper")).toBeInTheDocument()
    )
    expect(screen.queryByText("Couldn't load members")).not.toBeInTheDocument()
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it("passes dataTestId through", () => {
    render(<F0AudienceListItem entity={ada} dataTestId="audience-row" />)

    expect(screen.getByTestId("audience-row")).toBeInTheDocument()
  })
})
