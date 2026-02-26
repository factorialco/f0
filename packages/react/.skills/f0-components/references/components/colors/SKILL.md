---
name: f0-colors
description: Guidelines and tokens for applying semantic and bare colors in the F0 design system. Use when styling components to ensure visual consistency, theme support, and accessibility.
---

## Overview

F0 utilizes a token-based color system categorized into **Semantic Tokens** and **Bare Colors**. Semantic tokens are the primary method for styling, as they describe the intent (e.g., "warning", "accent") rather than a specific hex value.

## Semantic Tokens

Semantic tokens are applied via TailwindCSS classes. The naming convention follows the pattern: `[property]-f1-[token-name]`.

### Token Categories

- **Foreground (Text)**: Used for all text elements.
- **Background**: Used for surfaces, containers, and states.
- **Border**: Used for dividers and component outlines.
- **Icon**: Specifically for SVG icon fills.

### Available Semantic Classes

- **text-f1-foreground** (optional): `string` - Primary text color for content.
- **text-f1-foreground-secondary** (optional): `string` - Secondary text color for less prominent content.
- **text-f1-foreground-inverse** (optional): `string` - Inverted text color for use on dark/high-contrast backgrounds.
- **text-f1-foreground-disabled** (optional): `string` - Indicates inactivity or a disabled state.
- **text-f1-foreground-accent** (optional): `string` - Draws attention with a prominent brand color.
- **text-f1-foreground-critical** (optional): `string` - Indicates errors or critical information.
- **bg-f1-background** (optional): `string` - Primary background color for main content areas.
- **bg-f1-background-secondary** (optional): `string` - Secondary background for grouping or nesting.
- **bg-f1-background-warning** (optional): `string` - Background for warning alerts or potential issues.
- **bg-f1-background-positive** (optional): `string` - Background for success or confirmation states.
- **border-f1-border** (optional): `string` - Primary border color for content separation.
- **icon-f1-icon** (optional): `string` - Default icon color for general use.

## Usage Examples

### Applying Semantic Tokens
Always prefer Tailwind classes for standard UI elements.

```tsx
import React from 'react';

export const Card = () => (
  <div className="bg-f1-background-secondary border-f1-border border p-4 rounded">
    <h2 className="text-f1-foreground-accent">Alert</h2>
    <p className="text-f1-foreground-secondary">
      This is a secondary description using semantic tokens.
    </p>
  </div>
);
```

### Using Bare Colors (Escape Hatch)
Avoid using bare colors directly. They are intended for edge cases where semantic tokens do not fit. They are available as CSS variables and must be applied via the `style` attribute.

```tsx
export const CustomElement = () => (
  <div 
    style={{ backgroundColor: 'var(--neutral-50)', color: 'var(--warning-70)' }}
    className="p-2"
  >
    Custom Styled Content
  </div>
);
```

## Best Practices

- **Do** use semantic tokens for 99% of use cases to ensure automatic dark mode and theme support.
- **Do** use `text-f1-foreground-inverse` when placing text on dark backgrounds.
- **Don't** use bare colors like `--neutral-50` unless a specific design requirement cannot be met by semantic tokens.
- **Don't** hardcode hex, RGB, or HSL values.

## Related Skills

- For Icon implementation and styling, see the skill in ./references/icons.md
- For Layout and spacing foundations, see the skill in ./references/spacing.md