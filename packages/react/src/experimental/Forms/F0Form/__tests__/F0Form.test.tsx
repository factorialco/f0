import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { z } from "zod"

import { F0Form } from "../F0Form"
import type { FormDefinitionItem } from "../types"
import { getFormDefinitionSchema } from "../useFormDefinitionSchema"

describe("F0Form", () => {
  it("renders a basic form with text fields", () => {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "name",
          type: "text",
          label: "Name",
        },
      },
    ]

    render(
      <F0Form
        definition={definition}
        defaultValues={{ name: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByLabelText("Name")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument()
  })

  it("renders form with custom submit label", () => {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "email",
          type: "text",
          inputType: "email",
          label: "Email",
        },
      },
    ]

    render(
      <F0Form
        definition={definition}
        defaultValues={{ email: "" }}
        onSubmit={async () => ({ success: true })}
        submitLabel="Save"
      />
    )

    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument()
  })

  it("can hide the submit button", () => {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "name",
          type: "text",
          label: "Name",
        },
      },
    ]

    render(
      <F0Form
        definition={definition}
        defaultValues={{ name: "" }}
        onSubmit={async () => ({ success: true })}
        showSubmitButton={false}
      />
    )

    expect(
      screen.queryByRole("button", { name: /submit/i })
    ).not.toBeInTheDocument()
  })

  it("renders groups with multiple fields", () => {
    const definition: FormDefinitionItem[] = [
      {
        type: "group",
        group: {
          direction: "row",
          fields: [
            { id: "firstName", type: "text", label: "First Name" },
            { id: "lastName", type: "text", label: "Last Name" },
          ],
        },
      },
    ]

    render(
      <F0Form
        definition={definition}
        defaultValues={{ firstName: "", lastName: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByLabelText("First Name")).toBeInTheDocument()
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument()
  })

  it("renders sections with title and description", () => {
    const definition: FormDefinitionItem[] = [
      {
        type: "section",
        id: "personal",
        section: {
          title: "Personal Information",
          description: "Enter your details",
          fields: [
            {
              type: "field",
              field: { id: "name", type: "text", label: "Name" },
            },
          ],
        },
      },
    ]

    render(
      <F0Form
        definition={definition}
        defaultValues={{ name: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByText("Personal Information")).toBeInTheDocument()
    expect(screen.getByText("Enter your details")).toBeInTheDocument()
  })
})

describe("getFormDefinitionSchema", () => {
  it("extracts schema from field definitions", () => {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "name",
          type: "text",
          label: "Name",
          validation: z.string().min(2),
        },
      },
      {
        type: "field",
        field: {
          id: "age",
          type: "number",
          label: "Age",
          validation: z.number().min(0),
        },
      },
    ]

    const schema = getFormDefinitionSchema(definition)

    expect(schema.shape.name).toBeDefined()
    expect(schema.shape.age).toBeDefined()

    // Test validation
    const validResult = schema.safeParse({ name: "John", age: 25 })
    expect(validResult.success).toBe(true)

    const invalidResult = schema.safeParse({ name: "J", age: -1 })
    expect(invalidResult.success).toBe(false)
  })

  it("extracts schema from groups", () => {
    const definition: FormDefinitionItem[] = [
      {
        type: "group",
        group: {
          direction: "row",
          fields: [
            {
              id: "first",
              type: "text",
              label: "First",
              validation: z.string(),
            },
            {
              id: "second",
              type: "number",
              label: "Second",
              validation: z.number(),
            },
          ],
        },
      },
    ]

    const schema = getFormDefinitionSchema(definition)

    expect(schema.shape.first).toBeDefined()
    expect(schema.shape.second).toBeDefined()
  })

  it("extracts schema from nested sections", () => {
    const definition: FormDefinitionItem[] = [
      {
        type: "section",
        id: "section1",
        section: {
          title: "Section",
          fields: [
            {
              type: "field",
              field: {
                id: "nested",
                type: "text",
                label: "Nested",
                validation: z.string(),
              },
            },
          ],
        },
      },
    ]

    const schema = getFormDefinitionSchema(definition)

    expect(schema.shape.nested).toBeDefined()
  })

  it("uses default validation when not provided", () => {
    const definition: FormDefinitionItem[] = [
      { type: "field", field: { id: "text", type: "text", label: "Text" } },
      {
        type: "field",
        field: { id: "number", type: "number", label: "Number" },
      },
      {
        type: "field",
        field: { id: "checkbox", type: "checkbox", label: "Checkbox" },
      },
    ]

    const schema = getFormDefinitionSchema(definition)

    // Default string validation
    const textResult = schema.shape.text.safeParse("test")
    expect(textResult.success).toBe(true)

    // Default number validation
    const numberResult = schema.shape.number.safeParse(42)
    expect(numberResult.success).toBe(true)

    // Default boolean validation
    const checkboxResult = schema.shape.checkbox.safeParse(true)
    expect(checkboxResult.success).toBe(true)
  })
})
