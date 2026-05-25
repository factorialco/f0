import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import { userEvent } from "@testing-library/user-event"

import type {
  AiChatEmployeeCredits,
  EmployeeCreditsUsage,
} from "../../../types"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

let mockEmployeeCredits: AiChatEmployeeCredits | null = null

vi.mock("../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({ employeeCredits: mockEmployeeCredits }),
}))

// Mock reduced motion to true so motion skips the gradient animation in jsdom
// (jsdom's cssstyle parser throws on animated linear-gradient backgroundImage)
vi.mock("@/lib/a11y", () => ({
  useReducedMotion: () => true,
}))

import { EmployeeCreditsPopover } from "../EmployeeCreditsPopover"

const baseUsage: EmployeeCreditsUsage = {
  used: 50,
  total: 250,
}

function makeEmployeeCredits(
  overrides: Partial<AiChatEmployeeCredits> = {},
  usage: EmployeeCreditsUsage = baseUsage
): AiChatEmployeeCredits {
  return {
    fetchUsage: vi.fn().mockResolvedValue(usage),
    ...overrides,
  }
}

async function openPopover() {
  const trigger = screen.getByRole("button", { name: /credits/i })
  await userEvent.click(trigger)
}

describe("EmployeeCreditsPopover", () => {
  beforeEach(() => {
    mockEmployeeCredits = null
  })

  it("renders nothing when employeeCredits is not provided", () => {
    const { container } = render(<EmployeeCreditsPopover />)

    expect(container.firstChild).toBeNull()
  })

  it("renders the trigger when employeeCredits is provided", () => {
    mockEmployeeCredits = makeEmployeeCredits()

    render(<EmployeeCreditsPopover />)

    expect(screen.getByRole("button", { name: /credits/i })).toBeInTheDocument()
  })

  it("fetches usage and displays remaining credits when opened", async () => {
    const fetchUsage = vi.fn().mockResolvedValue(baseUsage)
    mockEmployeeCredits = { fetchUsage }

    render(<EmployeeCreditsPopover />)
    await openPopover()

    await waitFor(() => {
      expect(fetchUsage).toHaveBeenCalledTimes(1)
    })

    // 250 - 50 = 200 remaining
    expect(await screen.findByText(/200 left/i)).toBeInTheDocument()
    expect(screen.getByText(/your credits/i)).toBeInTheDocument()
  })

  it("renders the company header when companyName is provided", async () => {
    mockEmployeeCredits = makeEmployeeCredits({
      companyName: "Acme",
      planName: "Free",
    })

    render(<EmployeeCreditsPopover />)
    await openPopover()

    expect(await screen.findByText("Acme")).toBeInTheDocument()
    expect(screen.getByText("Free")).toBeInTheDocument()
  })

  it("shows the error state when fetchUsage rejects", async () => {
    mockEmployeeCredits = {
      fetchUsage: vi.fn().mockRejectedValue(new Error("boom")),
    }

    render(<EmployeeCreditsPopover />)
    await openPopover()

    expect(
      await screen.findByText(/could not load credits/i)
    ).toBeInTheDocument()
  })

  it("clamps the remaining count at 0 when used exceeds total", async () => {
    mockEmployeeCredits = makeEmployeeCredits({}, { used: 300, total: 250 })

    render(<EmployeeCreditsPopover />)
    await openPopover()

    expect(await screen.findByText(/0 left/i)).toBeInTheDocument()
  })
})
