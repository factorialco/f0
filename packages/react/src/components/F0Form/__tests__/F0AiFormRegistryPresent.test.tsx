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
})
