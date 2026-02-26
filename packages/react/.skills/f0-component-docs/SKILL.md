---
name: f0-component-docs
description: Use when creating or generating MDX documentation for f0 design system components in Storybook. Creates comprehensive MDX files with Overview, Guidelines, Code, and Examples sections.
---

# f0 Component Documentation Skill

## When to Apply

- User asks to create or generate documentation for an f0 component
- User wants to add Storybook docs for a design system component
- User needs to convert autodocs to manual MDX documentation
- User asks to document a component in `packages/react/src/components/`

## Overview

This skill generates comprehensive MDX documentation for f0 design system components. It follows a 4-phase process: analyze the component source, generate an MDX file with Overview/Guidelines/Code/Examples sections, update the stories file to remove autodocs, and verify the sidebar structure.

## Routing

| What you need | Reference |
|---|---|
| Full MDX template with all sections | [mdx-template.md](./references/mdx-template.md) |
| Step-by-step workflow and validation checklist | [workflow-and-validation.md](./references/workflow-and-validation.md) |
| Import examples, table templates, content guidelines | [imports-and-tables.md](./references/imports-and-tables.md) |

## Quick Start

### 1. File to Create

```
__stories__/[StoriesFilename].mdx
```

The MDX filename MUST match the stories filename (without `.stories`):
- `F0Button.stories.tsx` -> `F0Button.mdx`
- `Card.stories.tsx` -> `Card.mdx`

### 2. Stories File Changes

```tsx
// 1. Remove "autodocs" from meta tags
tags: ["stable"]; // was: ["autodocs", "stable"]

// 2. Add "!dev" to ALL stories
export const Default: Story = {
  tags: ["!dev"],
  // ...
};
```

### 3. MDX Meta Tag

```mdx
<Meta of={Stories} />  // ✅ Correct - attaches to stories
<Meta title="..." />   // ❌ Wrong - creates separate page
```

### 4. Essential Imports

```tsx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks";
import * as Stories from "./ComponentName.stories";
import { DoDonts } from "@/lib/storybook-utils/do-donts";
import { DocsNav } from "@/lib/storybook-utils/docs-nav";
```

## Storybook Configuration

### How Documentation Works

Two ways to create documentation:

1. **Autodocs** (automatic): Add `tags: ["autodocs"]`
2. **MDX** (manual): Create `.mdx` file with `<Meta of={Stories} />`

**You cannot have both.** If you have an MDX file with `<Meta of={Stories} />`, REMOVE `"autodocs"` from tags.

### Title Prefix System

In `.storybook/main.ts`, directories have automatic prefixes:

```typescript
stories: [
  { directory: "../src/components", titlePrefix: "Components" },
  { directory: "../src/experimental", titlePrefix: "Components" },
];
```

## Validation Checklist

- [ ] MDX filename matches stories file
- [ ] Uses `<Meta of={Stories} />` (NOT `<Meta title="..." />`)
- [ ] `"autodocs"` removed from stories meta
- [ ] Stories have `tags: ["!dev"]` to hide from sidebar
- [ ] All four sections: Overview, Guidelines, Code, Examples
- [ ] `<DocsNav />` at top after title
- [ ] Props section has Canvas AND Controls
- [ ] At least 3 code examples
- [ ] DoDonts in Guidelines
- [ ] Keyboard table in Accessibility
