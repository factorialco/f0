import type { F0FormDefinitionSingleSchema } from "@/patterns/F0WizardForm/types"

import type { F0FormSchema } from "../types"

import {
  createF0FormTester,
  type CreateF0FormTesterOptions,
  type F0FormTester,
} from "./createF0FormTester"

/**
 * Creates a headless form tester from a form definition object returned by
 * `useF0FormDefinition`. Extracts the `schema` and `defaultValues` from the
 * definition and delegates to `createF0FormTester`.
 *
 * This is the recommended way to unit-test the validation logic of a form
 * definition hook without mounting any React components.
 *
 * @example
 * ```ts
 * // useEmployeeForm.ts
 * export function useEmployeeForm(employee: Employee) {
 *   return useF0FormDefinition({
 *     name: "employee-form",
 *     schema: employeeSchema,
 *     defaultValues: { name: employee.name, email: employee.email },
 *     onSubmit: async ({ data }) => updateEmployee(data),
 *   })
 * }
 *
 * // useEmployeeForm.test.ts
 * it("requires name and email", async () => {
 *   const { result } = zeroRenderHook(() =>
 *     useEmployeeForm({ name: "", email: "" })
 *   )
 *   const tester = createF0FormDefinitionTester(result.current)
 *
 *   const { errors } = await tester.validate()
 *   expect(errors).toHaveProperty("name")
 *   expect(errors).toHaveProperty("email")
 * })
 *
 * it("is valid when required fields are filled", async () => {
 *   const { result } = zeroRenderHook(() =>
 *     useEmployeeForm({ name: "", email: "" })
 *   )
 *   const tester = createF0FormDefinitionTester(result.current)
 *
 *   const { valid } = await tester.validate({ name: "Alice", email: "alice@example.com" })
 *   expect(valid).toBe(true)
 * })
 * ```
 */
export function createF0FormDefinitionTester<TSchema extends F0FormSchema>(
  definition: F0FormDefinitionSingleSchema<TSchema>,
  options?: Pick<CreateF0FormTesterOptions<TSchema>, "errorMap">
): F0FormTester<TSchema> {
  return createF0FormTester({
    schema: definition.schema,
    defaultValues: definition.defaultValues,
    errorMap: options?.errorMap,
    // Adapt the definition's onSubmit ({ data }) signature to the tester's (data) signature
    onSubmit: (data) => definition.onSubmit({ data }),
  })
}
