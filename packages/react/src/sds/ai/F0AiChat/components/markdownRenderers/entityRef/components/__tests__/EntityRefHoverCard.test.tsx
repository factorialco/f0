import { forwardRef } from "react"
import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { EntityRefHoverCard } from "../EntityRefHoverCard"

type TestEntity = {
  id: string
  name: string
  role: string
}

const testEntity: TestEntity = {
  id: "42",
  name: "Test Entity",
  role: "Tester",
}

const mockResolver = vi.fn<(id: string) => Promise<TestEntity>>()

const TestTrigger = forwardRef<HTMLButtonElement>((props, ref) => (
  <button ref={ref} type="button" {...props}>
    @Test
  </button>
))

const defaultProps = {
  id: "42",
  trigger: <TestTrigger />,
  resolver: mockResolver,
  mapToCard: (data: TestEntity) => ({
    title: data.name,
    description: data.role,
  }),
  fallbackCard: {
    title: "Fallback",
  },
}

describe("EntityRefHoverCard", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the trigger", () => {
    render(<EntityRefHoverCard {...defaultProps} />)
    expect(screen.getByRole("button")).toHaveTextContent("@Test")
  })

  it("shows hover card with resolved data on hover", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(testEntity)

    render(<EntityRefHoverCard {...defaultProps} />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Test Entity")).toBeInTheDocument()
      expect(screen.getByText("Tester")).toBeInTheDocument()
    })
  })

  it("shows skeleton while loading", async () => {
    const user = userEvent.setup()
    mockResolver.mockReturnValue(new Promise(() => {}))

    render(<EntityRefHoverCard {...defaultProps} />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(document.querySelector("[class*='animate']")).toBeInTheDocument()
    })
  })

  it("shows fallback card on error", async () => {
    const user = userEvent.setup()
    mockResolver.mockRejectedValue(new Error("fail"))

    render(<EntityRefHoverCard {...defaultProps} />)

    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Fallback")).toBeInTheDocument()
    })
  })

  it("caches resolved data — resolver called only once per id", async () => {
    const user = userEvent.setup()
    mockResolver.mockResolvedValue(testEntity)

    render(<EntityRefHoverCard {...defaultProps} />)

    const trigger = screen.getByRole("button")

    await user.hover(trigger)
    await waitFor(() => {
      expect(mockResolver).toHaveBeenCalledTimes(1)
    })

    await user.unhover(trigger)
    await user.hover(trigger)

    expect(mockResolver).toHaveBeenCalledTimes(1)
  })
})
