# Testing Patterns

## Setup and Imports

### Standard Test File Imports

```tsx
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import {
  zeroRender as render,
  screen,
  waitFor,
  act,
} from "@/testing/test-utils"

import { F0Button } from "../index"
```

Key rules:

- Import Vitest methods explicitly: `import { describe, it, expect } from "vitest"`
- Do **not** import `@testing-library/jest-dom`
- Alias `zeroRender` as `render`: `import { zeroRender as render } from "@/testing/test-utils"`
- Use `vi.fn()` exclusively — never `jest.fn()`

### zeroRender vs render

`zeroRender` wraps `@testing-library/react`'s `render` with `TestProviders` that provide:

- `I18nProvider` with `defaultTranslations` (English)
- `L10nProvider` with `locale: "en-US"`
- `DataCollectionStorageProvider` with mock handler
- `UserPlatformProvider` with `showExperimentalWarnings={false}`
- Framer Motion animations disabled globally

```tsx
// src/testing/test-utils.tsx
const zeroRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => render(ui, { wrapper: TestProviders, ...options })
```

## Basic Test Example

```tsx
// src/components/F0Button/__tests__/F0Button.test.tsx
describe("F0Button", () => {
  it("should call the onClick handler when clicked", async () => {
    const onClick = vi.fn()
    render(<F0Button label="Click me" onClick={() => onClick()} />)

    const button = screen.getByRole("button")
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
```

## Query Priority

Prefer queries in this order:

1. `getByRole` — most accessible
2. `getByText` — user-visible text
3. `getByLabelText` — form elements
4. `getByTestId` — last resort

## userEvent with Fake Timers

When tests need both `userEvent` and fake timers, integrate them via `advanceTimers`:

```tsx
// src/components/F0Form/__tests__/F0FormActionBarStatus.test.tsx
describe("F0Form action bar status flow", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("shows idle label before submitting", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="status-idle-test"
        schema={formSchema}
        defaultValues={{ name: "initial" }}
        onSubmit={onSubmit}
        submitConfig={actionBarConfig}
      />
    )

    const input = screen.getByLabelText("Name")
    await user.clear(input)
    await user.type(input, "updated")

    await waitFor(() => {
      expect(
        screen.getByText("You have changes pending to be saved")
      ).toBeInTheDocument()
    })
  })
})
```

## vi.hoisted() Pattern

Use `vi.hoisted()` when mock values need to be available before `vi.mock()` factory runs:

```tsx
// src/components/F0ButtonToggleGroup/__tests__/F0ButtonToggleGroup.test.tsx

// 1. Hoist the mock component
const MockF0ButtonToggleInternal = vi.hoisted(() => {
  return vi.fn(
    ({
      label,
      disabled,
      size,
      variant,
      selected,
      onSelectedChange,
      ...props
    }) => {
      const displayLabel = Array.isArray(label) ? label[0] : label
      return (
        <button
          data-testid={`toggle-${displayLabel}`}
          data-disabled={disabled}
          data-size={size}
          data-selected={selected}
          onClick={() => onSelectedChange?.(!selected)}
          disabled={disabled}
          {...props}
        >
          {displayLabel}
        </button>
      )
    }
  )
})

// 2. Use hoisted value in mock factory
vi.mock("../F0ButtonToggle/internal/F0ButtonToggle.internal", () => ({
  F0ButtonToggleInternal: MockF0ButtonToggleInternal,
}))
```

Another example — simpler mock:

```tsx
// src/components/F0BigNumber/__tests__/F0BigNumber.test.tsx
const MockF0TagBalance = vi.hoisted(() => {
  return vi.fn(({ percentage, amount, invertStatus, hint }) => (
    <div
      data-testid="tag-balance"
      data-percentage={percentage}
      data-amount={JSON.stringify(amount)}
    >
      TagBalance Mock
    </div>
  ))
})

vi.mock("../tags/F0TagBalance", () => ({
  F0TagBalance: MockF0TagBalance,
}))
```

## Helper Functions for Multi-Step Interactions

Create named helper functions for complex interaction sequences that are reused across tests:

### openSelect()

```tsx
// src/components/F0Select/__tests__/F0Select.test.tsx
const openSelect = async (user: ReturnType<typeof userEvent.setup>) => {
  user.click(screen.getByRole("combobox"))
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  const teaser = screen.getByRole("listbox")
  fireEvent.animationStart(teaser)
}

// Usage:
it("shows options when clicked", async () => {
  const user = userEvent.setup()
  render(
    <F0Select
      {...defaultSelectProps}
      options={mockOptions}
      onChange={() => {}}
    />
  )

  await openSelect(user)

  expect(screen.getByText("Option 1")).toBeInTheDocument()
})
```

### openDropdown()

```tsx
// src/components/F0ButtonDropdown/__tests__/F0ButtonDropdown.test.tsx
const openDropdown = async (user: ReturnType<typeof userEvent.setup>) => {
  user.click(screen.getByTestId("button-menu"))
  await waitFor(() =>
    expect(screen.getByTestId("dropdown")).toHaveAttribute("data-open", "true")
  )
}
```

### makeFormDirtyAndSubmit()

```tsx
// src/components/F0Form/__tests__/F0FormActionBarStatus.test.tsx
async function makeFormDirtyAndSubmit(
  user: ReturnType<typeof userEvent.setup>
) {
  const input = screen.getByLabelText("Name")
  await user.clear(input)
  await user.type(input, "updated")

  await waitFor(() => {
    expect(
      screen.getByText("You have changes pending to be saved")
    ).toBeInTheDocument()
  })

  const submitButtons = screen.getAllByText("Submit")
  await user.click(submitButtons[0])
}
```

## Deferred Promise Pattern

For testing async behavior (loading states, pending operations), create a promise with an externally stored resolver:

```tsx
// src/components/F0Form/__tests__/F0FormActionBarStatus.test.tsx
it("shows loading status while submitting", async () => {
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

  // Store resolver externally
  let resolveSubmit: (value: { success: true }) => void
  const onSubmit = vi.fn(
    () =>
      new Promise<{ success: true }>((resolve) => {
        resolveSubmit = resolve
      })
  )

  render(
    <F0Form
      name="status-loading-test"
      schema={formSchema}
      defaultValues={{ name: "initial" }}
      onSubmit={onSubmit}
      submitConfig={actionBarConfig}
    />
  )

  await makeFormDirtyAndSubmit(user)

  // Assert loading state while promise is pending
  await waitFor(() => {
    expect(screen.getByText("Saving...")).toBeInTheDocument()
  })

  // Resolve externally to transition state
  await act(async () => {
    resolveSubmit!({ success: true })
  })

  await waitFor(() => {
    expect(screen.getByText("Your changes have been saved")).toBeInTheDocument()
  })
})
```

## Test Coverage Rules

- No snapshot testing — use explicit assertions only
- a11y automated testing via Storybook (axe-playwright), not in unit tests
- Coverage target: at least 80%
- Test behavior, not implementation details
- Always run tests to confirm changes: `pnpm vitest` or `pnpm vitest:ci`
