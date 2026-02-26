---
name: f0-components
description: Use when you need to understand f0 component APIs, props, usage patterns, and best practices. Covers 92 components with detailed documentation.
---

# f0 Components Reference

## When to Apply

Use this skill when you need to:
- Understand what components are available in f0
- Learn component props, types, and usage patterns
- Choose the right component for a specific use case
- See code examples and best practices

## Overview

This skill contains detailed documentation for 92 f0 components, organized by category.

### Imports

```tsx
// Production components
import { F0Button, F0Alert, F0Card, F0Box } from "@factorialco/f0-react";

// Experimental components
import { F0Callout } from "@factorialco/f0-react/dist/experimental";

// Icons
import { Calendar, User, Settings } from "@factorialco/f0-icons";
```

## Routing

| What you need | Reference |
|---|---|
| Full component catalog | [components/index.md](./references/components/index.md) |
| Individual component docs | [components/{name}/SKILL.md](./references/components/) |

## Component Categories

### Layout & Structure
`applicationframe`, `box`, `card`, `homelayout`, `layout`, `layout-system`, `scrollarea`, `sidebar`, `standardlayout`, `twocolumnlayout`

### Navigation
`actionbar`, `navigation`, `pagination`, `datenavigator`

### Forms & Inputs
`button`, `buttondropdown`, `buttontoggle`, `buttontogglegroup`, `checkbox`, `datepicker`, `dropdown`, `entityselect`, `filterpicker`, `form`, `input`, `numeric`, `select`, `switch`, `togglegroup`

### Data Display
`avatars`, `badge`, `bignumber`, `charts`, `counter`, `list`, `table`, `tags`, `text`, `typography`, `value-display`, `virtuallist`

### Feedback
`alert`, `banners`, `emptystate`, `spinner`, `tooltip`

### Overlays
`overlays` (includes modal, drawer, popover, etc.)

### AI Components
`ai`, `aibutton`, `cocreationform`

### Specialized
`calendar`, `carousel`, `changelog`, `dashboard`, `inbox`, `kanban`, `profile`, `reactions`, `resource-header`, `rich-text`, `widget`, `widgets`

### Design Tokens
`borders`, `colors`, `icons`, `shadows`, `spacing`

## How to Use

1. Browse [components/index.md](./references/components/index.md) for the full list
2. Navigate to `components/{component-name}/SKILL.md` for detailed documentation
3. Each component doc includes:
   - Purpose and when to use
   - Props with types and descriptions
   - Import statements
   - Code examples
   - Variants and combinations

## Related Skills

- `f0-component-docs` - Generate MDX documentation for f0 components
- `f0-component-patterns` - Architecture, context, styling patterns
- `f0-storybook-stories` - Story file patterns
