import React, { useState } from "react"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import type {
  F0FormDefinitionSingleSchema,
  F0FormDefinitionPerSection,
} from "@/patterns/F0WizardForm/types"

import { zeroRender as render, waitFor, act } from "@/testing/test-utils"

import type { F0AiAvailableFormDefinition } from "../F0AiFormRegistry"

import {
  F0AiFormRegistryProvider,
  useF0AiFormRegistry,
  defineAvailableForm,
} from "../F0AiFormRegistry"
import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"

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

const describedSchema = z.object({
  firstName: f0FormField(
    z.string().min(1).describe("The employee first name"),
    {
      label: "First Name",
      placeholder: "e.g. Jane",
      helpText: "Legal first name",
      section: "personal",
    }
  ),
  role: f0FormField(z.enum(["engineer", "designer"]), {
    label: "Role",
    section: "work",
  }),
})

const describedSections = {
  personal: {
    title: "Personal Information",
    description: "Basic employee details",
  },
  work: { title: "Work Details" },
}

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

  it("includes virtual forms in availableForms", async () => {
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
      expect(capturedRegistry?.availableForms).toHaveLength(1)
    })

    const summary = capturedRegistry!.availableForms[0]
    expect(summary.formName).toBe("user-form")
  })

  it("exposes field metadata when form is picked as active", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "employee-form",
        schema: describedSchema,
        sections: describedSections,
        defaultValues: { firstName: "", role: undefined },
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
      expect(capturedRegistry?.get("employee-form")).toBeDefined()
    })

    act(() => {
      capturedRegistry!.setActiveForm("employee-form", {
        cardTitle: "Test",
        cardDescription: "Test desc",
      })
    })

    await waitFor(() => {
      expect(capturedRegistry!.activeForm).not.toBeNull()
    })

    const desc = capturedRegistry!.activeForm!
    expect(desc.fieldDescriptions).toEqual({
      firstName: {
        label: "First Name",
        section: "personal",
        placeholder: "e.g. Jane",
        helpText: "Legal first name",
        description: "The employee first name",
      },
      role: {
        label: "Role",
        section: "work",
        fieldType: "select",
      },
    })
  })

  it("exposes section metadata when form is picked as active", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "employee-form",
        schema: describedSchema,
        sections: describedSections,
        defaultValues: { firstName: "", role: undefined },
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
      expect(capturedRegistry?.get("employee-form")).toBeDefined()
    })

    act(() => {
      capturedRegistry!.setActiveForm("employee-form", {
        cardTitle: "Test",
        cardDescription: "Test desc",
      })
    })

    await waitFor(() => {
      expect(capturedRegistry!.activeForm).not.toBeNull()
    })

    const desc = capturedRegistry!.activeForm!
    expect(desc.sectionDescriptions).toEqual({
      personal: {
        title: "Personal Information",
        description: "Basic employee details",
      },
      work: {
        title: "Work Details",
      },
    })
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
    // with values preserved from the rendered form (not reset to original defaults)
    act(() => {
      capturedRegistry!.unregister("user-form")
    })

    await waitFor(() => {
      const entry = capturedRegistry!.get("user-form")
      expect(entry).toBeDefined()
      expect(entry!.virtual).toBe(true)
      // Values are preserved from the rendered form, not reset to "virtual-default"
      expect(entry!.ref.current!.getValues().name).toBe("rendered")
    })
  })

  it("stores onSubmit on virtual entry", async () => {
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

    const entry = capturedRegistry!.get("user-form")!
    expect(entry.onSubmit).toBe(onSubmit)
  })

  it("preserves onSubmit when rendered form registers over virtual", async () => {
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
      expect(capturedRegistry?.get("user-form")?.virtual).toBe(true)
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
      const entry = capturedRegistry!.get("user-form")
      // Entry is no longer virtual, but onSubmit is preserved
      expect(entry!.virtual).toBeUndefined()
      expect(entry!.onSubmit).toBe(onSubmit)
    })
  })

  it("restores onSubmit when rendered form unregisters back to virtual", async () => {
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
      expect(capturedRegistry?.get("user-form")?.virtual).toBe(true)
    })

    // Register then unregister a rendered form
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

    act(() => {
      capturedRegistry!.unregister("user-form")
    })

    await waitFor(() => {
      const entry = capturedRegistry!.get("user-form")
      expect(entry!.virtual).toBe(true)
      expect(entry!.onSubmit).toBe(onSubmit)
    })
  })

  it("clearActiveForm resets activeForm to null", async () => {
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

    act(() => {
      capturedRegistry!.setActiveForm("user-form", {
        cardTitle: "Test",
        cardDescription: "Test desc",
      })
    })

    await waitFor(() => {
      expect(capturedRegistry!.activeForm).not.toBeNull()
    })

    act(() => {
      capturedRegistry!.clearActiveForm()
    })

    await waitFor(() => {
      expect(capturedRegistry!.activeForm).toBeNull()
    })
  })

  it("preserves virtual form values after rendered F0Form unmounts", async () => {
    const formSchema = z.object({
      name: f0FormField(z.string().min(1, "Name is required"), {
        label: "Name",
      }),
      email: f0FormField(z.string().email("Invalid email"), {
        label: "Email",
      }),
    })

    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "canvas-form",
        schema: formSchema,
        defaultValues: { name: "", email: "" },
      },
    ]

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null
    let toggleForm: () => void

    function TestWrapper() {
      const [showForm, setShowForm] = useState(false)
      toggleForm = () => setShowForm((prev) => !prev)

      return (
        <F0AiFormRegistryProvider availableFormDefinitions={definitions}>
          <RegistryInspector
            onRegistry={(r) => {
              capturedRegistry = r
            }}
          />
          {showForm && (
            <F0Form
              name="canvas-form"
              schema={formSchema}
              defaultValues={{ name: "Alice", email: "alice@test.com" }}
              onSubmit={async () => ({ success: true })}
            />
          )}
        </F0AiFormRegistryProvider>
      )
    }

    render(<TestWrapper />)

    // Wait for virtual form to be registered
    await waitFor(() => {
      expect(capturedRegistry?.get("canvas-form")).toBeDefined()
      expect(capturedRegistry!.get("canvas-form")!.virtual).toBe(true)
    })

    // Mount the F0Form (simulates opening the canvas)
    act(() => {
      toggleForm()
    })

    // Wait for the rendered form to take over the entry
    await waitFor(() => {
      const entry = capturedRegistry!.get("canvas-form")
      expect(entry).toBeDefined()
      expect(entry!.virtual).toBeUndefined()
    })

    // Values should be in the rendered form
    await waitFor(() => {
      const ref = capturedRegistry!.get("canvas-form")!.ref.current
      expect(ref).not.toBeNull()
      expect(ref!.getValues().name).toBe("Alice")
      expect(ref!.getValues().email).toBe("alice@test.com")
    })

    // Unmount the F0Form (simulates closing the canvas)
    act(() => {
      toggleForm()
    })

    // The entry should revert to virtual and PRESERVE the rendered form's values
    await waitFor(() => {
      const entry = capturedRegistry!.get("canvas-form")
      expect(entry).toBeDefined()
      expect(entry!.virtual).toBe(true)
      expect(entry!.ref.current!.getValues().name).toBe("Alice")
      expect(entry!.ref.current!.getValues().email).toBe("alice@test.com")
    })
  })
})

// =============================================================================
// Tests for F0FormDefinition normalization (single + per-section)
// =============================================================================

describe("F0AiFormRegistryProvider with F0FormDefinition items", () => {
  const singleSchema = z.object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
  })

  const singleDefinition: F0FormDefinitionSingleSchema<typeof singleSchema> = {
    _brand: "single",
    name: "single-form",
    schema: singleSchema,
    description: "A single-schema form",
    defaultValues: { firstName: "Jane", lastName: "Doe" },
    onSubmit: vi.fn(async () => ({ success: true })),
  }

  it("registers a single-schema F0FormDefinition as virtual", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={[singleDefinition]}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry).not.toBeNull()
      expect(capturedRegistry!.getFormNames()).toContain("single-form")
    })

    const entry = capturedRegistry!.get("single-form")
    expect(entry).toBeDefined()
    expect(entry!.virtual).toBe(true)
    expect(entry!.ref.current!.getValues()).toEqual({
      firstName: "Jane",
      lastName: "Doe",
    })
  })

  it("single-schema onSubmit adapter wraps values in { data }", async () => {
    const onSubmit = vi.fn(async () => ({ success: true as const }))
    const def: F0FormDefinitionSingleSchema<typeof singleSchema> = {
      ...singleDefinition,
      onSubmit,
    }

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={[def]}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("single-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("single-form")!.ref.current!
    ref.setValues({ firstName: "Alice", lastName: "Smith" })
    await ref.submit()

    expect(onSubmit).toHaveBeenCalledWith({
      data: { firstName: "Alice", lastName: "Smith" },
    })
  })

  it("defineAvailableForm converts a single-schema F0FormDefinition", () => {
    const result = defineAvailableForm(singleDefinition)
    expect(result.name).toBe("single-form")
    expect(result.description).toBe("A single-schema form")
    // Should be a plain F0AiAvailableFormDefinition (no _brand)
    expect("_brand" in result).toBe(false)
  })

  // -- Per-section tests --

  const personalSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  })

  const workSchema = z.object({
    role: z.enum(["engineer", "designer"]),
  })

  const perSectionSchema = { personal: personalSchema, work: workSchema }

  const perSectionDefinition: F0FormDefinitionPerSection<
    typeof perSectionSchema
  > = {
    _brand: "per-section",
    name: "per-section-form",
    schema: perSectionSchema,
    description: "A per-section form",
    defaultValues: {
      personal: { firstName: "Bob", lastName: "Jones" },
      work: { role: "engineer" },
    },
    onSubmit: vi.fn(async () => ({ success: true })),
  }

  it("registers a per-section F0FormDefinition with flattened defaults", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[perSectionDefinition]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry).not.toBeNull()
      expect(capturedRegistry!.getFormNames()).toContain("per-section-form")
    })

    const entry = capturedRegistry!.get("per-section-form")
    expect(entry).toBeDefined()
    expect(entry!.virtual).toBe(true)
    // defaultValues should be flattened
    expect(entry!.ref.current!.getValues()).toEqual({
      firstName: "Bob",
      lastName: "Jones",
      role: "engineer",
    })
  })

  it("per-section merged schema contains all fields", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[perSectionDefinition]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("per-section-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("per-section-form")!.ref.current!
    const fieldNames = ref.getFieldNames()
    expect(fieldNames).toContain("firstName")
    expect(fieldNames).toContain("lastName")
    expect(fieldNames).toContain("role")
  })

  it("per-section onSubmit reconstructs section data correctly", async () => {
    const onSubmit = vi.fn(async () => ({ success: true as const }))
    const def: F0FormDefinitionPerSection<typeof perSectionSchema> = {
      ...perSectionDefinition,
      onSubmit,
    }

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={[def]}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("per-section-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("per-section-form")!.ref.current!
    ref.setValues({
      firstName: "Alice",
      lastName: "Smith",
      role: "designer",
    })
    await ref.submit()

    // onSubmit is called once per section
    expect(onSubmit).toHaveBeenCalledTimes(2)

    // First call: personal section
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        sectionId: "personal",
        data: { firstName: "Alice", lastName: "Smith" },
      })
    )

    // Second call: work section
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        sectionId: "work",
        data: { role: "designer" },
      })
    )
  })

  it("handles per-section with ZodEffects (refined schemas)", async () => {
    const refinedPersonal = personalSchema.refine(
      (v) => v.firstName !== v.lastName,
      { message: "Names must differ" }
    )

    const refinedPerSection: F0FormDefinitionPerSection<{
      personal: typeof refinedPersonal
      work: typeof workSchema
    }> = {
      _brand: "per-section",
      name: "refined-form",
      schema: { personal: refinedPersonal, work: workSchema },
      defaultValues: {
        personal: { firstName: "A", lastName: "B" },
        work: { role: "engineer" },
      },
      onSubmit: vi.fn(async () => ({ success: true })),
    }

    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={[refinedPerSection]}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("refined-form")).toBeDefined()
    })

    const ref = capturedRegistry!.get("refined-form")!.ref.current!
    // Fields from the refined schema should still be extracted
    const fieldNames = ref.getFieldNames()
    expect(fieldNames).toContain("firstName")
    expect(fieldNames).toContain("lastName")
    expect(fieldNames).toContain("role")
  })
})

// =============================================================================
// defaultValuesParams lifecycle tests
// =============================================================================

describe("defaultValuesParams lifecycle", () => {
  const paramsSchema = z.object({
    id: z.string().describe("Record id"),
  })

  const mockRecords: Record<string, { name: string; email: string }> = {
    "rec-1": { name: "Alice", email: "alice@example.com" },
    "rec-2": { name: "Bob", email: "bob@example.com" },
  }

  const definitionWithParams: F0AiAvailableFormDefinition = {
    name: "edit-record",
    schema: simpleSchema,
    defaultValuesParamsSchema: paramsSchema,
    defaultValues: (params) => {
      const id = (params as { id: string }).id
      const record = mockRecords[id]
      return record ?? { name: "", email: "" }
    },
  }

  it("updateActiveFormDefaultValuesParams writes params to the entry", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[definitionWithParams]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("edit-record")).toBeDefined()
    })

    act(() => {
      capturedRegistry!.updateActiveFormDefaultValuesParams("edit-record", {
        id: "rec-1",
      })
    })

    const entry = capturedRegistry!.get("edit-record")
    expect(entry!.defaultValuesParams).toEqual({ id: "rec-1" })
  })

  it("register() preserves defaultValuesParams from existing entry", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[definitionWithParams]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("edit-record")).toBeDefined()
    })

    // Write params to the entry
    act(() => {
      capturedRegistry!.updateActiveFormDefaultValuesParams("edit-record", {
        id: "rec-1",
      })
    })

    // Simulate what happens when F0Form mounts in canvas: register() is called
    // with the same name but without defaultValuesParams
    const mockRef = { current: null } as React.MutableRefObject<null>
    act(() => {
      capturedRegistry!.register("edit-record", mockRef, simpleSchema)
    })

    await waitFor(() => {
      const entry = capturedRegistry!.get("edit-record")
      expect(entry).toBeDefined()
    })

    const entry = capturedRegistry!.get("edit-record")
    expect(entry!.defaultValuesParams).toEqual({ id: "rec-1" })
  })

  it("register() preserves defaultValuesFn from existing entry", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[definitionWithParams]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("edit-record")).toBeDefined()
    })

    const originalDefaultValuesFn =
      capturedRegistry!.get("edit-record")!.defaultValuesFn
    expect(originalDefaultValuesFn).toBeDefined()

    // Re-register without providing defaultValuesFn (as canvas F0Form would)
    const mockRef = { current: null } as React.MutableRefObject<null>
    act(() => {
      capturedRegistry!.register("edit-record", mockRef, simpleSchema)
    })

    await waitFor(() => {
      const entry = capturedRegistry!.get("edit-record")
      expect(entry).toBeDefined()
    })

    const entry = capturedRegistry!.get("edit-record")
    expect(entry!.defaultValuesFn).toBe(originalDefaultValuesFn)
  })

  it("register() preserves defaultValuesParamsSchema from existing entry", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[definitionWithParams]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("edit-record")).toBeDefined()
    })

    const originalSchema =
      capturedRegistry!.get("edit-record")!.defaultValuesParamsSchema
    expect(originalSchema).toBeDefined()

    // Re-register without providing defaultValuesParamsSchema
    const mockRef = { current: null } as React.MutableRefObject<null>
    act(() => {
      capturedRegistry!.register("edit-record", mockRef, simpleSchema)
    })

    await waitFor(() => {
      const entry = capturedRegistry!.get("edit-record")
      expect(entry).toBeDefined()
    })

    const entry = capturedRegistry!.get("edit-record")
    expect(entry!.defaultValuesParamsSchema).toBe(originalSchema)
  })

  it("unregister() preserves defaultValuesParams when recreating virtual entry", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[definitionWithParams]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("edit-record")).toBeDefined()
    })

    // Write params, then register as rendered (non-virtual), then unregister
    act(() => {
      capturedRegistry!.updateActiveFormDefaultValuesParams("edit-record", {
        id: "rec-2",
      })
    })

    const mockRef = { current: null } as React.MutableRefObject<null>
    act(() => {
      capturedRegistry!.register("edit-record", mockRef, simpleSchema)
    })

    act(() => {
      capturedRegistry!.unregister("edit-record")
    })

    await waitFor(() => {
      const entry = capturedRegistry!.get("edit-record")
      expect(entry?.virtual).toBe(true)
    })

    const entry = capturedRegistry!.get("edit-record")
    expect(entry!.defaultValuesParams).toEqual({ id: "rec-2" })
  })

  it("defaultValuesParams appear in activeForm description after rebuild", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[definitionWithParams]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("edit-record")).toBeDefined()
    })

    // Write params to entry, set as active, then trigger a rebuild
    act(() => {
      capturedRegistry!.updateActiveFormDefaultValuesParams("edit-record", {
        id: "rec-1",
      })
    })

    act(() => {
      capturedRegistry!.setActiveForm("edit-record", {
        cardTitle: "Edit",
        cardDescription: "Edit record",
      })
    })

    // rebuildDescriptions is called inside setActiveForm, which
    // emits via queueMicrotask. Wait for the next description cycle.
    await waitFor(() => {
      expect(capturedRegistry!.activeForm).not.toBeNull()
    })

    expect(capturedRegistry!.activeForm!.defaultValuesParams).toEqual({
      id: "rec-1",
    })
  })

  it("defaultValuesFn resolves correct record when called with params", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider
        availableFormDefinitions={[definitionWithParams]}
      >
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry?.get("edit-record")).toBeDefined()
    })

    const entry = capturedRegistry!.get("edit-record")!
    expect(entry.defaultValuesFn).toBeDefined()

    const result = await entry.defaultValuesFn!({ id: "rec-2" })
    expect(result).toEqual({ name: "Bob", email: "bob@example.com" })
  })

  it("updateActiveFormDefaultValuesParams does not crash for unknown form", async () => {
    let capturedRegistry: ReturnType<typeof useF0AiFormRegistry> = null

    render(
      <F0AiFormRegistryProvider availableFormDefinitions={[]}>
        <RegistryInspector
          onRegistry={(r) => {
            capturedRegistry = r
          }}
        />
      </F0AiFormRegistryProvider>
    )

    await waitFor(() => {
      expect(capturedRegistry).not.toBeNull()
    })

    // Should be a no-op, not throw
    act(() => {
      capturedRegistry!.updateActiveFormDefaultValuesParams("nonexistent", {
        id: "x",
      })
    })
  })
})
