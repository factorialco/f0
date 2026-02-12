import React from "react"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { describe, expect, it } from "vitest"
import { z } from "zod"

import { F0Form } from "../F0Form"
import {
  f0FormField,
  getF0Config,
  hasF0Config,
  inferFieldType,
} from "../f0Schema"
import type { F0SectionConfig } from "../types"
import { getSchemaDefinition } from "../useSchemaDefinition"
import { isFieldRequired, isOptionalOrNullable } from "../fields/schema"

describe("F0Form", () => {
  it("renders a basic form using schema prop", () => {
    const formSchema = z.object({
      name: f0FormField(z.string(), {
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
    // Check for submit button - use getByText since the button has label text
    expect(screen.getByText("Submit")).toBeInTheDocument()
  })

  it("renders form with custom submit label", () => {
    const formSchema = z.object({
      email: f0FormField(z.string().email(), {
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
        submitConfig={{ label: "Save" }}
      />
    )

    expect(screen.getByText("Save")).toBeInTheDocument()
  })

  it("renders form with sections", () => {
    const formSchema = z.object({
      name: f0FormField(z.string(), {
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
      firstName: f0FormField(z.string(), {
        label: "First Name",
        row: "name-row",
      }),
      lastName: f0FormField(z.string(), {
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

describe("f0FormField function", () => {
  it("attaches config to schema", () => {
    const schema = f0FormField(z.string(), {
      label: "Test",
    })

    const config = getF0Config(schema)
    expect(config).toBeDefined()
    expect(config?.label).toBe("Test")
  })

  it("preserves original schema validation", () => {
    const schema = f0FormField(z.string().min(2), {
      label: "Test",
    })

    const validResult = schema.safeParse("ab")
    expect(validResult.success).toBe(true)

    const invalidResult = schema.safeParse("a")
    expect(invalidResult.success).toBe(false)
  })

  it("supports all config options", () => {
    const schema = f0FormField(z.string(), {
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
  it("returns true for schema with f0FormField config", () => {
    const schema = f0FormField(z.string(), { label: "Test" })
    expect(hasF0Config(schema)).toBe(true)
  })

  it("returns false for schema without f0FormField config", () => {
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
      name: f0FormField(z.string(), { label: "Name" }),
      email: f0FormField(z.string().email(), { label: "Email" }),
    })

    const definition = getSchemaDefinition(formSchema)

    expect(definition).toHaveLength(2)
    expect(definition[0].type).toBe("field")
    expect(definition[1].type).toBe("field")
  })

  it("groups fields by section", () => {
    const formSchema = z.object({
      name: f0FormField(z.string(), {
        label: "Name",
        section: "personal",
      }),
      email: f0FormField(z.string(), {
        label: "Email",
        section: "contact",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      personal: { title: "Personal" },
      contact: { title: "Contact" },
    }

    const definition = getSchemaDefinition(formSchema, sections)

    expect(definition).toHaveLength(2)
    expect(definition[0].type).toBe("section")
    expect(definition[1].type).toBe("section")
  })

  it("orders fields by declaration order in schema", () => {
    const formSchema = z.object({
      first: f0FormField(z.string(), { label: "First" }),
      second: f0FormField(z.string(), { label: "Second" }),
      third: f0FormField(z.string(), { label: "Third" }),
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
      firstName: f0FormField(z.string(), {
        label: "First",
        row: "name-row",
      }),
      lastName: f0FormField(z.string(), {
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

describe("inferFieldType - date/time fields", () => {
  it("infers date type from ZodDate", () => {
    const schema = z.date()
    const config = { label: "Test" } as const
    expect(inferFieldType(schema, config)).toBe("date")
  })

  it("infers time type from explicit fieldType", () => {
    const schema = z.date()
    const config = { label: "Test", fieldType: "time" } as const
    expect(inferFieldType(schema, config)).toBe("time")
  })

  it("infers datetime type from explicit fieldType", () => {
    const schema = z.date()
    const config = { label: "Test", fieldType: "datetime" } as const
    expect(inferFieldType(schema, config)).toBe("datetime")
  })

  it("infers daterange type from explicit fieldType with object schema", () => {
    const schema = z.object({ from: z.date(), to: z.date() })
    const config = { label: "Test", fieldType: "daterange" } as const
    expect(inferFieldType(schema, config)).toBe("daterange")
  })
})

describe("isOptionalOrNullable", () => {
  it("returns true for optional schema", () => {
    expect(isOptionalOrNullable(z.string().optional())).toBe(true)
  })

  it("returns true for nullable schema", () => {
    expect(isOptionalOrNullable(z.string().nullable())).toBe(true)
  })

  it("returns true for optional date schema", () => {
    expect(isOptionalOrNullable(z.date().optional())).toBe(true)
  })

  it("returns false for required schema", () => {
    expect(isOptionalOrNullable(z.string())).toBe(false)
  })

  it("returns false for required date schema", () => {
    expect(isOptionalOrNullable(z.date())).toBe(false)
  })

  it("returns true for schema with default that wraps optional", () => {
    expect(isOptionalOrNullable(z.string().optional().default(""))).toBe(true)
  })
})

describe("isFieldRequired", () => {
  describe("string fields", () => {
    it("returns false for plain z.string() (empty string is valid)", () => {
      expect(isFieldRequired(z.string())).toBe(false)
    })

    it("returns true for z.string().min(1)", () => {
      expect(isFieldRequired(z.string().min(1))).toBe(true)
    })

    it("returns true for z.string().email()", () => {
      expect(isFieldRequired(z.string().email())).toBe(true)
    })

    it("returns true for z.string().url()", () => {
      expect(isFieldRequired(z.string().url())).toBe(true)
    })

    it("returns true for z.string().uuid()", () => {
      expect(isFieldRequired(z.string().uuid())).toBe(true)
    })

    it("returns false for z.string().optional()", () => {
      expect(isFieldRequired(z.string().optional())).toBe(false)
    })

    it("returns false for z.string().min(1).optional()", () => {
      expect(isFieldRequired(z.string().min(1).optional())).toBe(false)
    })
  })

  describe("number fields", () => {
    it("returns true for z.number()", () => {
      expect(isFieldRequired(z.number())).toBe(true)
    })

    it("returns false for z.number().optional()", () => {
      expect(isFieldRequired(z.number().optional())).toBe(false)
    })
  })

  describe("date fields", () => {
    it("returns true for z.date()", () => {
      expect(isFieldRequired(z.date())).toBe(true)
    })

    it("returns false for z.date().optional()", () => {
      expect(isFieldRequired(z.date().optional())).toBe(false)
    })
  })

  describe("boolean fields", () => {
    it("returns true for z.boolean()", () => {
      expect(isFieldRequired(z.boolean())).toBe(true)
    })

    it("returns false for z.boolean().optional()", () => {
      expect(isFieldRequired(z.boolean().optional())).toBe(false)
    })
  })
})

describe("getSchemaDefinition - field types", () => {
  it("creates date field from z.date()", () => {
    const formSchema = z.object({
      birthDate: f0FormField(z.date(), { label: "Birth Date" }),
    })

    const definition = getSchemaDefinition(formSchema)
    const fieldItem = definition[0] as {
      type: "field"
      field: { type: string }
    }

    expect(fieldItem.field.type).toBe("date")
  })

  it("creates time field from z.date() with fieldType time", () => {
    const formSchema = z.object({
      startTime: f0FormField(z.date(), {
        label: "Start Time",
        fieldType: "time",
      }),
    })

    const definition = getSchemaDefinition(formSchema)
    const fieldItem = definition[0] as {
      type: "field"
      field: { type: string }
    }

    expect(fieldItem.field.type).toBe("time")
  })

  it("creates datetime field from z.date() with fieldType datetime", () => {
    const formSchema = z.object({
      eventTime: f0FormField(z.date(), {
        label: "Event Time",
        fieldType: "datetime",
      }),
    })

    const definition = getSchemaDefinition(formSchema)
    const fieldItem = definition[0] as {
      type: "field"
      field: { type: string }
    }

    expect(fieldItem.field.type).toBe("datetime")
  })

  it("sets clearable true for optional fields", () => {
    const formSchema = z.object({
      optionalDate: f0FormField(z.date().optional(), {
        label: "Optional Date",
      }),
    })

    const definition = getSchemaDefinition(formSchema)
    const fieldItem = definition[0] as {
      type: "field"
      field: { clearable?: boolean }
    }

    expect(fieldItem.field.clearable).toBe(true)
  })

  it("sets clearable false for required fields", () => {
    const formSchema = z.object({
      requiredDate: f0FormField(z.date(), { label: "Required Date" }),
    })

    const definition = getSchemaDefinition(formSchema)
    const fieldItem = definition[0] as {
      type: "field"
      field: { clearable?: boolean }
    }

    expect(fieldItem.field.clearable).toBe(false)
  })

  it("sets clearable true for z.string() without constraints", () => {
    const formSchema = z.object({
      notes: f0FormField(z.string(), { label: "Notes" }),
    })

    const definition = getSchemaDefinition(formSchema)
    const fieldItem = definition[0] as {
      type: "field"
      field: { clearable?: boolean }
    }

    expect(fieldItem.field.clearable).toBe(true)
  })

  it("sets clearable false for z.string().url()", () => {
    const formSchema = z.object({
      website: f0FormField(z.string().url(), { label: "Website" }),
    })

    const definition = getSchemaDefinition(formSchema)
    const fieldItem = definition[0] as {
      type: "field"
      field: { clearable?: boolean }
    }

    expect(fieldItem.field.clearable).toBe(false)
  })
})
