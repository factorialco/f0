import { afterEach, describe, expect, it } from "vitest"

import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

import { ExampleComponent } from "../__stories__/mockData"

afterEach(() => {
  window.history.replaceState(null, "", "/")
  localStorage.clear()
})

describe("URL sync without storage", () => {
  it("reflects filters in the URL with storage disabled (storage={false})", async () => {
    render(
      <ExampleComponent
        id="people/v1"
        storage={false}
        currentFilters={{ department: ["Engineering"] }}
      />
    )
    await waitFor(() =>
      expect(window.location.search).toContain("dc_department=Engineering")
    )
  })

  it("reflects filters with no storage prop at all", async () => {
    render(
      <ExampleComponent
        id="people/v1"
        currentFilters={{ department: ["Design"] }}
      />
    )
    await waitFor(() =>
      expect(window.location.search).toContain("dc_department=Design")
    )
  })
})

describe("URL sync without an id", () => {
  it("reflects filters in the URL even when the collection has no id", async () => {
    // No `id` prop — URL syncing is on by default regardless.
    render(
      <ExampleComponent currentFilters={{ department: ["Engineering"] }} />
    )

    await waitFor(
      () =>
        expect(window.location.search).toContain("dc_department=Engineering"),
      { timeout: 5000 }
    )
  })

  it("applies URL params on mount when the collection has no id", async () => {
    window.history.replaceState(null, "", "/people?dc_department=Design")

    render(<ExampleComponent />)

    // A filter chip rendered → the URL filter was applied to a collection
    // without an id, and the param survives (re-affirmed by the write).
    // Generous timeout: without an `id` the collection still hydrates from a
    // URL-derived storage key first, so the URL-driven filter (and its chip)
    // apply a tick later — under heavy CI load the default 1s can be too tight.
    await waitFor(
      () =>
        expect(
          screen.getByRole("button", { name: "Close" })
        ).toBeInTheDocument(),
      { timeout: 5000 }
    )
    await waitFor(() =>
      expect(window.location.search).toContain("dc_department=Design")
    )
  })
})
