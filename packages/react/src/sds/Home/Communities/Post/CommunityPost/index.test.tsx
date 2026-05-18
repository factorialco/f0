import { afterEach, beforeAll, expect, test, vi } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"
import { BaseCommunityPost, CommunityPostProps } from "./index"

const defaultProps: CommunityPostProps = {
  id: "post-1",
  author: {
    firstName: "Ada",
    lastName: "Lovelace",
  },
  group: {
    title: "Engineering",
    onClick: vi.fn(),
  },
  createdAt: new Date("2026-01-01T10:00:00Z"),
  title: "Post title",
  description: "<p>Long post description</p>",
  counters: {
    comments: "0",
  },
  inLabel: "in",
  comment: {
    label: "Comment",
    onClick: vi.fn(),
  },
  onClick: vi.fn(),
}

beforeAll(() => {
  global.ResizeObserver = class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as typeof ResizeObserver
})

afterEach(() => {
  vi.restoreAllMocks()
})

const mockDescriptionDimensions = ({
  scrollHeight,
  clientHeight,
}: {
  scrollHeight: number
  clientHeight: number
}) => {
  vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(
    scrollHeight
  )
  vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(
    clientHeight
  )
}

test("does not show description expansion controls by default", () => {
  render(<BaseCommunityPost {...defaultProps} />)

  expect(screen.queryByRole("button", { name: "See more" })).toBeNull()
})

test("expands the description when enabled", async () => {
  const onClick = vi.fn()
  mockDescriptionDimensions({ scrollHeight: 120, clientHeight: 100 })

  render(
    <BaseCommunityPost
      {...defaultProps}
      onClick={onClick}
      descriptionExpandable
    />
  )

  const description = document.querySelector(".FactorialOneTextEditor")
  expect(description).toHaveClass("line-clamp-5")

  await userEvent.click(await screen.findByRole("button", { name: "See more" }))

  expect(description).not.toHaveClass("line-clamp-5")
  expect(description).toHaveFocus()
  expect(screen.queryByRole("button", { name: "See more" })).toBeNull()
  expect(onClick).not.toHaveBeenCalled()
})

test("does not show description expansion controls when the description fits", () => {
  mockDescriptionDimensions({ scrollHeight: 100, clientHeight: 100 })

  render(<BaseCommunityPost {...defaultProps} descriptionExpandable />)

  expect(screen.queryByRole("button", { name: "See more" })).toBeNull()
})
