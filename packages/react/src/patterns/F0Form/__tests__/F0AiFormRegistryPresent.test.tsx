import React from "react"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import {
  zeroRender as render,
  waitFor,
  act,
  screen,
} from "@/testing/test-utils"

import type { F0AiAvailableFormDefinition } from "../F0AiFormRegistry"

import {
  F0AiFormRegistryProvider,
  useF0AiFormRegistry,
} from "../F0AiFormRegistry"
import { f0FormField } from "../f0Schema"

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

const simpleSchema = z.object({
  name: f0FormField(z.string().min(1, "Name is required"), {
    label: "Name",
    placeholder: "Enter name",
  }),
  email: f0FormField(z.string().email("Invalid email"), {
    label: "Email",
    placeholder: "Enter email",
  }),
})

const sectionsConfig = {
  personal: {
    title: "Personal Information",
    description: "Basic details",
  },
  work: { title: "Work Details" },
}

const sectionedSchema = z.object({
  firstName: f0FormField(z.string().min(1), {
    label: "First Name",
    section: "personal",
  }),
  lastName: f0FormField(z.string().min(1), {
    label: "Last Name",
    section: "personal",
  }),
  role: f0FormField(z.string().min(1), {
    label: "Role",
    section: "work",
  }),
})

describe("F0AiFormRegistryProvider presentForm", () => {
  it("presentForm returns error for unknown form name", async () => {
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
    })

    const result = capturedRegistry!.presentForm("nonexistent", "dialog")
    expect(result.success).toBe(false)
    expect(result.error).toContain("nonexistent")
  })

  it("presentForm sets presentedForm state correctly", async () => {
    const onSubmit = vi.fn()
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "user-form",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
        title: "Add User",
        description: "Fill in the user details",
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
      expect(capturedRegistry).not.toBeNull()
    })

    act(() => {
      const result = capturedRegistry!.presentForm("user-form", "dialog")
      expect(result.success).toBe(true)
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm).not.toBeNull()
      expect(capturedRegistry!.presentedForm!.name).toBe("user-form")
      expect(capturedRegistry!.presentedForm!.mode).toBe("dialog")
      expect(capturedRegistry!.presentedForm!.definition.title).toBe("Add User")
      expect(capturedRegistry!.presentedForm!.initialValues).toEqual({
        name: "",
        email: "",
      })
    })
  })

  it("dismissForm clears presentedForm", async () => {
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
    })

    act(() => {
      capturedRegistry!.presentForm("user-form", "dialog")
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm).not.toBeNull()
    })

    act(() => {
      capturedRegistry!.dismissForm()
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm).toBeNull()
    })
  })

  it("presentForm works with wizard mode", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "sectioned-form",
        schema: sectionedSchema,
        defaultValues: { firstName: "", lastName: "", role: "" },
        sections: sectionsConfig,
        title: "Employee Wizard",
        steps: [
          { title: "Personal", sectionIds: ["personal"] },
          { title: "Work", sectionIds: ["work"] },
        ],
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
    })

    act(() => {
      const result = capturedRegistry!.presentForm("sectioned-form", "wizard")
      expect(result.success).toBe(true)
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm).not.toBeNull()
      expect(capturedRegistry!.presentedForm!.mode).toBe("wizard")
      expect(capturedRegistry!.presentedForm!.definition.steps).toHaveLength(2)
    })
  })

  it("presentForm can switch between forms", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "form-a",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
        title: "Form A",
      },
      {
        name: "form-b",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
        title: "Form B",
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
    })

    act(() => {
      capturedRegistry!.presentForm("form-a", "dialog")
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm!.name).toBe("form-a")
    })

    act(() => {
      capturedRegistry!.presentForm("form-b", "wizard")
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm!.name).toBe("form-b")
      expect(capturedRegistry!.presentedForm!.mode).toBe("wizard")
    })
  })

  it("presentForm captures pre-filled values from virtual form", async () => {
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

    // Simulate AI filling the virtual form before presenting
    const entry = capturedRegistry!.get("user-form")!
    const ref = entry.ref.current!
    ref.setValues({ name: "Alice", email: "alice@test.com" })

    // Verify dirtyFields tracked the changes
    expect(entry.dirtyFields).toBeDefined()
    expect(entry.dirtyFields!.has("name")).toBe(true)
    expect(entry.dirtyFields!.has("email")).toBe(true)

    act(() => {
      const result = capturedRegistry!.presentForm("user-form", "dialog")
      expect(result.success).toBe(true)
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm).not.toBeNull()
      expect(capturedRegistry!.presentedForm!.initialValues).toEqual({
        name: "Alice",
        email: "alice@test.com",
      })
    })
  })

  it("presentForm resolves functional defaultValues with params", async () => {
    const paramsSchema = z.object({
      employeeId: z.string(),
      department: z.string().optional(),
    })

    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "edit-employee",
        schema: simpleSchema,
        defaultValuesParamsSchema: paramsSchema,
        defaultValues: (params: Record<string, unknown>) => ({
          name: `Employee ${params.employeeId}`,
          email: `${params.employeeId}@factorial.co`,
        }),
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
    })

    act(() => {
      const result = capturedRegistry!.presentForm("edit-employee", "dialog", {
        employeeId: "emp-42",
      })
      expect(result.success).toBe(true)
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm).not.toBeNull()
      expect(capturedRegistry!.presentedForm!.initialValues).toEqual({
        name: "Employee emp-42",
        email: "emp-42@factorial.co",
      })
    })
  })

  it("presentForm returns error for invalid params", async () => {
    const paramsSchema = z.object({
      employeeId: z.string().min(1, "employeeId is required"),
    })

    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "edit-employee",
        schema: simpleSchema,
        defaultValuesParamsSchema: paramsSchema,
        defaultValues: (params: Record<string, unknown>) => ({
          name: String(params.employeeId ?? ""),
          email: "",
        }),
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
    })

    const result = capturedRegistry!.presentForm("edit-employee", "dialog", {
      employeeId: "",
    })
    expect(result.success).toBe(false)
    expect(result.error).toContain("employeeId is required")
  })

  it("presentForm with functional defaultValues and no params calls with empty object", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "dynamic-form",
        schema: simpleSchema,
        defaultValues: (params: Record<string, unknown>) => ({
          name: params.preset ? "Preset Name" : "Default",
          email: "default@test.com",
        }),
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
    })

    act(() => {
      const result = capturedRegistry!.presentForm("dynamic-form", "dialog")
      expect(result.success).toBe(true)
    })

    await waitFor(() => {
      expect(capturedRegistry!.presentedForm!.initialValues).toEqual({
        name: "Default",
        email: "default@test.com",
      })
    })
  })

  it("presentForm merges AI-filled values over param-resolved defaults", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "merge-form",
        schema: simpleSchema,
        defaultValuesParamsSchema: z.object({ role: z.string() }),
        defaultValues: (params: Record<string, unknown>) => ({
          name: `Role: ${params.role}`,
          email: "from-params@test.com",
        }),
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
      expect(capturedRegistry?.get("merge-form")).toBeDefined()
    })

    // Simulate AI filling the email before presenting
    const ref = capturedRegistry!.get("merge-form")!.ref.current!
    ref.setValues({ name: "", email: "ai-override@test.com" })

    act(() => {
      const result = capturedRegistry!.presentForm("merge-form", "dialog", {
        role: "engineer",
      })
      expect(result.success).toBe(true)
    })

    await waitFor(() => {
      // AI-filled email takes precedence, but param-resolved name is used
      // since the AI set name to "" (empty), it still overrides
      expect(capturedRegistry!.presentedForm!.initialValues).toEqual({
        name: "",
        email: "ai-override@test.com",
      })
    })
  })

  it("formDescriptions includes defaultValuesParamsSchema when defined", async () => {
    const paramsSchema = z.object({
      employeeId: z.string(),
    })

    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "with-params",
        schema: simpleSchema,
        defaultValuesParamsSchema: paramsSchema,
        defaultValues: () => ({ name: "", email: "" }),
      },
      {
        name: "without-params",
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
      expect(capturedRegistry?.formDescriptions.length).toBe(2)
    })

    const withParams = capturedRegistry!.formDescriptions.find(
      (d) => d.formName === "with-params"
    )
    const withoutParams = capturedRegistry!.formDescriptions.find(
      (d) => d.formName === "without-params"
    )

    expect(withParams?.defaultValuesParamsSchema).toBeDefined()
    expect(withoutParams?.defaultValuesParamsSchema).toBeUndefined()
  })

  it("presentForm after fillForm renders the filled values in the form UI", async () => {
    const definitions: F0AiAvailableFormDefinition[] = [
      {
        name: "contact",
        schema: simpleSchema,
        defaultValues: { name: "", email: "" },
        title: "Contact",
        onSubmit: async () => {},
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
      expect(capturedRegistry?.get("contact")).toBeDefined()
    })

    // Simulate the full fillForm → rebuildDescriptions → presentForm flow
    const entry = capturedRegistry!.get("contact")!
    entry.ref.current!.setValues({
      name: "Jane Doe",
      email: "jane@test.com",
    })
    // fillForm calls rebuildDescriptions which triggers a re-render via queueMicrotask
    capturedRegistry!.rebuildDescriptions()

    // Wait for the microtask and re-render to complete
    await waitFor(() => {
      const desc = capturedRegistry!.formDescriptions.find(
        (d) => d.formName === "contact"
      )
      expect(desc?.formValues).toEqual({
        name: "Jane Doe",
        email: "jane@test.com",
      })
    })

    // NOW present the form (after the re-render from rebuildDescriptions)
    act(() => {
      const result = capturedRegistry!.presentForm("contact", "dialog")
      expect(result.success).toBe(true)
    })

    // The dialog should render with the filled values in the input fields
    await waitFor(() => {
      const nameInput = screen.getByDisplayValue("Jane Doe")
      expect(nameInput).toBeTruthy()
    })

    const emailInput = screen.getByDisplayValue("jane@test.com")
    expect(emailInput).toBeTruthy()
  })
})
