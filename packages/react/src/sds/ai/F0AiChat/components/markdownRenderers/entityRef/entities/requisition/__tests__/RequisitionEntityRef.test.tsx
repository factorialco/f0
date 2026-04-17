import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import type { RequisitionProfile } from "../types"

const mockResolver = vi.fn<(id: string) => Promise<RequisitionProfile>>()
let mockEntityRefs: {
  resolvers?: { requisition?: typeof mockResolver }
  urls?: { requisition?: (id: string) => string }
} = {
  resolvers: { requisition: mockResolver },
}

vi.mock("../../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    entityRefs: mockEntityRefs,
  }),
}))

import { RequisitionEntityRef } from "../RequisitionEntityRef"

const profile: RequisitionProfile = {
  id: "88",
  title: "Backend Engineer",
  status: "Approved",
  reason: "New Position",
}

describe("RequisitionEntityRef", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEntityRefs = { resolvers: { requisition: mockResolver } }
  })

  it("renders the trigger button without @ prefix", () => {
    render(<RequisitionEntityRef id="88" label="Backend Engineer" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Backend Engineer")
    expect(button.textContent).not.toMatch(/^@/)
  })

  it("renders label as plain text when no resolver is available", () => {
    mockEntityRefs = {}

    const { container } = render(
      <RequisitionEntityRef id="88" label="Backend Engineer" />
    )
    expect(container.querySelector("span")).toHaveTextContent(
      "Backend Engineer"
    )
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("shows hover card with profile data on hover", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<RequisitionEntityRef id="88" label="Backend Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getAllByText("Backend Engineer")).toHaveLength(2)
      expect(screen.getByText("Approved · New Position")).toBeInTheDocument()
    })
  })

  it("caches profile — resolver is called only once per id", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(profile)

    render(<RequisitionEntityRef id="88" label="Backend Engineer" />)

    const trigger = screen.getByText("Backend Engineer")

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

    render(<RequisitionEntityRef id="88" label="Backend Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(document.querySelector("[class*='animate']")).toBeInTheDocument()
    })
  })

  it("shows fallback card on error", async () => {
    const user = userEvent.setup()
    mockResolver.mockRejectedValue(new Error("Network error"))

    render(<RequisitionEntityRef id="88" label="Backend Engineer" />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Backend Engineer")).toBeInTheDocument()
    })
  })
})
