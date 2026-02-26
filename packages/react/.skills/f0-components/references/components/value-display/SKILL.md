---
name: value-display
description: A semantic component for rendering various data types (Amount, Date, Person, Status, etc.) with consistent styling and context-aware alignment. Use to display property values in tables, lists, or detail views to ensure a homogeneous user experience.
---
## Overview

`ValueDisplay` abstracts the rendering logic for different data types. It ensures that values like numbers are right-aligned in tables but left-aligned in lists, and handles complex visualizations like percentage charts or avatar lists automatically based on the provided `type`.

## Props

- **type** (required): `'text' | 'longText' | 'number' | 'date' | 'amount' | 'avatarList' | 'status' | 'person' | 'company' | 'team' | 'tag' | 'dotTag' | 'tagList' | 'icon' | 'file' | 'folder' | 'percentage' | 'country' | 'alertTag' | 'progressBar'` - The semantic type of the value to render.
- **value** (required): `any` - The raw data. Can be a primitive (string, number) or a specific object structure depending on the `type`.
- **options** (optional): `object` - Configuration for specific types (e.g., currency code, decimal places, line limits).
- **placeholder** (optional): `string` - Text to display when the value is null or undefined.
- **label** (optional): `string` - Custom label for types that support it (e.g., `icon`, `country`, `progressBar`).
- **hideLabel** (optional): `boolean` - Visually hides the label while maintaining accessibility (primarily for `icon` type).
- **full** (optional): `boolean` - If true, disables truncation for `longText`.

## Usage Examples

### Basic Text and Numbers
```tsx
// Simple text
<ValueDisplay type="text" value="Hello World" />

// Number with units (right-aligned in tables)
<ValueDisplay 
  type="number" 
  value={1500} 
  options={{ units: 'kg', precision: 2 }} 
/>
```

### Financial and Progress Data
```tsx
// Amount with currency
<ValueDisplay 
  type="amount" 
  value={1250.50} 
  options={{ currency: 'USD' }} 
/>

// Percentage with chart visualization
<ValueDisplay type="percentage" value={75} />

// Progress Bar
<ValueDisplay 
  type="progressBar" 
  value={60} 
  options={{ color: 'blue', maxValue: 100 }} 
/>
```

### Entities and Avatars
```tsx
// Person with badge
<ValueDisplay 
  type="person" 
  value={{ 
    name: 'Jane Smith', 
    avatar: 'path/to/img.png', 
    badge: 'Manager' 
  }} 
/>

// Avatar List with overflow handling
<ValueDisplay 
  type="avatarList" 
  value={[user1, user2, user3]} 
  options={{ max: 2 }} 
/>
```

### Status and Tags
```tsx
// Status tag
<ValueDisplay type="status" value="active" />

// Dot Tag (color indicator)
<ValueDisplay type="dotTag" value={{ label: 'High Priority', color: 'red' }} />
```

## Specialized Types

- **Long Text**: Automatically uses ellipsis after 3 lines and provides a tooltip. For the underlying truncation logic, see the skill in ./references/one-ellipsis.md.
- **Date**: Handles `Date` objects or formatted strings.
- **Country**: Renders a flag avatar and translates the country name based on i18n context.
- **File/Folder**: Renders appropriate icons alongside the name.

## Best Practices

- **Use Semantic Types**: Always choose the most specific `type` (e.g., use `amount` instead of `number` for currency) to benefit from built-in formatting and alignment.
- **Table Alignment**: Remember that `number` and `amount` types automatically right-align when rendered within table cells.
- **Accessibility**: When using `hideLabel` with the `icon` type, ensure the `value` or `label` prop contains a meaningful description for screen readers.

## Related Skills

- For the `OneEllipsis` component used in `longText`, see the skill in ./references/one-ellipsis.md.
- For individual `Avatar` configurations, see the skill in ./references/avatar.md.
- For standalone `Tag` or `Status` components, see the skill in ./references/tag.md.

## Sub-components

- **Alert Tag**: See ./references/alert-tag.md
- **Amount**: See ./references/amount.md
- **Avatar List**: See ./references/avatar-list.md
- **Company**: See ./references/company.md
- **Country**: See ./references/country.md
- **Date**: See ./references/date.md
- **Dot Tag**: See ./references/dot-tag.md
- **File**: See ./references/file.md
- **Folder**: See ./references/folder.md
- **Icon**: See ./references/icon.md
- **Long Text**: See ./references/long-text.md
- **Number**: See ./references/number.md
- **Percentage**: See ./references/percentage.md
- **Person**: See ./references/person.md
- **ProgressBar**: See ./references/progressbar.md
- **Status**: See ./references/status.md
- **Tag**: See ./references/tag.md
- **Tag List**: See ./references/tag-list.md
- **Team**: See ./references/team.md
- **Text**: See ./references/text.md