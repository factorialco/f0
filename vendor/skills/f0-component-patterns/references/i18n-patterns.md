# i18n Patterns

## useI18n Hook

Defined in `src/lib/providers/i18n/i18n-provider.tsx`. Returns the full translations object (for direct property access) intersected with a `t()` function (for dot-notation key lookup with interpolation):

```tsx
export function useI18n(): TranslationsType & {
  t: (key: TranslationKey, args?: Record<string, string | number>) => string
} {
  const context = useContext(I18nContext)
  if (context === null) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
```

The `t()` function supports `{{placeholder}}` interpolation:

```tsx
const t = (key: TranslationKey, args: Record<string, string | number> = {}) => {
  let translation = getKey(key, translations)
  if (translation === undefined) {
    console.warn(`Translation key ${key} not found`)
    return key
  }
  for (const [key, value] of Object.entries(args)) {
    translation = translation.replace(`{{${key}}}`, value.toString())
  }
  return translation
}
```

## Variable Naming Conventions

### Direct property access only

```tsx
const i18n = useI18n()
// Access: i18n.actions.save, i18n.filters.clearAll
```

### t() function only

```tsx
const { t } = useI18n()
// Access: t("coCreationForm.answer.placeholder")
```

### Both patterns combined

```tsx
const { t, ...i18n } = useI18n()
// Direct: i18n.status.selected.singular
// t(): t("status.selected.allItemsSelected", { total: totalItems })
```

## Usage Examples

### Direct Property Access

```tsx
// src/components/F0Select/components/SelectBottomActions.tsx
const i18n = useI18n()
<F0Button onClick={onApply} label={i18n.select.applySelection} />

// src/components/F0Form/F0Form.tsx
const i18n = useI18n()
const { forms } = i18n
issuesOneLabel={forms.actionBar.issues.one}
issuesOtherLabel={forms.actionBar.issues.other}
```

### t() with Interpolation

```tsx
// src/sds/CoCreationForm/SelectQuestion/index.tsx
const { t } = useI18n()

const newOption = {
  value: `new-option-${optionsLength + 1}`,
  label: t("coCreationForm.selectQuestion.newOption", {
    number: optionsLength + 1,
  }),
}

<F0Button label={t("coCreationForm.selectQuestion.addOption")} />
```

### Both Patterns Combined

```tsx
// src/experimental/OneDataCollection/components/ActionBar/index.tsx
const { t, ...i18n } = useI18n()

// Direct for simple lookups
const selectedText =
  selectedNumber === 1
    ? i18n.status.selected.singular
    : i18n.status.selected.plural

// t() for interpolation
{
  t("status.selected.allItemsSelected", { total: totalItems ?? 0 })
}

// Direct for labels
;<F0Button
  variant="outline"
  label={i18n.actions.unselect}
  onClick={onUnselect}
/>
```

## defaultTranslations

Full English translation object defined in `src/lib/providers/i18n/i18n-provider-defaults.ts` with `as const` assertion for type safety. Structure overview:

```ts
export const defaultTranslations = {
  countries: i18nCountries,
  approvals: {
    history: "Approval history",
    statuses: {
      waiting: "Waiting",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected",
    },
    requiredNumbers: {
      one: "One approval required",
      other: "{{count}} approvals required", // plural with interpolation
    },
  },
  navigation: {
    sidebar: {
      label: "Main navigation",
      companySelector: {
        /* ... */
      },
    },
    previous: "Previous",
    next: "Next",
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    send: "Send",
    cancel: "Cancel",
    delete: "Delete" /* ... */,
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected",
      all: "All selected",
      selectAllItems: "Select all {{total}} items", // interpolation
      allItemsSelected: "All {{total}} items selected", // interpolation
    },
  },
  filters: {
    searchPlaceholder: "Search filters...",
    activeFilters: "Active filters: {{filters}}", // interpolation
    /* ... */
  },
  forms: {
    actionBar: {
      unsavedChanges: "You have changes pending to be saved",
      saving: "Saving...",
      saved: "Your changes have been saved",
      issues: { one: "{{count}} issue", other: "{{count}} issues" }, // plurals
    },
    validation: {
      required: "This field is required",
      string: {
        email: "Enter a valid email address",
        min: "Must be at least {{min}} characters",
      },
    },
  },
  // ... more: date, ai, select, numberInput, richTextEditor, etc.
} as const
```

## TranslationsType and TranslationShape

```ts
// src/lib/providers/i18n/i18n-provider-defaults.ts

// Recursively widens literal string types to `string`
type TranslationShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, string | Record<string, unknown>>
      ? TranslationShape<T[K]>
      : never
}

// Generates all valid dot-separated key paths for type-safe t() calls
type PathsToStringProps<T> = T extends string
  ? []
  : { [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>] }[Extract<keyof T, string>]

type Join<T extends string[], D extends string> = /* recursive string join */

export type TranslationKey = Join<PathsToStringProps<typeof defaultTranslations>, ".">
export type TranslationsType = TranslationShape<typeof defaultTranslations>
```

- `TranslationsType` enforces the same nested structure as `defaultTranslations` but allows any string values at the leaves — used by consumers providing translation overrides
- `TranslationKey` is a union of all valid dot-separated paths (e.g., `"actions.save"`, `"forms.actionBar.issues.one"`) — used by the `t()` function for type-safe key lookup

## Pluralization

The library does **not** have a built-in plural resolver. Pluralization is done manually using `one`/`other` sub-keys:

```ts
// Translation definition
issues: {
  one: "{{count}} issue",
  other: "{{count}} issues",
},
```

```tsx
// Manual pluralization in components
const displayApprovalsRequired =
  approvalsRequired === 1
    ? translations.approvals.requiredNumbers.one
    : translations.approvals.requiredNumbers.other.replace(
        "{{count}}",
        approvalsRequired.toString()
      )
```

## Translation Key Conventions

- **camelCase** for all keys
- **Domain-namespaced**: `actions.save`, `filters.clearAll`, `forms.validation.required`
- **`one`/`other` sub-keys** for plurals
- **`{{placeholder}}`** for interpolation values

## i18n in Tests

### Default: zeroRender provides English automatically

Tests using `zeroRender` automatically get `defaultTranslations` (English). Assert on English text directly:

```tsx
await waitFor(() => {
  expect(
    screen.getByText("You have changes pending to be saved")
  ).toBeInTheDocument()
})
```

### Custom translations in tests

```tsx
// src/lib/providers/i18n/i18n-provider.spec.tsx
import { I18nProvider, TranslationsType, useI18n } from "./i18n-provider"
import { defaultTranslations } from "./i18n-provider-defaults"

it("allows overriding translations", () => {
  const customTranslations: TranslationsType = {
    ...defaultTranslations,
    actions: {
      ...defaultTranslations.actions,
      save: "Desar",
      cancel: "Cancelar",
    },
  }

  render(
    <I18nProvider translations={customTranslations}>
      <TestComponent />
    </I18nProvider>
  )

  expect(screen.getByTestId("translation")).toHaveTextContent("Desar")
})
```
