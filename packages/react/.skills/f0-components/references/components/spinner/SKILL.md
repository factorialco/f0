---
name: spinner
description: Visual indicator for indeterminate loading states. Use when content is being fetched or a process is running and the wait time is unknown.
---

## Overview
The Spinner component provides a consistent visual cue that the system is processing an action or loading data. It is designed for indeterminate wait times where a specific progress percentage cannot be calculated.

## Props
- **size** (optional): `'sm' | 'md' | 'lg'` - Determines the dimensions of the spinner. Defaults to `md`.
- **color** (optional): `string` - Sets the stroke color of the spinner (e.g., 'primary', 'secondary', 'white'). Defaults to `primary`.
- **label** (optional): `string` - Accessible text for screen readers. Defaults to "Loading...".
- **className** (optional): `string` - Additional CSS classes for custom styling or layout positioning.

## Usage Examples

### Basic Usage
```tsx
import { Spinner } from './Spinner';

export const DefaultLoading = () => (
  <div className="flex justify-center p-8">
    <Spinner size="md" />
  </div>
);
```

### Inside a Container with Label
```tsx
import { Spinner } from './Spinner';

export const DataLoading = () => (
  <div className="flex flex-col items-center gap-2">
    <Spinner size="lg" color="secondary" label="Loading account details..." />
    <span className="text-sm text-gray-500">Loading account details...</span>
  </div>
);
```

## Variants
- **Small (sm)**: Best for use inside inline elements like buttons or small list items.
- **Medium (md)**: The standard size for general content blocks and cards.
- **Large (lg)**: Used for high-level section loading or full-page initial states.

## Best Practices
- **Indeterminate Only**: Only use the Spinner when the duration of the task is unknown. For tasks with a known duration, use a progress bar.
- **Centering**: Always center the spinner within the container it represents to avoid visual confusion.
- **Avoid Flickering**: If an operation is expected to take less than 300ms, consider delaying the appearance of the spinner to prevent UI flickering.
- **Context**: When loading a specific part of a page, place the spinner directly in that container rather than covering the whole screen.

## Accessibility
- The component includes `role="status"` and `aria-live="polite"` to ensure screen readers announce the loading state.
- Always provide a descriptive `label` prop if the visual context doesn't clearly imply what is being loaded.

## Related Skills
- For integrating loading states into buttons, see the skill in ./references/button.md
- For full-page loading overlays, see the skill in ./references/loading-overlay.md
- For skeleton screen patterns, see the skill in ./references/skeleton.md