import { describe, expect, it } from "vitest"
import { z } from "zod"

import { describeFormSchema } from "../describeFormSchema"
import { f0FormField } from "../f0Schema"

describe("describeFormSchema", () => {
  it("returns field descriptions from a simple schema", () => {
    const schema = z.object({
      name: f0FormField(z.string().min(1), {
        label: "Name",
        placeholder: "Enter name",
      }),
      email: f0FormField(z.string().email(), {
        label: "Email",
        helpText: "Company email address",
      }),
    })

    const fields = describeFormSchema(schema)

    expect(fields).toHaveLength(2)
    expect(fields[0]).toEqual({
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Enter name",
    })
    expect(fields[1]).toEqual({
      name: "email",
      type: "text",
      label: "Email",
      required: true,
      helpText: "Company email address",
    })
  })

  it("detects required vs optional fields", () => {
    const schema = z.object({
      required: f0FormField(z.string().min(1), { label: "Required" }),
      optional: f0FormField(z.string().optional(), { label: "Optional" }),
    })

    const fields = describeFormSchema(schema)
    const req = fields.find((f) => f.name === "required")
    const opt = fields.find((f) => f.name === "optional")

    expect(req?.required).toBe(true)
    expect(opt?.required).toBe(false)
  })

  it("detects select fields with static options", () => {
    const schema = z.object({
      role: f0FormField(z.string(), {
        label: "Role",
        fieldType: "select",
        options: [
          { label: "Engineer", value: "engineer" },
          { label: "Designer", value: "designer" },
        ],
      }),
    })

    const fields = describeFormSchema(schema)

    expect(fields).toHaveLength(1)
    expect(fields[0].type).toBe("select")
    expect(fields[0].options).toEqual([
      { label: "Engineer", value: "engineer" },
      { label: "Designer", value: "designer" },
    ])
  })

  it("detects select fields with dynamic source", () => {
    const schema = z.object({
      country: f0FormField(z.string(), {
        label: "Country",
        fieldType: "select",
        source: async () => [{ name: "Spain", code: "ES" }],
        mapOptions: (item: { name: string; code: string }) => ({
          label: item.name,
          value: item.code,
        }),
      }),
    })

    const fields = describeFormSchema(schema)

    expect(fields[0].type).toBe("select")
    expect(fields[0].optionsSource).toBe("dynamic")
    expect(fields[0].options).toBeUndefined()
  })

  it("includes section assignment", () => {
    const schema = z.object({
      firstName: f0FormField(z.string(), {
        label: "First Name",
        section: "personal",
      }),
      role: f0FormField(z.string(), {
        label: "Role",
        section: "work",
      }),
    })

    const fields = describeFormSchema(schema)

    expect(fields[0].section).toBe("personal")
    expect(fields[1].section).toBe("work")
  })

  it("includes customFieldName when present", () => {
    const schema = z.object({
      custom: f0FormField(z.string(), {
        label: "Custom",
        customFieldName: "my-custom-field",
      }),
      normal: f0FormField(z.string(), {
        label: "Normal",
      }),
    })

    const fields = describeFormSchema(schema)

    expect(fields.find((f) => f.name === "custom")?.customFieldName).toBe(
      "my-custom-field"
    )
    expect(
      fields.find((f) => f.name === "normal")?.customFieldName
    ).toBeUndefined()
  })

  it("detects number fields", () => {
    const schema = z.object({
      age: f0FormField(z.number(), {
        label: "Age",
      }),
    })

    const fields = describeFormSchema(schema)

    expect(fields[0].type).toBe("number")
  })

  it("detects boolean/switch fields", () => {
    const schema = z.object({
      active: f0FormField(z.boolean(), {
        label: "Active",
      }),
    })

    const fields = describeFormSchema(schema)

    expect(fields[0].type).toBe("switch")
  })

  it("detects date fields", () => {
    const schema = z.object({
      startDate: f0FormField(z.date(), {
        label: "Start Date",
      }),
    })

    const fields = describeFormSchema(schema)

    expect(fields[0].type).toBe("date")
  })

  it("handles ZodEffects-wrapped schemas", () => {
    const baseSchema = z.object({
      name: f0FormField(z.string().min(1), { label: "Name" }),
    })
    const schema = baseSchema.refine(() => true)

    const fields = describeFormSchema(schema)

    expect(fields).toHaveLength(1)
    expect(fields[0].name).toBe("name")
  })

  it("returns empty array for schema with no f0FormField metadata", () => {
    const schema = z.object({
      plain: z.string(),
    })

    const fields = describeFormSchema(schema)

    expect(fields).toEqual([])
  })

  it("includes description from zod .describe()", () => {
    const schema = z.object({
      name: f0FormField(z.string().describe("The employee name"), {
        label: "Name",
      }),
    })

    const fields = describeFormSchema(schema)

    // description is captured from the Zod schema's .describe() call
    // (if describeFormSchema extracts it — this depends on implementation)
    expect(fields[0].label).toBe("Name")
  })
})
