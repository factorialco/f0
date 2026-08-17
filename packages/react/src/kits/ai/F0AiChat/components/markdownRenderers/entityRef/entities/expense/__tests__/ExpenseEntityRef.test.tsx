import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import type { ExpenseProfile } from "../types"

const mockResolver = vi.fn<(id: string) => Promise<ExpenseProfile>>()
let mockEntityRefs: {
  resolvers?: { expense?: typeof mockResolver }
  urls?: { expense?: (id: string) => string }
} = {
  resolvers: { expense: mockResolver },
}

vi.mock("../../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    entityRefs: mockEntityRefs,
  }),
}))

import { ExpenseEntityRef } from "../ExpenseEntityRef"

const profile: ExpenseProfile = {
  id: "559",
  description: "Team lunch",
  amount: "€45.00",
  status: "pending",
}

describe("ExpenseEntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEntityRefs = { resolvers: { expense: mockResolver } }
  })

  it("renders the trigger button without @ prefix", () => {
    render(<ExpenseEntityRef id="559" label="Expense #559" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Expense #559")
    expect(button.textContent).not.toMatch(/^@/)
  })

  it("renders label as plain text when no resolver is available", () => {
    mockEntityRefs = {}

    const { container } = render(
      <ExpenseEntityRef id="559" label="Expense #559" />
    )
    expect(container.querySelector("span")).toHaveTextContent("Expense #559")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("shows hover card with profile data on hover", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<ExpenseEntityRef id="559" label="Expense #559" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Team lunch")).toBeInTheDocument()
      expect(screen.getByText("€45.00 · pending")).toBeInTheDocument()
    })
  })

  it("caches profile — resolver is called only once per id", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<ExpenseEntityRef id="559" label="Expense #559" />)

    const trigger = screen.getByText("Expense #559")

    await user.hover(trigger)
    await waitFor(() => {
      expect(mockResolver).toHaveBeenCalledTimes(1)
    })

    await user.unhover(trigger)
    await user.hover(trigger)

    expect(mockResolver).toHaveBeenCalledTimes(1)
  })

  it("shows skeleton while loading", async () => {
    const user = userEvent.setup()
    mockResolver.mockReturnValue(new Promise(() => {}))

    render(<ExpenseEntityRef id="559" label="Expense #559" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(document.querySelector("[class*='animate']")).toBeInTheDocument()
    })
  })

  it("shows fallback card on error", async () => {
    const user = userEvent.setup()
    mockResolver.mockRejectedValue(new Error("Network error"))

    render(<ExpenseEntityRef id="559" label="Expense #559" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Expense #559")).toBeInTheDocument()
    })
  })

  it("uses expense id as title when description is missing", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue({ id: "559" })

    render(<ExpenseEntityRef id="559" label="Expense #559" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Expense #559")).toBeInTheDocument()
    })
  })
})
