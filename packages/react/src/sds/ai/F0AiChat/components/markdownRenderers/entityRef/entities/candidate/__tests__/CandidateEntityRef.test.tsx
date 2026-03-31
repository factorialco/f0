import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import type { CandidateProfile } from "../types"

const mockResolver = vi.fn<(id: string) => Promise<CandidateProfile>>()
let mockEntityResolvers: { candidate?: typeof mockResolver } = {
  candidate: mockResolver,
}

vi.mock("../../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    entityResolvers: mockEntityResolvers,
  }),
}))

import { CandidateEntityRef } from "../CandidateEntityRef"

const profile: CandidateProfile = {
  id: "77",
  firstName: "Maria",
  lastName: "Lopez",
  avatarUrl: "https://example.com/avatar.jpg",
  source: "LinkedIn",
}

describe("CandidateEntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEntityResolvers = { candidate: mockResolver }
  })

  it("renders the trigger button without @ prefix", () => {
    render(<CandidateEntityRef id="77" label="Maria Lopez" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Maria Lopez")
    expect(button.textContent).not.toMatch(/^@/)
  })

  it("renders label as plain text when no resolver is available", () => {
    mockEntityResolvers = {}

    const { container } = render(
      <CandidateEntityRef id="77" label="Maria Lopez" />
    )
    expect(container.querySelector("span")).toHaveTextContent("Maria Lopez")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("shows hover card with profile data on hover", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<CandidateEntityRef id="77" label="Maria Lopez" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      // Title appears both in the trigger and the card heading
      expect(screen.getAllByText("Maria Lopez")).toHaveLength(2)
      expect(screen.getByText("LinkedIn")).toBeInTheDocument()
    })
  })

  it("caches profile — resolver is called only once per id", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<CandidateEntityRef id="77" label="Maria Lopez" />)

    const trigger = screen.getByText("Maria Lopez")

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

    render(<CandidateEntityRef id="77" label="Maria Lopez" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(document.querySelector("[class*='animate']")).toBeInTheDocument()
    })
  })

  it("shows fallback card on error", async () => {
    const user = userEvent.setup()
    mockResolver.mockRejectedValue(new Error("Network error"))

    render(<CandidateEntityRef id="77" label="Maria Lopez" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Maria Lopez")).toBeInTheDocument()
    })
  })
})
