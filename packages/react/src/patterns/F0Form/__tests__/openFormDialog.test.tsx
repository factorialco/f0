import React, { useState } from "react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { z } from "zod"
import "@testing-library/jest-dom/vitest"

import {
  FormOverlaysProvider,
  formOverlaysStore,
} from "@/lib/providers/form-overlays"
import {
  render,
  screen,
  TestProviders,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { useF0FormDefinition } from "@/patterns/F0WizardForm"

import { forms } from "@/patterns/forms"

import { f0FormField } from "../f0Schema"

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TestProviders>
    <FormOverlaysProvider>{children}</FormOverlaysProvider>
  </TestProviders>
)

function Harness() {
  const [result, setResult] = useState("")

  const formDefinition = useF0FormDefinition({
    name: "open-form-dialog-test",
    schema: z.object({
      name: f0FormField.text({ label: "Name", minLength: 2 }),
    }),
    defaultValues: { name: "" },
    onSubmit: async ({ data }) => ({ success: true, value: data }),
  })

  const handleOpen = async () => {
    const r = await forms.open({
      formDefinition,
      mode: "dialog",
      title: "Add member",
    })
    setResult(r.submitted ? `ok:${r.data.name}` : "cancelled")
  }

  return (
    <>
      <button onClick={handleOpen}>open</button>
      <div data-testid="result">{result}</div>
    </>
  )
}

describe('forms.open mode "dialog" (integration)', () => {
  beforeEach(() => formOverlaysStore.clear())
  afterEach(() => formOverlaysStore.clear())

  it("resolves { submitted: false } when cancelled", async () => {
    const user = userEvent.setup()
    render(<Harness />, { wrapper: Wrapper })

    await user.click(screen.getByText("open"))
    await user.click(await screen.findByRole("button", { name: "Cancel" }))

    await waitFor(() =>
      expect(screen.getByTestId("result")).toHaveTextContent("cancelled")
    )
  })

  it("resolves { submitted: true, data } after a successful submit", async () => {
    const user = userEvent.setup()
    render(<Harness />, { wrapper: Wrapper })

    await user.click(screen.getByText("open"))

    const input = await screen.findByLabelText("Name")
    await user.type(input, "Alice")
    await user.click(screen.getByRole("button", { name: "Save" }))

    await waitFor(() =>
      expect(screen.getByTestId("result")).toHaveTextContent("ok:Alice")
    )
  })

  it("keeps the dialog open when validation fails", async () => {
    const user = userEvent.setup()
    render(<Harness />, { wrapper: Wrapper })

    await user.click(screen.getByText("open"))
    // Submit with the required field empty.
    await user.click(await screen.findByRole("button", { name: "Save" }))

    // Dialog is still on screen; result not resolved.
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument()
    )
    expect(screen.getByTestId("result")).toHaveTextContent("")
  })
})
