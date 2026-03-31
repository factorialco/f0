import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import type { JobPostingProfile } from "../types"

const mockResolver = vi.fn<(id: string) => Promise<JobPostingProfile>>()
let mockEntityResolvers: { jobPosting?: typeof mockResolver } = {
  jobPosting: mockResolver,
}

vi.mock("../../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    entityResolvers: mockEntityResolvers,
  }),
}))

import { JobPostingEntityRef } from "../JobPostingEntityRef"

const profile: JobPostingProfile = {
  id: "99",
  title: "Senior Engineer",
  status: "Open",
  location: "Barcelona",
}

describe("JobPostingEntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEntityResolvers = { jobPosting: mockResolver }
  })

  it("renders the trigger button without @ prefix", () => {
    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Senior Engineer")
    expect(button.textContent).not.toMatch(/^@/)
  })

  it("renders label as plain text when no resolver is available", () => {
    mockEntityResolvers = {}

    const { container } = render(
      <JobPostingEntityRef id="99" label="Senior Engineer" />
    )
    expect(container.querySelector("span")).toHaveTextContent("Senior Engineer")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("shows hover card with profile data on hover", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      // Title appears both in the trigger and the card heading
      expect(screen.getAllByText("Senior Engineer")).toHaveLength(2)
      expect(screen.getByText("Open · Barcelona")).toBeInTheDocument()
    })
  })

  it("caches profile — resolver is called only once per id", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    const trigger = screen.getByText("Senior Engineer")

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

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(document.querySelector("[class*='animate']")).toBeInTheDocument()
    })
  })

  it("shows fallback card on error", async () => {
    const user = userEvent.setup()
    mockResolver.mockRejectedValue(new Error("Network error"))

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Senior Engineer")).toBeInTheDocument()
    })
  })
})
