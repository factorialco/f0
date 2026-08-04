import { afterEach, beforeAll, expect, test, vi } from "vitest"

import { L10nProvider } from "@/lib/providers/l10n"
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
  vi.useRealTimers()
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

  const expandButton = await screen.findByRole("button", { name: "See more" })
  const title = screen.getByText("Post title")
  expect(expandButton).toHaveAccessibleDescription("Post title")
  expect(expandButton).toHaveAttribute("aria-describedby", title.id)

  await userEvent.click(expandButton)

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

test("resets expanded state when disabled, re-enabled, or reused for another post", async () => {
  mockDescriptionDimensions({ scrollHeight: 120, clientHeight: 100 })

  const { rerender } = render(
    <BaseCommunityPost {...defaultProps} descriptionExpandable />
  )

  const description = document.querySelector(".FactorialOneTextEditor")

  await userEvent.click(await screen.findByRole("button", { name: "See more" }))
  expect(description).not.toHaveClass("line-clamp-5")

  rerender(
    <BaseCommunityPost {...defaultProps} descriptionExpandable={false} />
  )

  expect(description).toHaveClass("line-clamp-5")
  expect(screen.queryByRole("button", { name: "See more" })).toBeNull()

  rerender(<BaseCommunityPost {...defaultProps} descriptionExpandable />)

  expect(description).toHaveClass("line-clamp-5")
  expect(screen.getByRole("button", { name: "See more" })).toBeInTheDocument()

  await userEvent.click(await screen.findByRole("button", { name: "See more" }))
  expect(description).not.toHaveClass("line-clamp-5")

  rerender(
    <BaseCommunityPost
      {...defaultProps}
      id="post-2"
      description="<p>Another long post description</p>"
      descriptionExpandable
    />
  )

  expect(description).toHaveClass("line-clamp-5")
  expect(screen.getByRole("button", { name: "See more" })).toBeInTheDocument()
})

const renderPublishedAt = (createdAt: string, locale?: string) => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date("2026-07-31T15:00:00Z"))

  const post = (
    <BaseCommunityPost {...defaultProps} createdAt={new Date(createdAt)} />
  )

  return render(
    locale ? <L10nProvider l10n={{ locale }}>{post}</L10nProvider> : post
  )
}

test("formats the published date in the locale provided by L10nProvider", () => {
  renderPublishedAt("2026-07-31T12:00:00Z", "de-DE")

  expect(screen.getByText("vor 3 Stunden")).toBeInTheDocument()
})

// The test wrapper already supplies `en-US`, so this covers the ambient-locale
// path rather than the no-provider default.
test("formats the published date in the ambient locale", () => {
  renderPublishedAt("2026-07-31T12:00:00Z")

  expect(screen.getByText("3 hours ago")).toBeInTheDocument()
})

// A locale date-fns does not ship must still render, not throw.
test("renders English for an unsupported locale", () => {
  renderPublishedAt("2026-07-31T12:00:00Z", "xyz")

  expect(screen.getByText("3 hours ago")).toBeInTheDocument()
})
