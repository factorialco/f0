import { afterEach, describe, expect, it } from "vitest"

import {
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { ExampleComponent } from "../__stories__/mockData"

afterEach(() => {
  window.history.replaceState(null, "", "/")
  localStorage.clear()
})

describe("OneDataCollection URL sync — clearing a filter chip", () => {
  it("removes the param when clearing a chip for a filter set via props", async () => {
    render(
      <ExampleComponent
        id="people/v1"
        currentFilters={{ department: ["Engineering"] }}
      />
    )

    await waitFor(() =>
      expect(window.location.search).toContain("dc_department=Engineering")
    )

    const close = await screen.findByRole("button", { name: "Close" })
    await userEvent.click(close)

    await waitFor(() =>
      expect(window.location.search).not.toContain("dc_department")
    )
  })

  it("removes only the cleared filter's param when several are applied", async () => {
    render(
      <ExampleComponent
        id="people/v1"
        currentFilters={{
          department: ["Engineering"],
          salary: {
            mode: "range",
            from: { value: 1000, closed: true },
            to: { value: 5000, closed: true },
          },
        }}
      />
    )

    await waitFor(() => {
      expect(window.location.search).toContain("dc_department=Engineering")
      expect(window.location.search).toContain("dc_salary=1000..5000")
    })

    // Clear the *first* chip (department).
    const closeButtons = await screen.findAllByRole("button", { name: "Close" })
    await userEvent.click(closeButtons[0])

    await waitFor(() => {
      expect(window.location.search).not.toContain("dc_department")
      // The other filter survives.
      expect(window.location.search).toContain("dc_salary=1000..5000")
    })
  })

  it("removes the param when clearing a search-type filter chip", async () => {
    render(
      <ExampleComponent
        id="people/v1"
        currentFilters={{ searchStrict: "ann" }}
      />
    )

    await waitFor(() =>
      expect(window.location.search).toContain("dc_searchStrict=ann")
    )

    const close = await screen.findByRole("button", { name: "Close" })
    await userEvent.click(close)

    await waitFor(() =>
      expect(window.location.search).not.toContain("dc_searchStrict")
    )
  })

  it("clears the chip param with the story's exact storage/searchBar props", async () => {
    render(
      <ExampleComponent
        id="people/v1"
        storage={{ features: ["filters", "search", "sortings"] }}
        searchBar
        currentFilters={{ department: ["Engineering"] }}
      />
    )

    await waitFor(() =>
      expect(window.location.search).toContain("dc_department=Engineering")
    )

    const close = await screen.findByRole("button", { name: "Close" })
    await userEvent.click(close)

    await waitFor(() =>
      expect(window.location.search).not.toContain("dc_department")
    )
  })

  it("syncs and then clears the search bar value in the URL", async () => {
    render(<ExampleComponent id="people/v1" searchBar />)

    const toggle = await screen.findByRole("button", { name: /search/i })
    await userEvent.click(toggle)

    const input = await screen.findByPlaceholderText(/search/i)
    await userEvent.type(input, "ada")

    await waitFor(
      () => expect(window.location.search).toContain("dc_search=ada"),
      { timeout: 2000 }
    )

    await userEvent.clear(input)

    await waitFor(
      () => expect(window.location.search).not.toContain("dc_search"),
      { timeout: 2000 }
    )
  })

  it("removes the param when clearing a chip for a filter loaded from the URL", async () => {
    window.history.replaceState(
      null,
      "",
      "/people?dc_id=people/v1&dc_department=Engineering"
    )

    render(<ExampleComponent id="people/v1" />)

    // Chip rendered from the URL-loaded filter.
    const close = await screen.findByRole("button", { name: "Close" })
    expect(window.location.search).toContain("dc_department=Engineering")

    await userEvent.click(close)

    await waitFor(() =>
      expect(window.location.search).not.toContain("dc_department")
    )
  })
})
