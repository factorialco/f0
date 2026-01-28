import { assertType, expectTypeOf } from "vitest"

import type { AllOrNone } from "../allOrNone"

test("should accept all properties", () => {
  type TestType = {
    prop1: string
    prop2: number
    prop3?: boolean
  }

  // Valid: All properties provided
  assertType<AllOrNone<TestType>>({
    prop1: "test",
    prop2: 42,
    prop3: true,
  })

  // Valid: All properties provided (including optional)
  assertType<AllOrNone<TestType>>({
    prop1: "test",
    prop2: 42,
    prop3: false,
  })

  // Valid: All properties undefined
  assertType<AllOrNone<TestType>>({
    prop1: undefined,
    prop2: undefined,
    prop3: undefined,
  })

  // Valid: Empty object (all properties optional and undefined)
  assertType<AllOrNone<TestType>>({})
})

test("should reject partial properties", () => {
  type TestType = {
    prop1: string
    prop2: number
    prop3?: boolean
  }

  // Invalid: Only prop1 provided
  // @ts-expect-error - Partial properties should be rejected
  assertType<AllOrNone<TestType>>({
    prop1: "test",
  })

  // Invalid: Only prop2 provided
  // @ts-expect-error - Partial properties should be rejected
  assertType<AllOrNone<TestType>>({
    prop2: 42,
  })

  // Invalid: prop1 and prop3 provided, but prop2 missing
  // @ts-expect-error - Partial properties should be rejected
  assertType<AllOrNone<TestType>>({
    prop1: "test",
    prop3: true,
  })

  // Invalid: prop1 provided but prop2 undefined (not all undefined)
  // @ts-expect-error - Partial properties should be rejected
  assertType<AllOrNone<TestType>>({
    prop1: "test",
    prop2: undefined,
  })
})

test("should work with single property", () => {
  type SingleProp = {
    prop: string
  }

  // Valid: Property provided
  assertType<AllOrNone<SingleProp>>({ prop: "test" })

  // Valid: Property undefined
  assertType<AllOrNone<SingleProp>>({ prop: undefined })

  // Valid: Empty object
  assertType<AllOrNone<SingleProp>>({})
})

test("should work with all optional properties", () => {
  type AllOptional = {
    prop1?: string
    prop2?: number
  }

  // Valid: All properties provided
  assertType<AllOrNone<AllOptional>>({ prop1: "test", prop2: 42 })

  // Valid: All properties undefined
  assertType<AllOrNone<AllOptional>>({
    prop1: undefined,
    prop2: undefined,
  })

  // Valid: Empty object
  assertType<AllOrNone<AllOptional>>({})

  // Invalid: Only prop1 provided
  // @ts-expect-error - Partial properties should be rejected
  assertType<AllOrNone<AllOptional>>({
    prop1: "test",
  })
})

test("should work with nested object properties", () => {
  type WithNested = {
    prop1: string
    nested: {
      inner: number
    }
  }

  // Valid: All properties provided
  assertType<AllOrNone<WithNested>>({
    prop1: "test",
    nested: { inner: 42 },
  })

  // Valid: All properties undefined
  assertType<AllOrNone<WithNested>>({
    prop1: undefined,
    nested: undefined,
  })

  // Valid: Empty object
  assertType<AllOrNone<WithNested>>({})

  // Invalid: Only prop1 provided
  // @ts-expect-error - Partial properties should be rejected
  assertType<AllOrNone<WithNested>>({
    prop1: "test",
  })
})

test("should work with empty object type", () => {
  type Empty = Record<string, never>

  // Valid: Empty object
  assertType<AllOrNone<Empty>>({})
})

test("should preserve required vs optional distinction", () => {
  type Mixed = {
    required: string
    optional?: number
  }

  // Note: Required<T> makes all properties required, including optional ones
  // So for Mixed type, both required and optional must be provided in the "all" branch
  // Or both must be undefined/omitted in the "none" branch

  // Valid: All properties provided (including optional)
  assertType<AllOrNone<Mixed>>({ required: "test", optional: 42 })

  // Valid: All properties undefined
  assertType<AllOrNone<Mixed>>({
    required: undefined,
    optional: undefined,
  })

  // Valid: Empty object
  assertType<AllOrNone<Mixed>>({})

  // Invalid: Only required provided (optional is missing)
  // @ts-expect-error - Partial properties should be rejected
  assertType<AllOrNone<Mixed>>({
    required: "test",
  })

  // Invalid: Only optional provided
  // @ts-expect-error - Partial properties should be rejected
  assertType<AllOrNone<Mixed>>({
    optional: 42,
  })
})

test("should match expected type structure", () => {
  type TestType = {
    prop1: string
    prop2: number
  }

  // Verify the type structure matches expected union
  expectTypeOf<AllOrNone<TestType>>().toMatchTypeOf<
    { prop1: string; prop2: number } | { prop1?: undefined; prop2?: undefined }
  >()
})
