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
let mockEntityRefs: {
  resolvers?: { person?: typeof mockResolver }
  urls?: {
    person?: (id: string) => string
  }
} = {
  resolvers: { person: mockResolver },
}

vi.mock("../../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    entityRefs: mockEntityRefs,
  }),
}))

import { PersonEntityRef } from "../PersonEntityRef"

const profile: PersonProfile = {
  id: "42",
  firstName: "Ana",
  lastName: "García",
  avatarUrl: "https://example.com/avatar.jpg",
  jobTitle: "Engineer",
  managerId: "99",
  managerFirstName: "Marta",
  managerLastName: "Ruiz",
}

describe("PersonEntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEntityRefs = { resolvers: { person: mockResolver } }
  })

  it("renders the @mention trigger button", () => {
    render(<PersonEntityRef id="42" label="Ana García" />)
    expect(screen.getByRole("button")).toHaveTextContent("@Ana García")
  })

  it("renders label as plain text when no resolver is available", () => {
    mockEntityRefs = {}

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

  it("renders manager details", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<PersonEntityRef id="42" label="Ana García" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Marta Ruiz")).toBeInTheDocument()
    })
  })

  it("renders manager as a link when person URL builder is provided", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)
    mockEntityRefs = {
      resolvers: { person: mockResolver },
      urls: {
        person: (pid) => `https://app.example.com/people/${pid}`,
      },
    }

    render(<PersonEntityRef id="42" label="Ana García" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Marta Ruiz")).toBeInTheDocument()
    })

    const managerLink = screen.getByText("Marta Ruiz").closest("a")
    expect(managerLink).toHaveAttribute(
      "href",
      "https://app.example.com/people/99"
    )
  })

  it("renders manager as plain text when URL builder is absent", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<PersonEntityRef id="42" label="Ana García" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Marta Ruiz")).toBeInTheDocument()
    })

    expect(screen.getByText("Marta Ruiz").closest("a")).toBeNull()
  })

  it("omits metadata rows when optional fields are absent", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue({
      id: "42",
      firstName: "Ana",
      lastName: "García",
      jobTitle: "Engineer",
    })

    render(<PersonEntityRef id="42" label="Ana García" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Engineer")).toBeInTheDocument()
    })

    expect(screen.queryByText("Marta Ruiz")).not.toBeInTheDocument()
  })
})
