import { fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { Office as OfficeIcon } from "@/icons/app"
import { screen, zeroRender as render } from "@/testing/test-utils"

import { type ClockInLocation, LocationSelector } from "./LocationSelector"
import { flattenTree } from "./TreeSelector"
import { toLocationTree } from "./LocationSelector"

/** Three levels: type → city → work area, plus one type with nothing below it. */
const NESTED: ClockInLocation[] = [
  {
    id: "office",
    name: "Office",
    icon: OfficeIcon,
    sublocations: [
      {
        id: "bcn",
        name: "Barcelona",
        sublocations: [
          { id: "llucuna", name: "Llucuna A-3" },
          { id: "tanger", name: "Tànger 98" },
        ],
      },
    ],
  },
  { id: "trip", name: "Business trip", icon: OfficeIcon },
]

const openPicker = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("combobox", { name: "Select location" }))
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  // F0Select only fills its list once the popover's open animation starts.
  fireEvent.animationStart(screen.getByRole("listbox"))
}

describe("flattenTree", () => {
  it("keeps only leaves, and gives each one its ancestor chain", () => {
    const leaves = flattenTree(toLocationTree(NESTED))

    expect(leaves.map((leaf) => leaf.id)).toEqual(["llucuna", "tanger", "trip"])
    // Three levels: the two above the leaf head its group…
    expect(leaves[0].group).toBe("Office · Barcelona")
    // …and the trigger gets the whole path, leaf first.
    expect(leaves[0].path).toBe("Llucuna A-3 — Office · Barcelona")
  })

  it("lets a top-level leaf head its own group, having no ancestors", () => {
    const trip = flattenTree(toLocationTree(NESTED))[2]

    expect(trip.group).toBe("Business trip")
    expect(trip.path).toBe("Business trip")
  })

  it("inherits the nearest ancestor's icon, since deep levels rarely carry one", () => {
    const [llucuna] = flattenTree(toLocationTree(NESTED))

    // Set on `Office`, two levels up.
    expect(llucuna.icon).toBe(OfficeIcon)
  })

  it("searches on the leaf AND every ancestor", () => {
    const [llucuna] = flattenTree(toLocationTree(NESTED))

    expect(llucuna.haystack).toContain("barcelona")
    expect(llucuna.haystack).toContain("office")
    expect(llucuna.haystack).toContain("llucuna a-3")
  })
})

describe("LocationSelector", () => {
  // F0Select's list is VIRTUALIZED: with jsdom's zero-height boxes it decides
  // nothing is on screen and renders no options.
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", { value: 800 })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { value: 800 })
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => ({
        width: 120,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      })
    )
  })

  it("shows the selected leaf's whole path on the trigger", () => {
    render(
      <LocationSelector
        locations={NESTED}
        locationId="llucuna"
        onChangeLocationId={() => {}}
        label="Select location"
      />
    )

    expect(
      screen.getByText("Llucuna A-3 — Office · Barcelona")
    ).toBeInTheDocument()
  })

  it("groups work areas under the chain above them", async () => {
    const user = userEvent.setup()
    render(
      <LocationSelector
        locations={NESTED}
        onChangeLocationId={() => {}}
        label="Select location"
      />
    )

    await openPicker(user)

    await waitFor(() =>
      expect(screen.getByText("Office · Barcelona")).toBeInTheDocument()
    )
    // The rows stay short — the heading carries the context.
    expect(screen.getByText("Llucuna A-3")).toBeInTheDocument()
    expect(screen.getByText("Tànger 98")).toBeInTheDocument()
  })

  it("reports the selected leaf's id, not its parent's", async () => {
    const user = userEvent.setup()
    const onChangeLocationId = vi.fn()
    render(
      <LocationSelector
        locations={NESTED}
        onChangeLocationId={onChangeLocationId}
        label="Select location"
      />
    )

    await openPicker(user)
    await waitFor(() =>
      expect(screen.getByText("Tànger 98")).toBeInTheDocument()
    )
    await user.click(screen.getByText("Tànger 98"))

    expect(onChangeLocationId).toHaveBeenCalledWith(
      "tanger",
      expect.anything(),
      expect.anything()
    )
  })

  it("finds work areas by their city, which names none of them", async () => {
    const user = userEvent.setup()
    render(
      <LocationSelector
        locations={NESTED}
        onChangeLocationId={() => {}}
        label="Select location"
      />
    )

    await openPicker(user)
    // Twice: a top-level leaf heads its own group AND is the row under it.
    await waitFor(() =>
      expect(screen.getAllByText("Business trip")).toHaveLength(2)
    )

    // `fireEvent.change`, not `user.type`: the search box is controlled and
    // re-renders per keystroke, which drops characters here — "Barcelona" reached
    // the adapter as "brcelona", and the search then correctly found nothing.
    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "Barcelona" },
    })

    await waitFor(() =>
      expect(screen.queryAllByText("Business trip")).toHaveLength(0)
    )
    // The virtualized list re-measures on the refetched page, and jsdom needs the
    // open animation nudged again before it renders rows.
    fireEvent.animationStart(screen.getByRole("listbox"))

    await waitFor(() =>
      expect(screen.getByText("Llucuna A-3")).toBeInTheDocument()
    )
  })
})
