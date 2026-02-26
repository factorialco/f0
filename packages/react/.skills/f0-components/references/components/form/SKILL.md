---
name: form-validation-schema
description: Comprehensive form management using React Hook Form and Zod. Use when building complex forms requiring schema-based validation, nested data structures, or asynchronous field/submission handling.
---

## Overview
This component pattern integrates React Hook Form for state management and Zod for schema-based validation. It provides a robust way to handle form inputs, validation errors, and submission cycles.

## Core API

### useFormSchema Hook
The primary hook used to initialize form logic with a Zod schema.

- **schema** (required): `ZodSchema | (data: T) => ZodSchema` - The Zod validation schema or a function returning one.
- **defaultValues** (optional): `DefaultValues<T>` - Initial values for the form fields.
- **mode** (optional): `'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all'` - Validation strategy.
- **reValidateMode** (optional): `'onBlur' | 'onChange' | 'onSubmit'` - Re-validation strategy after submission.

## Zod Schema Definition
Define the shape and validation rules of your data using Zod primitives.

### Basic Primitives
- `z.string()`: Validates string input. Use `.min(1)` for required fields.
- `z.number()`: Validates numeric input.
- `z.boolean()`: Validates checkboxes or toggles.
- `z.date()`: Validates date objects.

### Advanced Validations
- **Optional Fields**: Append `.optional()` to allow undefined values.
- **Refine**: Use `.refine((val) => condition, { message: "Error" })` for custom field-level logic.
- **SuperRefine**: Use `.superRefine((data, ctx) => { ... })` for complex cross-field validation.

## Usage Examples

### Basic Form Implementation
```tsx
import { useFormSchema } from './hooks';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(18, "Must be an adult"),
});

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useFormSchema({
    schema,
    defaultValues: { name: '', age: 18 }
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      
      <input type="number" {...register('age', { valueAsNumber: true })} />
      {errors.age && <span>{errors.age.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
};
```

### Cross-Field Validation (superRefine)
Use this pattern when one field's validity depends on another field's value.

```tsx
const passwordSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string(),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ["confirmPassword"],
    });
  }
});
```

## Best Practices
- **Type Safety**: Always infer types from the Zod schema using `z.infer<typeof schema>`.
- **Async Validation**: Use async functions within `.refine()` for server-side checks (e.g., checking if a username is taken).
- **Nested Schemas**: Break down large forms into smaller Zod objects and combine them using `.merge()` or nested objects.
- **Value Transformation**: Use `.transform()` or `valueAsNumber: true` in register to ensure data types match the schema before validation.

## Related Skills
- For the useFormSchema hook implementation details, see the skill in ./references/use-form-schema.md
- For individual input components (TextInput, Checkbox, Select), see the skill in ./references/input-components.md
- For handling complex data collections within forms, see the skill in ./references/use-data-collection.md