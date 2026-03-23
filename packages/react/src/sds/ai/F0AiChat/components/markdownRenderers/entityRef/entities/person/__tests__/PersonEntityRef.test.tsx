import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import type { PersonProfile } from "../types"

const mockResolver = vi.fn<(id: string) => Promise<PersonProfile>>()
let mockEntityResolvers: { person?: typeof mockResolver } = {
  person: mockResolver,
}

vi.mock("../../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    entityResolvers: mockEntityResolvers,
  }),
}))

import { PersonEntityRef } from "../PersonEntityRef"

const profile: PersonProfile = {
  id: "42",
  firstName: "Ana",
  lastName: "García",
  avatarUrl: "https://example.com/avatar.jpg",
  jobTitle: "Engineer",
}

describe("PersonEntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEntityResolvers = { person: mockResolver }
  })

  it("renders the @mention trigger button", () => {
    render(<PersonEntityRef id="42" label="Ana García" />)
    expect(screen.getByRole("button")).toHaveTextContent("@Ana García")
  })

  it("renders label as plain text when no resolver is available", () => {
    mockEntityResolvers = {}

    const { container } = render(<PersonEntityRef id="42" label="Ana García" />)
    expect(container.querySelector("span")).toHaveTextContent("Ana García")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("shows hover card with profile data on hover", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<PersonEntityRef id="42" label="Ana García" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Ana García")).toBeInTheDocument()
      expect(screen.getByText("Engineer")).toBeInTheDocument()
    })
  })

  it("caches profile — resolver is called only once per id", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<PersonEntityRef id="42" label="Ana García" />)

    const trigger = screen.getByText("@Ana García")

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

    render(<PersonEntityRef id="42" label="Ana García" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(document.querySelector("[class*='animate']")).toBeInTheDocument()
    })
  })

  it("shows fallback card on error", async () => {
    const user = userEvent.setup()
    mockResolver.mockRejectedValue(new Error("Network error"))

    render(<PersonEntityRef id="42" label="Ana García" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Ana García")).toBeInTheDocument()
    })
  })
})
