import { describe, expect, it } from "vitest"
import { z } from "zod"

import { f0FormField } from "../../../f0Schema"
import { getSchemaDefinition } from "../../../useSchemaDefinition"

const itemSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
})

/** Reads the single entitiesList field out of a one-field form schema. */
function getEntitiesListField(schema: z.ZodObject<z.ZodRawShape>) {
  const definition = getSchemaDefinition(schema)
  const item = definition[0] as {
    type: "field"
    field: Record<string, unknown> & { type: string }
  }
  return item.field
}

describe("f0FormField.entitiesList — schema", () => {
  it("builds a z.array of the item schema, required by default (min 1)", () => {
    const schema = z.object({
      links: f0FormField.entitiesList({ label: "Links", schema: itemSchema }),
    })

    expect(schema.shape.links._def.typeName).toBe("ZodArray")
    // Required by default → an empty array fails.
    expect(schema.safeParse({ links: [] }).success).toBe(false)
    expect(
      schema.safeParse({
        links: [{ title: "A", url: "https://example.com" }],
      }).success
    ).toBe(true)
  })

  it("honors optional (empty array allowed)", () => {
    const schema = z.object({
      links: f0FormField.entitiesList({
        label: "Links",
        schema: itemSchema,
        optional: true,
      }),
    })
    expect(schema.safeParse({ links: [] }).success).toBe(true)
    expect(schema.safeParse({}).success).toBe(true)
  })

  it("enforces minItems and maxItems", () => {
    const schema = z.object({
      links: f0FormField.entitiesList({
        label: "Links",
        schema: itemSchema,
        config: { minItems: 2, maxItems: 3 },
      }),
    })
    const row = { title: "A", url: "https://example.com" }
    expect(schema.safeParse({ links: [row] }).success).toBe(false)
    expect(schema.safeParse({ links: [row, row] }).success).toBe(true)
    expect(schema.safeParse({ links: [row, row, row, row] }).success).toBe(
      false
    )
  })
})

describe("f0FormField.entitiesList — resolved field", () => {
  it("resolves to an entitiesList field carrying the item schema", () => {
    const field = getEntitiesListField(
      z.object({
        links: f0FormField.entitiesList({ label: "Links", schema: itemSchema }),
      })
    )
    expect(field.type).toBe("entitiesList")
    expect(field.itemSchema).toBeDefined()
  })

  it("threads every config option onto the field", () => {
    const rowActions = () => []
    const field = getEntitiesListField(
      z.object({
        links: f0FormField.entitiesList({
          label: "Links",
          schema: itemSchema,
          config: {
            sortable: false,
            canAddItems: false,
            supportInlineEditing: true,
            editableIds: ["a", "b"],
            maxItems: 5,
            labels: { addButton: "Add link" },
            columns: { url: { label: "URL", hidden: false, width: 200 } },
            rowActions,
          },
        }),
      })
    )

    expect(field.sortable).toBe(false)
    expect(field.canAddItems).toBe(false)
    expect(field.supportInlineEditing).toBe(true)
    expect(field.editableIds).toEqual(["a", "b"])
    expect(field.maxItems).toBe(5)
    expect(field.labels).toEqual({ addButton: "Add link" })
    expect(field.columns).toEqual({
      url: { label: "URL", hidden: false, width: 200 },
    })
    expect(field.rowActions).toBe(rowActions)
  })
})
