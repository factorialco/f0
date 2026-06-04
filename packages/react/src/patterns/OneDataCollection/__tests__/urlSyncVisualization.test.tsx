import { afterEach, describe, expect, it } from "vitest"

import { waitFor, zeroRender as render } from "@/testing/test-utils"

import { ExampleComponent } from "../__stories__/mockData"

afterEach(() => {
  window.history.replaceState(null, "", "/")
  localStorage.clear()
})

describe("OneDataCollection URL sync — visualization", () => {
  it("keeps the visualization param (by type) from the URL on mount (wiring smoke)", async () => {
    // ExampleComponent renders [table, card, list, …], so dc_view=card → index 1.
    window.history.replaceState(null, "", "/people?dc_view=card")

    render(<ExampleComponent id="people/v1" />)

    // The view is applied and re-affirmed, so dc_view=card survives (it would be
    // dropped if visualization weren't wired into the URL sync).
    await waitFor(() =>
      expect(window.location.search).toContain("dc_view=card")
    )
  })
})
