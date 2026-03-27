import { describe, expect, test } from "vitest"

import type { RecordType } from "@/hooks/datasource"

import type { Visualization } from "../visualizations/collection"

import {
  escapeCSVCell,
  extractDisplayValue,
  extractTypedCellValue,
  extractColumns,
} from "../utils/csvExport"

type AnyVisualization = Visualization<
  RecordType,
  Record<string, never>,
  Record<string, never>,
  Record<string, never>,
  Record<string, never>,
  Record<string, never>,
  Record<string, never>
>

// ---------------------------------------------------------------------------
// escapeCSVCell
// ---------------------------------------------------------------------------
describe("escapeCSVCell", () => {
  test("returns empty string for null", () => {
    expect(escapeCSVCell(null)).toBe("")
  })

  test("returns empty string for undefined", () => {
    expect(escapeCSVCell(undefined)).toBe("")
  })

  test("converts numbers to string", () => {
    expect(escapeCSVCell(42)).toBe("42")
  })

  test("passes through plain strings", () => {
    expect(escapeCSVCell("hello")).toBe("hello")
  })

  test("wraps values containing commas in quotes", () => {
    expect(escapeCSVCell("hello, world")).toBe('"hello, world"')
  })

  test("wraps values containing newlines in quotes", () => {
    expect(escapeCSVCell("line1\nline2")).toBe('"line1\nline2"')
  })

  test("escapes double quotes by doubling them", () => {
    expect(escapeCSVCell('say "hi"')).toBe('"say ""hi"""')
  })

  test("handles values with both commas and quotes", () => {
    expect(escapeCSVCell('"a", "b"')).toBe('"""a"", ""b"""')
  })

  test("converts booleans to string", () => {
    expect(escapeCSVCell(true)).toBe("true")
    expect(escapeCSVCell(false)).toBe("false")
  })
})

// ---------------------------------------------------------------------------
// extractDisplayValue
// ---------------------------------------------------------------------------
describe("extractDisplayValue", () => {
  test("returns empty string for null / undefined", () => {
    expect(extractDisplayValue(null)).toBe("")
    expect(extractDisplayValue(undefined)).toBe("")
  })

  test("converts primitives to string", () => {
    expect(extractDisplayValue("hello")).toBe("hello")
    expect(extractDisplayValue(42)).toBe("42")
    expect(extractDisplayValue(true)).toBe("true")
  })

  test("formats Date instances as ISO string", () => {
    const d = new Date("2024-06-15T12:00:00Z")
    expect(extractDisplayValue(d)).toBe(d.toISOString())
  })

  test("joins array items with semicolons", () => {
    expect(extractDisplayValue(["a", "b", "c"])).toBe("a; b; c")
  })

  test("filters out empty items in arrays", () => {
    expect(extractDisplayValue(["a", null, "b"])).toBe("a; b")
  })

  // { type, value } wrappers
  test("delegates { type, value } wrappers to extractTypedCellValue", () => {
    expect(
      extractDisplayValue({
        type: "person",
        value: { firstName: "Jane", lastName: "Doe" },
      })
    ).toBe("Jane Doe")
  })

  // Raw typed objects (legacy)
  test("handles raw person objects", () => {
    expect(extractDisplayValue({ firstName: "John", lastName: "Smith" })).toBe(
      "John Smith"
    )
  })

  test("handles objects with label field", () => {
    expect(extractDisplayValue({ label: "Active" })).toBe("Active")
  })

  test("handles objects with text field", () => {
    expect(extractDisplayValue({ text: "Some note" })).toBe("Some note")
  })

  test("handles objects with name field", () => {
    expect(extractDisplayValue({ name: "Acme Corp" })).toBe("Acme Corp")
  })

  test("returns empty string for unknown objects instead of [object Object]", () => {
    expect(extractDisplayValue({ foo: "bar" })).toBe("")
  })
})

// ---------------------------------------------------------------------------
// extractTypedCellValue
// ---------------------------------------------------------------------------
describe("extractTypedCellValue", () => {
  test("returns empty string for null / undefined value", () => {
    expect(extractTypedCellValue("person", null)).toBe("")
    expect(extractTypedCellValue("text", undefined)).toBe("")
  })

  // Identity / entity types
  describe("identity types", () => {
    test("person → full name", () => {
      expect(
        extractTypedCellValue("person", {
          firstName: "Ada",
          lastName: "Lovelace",
        })
      ).toBe("Ada Lovelace")
    })

    test("person with only firstName", () => {
      expect(extractTypedCellValue("person", { firstName: "Ada" })).toBe("Ada")
    })

    test.each(["company", "team", "folder"])("%s → name", (type) => {
      expect(extractTypedCellValue(type, { name: "Engineering" })).toBe(
        "Engineering"
      )
    })

    test("file → name", () => {
      expect(extractTypedCellValue("file", { name: "report.pdf" })).toBe(
        "report.pdf"
      )
    })
  })

  // Tag / status types
  describe("tag / status types", () => {
    test.each(["dotTag", "status", "statusTag", "alertTag", "tag"])(
      "%s → label",
      (type) => {
        expect(extractTypedCellValue(type, { label: "Active" })).toBe("Active")
      }
    )

    test("tagList → semicolon-separated labels", () => {
      expect(
        extractTypedCellValue("tagList", {
          tags: [{ label: "A" }, { label: "B" }, { label: "C" }],
        })
      ).toBe("A; B; C")
    })

    test("tagList with empty tags → empty string", () => {
      expect(extractTypedCellValue("tagList", { tags: [] })).toBe("")
    })

    test("tagList with no tags array → empty string", () => {
      expect(extractTypedCellValue("tagList", {})).toBe("")
    })
  })

  // Numeric types
  describe("numeric types", () => {
    test("number → string representation", () => {
      expect(extractTypedCellValue("number", { number: 42 })).toBe("42")
    })

    test("amount from object", () => {
      expect(extractTypedCellValue("amount", { amount: 1500 })).toBe("1500")
    })

    test("amount from raw number", () => {
      expect(extractTypedCellValue("amount", 99.5)).toBe("99.5")
    })

    test("percentage from object", () => {
      expect(extractTypedCellValue("percentage", { percentage: 75 })).toBe(
        "75%"
      )
    })

    test("percentage from raw number", () => {
      expect(extractTypedCellValue("percentage", 50)).toBe("50")
    })

    test("progressBar with label", () => {
      expect(
        extractTypedCellValue("progressBar", { value: 80, label: "80%" })
      ).toBe("80%")
    })

    test("progressBar without label falls back to value", () => {
      expect(extractTypedCellValue("progressBar", { value: 65 })).toBe("65")
    })
  })

  // Text types
  describe("text types", () => {
    test("text from string value", () => {
      expect(extractTypedCellValue("text", "Hello")).toBe("Hello")
    })

    test("text from object with text field", () => {
      expect(extractTypedCellValue("text", { text: "Hello" })).toBe("Hello")
    })

    test("longText from object", () => {
      expect(extractTypedCellValue("longText", { text: "A long note" })).toBe(
        "A long note"
      )
    })
  })

  // Date
  describe("date", () => {
    test("Date instance", () => {
      const d = new Date("2024-01-15T00:00:00Z")
      expect(extractTypedCellValue("date", d)).toBe(d.toISOString())
    })

    test("date string in object", () => {
      expect(extractTypedCellValue("date", { date: "2024-01-15" })).toBe(
        "2024-01-15"
      )
    })

    test("Date instance in object", () => {
      const d = new Date("2024-06-01T00:00:00Z")
      expect(extractTypedCellValue("date", { date: d })).toBe(d.toISOString())
    })
  })

  // Country
  describe("country", () => {
    test("country with label", () => {
      expect(
        extractTypedCellValue("country", { label: "Spain", code: "ES" })
      ).toBe("Spain")
    })

    test("country with code only", () => {
      expect(extractTypedCellValue("country", { code: "ES" })).toBe("ES")
    })
  })

  // Avatar list
  describe("avatarList", () => {
    test("list of people", () => {
      expect(
        extractTypedCellValue("avatarList", {
          avatarList: [
            { firstName: "Alice", lastName: "A" },
            { firstName: "Bob", lastName: "B" },
          ],
        })
      ).toBe("Alice A; Bob B")
    })

    test("list with name field", () => {
      expect(
        extractTypedCellValue("avatarList", {
          avatarList: [{ name: "Team Alpha" }],
        })
      ).toBe("Team Alpha")
    })

    test("empty list", () => {
      expect(extractTypedCellValue("avatarList", { avatarList: [] })).toBe("")
    })
  })

  // Icon
  test("icon with label", () => {
    expect(extractTypedCellValue("icon", { label: "Star" })).toBe("Star")
  })

  // Sync status
  test("syncStatus from string", () => {
    expect(extractTypedCellValue("syncStatus", "synced")).toBe("synced")
  })

  // Unknown type falls back to extractDisplayValue
  test("unknown type with label falls back gracefully", () => {
    expect(extractTypedCellValue("unknownType", { label: "Fallback" })).toBe(
      "Fallback"
    )
  })

  test("unknown type with unrecognized shape returns empty", () => {
    expect(extractTypedCellValue("unknownType", { x: 1 })).toBe("")
  })
})

// ---------------------------------------------------------------------------
// extractColumns
// ---------------------------------------------------------------------------
describe("extractColumns", () => {
  test("returns empty array when visualization is undefined", () => {
    expect(extractColumns(undefined)).toEqual([])
  })

  test("returns empty array for non-table visualization", () => {
    // Card visualization has no columns to extract for CSV
    const viz = {
      type: "card" as const,
      options: {
        render: () => null,
      },
    }
    expect(extractColumns(viz as AnyVisualization)).toEqual([])
  })

  test("extracts columns from table visualization", () => {
    const viz = {
      type: "table" as const,
      options: {
        columns: [
          { label: "Name", sorting: "name" as const },
          { label: "Email" },
          {
            label: "Status",
            render: (item: { status: string }) => ({
              type: "tag",
              value: { label: item.status },
            }),
          },
        ],
      },
    }

    const columns = extractColumns(viz as AnyVisualization)

    expect(columns).toHaveLength(3)
    expect(columns[0].label).toBe("Name")
    expect(columns[0].field).toBe("name")
    expect(columns[1].label).toBe("Email")
    expect(columns[1].field).toBeUndefined()
  })

  test("column render wraps with extractDisplayValue", () => {
    const viz = {
      type: "table" as const,
      options: {
        columns: [
          {
            label: "Person",
            render: () => ({
              type: "person",
              value: { firstName: "Jane", lastName: "Doe" },
            }),
          },
        ],
      },
    }

    const columns = extractColumns(viz as AnyVisualization)

    // The render function should return a string (extractDisplayValue applied)
    expect(columns[0].render!({} as never)).toBe("Jane Doe")
  })

  test("frozen columns not in columnOrder keep their original position", () => {
    const viz = {
      type: "table" as const,
      options: {
        columns: [
          { id: "supplier", label: "Supplier", order: 0 },
          { id: "name", label: "Name", order: 1 },
          { id: "email", label: "Email", order: 2 },
          { id: "status", label: "Status", order: 3 },
          { id: "amount", label: "Amount", order: 4 },
        ],
      },
    }

    // User moved "amount" from 5th to 2nd position.
    // The frozen "supplier" column is NOT in the saved order because
    // framer-motion's Reorder.Group only tracks Reorder.Item children.
    const columnOrder = ["amount", "name", "email", "status"]

    const columns = extractColumns(
      viz as AnyVisualization,
      undefined,
      columnOrder
    )

    expect(columns.map((c) => c.label)).toEqual([
      "Supplier",
      "Amount",
      "Name",
      "Email",
      "Status",
    ])
  })
})
