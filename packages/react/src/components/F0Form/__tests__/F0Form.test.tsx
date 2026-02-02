import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { z } from "zod"

import { F0Form } from "../F0Form"
import { f0, getF0Config, hasF0Config, inferFieldType } from "../f0Schema"
import type { F0SectionConfig } from "../types"
import { getSchemaDefinition } from "../useSchemaDefinition"

describe("F0Form", () => {
  it("renders a basic form using schema prop", () => {
    const formSchema = z.object({
      name: f0(z.string(), {
        label: "Name",
      }),
    })

    render(
      <F0Form
        name="schema-basic"
        schema={formSchema}
        defaultValues={{ name: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByLabelText("Name")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument()
  })

  it("renders form with custom submit label", () => {
    const formSchema = z.object({
      email: f0(z.string().email(), {
        label: "Email",
        inputType: "email",
      }),
    })

    render(
      <F0Form
        name="custom-submit-label"
        schema={formSchema}
        defaultValues={{ email: "" }}
        onSubmit={async () => ({ success: true })}
        submitLabel="Save"
      />
    )

    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument()
  })

  it("can hide the submit button", () => {
    const formSchema = z.object({
      name: f0(z.string(), {
        label: "Name",
      }),
    })

    render(
      <F0Form
        name="hide-submit-button"
        schema={formSchema}
        defaultValues={{ name: "" }}
        onSubmit={async () => ({ success: true })}
        showSubmitButton={false}
      />
    )

    expect(
      screen.queryByRole("button", { name: /submit/i })
    ).not.toBeInTheDocument()
  })

  it("renders form with sections", () => {
    const formSchema = z.object({
      name: f0(z.string(), {
        label: "Name",
        section: "personal",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      personal: {
        title: "Personal Information",
        description: "Enter your details",
      },
    }

    render(
      <F0Form
        name="schema-sections"
        schema={formSchema}
        sections={sections}
        defaultValues={{ name: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByText("Personal Information")).toBeInTheDocument()
    expect(screen.getByText("Enter your details")).toBeInTheDocument()
    expect(screen.getByLabelText("Name")).toBeInTheDocument()
  })

  it("renders form with row grouping", () => {
    const formSchema = z.object({
      firstName: f0(z.string(), {
        label: "First Name",
        row: "name-row",
      }),
      lastName: f0(z.string(), {
        label: "Last Name",
        row: "name-row",
      }),
    })

    render(
      <F0Form
        name="schema-rows"
        schema={formSchema}
        defaultValues={{ firstName: "", lastName: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByLabelText("First Name")).toBeInTheDocument()
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument()
  })
})

describe("f0 function", () => {
  it("attaches config to schema", () => {
    const schema = f0(z.string(), {
      label: "Test",
    })

    const config = getF0Config(schema)
    expect(config).toBeDefined()
    expect(config?.label).toBe("Test")
  })

  it("preserves original schema validation", () => {
    const schema = f0(z.string().min(2), {
      label: "Test",
    })

    const validResult = schema.safeParse("ab")
    expect(validResult.success).toBe(true)

    const invalidResult = schema.safeParse("a")
    expect(invalidResult.success).toBe(false)
  })

  it("supports all config options", () => {
    const schema = f0(z.string(), {
      label: "Test",
      section: "section1",
      placeholder: "Enter text",
      helpText: "Help text",
      disabled: true,
      row: "row1",
    })

    const config = getF0Config(schema)
    expect(config?.label).toBe("Test")
    expect(config?.section).toBe("section1")
    expect(config?.placeholder).toBe("Enter text")
    expect(config?.helpText).toBe("Help text")
    expect(config?.disabled).toBe(true)
    expect(config?.row).toBe("row1")
  })
})

describe("hasF0Config", () => {
  it("returns true for schema with f0 config", () => {
    const schema = f0(z.string(), { label: "Test" })
    expect(hasF0Config(schema)).toBe(true)
  })

  it("returns false for schema without f0 config", () => {
    const schema = z.string()
    expect(hasF0Config(schema)).toBe(false)
  })
})

describe("inferFieldType", () => {
  it("infers text type from ZodString", () => {
    const schema = z.string()
    const config = { label: "Test" } as const
    expect(inferFieldType(schema, config)).toBe("text")
  })

  it("infers number type from ZodNumber", () => {
    const schema = z.number()
    const config = { label: "Test", fieldType: "number" } as const
    expect(inferFieldType(schema, config)).toBe("number")
  })

  it("infers switch type from ZodBoolean", () => {
    const schema = z.boolean()
    const config = { label: "Test", fieldType: "switch" } as const
    expect(inferFieldType(schema, config)).toBe("switch")
  })

  it("infers textarea from rows config", () => {
    const schema = z.string()
    const config = {
      label: "Test",
      rows: 4,
      fieldType: "textarea",
    } as const
    expect(inferFieldType(schema, config)).toBe("textarea")
  })

  it("infers select from options config", () => {
    const schema = z.string()
    const config = {
      label: "Test",
      options: [{ value: "a", label: "A" }],
    } as const
    expect(inferFieldType(schema, config)).toBe("select")
  })

  it("uses explicit fieldType when provided", () => {
    const schema = z.boolean()
    const config = {
      label: "Test",
      fieldType: "checkbox",
    } as const
    expect(inferFieldType(schema, config)).toBe("checkbox")
  })
})

describe("getSchemaDefinition", () => {
  it("converts schema to definition array", () => {
    const formSchema = z.object({
      name: f0(z.string(), { label: "Name" }),
      email: f0(z.string().email(), { label: "Email" }),
    })

    const definition = getSchemaDefinition(formSchema)

    expect(definition).toHaveLength(2)
    expect(definition[0].type).toBe("field")
    expect(definition[1].type).toBe("field")
  })

  it("groups fields by section", () => {
    const formSchema = z.object({
      name: f0(z.string(), {
        label: "Name",
        section: "personal",
      }),
      email: f0(z.string(), {
        label: "Email",
        section: "contact",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      personal: { title: "Personal", order: 1 },
      contact: { title: "Contact", order: 2 },
    }

    const definition = getSchemaDefinition(formSchema, sections)

    expect(definition).toHaveLength(2)
    expect(definition[0].type).toBe("section")
    expect(definition[1].type).toBe("section")
  })

  it("orders fields by declaration order in schema", () => {
    const formSchema = z.object({
      first: f0(z.string(), { label: "First" }),
      second: f0(z.string(), { label: "Second" }),
      third: f0(z.string(), { label: "Third" }),
    })

    const definition = getSchemaDefinition(formSchema)

    expect(definition).toHaveLength(3)
    // Fields should be in declaration order
    const fieldItems = definition as Array<{
      type: "field"
      field: { id: string }
    }>
    expect(fieldItems[0].field.id).toBe("first")
    expect(fieldItems[1].field.id).toBe("second")
    expect(fieldItems[2].field.id).toBe("third")
  })

  it("groups fields with same row into row definition", () => {
    const formSchema = z.object({
      firstName: f0(z.string(), {
        label: "First",
        row: "name-row",
      }),
      lastName: f0(z.string(), {
        label: "Last",
        row: "name-row",
      }),
    })

    const definition = getSchemaDefinition(formSchema)

    expect(definition).toHaveLength(1)
    expect(definition[0].type).toBe("row")
    const rowDef = definition[0] as {
      type: "row"
      fields: Array<{ id: string }>
    }
    expect(rowDef.fields).toHaveLength(2)
  })
})
