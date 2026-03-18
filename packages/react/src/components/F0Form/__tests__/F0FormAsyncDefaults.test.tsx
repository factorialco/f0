import React from "react"
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { z } from "zod"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"
import { useF0FormDefinition } from "../../F0WizardForm/useF0FormDefinition"

// =============================================================================
// Test schemas
// =============================================================================

const singleSchema = z.object({
  name: f0FormField(z.string().min(1), { label: "Name" }),
  email: f0FormField(z.string().email(), { label: "Email" }),
})

const perSectionSchema = {
  personal: z.object({
    name: f0FormField(z.string().min(1), { label: "Name" }),
  }),
  contact: z.object({
    email: f0FormField(z.string().email(), { label: "Email" }),
  }),
}

// =============================================================================
// Wrapper components (hooks must be called inside a component)
// =============================================================================

function SingleSchemaForm({
  defaultValues,
}: {
  defaultValues:
    | Partial<z.infer<typeof singleSchema>>
    | ((signal: AbortSignal) => Promise<Partial<z.infer<typeof singleSchema>>>)
}) {
  const formDefinition = useF0FormDefinition({
    name: "async-test-single",
    schema: singleSchema,
    defaultValues,
    onSubmit: async () => ({ success: true }),
  })

  return <F0Form formDefinition={formDefinition} />
}

function PerSectionForm({
  defaultValues,
}: {
  defaultValues:
    | { personal?: Partial<{ name: string }>; contact?: Partial<{ email: string }> }
    | ((signal: AbortSignal) => Promise<{
        personal?: Partial<{ name: string }>
        contact?: Partial<{ email: string }>
      }>)
}) {
  const formDefinition = useF0FormDefinition({
    name: "async-test-per-section",
    schema: perSectionSchema,
    defaultValues,
    onSubmit: async () => ({ success: true }),
  })

  return <F0Form formDefinition={formDefinition} />
}

// =============================================================================
// Tests
// =============================================================================

describe("F0Form async defaultValues (single schema)", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("shows skeleton while async defaultValues are loading", () => {
    const asyncFn = () =>
      new Promise<Partial<z.infer<typeof singleSchema>>>((resolve) => {
        setTimeout(() => resolve({ name: "Alice", email: "a@b.com" }), 1000)
      })

    render(<SingleSchemaForm defaultValues={asyncFn} />)

    expect(screen.getByRole("generic", { busy: true })).toBeInTheDocument()
    expect(screen.queryByLabelText("Name")).not.toBeInTheDocument()
  })

  it("renders resolved values after async defaultValues resolve", async () => {
    const asyncFn = () =>
      Promise.resolve({ name: "Alice", email: "alice@test.com" })

    render(<SingleSchemaForm defaultValues={asyncFn} />)

    await waitFor(() => {
      expect(screen.getByLabelText("Name")).toBeInTheDocument()
    })

    expect(screen.getByLabelText("Name")).toHaveValue("Alice")
    expect(screen.getByLabelText("Email")).toHaveValue("alice@test.com")
  })

  it("falls back to empty form on async rejection", async () => {
    const consoleWarn = vi.spyOn(console, "warn").mockImplementation(() => {})

    const asyncFn = () => Promise.reject(new Error("fetch failed"))

    render(<SingleSchemaForm defaultValues={asyncFn} />)

    await waitFor(() => {
      expect(screen.getByLabelText("Name")).toBeInTheDocument()
    })

    // Falls back to undefined defaults — fields render empty
    expect(screen.getByLabelText("Name")).toHaveValue("")

    expect(consoleWarn).toHaveBeenCalledWith(
      "[useF0FormDefinition] Async defaultValues rejected:",
      expect.any(Error)
    )

    consoleWarn.mockRestore()
  })

  it("still works with synchronous defaultValues", () => {
    render(
      <SingleSchemaForm
        defaultValues={{ name: "Sync Bob", email: "bob@test.com" }}
      />
    )

    expect(screen.getByLabelText("Name")).toHaveValue("Sync Bob")
    expect(screen.getByLabelText("Email")).toHaveValue("bob@test.com")
  })
})

describe("F0Form async defaultValues (per-section)", () => {
  it("shows skeleton while async per-section defaultValues are loading", () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })

    const asyncFn = () =>
      new Promise<{ personal?: Partial<{ name: string }>; contact?: Partial<{ email: string }> }>(
        (resolve) => {
          setTimeout(
            () =>
              resolve({
                personal: { name: "Alice" },
                contact: { email: "a@b.com" },
              }),
            1000
          )
        }
      )

    render(<PerSectionForm defaultValues={asyncFn} />)

    expect(screen.getByRole("generic", { busy: true })).toBeInTheDocument()
    expect(screen.queryByLabelText("Name")).not.toBeInTheDocument()

    vi.useRealTimers()
  })

  it("renders resolved per-section values after async resolve", async () => {
    const asyncFn = () =>
      Promise.resolve({
        personal: { name: "Alice" },
        contact: { email: "alice@test.com" },
      })

    render(<PerSectionForm defaultValues={asyncFn} />)

    await waitFor(() => {
      expect(screen.getByLabelText("Name")).toBeInTheDocument()
    })

    expect(screen.getByLabelText("Name")).toHaveValue("Alice")
    expect(screen.getByLabelText("Email")).toHaveValue("alice@test.com")
  })
})
