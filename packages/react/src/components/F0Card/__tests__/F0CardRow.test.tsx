import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { Briefcase } from "@/icons/app"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

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
      {
        type: "pulse",
        firstName: "Jane",
        lastName: "Cooper",
        onPulseClick: vi.fn(),
      },
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

    await user.click(screen.getByTestId("primary-button"))
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

    const link = screen.getByTestId("secondary-link")
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

      await user.click(screen.getByTestId("confirm-button"))
      expect(onConfirm).toHaveBeenCalledTimes(1)
    })

    it("calls rejectAction.onClick", async () => {
      const user = userEvent.setup()
      const onReject = vi.fn()

      render(<F0CardRow title="Row" rejectAction={{ onClick: onReject }} />)

      await user.click(screen.getByTestId("reject-button"))
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

      expect(screen.getByTestId("confirm-button")).toBeInTheDocument()
      expect(screen.getByTestId("reject-button")).toBeInTheDocument()
      expect(screen.queryByTestId("primary-button")).not.toBeInTheDocument()
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
      // The primary stays visible at every breakpoint (rendered in the inline
      // cluster and, for non-"never", the stacked cluster too).
      expect(screen.getAllByTestId("primary-button").length).toBeGreaterThan(0)
      unmount()
    })
  })
})
