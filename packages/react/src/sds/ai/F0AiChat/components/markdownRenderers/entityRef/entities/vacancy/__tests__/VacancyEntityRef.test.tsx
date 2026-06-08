import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import type { VacancyProfile } from "../types"

const mockResolver = vi.fn<(id: string) => Promise<VacancyProfile>>()
let mockEntityRefs: {
  resolvers?: { vacancy?: typeof mockResolver }
  urls?: { vacancy?: (id: string) => string }
} = {
  resolvers: { vacancy: mockResolver },
}

vi.mock("../../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    entityRefs: mockEntityRefs,
  }),
}))

import { VacancyEntityRef } from "../VacancyEntityRef"

const profile: VacancyProfile = {
  id: "55",
  name: "Senior Frontend Engineer",
  status: "In Progress",
  vacancyType: "New Position",
}

describe("VacancyEntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEntityRefs = { resolvers: { vacancy: mockResolver } }
  })

  it("renders the trigger button without @ prefix", () => {
    render(<VacancyEntityRef id="55" label="Senior Frontend Engineer" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Senior Frontend Engineer")
    expect(button.textContent).not.toMatch(/^@/)
  })

  it("renders label as plain text when no resolver is available", () => {
    mockEntityRefs = {}

    const { container } = render(
      <VacancyEntityRef id="55" label="Senior Frontend Engineer" />
    )
    expect(container.querySelector("span")).toHaveTextContent(
      "Senior Frontend Engineer"
    )
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("shows hover card with profile data on hover", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<VacancyEntityRef id="55" label="Senior Frontend Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getAllByText("Senior Frontend Engineer")).toHaveLength(2)
      expect(screen.getByText("In Progress · New Position")).toBeInTheDocument()
    })
  })

  it("caches profile — resolver is called only once per id", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<VacancyEntityRef id="55" label="Senior Frontend Engineer" />)

    const trigger = screen.getByText("Senior Frontend Engineer")

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

    render(<VacancyEntityRef id="55" label="Senior Frontend Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(document.querySelector("[class*='animate']")).toBeInTheDocument()
    })
  })

  it("shows fallback card on error", async () => {
    const user = userEvent.setup()
    mockResolver.mockRejectedValue(new Error("Network error"))

    render(<VacancyEntityRef id="55" label="Senior Frontend Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Senior Frontend Engineer")).toBeInTheDocument()
    })
  })
})
