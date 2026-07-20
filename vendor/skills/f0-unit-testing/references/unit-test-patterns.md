# Unit Test Patterns

## Standard Imports

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

`zeroRender` wraps `@testing-library/react`'s `render` with `TestProviders` that supply:

- `I18nProvider` with `defaultTranslations` (English)
- `L10nProvider` with `locale: "en-US"`
- `DataCollectionStorageProvider` with mock handler
- `UserPlatformProvider` with `showExperimentalWarnings={false}`
- Framer Motion animations disabled globally

Use `zeroRenderHook` for hook-only tests.

## Basic Test

```tsx
describe("F0Button", () => {
  it("calls onClick when clicked", async () => {
    const onClick = vi.fn()
    render(<F0Button label="Click me" onClick={onClick} />)

    await userEvent.click(screen.getByRole("button"))
    expect(onClick).toHaveBeenCalled()
  })
})
```

## Query Priority

1. `getByRole` — preferred
2. `getByText` — user-visible text
3. `getByLabelText` — form elements
4. `getByTestId` — last resort

## userEvent with Fake Timers

When tests need both `userEvent` and fake timers, pass `advanceTimers`:

```tsx
beforeEach(() => { vi.useFakeTimers({ shouldAdvanceTime: true }) })
afterEach(() => { vi.useRealTimers() })

it("shows status after submit", async () => {
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
  render(<F0Form ... />)

  await user.type(screen.getByLabelText("Name"), "updated")
  await waitFor(() => expect(screen.getByText("You have changes pending to be saved")).toBeInTheDocument())
})
```

## vi.hoisted() Pattern

Use when mock values must be available before `vi.mock()` factory runs:

```tsx
const MockToggle = vi.hoisted(() =>
  vi.fn(({ label, selected, onSelectedChange }) => (
    <button
      data-selected={selected}
      onClick={() => onSelectedChange?.(!selected)}
    >
      {label}
    </button>
  ))
)

vi.mock("../F0ButtonToggle/internal/F0ButtonToggle.internal", () => ({
  F0ButtonToggleInternal: MockToggle,
}))
```

## Helper Functions for Multi-Step Interactions

Extract repeated interaction sequences into named helpers:

```tsx
const openSelect = async (user: ReturnType<typeof userEvent.setup>) => {
  user.click(screen.getByRole("combobox"))
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
}

it("shows options when clicked", async () => {
  const user = userEvent.setup()
  render(<F0Select options={mockOptions} onChange={() => {}} />)
  await openSelect(user)
  expect(screen.getByText("Option 1")).toBeInTheDocument()
})
```

## Deferred Promise Pattern

Test loading states by controlling when a promise resolves:

```tsx
it("shows loading while submitting", async () => {
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

  let resolveSubmit: (value: { success: true }) => void
  const onSubmit = vi.fn(() =>
    new Promise<{ success: true }>((resolve) => { resolveSubmit = resolve })
  )

  render(<F0Form onSubmit={onSubmit} ... />)
  await makeFormDirtyAndSubmit(user)

  await waitFor(() => expect(screen.getByText("Saving...")).toBeInTheDocument())

  await act(async () => { resolveSubmit!({ success: true }) })

  await waitFor(() => expect(screen.getByText("Your changes have been saved")).toBeInTheDocument())
})
```

## i18n in Tests

Tests using `zeroRender` automatically get English translations (`defaultTranslations`). Assert on English text directly:

```tsx
await waitFor(() => {
  expect(
    screen.getByText("You have changes pending to be saved")
  ).toBeInTheDocument()
})
```

To test with custom translations, wrap with `I18nProvider`:

```tsx
render(
  <I18nProvider
    translations={{ ...defaultTranslations, actions: { save: "Desar" } }}
  >
    <TestComponent />
  </I18nProvider>
)
```
