import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import {
  fireEvent,
  screen,
  waitFor,
  within,
  zeroRender as render,
} from "@/testing/test-utils"
import { F0LocationInput } from ".."
import type { F0LocationInputValue, F0LocationSuggestion } from "../types"

const suggestions: F0LocationSuggestion[] = [
  { id: "place-1", label: "Carrer de Colón 12", description: "Barcelona" },
  { id: "place-2", label: "Calle Colón 3", description: "Valencia" },
]

const resolved: F0LocationInputValue = {
  formatted: "Carrer de Colón 12, 08001 Barcelona, Spain",
  addressLine1: "Carrer de Colón 12",
  city: "Barcelona",
  postalCode: "08001",
  state: "Catalonia",
  country: "es",
  placeId: "place-1",
  latitude: 41.38,
  longitude: 2.17,
  timezone: "Europe/Madrid",
}

const searchPlaces = vi.fn(async () => suggestions)
const resolvePlace = vi.fn(async () => resolved)

const originalOffsetHeight = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  "offsetHeight"
)
const originalOffsetWidth = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  "offsetWidth"
)

const getAddressTrigger = () =>
  screen.getByRole("combobox", { name: "Address" })

/** The dropdown's own text, as opposed to the live region that echoes it */
const listText = (text: string) =>
  within(screen.getByRole("listbox")).getByText(text)

/** Opens the address select and kicks the list, which jsdom never animates */
const openAddress = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(getAddressTrigger())
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  fireEvent.animationStart(screen.getByRole("listbox"))
}

const searchAddress = async (
  user: ReturnType<typeof userEvent.setup>,
  query = "Colon"
) => {
  await openAddress(user)
  await user.type(screen.getByRole("searchbox"), query)
}

describe("F0LocationInput", () => {
  beforeEach(() => {
    // Give the virtualized option list a real-sized viewport in jsdom
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      value: 800,
      configurable: true,
    })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      value: 800,
      configurable: true,
    })
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => ({
        width: 320,
        height: 320,
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

  afterEach(() => {
    if (originalOffsetHeight) {
      Object.defineProperty(
        HTMLElement.prototype,
        "offsetHeight",
        originalOffsetHeight
      )
    }
    if (originalOffsetWidth) {
      Object.defineProperty(
        HTMLElement.prototype,
        "offsetWidth",
        originalOffsetWidth
      )
    }
    vi.restoreAllMocks()
    vi.clearAllMocks()
  })

  describe("simple mode", () => {
    it("renders the address as a select when a provider is given", () => {
      render(<F0LocationInput label="Address" searchPlaces={searchPlaces} />)

      expect(screen.getByText("Address")).toBeInTheDocument()
      expect(getAddressTrigger()).toBeInTheDocument()
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("renders a plain text field without a provider", () => {
      render(<F0LocationInput label="Address" />)

      expect(screen.getByRole("textbox")).toBeInTheDocument()
      expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
    })

    it("does not search below two characters", async () => {
      const user = userEvent.setup()
      render(<F0LocationInput label="Address" searchPlaces={searchPlaces} />)

      await searchAddress(user, "C")
      await new Promise((resolve) => setTimeout(resolve, 400))

      expect(searchPlaces).not.toHaveBeenCalled()
    })

    it("debounces typing into one search and lists what the provider returned", async () => {
      const user = userEvent.setup()
      render(<F0LocationInput label="Address" searchPlaces={searchPlaces} />)

      await searchAddress(user)

      await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
      expect(searchPlaces).toHaveBeenCalledTimes(1)
      expect(searchPlaces).toHaveBeenCalledWith("Colon", { country: undefined })
      // No local filtering: the accent-insensitive match is the provider's job
      expect(screen.getByText("Calle Colón 3, Valencia")).toBeInTheDocument()
      // Label and description read as one line, not two
      expect(screen.queryByText("Valencia")).not.toBeInTheDocument()
    })

    it("scopes the search to a single allowed country", async () => {
      const user = userEvent.setup()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          countries={["es"]}
        />
      )

      await searchAddress(user)

      await waitFor(() =>
        expect(searchPlaces).toHaveBeenCalledWith("Colon", { country: "es" })
      )
    })

    it("resolves the picked suggestion and emits a resolved value", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          resolvePlace={resolvePlace}
          onChange={onChange}
        />
      )

      await searchAddress(user)
      await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
      await user.click(screen.getAllByRole("option")[0])

      expect(resolvePlace).toHaveBeenCalledWith("place-1")
      await waitFor(() =>
        expect(onChange).toHaveBeenLastCalledWith(resolved, {
          source: "picked",
          isResolved: true,
        })
      )
    })

    it("emits nothing until the pick resolves", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          resolvePlace={resolvePlace}
          onChange={onChange}
        />
      )

      await searchAddress(user)
      await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
      onChange.mockClear()
      await user.click(screen.getAllByRole("option")[0])

      await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
      expect(onChange.mock.calls[0][1]).toEqual({
        source: "picked",
        isResolved: true,
      })
    })

    it("falls back to the suggestion label without a resolver", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          onChange={onChange}
        />
      )

      await searchAddress(user)
      await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
      await user.click(screen.getAllByRole("option")[1])

      expect(onChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ addressLine1: "Calle Colón 3" }),
        { source: "typed", isResolved: false }
      )
    })

    it("offers no way to invent an address that is not a suggestion", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={vi.fn(async () => [])}
          onChange={onChange}
        />
      )

      await searchAddress(user, "Calle Falsa 123")

      await waitFor(() =>
        expect(listText("No addresses found")).toBeInTheDocument()
      )
      expect(
        screen.queryByRole("button", { name: /Create/ })
      ).not.toBeInTheDocument()
      expect(onChange).not.toHaveBeenCalled()
    })

    it("shows what the empty list means at each stage", async () => {
      const user = userEvent.setup()
      render(
        <F0LocationInput label="Address" searchPlaces={vi.fn(async () => [])} />
      )

      await openAddress(user)
      expect(listText("Type an address to search")).toBeInTheDocument()

      await user.type(screen.getByRole("searchbox"), "zzzz")
      await waitFor(() =>
        expect(listText("No addresses found")).toBeInTheDocument()
      )
    })

    it("does not scope the search to the country of the current value", async () => {
      const user = userEvent.setup()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          defaultValue={resolved}
        />
      )

      await searchAddress(user, "Downing")

      // No country selector shows or undoes the scope here, so the first
      // picked address must not lock every later search to its country
      await waitFor(() =>
        expect(searchPlaces).toHaveBeenCalledWith("Downing", {
          country: undefined,
        })
      )
    })

    it("keeps a resolved place that has no granular parts", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      const poi: F0LocationInputValue = {
        formatted: "Sagrada Família, Barcelona",
        placeId: "poi-1",
        latitude: 41.4036,
        longitude: 2.1744,
      }
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          resolvePlace={vi.fn(async () => poi)}
          onChange={onChange}
        />
      )

      await searchAddress(user)
      await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
      await user.click(screen.getAllByRole("option")[0])

      await waitFor(() =>
        expect(onChange).toHaveBeenLastCalledWith(poi, {
          source: "picked",
          isResolved: true,
        })
      )
      // The trigger is aria-hidden until the dropdown has finished closing
      await waitFor(() =>
        expect(getAddressTrigger()).toHaveTextContent(
          "Sagrada Família, Barcelona"
        )
      )
    })

    it("emits nothing for a pick that resolves after unmount", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      let finish!: (value: F0LocationInputValue) => void
      const lateResolve = vi.fn(
        () =>
          new Promise<F0LocationInputValue>((resolve) => {
            finish = resolve
          })
      )
      const { unmount } = render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          resolvePlace={lateResolve}
          onChange={onChange}
        />
      )

      await searchAddress(user)
      await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
      await user.click(screen.getAllByRole("option")[0])
      expect(lateResolve).toHaveBeenCalled()

      unmount()
      finish(resolved)
      await new Promise((resolve) => setTimeout(resolve, 0))

      expect(onChange).not.toHaveBeenCalled()
    })

    it("recovers from a resolver that throws synchronously", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      vi.spyOn(console, "warn").mockImplementation(() => {})
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          resolvePlace={vi.fn(() => {
            throw new Error("google.maps is not loaded")
          })}
          onChange={onChange}
        />
      )

      await searchAddress(user)
      await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
      await user.click(screen.getAllByRole("option")[0])

      await waitFor(() =>
        expect(onChange).toHaveBeenLastCalledWith(
          expect.objectContaining({ addressLine1: "Carrer de Colón 12" }),
          { source: "typed", isResolved: false }
        )
      )
    })

    it("starts a fresh search each time the list opens", async () => {
      const user = userEvent.setup()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          resolvePlace={resolvePlace}
        />
      )

      await searchAddress(user)
      await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
      await user.click(screen.getAllByRole("option")[0])
      await waitFor(() =>
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
      )

      await openAddress(user)

      expect(listText("Type an address to search")).toBeInTheDocument()
      expect(
        screen.queryByText("Calle Colón 3, Valencia")
      ).not.toBeInTheDocument()
    })

    it("tells a failed search apart from an empty one", async () => {
      const user = userEvent.setup()
      vi.spyOn(console, "warn").mockImplementation(() => {})
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={vi.fn(async () => {
            throw new Error("offline")
          })}
        />
      )

      await searchAddress(user)

      await waitFor(() =>
        expect(
          listText("Couldn't load addresses. Try again.")
        ).toBeInTheDocument()
      )
      expect(screen.queryByText("No addresses found")).not.toBeInTheDocument()
    })

    it("announces the search progress to assistive tech", async () => {
      const user = userEvent.setup()
      let answer!: (value: F0LocationSuggestion[]) => void
      const slowSearch = vi.fn(
        () =>
          new Promise<F0LocationSuggestion[]>((resolve) => {
            answer = resolve
          })
      )
      render(<F0LocationInput label="Address" searchPlaces={slowSearch} />)
      const live = screen.getByRole("status")
      expect(live).toHaveAttribute("aria-live", "polite")

      await searchAddress(user)

      await waitFor(() => expect(live).toHaveTextContent("Searching addresses"))
      await waitFor(() => expect(slowSearch).toHaveBeenCalled())
      answer(suggestions)
      await waitFor(() => expect(live).toHaveTextContent("2 addresses found"))
    })

    it("displays a value the options do not contain", () => {
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          defaultValue={{ addressLine1: "Calle Falsa 123" }}
        />
      )

      expect(getAddressTrigger()).toHaveTextContent("Calle Falsa 123")
    })
  })

  describe("manual entry", () => {
    it("renders every part as a typed field, in order, with no group title", () => {
      const { container } = render(
        <F0LocationInput
          label="Office"
          manualEntry
          searchPlaces={searchPlaces}
        />
      )

      const labels = Array.from(container.querySelectorAll("label")).map(
        (node) => node.textContent
      )
      expect(labels).toEqual([
        "Country",
        "Address line 1",
        "Address line 2",
        "City",
        "Region",
        "Postal code",
      ])
      expect(screen.getByRole("group", { name: "Office" })).toBeInTheDocument()
      expect(screen.queryByText("Office")).not.toBeInTheDocument()
      // Manual entry means manual: no suggestion list to open
      expect(
        screen.getByRole("textbox", { name: "Address line 1" })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole("combobox", { name: "Address line 1" })
      ).not.toBeInTheDocument()
    })

    it("honours partLabels overrides", () => {
      render(
        <F0LocationInput
          label="Office"
          manualEntry
          partLabels={{ addressLine1: "Street", postalCode: "ZIP code" }}
        />
      )

      expect(
        screen.getByRole("textbox", { name: "Street" })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("textbox", { name: "ZIP code" })
      ).toBeInTheDocument()
    })

    it("invalidates the picked place when a part is edited", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Office"
          manualEntry
          defaultValue={resolved}
          onChange={onChange}
        />
      )

      await user.type(screen.getByRole("textbox", { name: "City" }), "!")

      const [value, meta] = onChange.mock.lastCall as [
        F0LocationInputValue,
        unknown,
      ]
      expect(meta).toEqual({ source: "typed", isResolved: false })
      expect(value.city).toBe("Barcelona!")
      expect(value.country).toBe("es")
      expect(value.placeId).toBeUndefined()
      expect(value.latitude).toBeUndefined()
      expect(value.longitude).toBeUndefined()
      expect(value.timezone).toBeUndefined()
      expect(value.formatted).toBe(
        "Carrer de Colón 12, 08001 Barcelona!, Catalonia, Spain"
      )
    })

    it("keeps the picked place when only address line 2 is edited", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Office"
          manualEntry
          defaultValue={resolved}
          onChange={onChange}
        />
      )

      await user.type(
        screen.getByRole("textbox", { name: "Address line 2" }),
        "Floor 3"
      )

      const [value, meta] = onChange.mock.lastCall as [
        F0LocationInputValue,
        unknown,
      ]
      // A floor number does not move the building, so the geofence survives
      expect(meta).toEqual({ source: "typed", isResolved: true })
      expect(value.addressLine2).toBe("Floor 3")
      expect(value.placeId).toBe("place-1")
      expect(value.latitude).toBe(41.38)
      expect(value.longitude).toBe(2.17)
      expect(value.timezone).toBe("Europe/Madrid")
    })

    it("emits undefined once every part is cleared", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Office"
          manualEntry
          defaultValue={{ city: "Barcelona" }}
          onChange={onChange}
        />
      )

      await user.clear(screen.getByRole("textbox", { name: "City" }))

      expect(onChange).toHaveBeenLastCalledWith(undefined, {
        source: "typed",
        isResolved: false,
      })
    })

    it("shows the group message once, under the parts", () => {
      render(
        <F0LocationInput
          label="Office"
          manualEntry
          error="Address is required"
        />
      )

      expect(screen.getAllByText("Address is required")).toHaveLength(1)
    })

    it("links the error to the group and announces it", () => {
      render(
        <F0LocationInput
          label="Office"
          manualEntry
          error="Address is required"
        />
      )

      const group = screen.getByRole("group", { name: "Office" })
      expect(group).toHaveAttribute("aria-invalid", "true")
      const messages = document.getElementById(
        group.getAttribute("aria-describedby") as string
      )
      expect(messages).toHaveAttribute("role", "alert")
      expect(messages).toHaveTextContent("Address is required")
    })

    it("clears the address when the country changes", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Office"
          manualEntry
          countries={["es", "fr"]}
          defaultValue={resolved}
          onChange={onChange}
        />
      )

      await user.click(screen.getByRole("combobox", { name: "Country" }))
      await waitFor(() =>
        expect(screen.getByRole("listbox")).toBeInTheDocument()
      )
      fireEvent.animationStart(screen.getByRole("listbox"))
      await user.click(await screen.findByRole("option", { name: "France" }))

      // A new country moves the pin further than any street edit: the parts
      // described a place in the old one, so they go with the coordinates
      expect(onChange).toHaveBeenLastCalledWith(
        { country: "fr", formatted: "France" },
        { source: "typed", isResolved: false }
      )
      await waitFor(() =>
        expect(screen.getByRole("textbox", { name: "City" })).toHaveValue("")
      )
    })
  })
})
