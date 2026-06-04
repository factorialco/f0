import { afterEach, describe, expect, it } from "vitest"
import { waitFor, zeroRender as render } from "@/testing/test-utils"
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
