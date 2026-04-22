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
let mockEntityRefs: {
  resolvers?: { jobPosting?: typeof mockResolver }
  urls?: { jobPosting?: (id: string) => string }
} = {
  resolvers: { jobPosting: mockResolver },
}

vi.mock("../../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    entityRefs: mockEntityRefs,
  }),
}))

import { JobPostingEntityRef } from "../JobPostingEntityRef"

const profile: JobPostingProfile = {
  id: "99",
  title: "Senior Engineer",
  status: "Open",
  statusVariant: "positive",
  location: "Barcelona",
  publishedAt: "2024-01-15",
  vacanciesFilled: 1,
  vacanciesTotal: 3,
}

describe("JobPostingEntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEntityRefs = { resolvers: { jobPosting: mockResolver } }
  })

  it("renders the trigger button without @ prefix", () => {
    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Senior Engineer")
    expect(button.textContent).not.toMatch(/^@/)
  })

  it("renders label as plain text when no resolver is available", () => {
    mockEntityRefs = {}

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
      expect(screen.getByText("Open")).toBeInTheDocument()
    })
  })

  it("renders location as the card description and status with a label", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Barcelona")).toBeInTheDocument()
      expect(screen.getByText("Open")).toBeInTheDocument()
    })

    expect(screen.getByText("Status")).toBeInTheDocument()
    expect(screen.queryByText("Location")).not.toBeInTheDocument()
  })

  it("renders published and vacancies rows with labels", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Published")).toBeInTheDocument()
      // publishedAt is formatted via toLocaleDateString; assert the label only.
      expect(screen.getByText("Vacancies")).toBeInTheDocument()
      expect(screen.getByText("1/3")).toBeInTheDocument()
    })
  })

  it("applies the statusVariant to the rendered status tag", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    await user.hover(screen.getByRole("button"))

    const statusTag = await waitFor(() =>
      screen.getByText("Open").closest('[class*="bg-f1-background-positive"]')
    )
    expect(statusTag).toBeInTheDocument()
  })

  it("falls back to the neutral variant when statusVariant is missing", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue({
      id: "99",
      title: "Senior Engineer",
      status: "Pending",
    })

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    await user.hover(screen.getByRole("button"))

    const statusTag = await waitFor(() =>
      screen
        .getByText("Pending")
        .closest('[class*="bg-f1-background-secondary"]')
    )
    expect(statusTag).toBeInTheDocument()
  })

  it("omits rows when optional fields are missing", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue({
      id: "99",
      title: "Senior Engineer",
    })

    render(<JobPostingEntityRef id="99" label="Senior Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getAllByText("Senior Engineer")).toHaveLength(2)
    })

    expect(screen.queryByText("Status")).not.toBeInTheDocument()
    expect(screen.queryByText("Published")).not.toBeInTheDocument()
    expect(screen.queryByText("Vacancies")).not.toBeInTheDocument()
    expect(screen.queryByText("Barcelona")).not.toBeInTheDocument()
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
