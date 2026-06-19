# Imports, Table Templates, and Content Guidelines

## Required Storybook Imports

```tsx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks";
import * as Stories from "./F0ComponentName.stories";
```

## Utility Components

```tsx
import { DocsNav } from "@/lib/storybook-utils/docs-nav";
import { DoDonts } from "@/lib/storybook-utils/do-donts";
```

## DocsNav Component

Creates compact horizontal navigation:

```tsx
<DocsNav />  // Default: Overview . Guidelines . Code . Examples

// Custom sections
<DocsNav items={[
  { label: "Overview", href: "#overview" },
  { label: "API", href: "#api" },
]} />
```

## HTML Tables with Unstyled

Use `<Unstyled>` wrapper with native HTML `<table>`:

```tsx
<Unstyled>
  <table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
    <thead>
      <tr>
        <th className="text-left">Column 1</th>
        <th className="text-left">Column 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>value</code></td>
        <td>Description</td>
      </tr>
    </tbody>
  </table>
</Unstyled>
```

### Anatomy Table

```tsx
<Unstyled>
<table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
  <thead>
    <tr>
      <th className="text-left">Element</th>
      <th className="text-left">Description</th>
      <th className="text-left">Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Container</code></td>
      <td>Main wrapper</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>
</Unstyled>
```

### Variants Table

```tsx
<Unstyled>
<table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
  <thead>
    <tr>
      <th className="text-left">Variant</th>
      <th className="text-left">Description</th>
      <th className="text-left">When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>default</code></td>
      <td>Primary style</td>
      <td>Main actions</td>
    </tr>
  </tbody>
</table>
</Unstyled>
```

### Props Table

```tsx
<Unstyled>
<table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
  <thead>
    <tr>
      <th className="text-left">Prop</th>
      <th className="text-left">Type</th>
      <th className="text-left">Default</th>
      <th className="text-left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label</code> <span className="text-red-500">*</span></td>
      <td><code>string</code></td>
      <td>-</td>
      <td>Button text</td>
    </tr>
  </tbody>
</table>
</Unstyled>
```

### Keyboard Table

```tsx
<Unstyled>
<table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
  <thead>
    <tr>
      <th className="text-left">Key</th>
      <th className="text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><kbd>Enter</kbd></td>
      <td>Activate button</td>
    </tr>
  </tbody>
</table>
</Unstyled>
```

## DoDonts Component

```tsx
<DoDonts
  do={{
    description: "Correct usage example",
  }}
  dont={{
    description: "Incorrect usage example",
  }}
/>
```

## Canvas Component

```tsx
<Canvas of={Stories.Default} />
```

## Controls Component

```tsx
<Controls of={Stories.Default} />
```

## Content Guidelines

### Language and Tone

- **English only**
- **Concise**: Brief and direct
- **Imperative** for instructions: "Use", "Avoid", "Ensure"
- **Present tense** for descriptions: "Displays", "Provides"

### Document Structure

4 main sections with DocsNav at top:

1. **Overview**: Purpose, Anatomy, Variants, States
2. **Guidelines**: When to use/not use, DoDonts, Accessibility
3. **Code**: Import, Props with Controls
4. **Examples**: Code examples with Canvas

### Documentation Standards

| Section    | Must Include                                          |
|------------|-------------------------------------------------------|
| Overview   | Purpose (4+ items), Anatomy table, Variants table     |
| Guidelines | When to use, When NOT to use, DoDonts, Keyboard table |
| Code       | Import statement, Controls, Props table               |
| Examples   | 3+ examples with Canvas and code snippets             |

### Research Sources for Guidelines

- Material Design (Google)
- Carbon Design System (IBM)
- Polaris (Shopify)
- Atlassian Design System
- Primer (GitHub)
