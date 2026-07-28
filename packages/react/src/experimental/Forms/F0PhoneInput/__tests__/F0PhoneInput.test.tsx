import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  screen,
  waitFor,
  within,
  zeroRender as render,
} from "@/testing/test-utils"

import { F0PhoneInput } from "../index"

const getInput = () => screen.getByRole("textbox") as HTMLInputElement
const getCountryTrigger = () => screen.getByRole("combobox")

const openCountrySelect = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(getCountryTrigger())
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  // Kick the virtualized list — jsdom never fires CSS animation events
  fireEvent.animationStart(screen.getByRole("listbox"))
}

const originalOffsetHeight = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  "offsetHeight"
)
const originalOffsetWidth = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  "offsetWidth"
)

describe("F0PhoneInput", () => {
  beforeEach(() => {
    // Give the virtualized country list a real-sized viewport in jsdom
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
  })

  it("renders the label and a tel input", () => {
    render(<F0PhoneInput label="Phone" defaultCountry="es" />)

    expect(screen.getByText("Phone")).toBeInTheDocument()
    expect(getInput()).toHaveAttribute("type", "tel")
  })

  it("shows the dial code in the trigger and a national example placeholder", () => {
    render(<F0PhoneInput label="Phone" defaultCountry="es" />)

    expect(screen.getByText("+34")).toBeInTheDocument()
    expect(getInput().placeholder).not.toBe("")
    expect(getInput().placeholder).not.toMatch(/^\+/)
  })

  it("emits the structured pair while typing a national number", async () => {
    const onChange = vi.fn()
    render(
      <F0PhoneInput label="Phone" defaultCountry="es" onChange={onChange} />
    )

    await userEvent.type(getInput(), "674897945")

    expect(onChange).toHaveBeenLastCalledWith(
      { prefix: "+34", number: "674897945" },
      {
        country: "es",
        e164: "+34674897945",
        isValid: true,
        isPossible: true,
      }
    )
  })

  it("formats the national number as you type", async () => {
    render(<F0PhoneInput label="Phone" defaultCountry="es" />)

    await userEvent.type(getInput(), "674897945")

    expect(getInput().value).toBe("674 89 79 45")
  })

  it("auto-selects the country when typing a full international number", async () => {
    const onChange = vi.fn()
    const onCountryChange = vi.fn()
    render(
      <F0PhoneInput
        label="Phone"
        defaultCountry="es"
        onChange={onChange}
        onCountryChange={onCountryChange}
      />
    )

    await userEvent.type(getInput(), "+447400123456")

    expect(onCountryChange).toHaveBeenLastCalledWith("gb")
    expect(onChange).toHaveBeenLastCalledWith(
      { prefix: "+44", number: "7400123456" },
      expect.objectContaining({ country: "gb", e164: "+447400123456" })
    )
  })

  it("shows a globe and no dial code when no country is selected", () => {
    render(<F0PhoneInput label="Phone" />)

    const trigger = getCountryTrigger()
    expect(trigger.querySelector("svg")).toBeInTheDocument()
    expect(within(trigger).queryByText(/^\+\d/)).not.toBeInTheDocument()
  })

  it("shows an international example placeholder when no country is selected", () => {
    render(<F0PhoneInput label="Phone" />)

    expect(getInput().placeholder).toMatch(/^\+\d/)
  })

  it("derives the country-less placeholder from the first pinned country", () => {
    render(<F0PhoneInput label="Phone" pinnedCountries={["gb", "us"]} />)

    expect(getInput().placeholder).toMatch(/^\+44 /)
  })

  it("auto-detects the country when typing digits without a plus and no country is selected", async () => {
    const onChange = vi.fn()
    const onCountryChange = vi.fn()
    render(
      <F0PhoneInput
        label="Phone"
        onChange={onChange}
        onCountryChange={onCountryChange}
      />
    )

    await userEvent.type(getInput(), "34674897945")

    expect(onCountryChange).toHaveBeenLastCalledWith("es")
    expect(onChange).toHaveBeenLastCalledWith(
      { prefix: "+34", number: "674897945" },
      expect.objectContaining({ country: "es", e164: "+34674897945" })
    )
    expect(within(getCountryTrigger()).getByText("+34")).toBeInTheDocument()
  })

  it("emits undefined while only a dial code is typed", async () => {
    const onChange = vi.fn()
    render(<F0PhoneInput label="Phone" onChange={onChange} />)

    await userEvent.type(getInput(), "34")

    expect(onChange).toHaveBeenLastCalledWith(
      undefined,
      expect.objectContaining({ country: "es" })
    )
  })

  it("warns and ignores an allowlist with no valid country codes", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    render(
      <F0PhoneInput
        label="Phone"
        defaultCountry="es"
        allowedCountries={["xx" as never]}
      />
    )

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("allowedCountries"),
      ["xx"]
    )
  })

  it("prefills from a structured value", () => {
    render(
      <F0PhoneInput
        label="Phone"
        value={{ prefix: "+34", number: "674897945" }}
      />
    )

    expect(screen.getByText("+34")).toBeInTheDocument()
    expect(getInput().value).toBe("674 89 79 45")
  })

  it("prefills from a legacy value holding a full international number", () => {
    render(
      <F0PhoneInput
        label="Phone"
        value={{ prefix: undefined, number: "+447400123456" }}
      />
    )

    expect(screen.getByText("+44")).toBeInTheDocument()
    expect(getInput().value).toBe("07400 123456")
  })

  it("changes the country from the selector and keeps the number", async () => {
    const user = userEvent.setup()
    const onCountryChange = vi.fn()
    render(
      <F0PhoneInput
        label="Phone"
        defaultCountry="es"
        onCountryChange={onCountryChange}
      />
    )

    await openCountrySelect(user)

    await user.type(screen.getByRole("searchbox"), "Germany")
    await user.click(await screen.findByRole("option", { name: /Germany/ }))

    await waitFor(() => expect(onCountryChange).toHaveBeenCalledWith("de"))
    await waitFor(() =>
      expect(within(getCountryTrigger()).getByText("+49")).toBeInTheDocument()
    )
  })

  it("searches countries by dial code", async () => {
    const user = userEvent.setup()
    render(<F0PhoneInput label="Phone" defaultCountry="es" />)

    await openCountrySelect(user)

    await user.type(screen.getByRole("searchbox"), "+49")

    expect(
      await screen.findByRole("option", { name: /Germany/ })
    ).toBeInTheDocument()
  })

  it("lists pinned countries first", async () => {
    const user = userEvent.setup()
    render(
      <F0PhoneInput
        label="Phone"
        defaultCountry="es"
        pinnedCountries={["es", "gb", "us"]}
      />
    )

    await openCountrySelect(user)

    const options = await screen.findAllByRole("option")
    expect(options[0]).toHaveTextContent("Spain")
    expect(options[1]).toHaveTextContent("United Kingdom")
    expect(options[2]).toHaveTextContent("United States")
  })

  it("restricts countries to the allowlist", async () => {
    const user = userEvent.setup()
    render(
      <F0PhoneInput
        label="Phone"
        defaultCountry="es"
        allowedCountries={["es", "pt"]}
      />
    )

    await openCountrySelect(user)

    expect(await screen.findAllByRole("option")).toHaveLength(2)
  })

  it("clears the value from the clear button", async () => {
    const onChange = vi.fn()
    render(
      <F0PhoneInput
        label="Phone"
        clearable
        defaultValue={{ prefix: "+34", number: "674897945" }}
        onChange={onChange}
      />
    )

    await userEvent.click(screen.getByTestId("clear-button"))

    expect(onChange).toHaveBeenCalledWith(
      undefined,
      expect.objectContaining({ e164: undefined, isValid: false })
    )
    expect(getInput().value).toBe("")
  })

  it("disables the input and the country selector", () => {
    render(<F0PhoneInput label="Phone" defaultCountry="es" disabled />)

    expect(getInput()).toBeDisabled()
    expect(getCountryTrigger()).toHaveAttribute("data-disabled")
  })

  it("shows the error message and marks the input invalid", () => {
    render(
      <F0PhoneInput
        label="Phone"
        defaultCountry="es"
        error="Invalid phone number"
      />
    )

    expect(screen.getByText("Invalid phone number")).toBeInTheDocument()
    expect(getInput()).toHaveAttribute("aria-invalid", "true")
  })
})
