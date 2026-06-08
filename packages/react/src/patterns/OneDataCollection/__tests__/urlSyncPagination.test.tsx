import { afterEach, describe, expect, it, vi } from "vitest"

import { waitFor, zeroRender as render } from "@/testing/test-utils"

import { PaginationExampleComponent } from "../__stories__/mockData"

afterEach(() => {
  window.history.replaceState(null, "", "/")
  localStorage.clear()
})

describe("OneDataCollection — pagination page persistence", () => {
  it("seeds the first fetch from currentPage and reports it back", async () => {
    const onPaginationChange = vi.fn()

    render(
      <PaginationExampleComponent
        id="people/v1"
        currentPage={3}
        onPaginationChange={onPaginationChange}
      />
    )

    await waitFor(() => {
      const last = onPaginationChange.mock.calls.at(-1)?.[0]
      expect(last?.type).toBe("pages")
      expect(last?.currentPage).toBe(3)
    })
  })

  it("defaults to page 1 when no currentPage is provided", async () => {
    const onPaginationChange = vi.fn()

    render(
      <PaginationExampleComponent
        id="people/v1"
        onPaginationChange={onPaginationChange}
      />
    )

    await waitFor(() => {
      const last = onPaginationChange.mock.calls.at(-1)?.[0]
      expect(last?.type).toBe("pages")
      expect(last?.currentPage).toBe(1)
    })
  })
})
