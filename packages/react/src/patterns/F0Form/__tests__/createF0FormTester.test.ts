import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import { useF0FormDefinition } from "@/patterns/F0WizardForm/useF0FormDefinition"
import { zeroRenderHook } from "@/testing/test-utils"

import { f0FormField } from "../f0Schema"
import { createF0FormDefinitionTester } from "../testing/createF0FormDefinitionTester"
import { createF0FormTester } from "../testing/createF0FormTester"

// =============================================================================
// Shared test schemas
// =============================================================================

const contactSchema = z.object({
  name: f0FormField(z.string().min(1), { label: "Name" }),
  email: f0FormField(z.string().email(), { label: "Email" }),
  phone: f0FormField(z.string().optional(), { label: "Phone" }),
})

const conditionalSchema = z.object({
  type: f0FormField(z.string().min(1), { label: "Type" }),
  details: f0FormField(z.string().min(1), {
    label: "Details",
    renderIf: ({ values }) => values["type"] === "advanced",
  }),
})

const refinedSchema = z
  .object({
    password: f0FormField(z.string().min(8), { label: "Password" }),
    confirm: f0FormField(z.string().min(1), { label: "Confirm password" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  })

const SSN_REGEX = /^\d{3}-\d{2}-\d{4}$/

const employeeSchema = z.object({
  name: f0FormField(z.string().min(1), { label: "Full name" }),
  ssn: f0FormField(
    z.string().regex(SSN_REGEX, "SSN must be in the format XXX-XX-XXXX"),
    { label: "Social Security Number", placeholder: "123-45-6789" }
  ),
})

// =============================================================================
// createF0FormTester
// =============================================================================

describe("createF0FormTester", () => {
  describe("validate()", () => {
    it("returns errors for all required fields when called with no values", async () => {
      const tester = createF0FormTester({ schema: contactSchema })

      const { valid, errors } = await tester.validate()

      expect(valid).toBe(false)
      expect(errors).toHaveProperty("name")
      expect(errors).toHaveProperty("email")
    })

    it("does not report errors for optional fields left empty", async () => {
      const tester = createF0FormTester({ schema: contactSchema })

      const { errors } = await tester.validate({
        name: "Alice",
        email: "alice@example.com",
      })

      expect(errors).not.toHaveProperty("phone")
    })

    it("returns valid when all required fields are filled", async () => {
      const tester = createF0FormTester({ schema: contactSchema })

      const { valid } = await tester.validate({
        name: "Alice",
        email: "alice@example.com",
      })

      expect(valid).toBe(true)
    })

    it("reports an error when the email format is invalid", async () => {
      const tester = createF0FormTester({ schema: contactSchema })

      const { errors } = await tester.validate({
        name: "Alice",
        email: "not-an-email",
      })

      expect(errors).toHaveProperty("email")
    })

    it("merges provided values on top of defaultValues", async () => {
      const tester = createF0FormTester({
        schema: contactSchema,
        defaultValues: { name: "Alice", email: "alice@example.com" },
      })

      // Override only email — name comes from defaultValues
      const { valid, errors } = await tester.validate({ email: "bad" })

      expect(valid).toBe(false)
      expect(errors).toHaveProperty("email")
      expect(errors).not.toHaveProperty("name")
    })

    it("is valid when all defaults are already complete", async () => {
      const tester = createF0FormTester({
        schema: contactSchema,
        defaultValues: { name: "Alice", email: "alice@example.com" },
      })

      const { valid } = await tester.validate()

      expect(valid).toBe(true)
    })

    it("treats null values the same as undefined (clearable field behaviour)", async () => {
      const tester = createF0FormTester({ schema: contactSchema })

      const { errors } = await tester.validate({
        name: null as unknown as string,
        email: "alice@example.com",
      })

      // null → undefined, which fails the required check
      expect(errors).toHaveProperty("name")
    })
  })

  describe("validate() — renderIf conditions", () => {
    it("skips validation for fields whose renderIf evaluates to false", async () => {
      const tester = createF0FormTester({ schema: conditionalSchema })

      // type="basic" → details field renderIf is false → not validated
      const { errors } = await tester.validate({ type: "basic" })

      expect(errors).not.toHaveProperty("details")
    })

    it("validates fields whose renderIf evaluates to true", async () => {
      const tester = createF0FormTester({ schema: conditionalSchema })

      // type="advanced" → details field is visible → required
      const { errors } = await tester.validate({ type: "advanced" })

      expect(errors).toHaveProperty("details")
    })

    it("passes when a visible conditional field is filled", async () => {
      const tester = createF0FormTester({ schema: conditionalSchema })

      const { valid } = await tester.validate({
        type: "advanced",
        details: "some details",
      })

      expect(valid).toBe(true)
    })
  })

  describe("validate() — schema refinements (.refine)", () => {
    it("runs cross-field refinements and reports the error on the correct path", async () => {
      const tester = createF0FormTester({ schema: refinedSchema })

      const { errors } = await tester.validate({
        password: "correct-horse",
        confirm: "different",
      })

      expect(errors).toHaveProperty("confirm")
    })

    it("passes when refinement conditions are met", async () => {
      const tester = createF0FormTester({ schema: refinedSchema })

      const { valid } = await tester.validate({
        password: "correct-horse",
        confirm: "correct-horse",
      })

      expect(valid).toBe(true)
    })
  })

  describe("validate() — regex validation (SSN)", () => {
    it("requires SSN when the field is empty", async () => {
      const tester = createF0FormTester({ schema: employeeSchema })

      const { errors } = await tester.validate({ name: "Alice" })

      expect(errors).toHaveProperty("ssn")
    })

    it("rejects an SSN missing the dashes", async () => {
      const tester = createF0FormTester({ schema: employeeSchema })

      const { errors } = await tester.validate({
        name: "Alice",
        ssn: "123456789",
      })

      expect(errors.ssn).toBe("SSN must be in the format XXX-XX-XXXX")
    })

    it("rejects an SSN with letters", async () => {
      const tester = createF0FormTester({ schema: employeeSchema })

      const { errors } = await tester.validate({
        name: "Alice",
        ssn: "ABC-DE-FGHI",
      })

      expect(errors).toHaveProperty("ssn")
    })

    it("rejects an SSN with incorrect segment lengths", async () => {
      const tester = createF0FormTester({ schema: employeeSchema })

      const { errors } = await tester.validate({
        name: "Alice",
        ssn: "12-345-6789",
      })

      expect(errors).toHaveProperty("ssn")
    })

    it("accepts a correctly formatted SSN", async () => {
      const tester = createF0FormTester({ schema: employeeSchema })

      const { valid } = await tester.validate({
        name: "Alice",
        ssn: "123-45-6789",
      })

      expect(valid).toBe(true)
    })
  })

  describe("validateField()", () => {
    it("returns only the error for the specified field", async () => {
      const tester = createF0FormTester({ schema: contactSchema })

      const result = await tester.validateField("email", {
        name: "Alice",
        email: "bad",
      })

      expect(result.valid).toBe(false)
      expect(result.errors).toHaveProperty("email")
      expect(Object.keys(result.errors)).toHaveLength(1)
    })

    it("returns valid when the specified field passes", async () => {
      const tester = createF0FormTester({ schema: contactSchema })

      const result = await tester.validateField("name", { name: "Alice" })

      expect(result.valid).toBe(true)
      expect(result.errors).toEqual({})
    })
  })
})

describe("describeFields()", () => {
  it("returns a description for each field in the schema", () => {
    const tester = createF0FormTester({ schema: contactSchema })

    const fields = tester.describeFields()

    expect(fields.map((f) => f.name)).toEqual(["name", "email", "phone"])
  })

  it("marks required fields correctly", () => {
    const tester = createF0FormTester({ schema: contactSchema })

    const fields = tester.describeFields()
    const nameField = fields.find((f) => f.name === "name")
    const phoneField = fields.find((f) => f.name === "phone")

    expect(nameField?.required).toBe(true)
    expect(phoneField?.required).toBe(false)
  })
})

describe("getDefaultValues()", () => {
  it("returns the default values provided at creation", () => {
    const defaults = { name: "Alice", email: "alice@example.com" }
    const tester = createF0FormTester({
      schema: contactSchema,
      defaultValues: defaults,
    })

    expect(tester.getDefaultValues()).toEqual(defaults)
  })

  it("returns undefined when no defaults are provided", () => {
    const tester = createF0FormTester({ schema: contactSchema })
    expect(tester.getDefaultValues()).toBeUndefined()
  })
})

describe("getVisibleFields()", () => {
  it("includes fields with no renderIf condition", () => {
    const tester = createF0FormTester({ schema: conditionalSchema })

    const visible = tester.getVisibleFields({ type: "basic" })

    expect(visible).toContain("type")
  })

  it("excludes conditional fields when renderIf is false", () => {
    const tester = createF0FormTester({ schema: conditionalSchema })

    const visible = tester.getVisibleFields({ type: "basic" })

    expect(visible).not.toContain("details")
  })

  it("includes conditional fields when renderIf is true", () => {
    const tester = createF0FormTester({ schema: conditionalSchema })

    const visible = tester.getVisibleFields({ type: "advanced" })

    expect(visible).toContain("details")
  })
})

// =============================================================================
// createF0FormDefinitionTester
// =============================================================================

describe("createF0FormDefinitionTester", () => {
  it("validates using the schema from the form definition", async () => {
    const { result } = zeroRenderHook(() =>
      useF0FormDefinition({
        name: "test-form",
        schema: contactSchema,
        defaultValues: { name: "", email: "" },
        onSubmit: async () => ({ success: true }),
      })
    )

    const tester = createF0FormDefinitionTester(result.current)

    const { errors } = await tester.validate()

    expect(errors).toHaveProperty("name")
    expect(errors).toHaveProperty("email")
  })

  it("merges definition defaultValues with test-time overrides", async () => {
    const { result } = zeroRenderHook(() =>
      useF0FormDefinition({
        name: "test-form",
        schema: contactSchema,
        defaultValues: { name: "Alice" },
        onSubmit: async () => ({ success: true }),
      })
    )

    const tester = createF0FormDefinitionTester(result.current)

    // name comes from defaultValues — only email is missing
    const { errors } = await tester.validate()

    expect(errors).not.toHaveProperty("name")
    expect(errors).toHaveProperty("email")
  })

  it("reports valid when all required fields are satisfied", async () => {
    const { result } = zeroRenderHook(() =>
      useF0FormDefinition({
        name: "test-form",
        schema: contactSchema,
        onSubmit: async () => ({ success: true }),
      })
    )

    const tester = createF0FormDefinitionTester(result.current)

    const { valid } = await tester.validate({
      name: "Alice",
      email: "alice@example.com",
    })

    expect(valid).toBe(true)
  })

  describe("submit()", () => {
    it("calls onSubmit and returns success when validation passes", async () => {
      const { result } = zeroRenderHook(() =>
        useF0FormDefinition({
          name: "test-form",
          schema: contactSchema,
          onSubmit: async () => ({ success: true }),
        })
      )

      const tester = createF0FormDefinitionTester(result.current)

      const submitResult = await tester.submit({
        name: "Alice",
        email: "alice@example.com",
      })

      expect(submitResult.success).toBe(true)
    })

    it("returns server-side field errors from onSubmit without throwing", async () => {
      // Simulates a duplicate-email check that only the server can perform
      const { result } = zeroRenderHook(() =>
        useF0FormDefinition({
          name: "test-form",
          schema: contactSchema,
          onSubmit: async () => ({
            success: false,
            errors: { email: "Email already registered" },
          }),
        })
      )

      const tester = createF0FormDefinitionTester(result.current)

      const submitResult = await tester.submit({
        name: "Alice",
        email: "taken@example.com",
      })

      expect(submitResult.success).toBe(false)
      expect(submitResult.success === false && submitResult.errors?.email).toBe(
        "Email already registered"
      )
    })

    it("returns a root-level error message from onSubmit", async () => {
      const { result } = zeroRenderHook(() =>
        useF0FormDefinition({
          name: "test-form",
          schema: contactSchema,
          onSubmit: async () => ({
            success: false,
            rootMessage: "You do not have permission to update this employee",
          }),
        })
      )

      const tester = createF0FormDefinitionTester(result.current)

      const submitResult = await tester.submit({
        name: "Alice",
        email: "alice@example.com",
      })

      expect(submitResult.success).toBe(false)
      expect(submitResult.success === false && submitResult.rootMessage).toBe(
        "You do not have permission to update this employee"
      )
    })

    it("does not call onSubmit when schema validation fails", async () => {
      const onSubmit = vi.fn().mockResolvedValue({ success: true })

      const { result } = zeroRenderHook(() =>
        useF0FormDefinition({
          name: "test-form",
          schema: contactSchema,
          onSubmit,
        })
      )

      const tester = createF0FormDefinitionTester(result.current)

      // email is invalid — schema validation should block the call
      await tester.submit({ name: "Alice", email: "not-an-email" })

      expect(onSubmit).not.toHaveBeenCalled()
    })

    it("returns validation errors directly when schema validation fails", async () => {
      const { result } = zeroRenderHook(() =>
        useF0FormDefinition({
          name: "test-form",
          schema: contactSchema,
          onSubmit: async () => ({ success: true }),
        })
      )

      const tester = createF0FormDefinitionTester(result.current)

      const submitResult = await tester.submit({ name: "Alice", email: "" })

      expect(submitResult.success).toBe(false)
      expect(
        submitResult.success === false && submitResult.errors?.email
      ).toBeTruthy()
    })
  })
})
