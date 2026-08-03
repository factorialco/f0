import { describe, expect, it } from "vitest"
import { z } from "zod"

import { f0FormField } from "../../../f0Schema"
import { resolveEntitiesListCell } from "../resolveCell"

describe("resolveEntitiesListCell", () => {
  describe("text cells", () => {
    it("maps z.string() to a plain text cell", () => {
      expect(resolveEntitiesListCell(z.string())).toEqual({
        kind: "text",
        inputType: "text",
      })
    })

    it("detects email from a .email() check (leading envelope icon)", () => {
      expect(resolveEntitiesListCell(z.string().email())).toEqual({
        kind: "text",
        inputType: "email",
      })
    })

    it("detects url from a .url() check (leading link icon)", () => {
      expect(resolveEntitiesListCell(z.string().url())).toEqual({
        kind: "text",
        inputType: "url",
      })
    })

    it("recognizes the email/url/textarea shortcuts", () => {
      expect(
        resolveEntitiesListCell(f0FormField.email({ label: "E" }))
      ).toEqual({ kind: "text", inputType: "email" })
      expect(resolveEntitiesListCell(f0FormField.url({ label: "U" }))).toEqual({
        kind: "text",
        inputType: "url",
      })
      expect(
        resolveEntitiesListCell(f0FormField.textarea({ label: "T" }))
      ).toEqual({ kind: "text", inputType: "text" })
    })

    it("unwraps optional strings", () => {
      expect(resolveEntitiesListCell(z.string().optional())).toEqual({
        kind: "text",
        inputType: "text",
      })
    })
  })

  describe("number cells", () => {
    it("maps z.number() to a number cell", () => {
      expect(resolveEntitiesListCell(z.number())).toEqual({ kind: "number" })
    })

    it("maps percentage to a number cell with a % unit", () => {
      expect(
        resolveEntitiesListCell(f0FormField.percentage({ label: "P" }))
      ).toEqual({ kind: "number", units: "%" })
    })
  })

  describe("money cells", () => {
    it("maps money to a money cell with the currency symbol", () => {
      expect(
        resolveEntitiesListCell(
          f0FormField.money({ label: "Salary", currency: "EUR" })
        )
      ).toEqual({ kind: "money", units: "€" })
    })

    it("passes an unknown currency code through as-is", () => {
      expect(
        resolveEntitiesListCell(
          f0FormField.money({ label: "Salary", currency: "ARS" })
        )
      ).toEqual({ kind: "money", units: "ARS" })
    })
  })

  describe("select cells", () => {
    it("maps a z.enum to a select with one option per value", () => {
      expect(resolveEntitiesListCell(z.enum(["People", "Finance"]))).toEqual({
        kind: "select",
        options: [
          { value: "People", label: "People" },
          { value: "Finance", label: "Finance" },
        ],
      })
    })

    it("reads labelled options from the select shortcut", () => {
      const schema = f0FormField.select({
        label: "Role",
        options: [
          { value: "admin", label: "Admin" },
          { value: "editor", label: "Editor" },
        ],
      })
      expect(resolveEntitiesListCell(schema)).toEqual({
        kind: "select",
        options: [
          { value: "admin", label: "Admin" },
          { value: "editor", label: "Editor" },
        ],
      })
    })
  })

  describe("multi-select cells", () => {
    it("maps the multiSelect shortcut to a multiselect cell with labels", () => {
      const schema = f0FormField.multiSelect({
        label: "Tags",
        options: [
          { value: "a", label: "Alpha" },
          { value: "b", label: "Beta" },
        ],
      })
      expect(resolveEntitiesListCell(schema)).toEqual({
        kind: "multiselect",
        options: [
          { value: "a", label: "Alpha" },
          { value: "b", label: "Beta" },
        ],
      })
    })

    it("maps a z.array(z.enum) to a multiselect cell (enum values)", () => {
      expect(resolveEntitiesListCell(z.array(z.enum(["a", "b"])))).toEqual({
        kind: "multiselect",
        options: [
          { value: "a", label: "a" },
          { value: "b", label: "b" },
        ],
      })
    })
  })

  describe("date cells", () => {
    it.each([
      ["z.date()", z.date()],
      ["date shortcut", f0FormField.date({ label: "D" })],
      ["datetime shortcut", f0FormField.datetime({ label: "DT" })],
    ])("maps %s to a date cell", (_name, schema) => {
      expect(resolveEntitiesListCell(schema)).toEqual({ kind: "date" })
    })
  })

  describe("unsupported field types resolve to null (no inline cell)", () => {
    it.each([
      ["boolean", z.boolean()],
      ["boolean shortcut", f0FormField.boolean({ label: "B" })],
      ["checkbox", f0FormField.checkbox({ label: "C" })],
      ["time (no calendar representation)", f0FormField.time({ label: "Ti" })],
      ["richText", f0FormField.richText({ label: "R", optional: true })],
    ])("returns null for %s", (_name, schema) => {
      expect(resolveEntitiesListCell(schema)).toBeNull()
    })
  })
})
