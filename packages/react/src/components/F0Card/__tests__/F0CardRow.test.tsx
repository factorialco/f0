import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { Briefcase, Check, Cross } from "@/icons/app"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

// The actions delegate to ButtonGroup, whose width-driven overflow measures DOM
// it can't in jsdom (zero layout) — so it would shove every action into the "⋯"
// menu. Stub the measurement to keep everything visible, as a real browser would.
vi.mock("@/ui/OverflowList/useOverflowCalculation", () => ({
  useOverflowCalculation: <T,>(items: T[]) => ({
    containerRef: { current: null },
    overflowButtonRef: { current: null },
    customOverflowIndicatorRef: { current: null },
    measurementContainerRef: { current: null },
    visibleItems: items,
    overflowItems: [],
    isInitialized: true,
  }),
}))

import type { CardSecondaryLink } from "../components/CardActions"
import type { CardAvatarVariant } from "../components/CardAvatar"

import { F0CardRow } from "../F0CardRow"

describe("F0CardRow", () => {
  it("renders title and description", () => {
    render(<F0CardRow title="Jane Cooper" description="Product designer" />)

    expect(screen.getByText("Jane Cooper")).toBeInTheDocument()
    expect(screen.getByText("Product designer")).toBeInTheDocument()
  })

  it("renders an avatar when provided", () => {
    render(
      <F0CardRow
        title="Jane Cooper"
        avatar={{ type: "person", firstName: "Jane", lastName: "Cooper" }}
      />
    )

    expect(screen.getByTestId("card-avatar")).toBeInTheDocument()
  })

  it("renders every supported avatar type", () => {
    const avatars: CardAvatarVariant[] = [
      { type: "person", firstName: "Jane", lastName: "Cooper" },
      { type: "company", name: "Acme Inc" },
      { type: "team", name: "Design" },
      { type: "file", file: { name: "contract.pdf", type: "application/pdf" } },
      { type: "flag", flag: "es" },
      { type: "icon", icon: Briefcase },
      { type: "emoji", emoji: "🚀" },
      { type: "module", module: "goals" },
      { type: "alert", variant: "warning" },
      { type: "date", date: new Date(2026, 5, 5) },
    ]

    avatars.forEach((avatar) => {
      const { unmount } = render(<F0CardRow title="Title" avatar={avatar} />)
      expect(screen.getByTestId("card-avatar")).toBeInTheDocument()
      unmount()
    })
  })

  it("renders as a clickable link when link is provided", () => {
    render(<F0CardRow title="Linked row" link="/test-link" />)

    const link = screen.getByRole("link", { name: "Linked row" })
    expect(link).toHaveAttribute("href", "/test-link")
  })

  it("calls onClick when the row is clicked", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<F0CardRow title="Clickable" onClick={handleClick} />)

    await user.click(screen.getByText("Clickable"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("calls primaryAction.onClick", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<F0CardRow title="Row" primaryAction={{ label: "Open", onClick }} />)

    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("calls a secondary action's onClick", async () => {
    const user = userEvent.setup()
    const onEdit = vi.fn()

    render(
      <F0CardRow
        title="Row"
        secondaryActions={[{ label: "Edit", onClick: onEdit }]}
        primaryAction={{ label: "Open", onClick: vi.fn() }}
      />
    )

    await user.click(screen.getByRole("button", { name: "Edit" }))
    expect(onEdit).toHaveBeenCalledTimes(1)
  })

  it("renders a secondary action link", () => {
    const secondaryLink: CardSecondaryLink = {
      label: "View more",
      href: "/test-page",
      target: "_blank",
    }

    render(<F0CardRow title="Row" secondaryActions={secondaryLink} />)

    const link = screen.getByRole("link", { name: "View more" })
    expect(link).toHaveAttribute("href", "/test-page")
    expect(link).toHaveAttribute("target", "_blank")
  })

  it("opens the overflow menu and triggers otherActions", async () => {
    const user = userEvent.setup()
    const onArchive = vi.fn()

    render(
      <F0CardRow
        title="Row"
        otherActions={[{ label: "Archive", onClick: onArchive }]}
      />
    )

    // With only otherActions and the default stackAt="never", the sole button is
    // the overflow (⋯) trigger.
    await user.click(screen.getByRole("button"))
    await user.click(screen.getByRole("menuitem", { name: "Archive" }))
    await waitFor(() => expect(onArchive).toHaveBeenCalledTimes(1))
  })

  describe("confirm/reject variant", () => {
    it("calls confirmAction.onClick", async () => {
      const user = userEvent.setup()
      const onConfirm = vi.fn()

      render(<F0CardRow title="Row" confirmAction={{ onClick: onConfirm }} />)

      await user.click(screen.getByRole("button", { name: "Confirm" }))
      expect(onConfirm).toHaveBeenCalledTimes(1)
    })

    it("calls rejectAction.onClick", async () => {
      const user = userEvent.setup()
      const onReject = vi.fn()

      render(<F0CardRow title="Row" rejectAction={{ onClick: onReject }} />)

      await user.click(screen.getByRole("button", { name: "Reject" }))
      expect(onReject).toHaveBeenCalledTimes(1)
    })

    it("replaces the standard actions", () => {
      render(
        <F0CardRow
          title="Row"
          confirmAction={{ onClick: vi.fn() }}
          rejectAction={{ onClick: vi.fn() }}
          primaryAction={{ label: "Open", onClick: vi.fn() }}
        />
      )

      expect(
        screen.getByRole("button", { name: "Confirm" })
      ).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Reject" })).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Open" })
      ).not.toBeInTheDocument()
    })
  })

  describe("status (resolved state)", () => {
    it("renders the status icon by its accessible label", () => {
      render(
        <F0CardRow
          title="Row"
          status={{ icon: Check, variant: "positive", label: "Accepted" }}
        />
      )

      expect(screen.getByRole("img", { name: "Accepted" })).toBeInTheDocument()
    })

    it("takes precedence over the action props", () => {
      render(
        <F0CardRow
          title="Row"
          status={{ icon: Cross, variant: "critical", label: "Rejected" }}
          primaryAction={{ label: "Open", onClick: vi.fn() }}
          secondaryActions={[{ label: "Edit", onClick: vi.fn() }]}
        />
      )

      expect(screen.getByRole("img", { name: "Rejected" })).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Open" })
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Edit" })
      ).not.toBeInTheDocument()
    })

    it("strikes through and dims the title when inactive", () => {
      render(<F0CardRow title="Void request" description="Details" inactive />)

      const title = screen.getByText("Void request")
      expect(title).toHaveClass("line-through")
      expect(title).toHaveClass("text-f1-foreground-secondary")
      expect(screen.getByText("Details")).toHaveClass("line-through")
    })
  })

  it("renders the alert banner when alert is provided", () => {
    render(
      <F0CardRow
        title="Row"
        alert={{ variant: "warning", title: "Action required" }}
      />
    )

    expect(screen.getByText("Action required")).toBeInTheDocument()
  })

  it("renders for every stackAt value", () => {
    const values = ["sm", "md", "lg", "never"] as const

    values.forEach((stackAt) => {
      const { unmount } = render(
        <F0CardRow
          title="Row"
          stackAt={stackAt}
          primaryAction={{ label: "Open", onClick: vi.fn() }}
        />
      )

      expect(screen.getByTestId("card")).toBeInTheDocument()
      // The primary stays visible (pinned at the trailing edge) at every breakpoint.
      expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
      unmount()
    })
  })
})
