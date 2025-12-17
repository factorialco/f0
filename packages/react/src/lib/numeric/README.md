# Numeric Formatter

A utility library for formatting numeric values with support for units, custom
locales, and decimal precision.

## Overview

The numeric formatter provides a flexible way to format numbers with optional
units, supporting both direct numeric values and values stored as integers
multiplied by 100 (useful for avoiding floating-point precision issues).

## Features

- Format numbers with custom decimal places
- Support for multiple locales
- Optional units (currency symbols, measurements, etc.)
- Units can be prepended or appended
- Support for `value` (direct) and `value_x100` (integer × 100) formats
- Uses `Intl.NumberFormat` for reliable internationalization

## Usage

### Basic Usage

```tsx
import { numericFormatter } from "@/lib/numeric"
import type { NumericValue } from "@/lib/numeric"

// Format a simple number
const value: NumericValue = { value: 123.456 }
const formatted = numericFormatter(value)
// Result: "123.46"
```

### With Units

```tsx
// Append units (default)
const value: NumericValue = { value: 123.45, units: "€" }
const formatted = numericFormatter(value)
// Result: "123.45€"

// Prepend units
const valueWithPrepend: NumericValue = {
  value: 123.45,
  units: "$",
  unitsPosition: "prepend",
}
const formatted = numericFormatter(valueWithPrepend)
// Result: "$123.45"
```

### Using value_x100 Format

The `value_x100` format is useful when you need to avoid floating-point
precision issues by storing values as integers:

```tsx
// Store 123.45 as 12345 (integer)
const value: NumericValue = { value_x100: 12345 }
const formatted = numericFormatter(value)
// Result: "123.45"

// With units
const valueWithUnits: NumericValue = {
  value_x100: 12345,
  units: "€",
}
const formatted = numericFormatter(valueWithUnits)
// Result: "123.45€"
```

### Custom Options

```tsx
// Custom decimal places
const value: NumericValue = { value: 123.456789 }
const formatted = numericFormatter(value, { decimalPlaces: 4 })
// Result: "123.4568"

// Custom locale
const value: NumericValue = { value: 1234.56 }
const formatted = numericFormatter(value, { locale: "es-ES" })
// Result: "1234,56" (uses comma as decimal separator)

// Both custom locale and decimal places
const value: NumericValue = { value: 1234.567 }
const formatted = numericFormatter(value, {
  locale: "es-ES",
  decimalPlaces: 1,
})
// Result: "1234,6"
```

## API Reference

### `numericFormatter(value, options?)`

Formats a numeric value according to the provided options.

#### Parameters

- `value` (`NumericValue`): The numeric value to format. Can be either:

  - `{ value: number }`: Direct numeric value
  - `{ value_x100: number }`: Value stored as integer × 100
  - Both formats support optional `units` and `unitsPosition` properties

- `options` (`NumericFormatterOptions`, optional): Formatting options:
  - `locale` (`string`, default: `"en-US"`): Locale for number formatting
  - `decimalPlaces` (`number`, default: `2`): Maximum number of decimal places

#### Returns

- `string`: The formatted number as a string, with units if provided

## Hooks

### `useNumericFormatter()`

A React hook that returns a formatter function configured with the current
locale from the l10n provider. This hook automatically uses the locale context,
so you don't need to pass it manually.

#### Returns

- `(value: NumericValue) => string`: A formatter function that formats numeric
  values using the current locale

#### Example

```tsx
import { useNumericFormatter } from "@/lib/numeric"

function MyComponent() {
  const formatNumeric = useNumericFormatter()

  const value = { value: 1234.56, units: "€" }
  const formatted = formatNumeric(value)
  // Result: "1234.56€" (or formatted according to current locale)

  return <div>{formatted}</div>
}
```

### `useNormalizeValueWithFormatter()`

A React hook that returns a normalize function configured with the current
locale from the l10n provider. This function converts various numeric input
formats (number, `Numeric`, or `RelaxedNumericWithFormatter`) into a
standardized `NumericWithFormatter` object.

#### Returns

- `(value: Numeric | RelaxedNumericWithFormatter) => Required<NumericWithFormatter>`:
  A normalize function that converts numeric values to a standardized format
  using the current locale

#### Example

```tsx
import { useNormalizeValueWithFormatter } from "@/lib/numeric"

function MyComponent() {
  const normalizeNumeric = useNormalizeValueWithFormatter()

  // Can accept various formats
  const normalized1 = normalizeNumeric(123.45)
  const normalized2 = normalizeNumeric({ value: 123.45, units: "€" })
  const normalized3 = normalizeNumeric({
    numericValue: { value: 123.45 },
    formatterOptions: { decimalPlaces: 1 },
  })

  // All return a NumericWithFormatter object with locale configured
  return (
    <div>
      {normalized1.formatter(
        normalized1.numericValue,
        normalized1.formatterOptions
      )}
    </div>
  )
}
```

## Type Definitions

### `NumericValue`

```ts
type NumericValue = {
  units?: string
  unitsPosition?: "prepend" | "append"
} & ({ value: number } | { value_x100: number })
```

### `NumericFormatterOptions`

```ts
type NumericFormatterOptions = {
  locale?: string
  decimalPlaces?: number
}
```

## Examples

### Currency Formatting

```tsx
// Euro
const euro: NumericValue = { value: 1234.56, units: "€" }
numericFormatter(euro) // "1234.56€"

// Dollar (prepended)
const dollar: NumericValue = {
  value: 1234.56,
  units: "$",
  unitsPosition: "prepend",
}
numericFormatter(dollar) // "$1234.56"
```

### Percentage Formatting

```tsx
const percentage: NumericValue = {
  value: 45.67,
  units: "%",
}
numericFormatter(percentage) // "45.67%"
```

### Measurement Formatting

```tsx
const weight: NumericValue = {
  value: 12.5,
  units: "kg",
}
numericFormatter(weight) // "12.5kg"
```

### International Formatting

```tsx
// Spanish locale (comma as decimal separator)
const spanishValue: NumericValue = { value: 1234.56 }
numericFormatter(spanishValue, { locale: "es-ES" })
// Result: "1234,56"

// German locale
const germanValue: NumericValue = { value: 1234.56 }
numericFormatter(germanValue, { locale: "de-DE" })
// Result: "1234,56"
```

## Notes

- The formatter uses `Intl.NumberFormat` internally, which provides reliable
  internationalization support
- Grouping separators (thousands separators) are disabled by default
  (`useGrouping: false`)
- Values are rounded to the specified number of decimal places
- The `value_x100` format automatically divides by 100 before formatting
