import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0Dialog } from "@/patterns/F0Dialog"

import type {
  F0LocationInputValue,
  F0LocationSearchContext,
  F0LocationSuggestion,
} from "../index"

import { F0LocationInput } from "../index"
import { locationInputSizes } from "../types"

type MockPlace = F0LocationSuggestion & { value: F0LocationInputValue }

/** A tiny in-memory "Places" provider so the stories work without any API key */
const places: MockPlace[] = [
  {
    id: "es-1",
    label: "Carrer de Colón, 12",
    description: "Barcelona, Spain",
    value: {
      formatted: "Carrer de Colón, 12, 08002 Barcelona, Spain",
      addressLine1: "Carrer de Colón, 12",
      city: "Barcelona",
      state: "Catalonia",
      postalCode: "08002",
      country: "es",
      placeId: "es-1",
      latitude: 41.3809,
      longitude: 2.1785,
      timezone: "Europe/Madrid",
    },
  },
  {
    id: "es-2",
    label: "Calle de Colón, 3",
    description: "Valencia, Spain",
    value: {
      formatted: "Calle de Colón, 3, 46004 Valencia, Spain",
      addressLine1: "Calle de Colón, 3",
      city: "Valencia",
      state: "Valencian Community",
      postalCode: "46004",
      country: "es",
      placeId: "es-2",
      latitude: 39.4699,
      longitude: -0.3763,
      timezone: "Europe/Madrid",
    },
  },
  {
    id: "fr-1",
    label: "12 Rue de Colombes",
    description: "Paris, France",
    value: {
      formatted: "12 Rue de Colombes, 75017 Paris, France",
      addressLine1: "12 Rue de Colombes",
      city: "Paris",
      state: "Île-de-France",
      postalCode: "75017",
      country: "fr",
      placeId: "fr-1",
      latitude: 48.8891,
      longitude: 2.3097,
      timezone: "Europe/Paris",
    },
  },
  {
    id: "us-1",
    label: "1 Columbus Circle",
    description: "New York, United States",
    value: {
      formatted: "1 Columbus Circle, New York, NY 10023, United States",
      addressLine1: "1 Columbus Circle",
      city: "New York",
      state: "New York",
      postalCode: "10023",
      country: "us",
      placeId: "us-1",
      latitude: 40.7681,
      longitude: -73.9819,
      timezone: "America/New_York",
    },
  },
  {
    id: "de-1",
    label: "Kolonnenstraße 8",
    description: "Berlin, Germany",
    value: {
      formatted: "Kolonnenstraße 8, 10827 Berlin, Germany",
      addressLine1: "Kolonnenstraße 8",
      city: "Berlin",
      state: "Berlin",
      postalCode: "10827",
      country: "de",
      placeId: "de-1",
      latitude: 52.4838,
      longitude: 13.3573,
      timezone: "Europe/Berlin",
    },
  },
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()

const mockSearchPlaces = async (
  query: string,
  { country }: F0LocationSearchContext
): Promise<F0LocationSuggestion[]> => {
  await sleep(300)
  const needle = normalize(query)
  return places
    .filter((place) => !country || place.value.country === country)
    .filter((place) =>
      normalize(`${place.label} ${place.description ?? ""}`).includes(needle)
    )
    .map(({ id, label, description }) => ({ id, label, description }))
}

const mockResolvePlace = async (id: string) => {
  await sleep(200)
  return places.find((place) => place.id === id)?.value
}

const meta = {
  title: "Inputs/Location input",
  component: F0LocationInput,
  tags: ["experimental", "!autodocs"],
  parameters: {
    a11y: {
      test: "error",
    },
  },
  args: {
    label: "Address",
    searchPlaces: mockSearchPlaces,
    resolvePlace: mockResolvePlace,
    disabled: false,
    onChange: fn(),
  },
  argTypes: {
    size: {
      control: "select",
      options: locationInputSizes,
      table: {
        type: { summary: locationInputSizes.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    manualEntry: { control: "boolean" },
    value: { control: "object" },
    defaultValue: { control: "object" },
    status: { control: "object" },
    searchPlaces: { control: false },
    resolvePlace: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0LocationInput>

export default meta
type Story = StoryObj<typeof meta>

/** Simple mode: one field, type "Colon" to see suggestions across countries. */
export const Default: Story = {}

/**
 * Manual entry: country first, then every part typed by hand, address line 1
 * included. Editing a part that moves the pin drops the coordinates of a value
 * that arrived resolved, because they no longer describe what it says.
 */
export const ManualEntry: Story = {
  args: {
    label: "Office address",
    manualEntry: true,
  },
}

/** `countries` restricts the selector and, when it has one entry, scopes the search. */
export const RestrictedCountries: Story = {
  args: {
    label: "Spanish office",
    manualEntry: true,
    countries: ["es"],
    defaultValue: { country: "es" },
  },
}

/** Without `searchPlaces` the address field is a plain text input. */
export const WithoutAutocomplete: Story = {
  args: {
    label: "Postal address",
    searchPlaces: undefined,
    resolvePlace: undefined,
  },
}

export const Prefilled: Story = {
  args: {
    label: "Office address",
    manualEntry: true,
    defaultValue: places[0].value,
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<F0LocationInputValue | undefined>()
    const [resolved, setResolved] = useState(false)
    return (
      <div className="flex flex-col gap-4">
        <F0LocationInput
          {...args}
          value={value}
          onChange={(next, meta) => {
            setValue(next)
            setResolved(meta.isResolved)
            args.onChange?.(next, meta)
          }}
        />
        <pre className="overflow-auto rounded bg-f1-background-secondary p-3 text-sm text-f1-foreground-secondary">
          {JSON.stringify({ isResolved: resolved, value }, null, 2)}
        </pre>
      </div>
    )
  },
  args: {
    label: "Office address",
    manualEntry: true,
    clearable: true,
  },
}

const DialogExample = (args: Story["args"]) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <F0Button label="Add workplace" onClick={() => setOpen(true)} />
      <F0Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="New workplace"
        description="The suggestion list stays inside the dialog, so picking one never closes it."
        primaryAction={{ label: "Create", onClick: () => setOpen(false) }}
      >
        <F0LocationInput {...args} label="Address" />
      </F0Dialog>
    </>
  )
}

/** The listbox portals into the surrounding dialog; picking does not dismiss it. */
export const InsideDialog: Story = {
  render: (args) => <DialogExample {...args} />,
  args: {
    manualEntry: true,
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <F0LocationInput {...args} label="Medium (default)" size="md" />
      <F0LocationInput {...args} label="Small" size="sm" />
    </div>
  ),
}

/**
 * Every state, in both shapes: the address field alone and the manual entry
 * block. The status message sits under the field in the first and under the
 * group in the second.
 */
/**
 * Every state, first for the address field on its own and then for manual
 * entry. The status message sits under the field in the first and under the
 * group in the second.
 */
export const States: Story = {
  render: (args) => {
    const states: [string, Partial<typeof args>][] = [
      ["Default", {}],
      ["Prefilled", { defaultValue: places[0].value }],
      ["Disabled", { disabled: true }],
      ["Read only", { readonly: true, defaultValue: places[0].value }],
      ["With hint", { hint: "Used to place the office on the map" }],
      [
        "With info",
        {
          status: {
            type: "info",
            message: "The address is used for geofencing",
          },
        },
      ],
      [
        "With warning",
        {
          status: {
            type: "warning",
            message: "This address is outside the country you selected",
          },
        },
      ],
      ["With error", { error: "Enter the office address" }],
    ]

    return (
      <div className="flex max-w-md flex-col gap-10">
        {states.map(([label, props]) => (
          <F0LocationInput key={label} {...args} {...props} label={label} />
        ))}
        {states.map(([label, props]) => (
          <F0LocationInput
            key={`manual-${label}`}
            {...args}
            {...props}
            label={label}
            manualEntry
          />
        ))}
      </div>
    )
  },
}

/**
 * Search and pick through the select: open it, type in its search box, choose
 * the first suggestion, and check the resolved value reaches `onChange`.
 */
export const SearchAndPick: Story = {
  args: { onChange: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(canvas.getByRole("combobox", { name: "Address" }))
    const search = await body.findByRole("searchbox")
    await userEvent.type(search, "Colon")

    await waitFor(() =>
      expect(body.getAllByRole("option").length).toBeGreaterThan(0)
    )
    await userEvent.click(body.getAllByRole("option")[0])

    await waitFor(() =>
      expect(args.onChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ placeId: "es-1", city: "Barcelona" }),
        { source: "picked", isResolved: true }
      )
    )
  },
}

/**
 * A stored address that no suggestion covers still reads on the trigger: the
 * value it came from is what gets displayed, not a matching option.
 */
export const UnlistedAddress: Story = {
  args: {
    label: "Office address",
    manualEntry: true,
    defaultValue: { addressLine1: "Camino de la Vega s/n", country: "es" },
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex flex-col gap-6">
      <F0LocationInput {...args} label="Address" />
      <F0LocationInput
        {...args}
        label="Address, prefilled"
        defaultValue={places[0].value}
      />
      <F0LocationInput
        {...args}
        label="Manual entry"
        manualEntry
        defaultValue={places[0].value}
      />
      <F0LocationInput
        {...args}
        label="Manual entry, small, with error"
        size="sm"
        manualEntry
        error="Enter the office address"
      />
      <F0LocationInput
        {...args}
        label="With warning"
        status={{ type: "warning", message: "Check the postal code" }}
      />
      <F0LocationInput {...args} label="Disabled" disabled />
    </div>
  ),
}
