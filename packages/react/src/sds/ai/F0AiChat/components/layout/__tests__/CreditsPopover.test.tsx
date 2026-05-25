import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import { userEvent } from "@testing-library/user-event"

import type { AiChatCredits, CreditsUsage } from "../../../types"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

let mockCredits: AiChatCredits | null = null

vi.mock("../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({ credits: mockCredits }),
}))

// Mock reduced motion to true so motion skips the gradient animation in jsdom
// (jsdom's cssstyle parser throws on animated linear-gradient backgroundImage)
vi.mock("@/lib/a11y", () => ({
  useReducedMotion: () => true,
}))

import { CreditsPopover } from "../CreditsPopover"

const baseUsage: CreditsUsage = {
  used: 250,
  total: 1000,
}

function makeCredits(
  overrides: Partial<AiChatCredits> = {},
  usage: CreditsUsage = baseUsage
): AiChatCredits {
  return {
    fetchUsage: vi.fn().mockResolvedValue(usage),
    ...overrides,
  }
}

async function openPopover() {
  const trigger = screen.getByRole("button", { name: /credits/i })
  await userEvent.click(trigger)
}

describe("CreditsPopover", () => {
  beforeEach(() => {
    mockCredits = null
  })

  it("renders nothing when credits config is not provided", () => {
    const { container } = render(<CreditsPopover />)

    expect(container.firstChild).toBeNull()
  })

  it("shows the company credits section", async () => {
    mockCredits = makeCredits({}, { used: 250, total: 1000 })

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("Company credits")).toBeInTheDocument()
    })
    expect(screen.getByText("750 left")).toBeInTheDocument()
  })

  it("hides the company section when canViewCompanyCredits is false", async () => {
    mockCredits = makeCredits(
      { canViewCompanyCredits: false },
      { used: 250, total: 1000 }
    )

    render(<CreditsPopover />)
    await openPopover()

    // Trigger renders; opening fires fetch; section should not appear.
    await waitFor(() => {
      expect(mockCredits!.fetchUsage).toHaveBeenCalled()
    })
    expect(screen.queryByText("Company credits")).not.toBeInTheDocument()
  })

  it("hides the upgrade plan CTA when canViewCompanyCredits is false", async () => {
    mockCredits = makeCredits(
      {
        canViewCompanyCredits: false,
        upgradePlanUrl: "https://example.com/upgrade",
      },
      { used: 250, total: 1000 }
    )

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(mockCredits!.fetchUsage).toHaveBeenCalled()
    })
    expect(screen.queryByText("Need more credits?")).not.toBeInTheDocument()
    expect(
      screen.queryByRole("link", { name: /upgrade/i })
    ).not.toBeInTheDocument()
  })

  it("shows the upgrade plan CTA when canViewCompanyCredits is true (default)", async () => {
    mockCredits = makeCredits(
      { upgradePlanUrl: "https://example.com/upgrade" },
      { used: 250, total: 1000 }
    )

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("Need more credits?")).toBeInTheDocument()
    })
  })

  it("shows the company section by default (canViewCompanyCredits omitted)", async () => {
    mockCredits = makeCredits({}, { used: 100, total: 500 })

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("Company credits")).toBeInTheDocument()
    })
  })

  it("shows the error state when fetchUsage rejects", async () => {
    mockCredits = makeCredits({
      fetchUsage: vi.fn().mockRejectedValue(new Error("boom")),
    })

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("Could not load credits")).toBeInTheDocument()
    })
  })

  it("clamps creditsLeft at 0 when company usage exceeds total", async () => {
    mockCredits = makeCredits({}, { used: 200, total: 100 })

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("0 left")).toBeInTheDocument()
    })
  })
})
