import userEvent from "@testing-library/user-event"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"
import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"
import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"

const suggestions = [
  { id: "es-1", label: "Carrer de Colón, 12", description: "Barcelona, Spain" },
]

const resolvedPlace = {
  formatted: "Carrer de Colón, 12, 08002 Barcelona, Spain",
  addressLine1: "Carrer de Colón, 12",
  city: "Barcelona",
  country: "es" as const,
  placeId: "es-1",
  latitude: 41.3809,
  longitude: 2.1785,
}

const renderForm = (
  schema: z.ZodObject<{ address: z.ZodTypeAny }>,
  onSubmit = vi.fn(async () => ({ success: true as const }))
) => {
  render(
    <F0Form
      name="location-field"
      schema={schema}
      defaultValues={{ address: undefined }}
      onSubmit={onSubmit}
    />
  )
  return onSubmit
}

describe("F0Form location field", () => {
  it("renders the searchable address as one field", async () => {
    renderForm(
      z.object({
        address: f0FormField.location({
          label: "Office address",
          searchPlaces: async () => suggestions,
          resolvePlace: async () => resolvedPlace,
        }),
      })
    )

    await waitFor(() =>
      expect(
        screen.getByRole("combobox", { name: "Office address" })
      ).toBeInTheDocument()
    )
    // The parts belong to manual entry only
    expect(
      screen.queryByRole("textbox", { name: "City" })
    ).not.toBeInTheDocument()
  })

  it("renders every part when manualEntry is set", async () => {
    renderForm(
      z.object({
        address: f0FormField.location({
          label: "Office address",
          manualEntry: true,
        }),
      })
    )

    await waitFor(() =>
      expect(
        screen.getByRole("combobox", { name: "Country" })
      ).toBeInTheDocument()
    )
    expect(
      screen.getByRole("textbox", { name: "Address line 1" })
    ).toBeInTheDocument()
    expect(screen.getByRole("textbox", { name: "City" })).toBeInTheDocument()
    expect(
      screen.getByRole("textbox", { name: "Postal code" })
    ).toBeInTheDocument()
  })

  it("submits the structured address the user typed", async () => {
    const user = userEvent.setup()
    const onSubmit = renderForm(
      z.object({
        address: f0FormField.location({
          label: "Office address",
          manualEntry: true,
        }),
      })
    )

    await user.type(
      screen.getByRole("textbox", { name: "Address line 1" }),
      "Carrer de Colón, 12"
    )
    await user.type(screen.getByRole("textbox", { name: "City" }), "Barcelona")
    await user.click(screen.getByText("Submit"))

    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit.mock.lastCall?.[0]).toMatchObject({
      address: { addressLine1: "Carrer de Colón, 12", city: "Barcelona" },
    })
  })

  it("blocks submitting an empty required address", async () => {
    const onSubmit = renderForm(
      z.object({ address: f0FormField.location({ label: "Office address" }) })
    )

    const user = userEvent.setup()
    await user.click(screen.getByText("Submit"))

    await waitFor(() =>
      expect(
        screen.getByText(defaultTranslations.forms.validation.location.empty)
      ).toBeInTheDocument()
    )
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
