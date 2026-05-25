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
  used: 30,
  total: 100,
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

  it("shows the employee credits section with remaining count", async () => {
    mockCredits = makeCredits({}, { used: 30, total: 100 })

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("Your credits")).toBeInTheDocument()
    })
    expect(screen.getByText("70 left")).toBeInTheDocument()
  })

  it("renders the company header when companyName is provided", async () => {
    mockCredits = makeCredits(
      { companyName: "Acme Inc", planName: "Free plan" },
      { used: 30, total: 100 }
    )

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("Your credits")).toBeInTheDocument()
    })
    expect(screen.getByText("Acme Inc")).toBeInTheDocument()
    expect(screen.getByText("Free plan")).toBeInTheDocument()
  })

  it("shows error state when fetchUsage rejects", async () => {
    mockCredits = makeCredits({
      fetchUsage: vi.fn().mockRejectedValue(new Error("boom")),
    })

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("Could not load credits")).toBeInTheDocument()
    })
  })

  it("clamps creditsLeft at 0 when usage exceeds total", async () => {
    mockCredits = makeCredits({}, { used: 200, total: 100 })

    render(<CreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(screen.getByText("Your credits")).toBeInTheDocument()
    })
    expect(screen.getByText("0 left")).toBeInTheDocument()
  })
})
