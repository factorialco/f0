import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

import type { F0LocationInputValue, F0LocationSuggestion } from "../types"

import { F0LocationInput } from "../index"

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

const getAddress = () => screen.getByRole("combobox") as HTMLInputElement

const typeAndWaitForOptions = async (
  user: ReturnType<typeof userEvent.setup>,
  text = "Colon"
) => {
  await user.type(getAddress(), text)
  await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(2))
}

afterEach(() => {
  vi.clearAllMocks()
})

describe("F0LocationInput", () => {
  describe("simple mode", () => {
    it("renders a closed combobox with the label", () => {
      render(<F0LocationInput label="Address" searchPlaces={searchPlaces} />)

      const input = getAddress()
      expect(screen.getByText("Address")).toBeInTheDocument()
      expect(input).toHaveAttribute("aria-expanded", "false")
      expect(input).toHaveAttribute("aria-autocomplete", "list")
      expect(input).not.toHaveAttribute("aria-controls")
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("renders a plain text field without a search function", () => {
      render(<F0LocationInput label="Address" />)

      expect(screen.getByRole("textbox")).toBeInTheDocument()
      expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
    })

    it("does not search below two characters", async () => {
      const user = userEvent.setup()
      render(<F0LocationInput label="Address" searchPlaces={searchPlaces} />)

      await user.type(getAddress(), "C")
      await new Promise((resolve) => setTimeout(resolve, 400))

      expect(searchPlaces).not.toHaveBeenCalled()
    })

    it("debounces typing into one search and wires the listbox aria", async () => {
      const user = userEvent.setup()
      render(<F0LocationInput label="Address" searchPlaces={searchPlaces} />)

      await typeAndWaitForOptions(user)

      expect(searchPlaces).toHaveBeenCalledTimes(1)
      expect(searchPlaces).toHaveBeenCalledWith("Colon", { country: undefined })

      const input = getAddress()
      const listbox = screen.getByRole("listbox")
      expect(input).toHaveAttribute("aria-expanded", "true")
      expect(input).toHaveAttribute("aria-controls", listbox.id)
      expect(input).not.toHaveAttribute("aria-activedescendant")
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

      await typeAndWaitForOptions(user)

      expect(searchPlaces).toHaveBeenCalledWith("Colon", { country: "es" })
    })

    it("moves the active option with the arrow keys", async () => {
      const user = userEvent.setup()
      render(<F0LocationInput label="Address" searchPlaces={searchPlaces} />)

      await typeAndWaitForOptions(user)
      await user.keyboard("{ArrowDown}")

      const [first, second] = screen.getAllByRole("option")
      expect(getAddress()).toHaveAttribute("aria-activedescendant", first.id)
      expect(first).toHaveAttribute("aria-selected", "true")

      await user.keyboard("{ArrowDown}")
      expect(getAddress()).toHaveAttribute("aria-activedescendant", second.id)

      await user.keyboard("{ArrowUp}")
      expect(getAddress()).toHaveAttribute("aria-activedescendant", first.id)
    })

    it("picks with Enter, resolves the place and emits a resolved value", async () => {
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

      await typeAndWaitForOptions(user)
      await user.keyboard("{ArrowDown}{Enter}")

      expect(resolvePlace).toHaveBeenCalledWith("place-1")
      await waitFor(() =>
        expect(onChange).toHaveBeenLastCalledWith(resolved, {
          source: "picked",
          isResolved: true,
        })
      )
      expect(getAddress()).toHaveValue("Carrer de Colón 12")
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("does not emit the typed text while a pick is resolving", async () => {
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

      await typeAndWaitForOptions(user)
      onChange.mockClear()
      await user.click(screen.getAllByRole("option")[0])

      await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
      expect(onChange.mock.calls[0][1]).toEqual({
        source: "picked",
        isResolved: true,
      })
    })

    it("keeps focus in the input when an option is clicked", async () => {
      const user = userEvent.setup()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          resolvePlace={resolvePlace}
        />
      )

      await typeAndWaitForOptions(user)
      await user.click(screen.getAllByRole("option")[1])

      expect(getAddress()).toHaveFocus()
      await waitFor(() =>
        expect(getAddress()).toHaveValue("Carrer de Colón 12")
      )
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

      await typeAndWaitForOptions(user)
      await user.click(screen.getAllByRole("option")[1])

      expect(onChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ addressLine1: "Calle Colón 3" }),
        { source: "typed", isResolved: false }
      )
    })

    it("closes on Escape without letting the key reach the parent", async () => {
      const user = userEvent.setup()
      const onParentKeyDown = vi.fn()
      render(
        <div onKeyDown={onParentKeyDown}>
          <F0LocationInput label="Address" searchPlaces={searchPlaces} />
        </div>
      )

      await typeAndWaitForOptions(user)
      onParentKeyDown.mockClear()
      await user.keyboard("{Escape}")

      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
      expect(onParentKeyDown).not.toHaveBeenCalled()
      expect(getAddress()).toHaveValue("Colon")

      // Closed: Escape is the parent's again
      await user.keyboard("{Escape}")
      expect(onParentKeyDown).toHaveBeenCalledTimes(1)
    })

    it("closes on Tab without picking", async () => {
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

      await typeAndWaitForOptions(user)
      await user.keyboard("{ArrowDown}{Tab}")

      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
      expect(resolvePlace).not.toHaveBeenCalled()
      expect(onChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ addressLine1: "Colon" }),
        { source: "typed", isResolved: false }
      )
    })

    it("shows the empty state after a search with no results", async () => {
      const user = userEvent.setup()
      render(
        <F0LocationInput label="Address" searchPlaces={vi.fn(async () => [])} />
      )

      await user.type(getAddress(), "zzzz")

      await waitFor(() =>
        expect(screen.getByRole("status")).toHaveTextContent(
          "No addresses found"
        )
      )
    })

    it("emits undefined once every part is cleared", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <F0LocationInput
          label="Address"
          searchPlaces={searchPlaces}
          onChange={onChange}
        />
      )

      await user.type(getAddress(), "Co")
      await user.clear(getAddress())

      expect(onChange).toHaveBeenLastCalledWith(undefined, {
        source: "typed",
        isResolved: false,
      })
    })
  })

  describe("detailed mode", () => {
    it("renders country first, then the address and the parts", () => {
      const { container } = render(
        <F0LocationInput
          label="Office"
          fields={["country", "city", "state", "postalCode"]}
          searchPlaces={searchPlaces}
        />
      )

      const labels = Array.from(container.querySelectorAll("label")).map(
        (node) => node.textContent
      )
      expect(labels).toEqual([
        "Country",
        "Address",
        "City",
        "State / region",
        "Postal code",
      ])
      expect(screen.getByText("Office")).toBeInTheDocument()
      expect(
        screen.queryByRole("textbox", { name: "Address line 2" })
      ).not.toBeInTheDocument()
    })

    it("honours partLabels overrides", () => {
      render(
        <F0LocationInput
          label="Office"
          fields={["postalCode"]}
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
          fields={["country", "city", "state", "postalCode"]}
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

    it("shows the group message once, under the parts", () => {
      render(
        <F0LocationInput
          label="Office"
          fields={["city"]}
          error="Address is required"
        />
      )

      expect(screen.getAllByText("Address is required")).toHaveLength(1)
    })
  })
})
