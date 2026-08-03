import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { fireEvent, zeroRender as render, screen } from "@/testing/test-utils"

import { Search } from "./Search"

const PAGE_SIZE = 25

const rows = (count: number, offset = 0) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${offset + index}`,
    title: `Person ${offset + index}`,
  }))

/**
 * Records the row each `scrollIntoView` call targeted — that is what decides
 * where the dropdown ends up scrolled.
 *
 * The global setup already stubs this on `HTMLElement.prototype`, so it MUST be
 * overridden there: a stub on `Element.prototype` sits further up the chain, is
 * shadowed, and silently records nothing.
 */
const scrolledTo: string[] = []

beforeEach(() => {
  scrolledTo.length = 0
  window.HTMLElement.prototype.scrollIntoView = vi.fn(function (this: Element) {
    scrolledTo.push(this.textContent ?? "")
  })
})

const searchProps = (results: ReturnType<typeof rows>, value: string) => ({
  value,
  onChange: vi.fn(),
  results,
  hasMore: true,
  onLoadMore: vi.fn(),
  onResultSelect: vi.fn(),
})

/** Opens the collapsed search and types a query, so the preview dropdown shows. */
const openPreview = async (results: ReturnType<typeof rows>) => {
  const user = userEvent.setup()
  const view = render(<Search {...searchProps(results, "")} />)

  await user.click(screen.getAllByRole("button", { name: /search/i })[0])
  await user.type(screen.getByRole("textbox"), "mar")

  // `value` is controlled by the parent, so re-render with it set — the dropdown
  // only shows while `value` is non-empty.
  view.rerender(<Search {...searchProps(results, "mar")} />)

  return { user, view }
}

const rowButtons = () => screen.getAllByRole("button", { name: /Person/ })

// `classList` matches exact tokens — a substring check would also hit the
// always-present `hover:bg-f1-background-secondary` on every row.
const highlightedRow = () =>
  rowButtons().findIndex((button) =>
    button.classList.contains("bg-f1-background-secondary")
  )

describe("Search preview pagination", () => {
  it("keeps the reading position when a further page is appended", async () => {
    const firstPage = rows(PAGE_SIZE)
    const { view } = await openPreview(firstPage)

    // Scrolling the dropdown drags rows under a stationary cursor, so the
    // pointer lands on a row near the bottom — that is what sets the active row.
    fireEvent.mouseOver(rowButtons()[PAGE_SIZE - 1])
    expect(highlightedRow()).toBe(PAGE_SIZE - 1)

    scrolledTo.length = 0
    view.rerender(
      <Search {...searchProps([...firstPage, ...rows(10, PAGE_SIZE)], "mar")} />
    )

    // The appended page must not move the highlight off the row being read...
    expect(highlightedRow()).toBe(PAGE_SIZE - 1)
    // ...because that scrolls the first row into view, yanking the reader back to
    // the top of the dropdown just as they reach the bottom.
    expect(scrolledTo).toEqual([])
  })

  it("highlights the first row when a new query replaces the results", async () => {
    const { view } = await openPreview(rows(PAGE_SIZE))

    fireEvent.mouseOver(rowButtons()[3])
    expect(highlightedRow()).toBe(3)

    // A different query replaces the rows outright — row 0 should lead again so
    // a plain Enter picks the top match.
    view.rerender(<Search {...searchProps(rows(5, 100), "marta")} />)

    expect(screen.getByText("Person 100")).toBeInTheDocument()
    expect(highlightedRow()).toBe(0)
  })
})
