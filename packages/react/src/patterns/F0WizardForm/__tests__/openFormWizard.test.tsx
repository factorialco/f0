import React, { useState } from "react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { z } from "zod"
import "@testing-library/jest-dom/vitest"

import {
  FormOverlaysProvider,
  formOverlaysStore,
  unmountFormOverlay,
} from "@/lib/providers/form-overlays"
import { f0FormField } from "@/patterns/F0Form/f0Schema"
import {
  render,
  screen,
  TestProviders,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { forms } from "@/patterns/forms"

import { useF0FormDefinition } from "../useF0FormDefinition"

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TestProviders>
    <FormOverlaysProvider>{children}</FormOverlaysProvider>
  </TestProviders>
)

const schema = z.object({
  firstName: f0FormField.text({ label: "First name", section: "general" }),
  role: f0FormField.text({ label: "Role", section: "work" }),
})

function Harness() {
  const [result, setResult] = useState("")

  const formDefinition = useF0FormDefinition({
    name: "open-form-wizard-test",
    schema,
    defaultValues: { firstName: "", role: "" },
    sections: {
      general: { title: "General" },
      work: { title: "Work" },
    },
    submitConfig: { label: "Finish" },
    onSubmit: async ({ data }) => ({ success: true, value: data }),
  })

  const handleOpen = async () => {
    const r = await forms.open({
      formDefinition,
      mode: "wizard",
      title: "Onboarding",
      nextLabel: "Continue",
    })
    setResult(
      r.completed ? `done:${r.data.firstName}/${r.data.role}` : "dismissed"
    )
  }

  return (
    <>
      <button onClick={handleOpen}>open</button>
      <div data-testid="result">{result}</div>
    </>
  )
}

describe(`forms.open mode "wizard" (integration)`, () => {
  beforeEach(() => formOverlaysStore.clear())
  afterEach(() => formOverlaysStore.clear())

  it("resolves { completed: true, data } after the final step submits", async () => {
    const user = userEvent.setup()
    render(<Harness />, { wrapper: Wrapper })

    await user.click(screen.getByText("open"))

    // Step 1 (general)
    await user.type(await screen.findByLabelText("First name"), "Alice")
    await user.click(screen.getByRole("button", { name: "Continue" }))

    // Step 2 (work) — advancing past step 1 must NOT have completed the wizard.
    expect(screen.getByTestId("result")).toHaveTextContent("")
    await user.type(await screen.findByLabelText("Role"), "Engineer")
    await user.click(screen.getByRole("button", { name: "Finish" }))

    await waitFor(() =>
      expect(screen.getByTestId("result")).toHaveTextContent(
        "done:Alice/Engineer"
      )
    )
  })

  it("resolves { completed: false } when dismissed before finishing", async () => {
    const user = userEvent.setup()
    render(<Harness />, { wrapper: Wrapper })

    await user.click(screen.getByText("open"))
    await user.type(await screen.findByLabelText("First name"), "Alice")

    // Programmatic dismissal (e.g. navigation) before reaching the last step.
    await waitFor(() => expect(formOverlaysStore.getSnapshot()).toHaveLength(1))
    unmountFormOverlay(formOverlaysStore.getSnapshot()[0].id)

    await waitFor(() =>
      expect(screen.getByTestId("result")).toHaveTextContent("dismissed")
    )
  })
})
