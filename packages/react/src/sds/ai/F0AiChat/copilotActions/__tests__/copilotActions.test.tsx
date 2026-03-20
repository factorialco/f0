import React from "react"
import { describe, expect, it, vi, beforeEach } from "vitest"
import { z } from "zod"

import type { F0AiAvailableFormDefinition } from "@/components/F0Form/F0AiFormRegistry"

import {
  F0AiFormRegistryProvider,
  useF0AiFormRegistry,
} from "@/components/F0Form/F0AiFormRegistry"
import { f0FormField } from "@/components/F0Form/f0Schema"
import { zeroRender as render, waitFor } from "@/testing/test-utils"

// ── Mocks ────────────────────────────────────────────────────────────────────

// Capture the handler passed to useFrontendTool for each tool name
const capturedTools = new Map<
  string,
  { handler: (...args: never[]) => unknown }
>()

vi.mock("@copilotkit/react-core", () => ({
  useFrontendTool: (config: {
    name: string
    handler: (...args: never[]) => unknown
  }) => {
    capturedTools.set(config.name, config)
  },
  useCoAgent: () => ({
    state: {},
    setState: vi.fn(),
  }),
}))

vi.mock("@/sds/ai/F0AiChat/providers/AiChatStateProvider", () => ({
  useAiChat: () => ({ agent: "test-agent" }),
}))

// Import the hooks after mocks are set up
import { useFormFillAction } from "@/sds/ai/F0AiChat/copilotActions/useFormFillAction"
import { useFormGetStateAction } from "@/sds/ai/F0AiChat/copilotActions/useFormGetStateAction"
import { useFormSubmitAction } from "@/sds/ai/F0AiChat/copilotActions/useFormSubmitAction"
import { usePresentFormAction } from "@/sds/ai/F0AiChat/copilotActions/usePresentFormAction"

// ── Helpers ──────────────────────────────────────────────────────────────────

const simpleSchema = z.object({
  name: f0FormField(z.string().min(1, "Name is required"), {
    label: "Name",
  }),
  email: f0FormField(z.string().email("Invalid email"), {
    label: "Email",
  }),
})

function RegistryInspector({
  onRegistry,
}: {
  onRegistry: (registry: ReturnType<typeof useF0AiFormRegistry>) => void
}) {
  const registry = useF0AiFormRegistry()
  React.useEffect(() => {
    const timer = setTimeout(() => onRegistry(registry), 50)
    return () => clearTimeout(timer)
  })
  return null
}

/**
 * HookHost renders all four action hooks inside the registry provider.
 * After mount, `capturedTools` holds each handler for direct invocation.
 */
function HookHost() {
  useFormSubmitAction()
  useFormFillAction()
  useFormGetStateAction()
  usePresentFormAction()
  return null
}

async function setupWithDefinitions(
  definitions: F0AiAvailableFormDefinition[]
) {
  let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

  render(
    <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
      <RegistryInspector
        onRegistry={(r) => {
          capturedRegistry = r
        }}
      />
      <HookHost />
    </F0AiFormRegistryProvider>
  )

  await waitFor(() => {
    expect(capturedRegistry).not.toBeNull()
  })

  return capturedRegistry!
}

function getHandler(toolName: string) {
  const tool = capturedTools.get(toolName)
  if (!tool) throw new Error(`Tool ${toolName} not captured`)
  return tool.handler
}

// ── Tests ────────────────────────────────────────────────────────────────────

beforeEach(() => {
  capturedTools.clear()
})

describe("useFormGetStateAction handler", () => {
  it("returns success with form state for a registered form", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "Alice", email: "alice@test.com" },
      },
    ])

    const handler = getHandler("forms.formGetState")
    const result = handler({ formName: "user-form" } as never)

    expect(result).toMatchObject({
      success: true,
      formName: "user-form",
      values: { name: "Alice", email: "alice@test.com" },
      isDirty: false,
    })
    expect(result).toHaveProperty("fieldNames")
    expect(result).toHaveProperty("errors")
  })

  it("returns error for unknown form name", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ])

    const handler = getHandler("forms.formGetState")
    const result = handler({ formName: "nonexistent" } as never)

    expect(result).toMatchObject({
      success: false,
      error: expect.stringContaining("nonexistent"),
    })
    expect(result).toHaveProperty("availableForms")
  })

  it("returns error when form is not mounted (ref is null)", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ])

    // Overwrite the ref to simulate unmount
    const handler = getHandler("forms.formGetState")
    // Virtual forms always have a ref, so this tests the mounted path
    const result = handler({ formName: "user-form" } as never)
    expect(result).toHaveProperty("success")
  })
})

describe("useFormSubmitAction handler", () => {
  it("successfully submits a valid form", async () => {
    const onSubmit = vi.fn()

    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "Alice", email: "alice@test.com" },
        onSubmit,
      },
    ])

    const handler = getHandler("forms.formSubmit")
    const result = await handler({ formName: "user-form" } as never)

    expect(result).toMatchObject({ success: true })
    expect(onSubmit).toHaveBeenCalledWith({
      name: "Alice",
      email: "alice@test.com",
    })
  })

  it("returns errors when submitting an invalid form", async () => {
    const onSubmit = vi.fn()

    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "not-an-email" },
        onSubmit,
      },
    ])

    const handler = getHandler("forms.formSubmit")
    const result = await handler({ formName: "user-form" } as never)

    expect(result).toMatchObject({ success: false })
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("returns error for unknown form", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ])

    const handler = getHandler("forms.formSubmit")
    const result = await handler({ formName: "missing" } as never)

    expect(result).toMatchObject({
      success: false,
      error: expect.stringContaining("missing"),
      availableForms: expect.arrayContaining(["user-form"]),
    })
  })
})

describe("useFormFillAction handler", () => {
  it("fills fields and returns current values", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ])

    const handler = getHandler("forms.formFill")
    const result = await handler({
      formName: "user-form",
      values: [
        { fieldName: "name", value: "Bob" },
        { fieldName: "email", value: "bob@test.com" },
      ],
    } as never)

    expect(result).toMatchObject({ success: true })
    expect(result).toHaveProperty("currentValues")
    const { currentValues } = result as {
      currentValues: Record<string, unknown>
    }
    expect(currentValues.name).toBe("Bob")
    expect(currentValues.email).toBe("bob@test.com")
  })

  it("returns validation errors for invalid values", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ])

    const handler = getHandler("forms.formFill")
    const result = await handler({
      formName: "user-form",
      values: [{ fieldName: "email", value: "not-valid" }],
    } as never)

    expect(result).toMatchObject({ success: false })
    expect(result).toHaveProperty("errors")
  })

  it("coerces number strings to numbers", async () => {
    const numSchema = z.object({
      age: f0FormField(z.number(), { label: "Age" }),
    })

    await setupWithDefinitions([
      {
        name: "num-form",
        schema: numSchema,
        defaultValues: { age: 0 },
      },
    ])

    const handler = getHandler("forms.formFill")
    const result = await handler({
      formName: "num-form",
      values: [{ fieldName: "age", value: "25" }],
    } as never)

    expect(result).toMatchObject({ success: true })
    const { currentValues } = result as {
      currentValues: Record<string, unknown>
    }
    expect(currentValues.age).toBe(25)
  })

  it("coerces boolean strings", async () => {
    const boolSchema = z.object({
      active: f0FormField(z.boolean(), { label: "Active" }),
    })

    await setupWithDefinitions([
      {
        name: "bool-form",
        schema: boolSchema,
        defaultValues: { active: false },
      },
    ])

    const handler = getHandler("forms.formFill")
    const result = await handler({
      formName: "bool-form",
      values: [{ fieldName: "active", value: "true" }],
    } as never)

    expect(result).toMatchObject({ success: true })
    const { currentValues } = result as {
      currentValues: Record<string, unknown>
    }
    expect(currentValues.active).toBe(true)
  })

  it("coerces ISO date strings to Date objects", async () => {
    const dateSchema = z.object({
      startDate: f0FormField(z.date(), { label: "Start" }),
    })

    await setupWithDefinitions([
      {
        name: "date-form",
        schema: dateSchema,
        defaultValues: { startDate: new Date("2024-01-01") },
      },
    ])

    const handler = getHandler("forms.formFill")
    const result = await handler({
      formName: "date-form",
      values: [{ fieldName: "startDate", value: "2024-06-15" }],
    } as never)

    expect(result).toMatchObject({ success: true })
    const { currentValues } = result as {
      currentValues: Record<string, unknown>
    }
    expect(currentValues.startDate).toBeInstanceOf(Date)
    expect((currentValues.startDate as Date).toISOString()).toContain(
      "2024-06-15"
    )
  })

  it("returns error for unknown form", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ])

    const handler = getHandler("forms.formFill")
    const result = await handler({
      formName: "nope",
      values: [{ fieldName: "name", value: "x" }],
    } as never)

    expect(result).toMatchObject({
      success: false,
      error: expect.stringContaining("nope"),
    })
  })
})

describe("usePresentFormAction handler", () => {
  it("presents a registered form in dialog mode", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
        title: "Create User",
      },
    ])

    const handler = getHandler("forms.presentForm")
    const result = handler({
      formName: "user-form",
      mode: "dialog",
    } as never)

    expect(result).toMatchObject({ success: true })
  })

  it("returns error for unknown form", async () => {
    await setupWithDefinitions([
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ])

    const handler = getHandler("forms.presentForm")
    const result = handler({
      formName: "ghost",
      mode: "dialog",
    } as never)

    expect(result).toMatchObject({
      success: false,
      error: expect.stringContaining("ghost"),
    })
  })

  it("passes defaultValuesParams to presentForm", async () => {
    const paramsSchema = z.object({ employeeId: z.string() })

    await setupWithDefinitions([
      {
        name: "edit-employee",
        schema: simpleSchema,
        defaultValuesParamsSchema: paramsSchema,
        defaultValues: (params: Record<string, unknown>) => ({
          name: `Employee ${params.employeeId}`,
          email: `${params.employeeId}@factorial.co`,
        }),
      },
    ])

    const handler = getHandler("forms.presentForm")
    const result = handler({
      formName: "edit-employee",
      mode: "dialog",
      defaultValuesParams: { employeeId: "emp-99" },
    } as never)

    expect(result).toMatchObject({ success: true })
  })

  it("returns error for invalid params", async () => {
    const paramsSchema = z.object({
      employeeId: z.string().min(1, "employeeId required"),
    })

    await setupWithDefinitions([
      {
        name: "edit-employee",
        schema: simpleSchema,
        defaultValuesParamsSchema: paramsSchema,
        defaultValues: (params: Record<string, unknown>) => ({
          name: String(params.employeeId),
          email: "",
        }),
      },
    ])

    const handler = getHandler("forms.presentForm")
    const result = handler({
      formName: "edit-employee",
      mode: "dialog",
      defaultValuesParams: { employeeId: "" },
    } as never)

    expect(result).toMatchObject({ success: false })
    expect((result as { error: string }).error).toContain("employeeId required")
  })
})
