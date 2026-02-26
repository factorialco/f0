---
name: numeric-formatting
description: Format and display numeric values with units, locales, and precision control. Use for financial data, measurements, and large numbers to ensure consistent formatting and avoid floating-point precision issues.
---

## Overview
The Numeric system provides a flexible way to represent and format numeric values. It uses a specialized `NumericValue` type that supports both direct values and `value_x100` (integers multiplied by 100) to maintain precision in financial or sensitive calculations.

## Types and API

### NumericValue
The core data structure for numeric data.
- **value** (optional): `number` - Direct numeric value.
- **value_x100** (optional): `number` - Integer representation (value * 100) to avoid floating-point errors.
- **unit** (optional): `string` - Unit symbol or string (e.g., "$", "kg", "%").

### NumericFormatter Options
Options passed to the `numericFormatter` function to control output.
- **unit** (optional): `string` - Overrides or provides a unit to append/prepend.
- **locale** (optional): `string` - Locale string (e.g., "en-US", "de-DE") for decimal and grouping separators.
- **maxDecimalPlaces** (optional): `number` - Maximum number of decimal places to display; handles rounding.
- **compact** (optional): `boolean` - Enables compact notation (e.g., "1.2M" instead of "1,200,000").
- **emptyPlaceholder** (optional): `string` - String to display when the value is null or undefined.

## Usage Examples

### Basic Formatting
```typescript
import { numericFormatter } from './numeric';

// Standard formatting
const result = numericFormatter({ value: 1234.567 }, { maxDecimalPlaces: 2 });
// Output: "1,234.57"
```

### Financial Precision (value_x100)
Always use `value_x100` for currency to prevent rounding errors inherent in JavaScript numbers.
```typescript
const price = numericFormatter(
  { value_x100: 10050 }, 
  { unit: '$', locale: 'en-US' }
);
// Output: "$100.50"
```

### Specialized Formats
```typescript
// Percentage
numericFormatter({ value: 0.85 }, { unit: '%' }); // "0.85%"

// Compact Large Numbers
numericFormatter({ value: 1500000 }, { compact: true }); // "1.5M"

// Custom Locale
numericFormatter({ value: 1000.5 }, { locale: 'de-DE' }); // "1.000,5"
```

## Best Practices
- **Use value_x100 for Money**: Store and pass financial values as integers multiplied by 100 to ensure mathematical accuracy.
- **Consistent Locales**: Ensure the `locale` prop matches the user's global settings for a consistent UI experience.
- **Meaningful Placeholders**: Use `emptyPlaceholder` (e.g., "—" or "N/A") to prevent empty gaps in data tables or dashboards.
- **Limit Decimals**: Use `maxDecimalPlaces` to prevent long trailing decimals from breaking layouts.

## Related Skills
For data visualization patterns using these formats, see the skill in ./references/data-display-patterns.md.