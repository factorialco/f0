import React from "react"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import { zeroRender as render, waitFor, act } from "@/testing/test-utils"

import type { F0AiAvailableFormDefinition } from "../F0AiFormRegistry"

import {
  F0AiFormRegistryProvider,
  useF0AiFormRegistry,
} from "../F0AiFormRegistry"

function RegistryInspector({
  onRegistry,
}: {
  onRegistry: (registry: ReturnType<typeof useF0AiFormRegistry>) => void
}) {
  const registry = useF0AiFormRegistry()
  React.useEffect(() => {
    // Defer to run after queueMicrotask in rebuildDescriptions
    const timer = setTimeout(() => onRegistry(registry), 50)
    return () => clearTimeout(timer)
  })
  return null
}

const simpleSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
})

describe("F0AiFormRegistryProvider availableFormDefinitions", () => {
  it("registers virtual forms from availableFormDefinitions", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry).not.toBeNull()
      expect(capturedRegistry!.getFormNames()).toContain("user-form")
    })

    const entry = capturedRegistry!.get("user-form")
    expect(entry).toBeDefined()
    expect(entry!.virtual).toBe(true)
  })

  it("virtual form ref supports getValues with default values", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "John", email: "john@example.com" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("user-form")!.ref.current!
    expect(ref.getValues()).toEqual({
      name: "John",
      email: "john@example.com",
    })
  })

  it("virtual form ref supports setValue and setValues", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("user-form")!.ref.current!

    ref.setValue("name", "Alice")
    expect(ref.getValues().name).toBe("Alice")

    ref.setValues({ name: "Bob", email: "bob@test.com" })
    expect(ref.getValues()).toEqual({ name: "Bob", email: "bob@test.com" })
  })

  it("virtual form ref tracks dirty state", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("user-form")!.ref.current!

    expect(ref.isDirty()).toBe(false)
    ref.setValue("name", "changed")
    expect(ref.isDirty()).toBe(true)
    ref.reset()
    expect(ref.isDirty()).toBe(false)
  })

  it("virtual form ref validates and returns errors", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "not-an-email" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("user-form")!.ref.current!

    const errors = ref.getErrors()
    expect(errors.name).toBe("Name is required")
    expect(errors.email).toBe("Invalid email")

    const valid = await ref.trigger()
    expect(valid).toBe(false)

    ref.setValues({ name: "Alice", email: "alice@test.com" })
    expect(ref.getErrors()).toEqual({})
    expect(await ref.trigger()).toBe(true)
  })

  it("virtual form ref submit calls onSubmit when valid", async () => {
    const onSubmit = vi.fn()

    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "Alice", email: "alice@test.com" },
        onSubmit,
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("user-form")!.ref.current!

    await ref.submit()
    expect(onSubmit).toHaveBeenCalledWith({
      name: "Alice",
      email: "alice@test.com",
    })
  })

  it("virtual form ref submit throws on invalid data", async () => {
    const onSubmit = vi.fn()

    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
        onSubmit,
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("user-form")!.ref.current!

    await expect(ref.submit()).rejects.toThrow()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("virtual form ref getFieldNames returns schema keys", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("user-form")!.ref.current!
    const fieldNames = ref.getFieldNames()
    expect(fieldNames).toContain("name")
    expect(fieldNames).toContain("email")
    expect(fieldNames).toHaveLength(2)
  })

  it("includes virtual forms in formDescriptions", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "Alice", email: "alice@test.com" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.formDescriptions).toHaveLength(1)
    })

    const desc = capturedRegistry!.formDescriptions[0]
    expect(desc.formName).toBe("user-form")
    expect(desc.formValues).toEqual({
      name: "Alice",
      email: "alice@test.com",
    })
    expect(desc.isDirty).toBe(false)
  })

  it("removes virtual forms when definitions change", async () => {
    const definitions1: F0AiAvailableFormDefinition[] = [
      {
        name: "form-a",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
      {
        name: "form-b",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ]

    const definitions2: F0AiAvailableFormDefinition[] = [
      {
        name: "form-a",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    const { rerender } = render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions1}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.getFormNames()).toHaveLength(2)
    })

    rerender(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions2}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.getFormNames()).toHaveLength(1)
      expect(capturedRegistry?.getFormNames()).toContain("form-a")
      expect(capturedRegistry?.getFormNames()).not.toContain("form-b")
    })
  })

  it("rendered form takes precedence over virtual form with same name", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "virtual", email: "" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
    })

    // Simulate a rendered form registering with the same name
    const renderedRef: React.MutableRefObject<{
      submit: () => Promise<void>
      reset: () => void
      isDirty: () => boolean
      getValues: () => Record<string, unknown>
      setValue: () => void
      setValues: () => void
      trigger: () => Promise<boolean>
      getErrors: () => Record<string, string>
      getFieldNames: () => string[]
      _setStateCallback: () => void
    }> = {
      current: {
        submit: async () => {},
        reset: () => {},
        isDirty: () => false,
        getValues: () => ({ name: "rendered", email: "rendered@test.com" }),
        setValue: () => {},
        setValues: () => {},
        trigger: async () => true,
        getErrors: () => ({}),
        getFieldNames: () => ["name", "email"],
        _setStateCallback: () => {},
      },
    }

    act(() => {
      capturedRegistry!.register("user-form", renderedRef, simpleSchema)
    })

    await waitFor(() => {
      const entry = capturedRegistry!.get("user-form")
      expect(entry!.virtual).toBeUndefined()
      expect(entry!.ref.current!.getValues()).toEqual({
        name: "rendered",
        email: "rendered@test.com",
      })
    })
  })

  it("restores virtual form when rendered form unregisters", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "virtual-default", email: "" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("user-form")).toBeDefined()
      expect(capturedRegistry!.get("user-form")!.virtual).toBe(true)
    })

    // Register a rendered form
    const renderedRef: React.MutableRefObject<{
      submit: () => Promise<void>
      reset: () => void
      isDirty: () => boolean
      getValues: () => Record<string, unknown>
      setValue: () => void
      setValues: () => void
      trigger: () => Promise<boolean>
      getErrors: () => Record<string, string>
      getFieldNames: () => string[]
      _setStateCallback: () => void
    }> = {
      current: {
        submit: async () => {},
        reset: () => {},
        isDirty: () => false,
        getValues: () => ({ name: "rendered", email: "" }),
        setValue: () => {},
        setValues: () => {},
        trigger: async () => true,
        getErrors: () => ({}),
        getFieldNames: () => ["name", "email"],
        _setStateCallback: () => {},
      },
    }

    act(() => {
      capturedRegistry!.register("user-form", renderedRef, simpleSchema)
    })

    await waitFor(() => {
      expect(capturedRegistry!.get("user-form")!.virtual).toBeUndefined()
    })

    // Unregister the rendered form — virtual should come back
    act(() => {
      capturedRegistry!.unregister("user-form")
    })

    await waitFor(() => {
      const entry = capturedRegistry!.get("user-form")
      expect(entry).toBeDefined()
      expect(entry!.virtual).toBe(true)
      expect(entry!.ref.current!.getValues().name).toBe("virtual-default")
    })
  })
})
