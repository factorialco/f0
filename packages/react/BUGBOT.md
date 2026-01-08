# React Package Code Review Guidelines

This file configures automated code review rules for the `packages/react` package. BugBot will apply these guidelines when reviewing changes within this package.

## Component Structure

- ban new components in `experimental` folder, they should be in `components` folder and use the experimentalComponent function from `@/lib/experimental.ts`

### Imports
- **NEVER** import entire React via `import * as React from "react"`
- Import only used React components and functions
- Use named imports: `import { useState, useEffect } from "react"`

### Exports
- Use **named exports** for all components
- Avoid default exports for components
- Ensure a component in `components` or `experimental` is exported in `exports.ts`

### Client Components
- Implement `'use client'` directive **only when necessary**

### Components folder organization
Each component (in folders `components` and `experimental`) should fit this organization:

- `[COMPONENTNAME]`
    - `__tests__` the components tests
    - `__stories__` the storybook files (split documents in multiple ones if needed)
    - `index.tsx` the entrypoint of the components, it should only export, not having the logic
    - `[COMPONENTNAME].tsx` the component code
    - `types.ts` The public types (reexported by `index.tsx`)
    - `internal-types.ts` types we dont want to expose
    - `hooks/` if the component has hook files (`useXXXX.ts`) should be in this folder
    - `components/` if the component have internal subcomponents should be in this folder

Ensure elements `componentes/`, `internal-types` and `internal` files are not exported

- We will try to have one component per file, unless very simple subcomponents

### Components naming

- New Components name should start with `F0`. e.g. `F0Button`
- Recommend to rename the old ones starting with `F1`, `One` or without prefix
- This doesn't apply to subcomponents or private ones

### Private components

Some components like `src/components/F0Button` has some private properties, in this case the component has an internal implementation `src/components/F0Button/internal.tsx`


## Component props
- Ensure the props are and have a funcional meaning. e.g. `only-icon` instead of having `hide-icon` and `hide-label`
- Avoid `className` in public components (can be a private prop)



### `src/ui/`
Ensure those components are no reexported

## TypeScript Standards

### Type Safety
- Use **strict** TypeScript configuration
- **NEVER** use `any` or `as any` to solve type issues
- Prefer **interfaces** over types for public APIs
- Use discriminated unions for complex state
- Export component prop interfaces
- Implement proper generic constraints

### Type Definitions
- Define prop interfaces for all components
- Use proper type inference where possible
- Avoid type assertions unless absolutely necessary

## Testing Requirements

### Test Files
- Name test files with `.test.tsx` or `.test.ts`, **never** with `.spec.ts` or `.specs.ts`
- Import Vitest methods explicitly: `import { describe, it, expect } from "vitest"`
- Do **not** import `@testing-library/jest-dom`

### Test Utilities
- When using `@testing-library/react`, use `zeroRender` from `@/testing/test-utils.tsx` instead of `render`
- `zeroRender` provides mocks for context providers

### Test Coverage
- Write **Vitest** unit tests for utilities, hooks, and components
- Create **Storybook stories** for visual testing
- Include **accessibility tests** using axe-playwright
- Test component variants and edge cases
- Avoid excessive mocking; test behavior, not internals
- Always run tests to confirm changes

## Styling Guidelines

### Tailwind CSS
- Use **Tailwind CSS** with custom configuration for primary styling
- Follow **mobile-first** responsive design
- Utilize container queries where appropriate
- Leverage **shadcn/ui** components as base primitives (avoid modifications unless necessary)

### Design Tokens
- Use Tailwind theme configuration
- Follow **shadcn/ui** token conventions
- Maintain consistent spacing and color scales

### Animation Strategy
- Use CSS animations/transitions for simple interactions
- Leverage **Framer Motion** for complex animations and gestures
- Use **tailwindcss-animate** for common animation patterns

## Code Quality

### Comments
- Avoid writing comments describing "what is it"
- Comments must be rare, highlighting complex parts of the code
- Comments must answer the question "Why?"

### Performance
- Ensure proper cleanup in `useEffect` hooks to prevent memory leaks
- Use React.memo, useMemo, and useCallback appropriately
- Avoid unnecessary re-renders

### Error Handling
- Implement proper error boundaries where needed
- Handle edge cases gracefully
- Provide meaningful error messages

### Accessibility
- Ensure all interactive elements are keyboard accessible
- Use proper ARIA attributes
- Maintain proper focus management
- Test with screen readers

## Common Issues to Check

### React-Specific
- Memory leaks in components (ensure proper cleanup in `useEffect` hooks)
- Missing dependency arrays in hooks
- Improper state updates (mutating state directly)
- Missing key props in lists
- Inefficient re-renders

### TypeScript-Specific
- Use of `any` type
- Missing type definitions
- Incorrect type assertions
- Unused imports or variables
- Avoid cycle imports

### Testing-Specific
- Tests should be real unit tests
- Coverage should be at least 80%
- Missing test coverage for new components
- Tests that mock too much internal implementation
- Missing accessibility tests
- Incorrect test file naming

### Styling-Specific
- Inconsistent use of design tokens
- Missing responsive breakpoints
- Hardcoded values instead of tokens
- Incorrect Tailwind class usage

## Architecture Patterns

- Use functional components
- Follow atomic design principles
- Keep components modular and reusable
- Separate concerns (presentation vs. logic)
- Use custom hooks for shared logic

## Security Considerations

- Validate user inputs in React components
- Sanitize data before rendering
- Avoid dangerouslySetInnerHTML unless absolutely necessary

## Storybook

- Ensure the components have at leat one story file
- Ensure the story docs covers all the properties
- Ensure there is a story called Snapshot which includes `parameters: withSnapshot({}),` to ensure the component has visual regresions tests in chromatic
  e.g.
    ```
    export const Snapshot: Story = {
        parameters: withSnapshot({}),
        render: () => (
            <div className="flex w-fit flex-col gap-2">
            <div className="flex flex-row gap-2">
                <F0AvatarDate date={exampleDate} />
            </div>
            </div>
        ),
    }
    ```