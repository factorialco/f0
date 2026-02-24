import { describe, expect, it, vi } from "vitest"

import { PaginationInfo } from "@/hooks/datasource"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { PagesPagination } from "../PagesPagination"

vi.mock("@/ui/OnePagination", () => ({
  OnePagination: ({
    totalPages,
    currentPage,
  }: {
    totalPages: number
    currentPage: number
  }) => (
    <nav data-testid="pagination" data-total-pages={totalPages}>
      Page {currentPage} of {totalPages}
    </nav>
  ),
}))

const makePagesPaginationInfo = (
  overrides: Partial<Omit<PaginationInfo, "type">> = {}
): PaginationInfo => ({
  type: "pages" as const,
  total: 50,
  perPage: 10,
  currentPage: 1,
  pagesCount: 5,
  ...overrides,
})

describe("PagesPagination", () => {
  const setPage = vi.fn()

  it("renders pagination when there are multiple pages", () => {
    render(
      <PagesPagination
        paginationInfo={makePagesPaginationInfo()}
        setPage={setPage}
      />
    )

    expect(screen.getByTestId("pagination")).toBeInTheDocument()
    expect(screen.getByText(/1-10/)).toBeInTheDocument()
    expect(screen.getByText(/50/)).toBeInTheDocument()
  })

  it("does not render when pagesCount is 1", () => {
    const { container } = render(
      <PagesPagination
        paginationInfo={makePagesPaginationInfo({
          total: 5,
          perPage: 10,
          pagesCount: 1,
        })}
        setPage={setPage}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it("does not render when paginationInfo is null", () => {
    const { container } = render(
      <PagesPagination paginationInfo={null} setPage={setPage} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it("does not render when pagination type is infinite-scroll", () => {
    const infiniteScrollInfo: PaginationInfo = {
      type: "infinite-scroll",
      total: 50,
      perPage: 10,
      cursor: null,
      hasMore: true,
    }

    const { container } = render(
      <PagesPagination paginationInfo={infiniteScrollInfo} setPage={setPage} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it("shows correct range text for middle pages", () => {
    render(
      <PagesPagination
        paginationInfo={makePagesPaginationInfo({ currentPage: 3 })}
        setPage={setPage}
      />
    )

    expect(screen.getByText(/21-30/)).toBeInTheDocument()
  })

  it("clamps the range end to total on the last page", () => {
    render(
      <PagesPagination
        paginationInfo={makePagesPaginationInfo({
          currentPage: 5,
          total: 47,
          pagesCount: 5,
        })}
        setPage={setPage}
      />
    )

    expect(screen.getByText(/41-47/)).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <PagesPagination
        paginationInfo={makePagesPaginationInfo()}
        setPage={setPage}
        className="pb-4"
      />
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain("pb-4")
  })
})
