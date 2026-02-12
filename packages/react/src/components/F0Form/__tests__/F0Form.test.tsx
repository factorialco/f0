import React from "react"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"
import { describe, expect, it } from "vitest"
import { z } from "zod"
import userEvent from "@testing-library/user-event"

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
import { evaluateDisabled, evaluateRenderIf } from "../fields/utils"

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

describe("evaluateDisabled", () => {
  it("returns false when disabled is undefined", () => {
    expect(evaluateDisabled(undefined, {})).toBe(false)
  })

  it("returns the boolean value when disabled is a boolean", () => {
    expect(evaluateDisabled(true, {})).toBe(true)
    expect(evaluateDisabled(false, {})).toBe(false)
  })

  it("evaluates the function when disabled is a function", () => {
    const disabledFn = ({ values }: { values: Record<string, unknown> }) =>
      values.status === "archived"

    expect(evaluateDisabled(disabledFn, { status: "archived" })).toBe(true)
    expect(evaluateDisabled(disabledFn, { status: "active" })).toBe(false)
  })

  it("passes values object to the function", () => {
    const disabledFn = ({ values }: { values: Record<string, unknown> }) =>
      (values.count as number) > 10

    expect(evaluateDisabled(disabledFn, { count: 15 })).toBe(true)
    expect(evaluateDisabled(disabledFn, { count: 5 })).toBe(false)
  })

  it("handles complex conditions in function", () => {
    const disabledFn = ({ values }: { values: Record<string, unknown> }) =>
      values.role === "viewer" || values.locked === true

    expect(
      evaluateDisabled(disabledFn, { role: "viewer", locked: false })
    ).toBe(true)
    expect(evaluateDisabled(disabledFn, { role: "admin", locked: true })).toBe(
      true
    )
    expect(evaluateDisabled(disabledFn, { role: "admin", locked: false })).toBe(
      false
    )
  })
})

describe("evaluateRenderIf", () => {
  describe("with condition objects", () => {
    it("evaluates equalsTo condition", () => {
      const condition = { fieldId: "status", equalsTo: "active" }
      expect(evaluateRenderIf(condition, { status: "active" })).toBe(true)
      expect(evaluateRenderIf(condition, { status: "inactive" })).toBe(false)
    })

    it("evaluates notEqualsTo condition", () => {
      const condition = { fieldId: "status", notEqualsTo: "archived" }
      expect(evaluateRenderIf(condition, { status: "active" })).toBe(true)
      expect(evaluateRenderIf(condition, { status: "archived" })).toBe(false)
    })

    it("evaluates isEmpty condition", () => {
      const condition = { fieldId: "name", isEmpty: true }
      expect(evaluateRenderIf(condition, { name: "" })).toBe(true)
      expect(evaluateRenderIf(condition, { name: null })).toBe(true)
      expect(evaluateRenderIf(condition, { name: undefined })).toBe(true)
      expect(evaluateRenderIf(condition, { name: "John" })).toBe(false)
    })

    it("evaluates greaterThan condition", () => {
      const condition = { fieldId: "count", greaterThan: 10 }
      expect(evaluateRenderIf(condition, { count: 15 })).toBe(true)
      expect(evaluateRenderIf(condition, { count: 10 })).toBe(false)
      expect(evaluateRenderIf(condition, { count: 5 })).toBe(false)
    })

    it("evaluates greaterThanOrEqual condition", () => {
      const condition = { fieldId: "count", greaterThanOrEqual: 10 }
      expect(evaluateRenderIf(condition, { count: 15 })).toBe(true)
      expect(evaluateRenderIf(condition, { count: 10 })).toBe(true)
      expect(evaluateRenderIf(condition, { count: 5 })).toBe(false)
    })

    it("evaluates lowerThan condition", () => {
      const condition = { fieldId: "count", lowerThan: 10 }
      expect(evaluateRenderIf(condition, { count: 5 })).toBe(true)
      expect(evaluateRenderIf(condition, { count: 10 })).toBe(false)
      expect(evaluateRenderIf(condition, { count: 15 })).toBe(false)
    })

    it("evaluates lowerThanOrEqual condition", () => {
      const condition = { fieldId: "count", lowerThanOrEqual: 10 }
      expect(evaluateRenderIf(condition, { count: 5 })).toBe(true)
      expect(evaluateRenderIf(condition, { count: 10 })).toBe(true)
      expect(evaluateRenderIf(condition, { count: 15 })).toBe(false)
    })

    it("evaluates includes condition for arrays", () => {
      const condition = { fieldId: "roles", includes: "admin" }
      expect(evaluateRenderIf(condition, { roles: ["admin", "user"] })).toBe(
        true
      )
      expect(evaluateRenderIf(condition, { roles: ["user"] })).toBe(false)
    })

    it("evaluates notIncludes condition for arrays", () => {
      const condition = { fieldId: "roles", notIncludes: "admin" }
      expect(evaluateRenderIf(condition, { roles: ["user"] })).toBe(true)
      expect(evaluateRenderIf(condition, { roles: ["admin", "user"] })).toBe(
        false
      )
    })

    it("evaluates matches condition for regex", () => {
      const condition = { fieldId: "email", matches: /@example\.com$/ }
      expect(evaluateRenderIf(condition, { email: "test@example.com" })).toBe(
        true
      )
      expect(evaluateRenderIf(condition, { email: "test@other.com" })).toBe(
        false
      )
    })
  })

  describe("with function", () => {
    it("evaluates function that returns boolean", () => {
      const renderIfFn = ({ values }: { values: Record<string, unknown> }) =>
        values.status === "active"

      expect(evaluateRenderIf(renderIfFn, { status: "active" })).toBe(true)
      expect(evaluateRenderIf(renderIfFn, { status: "inactive" })).toBe(false)
    })

    it("passes values object to the function", () => {
      const renderIfFn = ({ values }: { values: Record<string, unknown> }) =>
        (values.count as number) >= 50

      expect(evaluateRenderIf(renderIfFn, { count: 50 })).toBe(true)
      expect(evaluateRenderIf(renderIfFn, { count: 49 })).toBe(false)
    })

    it("handles complex conditions in function", () => {
      const renderIfFn = ({ values }: { values: Record<string, unknown> }) =>
        values.role === "admin" && (values.employeeCount as number) > 10

      expect(
        evaluateRenderIf(renderIfFn, { role: "admin", employeeCount: 15 })
      ).toBe(true)
      expect(
        evaluateRenderIf(renderIfFn, { role: "admin", employeeCount: 5 })
      ).toBe(false)
      expect(
        evaluateRenderIf(renderIfFn, { role: "user", employeeCount: 15 })
      ).toBe(false)
    })

    it("can access multiple field values", () => {
      const renderIfFn = ({ values }: { values: Record<string, unknown> }) =>
        values.hasAccount === true && (values.accountId as string)?.length > 0

      expect(
        evaluateRenderIf(renderIfFn, { hasAccount: true, accountId: "ABC123" })
      ).toBe(true)
      expect(
        evaluateRenderIf(renderIfFn, { hasAccount: true, accountId: "" })
      ).toBe(false)
      expect(
        evaluateRenderIf(renderIfFn, { hasAccount: false, accountId: "ABC123" })
      ).toBe(false)
    })
  })
})

describe("f0FormField with dynamic disabled", () => {
  it("supports disabled as boolean", () => {
    const schema = f0FormField(z.string(), {
      label: "Test",
      disabled: true,
    })

    const config = getF0Config(schema)
    expect(config?.disabled).toBe(true)
  })

  it("supports disabled as function", () => {
    const disabledFn = ({ values }: { values: Record<string, unknown> }) =>
      values.status === "readonly"

    const schema = f0FormField(z.string(), {
      label: "Test",
      disabled: disabledFn,
    })

    const config = getF0Config(schema)
    expect(typeof config?.disabled).toBe("function")
  })
})

describe("f0FormField with dynamic renderIf", () => {
  it("supports renderIf as condition object", () => {
    const schema = f0FormField(z.string(), {
      label: "Test",
      renderIf: { fieldId: "status", equalsTo: "active" },
    })

    const config = getF0Config(schema)
    expect(config?.renderIf).toEqual({ fieldId: "status", equalsTo: "active" })
  })

  it("supports renderIf as function", () => {
    const renderIfFn = ({ values }: { values: Record<string, unknown> }) =>
      values.showField === true

    const schema = f0FormField(z.string(), {
      label: "Test",
      renderIf: renderIfFn,
    })

    const config = getF0Config(schema)
    expect(typeof config?.renderIf).toBe("function")
  })
})

describe("F0Form with dynamic disabled", () => {
  it("renders disabled field when disabled function returns true", async () => {
    const formSchema = z.object({
      status: f0FormField(z.string(), {
        label: "Status",
        options: [
          { value: "active", label: "Active" },
          { value: "archived", label: "Archived" },
        ],
      }),
      title: f0FormField(z.string(), {
        label: "Title",
        disabled: ({ values }) => values.status === "archived",
      }),
    })

    render(
      <F0Form
        name="dynamic-disabled-test"
        schema={formSchema}
        defaultValues={{ status: "archived", title: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    const titleInput = screen.getByLabelText("Title")
    expect(titleInput).toBeDisabled()
  })

  it("renders enabled field when disabled function returns false", async () => {
    const formSchema = z.object({
      status: f0FormField(z.string(), {
        label: "Status",
        options: [
          { value: "active", label: "Active" },
          { value: "archived", label: "Archived" },
        ],
      }),
      title: f0FormField(z.string(), {
        label: "Title",
        disabled: ({ values }) => values.status === "archived",
      }),
    })

    render(
      <F0Form
        name="dynamic-disabled-test"
        schema={formSchema}
        defaultValues={{ status: "active", title: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    const titleInput = screen.getByLabelText("Title")
    expect(titleInput).not.toBeDisabled()
  })
})

describe("F0Form with dynamic renderIf", () => {
  it("shows field when renderIf function returns true", async () => {
    const formSchema = z.object({
      showDetails: f0FormField(z.boolean(), {
        label: "Show Details",
        fieldType: "checkbox",
      }),
      details: f0FormField(z.string().optional(), {
        label: "Details",
        renderIf: ({ values }) => values.showDetails === true,
      }),
    })

    render(
      <F0Form
        name="dynamic-renderif-test"
        schema={formSchema}
        defaultValues={{ showDetails: true, details: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByLabelText("Details")).toBeInTheDocument()
  })

  it("hides field when renderIf function returns false", async () => {
    const formSchema = z.object({
      showDetails: f0FormField(z.boolean(), {
        label: "Show Details",
        fieldType: "checkbox",
      }),
      details: f0FormField(z.string().optional(), {
        label: "Details",
        renderIf: ({ values }) => values.showDetails === true,
      }),
    })

    render(
      <F0Form
        name="dynamic-renderif-test"
        schema={formSchema}
        defaultValues={{ showDetails: false, details: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.queryByLabelText("Details")).not.toBeInTheDocument()
  })

  it("toggles field visibility when dependent value changes", async () => {
    const user = userEvent.setup()

    const formSchema = z.object({
      showDetails: f0FormField(z.boolean(), {
        label: "Show Details",
        fieldType: "checkbox",
      }),
      details: f0FormField(z.string().optional(), {
        label: "Details",
        renderIf: ({ values }) => values.showDetails === true,
      }),
    })

    render(
      <F0Form
        name="dynamic-renderif-toggle-test"
        schema={formSchema}
        defaultValues={{ showDetails: false, details: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Initially hidden
    expect(screen.queryByLabelText("Details")).not.toBeInTheDocument()

    // Click checkbox to show
    const checkbox = screen.getByLabelText("Show Details")
    await user.click(checkbox)

    // Now visible
    expect(screen.getByLabelText("Details")).toBeInTheDocument()
  })
})

describe("F0Form with resetOnDisable", () => {
  it("resets field to default value when it becomes disabled", async () => {
    const user = userEvent.setup()

    const formSchema = z.object({
      enableField: f0FormField(z.boolean(), {
        label: "Enable Field",
        fieldType: "checkbox",
      }),
      dependentField: f0FormField(z.string().optional(), {
        label: "Dependent Field",
        disabled: ({ values }) => !values.enableField,
        resetOnDisable: true,
      }),
    })

    render(
      <F0Form
        name="reset-on-disable-test"
        schema={formSchema}
        defaultValues={{ enableField: true, dependentField: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Type some value in the dependent field
    const dependentInput = screen.getByLabelText("Dependent Field")
    await user.type(dependentInput, "some value")
    expect(dependentInput).toHaveValue("some value")

    // Disable the field by unchecking the checkbox
    const checkbox = screen.getByLabelText("Enable Field")
    await user.click(checkbox)

    // Field should be reset to default value (empty string)
    await waitFor(() => {
      expect(dependentInput).toHaveValue("")
    })
    expect(dependentInput).toBeDisabled()
  })

  it("does not reset field when resetOnDisable is false", async () => {
    const user = userEvent.setup()

    const formSchema = z.object({
      enableField: f0FormField(z.boolean(), {
        label: "Enable Field",
        fieldType: "checkbox",
      }),
      dependentField: f0FormField(z.string().optional(), {
        label: "Dependent Field",
        disabled: ({ values }) => !values.enableField,
        // resetOnDisable is not set (defaults to false)
      }),
    })

    render(
      <F0Form
        name="no-reset-on-disable-test"
        schema={formSchema}
        defaultValues={{ enableField: true, dependentField: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Type some value in the dependent field
    const dependentInput = screen.getByLabelText("Dependent Field")
    await user.type(dependentInput, "some value")
    expect(dependentInput).toHaveValue("some value")

    // Disable the field by unchecking the checkbox
    const checkbox = screen.getByLabelText("Enable Field")
    await user.click(checkbox)

    // Field should keep its value (not reset)
    expect(dependentInput).toHaveValue("some value")
    expect(dependentInput).toBeDisabled()
  })

  it("resets to non-empty default value", async () => {
    const user = userEvent.setup()

    const formSchema = z.object({
      enableField: f0FormField(z.boolean(), {
        label: "Enable Field",
        fieldType: "checkbox",
      }),
      dependentField: f0FormField(z.string().optional(), {
        label: "Dependent Field",
        disabled: ({ values }) => !values.enableField,
        resetOnDisable: true,
      }),
    })

    render(
      <F0Form
        name="reset-to-default-test"
        schema={formSchema}
        defaultValues={{ enableField: true, dependentField: "default value" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Clear and type new value
    const dependentInput = screen.getByLabelText("Dependent Field")
    await user.clear(dependentInput)
    await user.type(dependentInput, "new value")
    expect(dependentInput).toHaveValue("new value")

    // Disable the field
    const checkbox = screen.getByLabelText("Enable Field")
    await user.click(checkbox)

    // Field should be reset to default value
    await waitFor(() => {
      expect(dependentInput).toHaveValue("default value")
    })
  })

  it("does not reset when field is already disabled", async () => {
    const formSchema = z.object({
      enableField: f0FormField(z.boolean(), {
        label: "Enable Field",
        fieldType: "checkbox",
      }),
      dependentField: f0FormField(z.string().optional(), {
        label: "Dependent Field",
        disabled: ({ values }) => !values.enableField,
        resetOnDisable: true,
      }),
    })

    // Start with field disabled and with a value
    render(
      <F0Form
        name="already-disabled-test"
        schema={formSchema}
        defaultValues={{ enableField: false, dependentField: "initial value" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Field should have initial value and be disabled
    const dependentInput = screen.getByLabelText("Dependent Field")
    expect(dependentInput).toHaveValue("initial value")
    expect(dependentInput).toBeDisabled()
  })
})

describe("f0FormField with resetOnDisable", () => {
  it("supports resetOnDisable option", () => {
    const schema = f0FormField(z.string(), {
      label: "Test",
      resetOnDisable: true,
    })

    const config = getF0Config(schema)
    expect(config?.resetOnDisable).toBe(true)
  })

  it("defaults resetOnDisable to undefined", () => {
    const schema = f0FormField(z.string(), {
      label: "Test",
    })

    const config = getF0Config(schema)
    expect(config?.resetOnDisable).toBeUndefined()
  })
})

describe("F0Form switch groups with resetOnDisable", () => {
  it("resets switch fields in group when they become disabled", async () => {
    const user = userEvent.setup()

    const formSchema = z.object({
      enableNotifications: f0FormField(z.boolean(), {
        label: "Enable Notifications",
        fieldType: "switch",
      }),
      notifyOnComments: f0FormField(z.boolean(), {
        label: "Notify on Comments",
        fieldType: "switch",
        disabled: ({ values }) => !values.enableNotifications,
        resetOnDisable: true,
      }),
      notifyOnEdits: f0FormField(z.boolean(), {
        label: "Notify on Edits",
        fieldType: "switch",
        disabled: ({ values }) => !values.enableNotifications,
        resetOnDisable: true,
      }),
    })

    render(
      <F0Form
        name="switch-group-reset-test"
        schema={formSchema}
        defaultValues={{
          enableNotifications: true,
          notifyOnComments: false,
          notifyOnEdits: false,
        }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Helper to find switch by label text
    const findSwitch = (label: string) =>
      screen.getByText(label).closest("[role='switch']")!

    // Verify initial state - notifyOnEdits is not selected
    expect(findSwitch("Notify on Edits")).toHaveAttribute(
      "aria-checked",
      "false"
    )

    // Turn on notifyOnEdits
    await user.click(findSwitch("Notify on Edits"))

    // Verify it's now selected
    await waitFor(() => {
      expect(findSwitch("Notify on Edits")).toHaveAttribute(
        "aria-checked",
        "true"
      )
    })

    // Now turn off enableNotifications - this should disable and reset notifyOnEdits
    await user.click(findSwitch("Enable Notifications"))

    // Wait for the reset to happen - notifyOnEdits should be reset to false (default)
    await waitFor(() => {
      expect(findSwitch("Notify on Edits")).toHaveAttribute(
        "aria-checked",
        "false"
      )
    })
  })
})
